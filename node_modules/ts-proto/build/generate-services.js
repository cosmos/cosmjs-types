"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDataLoaderOptionsType = exports.generateDataLoadersType = exports.generateRpcType = exports.generateServiceClientImpl = exports.generateService = void 0;
const ts_poet_1 = require("ts-poet");
const types_1 = require("./types");
const utils_1 = require("./utils");
const sourceInfo_1 = require("./sourceInfo");
const main_1 = require("./main");
const hash = ts_poet_1.imp('hash*object-hash');
const dataloader = ts_poet_1.imp('DataLoader*dataloader');
const Reader = ts_poet_1.imp('Reader@protobufjs/minimal');
/**
 * Generates an interface for `serviceDesc`.
 *
 * Some RPC frameworks (i.e. Twirp) can use the same interface, i.e.
 * `getFoo(req): Promise<res>` for the client-side and server-side,
 * which is the intent for this interface.
 *
 * Other RPC frameworks (i.e. NestJS) that need different client-side
 * vs. server-side code/interfaces are handled separately.
 */
function generateService(ctx, fileDesc, sourceInfo, serviceDesc) {
    var _a;
    const { options, utils } = ctx;
    const chunks = [];
    utils_1.maybeAddComment(sourceInfo, chunks, (_a = serviceDesc.options) === null || _a === void 0 ? void 0 : _a.deprecated);
    const maybeTypeVar = options.context ? `<${main_1.contextTypeVar}>` : '';
    chunks.push(ts_poet_1.code `export interface ${serviceDesc.name}${maybeTypeVar} {`);
    serviceDesc.method.forEach((methodDesc, index) => {
        var _a;
        utils_1.assertInstanceOf(methodDesc, utils_1.FormattedMethodDescriptor);
        const info = sourceInfo.lookup(sourceInfo_1.Fields.service.method, index);
        utils_1.maybeAddComment(info, chunks, (_a = methodDesc.options) === null || _a === void 0 ? void 0 : _a.deprecated);
        const params = [];
        if (options.context) {
            params.push(ts_poet_1.code `ctx: Context`);
        }
        // the grpc-web clients auto-`fromPartial` the input before handing off to grpc-web's
        // serde runtime, so it's okay to accept partial results from the client
        const partialInput = options.outputClientImpl === 'grpc-web';
        const inputType = types_1.requestType(ctx, methodDesc, partialInput);
        params.push(ts_poet_1.code `request: ${inputType}`);
        // Use metadata as last argument for interface only configuration
        if (options.outputClientImpl === 'grpc-web') {
            // We have to use grpc.Metadata where grpc will come from @improbable-eng
            params.push(ts_poet_1.code `metadata?: grpc.Metadata`);
        }
        else if (options.addGrpcMetadata) {
            const Metadata = ts_poet_1.imp('Metadata@@grpc/grpc-js');
            const q = options.addNestjsRestParameter ? '' : '?';
            params.push(ts_poet_1.code `metadata${q}: ${Metadata}`);
        }
        else if (options.metadataType) {
            const Metadata = ts_poet_1.imp(options.metadataType);
            params.push(ts_poet_1.code `metadata?: ${Metadata}`);
        }
        if (options.addNestjsRestParameter) {
            params.push(ts_poet_1.code `...rest: any`);
        }
        chunks.push(ts_poet_1.code `${methodDesc.formattedName}(${ts_poet_1.joinCode(params, { on: ',' })}): ${types_1.responsePromiseOrObservable(ctx, methodDesc)};`);
        // If this is a batch method, auto-generate the singular version of it
        if (options.context) {
            const batchMethod = types_1.detectBatchMethod(ctx, fileDesc, serviceDesc, methodDesc);
            if (batchMethod) {
                chunks.push(ts_poet_1.code `${batchMethod.singleMethodName}(
          ctx: Context,
          ${utils_1.singular(batchMethod.inputFieldName)}: ${batchMethod.inputType},
        ): Promise<${batchMethod.outputType}>;`);
            }
        }
    });
    chunks.push(ts_poet_1.code `}`);
    return ts_poet_1.joinCode(chunks, { on: '\n' });
}
exports.generateService = generateService;
function generateRegularRpcMethod(ctx, fileDesc, serviceDesc, methodDesc) {
    utils_1.assertInstanceOf(methodDesc, utils_1.FormattedMethodDescriptor);
    const { options, utils } = ctx;
    const Reader = ts_poet_1.imp('Reader@protobufjs/minimal');
    const rawInputType = types_1.rawRequestType(ctx, methodDesc);
    const inputType = types_1.requestType(ctx, methodDesc);
    const outputType = types_1.responseType(ctx, methodDesc);
    const rawOutputType = types_1.responseType(ctx, methodDesc, { keepValueType: true });
    const params = [...(options.context ? [ts_poet_1.code `ctx: Context`] : []), ts_poet_1.code `request: ${inputType}`];
    const maybeCtx = options.context ? 'ctx,' : '';
    let encode = ts_poet_1.code `${rawInputType}.encode(request).finish()`;
    let decode = ts_poet_1.code `data => ${outputType}.decode(new ${Reader}(data))`;
    if (options.useDate && rawOutputType.toString().includes('Timestamp')) {
        decode = ts_poet_1.code `data => ${utils.fromTimestamp}(${rawOutputType}.decode(new ${Reader}(data)))`;
    }
    if (methodDesc.clientStreaming) {
        encode = ts_poet_1.code `request.pipe(${ts_poet_1.imp('map@rxjs/operators')}(request => ${encode}))`;
    }
    let returnVariable;
    if (options.returnObservable || methodDesc.serverStreaming) {
        returnVariable = 'result';
        decode = ts_poet_1.code `result.pipe(${ts_poet_1.imp('map@rxjs/operators')}(${decode}))`;
    }
    else {
        returnVariable = 'promise';
        decode = ts_poet_1.code `promise.then(${decode})`;
    }
    let rpcMethod;
    if (methodDesc.clientStreaming && methodDesc.serverStreaming) {
        rpcMethod = 'bidirectionalStreamingRequest';
    }
    else if (methodDesc.serverStreaming) {
        rpcMethod = 'serverStreamingRequest';
    }
    else if (methodDesc.clientStreaming) {
        rpcMethod = 'clientStreamingRequest';
    }
    else {
        rpcMethod = 'request';
    }
    return ts_poet_1.code `
    ${methodDesc.formattedName}(
      ${ts_poet_1.joinCode(params, { on: ',' })}
    ): ${types_1.responsePromiseOrObservable(ctx, methodDesc)} {
      const data = ${encode};
      const ${returnVariable} = this.rpc.${rpcMethod}(
        ${maybeCtx}
        "${utils_1.maybePrefixPackage(fileDesc, serviceDesc.name)}",
        "${methodDesc.name}",
        data
      );
      return ${decode};
    }
  `;
}
function generateServiceClientImpl(ctx, fileDesc, serviceDesc) {
    const { options } = ctx;
    const chunks = [];
    // Define the FooServiceImpl class
    const { name } = serviceDesc;
    const i = options.context ? `${name}<Context>` : name;
    const t = options.context ? `<${main_1.contextTypeVar}>` : '';
    chunks.push(ts_poet_1.code `export class ${name}ClientImpl${t} implements ${i} {`);
    // Create the constructor(rpc: Rpc)
    const rpcType = options.context ? 'Rpc<Context>' : 'Rpc';
    chunks.push(ts_poet_1.code `private readonly rpc: ${rpcType};`);
    chunks.push(ts_poet_1.code `constructor(rpc: ${rpcType}) {`);
    chunks.push(ts_poet_1.code `this.rpc = rpc;`);
    // Bind each FooService method to the FooServiceImpl class
    for (const methodDesc of serviceDesc.method) {
        utils_1.assertInstanceOf(methodDesc, utils_1.FormattedMethodDescriptor);
        chunks.push(ts_poet_1.code `this.${methodDesc.formattedName} = this.${methodDesc.formattedName}.bind(this);`);
    }
    chunks.push(ts_poet_1.code `}`);
    // Create a method for each FooService method
    for (const methodDesc of serviceDesc.method) {
        // See if this this fuzzy matches to a batchable method
        if (options.context) {
            const batchMethod = types_1.detectBatchMethod(ctx, fileDesc, serviceDesc, methodDesc);
            if (batchMethod) {
                chunks.push(generateBatchingRpcMethod(ctx, batchMethod));
            }
        }
        if (options.context && methodDesc.name.match(/^Get[A-Z]/)) {
            chunks.push(generateCachingRpcMethod(ctx, fileDesc, serviceDesc, methodDesc));
        }
        else {
            chunks.push(generateRegularRpcMethod(ctx, fileDesc, serviceDesc, methodDesc));
        }
    }
    chunks.push(ts_poet_1.code `}`);
    return ts_poet_1.code `${chunks}`;
}
exports.generateServiceClientImpl = generateServiceClientImpl;
/** We've found a BatchXxx method, create a synthetic GetXxx method that calls it. */
function generateBatchingRpcMethod(ctx, batchMethod) {
    const { methodDesc, singleMethodName, inputFieldName, inputType, outputFieldName, outputType, mapType, uniqueIdentifier, } = batchMethod;
    utils_1.assertInstanceOf(methodDesc, utils_1.FormattedMethodDescriptor);
    // Create the `(keys) => ...` lambda we'll pass to the DataLoader constructor
    const lambda = [];
    lambda.push(ts_poet_1.code `
    (${inputFieldName}) => {
      const request = { ${inputFieldName} };
  `);
    if (mapType) {
        // If the return type is a map, lookup each key in the result
        lambda.push(ts_poet_1.code `
      return this.${methodDesc.formattedName}(ctx, request).then(res => {
        return ${inputFieldName}.map(key => res.${outputFieldName}[key])
      });
    `);
    }
    else {
        // Otherwise assume they come back in order
        lambda.push(ts_poet_1.code `
      return this.${methodDesc.formattedName}(ctx, request).then(res => res.${outputFieldName})
    `);
    }
    lambda.push(ts_poet_1.code `}`);
    return ts_poet_1.code `
    ${singleMethodName}(
      ctx: Context,
      ${utils_1.singular(inputFieldName)}: ${inputType}
    ): Promise<${outputType}> {
      const dl = ctx.getDataLoader("${uniqueIdentifier}", () => {
        return new ${dataloader}<${inputType}, ${outputType}>(
          ${ts_poet_1.joinCode(lambda)},
          { cacheKeyFn: ${hash}, ...ctx.rpcDataLoaderOptions }
        );
      });
      return dl.load(${utils_1.singular(inputFieldName)});
    }
  `;
}
/** We're not going to batch, but use DataLoader for per-request caching. */
function generateCachingRpcMethod(ctx, fileDesc, serviceDesc, methodDesc) {
    utils_1.assertInstanceOf(methodDesc, utils_1.FormattedMethodDescriptor);
    const inputType = types_1.requestType(ctx, methodDesc);
    const outputType = types_1.responseType(ctx, methodDesc);
    const uniqueIdentifier = `${utils_1.maybePrefixPackage(fileDesc, serviceDesc.name)}.${methodDesc.name}`;
    const lambda = ts_poet_1.code `
    (requests) => {
      const responses = requests.map(async request => {
        const data = ${inputType}.encode(request).finish()
        const response = await this.rpc.request(ctx, "${utils_1.maybePrefixPackage(fileDesc, serviceDesc.name)}", "${methodDesc.name}", data);
        return ${outputType}.decode(new ${Reader}(response));
      });
      return Promise.all(responses);
    }
  `;
    return ts_poet_1.code `
    ${methodDesc.formattedName}(
      ctx: Context,
      request: ${inputType},
    ): Promise<${outputType}> {
      const dl = ctx.getDataLoader("${uniqueIdentifier}", () => {
        return new ${dataloader}<${inputType}, ${outputType}>(
          ${lambda},
          { cacheKeyFn: ${hash}, ...ctx.rpcDataLoaderOptions },
        );
      });
      return dl.load(request);
    }
  `;
}
/**
 * Creates an `Rpc.request(service, method, data)` abstraction.
 *
 * This lets clients pass in their own request-promise-ish client.
 *
 * This also requires clientStreamingRequest, serverStreamingRequest and
 * bidirectionalStreamingRequest methods if any of the RPCs is streaming.
 *
 * We don't export this because if a project uses multiple `*.proto` files,
 * we don't want our the barrel imports in `index.ts` to have multiple `Rpc`
 * types.
 */
