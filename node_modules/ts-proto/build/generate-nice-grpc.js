"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNiceGrpcService = void 0;
const ts_poet_1 = require("ts-poet");
const case_1 = require("./case");
const sourceInfo_1 = require("./sourceInfo");
const types_1 = require("./types");
const utils_1 = require("./utils");
const CallOptions = ts_poet_1.imp('CallOptions@nice-grpc-common');
const CallContext = ts_poet_1.imp('CallContext@nice-grpc-common');
/**
 * Generates server / client stubs for `nice-grpc` library.
 */
function generateNiceGrpcService(ctx, fileDesc, sourceInfo, serviceDesc) {
    const chunks = [];
    chunks.push(generateServerStub(ctx, sourceInfo, serviceDesc));
    chunks.push(generateClientStub(ctx, sourceInfo, serviceDesc));
    return ts_poet_1.joinCode(chunks, { on: '\n\n' });
}
exports.generateNiceGrpcService = generateNiceGrpcService;
function generateServerStub(ctx, sourceInfo, serviceDesc) {
    var _a;
    const chunks = [];
    chunks.push(ts_poet_1.code `export interface ${ts_poet_1.def(`${serviceDesc.name}ServiceImplementation`)}<CallContextExt = {}> {`);
    for (const [index, methodDesc] of serviceDesc.method.entries()) {
        utils_1.assertInstanceOf(methodDesc, utils_1.FormattedMethodDescriptor);
        const inputType = types_1.messageToTypeName(ctx, methodDesc.inputType, { keepValueType: true });
        let outputType = types_1.messageToTypeName(ctx, methodDesc.outputType, { keepValueType: true });
        if (ctx.options.outputPartialMethods) {
            outputType = ts_poet_1.code `${ctx.utils.DeepPartial}<${outputType}>`;
        }
        const ServerStreamingMethodResult = ctx.utils.NiceGrpcServerStreamingMethodResult;
        const info = sourceInfo.lookup(sourceInfo_1.Fields.service.method, index);
        utils_1.maybeAddComment(info, chunks, (_a = methodDesc.options) === null || _a === void 0 ? void 0 : _a.deprecated);
        if (methodDesc.clientStreaming) {
            if (methodDesc.serverStreaming) {
                // bidi streaming
                chunks.push(ts_poet_1.code `
          ${case_1.camelCase(methodDesc.name)}(
            request: AsyncIterable<${inputType}>,
            context: ${CallContext} & CallContextExt,
          ): ${ServerStreamingMethodResult}<${outputType}>;
        `);
            }
            else {
                // client streaming
                chunks.push(ts_poet_1.code `
          ${case_1.camelCase(methodDesc.name)}(
            request: AsyncIterable<${inputType}>,
            context: ${CallContext} & CallContextExt,
          ): Promise<${outputType}>;
        `);
            }
        }
        else {
            if (methodDesc.serverStreaming) {
                // server streaming
                chunks.push(ts_poet_1.code `
          ${case_1.camelCase(methodDesc.name)}(
            request: ${inputType},
            context: ${CallContext} & CallContextExt,
          ): ${ServerStreamingMethodResult}<${outputType}>;
        `);
            }
            else {
                // unary
                chunks.push(ts_poet_1.code `
          ${case_1.camelCase(methodDesc.name)}(
            request: ${inputType},
            context: ${CallContext} & CallContextExt,
          ): Promise<${outputType}>;
        `);
            }
        }
    }
    chunks.push(ts_poet_1.code `}`);
    return ts_poet_1.joinCode(chunks, { on: '\n' });
}
function generateClientStub(ctx, sourceInfo, serviceDesc) {
    var _a;
    const chunks = [];
    chunks.push(ts_poet_1.code `export interface ${ts_poet_1.def(`${serviceDesc.name}Client`)}<CallOptionsExt = {}> {`);
    for (const [index, methodDesc] of serviceDesc.method.entries()) {
        utils_1.assertInstanceOf(methodDesc, utils_1.FormattedMethodDescriptor);
        let inputType = types_1.messageToTypeName(ctx, methodDesc.inputType, { keepValueType: true });
        if (ctx.options.outputPartialMethods) {
            inputType = ts_poet_1.code `${ctx.utils.DeepPartial}<${inputType}>`;
        }
        const outputType = types_1.messageToTypeName(ctx, methodDesc.outputType, { keepValueType: true });
        const info = sourceInfo.lookup(sourceInfo_1.Fields.service.method, index);
        utils_1.maybeAddComment(info, chunks, (_a = methodDesc.options) === null || _a === void 0 ? void 0 : _a.deprecated);
        if (methodDesc.clientStreaming) {
            if (methodDesc.serverStreaming) {
                // bidi streaming
                chunks.push(ts_poet_1.code `
          ${case_1.camelCase(methodDesc.name)}(
            request: AsyncIterable<${inputType}>,
            options?: ${CallOptions} & CallOptionsExt,
          ): AsyncIterable<${outputType}>;
        `);
            }
            else {
                // client streaming
                chunks.push(ts_poet_1.code `
          ${case_1.camelCase(methodDesc.name)}(
            request: AsyncIterable<${inputType}>,
            options?: ${CallOptions} & CallOptionsExt,
          ): Promise<${outputType}>;
        `);
            }
        }
        else {
            if (methodDesc.serverStreaming) {
                // server streaming
                chunks.push(ts_poet_1.code `
          ${case_1.camelCase(methodDesc.name)}(
            request: ${inputType},
            options?: ${CallOptions} & CallOptionsExt,
          ): AsyncIterable<${outputType}>;
        `);
            }
            else {
                // unary
                chunks.push(ts_poet_1.code `
          ${case_1.camelCase(methodDesc.name)}(
            request: ${inputType},
            options?: ${CallOptions} & CallOptionsExt,
          ): Promise<${outputType}>;
        `);
            }
        }
    }
    chunks.push(ts_poet_1.code `}`);
    return ts_poet_1.joinCode(chunks, { on: '\n' });
}
