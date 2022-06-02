"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTypeRegistry = void 0;
const ts_poet_1 = require("ts-poet");
const Writer = ts_poet_1.imp('Writer@protobufjs/minimal');
const Reader = ts_poet_1.imp('Reader@protobufjs/minimal');
function generateTypeRegistry(ctx) {
    const chunks = [];
    chunks.push(generateMessageType(ctx));
    chunks.push(ts_poet_1.code `
    export type UnknownMessage = {$type: string};
  `);
    chunks.push(ts_poet_1.code `
    export const messageTypeRegistry = new Map<string, MessageType>();
  `);
    chunks.push(ts_poet_1.code ` ${ctx.utils.Builtin.ifUsed} ${ctx.utils.DeepPartial.ifUsed}`);
    return ts_poet_1.joinCode(chunks, { on: '\n\n' });
}
exports.generateTypeRegistry = generateTypeRegistry;
function generateMessageType(ctx) {
    const chunks = [];
    chunks.push(ts_poet_1.code `export interface MessageType<Message extends UnknownMessage = UnknownMessage> {`);
    chunks.push(ts_poet_1.code `$type: Message['$type'];`);
    if (ctx.options.outputEncodeMethods) {
        chunks.push(ts_poet_1.code `encode(message: Message, writer?: ${Writer}): ${Writer};`);
        chunks.push(ts_poet_1.code `decode(input: ${Reader} | Uint8Array, length?: number): Message;`);
    }
    if (ctx.options.outputJsonMethods) {
        chunks.push(ts_poet_1.code `fromJSON(object: any): Message;`);
        chunks.push(ts_poet_1.code `toJSON(message: Message): unknown;`);
    }
    if (ctx.options.outputPartialMethods) {
        chunks.push(ts_poet_1.code `fromPartial(object: ${ctx.utils.DeepPartial}<Message>): Message;`);
    }
    chunks.push(ts_poet_1.code `}`);
    return ts_poet_1.joinCode(chunks, { on: '\n' });
}
