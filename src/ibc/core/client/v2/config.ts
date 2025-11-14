/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { JsonSafe } from "../../../../json-safe";
import { DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "ibc.core.client.v2";
/**
 * Config is a **per-client** configuration struct that sets which relayers are allowed to relay v2 IBC messages
 * for a given client.
 * If it is set, then only relayers in the allow list can send v2 messages
 * If it is not set, then the client allows permissionless relaying of v2 messages
 */
export interface Config {
  /** allowed_relayers defines the set of allowed relayers for IBC V2 protocol for the given client */
  allowedRelayers: string[];
}
function createBaseConfig(): Config {
  return {
    allowedRelayers: [],
  };
}
export const Config = {
  typeUrl: "/ibc.core.client.v2.Config",
  encode(message: Config, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedRelayers) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Config {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedRelayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Config {
    const obj = createBaseConfig();
    if (Array.isArray(object?.allowedRelayers))
      obj.allowedRelayers = object.allowedRelayers.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Config): JsonSafe<Config> {
    const obj: any = {};
    if (message.allowedRelayers) {
      obj.allowedRelayers = message.allowedRelayers.map((e) => e);
    } else {
      obj.allowedRelayers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Config>, I>>(object: I): Config {
    const message = createBaseConfig();
    message.allowedRelayers = object.allowedRelayers?.map((e) => e) || [];
    return message;
  },
};
