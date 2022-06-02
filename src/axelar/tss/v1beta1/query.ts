/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  SigStatus,
  KeyRole,
  sigStatusFromJSON,
  sigStatusToJSON,
  keyRoleFromJSON,
  keyRoleToJSON,
} from "../../../axelar/tss/exported/v1beta1/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { KeygenOutput } from "../../../axelar/tss/tofnd/v1beta1/tofnd";

export const protobufPackage = "axelar.tss.v1beta1";

export enum VoteStatus {
  VOTE_STATUS_UNSPECIFIED = 0,
  VOTE_STATUS_NOT_FOUND = 1,
  VOTE_STATUS_PENDING = 2,
  VOTE_STATUS_DECIDED = 3,
  UNRECOGNIZED = -1,
}

export function voteStatusFromJSON(object: any): VoteStatus {
  switch (object) {
    case 0:
    case "VOTE_STATUS_UNSPECIFIED":
      return VoteStatus.VOTE_STATUS_UNSPECIFIED;
    case 1:
    case "VOTE_STATUS_NOT_FOUND":
      return VoteStatus.VOTE_STATUS_NOT_FOUND;
    case 2:
    case "VOTE_STATUS_PENDING":
      return VoteStatus.VOTE_STATUS_PENDING;
    case 3:
    case "VOTE_STATUS_DECIDED":
      return VoteStatus.VOTE_STATUS_DECIDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteStatus.UNRECOGNIZED;
  }
}

