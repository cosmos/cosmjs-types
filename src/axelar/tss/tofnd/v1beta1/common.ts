/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "axelar.tss.tofnd.v1beta1";

/** File copied from golang tofnd with minor tweaks */

/** Key presence check types */
export interface KeyPresenceRequest {
  keyUid: string;
  /** SEC1-encoded compressed pub key bytes to find the right */
  pubKey: Uint8Array;
}

export interface KeyPresenceResponse {
  response: KeyPresenceResponse_Response;
}

export enum KeyPresenceResponse_Response {
  RESPONSE_UNSPECIFIED = 0,
  RESPONSE_PRESENT = 1,
  RESPONSE_ABSENT = 2,
  RESPONSE_FAIL = 3,
  UNRECOGNIZED = -1,
}

export function keyPresenceResponse_ResponseFromJSON(object: any): KeyPresenceResponse_Response {
  switch (object) {
    case 0:
    case "RESPONSE_UNSPECIFIED":
      return KeyPresenceResponse_Response.RESPONSE_UNSPECIFIED;
    case 1:
    case "RESPONSE_PRESENT":
      return KeyPresenceResponse_Response.RESPONSE_PRESENT;
    case 2:
    case "RESPONSE_ABSENT":
      return KeyPresenceResponse_Response.RESPONSE_ABSENT;
    case 3:
    case "RESPONSE_FAIL":
      return KeyPresenceResponse_Response.RESPONSE_FAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyPresenceResponse_Response.UNRECOGNIZED;
  }
}

export function keyPresenceResponse_ResponseToJSON(object: KeyPresenceResponse_Response): string {
  switch (object) {
    case KeyPresenceResponse_Response.RESPONSE_UNSPECIFIED:
      return "RESPONSE_UNSPECIFIED";
    case KeyPresenceResponse_Response.RESPONSE_PRESENT:
      return "RESPONSE_PRESENT";
    case KeyPresenceResponse_Response.RESPONSE_ABSENT:
      return "RESPONSE_ABSENT";
    case KeyPresenceResponse_Response.RESPONSE_FAIL:
      return "RESPONSE_FAIL";
    case KeyPresenceResponse_Response.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseKeyPresenceRequest(): KeyPresenceRequest {
  return { keyUid: "", pubKey: new Uint8Array() };
}

export const KeyPresenceRequest = {
  encode(message: KeyPresenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyUid !== "") {
      writer.uint32(10).string(message.keyUid);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(18).bytes(message.pubKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyPresenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyPresenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyUid = reader.string();
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

  fromJSON(object: any): KeyPresenceRequest {
    return {
      keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
    };
  },

  toJSON(message: KeyPresenceRequest): unknown {
    const obj: any = {};
    message.keyUid !== undefined && (obj.keyUid = message.keyUid);
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyPresenceRequest>, I>>(object: I): KeyPresenceRequest {
    const message = createBaseKeyPresenceRequest();
    message.keyUid = object.keyUid ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  },
};

function createBaseKeyPresenceResponse(): KeyPresenceResponse {
  return { response: 0 };
}

export const KeyPresenceResponse = {
  encode(message: KeyPresenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyPresenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyPresenceResponse();
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

  fromJSON(object: any): KeyPresenceResponse {
    return {
      response: isSet(object.response) ? keyPresenceResponse_ResponseFromJSON(object.response) : 0,
    };
  },

  toJSON(message: KeyPresenceResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = keyPresenceResponse_ResponseToJSON(message.response));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyPresenceResponse>, I>>(object: I): KeyPresenceResponse {
    const message = createBaseKeyPresenceResponse();
    message.response = object.response ?? 0;
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
