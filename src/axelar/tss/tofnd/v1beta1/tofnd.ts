/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "axelar.tss.tofnd.v1beta1";

/** File copied from golang tofnd with minor tweaks */

export interface RecoverRequest {
  keygenInit?: KeygenInit;
  keygenOutput?: KeygenOutput;
}

export interface RecoverResponse {
  response: RecoverResponse_Response;
}

export enum RecoverResponse_Response {
  RESPONSE_UNSPECIFIED = 0,
  RESPONSE_SUCCESS = 1,
  RESPONSE_FAIL = 2,
  UNRECOGNIZED = -1,
}

export function recoverResponse_ResponseFromJSON(object: any): RecoverResponse_Response {
  switch (object) {
    case 0:
    case "RESPONSE_UNSPECIFIED":
      return RecoverResponse_Response.RESPONSE_UNSPECIFIED;
    case 1:
    case "RESPONSE_SUCCESS":
      return RecoverResponse_Response.RESPONSE_SUCCESS;
    case 2:
    case "RESPONSE_FAIL":
      return RecoverResponse_Response.RESPONSE_FAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RecoverResponse_Response.UNRECOGNIZED;
  }
}

export function recoverResponse_ResponseToJSON(object: RecoverResponse_Response): string {
  switch (object) {
    case RecoverResponse_Response.RESPONSE_UNSPECIFIED:
      return "RESPONSE_UNSPECIFIED";
    case RecoverResponse_Response.RESPONSE_SUCCESS:
      return "RESPONSE_SUCCESS";
    case RecoverResponse_Response.RESPONSE_FAIL:
      return "RESPONSE_FAIL";
    case RecoverResponse_Response.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Keygen's success response */
export interface KeygenOutput {
  /** pub_key; common for all parties */
  pubKey: Uint8Array;
  /** recover info of all parties' shares; common for all parties */
  groupRecoverInfo: Uint8Array;
  /** private recover info of this party's shares; unique for each party */
  privateRecoverInfo: Uint8Array;
}

export interface MessageIn {
  /** first message only, Keygen */
  keygenInit?: KeygenInit | undefined;
  /** first message only, Sign */
  signInit?: SignInit | undefined;
  /** all subsequent messages */
  traffic?: TrafficIn | undefined;
  /** abort the protocol, ignore the bool value */
  abort: boolean | undefined;
}

export interface MessageOut {
  /** all but final message */
  traffic?: TrafficOut | undefined;
  /** final message only, Keygen */
  keygenResult?: MessageOut_KeygenResult | undefined;
  /** final message only, Sign */
  signResult?: MessageOut_SignResult | undefined;
  /** issue recover from client */
  needRecover: boolean | undefined;
}

/** Keygen's response types */
export interface MessageOut_KeygenResult {
  /** Success response */
  data?: KeygenOutput | undefined;
  /** Faiilure response */
  criminals?: MessageOut_CriminalList | undefined;
}

/** Sign's response types */
export interface MessageOut_SignResult {
  /** Success response */
  signature: Uint8Array | undefined;
  /** Failure response */
  criminals?: MessageOut_CriminalList | undefined;
}

/** Keygen/Sign failure response message */
export interface MessageOut_CriminalList {
  criminals: MessageOut_CriminalList_Criminal[];
}

export interface MessageOut_CriminalList_Criminal {
  partyUid: string;
  crimeType: MessageOut_CriminalList_Criminal_CrimeType;
}

export enum MessageOut_CriminalList_Criminal_CrimeType {
  CRIME_TYPE_UNSPECIFIED = 0,
  CRIME_TYPE_NON_MALICIOUS = 1,
  CRIME_TYPE_MALICIOUS = 2,
  UNRECOGNIZED = -1,
}

export function messageOut_CriminalList_Criminal_CrimeTypeFromJSON(
  object: any,
): MessageOut_CriminalList_Criminal_CrimeType {
  switch (object) {
    case 0:
    case "CRIME_TYPE_UNSPECIFIED":
      return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_UNSPECIFIED;
    case 1:
    case "CRIME_TYPE_NON_MALICIOUS":
      return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_NON_MALICIOUS;
    case 2:
    case "CRIME_TYPE_MALICIOUS":
      return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_MALICIOUS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageOut_CriminalList_Criminal_CrimeType.UNRECOGNIZED;
  }
}

export function messageOut_CriminalList_Criminal_CrimeTypeToJSON(
  object: MessageOut_CriminalList_Criminal_CrimeType,
): string {
  switch (object) {
    case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_UNSPECIFIED:
      return "CRIME_TYPE_UNSPECIFIED";
    case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_NON_MALICIOUS:
      return "CRIME_TYPE_NON_MALICIOUS";
    case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_MALICIOUS:
      return "CRIME_TYPE_MALICIOUS";
    case MessageOut_CriminalList_Criminal_CrimeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TrafficIn {
  fromPartyUid: string;
  payload: Uint8Array;
  isBroadcast: boolean;
}

export interface TrafficOut {
  toPartyUid: string;
  payload: Uint8Array;
  isBroadcast: boolean;
}

export interface KeygenInit {
  newKeyUid: string;
  partyUids: string[];
  partyShareCounts: number[];
  /** parties[my_party_index] belongs to the server */
  myPartyIndex: number;
  threshold: number;
}

export interface SignInit {
  newSigUid: string;
  keyUid: string;
  /** TODO replace this with a subset of indices? */
  partyUids: string[];
  messageToSign: Uint8Array;
}

function createBaseRecoverRequest(): RecoverRequest {
  return { keygenInit: undefined, keygenOutput: undefined };
}

export const RecoverRequest = {
  encode(message: RecoverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keygenInit !== undefined) {
      KeygenInit.encode(message.keygenInit, writer.uint32(10).fork()).ldelim();
    }
    if (message.keygenOutput !== undefined) {
      KeygenOutput.encode(message.keygenOutput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecoverRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoverRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keygenInit = KeygenInit.decode(reader, reader.uint32());
          break;
        case 2:
          message.keygenOutput = KeygenOutput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecoverRequest {
    return {
      keygenInit: isSet(object.keygenInit) ? KeygenInit.fromJSON(object.keygenInit) : undefined,
      keygenOutput: isSet(object.keygenOutput) ? KeygenOutput.fromJSON(object.keygenOutput) : undefined,
    };
  },

  toJSON(message: RecoverRequest): unknown {
    const obj: any = {};
    message.keygenInit !== undefined &&
      (obj.keygenInit = message.keygenInit ? KeygenInit.toJSON(message.keygenInit) : undefined);
    message.keygenOutput !== undefined &&
      (obj.keygenOutput = message.keygenOutput ? KeygenOutput.toJSON(message.keygenOutput) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecoverRequest>, I>>(object: I): RecoverRequest {
    const message = createBaseRecoverRequest();
    message.keygenInit =
      object.keygenInit !== undefined && object.keygenInit !== null
        ? KeygenInit.fromPartial(object.keygenInit)
        : undefined;
    message.keygenOutput =
      object.keygenOutput !== undefined && object.keygenOutput !== null
        ? KeygenOutput.fromPartial(object.keygenOutput)
        : undefined;
    return message;
  },
};

function createBaseRecoverResponse(): RecoverResponse {
  return { response: 0 };
}

export const RecoverResponse = {
  encode(message: RecoverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecoverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoverResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecoverResponse {
    return {
      response: isSet(object.response) ? recoverResponse_ResponseFromJSON(object.response) : 0,
    };
  },

  toJSON(message: RecoverResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = recoverResponse_ResponseToJSON(message.response));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecoverResponse>, I>>(object: I): RecoverResponse {
    const message = createBaseRecoverResponse();
    message.response = object.response ?? 0;
    return message;
  },
};

function createBaseKeygenOutput(): KeygenOutput {
  return {
    pubKey: new Uint8Array(),
    groupRecoverInfo: new Uint8Array(),
    privateRecoverInfo: new Uint8Array(),
  };
}

export const KeygenOutput = {
  encode(message: KeygenOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey.length !== 0) {
      writer.uint32(10).bytes(message.pubKey);
    }
    if (message.groupRecoverInfo.length !== 0) {
      writer.uint32(18).bytes(message.groupRecoverInfo);
    }
    if (message.privateRecoverInfo.length !== 0) {
      writer.uint32(26).bytes(message.privateRecoverInfo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOutput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.bytes();
          break;
        case 2:
          message.groupRecoverInfo = reader.bytes();
          break;
        case 3:
          message.privateRecoverInfo = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenOutput {
    return {
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      groupRecoverInfo: isSet(object.groupRecoverInfo)
        ? bytesFromBase64(object.groupRecoverInfo)
        : new Uint8Array(),
      privateRecoverInfo: isSet(object.privateRecoverInfo)
        ? bytesFromBase64(object.privateRecoverInfo)
        : new Uint8Array(),
    };
  },

  toJSON(message: KeygenOutput): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    message.groupRecoverInfo !== undefined &&
      (obj.groupRecoverInfo = base64FromBytes(
        message.groupRecoverInfo !== undefined ? message.groupRecoverInfo : new Uint8Array(),
      ));
    message.privateRecoverInfo !== undefined &&
      (obj.privateRecoverInfo = base64FromBytes(
        message.privateRecoverInfo !== undefined ? message.privateRecoverInfo : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenOutput>, I>>(object: I): KeygenOutput {
    const message = createBaseKeygenOutput();
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.groupRecoverInfo = object.groupRecoverInfo ?? new Uint8Array();
    message.privateRecoverInfo = object.privateRecoverInfo ?? new Uint8Array();
    return message;
  },
};

function createBaseMessageIn(): MessageIn {
  return { keygenInit: undefined, signInit: undefined, traffic: undefined, abort: undefined };
}

export const MessageIn = {
  encode(message: MessageIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keygenInit !== undefined) {
      KeygenInit.encode(message.keygenInit, writer.uint32(10).fork()).ldelim();
    }
    if (message.signInit !== undefined) {
      SignInit.encode(message.signInit, writer.uint32(18).fork()).ldelim();
    }
    if (message.traffic !== undefined) {
      TrafficIn.encode(message.traffic, writer.uint32(26).fork()).ldelim();
    }
    if (message.abort !== undefined) {
      writer.uint32(32).bool(message.abort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keygenInit = KeygenInit.decode(reader, reader.uint32());
          break;
        case 2:
          message.signInit = SignInit.decode(reader, reader.uint32());
          break;
        case 3:
          message.traffic = TrafficIn.decode(reader, reader.uint32());
          break;
        case 4:
          message.abort = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageIn {
    return {
      keygenInit: isSet(object.keygenInit) ? KeygenInit.fromJSON(object.keygenInit) : undefined,
      signInit: isSet(object.signInit) ? SignInit.fromJSON(object.signInit) : undefined,
      traffic: isSet(object.traffic) ? TrafficIn.fromJSON(object.traffic) : undefined,
      abort: isSet(object.abort) ? Boolean(object.abort) : undefined,
    };
  },

  toJSON(message: MessageIn): unknown {
    const obj: any = {};
    message.keygenInit !== undefined &&
      (obj.keygenInit = message.keygenInit ? KeygenInit.toJSON(message.keygenInit) : undefined);
    message.signInit !== undefined &&
      (obj.signInit = message.signInit ? SignInit.toJSON(message.signInit) : undefined);
    message.traffic !== undefined &&
      (obj.traffic = message.traffic ? TrafficIn.toJSON(message.traffic) : undefined);
    message.abort !== undefined && (obj.abort = message.abort);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageIn>, I>>(object: I): MessageIn {
    const message = createBaseMessageIn();
    message.keygenInit =
      object.keygenInit !== undefined && object.keygenInit !== null
        ? KeygenInit.fromPartial(object.keygenInit)
        : undefined;
    message.signInit =
      object.signInit !== undefined && object.signInit !== null
        ? SignInit.fromPartial(object.signInit)
        : undefined;
    message.traffic =
      object.traffic !== undefined && object.traffic !== null
        ? TrafficIn.fromPartial(object.traffic)
        : undefined;
    message.abort = object.abort ?? undefined;
    return message;
  },
};

function createBaseMessageOut(): MessageOut {
  return { traffic: undefined, keygenResult: undefined, signResult: undefined, needRecover: undefined };
}

export const MessageOut = {
  encode(message: MessageOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traffic !== undefined) {
      TrafficOut.encode(message.traffic, writer.uint32(10).fork()).ldelim();
    }
    if (message.keygenResult !== undefined) {
      MessageOut_KeygenResult.encode(message.keygenResult, writer.uint32(18).fork()).ldelim();
    }
    if (message.signResult !== undefined) {
      MessageOut_SignResult.encode(message.signResult, writer.uint32(26).fork()).ldelim();
    }
    if (message.needRecover !== undefined) {
      writer.uint32(32).bool(message.needRecover);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.traffic = TrafficOut.decode(reader, reader.uint32());
          break;
        case 2:
          message.keygenResult = MessageOut_KeygenResult.decode(reader, reader.uint32());
          break;
        case 3:
          message.signResult = MessageOut_SignResult.decode(reader, reader.uint32());
          break;
        case 4:
          message.needRecover = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageOut {
    return {
      traffic: isSet(object.traffic) ? TrafficOut.fromJSON(object.traffic) : undefined,
      keygenResult: isSet(object.keygenResult)
        ? MessageOut_KeygenResult.fromJSON(object.keygenResult)
        : undefined,
      signResult: isSet(object.signResult) ? MessageOut_SignResult.fromJSON(object.signResult) : undefined,
      needRecover: isSet(object.needRecover) ? Boolean(object.needRecover) : undefined,
    };
  },

  toJSON(message: MessageOut): unknown {
    const obj: any = {};
    message.traffic !== undefined &&
      (obj.traffic = message.traffic ? TrafficOut.toJSON(message.traffic) : undefined);
    message.keygenResult !== undefined &&
      (obj.keygenResult = message.keygenResult
        ? MessageOut_KeygenResult.toJSON(message.keygenResult)
        : undefined);
    message.signResult !== undefined &&
      (obj.signResult = message.signResult ? MessageOut_SignResult.toJSON(message.signResult) : undefined);
    message.needRecover !== undefined && (obj.needRecover = message.needRecover);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageOut>, I>>(object: I): MessageOut {
    const message = createBaseMessageOut();
    message.traffic =
      object.traffic !== undefined && object.traffic !== null
        ? TrafficOut.fromPartial(object.traffic)
        : undefined;
    message.keygenResult =
      object.keygenResult !== undefined && object.keygenResult !== null
        ? MessageOut_KeygenResult.fromPartial(object.keygenResult)
        : undefined;
    message.signResult =
      object.signResult !== undefined && object.signResult !== null
        ? MessageOut_SignResult.fromPartial(object.signResult)
        : undefined;
    message.needRecover = object.needRecover ?? undefined;
    return message;
  },
};

function createBaseMessageOut_KeygenResult(): MessageOut_KeygenResult {
  return { data: undefined, criminals: undefined };
}

export const MessageOut_KeygenResult = {
  encode(message: MessageOut_KeygenResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      KeygenOutput.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.criminals !== undefined) {
      MessageOut_CriminalList.encode(message.criminals, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_KeygenResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOut_KeygenResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = KeygenOutput.decode(reader, reader.uint32());
          break;
        case 2:
          message.criminals = MessageOut_CriminalList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageOut_KeygenResult {
    return {
      data: isSet(object.data) ? KeygenOutput.fromJSON(object.data) : undefined,
      criminals: isSet(object.criminals) ? MessageOut_CriminalList.fromJSON(object.criminals) : undefined,
    };
  },

  toJSON(message: MessageOut_KeygenResult): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data ? KeygenOutput.toJSON(message.data) : undefined);
    message.criminals !== undefined &&
      (obj.criminals = message.criminals ? MessageOut_CriminalList.toJSON(message.criminals) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageOut_KeygenResult>, I>>(object: I): MessageOut_KeygenResult {
    const message = createBaseMessageOut_KeygenResult();
    message.data =
      object.data !== undefined && object.data !== null ? KeygenOutput.fromPartial(object.data) : undefined;
    message.criminals =
      object.criminals !== undefined && object.criminals !== null
        ? MessageOut_CriminalList.fromPartial(object.criminals)
        : undefined;
    return message;
  },
};

function createBaseMessageOut_SignResult(): MessageOut_SignResult {
  return { signature: undefined, criminals: undefined };
}

export const MessageOut_SignResult = {
  encode(message: MessageOut_SignResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature !== undefined) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.criminals !== undefined) {
      MessageOut_CriminalList.encode(message.criminals, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_SignResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOut_SignResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;
        case 2:
          message.criminals = MessageOut_CriminalList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageOut_SignResult {
    return {
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
      criminals: isSet(object.criminals) ? MessageOut_CriminalList.fromJSON(object.criminals) : undefined,
    };
  },

  toJSON(message: MessageOut_SignResult): unknown {
    const obj: any = {};
    message.signature !== undefined &&
      (obj.signature = message.signature !== undefined ? base64FromBytes(message.signature) : undefined);
    message.criminals !== undefined &&
      (obj.criminals = message.criminals ? MessageOut_CriminalList.toJSON(message.criminals) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageOut_SignResult>, I>>(object: I): MessageOut_SignResult {
    const message = createBaseMessageOut_SignResult();
    message.signature = object.signature ?? undefined;
    message.criminals =
      object.criminals !== undefined && object.criminals !== null
        ? MessageOut_CriminalList.fromPartial(object.criminals)
        : undefined;
    return message;
  },
};

function createBaseMessageOut_CriminalList(): MessageOut_CriminalList {
  return { criminals: [] };
}

export const MessageOut_CriminalList = {
  encode(message: MessageOut_CriminalList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.criminals) {
      MessageOut_CriminalList_Criminal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_CriminalList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOut_CriminalList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.criminals.push(MessageOut_CriminalList_Criminal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageOut_CriminalList {
    return {
      criminals: Array.isArray(object?.criminals)
        ? object.criminals.map((e: any) => MessageOut_CriminalList_Criminal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MessageOut_CriminalList): unknown {
    const obj: any = {};
    if (message.criminals) {
      obj.criminals = message.criminals.map((e) =>
        e ? MessageOut_CriminalList_Criminal.toJSON(e) : undefined,
      );
    } else {
      obj.criminals = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageOut_CriminalList>, I>>(object: I): MessageOut_CriminalList {
    const message = createBaseMessageOut_CriminalList();
    message.criminals = object.criminals?.map((e) => MessageOut_CriminalList_Criminal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessageOut_CriminalList_Criminal(): MessageOut_CriminalList_Criminal {
  return { partyUid: "", crimeType: 0 };
}

export const MessageOut_CriminalList_Criminal = {
  encode(message: MessageOut_CriminalList_Criminal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partyUid !== "") {
      writer.uint32(10).string(message.partyUid);
    }
    if (message.crimeType !== 0) {
      writer.uint32(16).int32(message.crimeType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_CriminalList_Criminal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOut_CriminalList_Criminal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyUid = reader.string();
          break;
        case 2:
          message.crimeType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageOut_CriminalList_Criminal {
    return {
      partyUid: isSet(object.partyUid) ? String(object.partyUid) : "",
      crimeType: isSet(object.crimeType)
        ? messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object.crimeType)
        : 0,
    };
  },

  toJSON(message: MessageOut_CriminalList_Criminal): unknown {
    const obj: any = {};
    message.partyUid !== undefined && (obj.partyUid = message.partyUid);
    message.crimeType !== undefined &&
      (obj.crimeType = messageOut_CriminalList_Criminal_CrimeTypeToJSON(message.crimeType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageOut_CriminalList_Criminal>, I>>(
    object: I,
  ): MessageOut_CriminalList_Criminal {
    const message = createBaseMessageOut_CriminalList_Criminal();
    message.partyUid = object.partyUid ?? "";
    message.crimeType = object.crimeType ?? 0;
    return message;
  },
};

function createBaseTrafficIn(): TrafficIn {
  return { fromPartyUid: "", payload: new Uint8Array(), isBroadcast: false };
}

export const TrafficIn = {
  encode(message: TrafficIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromPartyUid !== "") {
      writer.uint32(10).string(message.fromPartyUid);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    if (message.isBroadcast === true) {
      writer.uint32(24).bool(message.isBroadcast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrafficIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrafficIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromPartyUid = reader.string();
          break;
        case 2:
          message.payload = reader.bytes();
          break;
        case 3:
          message.isBroadcast = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TrafficIn {
    return {
      fromPartyUid: isSet(object.fromPartyUid) ? String(object.fromPartyUid) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      isBroadcast: isSet(object.isBroadcast) ? Boolean(object.isBroadcast) : false,
    };
  },

  toJSON(message: TrafficIn): unknown {
    const obj: any = {};
    message.fromPartyUid !== undefined && (obj.fromPartyUid = message.fromPartyUid);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    message.isBroadcast !== undefined && (obj.isBroadcast = message.isBroadcast);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TrafficIn>, I>>(object: I): TrafficIn {
    const message = createBaseTrafficIn();
    message.fromPartyUid = object.fromPartyUid ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.isBroadcast = object.isBroadcast ?? false;
    return message;
  },
};

function createBaseTrafficOut(): TrafficOut {
  return { toPartyUid: "", payload: new Uint8Array(), isBroadcast: false };
}

export const TrafficOut = {
  encode(message: TrafficOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toPartyUid !== "") {
      writer.uint32(10).string(message.toPartyUid);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    if (message.isBroadcast === true) {
      writer.uint32(24).bool(message.isBroadcast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrafficOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrafficOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toPartyUid = reader.string();
          break;
        case 2:
          message.payload = reader.bytes();
          break;
        case 3:
          message.isBroadcast = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TrafficOut {
    return {
      toPartyUid: isSet(object.toPartyUid) ? String(object.toPartyUid) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      isBroadcast: isSet(object.isBroadcast) ? Boolean(object.isBroadcast) : false,
    };
  },

  toJSON(message: TrafficOut): unknown {
    const obj: any = {};
    message.toPartyUid !== undefined && (obj.toPartyUid = message.toPartyUid);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    message.isBroadcast !== undefined && (obj.isBroadcast = message.isBroadcast);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TrafficOut>, I>>(object: I): TrafficOut {
    const message = createBaseTrafficOut();
    message.toPartyUid = object.toPartyUid ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.isBroadcast = object.isBroadcast ?? false;
    return message;
  },
};

function createBaseKeygenInit(): KeygenInit {
  return { newKeyUid: "", partyUids: [], partyShareCounts: [], myPartyIndex: 0, threshold: 0 };
}

export const KeygenInit = {
  encode(message: KeygenInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newKeyUid !== "") {
      writer.uint32(10).string(message.newKeyUid);
    }
    for (const v of message.partyUids) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(42).fork();
    for (const v of message.partyShareCounts) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.myPartyIndex !== 0) {
      writer.uint32(24).uint32(message.myPartyIndex);
    }
    if (message.threshold !== 0) {
      writer.uint32(32).uint32(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newKeyUid = reader.string();
          break;
        case 2:
          message.partyUids.push(reader.string());
          break;
        case 5:
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
          message.myPartyIndex = reader.uint32();
          break;
        case 4:
          message.threshold = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenInit {
    return {
      newKeyUid: isSet(object.newKeyUid) ? String(object.newKeyUid) : "",
      partyUids: Array.isArray(object?.partyUids) ? object.partyUids.map((e: any) => String(e)) : [],
      partyShareCounts: Array.isArray(object?.partyShareCounts)
        ? object.partyShareCounts.map((e: any) => Number(e))
        : [],
      myPartyIndex: isSet(object.myPartyIndex) ? Number(object.myPartyIndex) : 0,
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
    };
  },

  toJSON(message: KeygenInit): unknown {
    const obj: any = {};
    message.newKeyUid !== undefined && (obj.newKeyUid = message.newKeyUid);
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
    message.myPartyIndex !== undefined && (obj.myPartyIndex = Math.round(message.myPartyIndex));
    message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenInit>, I>>(object: I): KeygenInit {
    const message = createBaseKeygenInit();
    message.newKeyUid = object.newKeyUid ?? "";
    message.partyUids = object.partyUids?.map((e) => e) || [];
    message.partyShareCounts = object.partyShareCounts?.map((e) => e) || [];
    message.myPartyIndex = object.myPartyIndex ?? 0;
    message.threshold = object.threshold ?? 0;
    return message;
  },
};

function createBaseSignInit(): SignInit {
  return { newSigUid: "", keyUid: "", partyUids: [], messageToSign: new Uint8Array() };
}

export const SignInit = {
  encode(message: SignInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newSigUid !== "") {
      writer.uint32(10).string(message.newSigUid);
    }
    if (message.keyUid !== "") {
      writer.uint32(18).string(message.keyUid);
    }
    for (const v of message.partyUids) {
      writer.uint32(26).string(v!);
    }
    if (message.messageToSign.length !== 0) {
      writer.uint32(34).bytes(message.messageToSign);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newSigUid = reader.string();
          break;
        case 2:
          message.keyUid = reader.string();
          break;
        case 3:
          message.partyUids.push(reader.string());
          break;
        case 4:
          message.messageToSign = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignInit {
    return {
      newSigUid: isSet(object.newSigUid) ? String(object.newSigUid) : "",
      keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
      partyUids: Array.isArray(object?.partyUids) ? object.partyUids.map((e: any) => String(e)) : [],
      messageToSign: isSet(object.messageToSign) ? bytesFromBase64(object.messageToSign) : new Uint8Array(),
    };
  },

  toJSON(message: SignInit): unknown {
    const obj: any = {};
    message.newSigUid !== undefined && (obj.newSigUid = message.newSigUid);
    message.keyUid !== undefined && (obj.keyUid = message.keyUid);
    if (message.partyUids) {
      obj.partyUids = message.partyUids.map((e) => e);
    } else {
      obj.partyUids = [];
    }
    message.messageToSign !== undefined &&
      (obj.messageToSign = base64FromBytes(
        message.messageToSign !== undefined ? message.messageToSign : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignInit>, I>>(object: I): SignInit {
    const message = createBaseSignInit();
    message.newSigUid = object.newSigUid ?? "";
    message.keyUid = object.keyUid ?? "";
    message.partyUids = object.partyUids?.map((e) => e) || [];
    message.messageToSign = object.messageToSign ?? new Uint8Array();
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
