/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Threshold } from "../../../../axelar/utils/v1beta1/threshold";

export const protobufPackage = "axelar.tss.exported.v1beta1";

export enum KeyRole {
  KEY_ROLE_UNSPECIFIED = 0,
  KEY_ROLE_MASTER_KEY = 1,
  KEY_ROLE_SECONDARY_KEY = 2,
  KEY_ROLE_EXTERNAL_KEY = 3,
  UNRECOGNIZED = -1,
}

export function keyRoleFromJSON(object: any): KeyRole {
  switch (object) {
    case 0:
    case "KEY_ROLE_UNSPECIFIED":
      return KeyRole.KEY_ROLE_UNSPECIFIED;
    case 1:
    case "KEY_ROLE_MASTER_KEY":
      return KeyRole.KEY_ROLE_MASTER_KEY;
    case 2:
    case "KEY_ROLE_SECONDARY_KEY":
      return KeyRole.KEY_ROLE_SECONDARY_KEY;
    case 3:
    case "KEY_ROLE_EXTERNAL_KEY":
      return KeyRole.KEY_ROLE_EXTERNAL_KEY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyRole.UNRECOGNIZED;
  }
}

export function keyRoleToJSON(object: KeyRole): string {
  switch (object) {
    case KeyRole.KEY_ROLE_UNSPECIFIED:
      return "KEY_ROLE_UNSPECIFIED";
    case KeyRole.KEY_ROLE_MASTER_KEY:
      return "KEY_ROLE_MASTER_KEY";
    case KeyRole.KEY_ROLE_SECONDARY_KEY:
      return "KEY_ROLE_SECONDARY_KEY";
    case KeyRole.KEY_ROLE_EXTERNAL_KEY:
      return "KEY_ROLE_EXTERNAL_KEY";
    case KeyRole.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum KeyType {
  KEY_TYPE_UNSPECIFIED = 0,
  KEY_TYPE_NONE = 1,
  KEY_TYPE_THRESHOLD = 2,
  KEY_TYPE_MULTISIG = 3,
  UNRECOGNIZED = -1,
}

export function keyTypeFromJSON(object: any): KeyType {
  switch (object) {
    case 0:
    case "KEY_TYPE_UNSPECIFIED":
      return KeyType.KEY_TYPE_UNSPECIFIED;
    case 1:
    case "KEY_TYPE_NONE":
      return KeyType.KEY_TYPE_NONE;
    case 2:
    case "KEY_TYPE_THRESHOLD":
      return KeyType.KEY_TYPE_THRESHOLD;
    case 3:
    case "KEY_TYPE_MULTISIG":
      return KeyType.KEY_TYPE_MULTISIG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyType.UNRECOGNIZED;
  }
}

export function keyTypeToJSON(object: KeyType): string {
  switch (object) {
    case KeyType.KEY_TYPE_UNSPECIFIED:
      return "KEY_TYPE_UNSPECIFIED";
    case KeyType.KEY_TYPE_NONE:
      return "KEY_TYPE_NONE";
    case KeyType.KEY_TYPE_THRESHOLD:
      return "KEY_TYPE_THRESHOLD";
    case KeyType.KEY_TYPE_MULTISIG:
      return "KEY_TYPE_MULTISIG";
    case KeyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum KeyShareDistributionPolicy {
  KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED = 0,
  KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE = 1,
  KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR = 2,
  UNRECOGNIZED = -1,
}

export function keyShareDistributionPolicyFromJSON(object: any): KeyShareDistributionPolicy {
  switch (object) {
    case 0:
    case "KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED":
      return KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED;
    case 1:
    case "KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE":
      return KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE;
    case 2:
    case "KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR":
      return KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyShareDistributionPolicy.UNRECOGNIZED;
  }
}

export function keyShareDistributionPolicyToJSON(object: KeyShareDistributionPolicy): string {
  switch (object) {
    case KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED:
      return "KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED";
    case KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE:
      return "KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE";
    case KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR:
      return "KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR";
    case KeyShareDistributionPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** KeyRequirement defines requirements for keys */
export interface KeyRequirement {
  keyRole: KeyRole;
  keyType: KeyType;
  minKeygenThreshold?: Threshold;
  safetyThreshold?: Threshold;
  keyShareDistributionPolicy: KeyShareDistributionPolicy;
  maxTotalShareCount: Long;
  minTotalShareCount: Long;
  keygenVotingThreshold?: Threshold;
  signVotingThreshold?: Threshold;
  keygenTimeout: Long;
  signTimeout: Long;
}

/** PubKeyInfo holds a pubkey and a signature */
export interface SigKeyPair {
  pubKey: Uint8Array;
  signature: Uint8Array;
}

function createBaseKeyRequirement(): KeyRequirement {
  return {
    keyRole: 0,
    keyType: 0,
    minKeygenThreshold: undefined,
    safetyThreshold: undefined,
    keyShareDistributionPolicy: 0,
    maxTotalShareCount: Long.ZERO,
    minTotalShareCount: Long.ZERO,
    keygenVotingThreshold: undefined,
    signVotingThreshold: undefined,
    keygenTimeout: Long.ZERO,
    signTimeout: Long.ZERO,
  };
}

export const KeyRequirement = {
  encode(message: KeyRequirement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyRole !== 0) {
      writer.uint32(8).int32(message.keyRole);
    }
    if (message.keyType !== 0) {
      writer.uint32(16).int32(message.keyType);
    }
    if (message.minKeygenThreshold !== undefined) {
      Threshold.encode(message.minKeygenThreshold, writer.uint32(26).fork()).ldelim();
    }
    if (message.safetyThreshold !== undefined) {
      Threshold.encode(message.safetyThreshold, writer.uint32(34).fork()).ldelim();
    }
    if (message.keyShareDistributionPolicy !== 0) {
      writer.uint32(40).int32(message.keyShareDistributionPolicy);
    }
    if (!message.maxTotalShareCount.isZero()) {
      writer.uint32(48).int64(message.maxTotalShareCount);
    }
    if (!message.minTotalShareCount.isZero()) {
      writer.uint32(56).int64(message.minTotalShareCount);
    }
    if (message.keygenVotingThreshold !== undefined) {
      Threshold.encode(message.keygenVotingThreshold, writer.uint32(66).fork()).ldelim();
    }
    if (message.signVotingThreshold !== undefined) {
      Threshold.encode(message.signVotingThreshold, writer.uint32(74).fork()).ldelim();
    }
    if (!message.keygenTimeout.isZero()) {
      writer.uint32(80).int64(message.keygenTimeout);
    }
    if (!message.signTimeout.isZero()) {
      writer.uint32(88).int64(message.signTimeout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyRequirement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyRole = reader.int32() as any;
          break;
        case 2:
          message.keyType = reader.int32() as any;
          break;
        case 3:
          message.minKeygenThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 4:
          message.safetyThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 5:
          message.keyShareDistributionPolicy = reader.int32() as any;
          break;
        case 6:
          message.maxTotalShareCount = reader.int64() as Long;
          break;
        case 7:
          message.minTotalShareCount = reader.int64() as Long;
          break;
        case 8:
          message.keygenVotingThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 9:
          message.signVotingThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 10:
          message.keygenTimeout = reader.int64() as Long;
          break;
        case 11:
          message.signTimeout = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyRequirement {
    return {
      keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : 0,
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : 0,
      minKeygenThreshold: isSet(object.minKeygenThreshold)
        ? Threshold.fromJSON(object.minKeygenThreshold)
        : undefined,
      safetyThreshold: isSet(object.safetyThreshold) ? Threshold.fromJSON(object.safetyThreshold) : undefined,
      keyShareDistributionPolicy: isSet(object.keyShareDistributionPolicy)
        ? keyShareDistributionPolicyFromJSON(object.keyShareDistributionPolicy)
        : 0,
      maxTotalShareCount: isSet(object.maxTotalShareCount)
        ? Long.fromValue(object.maxTotalShareCount)
        : Long.ZERO,
      minTotalShareCount: isSet(object.minTotalShareCount)
        ? Long.fromValue(object.minTotalShareCount)
        : Long.ZERO,
      keygenVotingThreshold: isSet(object.keygenVotingThreshold)
        ? Threshold.fromJSON(object.keygenVotingThreshold)
        : undefined,
      signVotingThreshold: isSet(object.signVotingThreshold)
        ? Threshold.fromJSON(object.signVotingThreshold)
        : undefined,
      keygenTimeout: isSet(object.keygenTimeout) ? Long.fromValue(object.keygenTimeout) : Long.ZERO,
      signTimeout: isSet(object.signTimeout) ? Long.fromValue(object.signTimeout) : Long.ZERO,
    };
  },

  toJSON(message: KeyRequirement): unknown {
    const obj: any = {};
    message.keyRole !== undefined && (obj.keyRole = keyRoleToJSON(message.keyRole));
    message.keyType !== undefined && (obj.keyType = keyTypeToJSON(message.keyType));
    message.minKeygenThreshold !== undefined &&
      (obj.minKeygenThreshold = message.minKeygenThreshold
        ? Threshold.toJSON(message.minKeygenThreshold)
        : undefined);
    message.safetyThreshold !== undefined &&
      (obj.safetyThreshold = message.safetyThreshold ? Threshold.toJSON(message.safetyThreshold) : undefined);
    message.keyShareDistributionPolicy !== undefined &&
      (obj.keyShareDistributionPolicy = keyShareDistributionPolicyToJSON(message.keyShareDistributionPolicy));
    message.maxTotalShareCount !== undefined &&
      (obj.maxTotalShareCount = (message.maxTotalShareCount || Long.ZERO).toString());
    message.minTotalShareCount !== undefined &&
      (obj.minTotalShareCount = (message.minTotalShareCount || Long.ZERO).toString());
    message.keygenVotingThreshold !== undefined &&
      (obj.keygenVotingThreshold = message.keygenVotingThreshold
        ? Threshold.toJSON(message.keygenVotingThreshold)
        : undefined);
    message.signVotingThreshold !== undefined &&
      (obj.signVotingThreshold = message.signVotingThreshold
        ? Threshold.toJSON(message.signVotingThreshold)
        : undefined);
    message.keygenTimeout !== undefined &&
      (obj.keygenTimeout = (message.keygenTimeout || Long.ZERO).toString());
    message.signTimeout !== undefined && (obj.signTimeout = (message.signTimeout || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyRequirement>, I>>(object: I): KeyRequirement {
    const message = createBaseKeyRequirement();
    message.keyRole = object.keyRole ?? 0;
    message.keyType = object.keyType ?? 0;
    message.minKeygenThreshold =
      object.minKeygenThreshold !== undefined && object.minKeygenThreshold !== null
        ? Threshold.fromPartial(object.minKeygenThreshold)
        : undefined;
    message.safetyThreshold =
      object.safetyThreshold !== undefined && object.safetyThreshold !== null
        ? Threshold.fromPartial(object.safetyThreshold)
        : undefined;
    message.keyShareDistributionPolicy = object.keyShareDistributionPolicy ?? 0;
    message.maxTotalShareCount =
      object.maxTotalShareCount !== undefined && object.maxTotalShareCount !== null
        ? Long.fromValue(object.maxTotalShareCount)
        : Long.ZERO;
    message.minTotalShareCount =
      object.minTotalShareCount !== undefined && object.minTotalShareCount !== null
        ? Long.fromValue(object.minTotalShareCount)
        : Long.ZERO;
    message.keygenVotingThreshold =
      object.keygenVotingThreshold !== undefined && object.keygenVotingThreshold !== null
        ? Threshold.fromPartial(object.keygenVotingThreshold)
        : undefined;
    message.signVotingThreshold =
      object.signVotingThreshold !== undefined && object.signVotingThreshold !== null
        ? Threshold.fromPartial(object.signVotingThreshold)
        : undefined;
    message.keygenTimeout =
      object.keygenTimeout !== undefined && object.keygenTimeout !== null
        ? Long.fromValue(object.keygenTimeout)
        : Long.ZERO;
    message.signTimeout =
      object.signTimeout !== undefined && object.signTimeout !== null
        ? Long.fromValue(object.signTimeout)
        : Long.ZERO;
    return message;
  },
};

function createBaseSigKeyPair(): SigKeyPair {
  return { pubKey: new Uint8Array(), signature: new Uint8Array() };
}

export const SigKeyPair = {
  encode(message: SigKeyPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey.length !== 0) {
      writer.uint32(10).bytes(message.pubKey);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigKeyPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigKeyPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.bytes();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SigKeyPair {
    return {
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: SigKeyPair): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SigKeyPair>, I>>(object: I): SigKeyPair {
    const message = createBaseSigKeyPair();
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
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
