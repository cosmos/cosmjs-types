/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import {
  KeyShareDistributionPolicy,
  keyShareDistributionPolicyFromJSON,
  keyShareDistributionPolicyToJSON,
} from "../../../../axelar/tss/exported/v1beta1/types";

export const protobufPackage = "axelar.snapshot.exported.v1beta1";

export enum ValidatorIllegibility {
  /**
   * VALIDATOR_ILLEGIBILITY_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
   * be powers of 2
   */
  VALIDATOR_ILLEGIBILITY_UNSPECIFIED = 0,
  VALIDATOR_ILLEGIBILITY_TOMBSTONED = 1,
  VALIDATOR_ILLEGIBILITY_JAILED = 2,
  VALIDATOR_ILLEGIBILITY_MISSED_TOO_MANY_BLOCKS = 4,
  VALIDATOR_ILLEGIBILITY_NO_PROXY_REGISTERED = 8,
  VALIDATOR_ILLEGIBILITY_TSS_SUSPENDED = 16,
  VALIDATOR_ILLEGIBILITY_PROXY_INSUFICIENT_FUNDS = 32,
  UNRECOGNIZED = -1,
}

export function validatorIllegibilityFromJSON(object: any): ValidatorIllegibility {
  switch (object) {
    case 0:
    case "VALIDATOR_ILLEGIBILITY_UNSPECIFIED":
      return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_UNSPECIFIED;
    case 1:
    case "VALIDATOR_ILLEGIBILITY_TOMBSTONED":
      return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_TOMBSTONED;
    case 2:
    case "VALIDATOR_ILLEGIBILITY_JAILED":
      return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_JAILED;
    case 4:
    case "VALIDATOR_ILLEGIBILITY_MISSED_TOO_MANY_BLOCKS":
      return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_MISSED_TOO_MANY_BLOCKS;
    case 8:
    case "VALIDATOR_ILLEGIBILITY_NO_PROXY_REGISTERED":
      return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_NO_PROXY_REGISTERED;
    case 16:
    case "VALIDATOR_ILLEGIBILITY_TSS_SUSPENDED":
      return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_TSS_SUSPENDED;
    case 32:
    case "VALIDATOR_ILLEGIBILITY_PROXY_INSUFICIENT_FUNDS":
      return ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_PROXY_INSUFICIENT_FUNDS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ValidatorIllegibility.UNRECOGNIZED;
  }
}

