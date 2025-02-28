/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "axelar.multisig.v1beta1";

export interface StartKeygenRequest {
  /**
   * Deprecated: This is the original "sender" field, but was originally declared as a string,
   * rather than a byte array.
   *
   * @deprecated
   */
  senderStr: string;
  keyId: string;
  /** New "sender" field, using the appropriate type */
  sender: Uint8Array;
}

export interface StartKeygenResponse {}

export interface SubmitPubKeyRequest {
  /**
   * Deprecated: This is the original "sender" field, but was originally declared as a string,
   * rather than a byte array.
   *
   * @deprecated
   */
  senderStr: string;
  keyId: string;
  pubKey: Uint8Array;
  signature: Uint8Array;
  /** New "sender" field, using the appropriate type */
  sender: Uint8Array;
}

export interface SubmitPubKeyResponse {}

export interface SubmitSignatureRequest {
  /**
   * Deprecated: This is the original "sender" field, but was originally declared as a string,
   * rather than a byte array.
   *
   * @deprecated
   */
  senderStr: string;
  sigId: Long;
  signature: Uint8Array;
  /** New "sender" field, using the appropriate type */
  sender: Uint8Array;
}

export interface SubmitSignatureResponse {}

export interface RotateKeyRequest {
  /**
   * Deprecated: This is the original "sender" field, but was originally declared as a string,
   * rather than a byte array.
   *
   * @deprecated
   */
  senderStr: string;
  chain: string;
  keyId: string;
  /** New "sender" field, using the appropriate type */
  sender: Uint8Array;
}

export interface RotateKeyResponse {}

export interface KeygenOptOutRequest {
  sender: Uint8Array;
}

export interface KeygenOptOutResponse {}

export interface KeygenOptInRequest {
  sender: Uint8Array;
}

export interface KeygenOptInResponse {}

function createBaseStartKeygenRequest(): StartKeygenRequest {
  return { senderStr: "", keyId: "", sender: new Uint8Array() };
}