function generateRpcType(ctx, hasStreamingMethods) {
    const { options } = ctx;
    const maybeContext = options.context ? '<Context>' : '';
    const maybeContextParam = options.context ? 'ctx: Context,' : '';
    const methods = [[ts_poet_1.code `request`, ts_poet_1.code `Uint8Array`, ts_poet_1.code `Promise<Uint8Array>`]];
    if (hasStreamingMethods) {
        const observable = ts_poet_1.imp('Observable@rxjs');
        methods.push([ts_poet_1.code `clientStreamingRequest`, ts_poet_1.code `${observable}<Uint8Array>`, ts_poet_1.code `Promise<Uint8Array>`]);
        methods.push([ts_poet_1.code `serverStreamingRequest`, ts_poet_1.code `Uint8Array`, ts_poet_1.code `${observable}<Uint8Array>`]);
        methods.push([
            ts_poet_1.code `bidirectionalStreamingRequest`,
            ts_poet_1.code `${observable}<Uint8Array>`,
            ts_poet_1.code `${observable}<Uint8Array>`,
        ]);
    }
    const chunks = [];
    chunks.push(ts_poet_1.code `    interface Rpc${maybeContext} {`);
    methods.forEach((method) => {
        chunks.push(ts_poet_1.code `
      ${method[0]}(
        ${maybeContextParam}
        service: string,
        method: string,
        data: ${method[1]}
      ): ${method[2]};`);
    });
    chunks.push(ts_poet_1.code `    }`);
    return ts_poet_1.joinCode(chunks, { on: '\n' });
}
exports.generateRpcType = generateRpcType;
function generateDataLoadersType() {
    // TODO Maybe should be a generic `Context.get<T>(id, () => T): T` method
    return ts_poet_1.code `
    export interface DataLoaders {
      rpcDataLoaderOptions?: DataLoaderOptions;
      getDataLoader<T>(identifier: string, constructorFn: () => T): T;
    }
  `;
}
exports.generateDataLoadersType = generateDataLoadersType;
function generateDataLoaderOptionsType() {
    return ts_poet_1.code `
    export interface DataLoaderOptions {
      cache?: boolean;
    }
  `;
}
exports.generateDataLoaderOptionsType = generateDataLoaderOptionsType;
