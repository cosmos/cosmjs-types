/* eslint-disable */
import { Op } from "./benchmark";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.benchmark.v1";
/** MsgLoadTestOps defines a message containing a sequence of load test operations. */
export interface MsgLoadTest {
  caller: Uint8Array;
  ops: Op[];
}
/** MsgLoadTestResponse defines a message containing the results of a load test operation. */
export interface MsgLoadTestResponse {
  totalTime: bigint;
  totalErrors: bigint;
}
function createBaseMsgLoadTest(): MsgLoadTest {
  return {
    caller: new Uint8Array(),
    ops: [],
  };
}
export const MsgLoadTest = {
  typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
  encode(message: MsgLoadTest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.caller.length !== 0) {
      writer.uint32(10).bytes(message.caller);
    }
    for (const v of message.ops) {
      Op.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLoadTest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLoadTest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.caller = reader.bytes();
          break;
        case 2:
          message.ops.push(Op.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLoadTest {
    const obj = createBaseMsgLoadTest();
    if (isSet(object.caller)) obj.caller = bytesFromBase64(object.caller);
    if (Array.isArray(object?.ops)) obj.ops = object.ops.map((e: any) => Op.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgLoadTest): JsonSafe<MsgLoadTest> {
    const obj: any = {};
    message.caller !== undefined &&
      (obj.caller = base64FromBytes(message.caller !== undefined ? message.caller : new Uint8Array()));
    if (message.ops) {
      obj.ops = message.ops.map((e) => (e ? Op.toJSON(e) : undefined));
    } else {
      obj.ops = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLoadTest>, I>>(object: I): MsgLoadTest {
    const message = createBaseMsgLoadTest();
    message.caller = object.caller ?? new Uint8Array();
    message.ops = object.ops?.map((e) => Op.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgLoadTestResponse(): MsgLoadTestResponse {
  return {
    totalTime: BigInt(0),
    totalErrors: BigInt(0),
  };
}
export const MsgLoadTestResponse = {
  typeUrl: "/cosmos.benchmark.v1.MsgLoadTestResponse",
  encode(message: MsgLoadTestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalTime !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalTime);
    }
    if (message.totalErrors !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalErrors);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLoadTestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLoadTestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalTime = reader.uint64();
          break;
        case 2:
          message.totalErrors = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLoadTestResponse {
    const obj = createBaseMsgLoadTestResponse();
    if (isSet(object.totalTime)) obj.totalTime = BigInt(object.totalTime.toString());
    if (isSet(object.totalErrors)) obj.totalErrors = BigInt(object.totalErrors.toString());
    return obj;
  },
  toJSON(message: MsgLoadTestResponse): JsonSafe<MsgLoadTestResponse> {
    const obj: any = {};
    message.totalTime !== undefined && (obj.totalTime = (message.totalTime || BigInt(0)).toString());
    message.totalErrors !== undefined && (obj.totalErrors = (message.totalErrors || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLoadTestResponse>, I>>(object: I): MsgLoadTestResponse {
    const message = createBaseMsgLoadTestResponse();
    if (object.totalTime !== undefined && object.totalTime !== null) {
      message.totalTime = BigInt(object.totalTime.toString());
    }
    if (object.totalErrors !== undefined && object.totalErrors !== null) {
      message.totalErrors = BigInt(object.totalErrors.toString());
    }
    return message;
  },
};
/** Msg defines the benchmark Msg service. */
export interface Msg {
  /** LoadTest defines a method for executing a sequence of load test operations. */
  LoadTest(request: MsgLoadTest): Promise<MsgLoadTestResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LoadTest = this.LoadTest.bind(this);
  }
  LoadTest(request: MsgLoadTest): Promise<MsgLoadTestResponse> {
    const data = MsgLoadTest.encode(request).finish();
    const promise = this.rpc.request("cosmos.benchmark.v1.Msg", "LoadTest", data);
    return promise.then((data) => MsgLoadTestResponse.decode(new BinaryReader(data)));
  }
}
