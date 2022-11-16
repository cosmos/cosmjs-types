/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "axelar.axelarnet.v1beta1";

/** Params represent the genesis parameters for the module */
export interface Params {
  /** IBC packet route timeout window */
  routeTimeoutWindow: Long;
  transferLimit: Long;
  endBlockerLimit: Long;
}

function createBaseParams(): Params {
  return { routeTimeoutWindow: Long.UZERO, transferLimit: Long.UZERO, endBlockerLimit: Long.UZERO };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.routeTimeoutWindow.isZero()) {
      writer.uint32(8).uint64(message.routeTimeoutWindow);
    }
    if (!message.transferLimit.isZero()) {
      writer.uint32(24).uint64(message.transferLimit);
    }
    if (!message.endBlockerLimit.isZero()) {
      writer.uint32(32).uint64(message.endBlockerLimit);
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
          message.routeTimeoutWindow = reader.uint64() as Long;
          break;
        case 3:
          message.transferLimit = reader.uint64() as Long;
          break;
        case 4:
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
      routeTimeoutWindow: isSet(object.routeTimeoutWindow)
        ? Long.fromValue(object.routeTimeoutWindow)
        : Long.UZERO,
      transferLimit: isSet(object.transferLimit) ? Long.fromValue(object.transferLimit) : Long.UZERO,
      endBlockerLimit: isSet(object.endBlockerLimit) ? Long.fromValue(object.endBlockerLimit) : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.routeTimeoutWindow !== undefined &&
      (obj.routeTimeoutWindow = (message.routeTimeoutWindow || Long.UZERO).toString());
    message.transferLimit !== undefined &&
      (obj.transferLimit = (message.transferLimit || Long.UZERO).toString());
    message.endBlockerLimit !== undefined &&
      (obj.endBlockerLimit = (message.endBlockerLimit || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.routeTimeoutWindow =
      object.routeTimeoutWindow !== undefined && object.routeTimeoutWindow !== null
        ? Long.fromValue(object.routeTimeoutWindow)
        : Long.UZERO;
    message.transferLimit =
      object.transferLimit !== undefined && object.transferLimit !== null
        ? Long.fromValue(object.transferLimit)
        : Long.UZERO;
    message.endBlockerLimit =
      object.endBlockerLimit !== undefined && object.endBlockerLimit !== null
        ? Long.fromValue(object.endBlockerLimit)
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
