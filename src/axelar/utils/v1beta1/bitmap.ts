/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "axelar.utils.v1beta1";

export interface Bitmap {
  trueCountCache?: CircularBuffer;
}

export interface CircularBuffer {
  cumulativeValue: Long[];
  index: number;
  maxSize: number;
}

function createBaseBitmap(): Bitmap {
  return { trueCountCache: undefined };
}

export const Bitmap = {
  encode(message: Bitmap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trueCountCache !== undefined) {
      CircularBuffer.encode(message.trueCountCache, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bitmap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBitmap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.trueCountCache = CircularBuffer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bitmap {
    return {
      trueCountCache: isSet(object.trueCountCache)
        ? CircularBuffer.fromJSON(object.trueCountCache)
        : undefined,
    };
  },

  toJSON(message: Bitmap): unknown {
    const obj: any = {};
    message.trueCountCache !== undefined &&
      (obj.trueCountCache = message.trueCountCache
        ? CircularBuffer.toJSON(message.trueCountCache)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Bitmap>, I>>(object: I): Bitmap {
    const message = createBaseBitmap();
    message.trueCountCache =
      object.trueCountCache !== undefined && object.trueCountCache !== null
        ? CircularBuffer.fromPartial(object.trueCountCache)
        : undefined;
    return message;
  },
};

function createBaseCircularBuffer(): CircularBuffer {
  return { cumulativeValue: [], index: 0, maxSize: 0 };
}

export const CircularBuffer = {
  encode(message: CircularBuffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.cumulativeValue) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }
    if (message.maxSize !== 0) {
      writer.uint32(24).int32(message.maxSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CircularBuffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircularBuffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cumulativeValue.push(reader.uint64() as Long);
            }
          } else {
            message.cumulativeValue.push(reader.uint64() as Long);
          }
          break;
        case 2:
          message.index = reader.int32();
          break;
        case 3:
          message.maxSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CircularBuffer {
    return {
      cumulativeValue: Array.isArray(object?.cumulativeValue)
        ? object.cumulativeValue.map((e: any) => Long.fromValue(e))
        : [],
      index: isSet(object.index) ? Number(object.index) : 0,
      maxSize: isSet(object.maxSize) ? Number(object.maxSize) : 0,
    };
  },

  toJSON(message: CircularBuffer): unknown {
    const obj: any = {};
    if (message.cumulativeValue) {
      obj.cumulativeValue = message.cumulativeValue.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.cumulativeValue = [];
    }
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.maxSize !== undefined && (obj.maxSize = Math.round(message.maxSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CircularBuffer>, I>>(object: I): CircularBuffer {
    const message = createBaseCircularBuffer();
    message.cumulativeValue = object.cumulativeValue?.map((e) => Long.fromValue(e)) || [];
    message.index = object.index ?? 0;
    message.maxSize = object.maxSize ?? 0;
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
