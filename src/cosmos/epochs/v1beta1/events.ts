/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.epochs.v1beta1";
/** EventEpochEnd is an event emitted when an epoch end. */
export interface EventEpochEnd {
  epochNumber: bigint;
}
/** EventEpochStart is an event emitted when an epoch start. */
export interface EventEpochStart {
  epochNumber: bigint;
  epochStartTime: bigint;
}
function createBaseEventEpochEnd(): EventEpochEnd {
  return {
    epochNumber: BigInt(0),
  };
}
export const EventEpochEnd = {
  typeUrl: "/cosmos.epochs.v1beta1.EventEpochEnd",
  encode(message: EventEpochEnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).int64(message.epochNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEpochEnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEpochEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventEpochEnd {
    const obj = createBaseEventEpochEnd();
    if (isSet(object.epochNumber)) obj.epochNumber = BigInt(object.epochNumber.toString());
    return obj;
  },
  toJSON(message: EventEpochEnd): JsonSafe<EventEpochEnd> {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventEpochEnd>, I>>(object: I): EventEpochEnd {
    const message = createBaseEventEpochEnd();
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = BigInt(object.epochNumber.toString());
    }
    return message;
  },
};
function createBaseEventEpochStart(): EventEpochStart {
  return {
    epochNumber: BigInt(0),
    epochStartTime: BigInt(0),
  };
}
export const EventEpochStart = {
  typeUrl: "/cosmos.epochs.v1beta1.EventEpochStart",
  encode(message: EventEpochStart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.epochStartTime !== BigInt(0)) {
      writer.uint32(16).int64(message.epochStartTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEpochStart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEpochStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
          break;
        case 2:
          message.epochStartTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventEpochStart {
    const obj = createBaseEventEpochStart();
    if (isSet(object.epochNumber)) obj.epochNumber = BigInt(object.epochNumber.toString());
    if (isSet(object.epochStartTime)) obj.epochStartTime = BigInt(object.epochStartTime.toString());
    return obj;
  },
  toJSON(message: EventEpochStart): JsonSafe<EventEpochStart> {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.epochStartTime !== undefined &&
      (obj.epochStartTime = (message.epochStartTime || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventEpochStart>, I>>(object: I): EventEpochStart {
    const message = createBaseEventEpochStart();
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = BigInt(object.epochNumber.toString());
    }
    if (object.epochStartTime !== undefined && object.epochStartTime !== null) {
      message.epochStartTime = BigInt(object.epochStartTime.toString());
    }
    return message;
  },
};
