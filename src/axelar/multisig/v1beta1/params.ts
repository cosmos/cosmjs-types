/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Threshold } from "../../../axelar/utils/v1beta1/threshold";

export const protobufPackage = "axelar.multisig.v1beta1";

/** Params represent the genesis parameters for the module */
export interface Params {
  keygenThreshold?: Threshold;
  signingThreshold?: Threshold;
  keygenTimeout: Long;
  keygenGracePeriod: Long;
  signingTimeout: Long;
  signingGracePeriod: Long;
  activeEpochCount: Long;
}

function createBaseParams(): Params {
  return {
    keygenThreshold: undefined,
    signingThreshold: undefined,
    keygenTimeout: Long.ZERO,
    keygenGracePeriod: Long.ZERO,
    signingTimeout: Long.ZERO,
    signingGracePeriod: Long.ZERO,
    activeEpochCount: Long.UZERO,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keygenThreshold !== undefined) {
      Threshold.encode(message.keygenThreshold, writer.uint32(10).fork()).ldelim();
    }
    if (message.signingThreshold !== undefined) {
      Threshold.encode(message.signingThreshold, writer.uint32(18).fork()).ldelim();
    }
    if (!message.keygenTimeout.isZero()) {
      writer.uint32(24).int64(message.keygenTimeout);
    }
    if (!message.keygenGracePeriod.isZero()) {
      writer.uint32(32).int64(message.keygenGracePeriod);
    }
    if (!message.signingTimeout.isZero()) {
      writer.uint32(40).int64(message.signingTimeout);
    }
    if (!message.signingGracePeriod.isZero()) {
      writer.uint32(48).int64(message.signingGracePeriod);
    }
    if (!message.activeEpochCount.isZero()) {
      writer.uint32(56).uint64(message.activeEpochCount);
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
          message.keygenThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 2:
          message.signingThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 3:
          message.keygenTimeout = reader.int64() as Long;
          break;
        case 4:
          message.keygenGracePeriod = reader.int64() as Long;
          break;
        case 5:
          message.signingTimeout = reader.int64() as Long;
          break;
        case 6:
          message.signingGracePeriod = reader.int64() as Long;
          break;
        case 7:
          message.activeEpochCount = reader.uint64() as Long;
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
      keygenThreshold: isSet(object.keygenThreshold) ? Threshold.fromJSON(object.keygenThreshold) : undefined,
      signingThreshold: isSet(object.signingThreshold)
        ? Threshold.fromJSON(object.signingThreshold)
        : undefined,
      keygenTimeout: isSet(object.keygenTimeout) ? Long.fromValue(object.keygenTimeout) : Long.ZERO,
      keygenGracePeriod: isSet(object.keygenGracePeriod)
        ? Long.fromValue(object.keygenGracePeriod)
        : Long.ZERO,
      signingTimeout: isSet(object.signingTimeout) ? Long.fromValue(object.signingTimeout) : Long.ZERO,
      signingGracePeriod: isSet(object.signingGracePeriod)
        ? Long.fromValue(object.signingGracePeriod)
        : Long.ZERO,
      activeEpochCount: isSet(object.activeEpochCount) ? Long.fromValue(object.activeEpochCount) : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.keygenThreshold !== undefined &&
      (obj.keygenThreshold = message.keygenThreshold ? Threshold.toJSON(message.keygenThreshold) : undefined);
    message.signingThreshold !== undefined &&
      (obj.signingThreshold = message.signingThreshold
        ? Threshold.toJSON(message.signingThreshold)
        : undefined);
    message.keygenTimeout !== undefined &&
      (obj.keygenTimeout = (message.keygenTimeout || Long.ZERO).toString());
    message.keygenGracePeriod !== undefined &&
      (obj.keygenGracePeriod = (message.keygenGracePeriod || Long.ZERO).toString());
    message.signingTimeout !== undefined &&
      (obj.signingTimeout = (message.signingTimeout || Long.ZERO).toString());
    message.signingGracePeriod !== undefined &&
      (obj.signingGracePeriod = (message.signingGracePeriod || Long.ZERO).toString());
    message.activeEpochCount !== undefined &&
      (obj.activeEpochCount = (message.activeEpochCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.keygenThreshold =
      object.keygenThreshold !== undefined && object.keygenThreshold !== null
        ? Threshold.fromPartial(object.keygenThreshold)
        : undefined;
    message.signingThreshold =
      object.signingThreshold !== undefined && object.signingThreshold !== null
        ? Threshold.fromPartial(object.signingThreshold)
        : undefined;
    message.keygenTimeout =
      object.keygenTimeout !== undefined && object.keygenTimeout !== null
        ? Long.fromValue(object.keygenTimeout)
        : Long.ZERO;
    message.keygenGracePeriod =
      object.keygenGracePeriod !== undefined && object.keygenGracePeriod !== null
        ? Long.fromValue(object.keygenGracePeriod)
        : Long.ZERO;
    message.signingTimeout =
      object.signingTimeout !== undefined && object.signingTimeout !== null
        ? Long.fromValue(object.signingTimeout)
        : Long.ZERO;
    message.signingGracePeriod =
      object.signingGracePeriod !== undefined && object.signingGracePeriod !== null
        ? Long.fromValue(object.signingGracePeriod)
        : Long.ZERO;
    message.activeEpochCount =
      object.activeEpochCount !== undefined && object.activeEpochCount !== null
        ? Long.fromValue(object.activeEpochCount)
        : Long.UZERO;
    return message;
  },
};

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
