"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGenericServiceDefinition = void 0;
const ts_poet_1 = require("ts-poet");
const ts_proto_descriptors_1 = require("ts-proto-descriptors");
const case_1 = require("./case");
const sourceInfo_1 = require("./sourceInfo");
const types_1 = require("./types");
const utils_1 = require("./utils");
/**
 * Generates a framework-agnostic service descriptor.
 */
function generateGenericServiceDefinition(ctx, fileDesc, sourceInfo, serviceDesc) {
    var _a, _b, _c;
    const chunks = [];
    utils_1.maybeAddComment(sourceInfo, chunks, (_a = serviceDesc.options) === null || _a === void 0 ? void 0 : _a.deprecated);
    // Service definition type
    const name = ts_poet_1.def(`${serviceDesc.name}Definition`);
    chunks.push(ts_poet_1.code `
    export type ${name} = typeof ${name};
  `);
    // Service definition
    chunks.push(ts_poet_1.code `
    export const ${name} = {
  `);
    (_b = serviceDesc.options) === null || _b === void 0 ? void 0 : _b.uninterpretedOption;
    chunks.push(ts_poet_1.code `
      name: '${serviceDesc.name}',
      fullName: '${utils_1.maybePrefixPackage(fileDesc, serviceDesc.name)}',
      methods: {
  `);
    for (const [index, methodDesc] of serviceDesc.method.entries()) {
        const info = sourceInfo.lookup(sourceInfo_1.Fields.service.method, index);
        utils_1.maybeAddComment(info, chunks, (_c = methodDesc.options) === null || _c === void 0 ? void 0 : _c.deprecated);
        chunks.push(ts_poet_1.code `
      ${case_1.camelCase(methodDesc.name)}: ${generateMethodDefinition(ctx, methodDesc)},
    `);
    }
    chunks.push(ts_poet_1.code `
      },
    } as const;
  `);
    return ts_poet_1.joinCode(chunks, { on: '\n' });
}
exports.generateGenericServiceDefinition = generateGenericServiceDefinition;
function generateMethodDefinition(ctx, methodDesc) {
    const inputType = types_1.messageToTypeName(ctx, methodDesc.inputType, { keepValueType: true });
    const outputType = types_1.messageToTypeName(ctx, methodDesc.outputType, { keepValueType: true });
    return ts_poet_1.code `
    {
      name: '${methodDesc.name}',
      requestType: ${inputType},
      requestStream: ${methodDesc.clientStreaming},
      responseType: ${outputType},
      responseStream: ${methodDesc.serverStreaming},
      options: ${generateMethodOptions(methodDesc.options)}
    }
  `;
}
function generateMethodOptions(options) {
    const chunks = [];
    chunks.push(ts_poet_1.code `{`);
    if (options != null) {
        if (options.idempotencyLevel === ts_proto_descriptors_1.MethodOptions_IdempotencyLevel.IDEMPOTENT) {
            chunks.push(ts_poet_1.code `idempotencyLevel: 'IDEMPOTENT',`);
        }
        else if (options.idempotencyLevel === ts_proto_descriptors_1.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS) {
            chunks.push(ts_poet_1.code `idempotencyLevel: 'NO_SIDE_EFFECTS',`);
        }
    }
    chunks.push(ts_poet_1.code `}`);
    return ts_poet_1.joinCode(chunks, { on: '\n' });
}
