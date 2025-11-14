/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.counter.v1";
/** MsgIncreaseCounter defines a count Msg service counter. */
export interface MsgIncreaseCounter {
  /** signer is the address that controls the module (defaults to x/gov unless overwritten). */
  signer: string;
  /** count is the number of times to increment the counter. */
  count: bigint;
}
/** MsgIncreaseCountResponse is the Msg/Counter response type. */
export interface MsgIncreaseCountResponse {
  /** new_count is the number of times the counter was incremented. */
  newCount: bigint;
}
function createBaseMsgIncreaseCounter(): MsgIncreaseCounter {
  return {
    signer: "",
    count: BigInt(0),
  };
}
export const MsgIncreaseCounter = {
  typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
  encode(message: MsgIncreaseCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).int64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIncreaseCounter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreaseCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.count = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIncreaseCounter {
    const obj = createBaseMsgIncreaseCounter();
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.count)) obj.count = BigInt(object.count.toString());
    return obj;
  },
  toJSON(message: MsgIncreaseCounter): JsonSafe<MsgIncreaseCounter> {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgIncreaseCounter>, I>>(object: I): MsgIncreaseCounter {
    const message = createBaseMsgIncreaseCounter();
    message.signer = object.signer ?? "";
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count.toString());
    }
    return message;
  },
};
function createBaseMsgIncreaseCountResponse(): MsgIncreaseCountResponse {
  return {
    newCount: BigInt(0),
  };
}
export const MsgIncreaseCountResponse = {
  typeUrl: "/cosmos.counter.v1.MsgIncreaseCountResponse",
  encode(message: MsgIncreaseCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newCount !== BigInt(0)) {
      writer.uint32(8).int64(message.newCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIncreaseCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreaseCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIncreaseCountResponse {
    const obj = createBaseMsgIncreaseCountResponse();
    if (isSet(object.newCount)) obj.newCount = BigInt(object.newCount.toString());
    return obj;
  },
  toJSON(message: MsgIncreaseCountResponse): JsonSafe<MsgIncreaseCountResponse> {
    const obj: any = {};
    message.newCount !== undefined && (obj.newCount = (message.newCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgIncreaseCountResponse>, I>>(
    object: I,
  ): MsgIncreaseCountResponse {
    const message = createBaseMsgIncreaseCountResponse();
    if (object.newCount !== undefined && object.newCount !== null) {
      message.newCount = BigInt(object.newCount.toString());
    }
    return message;
  },
};
/** Msg defines the counter Msg service. */
export interface Msg {
  /** IncreaseCount increments the counter by the specified amount. */
  IncreaseCount(request: MsgIncreaseCounter): Promise<MsgIncreaseCountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IncreaseCount = this.IncreaseCount.bind(this);
  }
  IncreaseCount(request: MsgIncreaseCounter): Promise<MsgIncreaseCountResponse> {
    const data = MsgIncreaseCounter.encode(request).finish();
    const promise = this.rpc.request("cosmos.counter.v1.Msg", "IncreaseCount", data);
    return promise.then((data) => MsgIncreaseCountResponse.decode(new BinaryReader(data)));
  }
}
