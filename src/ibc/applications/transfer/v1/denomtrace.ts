/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.applications.transfer.v1";
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
/** @deprecated */
export interface DenomTrace {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path: string;
  /** base denomination of the relayed fungible token. */
  baseDenom: string;
}
function createBaseDenomTrace(): DenomTrace {
  return {
    path: "",
    baseDenom: "",
  };
}
export const DenomTrace = {
  typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
  encode(message: DenomTrace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomTrace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomTrace {
    const obj = createBaseDenomTrace();
    if (isSet(object.path)) obj.path = String(object.path);
    if (isSet(object.baseDenom)) obj.baseDenom = String(object.baseDenom);
    return obj;
  },
  toJSON(message: DenomTrace): JsonSafe<DenomTrace> {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DenomTrace>, I>>(object: I): DenomTrace {
    const message = createBaseDenomTrace();
    message.path = object.path ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
};
