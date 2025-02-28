/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  KeyState,
  MultisigState,
  keyStateFromJSON,
  keyStateToJSON,
  multisigStateFromJSON,
  multisigStateToJSON,
} from "../../../axelar/multisig/exported/v1beta1/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params } from "../../../axelar/multisig/v1beta1/params";

export const protobufPackage = "axelar.multisig.v1beta1";

export interface KeyIDRequest {
  chain: string;
}

/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponse {
  keyId: string;
}

export interface NextKeyIDRequest {
  chain: string;
}

/**
 * NextKeyIDResponse contains the key ID for the next rotation on the given
 * chain
 */
export interface NextKeyIDResponse {
  keyId: string;
}

export interface KeyRequest {
  keyId: string;
}

export interface KeygenParticipant {
  address: string;
  weight: Uint8Array;
  pubKey: string;
}

/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponse {
  keyId: string;
  state: KeyState;
  startedAt: Long;
  startedAtTimestamp?: Timestamp;
  thresholdWeight: Uint8Array;
  bondedWeight: Uint8Array;
  /** Keygen participants in descending order by weight */
  participants: KeygenParticipant[];
}

export interface KeygenSessionRequest {
  keyId: string;
}

/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponse {
  startedAt: Long;
  startedAtTimestamp?: Timestamp;
  expiresAt: Long;
  completedAt: Long;
  gracePeriod: Long;
  state: MultisigState;
  keygenThresholdWeight: Uint8Array;
  signingThresholdWeight: Uint8Array;
  bondedWeight: Uint8Array;
  /** Keygen candidates in descending order by weight */
  participants: KeygenParticipant[];
}

/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {}

export interface ParamsResponse {
  params?: Params;
}

function createBaseKeyIDRequest(): KeyIDRequest {
  return { chain: "" };
}

