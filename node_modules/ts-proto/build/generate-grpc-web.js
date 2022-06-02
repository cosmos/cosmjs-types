"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGrpcWebMisc = exports.generateGrpcMethodDesc = exports.generateGrpcServiceDesc = exports.generateGrpcClientImpl = void 0;
const types_1 = require("./types");
const ts_poet_1 = require("ts-poet");
const utils_1 = require("./utils");
const grpc = ts_poet_1.imp('grpc@@improbable-eng/grpc-web');
const share = ts_poet_1.imp('share@rxjs/operators');
const take = ts_poet_1.imp('take@rxjs/operators');
const BrowserHeaders = ts_poet_1.imp('BrowserHeaders@browser-headers');
const Observable = ts_poet_1.imp('Observable@rxjs');
/** Generates a client that uses the `@improbable-web/grpc-web` library. */
function generateGrpcClientImpl(ctx, fileDesc, serviceDesc) {
    const chunks = [];
    // Define the FooServiceImpl class
    chunks.push(ts_poet_1.code `
    export class ${serviceDesc.name}ClientImpl implements ${serviceDesc.name} {
  `);
    // Create the constructor(rpc: Rpc)
    chunks.push(ts_poet_1.code `
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  `);
    chunks.push(ts_poet_1.code `this.rpc = rpc;`);
    // Bind each FooService method to the FooServiceImpl class
    for (const methodDesc of serviceDesc.method) {
        utils_1.assertInstanceOf(methodDesc, utils_1.FormattedMethodDescriptor);
        chunks.push(ts_poet_1.code `this.${methodDesc.formattedName} = this.${methodDesc.formattedName}.bind(this);`);
    }
    chunks.push(ts_poet_1.code `}`);
    // Create a method for each FooService method
    for (const methodDesc of serviceDesc.method) {
        chunks.push(generateRpcMethod(ctx, serviceDesc, methodDesc));
    }
    chunks.push(ts_poet_1.code `}`);
    return ts_poet_1.joinCode(chunks, { trim: false, on: '\n' });
}
exports.generateGrpcClientImpl = generateGrpcClientImpl;
/** Creates the RPC methods that client code actually calls. */
function generateRpcMethod(ctx, serviceDesc, methodDesc) {
    utils_1.assertInstanceOf(methodDesc, utils_1.FormattedMethodDescriptor);
    const requestMessage = types_1.rawRequestType(ctx, methodDesc);
    const inputType = types_1.requestType(ctx, methodDesc, true);
    const returns = types_1.responsePromiseOrObservable(ctx, methodDesc);
    if (methodDesc.clientStreaming) {
        return ts_poet_1.code `
    ${methodDesc.formattedName}(
      request: ${inputType},
      metadata?: grpc.Metadata,
    ): ${returns} {
      throw new Error('ts-proto does not yet support client streaming!');
    }
  `;
    }
    const method = methodDesc.serverStreaming ? 'invoke' : 'unary';
    return ts_poet_1.code `
    ${methodDesc.formattedName}(
      request: ${inputType},
      metadata?: grpc.Metadata,
    ): ${returns} {
      return this.rpc.${method}(
        ${methodDescName(serviceDesc, methodDesc)},
        ${requestMessage}.fromPartial(request),
        metadata,
      );
    }
  `;
}
/** Creates the service descriptor that grpc-web needs at runtime. */
function generateGrpcServiceDesc(fileDesc, serviceDesc) {
    return ts_poet_1.code `
    export const ${serviceDesc.name}Desc = {
      serviceName: "${utils_1.maybePrefixPackage(fileDesc, serviceDesc.name)}",
    };
  `;
}
exports.generateGrpcServiceDesc = generateGrpcServiceDesc;
/**
 * Creates the method descriptor that grpc-web needs at runtime to make `unary` calls.
 *
 * Note that we take a few liberties in the implementation give we don't 100% match
 * what grpc-web's existing output is, but it works out; see comments in the method
 * implementation.
 */
