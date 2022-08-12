/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/axelarnet/v1beta1/params";
import { QueueState } from "../../../axelar/utils/v1beta1/queuer";
import { CosmosChain, IBCTransfer } from "../../../axelar/axelarnet/v1beta1/types";

export const protobufPackage = "axelar.axelarnet.v1beta1";

export interface GenesisState {
  params?: Params;
  collectorAddress: Uint8Array;
  chains: CosmosChain[];
  transferQueue?: QueueState;
  failedTransfers: IBCTransfer[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    collectorAddress: new Uint8Array(),
    chains: [],
    transferQueue: undefined,
    failedTransfers: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.collectorAddress.length !== 0) {
      writer.uint32(18).bytes(message.collectorAddress);
    }
    for (const v of message.chains) {
      CosmosChain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.transferQueue !== undefined) {
      QueueState.encode(message.transferQueue, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.failedTransfers) {
      IBCTransfer.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.collectorAddress = reader.bytes();
          break;
        case 3:
          message.chains.push(CosmosChain.decode(reader, reader.uint32()));
          break;
        case 5:
          message.transferQueue = QueueState.decode(reader, reader.uint32());
          break;
        case 6:
          message.failedTransfers.push(IBCTransfer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      collectorAddress: isSet(object.collectorAddress)
        ? bytesFromBase64(object.collectorAddress)
        : new Uint8Array(),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => CosmosChain.fromJSON(e)) : [],
      transferQueue: isSet(object.transferQueue) ? QueueState.fromJSON(object.transferQueue) : undefined,
      failedTransfers: Array.isArray(object?.failedTransfers)
        ? object.failedTransfers.map((e: any) => IBCTransfer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.collectorAddress !== undefined &&
      (obj.collectorAddress = base64FromBytes(
        message.collectorAddress !== undefined ? message.collectorAddress : new Uint8Array(),
      ));
    if (message.chains) {
      obj.chains = message.chains.map((e) => (e ? CosmosChain.toJSON(e) : undefined));
    } else {
      obj.chains = [];
    }
    message.transferQueue !== undefined &&
      (obj.transferQueue = message.transferQueue ? QueueState.toJSON(message.transferQueue) : undefined);
    if (message.failedTransfers) {
      obj.failedTransfers = message.failedTransfers.map((e) => (e ? IBCTransfer.toJSON(e) : undefined));
    } else {
      obj.failedTransfers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.collectorAddress = object.collectorAddress ?? new Uint8Array();
    message.chains = object.chains?.map((e) => CosmosChain.fromPartial(e)) || [];
    message.transferQueue =
      object.transferQueue !== undefined && object.transferQueue !== null
        ? QueueState.fromPartial(object.transferQueue)
        : undefined;
    message.failedTransfers = object.failedTransfers?.map((e) => IBCTransfer.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
