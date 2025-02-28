/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { KeyInfo } from "../../../axelar/tss/v1beta1/types";
import {
  KeyRole,
  SigKeyPair,
  keyRoleFromJSON,
  keyRoleToJSON,
} from "../../../axelar/tss/exported/v1beta1/types";
import {
  TrafficOut,
  MessageOut_KeygenResult,
  MessageOut_SignResult,
} from "../../../axelar/tss/tofnd/v1beta1/tofnd";
import { PollKey } from "../../../axelar/vote/exported/v1beta1/types";

export const protobufPackage = "axelar.tss.v1beta1";

/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequest {
  sender: string;
  keyInfo?: KeyInfo;
}

export interface StartKeygenResponse {}

export interface RotateKeyRequest {
  sender: Uint8Array;
  chain: string;
  keyRole: KeyRole;
  keyId: string;
}

export interface RotateKeyResponse {}

/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequest {
  sender: Uint8Array;
  sessionId: string;
  payload?: TrafficOut;
}

export interface ProcessKeygenTrafficResponse {}

/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequest {
  sender: Uint8Array;
  sessionId: string;
  payload?: TrafficOut;
}

export interface ProcessSignTrafficResponse {}

/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequest {
  sender: Uint8Array;
  pollKey?: PollKey;
  result?: MessageOut_KeygenResult;
}

export interface VotePubKeyResponse {
  log: string;
}

/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequest {
  sender: Uint8Array;
  pollKey?: PollKey;
  result?: MessageOut_SignResult;
}

export interface VoteSigResponse {
  log: string;
}

export interface HeartBeatRequest {
  sender: Uint8Array;
  /**
   * Deprecated: this field will be removed in the next release
   *
   * @deprecated
   */
  keyIds: string[];
}

export interface HeartBeatResponse {}

export interface RegisterExternalKeysRequest {
  sender: Uint8Array;
  chain: string;
  externalKeys: RegisterExternalKeysRequest_ExternalKey[];
}

export interface RegisterExternalKeysRequest_ExternalKey {
  id: string;
  pubKey: Uint8Array;
}

export interface RegisterExternalKeysResponse {}

export interface SubmitMultisigPubKeysRequest {
  sender: Uint8Array;
  keyId: string;
  sigKeyPairs: SigKeyPair[];
}

export interface SubmitMultisigPubKeysResponse {}

export interface SubmitMultisigSignaturesRequest {
  sender: Uint8Array;
  sigId: string;
  signatures: Uint8Array[];
}

export interface SubmitMultisigSignaturesResponse {}

function createBaseStartKeygenRequest(): StartKeygenRequest {
  return { sender: "", keyInfo: undefined };
}

