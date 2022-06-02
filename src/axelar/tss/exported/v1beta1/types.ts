/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Threshold } from "../../../../axelar/utils/v1beta1/threshold";
import { Any } from "../../../../google/protobuf/any";
import { Timestamp } from "../../../../google/protobuf/timestamp";

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

export enum AckType {
  ACK_TYPE_UNSPECIFIED = 0,
  ACK_TYPE_KEYGEN = 1,
  ACK_TYPE_SIGN = 2,
  UNRECOGNIZED = -1,
}

export function ackTypeFromJSON(object: any): AckType {
  switch (object) {
    case 0:
    case "ACK_TYPE_UNSPECIFIED":
      return AckType.ACK_TYPE_UNSPECIFIED;
    case 1:
    case "ACK_TYPE_KEYGEN":
      return AckType.ACK_TYPE_KEYGEN;
    case 2:
    case "ACK_TYPE_SIGN":
      return AckType.ACK_TYPE_SIGN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AckType.UNRECOGNIZED;
  }
}

export function ackTypeToJSON(object: AckType): string {
  switch (object) {
    case AckType.ACK_TYPE_UNSPECIFIED:
      return "ACK_TYPE_UNSPECIFIED";
    case AckType.ACK_TYPE_KEYGEN:
      return "ACK_TYPE_KEYGEN";
    case AckType.ACK_TYPE_SIGN:
      return "ACK_TYPE_SIGN";
    case AckType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SigStatus {
  SIG_STATUS_UNSPECIFIED = 0,
  SIG_STATUS_QUEUED = 1,
  SIG_STATUS_SIGNING = 2,
  SIG_STATUS_SIGNED = 3,
  SIG_STATUS_ABORTED = 4,
  SIG_STATUS_INVALID = 5,
  UNRECOGNIZED = -1,
}

export function sigStatusFromJSON(object: any): SigStatus {
  switch (object) {
    case 0:
    case "SIG_STATUS_UNSPECIFIED":
      return SigStatus.SIG_STATUS_UNSPECIFIED;
    case 1:
    case "SIG_STATUS_QUEUED":
      return SigStatus.SIG_STATUS_QUEUED;
    case 2:
    case "SIG_STATUS_SIGNING":
      return SigStatus.SIG_STATUS_SIGNING;
    case 3:
    case "SIG_STATUS_SIGNED":
      return SigStatus.SIG_STATUS_SIGNED;
    case 4:
    case "SIG_STATUS_ABORTED":
      return SigStatus.SIG_STATUS_ABORTED;
    case 5:
    case "SIG_STATUS_INVALID":
      return SigStatus.SIG_STATUS_INVALID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SigStatus.UNRECOGNIZED;
  }
}

export function sigStatusToJSON(object: SigStatus): string {
  switch (object) {
    case SigStatus.SIG_STATUS_UNSPECIFIED:
      return "SIG_STATUS_UNSPECIFIED";
    case SigStatus.SIG_STATUS_QUEUED:
      return "SIG_STATUS_QUEUED";
    case SigStatus.SIG_STATUS_SIGNING:
      return "SIG_STATUS_SIGNING";
    case SigStatus.SIG_STATUS_SIGNED:
      return "SIG_STATUS_SIGNED";
    case SigStatus.SIG_STATUS_ABORTED:
      return "SIG_STATUS_ABORTED";
    case SigStatus.SIG_STATUS_INVALID:
      return "SIG_STATUS_INVALID";
    case SigStatus.UNRECOGNIZED:
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

/** SignInfo holds information about a sign request */
export interface SignInfo {
  keyId: string;
  sigId: string;
  msg: Uint8Array;
  snapshotCounter: Long;
  requestModule: string;
  /** @deprecated */
  metadata: string;
  moduleMetadata?: Any;
}

/** PubKeyInfo holds a pubkey and a signature */
export interface SigKeyPair {
  pubKey: Uint8Array;
  signature: Uint8Array;
}

/** Signature holds public key and ECDSA signature */
export interface Signature {
  sigId: string;
  singleSig?: Signature_SingleSig | undefined;
  multiSig?: Signature_MultiSig | undefined;
  sigStatus: SigStatus;
}

export interface Signature_SingleSig {
  sigKeyPair?: SigKeyPair;
}

export interface Signature_MultiSig {
  sigKeyPairs: SigKeyPair[];
}

export interface Key {
  id: string;
  role: KeyRole;
  type: KeyType;
  ecdsaKey?: Key_ECDSAKey | undefined;
  multisigKey?: Key_MultisigKey | undefined;
  rotatedAt?: Timestamp;
  rotationCount: Long;
  chain: string;
  snapshotCounter: Long;
}

export interface Key_ECDSAKey {
  value: Uint8Array;
}

export interface Key_MultisigKey {
  values: Uint8Array[];
  threshold: Long;
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

function createBaseSignInfo(): SignInfo {
  return {
    keyId: "",
    sigId: "",
    msg: new Uint8Array(),
    snapshotCounter: Long.ZERO,
    requestModule: "",
    metadata: "",
    moduleMetadata: undefined,
  };
}

export const SignInfo = {
  encode(message: SignInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.sigId !== "") {
      writer.uint32(18).string(message.sigId);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    if (!message.snapshotCounter.isZero()) {
      writer.uint32(32).int64(message.snapshotCounter);
    }
    if (message.requestModule !== "") {
      writer.uint32(42).string(message.requestModule);
    }
    if (message.metadata !== "") {
      writer.uint32(50).string(message.metadata);
    }
    if (message.moduleMetadata !== undefined) {
      Any.encode(message.moduleMetadata, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.sigId = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
          break;
        case 4:
          message.snapshotCounter = reader.int64() as Long;
          break;
        case 5:
          message.requestModule = reader.string();
          break;
        case 6:
          message.metadata = reader.string();
          break;
        case 7:
          message.moduleMetadata = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignInfo {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      sigId: isSet(object.sigId) ? String(object.sigId) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      snapshotCounter: isSet(object.snapshotCounter) ? Long.fromValue(object.snapshotCounter) : Long.ZERO,
      requestModule: isSet(object.requestModule) ? String(object.requestModule) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      moduleMetadata: isSet(object.moduleMetadata) ? Any.fromJSON(object.moduleMetadata) : undefined,
    };
  },

  toJSON(message: SignInfo): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.sigId !== undefined && (obj.sigId = message.sigId);
    message.msg !== undefined &&
      (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    message.snapshotCounter !== undefined &&
      (obj.snapshotCounter = (message.snapshotCounter || Long.ZERO).toString());
    message.requestModule !== undefined && (obj.requestModule = message.requestModule);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.moduleMetadata !== undefined &&
      (obj.moduleMetadata = message.moduleMetadata ? Any.toJSON(message.moduleMetadata) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignInfo>, I>>(object: I): SignInfo {
    const message = createBaseSignInfo();
    message.keyId = object.keyId ?? "";
    message.sigId = object.sigId ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.snapshotCounter =
      object.snapshotCounter !== undefined && object.snapshotCounter !== null
        ? Long.fromValue(object.snapshotCounter)
        : Long.ZERO;
    message.requestModule = object.requestModule ?? "";
    message.metadata = object.metadata ?? "";
    message.moduleMetadata =
      object.moduleMetadata !== undefined && object.moduleMetadata !== null
        ? Any.fromPartial(object.moduleMetadata)
        : undefined;
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

function createBaseSignature(): Signature {
  return { sigId: "", singleSig: undefined, multiSig: undefined, sigStatus: 0 };
}

export const Signature = {
  encode(message: Signature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sigId !== "") {
      writer.uint32(10).string(message.sigId);
    }
    if (message.singleSig !== undefined) {
      Signature_SingleSig.encode(message.singleSig, writer.uint32(18).fork()).ldelim();
    }
    if (message.multiSig !== undefined) {
      Signature_MultiSig.encode(message.multiSig, writer.uint32(26).fork()).ldelim();
    }
    if (message.sigStatus !== 0) {
      writer.uint32(32).int32(message.sigStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Signature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sigId = reader.string();
          break;
        case 2:
          message.singleSig = Signature_SingleSig.decode(reader, reader.uint32());
          break;
        case 3:
          message.multiSig = Signature_MultiSig.decode(reader, reader.uint32());
          break;
        case 4:
          message.sigStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Signature {
    return {
      sigId: isSet(object.sigId) ? String(object.sigId) : "",
      singleSig: isSet(object.singleSig) ? Signature_SingleSig.fromJSON(object.singleSig) : undefined,
      multiSig: isSet(object.multiSig) ? Signature_MultiSig.fromJSON(object.multiSig) : undefined,
      sigStatus: isSet(object.sigStatus) ? sigStatusFromJSON(object.sigStatus) : 0,
    };
  },

  toJSON(message: Signature): unknown {
    const obj: any = {};
    message.sigId !== undefined && (obj.sigId = message.sigId);
    message.singleSig !== undefined &&
      (obj.singleSig = message.singleSig ? Signature_SingleSig.toJSON(message.singleSig) : undefined);
    message.multiSig !== undefined &&
      (obj.multiSig = message.multiSig ? Signature_MultiSig.toJSON(message.multiSig) : undefined);
    message.sigStatus !== undefined && (obj.sigStatus = sigStatusToJSON(message.sigStatus));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Signature>, I>>(object: I): Signature {
    const message = createBaseSignature();
    message.sigId = object.sigId ?? "";
    message.singleSig =
      object.singleSig !== undefined && object.singleSig !== null
        ? Signature_SingleSig.fromPartial(object.singleSig)
        : undefined;
    message.multiSig =
      object.multiSig !== undefined && object.multiSig !== null
        ? Signature_MultiSig.fromPartial(object.multiSig)
        : undefined;
    message.sigStatus = object.sigStatus ?? 0;
    return message;
  },
};

function createBaseSignature_SingleSig(): Signature_SingleSig {
  return { sigKeyPair: undefined };
}

export const Signature_SingleSig = {
  encode(message: Signature_SingleSig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sigKeyPair !== undefined) {
      SigKeyPair.encode(message.sigKeyPair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Signature_SingleSig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignature_SingleSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sigKeyPair = SigKeyPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Signature_SingleSig {
    return {
      sigKeyPair: isSet(object.sigKeyPair) ? SigKeyPair.fromJSON(object.sigKeyPair) : undefined,
    };
  },

  toJSON(message: Signature_SingleSig): unknown {
    const obj: any = {};
    message.sigKeyPair !== undefined &&
      (obj.sigKeyPair = message.sigKeyPair ? SigKeyPair.toJSON(message.sigKeyPair) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Signature_SingleSig>, I>>(object: I): Signature_SingleSig {
    const message = createBaseSignature_SingleSig();
    message.sigKeyPair =
      object.sigKeyPair !== undefined && object.sigKeyPair !== null
        ? SigKeyPair.fromPartial(object.sigKeyPair)
        : undefined;
    return message;
  },
};

function createBaseSignature_MultiSig(): Signature_MultiSig {
  return { sigKeyPairs: [] };
}

export const Signature_MultiSig = {
  encode(message: Signature_MultiSig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sigKeyPairs) {
      SigKeyPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Signature_MultiSig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignature_MultiSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sigKeyPairs.push(SigKeyPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Signature_MultiSig {
    return {
      sigKeyPairs: Array.isArray(object?.sigKeyPairs)
        ? object.sigKeyPairs.map((e: any) => SigKeyPair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Signature_MultiSig): unknown {
    const obj: any = {};
    if (message.sigKeyPairs) {
      obj.sigKeyPairs = message.sigKeyPairs.map((e) => (e ? SigKeyPair.toJSON(e) : undefined));
    } else {
      obj.sigKeyPairs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Signature_MultiSig>, I>>(object: I): Signature_MultiSig {
    const message = createBaseSignature_MultiSig();
    message.sigKeyPairs = object.sigKeyPairs?.map((e) => SigKeyPair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseKey(): Key {
  return {
    id: "",
    role: 0,
    type: 0,
    ecdsaKey: undefined,
    multisigKey: undefined,
    rotatedAt: undefined,
    rotationCount: Long.ZERO,
    chain: "",
    snapshotCounter: Long.ZERO,
  };
}

export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.role !== 0) {
      writer.uint32(16).int32(message.role);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.ecdsaKey !== undefined) {
      Key_ECDSAKey.encode(message.ecdsaKey, writer.uint32(34).fork()).ldelim();
    }
    if (message.multisigKey !== undefined) {
      Key_MultisigKey.encode(message.multisigKey, writer.uint32(42).fork()).ldelim();
    }
    if (message.rotatedAt !== undefined) {
      Timestamp.encode(message.rotatedAt, writer.uint32(50).fork()).ldelim();
    }
    if (!message.rotationCount.isZero()) {
      writer.uint32(56).int64(message.rotationCount);
    }
    if (message.chain !== "") {
      writer.uint32(66).string(message.chain);
    }
    if (!message.snapshotCounter.isZero()) {
      writer.uint32(72).int64(message.snapshotCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.role = reader.int32() as any;
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.ecdsaKey = Key_ECDSAKey.decode(reader, reader.uint32());
          break;
        case 5:
          message.multisigKey = Key_MultisigKey.decode(reader, reader.uint32());
          break;
        case 6:
          message.rotatedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.rotationCount = reader.int64() as Long;
          break;
        case 8:
          message.chain = reader.string();
          break;
        case 9:
          message.snapshotCounter = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Key {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      role: isSet(object.role) ? keyRoleFromJSON(object.role) : 0,
      type: isSet(object.type) ? keyTypeFromJSON(object.type) : 0,
      ecdsaKey: isSet(object.ecdsaKey) ? Key_ECDSAKey.fromJSON(object.ecdsaKey) : undefined,
      multisigKey: isSet(object.multisigKey) ? Key_MultisigKey.fromJSON(object.multisigKey) : undefined,
      rotatedAt: isSet(object.rotatedAt) ? fromJsonTimestamp(object.rotatedAt) : undefined,
      rotationCount: isSet(object.rotationCount) ? Long.fromValue(object.rotationCount) : Long.ZERO,
      chain: isSet(object.chain) ? String(object.chain) : "",
      snapshotCounter: isSet(object.snapshotCounter) ? Long.fromValue(object.snapshotCounter) : Long.ZERO,
    };
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.role !== undefined && (obj.role = keyRoleToJSON(message.role));
    message.type !== undefined && (obj.type = keyTypeToJSON(message.type));
    message.ecdsaKey !== undefined &&
      (obj.ecdsaKey = message.ecdsaKey ? Key_ECDSAKey.toJSON(message.ecdsaKey) : undefined);
    message.multisigKey !== undefined &&
      (obj.multisigKey = message.multisigKey ? Key_MultisigKey.toJSON(message.multisigKey) : undefined);
    message.rotatedAt !== undefined && (obj.rotatedAt = fromTimestamp(message.rotatedAt).toISOString());
    message.rotationCount !== undefined &&
      (obj.rotationCount = (message.rotationCount || Long.ZERO).toString());
    message.chain !== undefined && (obj.chain = message.chain);
    message.snapshotCounter !== undefined &&
      (obj.snapshotCounter = (message.snapshotCounter || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Key>, I>>(object: I): Key {
    const message = createBaseKey();
    message.id = object.id ?? "";
    message.role = object.role ?? 0;
    message.type = object.type ?? 0;
    message.ecdsaKey =
      object.ecdsaKey !== undefined && object.ecdsaKey !== null
        ? Key_ECDSAKey.fromPartial(object.ecdsaKey)
        : undefined;
    message.multisigKey =
      object.multisigKey !== undefined && object.multisigKey !== null
        ? Key_MultisigKey.fromPartial(object.multisigKey)
        : undefined;
    message.rotatedAt =
      object.rotatedAt !== undefined && object.rotatedAt !== null
        ? Timestamp.fromPartial(object.rotatedAt)
        : undefined;
    message.rotationCount =
      object.rotationCount !== undefined && object.rotationCount !== null
        ? Long.fromValue(object.rotationCount)
        : Long.ZERO;
    message.chain = object.chain ?? "";
    message.snapshotCounter =
      object.snapshotCounter !== undefined && object.snapshotCounter !== null
        ? Long.fromValue(object.snapshotCounter)
        : Long.ZERO;
    return message;
  },
};

function createBaseKey_ECDSAKey(): Key_ECDSAKey {
  return { value: new Uint8Array() };
}

export const Key_ECDSAKey = {
  encode(message: Key_ECDSAKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key_ECDSAKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey_ECDSAKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Key_ECDSAKey {
    return {
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: Key_ECDSAKey): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Key_ECDSAKey>, I>>(object: I): Key_ECDSAKey {
    const message = createBaseKey_ECDSAKey();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseKey_MultisigKey(): Key_MultisigKey {
  return { values: [], threshold: Long.ZERO };
}

export const Key_MultisigKey = {
  encode(message: Key_MultisigKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).bytes(v!);
    }
    if (!message.threshold.isZero()) {
      writer.uint32(16).int64(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key_MultisigKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey_MultisigKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(reader.bytes());
          break;
        case 2:
          message.threshold = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Key_MultisigKey {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => bytesFromBase64(e)) : [],
      threshold: isSet(object.threshold) ? Long.fromValue(object.threshold) : Long.ZERO,
    };
  },

  toJSON(message: Key_MultisigKey): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.values = [];
    }
    message.threshold !== undefined && (obj.threshold = (message.threshold || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Key_MultisigKey>, I>>(object: I): Key_MultisigKey {
    const message = createBaseKey_MultisigKey();
    message.values = object.values?.map((e) => e) || [];
    message.threshold =
      object.threshold !== undefined && object.threshold !== null
        ? Long.fromValue(object.threshold)
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