export function voteStatusToJSON(object: VoteStatus): string {
  switch (object) {
    case VoteStatus.VOTE_STATUS_UNSPECIFIED:
      return "VOTE_STATUS_UNSPECIFIED";
    case VoteStatus.VOTE_STATUS_NOT_FOUND:
      return "VOTE_STATUS_NOT_FOUND";
    case VoteStatus.VOTE_STATUS_PENDING:
      return "VOTE_STATUS_PENDING";
    case VoteStatus.VOTE_STATUS_DECIDED:
      return "VOTE_STATUS_DECIDED";
    case VoteStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface QuerySignatureResponse {
  thresholdSignature?: QuerySignatureResponse_ThresholdSignature | undefined;
  multisigSignature?: QuerySignatureResponse_MultisigSignature | undefined;
}

export interface QuerySignatureResponse_Signature {
  r: string;
  s: string;
}

export interface QuerySignatureResponse_ThresholdSignature {
  voteStatus: VoteStatus;
  signature?: QuerySignatureResponse_Signature;
}

export interface QuerySignatureResponse_MultisigSignature {
  sigStatus: SigStatus;
  signatures: QuerySignatureResponse_Signature[];
}

export interface QueryKeyResponse {
  ecdsaKey?: QueryKeyResponse_ECDSAKey | undefined;
  multisigKey?: QueryKeyResponse_MultisigKey | undefined;
  role: KeyRole;
  rotatedAt?: Timestamp;
}

export interface QueryKeyResponse_Key {
  x: string;
  y: string;
}

export interface QueryKeyResponse_ECDSAKey {
  voteStatus: VoteStatus;
  key?: QueryKeyResponse_Key;
}

export interface QueryKeyResponse_MultisigKey {
  threshold: Long;
  key: QueryKeyResponse_Key[];
}

export interface QueryRecoveryResponse {
  partyUids: string[];
  partyShareCounts: number[];
  threshold: number;
  keygenOutput?: KeygenOutput;
}

export interface QueryKeyShareResponse {
  shareInfos: QueryKeyShareResponse_ShareInfo[];
}

export interface QueryKeyShareResponse_ShareInfo {
  keyId: string;
  keyChain: string;
  keyRole: string;
  snapshotBlockNumber: Long;
  validatorAddress: string;
  numValidatorShares: Long;
  numTotalShares: Long;
}

export interface QueryDeactivatedOperatorsResponse {
  operatorAddresses: string[];
}

export interface QueryActiveOldKeysValidatorResponse {
  keysInfo: QueryActiveOldKeysValidatorResponse_KeyInfo[];
}

export interface QueryActiveOldKeysValidatorResponse_KeyInfo {
  id: string;
  chain: string;
  role: number;
}

export interface QueryActiveOldKeysResponse {
  keyIds: string[];
}

export interface QueryExternalKeyIDResponse {
  keyIds: string[];
}

export interface NextKeyIDRequest {
  chain: string;
  keyRole: KeyRole;
}

export interface NextKeyIDResponse {
  keyId: string;
}

export interface AssignableKeyRequest {
  chain: string;
  keyRole: KeyRole;
}

export interface AssignableKeyResponse {
  assignable: boolean;
}

export interface ValidatorMultisigKeysRequest {
  address: string;
}

export interface ValidatorMultisigKeysResponse {
  keys: { [key: string]: ValidatorMultisigKeysResponse_Keys };
}

export interface ValidatorMultisigKeysResponse_Keys {
  keys: Uint8Array[];
}

export interface ValidatorMultisigKeysResponse_KeysEntry {
  key: string;
  value?: ValidatorMultisigKeysResponse_Keys;
}

function createBaseQuerySignatureResponse(): QuerySignatureResponse {
  return { thresholdSignature: undefined, multisigSignature: undefined };
}

export const QuerySignatureResponse = {
  encode(message: QuerySignatureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.thresholdSignature !== undefined) {
      QuerySignatureResponse_ThresholdSignature.encode(
        message.thresholdSignature,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.multisigSignature !== undefined) {
      QuerySignatureResponse_MultisigSignature.encode(
        message.multisigSignature,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignatureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignatureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.thresholdSignature = QuerySignatureResponse_ThresholdSignature.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.multisigSignature = QuerySignatureResponse_MultisigSignature.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignatureResponse {
    return {
      thresholdSignature: isSet(object.thresholdSignature)
        ? QuerySignatureResponse_ThresholdSignature.fromJSON(object.thresholdSignature)
        : undefined,
      multisigSignature: isSet(object.multisigSignature)
        ? QuerySignatureResponse_MultisigSignature.fromJSON(object.multisigSignature)
        : undefined,
    };
  },

  toJSON(message: QuerySignatureResponse): unknown {
    const obj: any = {};
    message.thresholdSignature !== undefined &&
      (obj.thresholdSignature = message.thresholdSignature
        ? QuerySignatureResponse_ThresholdSignature.toJSON(message.thresholdSignature)
        : undefined);
    message.multisigSignature !== undefined &&
      (obj.multisigSignature = message.multisigSignature
        ? QuerySignatureResponse_MultisigSignature.toJSON(message.multisigSignature)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignatureResponse>, I>>(object: I): QuerySignatureResponse {
    const message = createBaseQuerySignatureResponse();
    message.thresholdSignature =
      object.thresholdSignature !== undefined && object.thresholdSignature !== null
        ? QuerySignatureResponse_ThresholdSignature.fromPartial(object.thresholdSignature)
        : undefined;
    message.multisigSignature =
      object.multisigSignature !== undefined && object.multisigSignature !== null
        ? QuerySignatureResponse_MultisigSignature.fromPartial(object.multisigSignature)
        : undefined;
    return message;
  },
};

function createBaseQuerySignatureResponse_Signature(): QuerySignatureResponse_Signature {
  return { r: "", s: "" };
}

export const QuerySignatureResponse_Signature = {
  encode(message: QuerySignatureResponse_Signature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.r !== "") {
      writer.uint32(10).string(message.r);
    }
    if (message.s !== "") {
      writer.uint32(18).string(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignatureResponse_Signature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignatureResponse_Signature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.r = reader.string();
          break;
        case 2:
          message.s = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignatureResponse_Signature {
    return {
      r: isSet(object.r) ? String(object.r) : "",
      s: isSet(object.s) ? String(object.s) : "",
    };
  },

  toJSON(message: QuerySignatureResponse_Signature): unknown {
    const obj: any = {};
    message.r !== undefined && (obj.r = message.r);
    message.s !== undefined && (obj.s = message.s);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignatureResponse_Signature>, I>>(
    object: I,
  ): QuerySignatureResponse_Signature {
    const message = createBaseQuerySignatureResponse_Signature();
    message.r = object.r ?? "";
    message.s = object.s ?? "";
    return message;
  },
};

function createBaseQuerySignatureResponse_ThresholdSignature(): QuerySignatureResponse_ThresholdSignature {
  return { voteStatus: 0, signature: undefined };
}

export const QuerySignatureResponse_ThresholdSignature = {
  encode(
    message: QuerySignatureResponse_ThresholdSignature,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.voteStatus !== 0) {
      writer.uint32(8).int32(message.voteStatus);
    }
    if (message.signature !== undefined) {
      QuerySignatureResponse_Signature.encode(message.signature, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignatureResponse_ThresholdSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignatureResponse_ThresholdSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteStatus = reader.int32() as any;
          break;
        case 2:
          message.signature = QuerySignatureResponse_Signature.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignatureResponse_ThresholdSignature {
    return {
      voteStatus: isSet(object.voteStatus) ? voteStatusFromJSON(object.voteStatus) : 0,
      signature: isSet(object.signature)
        ? QuerySignatureResponse_Signature.fromJSON(object.signature)
        : undefined,
    };
  },

  toJSON(message: QuerySignatureResponse_ThresholdSignature): unknown {
    const obj: any = {};
    message.voteStatus !== undefined && (obj.voteStatus = voteStatusToJSON(message.voteStatus));
    message.signature !== undefined &&
      (obj.signature = message.signature
        ? QuerySignatureResponse_Signature.toJSON(message.signature)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignatureResponse_ThresholdSignature>, I>>(
    object: I,
  ): QuerySignatureResponse_ThresholdSignature {
    const message = createBaseQuerySignatureResponse_ThresholdSignature();
    message.voteStatus = object.voteStatus ?? 0;
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? QuerySignatureResponse_Signature.fromPartial(object.signature)
        : undefined;
    return message;
  },
};

function createBaseQuerySignatureResponse_MultisigSignature(): QuerySignatureResponse_MultisigSignature {
  return { sigStatus: 0, signatures: [] };
}

export const QuerySignatureResponse_MultisigSignature = {
  encode(
    message: QuerySignatureResponse_MultisigSignature,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sigStatus !== 0) {
      writer.uint32(8).int32(message.sigStatus);
    }
    for (const v of message.signatures) {
      QuerySignatureResponse_Signature.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignatureResponse_MultisigSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignatureResponse_MultisigSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sigStatus = reader.int32() as any;
          break;
        case 2:
          message.signatures.push(QuerySignatureResponse_Signature.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignatureResponse_MultisigSignature {
    return {
      sigStatus: isSet(object.sigStatus) ? sigStatusFromJSON(object.sigStatus) : 0,
      signatures: Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => QuerySignatureResponse_Signature.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QuerySignatureResponse_MultisigSignature): unknown {
    const obj: any = {};
    message.sigStatus !== undefined && (obj.sigStatus = sigStatusToJSON(message.sigStatus));
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) =>
        e ? QuerySignatureResponse_Signature.toJSON(e) : undefined,
      );
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignatureResponse_MultisigSignature>, I>>(
    object: I,
  ): QuerySignatureResponse_MultisigSignature {
    const message = createBaseQuerySignatureResponse_MultisigSignature();
    message.sigStatus = object.sigStatus ?? 0;
    message.signatures = object.signatures?.map((e) => QuerySignatureResponse_Signature.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryKeyResponse(): QueryKeyResponse {
  return { ecdsaKey: undefined, multisigKey: undefined, role: 0, rotatedAt: undefined };
}

export const QueryKeyResponse = {
  encode(message: QueryKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ecdsaKey !== undefined) {
      QueryKeyResponse_ECDSAKey.encode(message.ecdsaKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.multisigKey !== undefined) {
      QueryKeyResponse_MultisigKey.encode(message.multisigKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.role !== 0) {
      writer.uint32(24).int32(message.role);
    }
    if (message.rotatedAt !== undefined) {
      Timestamp.encode(message.rotatedAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ecdsaKey = QueryKeyResponse_ECDSAKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.multisigKey = QueryKeyResponse_MultisigKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.role = reader.int32() as any;
          break;
        case 4:
          message.rotatedAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryKeyResponse {
    return {
      ecdsaKey: isSet(object.ecdsaKey) ? QueryKeyResponse_ECDSAKey.fromJSON(object.ecdsaKey) : undefined,
      multisigKey: isSet(object.multisigKey)
        ? QueryKeyResponse_MultisigKey.fromJSON(object.multisigKey)
        : undefined,
      role: isSet(object.role) ? keyRoleFromJSON(object.role) : 0,
      rotatedAt: isSet(object.rotatedAt) ? fromJsonTimestamp(object.rotatedAt) : undefined,
    };
  },

  toJSON(message: QueryKeyResponse): unknown {
    const obj: any = {};
    message.ecdsaKey !== undefined &&
      (obj.ecdsaKey = message.ecdsaKey ? QueryKeyResponse_ECDSAKey.toJSON(message.ecdsaKey) : undefined);
    message.multisigKey !== undefined &&
      (obj.multisigKey = message.multisigKey
        ? QueryKeyResponse_MultisigKey.toJSON(message.multisigKey)
        : undefined);
    message.role !== undefined && (obj.role = keyRoleToJSON(message.role));
    message.rotatedAt !== undefined && (obj.rotatedAt = fromTimestamp(message.rotatedAt).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryKeyResponse>, I>>(object: I): QueryKeyResponse {
    const message = createBaseQueryKeyResponse();
    message.ecdsaKey =
      object.ecdsaKey !== undefined && object.ecdsaKey !== null
        ? QueryKeyResponse_ECDSAKey.fromPartial(object.ecdsaKey)
        : undefined;
    message.multisigKey =
      object.multisigKey !== undefined && object.multisigKey !== null
        ? QueryKeyResponse_MultisigKey.fromPartial(object.multisigKey)
        : undefined;
    message.role = object.role ?? 0;
    message.rotatedAt =
      object.rotatedAt !== undefined && object.rotatedAt !== null
        ? Timestamp.fromPartial(object.rotatedAt)
        : undefined;
    return message;
  },
};

function createBaseQueryKeyResponse_Key(): QueryKeyResponse_Key {
  return { x: "", y: "" };
}

export const QueryKeyResponse_Key = {
  encode(message: QueryKeyResponse_Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== "") {
      writer.uint32(10).string(message.x);
    }
    if (message.y !== "") {
      writer.uint32(18).string(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryKeyResponse_Key {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKeyResponse_Key();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.string();
          break;
        case 2:
          message.y = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryKeyResponse_Key {
    return {
      x: isSet(object.x) ? String(object.x) : "",
      y: isSet(object.y) ? String(object.y) : "",
    };
  },

  toJSON(message: QueryKeyResponse_Key): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryKeyResponse_Key>, I>>(object: I): QueryKeyResponse_Key {
    const message = createBaseQueryKeyResponse_Key();
    message.x = object.x ?? "";
    message.y = object.y ?? "";
    return message;
  },
};

function createBaseQueryKeyResponse_ECDSAKey(): QueryKeyResponse_ECDSAKey {
  return { voteStatus: 0, key: undefined };
}

export const QueryKeyResponse_ECDSAKey = {
  encode(message: QueryKeyResponse_ECDSAKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voteStatus !== 0) {
      writer.uint32(8).int32(message.voteStatus);
    }
    if (message.key !== undefined) {
      QueryKeyResponse_Key.encode(message.key, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryKeyResponse_ECDSAKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKeyResponse_ECDSAKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteStatus = reader.int32() as any;
          break;
        case 2:
          message.key = QueryKeyResponse_Key.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryKeyResponse_ECDSAKey {
    return {
      voteStatus: isSet(object.voteStatus) ? voteStatusFromJSON(object.voteStatus) : 0,
      key: isSet(object.key) ? QueryKeyResponse_Key.fromJSON(object.key) : undefined,
    };
  },

  toJSON(message: QueryKeyResponse_ECDSAKey): unknown {
    const obj: any = {};
    message.voteStatus !== undefined && (obj.voteStatus = voteStatusToJSON(message.voteStatus));
    message.key !== undefined &&
      (obj.key = message.key ? QueryKeyResponse_Key.toJSON(message.key) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryKeyResponse_ECDSAKey>, I>>(
    object: I,
  ): QueryKeyResponse_ECDSAKey {
    const message = createBaseQueryKeyResponse_ECDSAKey();
    message.voteStatus = object.voteStatus ?? 0;
    message.key =
      object.key !== undefined && object.key !== null
        ? QueryKeyResponse_Key.fromPartial(object.key)
        : undefined;
    return message;
  },
};

function createBaseQueryKeyResponse_MultisigKey(): QueryKeyResponse_MultisigKey {
  return { threshold: Long.ZERO, key: [] };
}

export const QueryKeyResponse_MultisigKey = {
  encode(message: QueryKeyResponse_MultisigKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.threshold.isZero()) {
      writer.uint32(8).int64(message.threshold);
    }
    for (const v of message.key) {
      QueryKeyResponse_Key.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryKeyResponse_MultisigKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKeyResponse_MultisigKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.int64() as Long;
          break;
        case 2:
          message.key.push(QueryKeyResponse_Key.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryKeyResponse_MultisigKey {
    return {
      threshold: isSet(object.threshold) ? Long.fromValue(object.threshold) : Long.ZERO,
      key: Array.isArray(object?.key) ? object.key.map((e: any) => QueryKeyResponse_Key.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryKeyResponse_MultisigKey): unknown {
    const obj: any = {};
    message.threshold !== undefined && (obj.threshold = (message.threshold || Long.ZERO).toString());
    if (message.key) {
      obj.key = message.key.map((e) => (e ? QueryKeyResponse_Key.toJSON(e) : undefined));
    } else {
      obj.key = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryKeyResponse_MultisigKey>, I>>(
    object: I,
  ): QueryKeyResponse_MultisigKey {
    const message = createBaseQueryKeyResponse_MultisigKey();
    message.threshold =
      object.threshold !== undefined && object.threshold !== null
        ? Long.fromValue(object.threshold)
        : Long.ZERO;
    message.key = object.key?.map((e) => QueryKeyResponse_Key.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryRecoveryResponse(): QueryRecoveryResponse {
  return { partyUids: [], partyShareCounts: [], threshold: 0, keygenOutput: undefined };
}

export const QueryRecoveryResponse = {
  encode(message: QueryRecoveryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.partyUids) {
      writer.uint32(10).string(v!);
    }
    writer.uint32(18).fork();
    for (const v of message.partyShareCounts) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.threshold !== 0) {
      writer.uint32(24).uint32(message.threshold);
    }
    if (message.keygenOutput !== undefined) {
      KeygenOutput.encode(message.keygenOutput, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecoveryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecoveryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyUids.push(reader.string());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.partyShareCounts.push(reader.uint32());
            }
          } else {
            message.partyShareCounts.push(reader.uint32());
          }
          break;
        case 3:
          message.threshold = reader.uint32();
          break;
        case 4:
          message.keygenOutput = KeygenOutput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRecoveryResponse {
    return {
      partyUids: Array.isArray(object?.partyUids) ? object.partyUids.map((e: any) => String(e)) : [],
      partyShareCounts: Array.isArray(object?.partyShareCounts)
        ? object.partyShareCounts.map((e: any) => Number(e))
        : [],
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
      keygenOutput: isSet(object.keygenOutput) ? KeygenOutput.fromJSON(object.keygenOutput) : undefined,
    };
  },

  toJSON(message: QueryRecoveryResponse): unknown {
    const obj: any = {};
    if (message.partyUids) {
      obj.partyUids = message.partyUids.map((e) => e);
    } else {
      obj.partyUids = [];
    }
    if (message.partyShareCounts) {
      obj.partyShareCounts = message.partyShareCounts.map((e) => Math.round(e));
    } else {
      obj.partyShareCounts = [];
    }
    message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
    message.keygenOutput !== undefined &&
      (obj.keygenOutput = message.keygenOutput ? KeygenOutput.toJSON(message.keygenOutput) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRecoveryResponse>, I>>(object: I): QueryRecoveryResponse {
    const message = createBaseQueryRecoveryResponse();
    message.partyUids = object.partyUids?.map((e) => e) || [];
    message.partyShareCounts = object.partyShareCounts?.map((e) => e) || [];
    message.threshold = object.threshold ?? 0;
    message.keygenOutput =
      object.keygenOutput !== undefined && object.keygenOutput !== null
        ? KeygenOutput.fromPartial(object.keygenOutput)
        : undefined;
    return message;
  },
};

function createBaseQueryKeyShareResponse(): QueryKeyShareResponse {
  return { shareInfos: [] };
}

export const QueryKeyShareResponse = {
  encode(message: QueryKeyShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.shareInfos) {
      QueryKeyShareResponse_ShareInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryKeyShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKeyShareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareInfos.push(QueryKeyShareResponse_ShareInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryKeyShareResponse {
    return {
      shareInfos: Array.isArray(object?.shareInfos)
        ? object.shareInfos.map((e: any) => QueryKeyShareResponse_ShareInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryKeyShareResponse): unknown {
    const obj: any = {};
    if (message.shareInfos) {
      obj.shareInfos = message.shareInfos.map((e) =>
        e ? QueryKeyShareResponse_ShareInfo.toJSON(e) : undefined,
      );
    } else {
      obj.shareInfos = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryKeyShareResponse>, I>>(object: I): QueryKeyShareResponse {
    const message = createBaseQueryKeyShareResponse();
    message.shareInfos = object.shareInfos?.map((e) => QueryKeyShareResponse_ShareInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryKeyShareResponse_ShareInfo(): QueryKeyShareResponse_ShareInfo {
  return {
    keyId: "",
    keyChain: "",
    keyRole: "",
    snapshotBlockNumber: Long.ZERO,
    validatorAddress: "",
    numValidatorShares: Long.ZERO,
    numTotalShares: Long.ZERO,
  };
}

export const QueryKeyShareResponse_ShareInfo = {
  encode(message: QueryKeyShareResponse_ShareInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.keyChain !== "") {
      writer.uint32(18).string(message.keyChain);
    }
    if (message.keyRole !== "") {
      writer.uint32(26).string(message.keyRole);
    }
    if (!message.snapshotBlockNumber.isZero()) {
      writer.uint32(32).int64(message.snapshotBlockNumber);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }
    if (!message.numValidatorShares.isZero()) {
      writer.uint32(48).int64(message.numValidatorShares);
    }
    if (!message.numTotalShares.isZero()) {
      writer.uint32(56).int64(message.numTotalShares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryKeyShareResponse_ShareInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKeyShareResponse_ShareInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.keyChain = reader.string();
          break;
        case 3:
          message.keyRole = reader.string();
          break;
        case 4:
          message.snapshotBlockNumber = reader.int64() as Long;
          break;
        case 5:
          message.validatorAddress = reader.string();
          break;
        case 6:
          message.numValidatorShares = reader.int64() as Long;
          break;
        case 7:
          message.numTotalShares = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryKeyShareResponse_ShareInfo {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      keyChain: isSet(object.keyChain) ? String(object.keyChain) : "",
      keyRole: isSet(object.keyRole) ? String(object.keyRole) : "",
      snapshotBlockNumber: isSet(object.snapshotBlockNumber)
        ? Long.fromValue(object.snapshotBlockNumber)
        : Long.ZERO,
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      numValidatorShares: isSet(object.numValidatorShares)
        ? Long.fromValue(object.numValidatorShares)
        : Long.ZERO,
      numTotalShares: isSet(object.numTotalShares) ? Long.fromValue(object.numTotalShares) : Long.ZERO,
    };
  },

  toJSON(message: QueryKeyShareResponse_ShareInfo): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.keyChain !== undefined && (obj.keyChain = message.keyChain);
    message.keyRole !== undefined && (obj.keyRole = message.keyRole);
    message.snapshotBlockNumber !== undefined &&
      (obj.snapshotBlockNumber = (message.snapshotBlockNumber || Long.ZERO).toString());
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.numValidatorShares !== undefined &&
      (obj.numValidatorShares = (message.numValidatorShares || Long.ZERO).toString());
    message.numTotalShares !== undefined &&
      (obj.numTotalShares = (message.numTotalShares || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryKeyShareResponse_ShareInfo>, I>>(
    object: I,
  ): QueryKeyShareResponse_ShareInfo {
    const message = createBaseQueryKeyShareResponse_ShareInfo();
    message.keyId = object.keyId ?? "";
    message.keyChain = object.keyChain ?? "";
    message.keyRole = object.keyRole ?? "";
    message.snapshotBlockNumber =
      object.snapshotBlockNumber !== undefined && object.snapshotBlockNumber !== null
        ? Long.fromValue(object.snapshotBlockNumber)
        : Long.ZERO;
    message.validatorAddress = object.validatorAddress ?? "";
    message.numValidatorShares =
      object.numValidatorShares !== undefined && object.numValidatorShares !== null
        ? Long.fromValue(object.numValidatorShares)
        : Long.ZERO;
    message.numTotalShares =
      object.numTotalShares !== undefined && object.numTotalShares !== null
        ? Long.fromValue(object.numTotalShares)
        : Long.ZERO;
    return message;
  },
};

function createBaseQueryDeactivatedOperatorsResponse(): QueryDeactivatedOperatorsResponse {
  return { operatorAddresses: [] };
}

export const QueryDeactivatedOperatorsResponse = {
  encode(message: QueryDeactivatedOperatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operatorAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeactivatedOperatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeactivatedOperatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDeactivatedOperatorsResponse {
    return {
      operatorAddresses: Array.isArray(object?.operatorAddresses)
        ? object.operatorAddresses.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryDeactivatedOperatorsResponse): unknown {
    const obj: any = {};
    if (message.operatorAddresses) {
      obj.operatorAddresses = message.operatorAddresses.map((e) => e);
    } else {
      obj.operatorAddresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDeactivatedOperatorsResponse>, I>>(
    object: I,
  ): QueryDeactivatedOperatorsResponse {
    const message = createBaseQueryDeactivatedOperatorsResponse();
    message.operatorAddresses = object.operatorAddresses?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryActiveOldKeysValidatorResponse(): QueryActiveOldKeysValidatorResponse {
  return { keysInfo: [] };
}

export const QueryActiveOldKeysValidatorResponse = {
  encode(message: QueryActiveOldKeysValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keysInfo) {
      QueryActiveOldKeysValidatorResponse_KeyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveOldKeysValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveOldKeysValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keysInfo.push(QueryActiveOldKeysValidatorResponse_KeyInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActiveOldKeysValidatorResponse {
    return {
      keysInfo: Array.isArray(object?.keysInfo)
        ? object.keysInfo.map((e: any) => QueryActiveOldKeysValidatorResponse_KeyInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryActiveOldKeysValidatorResponse): unknown {
    const obj: any = {};
    if (message.keysInfo) {
      obj.keysInfo = message.keysInfo.map((e) =>
        e ? QueryActiveOldKeysValidatorResponse_KeyInfo.toJSON(e) : undefined,
      );
    } else {
      obj.keysInfo = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActiveOldKeysValidatorResponse>, I>>(
    object: I,
  ): QueryActiveOldKeysValidatorResponse {
    const message = createBaseQueryActiveOldKeysValidatorResponse();
    message.keysInfo =
      object.keysInfo?.map((e) => QueryActiveOldKeysValidatorResponse_KeyInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryActiveOldKeysValidatorResponse_KeyInfo(): QueryActiveOldKeysValidatorResponse_KeyInfo {
  return { id: "", chain: "", role: 0 };
}

export const QueryActiveOldKeysValidatorResponse_KeyInfo = {
  encode(
    message: QueryActiveOldKeysValidatorResponse_KeyInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.role !== 0) {
      writer.uint32(24).int32(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveOldKeysValidatorResponse_KeyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveOldKeysValidatorResponse_KeyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.role = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActiveOldKeysValidatorResponse_KeyInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      role: isSet(object.role) ? Number(object.role) : 0,
    };
  },

  toJSON(message: QueryActiveOldKeysValidatorResponse_KeyInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.chain !== undefined && (obj.chain = message.chain);
    message.role !== undefined && (obj.role = Math.round(message.role));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActiveOldKeysValidatorResponse_KeyInfo>, I>>(
    object: I,
  ): QueryActiveOldKeysValidatorResponse_KeyInfo {
    const message = createBaseQueryActiveOldKeysValidatorResponse_KeyInfo();
    message.id = object.id ?? "";
    message.chain = object.chain ?? "";
    message.role = object.role ?? 0;
    return message;
  },
};

function createBaseQueryActiveOldKeysResponse(): QueryActiveOldKeysResponse {
  return { keyIds: [] };
}

export const QueryActiveOldKeysResponse = {
  encode(message: QueryActiveOldKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keyIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveOldKeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveOldKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActiveOldKeysResponse {
    return {
      keyIds: Array.isArray(object?.keyIds) ? object.keyIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: QueryActiveOldKeysResponse): unknown {
    const obj: any = {};
    if (message.keyIds) {
      obj.keyIds = message.keyIds.map((e) => e);
    } else {
      obj.keyIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActiveOldKeysResponse>, I>>(
    object: I,
  ): QueryActiveOldKeysResponse {
    const message = createBaseQueryActiveOldKeysResponse();
    message.keyIds = object.keyIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryExternalKeyIDResponse(): QueryExternalKeyIDResponse {
  return { keyIds: [] };
}

export const QueryExternalKeyIDResponse = {
  encode(message: QueryExternalKeyIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keyIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalKeyIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalKeyIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExternalKeyIDResponse {
    return {
      keyIds: Array.isArray(object?.keyIds) ? object.keyIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: QueryExternalKeyIDResponse): unknown {
    const obj: any = {};
    if (message.keyIds) {
      obj.keyIds = message.keyIds.map((e) => e);
    } else {
      obj.keyIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExternalKeyIDResponse>, I>>(
    object: I,
  ): QueryExternalKeyIDResponse {
    const message = createBaseQueryExternalKeyIDResponse();
    message.keyIds = object.keyIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseNextKeyIDRequest(): NextKeyIDRequest {
  return { chain: "", keyRole: 0 };
}

export const NextKeyIDRequest = {
  encode(message: NextKeyIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.keyRole !== 0) {
      writer.uint32(16).int32(message.keyRole);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextKeyIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextKeyIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.keyRole = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NextKeyIDRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : 0,
    };
  },

  toJSON(message: NextKeyIDRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyRole !== undefined && (obj.keyRole = keyRoleToJSON(message.keyRole));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NextKeyIDRequest>, I>>(object: I): NextKeyIDRequest {
    const message = createBaseNextKeyIDRequest();
    message.chain = object.chain ?? "";
    message.keyRole = object.keyRole ?? 0;
    return message;
  },
};

function createBaseNextKeyIDResponse(): NextKeyIDResponse {
  return { keyId: "" };
}

export const NextKeyIDResponse = {
  encode(message: NextKeyIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextKeyIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextKeyIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NextKeyIDResponse {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: NextKeyIDResponse): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NextKeyIDResponse>, I>>(object: I): NextKeyIDResponse {
    const message = createBaseNextKeyIDResponse();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseAssignableKeyRequest(): AssignableKeyRequest {
  return { chain: "", keyRole: 0 };
}

export const AssignableKeyRequest = {
  encode(message: AssignableKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.keyRole !== 0) {
      writer.uint32(16).int32(message.keyRole);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssignableKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssignableKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.keyRole = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssignableKeyRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : 0,
    };
  },

  toJSON(message: AssignableKeyRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyRole !== undefined && (obj.keyRole = keyRoleToJSON(message.keyRole));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssignableKeyRequest>, I>>(object: I): AssignableKeyRequest {
    const message = createBaseAssignableKeyRequest();
    message.chain = object.chain ?? "";
    message.keyRole = object.keyRole ?? 0;
    return message;
  },
};

function createBaseAssignableKeyResponse(): AssignableKeyResponse {
  return { assignable: false };
}

export const AssignableKeyResponse = {
  encode(message: AssignableKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assignable === true) {
      writer.uint32(8).bool(message.assignable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssignableKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssignableKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assignable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssignableKeyResponse {
    return {
      assignable: isSet(object.assignable) ? Boolean(object.assignable) : false,
    };
  },

  toJSON(message: AssignableKeyResponse): unknown {
    const obj: any = {};
    message.assignable !== undefined && (obj.assignable = message.assignable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssignableKeyResponse>, I>>(object: I): AssignableKeyResponse {
    const message = createBaseAssignableKeyResponse();
    message.assignable = object.assignable ?? false;
    return message;
  },
};

function createBaseValidatorMultisigKeysRequest(): ValidatorMultisigKeysRequest {
  return { address: "" };
}

export const ValidatorMultisigKeysRequest = {
  encode(message: ValidatorMultisigKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMultisigKeysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMultisigKeysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorMultisigKeysRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: ValidatorMultisigKeysRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorMultisigKeysRequest>, I>>(
    object: I,
  ): ValidatorMultisigKeysRequest {
    const message = createBaseValidatorMultisigKeysRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseValidatorMultisigKeysResponse(): ValidatorMultisigKeysResponse {
  return { keys: {} };
}

export const ValidatorMultisigKeysResponse = {
  encode(message: ValidatorMultisigKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.keys).forEach(([key, value]) => {
      ValidatorMultisigKeysResponse_KeysEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMultisigKeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMultisigKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ValidatorMultisigKeysResponse_KeysEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.keys[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorMultisigKeysResponse {
    return {
      keys: isObject(object.keys)
        ? Object.entries(object.keys).reduce<{ [key: string]: ValidatorMultisigKeysResponse_Keys }>(
            (acc, [key, value]) => {
              acc[key] = ValidatorMultisigKeysResponse_Keys.fromJSON(value);
              return acc;
            },
            {},
          )
        : {},
    };
  },

  toJSON(message: ValidatorMultisigKeysResponse): unknown {
    const obj: any = {};
    obj.keys = {};
    if (message.keys) {
      Object.entries(message.keys).forEach(([k, v]) => {
        obj.keys[k] = ValidatorMultisigKeysResponse_Keys.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorMultisigKeysResponse>, I>>(
    object: I,
  ): ValidatorMultisigKeysResponse {
    const message = createBaseValidatorMultisigKeysResponse();
    message.keys = Object.entries(object.keys ?? {}).reduce<{
      [key: string]: ValidatorMultisigKeysResponse_Keys;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ValidatorMultisigKeysResponse_Keys.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseValidatorMultisigKeysResponse_Keys(): ValidatorMultisigKeysResponse_Keys {
  return { keys: [] };
}

export const ValidatorMultisigKeysResponse_Keys = {
  encode(message: ValidatorMultisigKeysResponse_Keys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMultisigKeysResponse_Keys {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMultisigKeysResponse_Keys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorMultisigKeysResponse_Keys {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: ValidatorMultisigKeysResponse_Keys): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.keys = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorMultisigKeysResponse_Keys>, I>>(
    object: I,
  ): ValidatorMultisigKeysResponse_Keys {
    const message = createBaseValidatorMultisigKeysResponse_Keys();
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};

function createBaseValidatorMultisigKeysResponse_KeysEntry(): ValidatorMultisigKeysResponse_KeysEntry {
  return { key: "", value: undefined };
}

export const ValidatorMultisigKeysResponse_KeysEntry = {
  encode(
    message: ValidatorMultisigKeysResponse_KeysEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ValidatorMultisigKeysResponse_Keys.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMultisigKeysResponse_KeysEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMultisigKeysResponse_KeysEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ValidatorMultisigKeysResponse_Keys.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorMultisigKeysResponse_KeysEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ValidatorMultisigKeysResponse_Keys.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ValidatorMultisigKeysResponse_KeysEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? ValidatorMultisigKeysResponse_Keys.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorMultisigKeysResponse_KeysEntry>, I>>(
    object: I,
  ): ValidatorMultisigKeysResponse_KeysEntry {
    const message = createBaseValidatorMultisigKeysResponse_KeysEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? ValidatorMultisigKeysResponse_Keys.fromPartial(object.value)
        : undefined;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