export const StartKeygenRequest = {
  encode(message: StartKeygenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.keyInfo !== undefined) {
      KeyInfo.encode(message.keyInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartKeygenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartKeygenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.keyInfo = KeyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartKeygenRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      keyInfo: isSet(object.keyInfo) ? KeyInfo.fromJSON(object.keyInfo) : undefined,
    };
  },

  toJSON(message: StartKeygenRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.keyInfo !== undefined &&
      (obj.keyInfo = message.keyInfo ? KeyInfo.toJSON(message.keyInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartKeygenRequest>, I>>(object: I): StartKeygenRequest {
    const message = createBaseStartKeygenRequest();
    message.sender = object.sender ?? "";
    message.keyInfo =
      object.keyInfo !== undefined && object.keyInfo !== null
        ? KeyInfo.fromPartial(object.keyInfo)
        : undefined;
    return message;
  },
};

function createBaseStartKeygenResponse(): StartKeygenResponse {
  return {};
}

export const StartKeygenResponse = {
  encode(_: StartKeygenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartKeygenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartKeygenResponse();
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

  fromJSON(_: any): StartKeygenResponse {
    return {};
  },

  toJSON(_: StartKeygenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartKeygenResponse>, I>>(_: I): StartKeygenResponse {
    const message = createBaseStartKeygenResponse();
    return message;
  },
};

function createBaseRotateKeyRequest(): RotateKeyRequest {
  return { sender: new Uint8Array(), chain: "", keyRole: 0, keyId: "" };
}

export const RotateKeyRequest = {
  encode(message: RotateKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyRole !== 0) {
      writer.uint32(24).int32(message.keyRole);
    }
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RotateKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRotateKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.keyRole = reader.int32() as any;
          break;
        case 4:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RotateKeyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : 0,
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: RotateKeyRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyRole !== undefined && (obj.keyRole = keyRoleToJSON(message.keyRole));
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RotateKeyRequest>, I>>(object: I): RotateKeyRequest {
    const message = createBaseRotateKeyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.keyRole = object.keyRole ?? 0;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseRotateKeyResponse(): RotateKeyResponse {
  return {};
}

export const RotateKeyResponse = {
  encode(_: RotateKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RotateKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRotateKeyResponse();
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

  fromJSON(_: any): RotateKeyResponse {
    return {};
  },

  toJSON(_: RotateKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RotateKeyResponse>, I>>(_: I): RotateKeyResponse {
    const message = createBaseRotateKeyResponse();
    return message;
  },
};

function createBaseProcessKeygenTrafficRequest(): ProcessKeygenTrafficRequest {
  return { sender: new Uint8Array(), sessionId: "", payload: undefined };
}

export const ProcessKeygenTrafficRequest = {
  encode(message: ProcessKeygenTrafficRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.payload !== undefined) {
      TrafficOut.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessKeygenTrafficRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessKeygenTrafficRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        case 3:
          message.payload = TrafficOut.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessKeygenTrafficRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      payload: isSet(object.payload) ? TrafficOut.fromJSON(object.payload) : undefined,
    };
  },

  toJSON(message: ProcessKeygenTrafficRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.payload !== undefined &&
      (obj.payload = message.payload ? TrafficOut.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessKeygenTrafficRequest>, I>>(
    object: I,
  ): ProcessKeygenTrafficRequest {
    const message = createBaseProcessKeygenTrafficRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.sessionId = object.sessionId ?? "";
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? TrafficOut.fromPartial(object.payload)
        : undefined;
    return message;
  },
};

function createBaseProcessKeygenTrafficResponse(): ProcessKeygenTrafficResponse {
  return {};
}

export const ProcessKeygenTrafficResponse = {
  encode(_: ProcessKeygenTrafficResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessKeygenTrafficResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessKeygenTrafficResponse();
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

  fromJSON(_: any): ProcessKeygenTrafficResponse {
    return {};
  },

  toJSON(_: ProcessKeygenTrafficResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessKeygenTrafficResponse>, I>>(
    _: I,
  ): ProcessKeygenTrafficResponse {
    const message = createBaseProcessKeygenTrafficResponse();
    return message;
  },
};

function createBaseProcessSignTrafficRequest(): ProcessSignTrafficRequest {
  return { sender: new Uint8Array(), sessionId: "", payload: undefined };
}

export const ProcessSignTrafficRequest = {
  encode(message: ProcessSignTrafficRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.payload !== undefined) {
      TrafficOut.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessSignTrafficRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessSignTrafficRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        case 3:
          message.payload = TrafficOut.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessSignTrafficRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      payload: isSet(object.payload) ? TrafficOut.fromJSON(object.payload) : undefined,
    };
  },

  toJSON(message: ProcessSignTrafficRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.payload !== undefined &&
      (obj.payload = message.payload ? TrafficOut.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessSignTrafficRequest>, I>>(
    object: I,
  ): ProcessSignTrafficRequest {
    const message = createBaseProcessSignTrafficRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.sessionId = object.sessionId ?? "";
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? TrafficOut.fromPartial(object.payload)
        : undefined;
    return message;
  },
};

function createBaseProcessSignTrafficResponse(): ProcessSignTrafficResponse {
  return {};
}

export const ProcessSignTrafficResponse = {
  encode(_: ProcessSignTrafficResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessSignTrafficResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessSignTrafficResponse();
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

  fromJSON(_: any): ProcessSignTrafficResponse {
    return {};
  },

  toJSON(_: ProcessSignTrafficResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessSignTrafficResponse>, I>>(_: I): ProcessSignTrafficResponse {
    const message = createBaseProcessSignTrafficResponse();
    return message;
  },
};

function createBaseVotePubKeyRequest(): VotePubKeyRequest {
  return { sender: new Uint8Array(), pollKey: undefined, result: undefined };
}

export const VotePubKeyRequest = {
  encode(message: VotePubKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.pollKey !== undefined) {
      PollKey.encode(message.pollKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.result !== undefined) {
      MessageOut_KeygenResult.encode(message.result, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotePubKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotePubKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.pollKey = PollKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.result = MessageOut_KeygenResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VotePubKeyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      pollKey: isSet(object.pollKey) ? PollKey.fromJSON(object.pollKey) : undefined,
      result: isSet(object.result) ? MessageOut_KeygenResult.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: VotePubKeyRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.pollKey !== undefined &&
      (obj.pollKey = message.pollKey ? PollKey.toJSON(message.pollKey) : undefined);
    message.result !== undefined &&
      (obj.result = message.result ? MessageOut_KeygenResult.toJSON(message.result) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VotePubKeyRequest>, I>>(object: I): VotePubKeyRequest {
    const message = createBaseVotePubKeyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.pollKey =
      object.pollKey !== undefined && object.pollKey !== null
        ? PollKey.fromPartial(object.pollKey)
        : undefined;
    message.result =
      object.result !== undefined && object.result !== null
        ? MessageOut_KeygenResult.fromPartial(object.result)
        : undefined;
    return message;
  },
};

function createBaseVotePubKeyResponse(): VotePubKeyResponse {
  return { log: "" };
}

export const VotePubKeyResponse = {
  encode(message: VotePubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotePubKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotePubKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VotePubKeyResponse {
    return {
      log: isSet(object.log) ? String(object.log) : "",
    };
  },

  toJSON(message: VotePubKeyResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VotePubKeyResponse>, I>>(object: I): VotePubKeyResponse {
    const message = createBaseVotePubKeyResponse();
    message.log = object.log ?? "";
    return message;
  },
};

function createBaseVoteSigRequest(): VoteSigRequest {
  return { sender: new Uint8Array(), pollKey: undefined, result: undefined };
}

export const VoteSigRequest = {
  encode(message: VoteSigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.pollKey !== undefined) {
      PollKey.encode(message.pollKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.result !== undefined) {
      MessageOut_SignResult.encode(message.result, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteSigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.pollKey = PollKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.result = MessageOut_SignResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteSigRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      pollKey: isSet(object.pollKey) ? PollKey.fromJSON(object.pollKey) : undefined,
      result: isSet(object.result) ? MessageOut_SignResult.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: VoteSigRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.pollKey !== undefined &&
      (obj.pollKey = message.pollKey ? PollKey.toJSON(message.pollKey) : undefined);
    message.result !== undefined &&
      (obj.result = message.result ? MessageOut_SignResult.toJSON(message.result) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteSigRequest>, I>>(object: I): VoteSigRequest {
    const message = createBaseVoteSigRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.pollKey =
      object.pollKey !== undefined && object.pollKey !== null
        ? PollKey.fromPartial(object.pollKey)
        : undefined;
    message.result =
      object.result !== undefined && object.result !== null
        ? MessageOut_SignResult.fromPartial(object.result)
        : undefined;
    return message;
  },
};

function createBaseVoteSigResponse(): VoteSigResponse {
  return { log: "" };
}

export const VoteSigResponse = {
  encode(message: VoteSigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteSigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteSigResponse {
    return {
      log: isSet(object.log) ? String(object.log) : "",
    };
  },

  toJSON(message: VoteSigResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteSigResponse>, I>>(object: I): VoteSigResponse {
    const message = createBaseVoteSigResponse();
    message.log = object.log ?? "";
    return message;
  },
};

function createBaseHeartBeatRequest(): HeartBeatRequest {
  return { sender: new Uint8Array(), keyIds: [] };
}

export const HeartBeatRequest = {
  encode(message: HeartBeatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    for (const v of message.keyIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeartBeatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeartBeatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.keyIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HeartBeatRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      keyIds: Array.isArray(object?.keyIds) ? object.keyIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: HeartBeatRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    if (message.keyIds) {
      obj.keyIds = message.keyIds.map((e) => e);
    } else {
      obj.keyIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HeartBeatRequest>, I>>(object: I): HeartBeatRequest {
    const message = createBaseHeartBeatRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.keyIds = object.keyIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseHeartBeatResponse(): HeartBeatResponse {
  return {};
}

export const HeartBeatResponse = {
  encode(_: HeartBeatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeartBeatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeartBeatResponse();
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

  fromJSON(_: any): HeartBeatResponse {
    return {};
  },

  toJSON(_: HeartBeatResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HeartBeatResponse>, I>>(_: I): HeartBeatResponse {
    const message = createBaseHeartBeatResponse();
    return message;
  },
};

function createBaseRegisterExternalKeysRequest(): RegisterExternalKeysRequest {
  return { sender: new Uint8Array(), chain: "", externalKeys: [] };
}

export const RegisterExternalKeysRequest = {
  encode(message: RegisterExternalKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    for (const v of message.externalKeys) {
      RegisterExternalKeysRequest_ExternalKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExternalKeysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterExternalKeysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.externalKeys.push(RegisterExternalKeysRequest_ExternalKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterExternalKeysRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      externalKeys: Array.isArray(object?.externalKeys)
        ? object.externalKeys.map((e: any) => RegisterExternalKeysRequest_ExternalKey.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RegisterExternalKeysRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    if (message.externalKeys) {
      obj.externalKeys = message.externalKeys.map((e) =>
        e ? RegisterExternalKeysRequest_ExternalKey.toJSON(e) : undefined,
      );
    } else {
      obj.externalKeys = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterExternalKeysRequest>, I>>(
    object: I,
  ): RegisterExternalKeysRequest {
    const message = createBaseRegisterExternalKeysRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.externalKeys =
      object.externalKeys?.map((e) => RegisterExternalKeysRequest_ExternalKey.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRegisterExternalKeysRequest_ExternalKey(): RegisterExternalKeysRequest_ExternalKey {
  return { id: "", pubKey: new Uint8Array() };
}

export const RegisterExternalKeysRequest_ExternalKey = {
  encode(
    message: RegisterExternalKeysRequest_ExternalKey,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(18).bytes(message.pubKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExternalKeysRequest_ExternalKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterExternalKeysRequest_ExternalKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.pubKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterExternalKeysRequest_ExternalKey {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
    };
  },

  toJSON(message: RegisterExternalKeysRequest_ExternalKey): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterExternalKeysRequest_ExternalKey>, I>>(
    object: I,
  ): RegisterExternalKeysRequest_ExternalKey {
    const message = createBaseRegisterExternalKeysRequest_ExternalKey();
    message.id = object.id ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  },
};

function createBaseRegisterExternalKeysResponse(): RegisterExternalKeysResponse {
  return {};
}

export const RegisterExternalKeysResponse = {
  encode(_: RegisterExternalKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExternalKeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterExternalKeysResponse();
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

  fromJSON(_: any): RegisterExternalKeysResponse {
    return {};
  },

  toJSON(_: RegisterExternalKeysResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterExternalKeysResponse>, I>>(
    _: I,
  ): RegisterExternalKeysResponse {
    const message = createBaseRegisterExternalKeysResponse();
    return message;
  },
};

function createBaseSubmitMultisigPubKeysRequest(): SubmitMultisigPubKeysRequest {
  return { sender: new Uint8Array(), keyId: "", sigKeyPairs: [] };
}

export const SubmitMultisigPubKeysRequest = {
  encode(message: SubmitMultisigPubKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    for (const v of message.sigKeyPairs) {
      SigKeyPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigPubKeysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitMultisigPubKeysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.keyId = reader.string();
          break;
        case 3:
          message.sigKeyPairs.push(SigKeyPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitMultisigPubKeysRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      sigKeyPairs: Array.isArray(object?.sigKeyPairs)
        ? object.sigKeyPairs.map((e: any) => SigKeyPair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubmitMultisigPubKeysRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.keyId !== undefined && (obj.keyId = message.keyId);
    if (message.sigKeyPairs) {
      obj.sigKeyPairs = message.sigKeyPairs.map((e) => (e ? SigKeyPair.toJSON(e) : undefined));
    } else {
      obj.sigKeyPairs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitMultisigPubKeysRequest>, I>>(
    object: I,
  ): SubmitMultisigPubKeysRequest {
    const message = createBaseSubmitMultisigPubKeysRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.keyId = object.keyId ?? "";
    message.sigKeyPairs = object.sigKeyPairs?.map((e) => SigKeyPair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSubmitMultisigPubKeysResponse(): SubmitMultisigPubKeysResponse {
  return {};
}

export const SubmitMultisigPubKeysResponse = {
  encode(_: SubmitMultisigPubKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigPubKeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitMultisigPubKeysResponse();
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

  fromJSON(_: any): SubmitMultisigPubKeysResponse {
    return {};
  },

  toJSON(_: SubmitMultisigPubKeysResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitMultisigPubKeysResponse>, I>>(
    _: I,
  ): SubmitMultisigPubKeysResponse {
    const message = createBaseSubmitMultisigPubKeysResponse();
    return message;
  },
};

function createBaseSubmitMultisigSignaturesRequest(): SubmitMultisigSignaturesRequest {
  return { sender: new Uint8Array(), sigId: "", signatures: [] };
}

export const SubmitMultisigSignaturesRequest = {
  encode(message: SubmitMultisigSignaturesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.sigId !== "") {
      writer.uint32(18).string(message.sigId);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigSignaturesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitMultisigSignaturesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.sigId = reader.string();
          break;
        case 3:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitMultisigSignaturesRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      sigId: isSet(object.sigId) ? String(object.sigId) : "",
      signatures: Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: SubmitMultisigSignaturesRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.sigId !== undefined && (obj.sigId = message.sigId);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitMultisigSignaturesRequest>, I>>(
    object: I,
  ): SubmitMultisigSignaturesRequest {
    const message = createBaseSubmitMultisigSignaturesRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.sigId = object.sigId ?? "";
    message.signatures = object.signatures?.map((e) => e) || [];
    return message;
  },
};

function createBaseSubmitMultisigSignaturesResponse(): SubmitMultisigSignaturesResponse {
  return {};
}

export const SubmitMultisigSignaturesResponse = {
  encode(_: SubmitMultisigSignaturesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigSignaturesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitMultisigSignaturesResponse();
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

  fromJSON(_: any): SubmitMultisigSignaturesResponse {
    return {};
  },

  toJSON(_: SubmitMultisigSignaturesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitMultisigSignaturesResponse>, I>>(
    _: I,
  ): SubmitMultisigSignaturesResponse {
    const message = createBaseSubmitMultisigSignaturesResponse();
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