export function validatorIllegibilityToJSON(object: ValidatorIllegibility): string {
  switch (object) {
    case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_UNSPECIFIED:
      return "VALIDATOR_ILLEGIBILITY_UNSPECIFIED";
    case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_TOMBSTONED:
      return "VALIDATOR_ILLEGIBILITY_TOMBSTONED";
    case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_JAILED:
      return "VALIDATOR_ILLEGIBILITY_JAILED";
    case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_MISSED_TOO_MANY_BLOCKS:
      return "VALIDATOR_ILLEGIBILITY_MISSED_TOO_MANY_BLOCKS";
    case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_NO_PROXY_REGISTERED:
      return "VALIDATOR_ILLEGIBILITY_NO_PROXY_REGISTERED";
    case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_TSS_SUSPENDED:
      return "VALIDATOR_ILLEGIBILITY_TSS_SUSPENDED";
    case ValidatorIllegibility.VALIDATOR_ILLEGIBILITY_PROXY_INSUFICIENT_FUNDS:
      return "VALIDATOR_ILLEGIBILITY_PROXY_INSUFICIENT_FUNDS";
    case ValidatorIllegibility.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Validator {
  sdkValidator?: Any;
  shareCount: Long;
}

export interface Snapshot {
  validators: Validator[];
  timestamp?: Timestamp;
  height: Long;
  totalShareCount: Uint8Array;
  counter: Long;
  keyShareDistributionPolicy: KeyShareDistributionPolicy;
  corruptionThreshold: Long;
}

function createBaseValidator(): Validator {
  return { sdkValidator: undefined, shareCount: Long.ZERO };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sdkValidator !== undefined) {
      Any.encode(message.sdkValidator, writer.uint32(10).fork()).ldelim();
    }
    if (!message.shareCount.isZero()) {
      writer.uint32(16).int64(message.shareCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sdkValidator = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.shareCount = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    return {
      sdkValidator: isSet(object.sdkValidator) ? Any.fromJSON(object.sdkValidator) : undefined,
      shareCount: isSet(object.shareCount) ? Long.fromValue(object.shareCount) : Long.ZERO,
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.sdkValidator !== undefined &&
      (obj.sdkValidator = message.sdkValidator ? Any.toJSON(message.sdkValidator) : undefined);
    message.shareCount !== undefined && (obj.shareCount = (message.shareCount || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.sdkValidator =
      object.sdkValidator !== undefined && object.sdkValidator !== null
        ? Any.fromPartial(object.sdkValidator)
        : undefined;
    message.shareCount =
      object.shareCount !== undefined && object.shareCount !== null
        ? Long.fromValue(object.shareCount)
        : Long.ZERO;
    return message;
  },
};

function createBaseSnapshot(): Snapshot {
  return {
    validators: [],
    timestamp: undefined,
    height: Long.ZERO,
    totalShareCount: new Uint8Array(),
    counter: Long.ZERO,
    keyShareDistributionPolicy: 0,
    corruptionThreshold: Long.ZERO,
  };
}

export const Snapshot = {
  encode(message: Snapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.totalShareCount.length !== 0) {
      writer.uint32(34).bytes(message.totalShareCount);
    }
    if (!message.counter.isZero()) {
      writer.uint32(40).int64(message.counter);
    }
    if (message.keyShareDistributionPolicy !== 0) {
      writer.uint32(48).int32(message.keyShareDistributionPolicy);
    }
    if (!message.corruptionThreshold.isZero()) {
      writer.uint32(56).int64(message.corruptionThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64() as Long;
          break;
        case 4:
          message.totalShareCount = reader.bytes();
          break;
        case 5:
          message.counter = reader.int64() as Long;
          break;
        case 6:
          message.keyShareDistributionPolicy = reader.int32() as any;
          break;
        case 7:
          message.corruptionThreshold = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Snapshot {
    return {
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => Validator.fromJSON(e))
        : [],
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      totalShareCount: isSet(object.totalShareCount)
        ? bytesFromBase64(object.totalShareCount)
        : new Uint8Array(),
      counter: isSet(object.counter) ? Long.fromValue(object.counter) : Long.ZERO,
      keyShareDistributionPolicy: isSet(object.keyShareDistributionPolicy)
        ? keyShareDistributionPolicyFromJSON(object.keyShareDistributionPolicy)
        : 0,
      corruptionThreshold: isSet(object.corruptionThreshold)
        ? Long.fromValue(object.corruptionThreshold)
        : Long.ZERO,
    };
  },

  toJSON(message: Snapshot): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.totalShareCount !== undefined &&
      (obj.totalShareCount = base64FromBytes(
        message.totalShareCount !== undefined ? message.totalShareCount : new Uint8Array(),
      ));
    message.counter !== undefined && (obj.counter = (message.counter || Long.ZERO).toString());
    message.keyShareDistributionPolicy !== undefined &&
      (obj.keyShareDistributionPolicy = keyShareDistributionPolicyToJSON(message.keyShareDistributionPolicy));
    message.corruptionThreshold !== undefined &&
      (obj.corruptionThreshold = (message.corruptionThreshold || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot {
    const message = createBaseSnapshot();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Timestamp.fromPartial(object.timestamp)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.totalShareCount = object.totalShareCount ?? new Uint8Array();
    message.counter =
      object.counter !== undefined && object.counter !== null ? Long.fromValue(object.counter) : Long.ZERO;
    message.keyShareDistributionPolicy = object.keyShareDistributionPolicy ?? 0;
    message.corruptionThreshold =
      object.corruptionThreshold !== undefined && object.corruptionThreshold !== null
        ? Long.fromValue(object.corruptionThreshold)
        : Long.ZERO;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === "string") {
    return toTimestamp(new Date(o));
  } else {
    return Timestamp.fromJSON(o);
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
