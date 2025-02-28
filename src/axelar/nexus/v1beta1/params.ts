/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Threshold } from "../../../axelar/utils/v1beta1/threshold";

export const protobufPackage = "axelar.nexus.v1beta1";

/** Params represent the genesis parameters for the module */
export interface Params {
  chainActivationThreshold?: Threshold;
  chainMaintainerMissingVoteThreshold?: Threshold;
  chainMaintainerIncorrectVoteThreshold?: Threshold;
  chainMaintainerCheckWindow: number;
  gateway: Uint8Array;
  endBlockerLimit: Long;
}

function createBaseParams(): Params {
  return {
    chainActivationThreshold: undefined,
    chainMaintainerMissingVoteThreshold: undefined,
    chainMaintainerIncorrectVoteThreshold: undefined,
    chainMaintainerCheckWindow: 0,
    gateway: new Uint8Array(),
    endBlockerLimit: Long.UZERO,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainActivationThreshold !== undefined) {
      Threshold.encode(message.chainActivationThreshold, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainMaintainerMissingVoteThreshold !== undefined) {
      Threshold.encode(message.chainMaintainerMissingVoteThreshold, writer.uint32(18).fork()).ldelim();
    }
    if (message.chainMaintainerIncorrectVoteThreshold !== undefined) {
      Threshold.encode(message.chainMaintainerIncorrectVoteThreshold, writer.uint32(26).fork()).ldelim();
    }
    if (message.chainMaintainerCheckWindow !== 0) {
      writer.uint32(32).int32(message.chainMaintainerCheckWindow);
    }
    if (message.gateway.length !== 0) {
      writer.uint32(42).bytes(message.gateway);
    }
    if (!message.endBlockerLimit.isZero()) {
      writer.uint32(48).uint64(message.endBlockerLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainActivationThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainMaintainerMissingVoteThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 3:
          message.chainMaintainerIncorrectVoteThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 4:
          message.chainMaintainerCheckWindow = reader.int32();
          break;
        case 5:
          message.gateway = reader.bytes();
          break;
        case 6:
          message.endBlockerLimit = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      chainActivationThreshold: isSet(object.chainActivationThreshold)
        ? Threshold.fromJSON(object.chainActivationThreshold)
        : undefined,
      chainMaintainerMissingVoteThreshold: isSet(object.chainMaintainerMissingVoteThreshold)
        ? Threshold.fromJSON(object.chainMaintainerMissingVoteThreshold)
        : undefined,
      chainMaintainerIncorrectVoteThreshold: isSet(object.chainMaintainerIncorrectVoteThreshold)
        ? Threshold.fromJSON(object.chainMaintainerIncorrectVoteThreshold)
        : undefined,
      chainMaintainerCheckWindow: isSet(object.chainMaintainerCheckWindow)
        ? Number(object.chainMaintainerCheckWindow)
        : 0,
      gateway: isSet(object.gateway) ? bytesFromBase64(object.gateway) : new Uint8Array(),
      endBlockerLimit: isSet(object.endBlockerLimit) ? Long.fromValue(object.endBlockerLimit) : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.chainActivationThreshold !== undefined &&
      (obj.chainActivationThreshold = message.chainActivationThreshold
        ? Threshold.toJSON(message.chainActivationThreshold)
        : undefined);
    message.chainMaintainerMissingVoteThreshold !== undefined &&
      (obj.chainMaintainerMissingVoteThreshold = message.chainMaintainerMissingVoteThreshold
        ? Threshold.toJSON(message.chainMaintainerMissingVoteThreshold)
        : undefined);
    message.chainMaintainerIncorrectVoteThreshold !== undefined &&
      (obj.chainMaintainerIncorrectVoteThreshold = message.chainMaintainerIncorrectVoteThreshold
        ? Threshold.toJSON(message.chainMaintainerIncorrectVoteThreshold)
        : undefined);
    message.chainMaintainerCheckWindow !== undefined &&
      (obj.chainMaintainerCheckWindow = Math.round(message.chainMaintainerCheckWindow));
    message.gateway !== undefined &&
      (obj.gateway = base64FromBytes(message.gateway !== undefined ? message.gateway : new Uint8Array()));
    message.endBlockerLimit !== undefined &&
      (obj.endBlockerLimit = (message.endBlockerLimit || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.chainActivationThreshold =
      object.chainActivationThreshold !== undefined && object.chainActivationThreshold !== null
        ? Threshold.fromPartial(object.chainActivationThreshold)
        : undefined;
    message.chainMaintainerMissingVoteThreshold =
      object.chainMaintainerMissingVoteThreshold !== undefined &&
      object.chainMaintainerMissingVoteThreshold !== null
        ? Threshold.fromPartial(object.chainMaintainerMissingVoteThreshold)
        : undefined;
    message.chainMaintainerIncorrectVoteThreshold =
      object.chainMaintainerIncorrectVoteThreshold !== undefined &&
      object.chainMaintainerIncorrectVoteThreshold !== null
        ? Threshold.fromPartial(object.chainMaintainerIncorrectVoteThreshold)
        : undefined;
    message.chainMaintainerCheckWindow = object.chainMaintainerCheckWindow ?? 0;
    message.gateway = object.gateway ?? new Uint8Array();
    message.endBlockerLimit =
      object.endBlockerLimit !== undefined && object.endBlockerLimit !== null
        ? Long.fromValue(object.endBlockerLimit)
        : Long.UZERO;
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