export const KeyIDRequest = {
  encode(message: KeyIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyIDRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: KeyIDRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyIDRequest>, I>>(object: I): KeyIDRequest {
    const message = createBaseKeyIDRequest();
    message.chain = object.chain ?? "";
    return message;
  },
};

function createBaseKeyIDResponse(): KeyIDResponse {
  return { keyId: "" };
}

export const KeyIDResponse = {
  encode(message: KeyIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyIDResponse();
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

  fromJSON(object: any): KeyIDResponse {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: KeyIDResponse): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyIDResponse>, I>>(object: I): KeyIDResponse {
    const message = createBaseKeyIDResponse();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseNextKeyIDRequest(): NextKeyIDRequest {
  return { chain: "" };
}

export const NextKeyIDRequest = {
  encode(message: NextKeyIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
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
    };
  },

  toJSON(message: NextKeyIDRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NextKeyIDRequest>, I>>(object: I): NextKeyIDRequest {
    const message = createBaseNextKeyIDRequest();
    message.chain = object.chain ?? "";
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

function createBaseKeyRequest(): KeyRequest {
  return { keyId: "" };
}

export const KeyRequest = {
  encode(message: KeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyRequest();
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

  fromJSON(object: any): KeyRequest {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: KeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyRequest>, I>>(object: I): KeyRequest {
    const message = createBaseKeyRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseKeygenParticipant(): KeygenParticipant {
  return { address: "", weight: new Uint8Array(), pubKey: "" };
}

export const KeygenParticipant = {
  encode(message: KeygenParticipant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight.length !== 0) {
      writer.uint32(18).bytes(message.weight);
    }
    if (message.pubKey !== "") {
      writer.uint32(26).string(message.pubKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenParticipant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.bytes();
          break;
        case 3:
          message.pubKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenParticipant {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? bytesFromBase64(object.weight) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
    };
  },

  toJSON(message: KeygenParticipant): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined &&
      (obj.weight = base64FromBytes(message.weight !== undefined ? message.weight : new Uint8Array()));
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenParticipant>, I>>(object: I): KeygenParticipant {
    const message = createBaseKeygenParticipant();
    message.address = object.address ?? "";
    message.weight = object.weight ?? new Uint8Array();
    message.pubKey = object.pubKey ?? "";
    return message;
  },
};

function createBaseKeyResponse(): KeyResponse {
  return {
    keyId: "",
    state: 0,
    startedAt: Long.ZERO,
    startedAtTimestamp: undefined,
    thresholdWeight: new Uint8Array(),
    bondedWeight: new Uint8Array(),
    participants: [],
  };
}

export const KeyResponse = {
  encode(message: KeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (!message.startedAt.isZero()) {
      writer.uint32(24).int64(message.startedAt);
    }
    if (message.startedAtTimestamp !== undefined) {
      Timestamp.encode(message.startedAtTimestamp, writer.uint32(34).fork()).ldelim();
    }
    if (message.thresholdWeight.length !== 0) {
      writer.uint32(42).bytes(message.thresholdWeight);
    }
    if (message.bondedWeight.length !== 0) {
      writer.uint32(50).bytes(message.bondedWeight);
    }
    for (const v of message.participants) {
      KeygenParticipant.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.startedAt = reader.int64() as Long;
          break;
        case 4:
          message.startedAtTimestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.thresholdWeight = reader.bytes();
          break;
        case 6:
          message.bondedWeight = reader.bytes();
          break;
        case 7:
          message.participants.push(KeygenParticipant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyResponse {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      state: isSet(object.state) ? keyStateFromJSON(object.state) : 0,
      startedAt: isSet(object.startedAt) ? Long.fromValue(object.startedAt) : Long.ZERO,
      startedAtTimestamp: isSet(object.startedAtTimestamp)
        ? fromJsonTimestamp(object.startedAtTimestamp)
        : undefined,
      thresholdWeight: isSet(object.thresholdWeight)
        ? bytesFromBase64(object.thresholdWeight)
        : new Uint8Array(),
      bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array(),
      participants: Array.isArray(object?.participants)
        ? object.participants.map((e: any) => KeygenParticipant.fromJSON(e))
        : [],
    };
  },

  toJSON(message: KeyResponse): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.state !== undefined && (obj.state = keyStateToJSON(message.state));
    message.startedAt !== undefined && (obj.startedAt = (message.startedAt || Long.ZERO).toString());
    message.startedAtTimestamp !== undefined &&
      (obj.startedAtTimestamp = fromTimestamp(message.startedAtTimestamp).toISOString());
    message.thresholdWeight !== undefined &&
      (obj.thresholdWeight = base64FromBytes(
        message.thresholdWeight !== undefined ? message.thresholdWeight : new Uint8Array(),
      ));
    message.bondedWeight !== undefined &&
      (obj.bondedWeight = base64FromBytes(
        message.bondedWeight !== undefined ? message.bondedWeight : new Uint8Array(),
      ));
    if (message.participants) {
      obj.participants = message.participants.map((e) => (e ? KeygenParticipant.toJSON(e) : undefined));
    } else {
      obj.participants = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyResponse>, I>>(object: I): KeyResponse {
    const message = createBaseKeyResponse();
    message.keyId = object.keyId ?? "";
    message.state = object.state ?? 0;
    message.startedAt =
      object.startedAt !== undefined && object.startedAt !== null
        ? Long.fromValue(object.startedAt)
        : Long.ZERO;
    message.startedAtTimestamp =
      object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null
        ? Timestamp.fromPartial(object.startedAtTimestamp)
        : undefined;
    message.thresholdWeight = object.thresholdWeight ?? new Uint8Array();
    message.bondedWeight = object.bondedWeight ?? new Uint8Array();
    message.participants = object.participants?.map((e) => KeygenParticipant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseKeygenSessionRequest(): KeygenSessionRequest {
  return { keyId: "" };
}

export const KeygenSessionRequest = {
  encode(message: KeygenSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenSessionRequest();
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

  fromJSON(object: any): KeygenSessionRequest {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: KeygenSessionRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenSessionRequest>, I>>(object: I): KeygenSessionRequest {
    const message = createBaseKeygenSessionRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseKeygenSessionResponse(): KeygenSessionResponse {
  return {
    startedAt: Long.ZERO,
    startedAtTimestamp: undefined,
    expiresAt: Long.ZERO,
    completedAt: Long.ZERO,
    gracePeriod: Long.ZERO,
    state: 0,
    keygenThresholdWeight: new Uint8Array(),
    signingThresholdWeight: new Uint8Array(),
    bondedWeight: new Uint8Array(),
    participants: [],
  };
}

export const KeygenSessionResponse = {
  encode(message: KeygenSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startedAt.isZero()) {
      writer.uint32(8).int64(message.startedAt);
    }
    if (message.startedAtTimestamp !== undefined) {
      Timestamp.encode(message.startedAtTimestamp, writer.uint32(18).fork()).ldelim();
    }
    if (!message.expiresAt.isZero()) {
      writer.uint32(24).int64(message.expiresAt);
    }
    if (!message.completedAt.isZero()) {
      writer.uint32(32).int64(message.completedAt);
    }
    if (!message.gracePeriod.isZero()) {
      writer.uint32(40).int64(message.gracePeriod);
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    if (message.keygenThresholdWeight.length !== 0) {
      writer.uint32(58).bytes(message.keygenThresholdWeight);
    }
    if (message.signingThresholdWeight.length !== 0) {
      writer.uint32(66).bytes(message.signingThresholdWeight);
    }
    if (message.bondedWeight.length !== 0) {
      writer.uint32(74).bytes(message.bondedWeight);
    }
    for (const v of message.participants) {
      KeygenParticipant.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startedAt = reader.int64() as Long;
          break;
        case 2:
          message.startedAtTimestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.expiresAt = reader.int64() as Long;
          break;
        case 4:
          message.completedAt = reader.int64() as Long;
          break;
        case 5:
          message.gracePeriod = reader.int64() as Long;
          break;
        case 6:
          message.state = reader.int32() as any;
          break;
        case 7:
          message.keygenThresholdWeight = reader.bytes();
          break;
        case 8:
          message.signingThresholdWeight = reader.bytes();
          break;
        case 9:
          message.bondedWeight = reader.bytes();
          break;
        case 10:
          message.participants.push(KeygenParticipant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenSessionResponse {
    return {
      startedAt: isSet(object.startedAt) ? Long.fromValue(object.startedAt) : Long.ZERO,
      startedAtTimestamp: isSet(object.startedAtTimestamp)
        ? fromJsonTimestamp(object.startedAtTimestamp)
        : undefined,
      expiresAt: isSet(object.expiresAt) ? Long.fromValue(object.expiresAt) : Long.ZERO,
      completedAt: isSet(object.completedAt) ? Long.fromValue(object.completedAt) : Long.ZERO,
      gracePeriod: isSet(object.gracePeriod) ? Long.fromValue(object.gracePeriod) : Long.ZERO,
      state: isSet(object.state) ? multisigStateFromJSON(object.state) : 0,
      keygenThresholdWeight: isSet(object.keygenThresholdWeight)
        ? bytesFromBase64(object.keygenThresholdWeight)
        : new Uint8Array(),
      signingThresholdWeight: isSet(object.signingThresholdWeight)
        ? bytesFromBase64(object.signingThresholdWeight)
        : new Uint8Array(),
      bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array(),
      participants: Array.isArray(object?.participants)
        ? object.participants.map((e: any) => KeygenParticipant.fromJSON(e))
        : [],
    };
  },

  toJSON(message: KeygenSessionResponse): unknown {
    const obj: any = {};
    message.startedAt !== undefined && (obj.startedAt = (message.startedAt || Long.ZERO).toString());
    message.startedAtTimestamp !== undefined &&
      (obj.startedAtTimestamp = fromTimestamp(message.startedAtTimestamp).toISOString());
    message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || Long.ZERO).toString());
    message.completedAt !== undefined && (obj.completedAt = (message.completedAt || Long.ZERO).toString());
    message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || Long.ZERO).toString());
    message.state !== undefined && (obj.state = multisigStateToJSON(message.state));
    message.keygenThresholdWeight !== undefined &&
      (obj.keygenThresholdWeight = base64FromBytes(
        message.keygenThresholdWeight !== undefined ? message.keygenThresholdWeight : new Uint8Array(),
      ));
    message.signingThresholdWeight !== undefined &&
      (obj.signingThresholdWeight = base64FromBytes(
        message.signingThresholdWeight !== undefined ? message.signingThresholdWeight : new Uint8Array(),
      ));
    message.bondedWeight !== undefined &&
      (obj.bondedWeight = base64FromBytes(
        message.bondedWeight !== undefined ? message.bondedWeight : new Uint8Array(),
      ));
    if (message.participants) {
      obj.participants = message.participants.map((e) => (e ? KeygenParticipant.toJSON(e) : undefined));
    } else {
      obj.participants = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenSessionResponse>, I>>(object: I): KeygenSessionResponse {
    const message = createBaseKeygenSessionResponse();
    message.startedAt =
      object.startedAt !== undefined && object.startedAt !== null
        ? Long.fromValue(object.startedAt)
        : Long.ZERO;
    message.startedAtTimestamp =
      object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null
        ? Timestamp.fromPartial(object.startedAtTimestamp)
        : undefined;
    message.expiresAt =
      object.expiresAt !== undefined && object.expiresAt !== null
        ? Long.fromValue(object.expiresAt)
        : Long.ZERO;
    message.completedAt =
      object.completedAt !== undefined && object.completedAt !== null
        ? Long.fromValue(object.completedAt)
        : Long.ZERO;
    message.gracePeriod =
      object.gracePeriod !== undefined && object.gracePeriod !== null
        ? Long.fromValue(object.gracePeriod)
        : Long.ZERO;
    message.state = object.state ?? 0;
    message.keygenThresholdWeight = object.keygenThresholdWeight ?? new Uint8Array();
    message.signingThresholdWeight = object.signingThresholdWeight ?? new Uint8Array();
    message.bondedWeight = object.bondedWeight ?? new Uint8Array();
    message.participants = object.participants?.map((e) => KeygenParticipant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseParamsRequest(): ParamsRequest {
  return {};
}

export const ParamsRequest = {
  encode(_: ParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ParamsRequest {
    return {};
  },

  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
};

function createBaseParamsResponse(): ParamsResponse {
  return { params: undefined };
}

export const ParamsResponse = {
  encode(message: ParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
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
