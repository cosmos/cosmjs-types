/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.benchmark.v1";
/** Op is a message describing a benchmark operation. */
export interface Op {
  seed: bigint;
  actor: string;
  keyLength: bigint;
  valueLength: bigint;
  iterations: number;
  delete: boolean;
  exists: boolean;
}
function createBaseOp(): Op {
  return {
    seed: BigInt(0),
    actor: "",
    keyLength: BigInt(0),
    valueLength: BigInt(0),
    iterations: 0,
    delete: false,
    exists: false,
  };
}
export const Op = {
  typeUrl: "/cosmos.benchmark.v1.Op",
  encode(message: Op, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seed !== BigInt(0)) {
      writer.uint32(8).uint64(message.seed);
    }
    if (message.actor !== "") {
      writer.uint32(18).string(message.actor);
    }
    if (message.keyLength !== BigInt(0)) {
      writer.uint32(24).uint64(message.keyLength);
    }
    if (message.valueLength !== BigInt(0)) {
      writer.uint32(32).uint64(message.valueLength);
    }
    if (message.iterations !== 0) {
      writer.uint32(40).uint32(message.iterations);
    }
    if (message.delete === true) {
      writer.uint32(48).bool(message.delete);
    }
    if (message.exists === true) {
      writer.uint32(56).bool(message.exists);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Op {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.uint64();
          break;
        case 2:
          message.actor = reader.string();
          break;
        case 3:
          message.keyLength = reader.uint64();
          break;
        case 4:
          message.valueLength = reader.uint64();
          break;
        case 5:
          message.iterations = reader.uint32();
          break;
        case 6:
          message.delete = reader.bool();
          break;
        case 7:
          message.exists = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Op {
    const obj = createBaseOp();
    if (isSet(object.seed)) obj.seed = BigInt(object.seed.toString());
    if (isSet(object.actor)) obj.actor = String(object.actor);
    if (isSet(object.keyLength)) obj.keyLength = BigInt(object.keyLength.toString());
    if (isSet(object.valueLength)) obj.valueLength = BigInt(object.valueLength.toString());
    if (isSet(object.iterations)) obj.iterations = Number(object.iterations);
    if (isSet(object.delete)) obj.delete = Boolean(object.delete);
    if (isSet(object.exists)) obj.exists = Boolean(object.exists);
    return obj;
  },
  toJSON(message: Op): JsonSafe<Op> {
    const obj: any = {};
    message.seed !== undefined && (obj.seed = (message.seed || BigInt(0)).toString());
    message.actor !== undefined && (obj.actor = message.actor);
    message.keyLength !== undefined && (obj.keyLength = (message.keyLength || BigInt(0)).toString());
    message.valueLength !== undefined && (obj.valueLength = (message.valueLength || BigInt(0)).toString());
    message.iterations !== undefined && (obj.iterations = Math.round(message.iterations));
    message.delete !== undefined && (obj.delete = message.delete);
    message.exists !== undefined && (obj.exists = message.exists);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Op>, I>>(object: I): Op {
    const message = createBaseOp();
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = BigInt(object.seed.toString());
    }
    message.actor = object.actor ?? "";
    if (object.keyLength !== undefined && object.keyLength !== null) {
      message.keyLength = BigInt(object.keyLength.toString());
    }
    if (object.valueLength !== undefined && object.valueLength !== null) {
      message.valueLength = BigInt(object.valueLength.toString());
    }
    message.iterations = object.iterations ?? 0;
    message.delete = object.delete ?? false;
    message.exists = object.exists ?? false;
    return message;
  },
};