export const StartKeygenRequest = {
  encode(message: StartKeygenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderStr !== "") {
      writer.uint32(10).string(message.senderStr);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    if (message.sender.length !== 0) {
      writer.uint32(26).bytes(message.sender);
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
          message.senderStr = reader.string();
          break;
        case 2:
          message.keyId = reader.string();
          break;
        case 3:
          message.sender = reader.bytes();
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
      senderStr: isSet(object.senderStr) ? String(object.senderStr) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
    };
  },

  toJSON(message: StartKeygenRequest): unknown {
    const obj: any = {};
    message.senderStr !== undefined && (obj.senderStr = message.senderStr);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartKeygenRequest>, I>>(object: I): StartKeygenRequest {
    const message = createBaseStartKeygenRequest();
    message.senderStr = object.senderStr ?? "";
    message.keyId = object.keyId ?? "";
    message.sender = object.sender ?? new Uint8Array();
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

function createBaseSubmitPubKeyRequest(): SubmitPubKeyRequest {
  return {
    senderStr: "",
    keyId: "",
    pubKey: new Uint8Array(),
    signature: new Uint8Array(),
    sender: new Uint8Array(),
  };
}

export const SubmitPubKeyRequest = {
  encode(message: SubmitPubKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderStr !== "") {
      writer.uint32(10).string(message.senderStr);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(26).bytes(message.pubKey);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    if (message.sender.length !== 0) {
      writer.uint32(42).bytes(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitPubKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitPubKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderStr = reader.string();
          break;
        case 2:
          message.keyId = reader.string();
          break;
        case 3:
          message.pubKey = reader.bytes();
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        case 5:
          message.sender = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitPubKeyRequest {
    return {
      senderStr: isSet(object.senderStr) ? String(object.senderStr) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
    };
  },

  toJSON(message: SubmitPubKeyRequest): unknown {
    const obj: any = {};
    message.senderStr !== undefined && (obj.senderStr = message.senderStr);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitPubKeyRequest>, I>>(object: I): SubmitPubKeyRequest {
    const message = createBaseSubmitPubKeyRequest();
    message.senderStr = object.senderStr ?? "";
    message.keyId = object.keyId ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  },
};

function createBaseSubmitPubKeyResponse(): SubmitPubKeyResponse {
  return {};
}

export const SubmitPubKeyResponse = {
  encode(_: SubmitPubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitPubKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitPubKeyResponse();
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

  fromJSON(_: any): SubmitPubKeyResponse {
    return {};
  },

  toJSON(_: SubmitPubKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitPubKeyResponse>, I>>(_: I): SubmitPubKeyResponse {
    const message = createBaseSubmitPubKeyResponse();
    return message;
  },
};

function createBaseSubmitSignatureRequest(): SubmitSignatureRequest {
  return { senderStr: "", sigId: Long.UZERO, signature: new Uint8Array(), sender: new Uint8Array() };
}

export const SubmitSignatureRequest = {
  encode(message: SubmitSignatureRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderStr !== "") {
      writer.uint32(10).string(message.senderStr);
    }
    if (!message.sigId.isZero()) {
      writer.uint32(16).uint64(message.sigId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.sender.length !== 0) {
      writer.uint32(34).bytes(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitSignatureRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitSignatureRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderStr = reader.string();
          break;
        case 2:
          message.sigId = reader.uint64() as Long;
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        case 4:
          message.sender = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitSignatureRequest {
    return {
      senderStr: isSet(object.senderStr) ? String(object.senderStr) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
    };
  },

  toJSON(message: SubmitSignatureRequest): unknown {
    const obj: any = {};
    message.senderStr !== undefined && (obj.senderStr = message.senderStr);
    message.sigId !== undefined && (obj.sigId = (message.sigId || Long.UZERO).toString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitSignatureRequest>, I>>(object: I): SubmitSignatureRequest {
    const message = createBaseSubmitSignatureRequest();
    message.senderStr = object.senderStr ?? "";
    message.sigId =
      object.sigId !== undefined && object.sigId !== null ? Long.fromValue(object.sigId) : Long.UZERO;
    message.signature = object.signature ?? new Uint8Array();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  },
};

function createBaseSubmitSignatureResponse(): SubmitSignatureResponse {
  return {};
}

export const SubmitSignatureResponse = {
  encode(_: SubmitSignatureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitSignatureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitSignatureResponse();
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

  fromJSON(_: any): SubmitSignatureResponse {
    return {};
  },

  toJSON(_: SubmitSignatureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitSignatureResponse>, I>>(_: I): SubmitSignatureResponse {
    const message = createBaseSubmitSignatureResponse();
    return message;
  },
};

function createBaseRotateKeyRequest(): RotateKeyRequest {
  return { senderStr: "", chain: "", keyId: "", sender: new Uint8Array() };
}

export const RotateKeyRequest = {
  encode(message: RotateKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderStr !== "") {
      writer.uint32(10).string(message.senderStr);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    if (message.sender.length !== 0) {
      writer.uint32(34).bytes(message.sender);
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
          message.senderStr = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.keyId = reader.string();
          break;
        case 4:
          message.sender = reader.bytes();
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
      senderStr: isSet(object.senderStr) ? String(object.senderStr) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
    };
  },

  toJSON(message: RotateKeyRequest): unknown {
    const obj: any = {};
    message.senderStr !== undefined && (obj.senderStr = message.senderStr);
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RotateKeyRequest>, I>>(object: I): RotateKeyRequest {
    const message = createBaseRotateKeyRequest();
    message.senderStr = object.senderStr ?? "";
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    message.sender = object.sender ?? new Uint8Array();
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

function createBaseKeygenOptOutRequest(): KeygenOptOutRequest {
  return { sender: new Uint8Array() };
}

export const KeygenOptOutRequest = {
  encode(message: KeygenOptOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenOptOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenOptOutRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
    };
  },

  toJSON(message: KeygenOptOutRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenOptOutRequest>, I>>(object: I): KeygenOptOutRequest {
    const message = createBaseKeygenOptOutRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  },
};

function createBaseKeygenOptOutResponse(): KeygenOptOutResponse {
  return {};
}

export const KeygenOptOutResponse = {
  encode(_: KeygenOptOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenOptOutResponse();
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

  fromJSON(_: any): KeygenOptOutResponse {
    return {};
  },

  toJSON(_: KeygenOptOutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenOptOutResponse>, I>>(_: I): KeygenOptOutResponse {
    const message = createBaseKeygenOptOutResponse();
    return message;
  },
};

function createBaseKeygenOptInRequest(): KeygenOptInRequest {
  return { sender: new Uint8Array() };
}

export const KeygenOptInRequest = {
  encode(message: KeygenOptInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenOptInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenOptInRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
    };
  },

  toJSON(message: KeygenOptInRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenOptInRequest>, I>>(object: I): KeygenOptInRequest {
    const message = createBaseKeygenOptInRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  },
};

function createBaseKeygenOptInResponse(): KeygenOptInResponse {
  return {};
}

export const KeygenOptInResponse = {
  encode(_: KeygenOptInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenOptInResponse();
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

  fromJSON(_: any): KeygenOptInResponse {
    return {};
  },

  toJSON(_: KeygenOptInResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenOptInResponse>, I>>(_: I): KeygenOptInResponse {
    const message = createBaseKeygenOptInResponse();
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