function generateGrpcMethodDesc(ctx, serviceDesc, methodDesc) {
    const inputType = types_1.requestType(ctx, methodDesc);
    const outputType = types_1.responseType(ctx, methodDesc);
    // grpc-web expects this to be a class, but the ts-proto messages are just interfaces.
    //
    // That said, grpc-web's runtime doesn't really use this (at least so far for what ts-proto
    // does), so we could potentially set it to `null!`.
    //
    // However, grpc-web does want messages to have a `.serializeBinary()` method, which again
    // due to the class-less nature of ts-proto's messages, we don't have. So we appropriate
    // this `requestType` as a placeholder for our GrpcWebImpl to Object.assign-in this request
    // message's `serializeBinary` method into the data before handing it off to grpc-web.
    //
    // This makes our data look enough like an object/class that grpc-web works just fine.
    const requestFn = ts_poet_1.code `{
    serializeBinary() {
      return ${inputType}.encode(this).finish();
    },
  }`;
    // grpc-web also expects this to be a class, but with a static `deserializeBinary` method to
    // create new instances of messages. We again don't have an actual class constructor/symbol
    // to pass to it, but we can make up a lambda that has a `deserializeBinary` that does what
    // we want/what grpc-web's runtime needs.
    const responseFn = ts_poet_1.code `{
    deserializeBinary(data: Uint8Array) {
      return { ...${outputType}.decode(data), toObject() { return this; } };
    }
  }`;
    return ts_poet_1.code `
    export const ${methodDescName(serviceDesc, methodDesc)}: UnaryMethodDefinitionish = {
      methodName: "${methodDesc.name}",
      service: ${serviceDesc.name}Desc,
      requestStream: false,
      responseStream: ${methodDesc.serverStreaming ? 'true' : 'false'},
      requestType: ${requestFn} as any,
      responseType: ${responseFn} as any,
    };
  `;
}
exports.generateGrpcMethodDesc = generateGrpcMethodDesc;
function methodDescName(serviceDesc, methodDesc) {
    return `${serviceDesc.name}${methodDesc.name}Desc`;
}
/** Adds misc top-level definitions for grpc-web functionality. */
function addGrpcWebMisc(ctx, hasStreamingMethods) {
    const { options } = ctx;
    const chunks = [];
    chunks.push(ts_poet_1.code `
    interface UnaryMethodDefinitionishR extends ${grpc}.UnaryMethodDefinition<any, any> { requestStream: any; responseStream: any; }
  `);
    chunks.push(ts_poet_1.code `type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;`);
    chunks.push(generateGrpcWebRpcType(options.returnObservable, hasStreamingMethods));
    chunks.push(generateGrpcWebImpl(options.returnObservable, hasStreamingMethods));
    return ts_poet_1.joinCode(chunks, { on: '\n\n' });
}
exports.addGrpcWebMisc = addGrpcWebMisc;
/** Makes an `Rpc` interface to decouple from the low-level grpc-web `grpc.invoke and grpc.unary`/etc. methods. */
function generateGrpcWebRpcType(returnObservable, hasStreamingMethods) {
    const chunks = [];
    chunks.push(ts_poet_1.code `interface Rpc {`);
    const wrapper = returnObservable ? Observable : 'Promise';
    chunks.push(ts_poet_1.code `
    unary<T extends UnaryMethodDefinitionish>(
      methodDesc: T,
      request: any,
      metadata: grpc.Metadata | undefined,
    ): ${wrapper}<any>;
  `);
    if (hasStreamingMethods) {
        chunks.push(ts_poet_1.code `
      invoke<T extends UnaryMethodDefinitionish>(
        methodDesc: T,
        request: any,
        metadata: grpc.Metadata | undefined,
      ): ${Observable}<any>;
    `);
    }
    chunks.push(ts_poet_1.code `}`);
    return ts_poet_1.joinCode(chunks, { on: '\n' });
}
/** Implements the `Rpc` interface by making calls using the `grpc.unary` method. */
function generateGrpcWebImpl(returnObservable, hasStreamingMethods) {
    const options = ts_poet_1.code `
    {
      transport?: grpc.TransportFactory,
      ${hasStreamingMethods ? 'streamingTransport?: grpc.TransportFactory,' : ``}
      debug?: boolean,
      metadata?: grpc.Metadata,
    }
  `;
    const chunks = [];
    chunks.push(ts_poet_1.code `
    export class GrpcWebImpl {
      private host: string;
      private options: ${options};
      
      constructor(host: string, options: ${options}) {
        this.host = host;
        this.options = options;
      }
  `);
    if (returnObservable) {
        chunks.push(createObservableUnaryMethod());
    }
    else {
        chunks.push(createPromiseUnaryMethod());
    }
    if (hasStreamingMethods) {
        chunks.push(createInvokeMethod());
    }
    chunks.push(ts_poet_1.code `}`);
    return ts_poet_1.joinCode(chunks, { trim: false });
}
function createPromiseUnaryMethod() {
    return ts_poet_1.code `
    unary<T extends UnaryMethodDefinitionish>(
      methodDesc: T,
      _request: any,
      metadata: grpc.Metadata | undefined
    ): Promise<any> {
      const request = { ..._request, ...methodDesc.requestType };
      const maybeCombinedMetadata =
        metadata && this.options.metadata
          ? new ${BrowserHeaders}({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
          : metadata || this.options.metadata;
      return new Promise((resolve, reject) => {
      ${grpc}.unary(methodDesc, {
          request,
          host: this.host,
          metadata: maybeCombinedMetadata,
          transport: this.options.transport,
          debug: this.options.debug,
          onEnd: function (response) {
            if (response.status === grpc.Code.OK) {
              resolve(response.message);
            } else {
              const err = new Error(response.statusMessage) as any;
              err.code = response.status;
              err.metadata = response.trailers;
              reject(err);
            }
          },
        });
      });
    }
  `;
}
function createObservableUnaryMethod() {
    return ts_poet_1.code `
    unary<T extends UnaryMethodDefinitionish>(
      methodDesc: T,
      _request: any,
      metadata: grpc.Metadata | undefined
    ): ${Observable}<any> {
      const request = { ..._request, ...methodDesc.requestType };
      const maybeCombinedMetadata =
        metadata && this.options.metadata
          ? new ${BrowserHeaders}({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
          : metadata || this.options.metadata;
      return new Observable(observer => {
        ${grpc}.unary(methodDesc, {
          request,
          host: this.host,
          metadata: maybeCombinedMetadata,
          transport: this.options.transport,
          debug: this.options.debug,
          onEnd: (next) => {
            if (next.status !== 0) {
              observer.error({ code: next.status, message: next.statusMessage });
            } else {
              observer.next(next.message as any);
              observer.complete();
            }
          },
        });
      }).pipe(${take}(1));
    } 
  `;
}
function createInvokeMethod() {
    return ts_poet_1.code `
    invoke<T extends UnaryMethodDefinitionish>(
      methodDesc: T,
      _request: any,
      metadata: grpc.Metadata | undefined
    ): ${Observable}<any> {
      // Status Response Codes (https://developers.google.com/maps-booking/reference/grpc-api/status_codes)
      const upStreamCodes = [2, 4, 8, 9, 10, 13, 14, 15]; 
      const DEFAULT_TIMEOUT_TIME: number = 3_000;
      const request = { ..._request, ...methodDesc.requestType };
      const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new ${BrowserHeaders}({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
        : metadata || this.options.metadata;
      return new Observable(observer => {
        const upStream = (() => {
          const client = ${grpc}.invoke(methodDesc, {
            host: this.host,
            request,
            transport: this.options.streamingTransport || this.options.transport,
            metadata: maybeCombinedMetadata,
            debug: this.options.debug,
            onMessage: (next) => observer.next(next),
            onEnd: (code: ${grpc}.Code, message: string) => {
              if (code === 0) {
                observer.complete();
              } else if (upStreamCodes.includes(code)) {
                setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
              } else {
                observer.error(new Error(\`Error \${code} \${message}\`));
              }
            },
          });
          observer.add(() => client.close());
        });
        upStream();
      }).pipe(${share}());
    }
  `;
}
