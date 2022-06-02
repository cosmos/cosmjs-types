/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  KeyRole,
  KeyType,
  keyRoleFromJSON,
  keyTypeFromJSON,
  keyRoleToJSON,
  keyTypeToJSON,
} from "../../../axelar/tss/exported/v1beta1/types";

export const protobufPackage = "axelar.tss.v1beta1";

export interface KeygenVoteData {
  pubKey: Uint8Array;
  groupRecoveryInfo: Uint8Array;
}

/** KeyInfo holds information about a key */
export interface KeyInfo {
  keyId: string;
  keyRole: KeyRole;
  keyType: KeyType;
}

export interface MultisigInfo {
  id: string;
  timeout: Long;
  targetNum: Long;
  infos: MultisigInfo_Info[];
}

export interface MultisigInfo_Info {
  participant: Uint8Array;
  data: Uint8Array[];
}

export interface KeyRecoveryInfo {
  keyId: string;
  public: Uint8Array;
  private: { [key: string]: Uint8Array };
}

export interface KeyRecoveryInfo_PrivateEntry {
  key: string;
  value: Uint8Array;
}

export interface ExternalKeys {
  chain: string;
  keyIds: string[];
}

export interface ValidatorStatus {
  validator: Uint8Array;
  suspendedUntil: Long;
}

function createBaseKeygenVoteData(): KeygenVoteData {
  return { pubKey: new Uint8Array(), groupRecoveryInfo: new Uint8Array() };
}

export const KeygenVoteData = {
  encode(message: KeygenVoteData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey.length !== 0) {
      writer.uint32(10).bytes(message.pubKey);
    }
    if (message.groupRecoveryInfo.length !== 0) {
      writer.uint32(18).bytes(message.groupRecoveryInfo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenVoteData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenVoteData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.bytes();
          break;
        case 2:
          message.groupRecoveryInfo = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenVoteData {
    return {
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      groupRecoveryInfo: isSet(object.groupRecoveryInfo)
        ? bytesFromBase64(object.groupRecoveryInfo)
        : new Uint8Array(),
    };
  },

  toJSON(message: KeygenVoteData): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    message.groupRecoveryInfo !== undefined &&
      (obj.groupRecoveryInfo = base64FromBytes(
        message.groupRecoveryInfo !== undefined ? message.groupRecoveryInfo : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenVoteData>, I>>(object: I): KeygenVoteData {
    const message = createBaseKeygenVoteData();
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.groupRecoveryInfo = object.groupRecoveryInfo ?? new Uint8Array();
    return message;
  },
};

function createBaseKeyInfo(): KeyInfo {
  return { keyId: "", keyRole: 0, keyType: 0 };
}

export const KeyInfo = {
  encode(message: KeyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.keyRole !== 0) {
      writer.uint32(16).int32(message.keyRole);
    }
    if (message.keyType !== 0) {
      writer.uint32(24).int32(message.keyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.keyRole = reader.int32() as any;
          break;
        case 3:
          message.keyType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyInfo {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : 0,
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : 0,
    };
  },

  toJSON(message: KeyInfo): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.keyRole !== undefined && (obj.keyRole = keyRoleToJSON(message.keyRole));
    message.keyType !== undefined && (obj.keyType = keyTypeToJSON(message.keyType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyInfo>, I>>(object: I): KeyInfo {
    const message = createBaseKeyInfo();
    message.keyId = object.keyId ?? "";
    message.keyRole = object.keyRole ?? 0;
    message.keyType = object.keyType ?? 0;
    return message;
  },
};

function createBaseMultisigInfo(): MultisigInfo {
  return { id: "", timeout: Long.ZERO, targetNum: Long.ZERO, infos: [] };
}

export const MultisigInfo = {
  encode(message: MultisigInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (!message.timeout.isZero()) {
      writer.uint32(16).int64(message.timeout);
    }
    if (!message.targetNum.isZero()) {
      writer.uint32(24).int64(message.targetNum);
    }
    for (const v of message.infos) {
      MultisigInfo_Info.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultisigInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultisigInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.timeout = reader.int64() as Long;
          break;
        case 3:
          message.targetNum = reader.int64() as Long;
          break;
        case 4:
          message.infos.push(MultisigInfo_Info.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultisigInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      timeout: isSet(object.timeout) ? Long.fromValue(object.timeout) : Long.ZERO,
      targetNum: isSet(object.targetNum) ? Long.fromValue(object.targetNum) : Long.ZERO,
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => MultisigInfo_Info.fromJSON(e)) : [],
    };
  },

  toJSON(message: MultisigInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.timeout !== undefined && (obj.timeout = (message.timeout || Long.ZERO).toString());
    message.targetNum !== undefined && (obj.targetNum = (message.targetNum || Long.ZERO).toString());
    if (message.infos) {
      obj.infos = message.infos.map((e) => (e ? MultisigInfo_Info.toJSON(e) : undefined));
    } else {
      obj.infos = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultisigInfo>, I>>(object: I): MultisigInfo {
    const message = createBaseMultisigInfo();
    message.id = object.id ?? "";
    message.timeout =
      object.timeout !== undefined && object.timeout !== null ? Long.fromValue(object.timeout) : Long.ZERO;
    message.targetNum =
      object.targetNum !== undefined && object.targetNum !== null
        ? Long.fromValue(object.targetNum)
        : Long.ZERO;
    message.infos = object.infos?.map((e) => MultisigInfo_Info.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMultisigInfo_Info(): MultisigInfo_Info {
  return { participant: new Uint8Array(), data: [] };
}

export const MultisigInfo_Info = {
  encode(message: MultisigInfo_Info, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant.length !== 0) {
      writer.uint32(10).bytes(message.participant);
    }
    for (const v of message.data) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultisigInfo_Info {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultisigInfo_Info();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participant = reader.bytes();
          break;
        case 2:
          message.data.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultisigInfo_Info {
    return {
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
      data: Array.isArray(object?.data) ? object.data.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: MultisigInfo_Info): unknown {
    const obj: any = {};
    message.participant !== undefined &&
      (obj.participant = base64FromBytes(
        message.participant !== undefined ? message.participant : new Uint8Array(),
      ));
    if (message.data) {
      obj.data = message.data.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultisigInfo_Info>, I>>(object: I): MultisigInfo_Info {
    const message = createBaseMultisigInfo_Info();
    message.participant = object.participant ?? new Uint8Array();
    message.data = object.data?.map((e) => e) || [];
    return message;
  },
};

function createBaseKeyRecoveryInfo(): KeyRecoveryInfo {
  return { keyId: "", public: new Uint8Array(), private: {} };
}

export const KeyRecoveryInfo = {
  encode(message: KeyRecoveryInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.public.length !== 0) {
      writer.uint32(18).bytes(message.public);
    }
    Object.entries(message.private).forEach(([key, value]) => {
      KeyRecoveryInfo_PrivateEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyRecoveryInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyRecoveryInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.public = reader.bytes();
          break;
        case 3:
          const entry3 = KeyRecoveryInfo_PrivateEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.private[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyRecoveryInfo {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      public: isSet(object.public) ? bytesFromBase64(object.public) : new Uint8Array(),
      private: isObject(object.private)
        ? Object.entries(object.private).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
            acc[key] = bytesFromBase64(value as string);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: KeyRecoveryInfo): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.public !== undefined &&
      (obj.public = base64FromBytes(message.public !== undefined ? message.public : new Uint8Array()));
    obj.private = {};
    if (message.private) {
      Object.entries(message.private).forEach(([k, v]) => {
        obj.private[k] = base64FromBytes(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyRecoveryInfo>, I>>(object: I): KeyRecoveryInfo {
    const message = createBaseKeyRecoveryInfo();
    message.keyId = object.keyId ?? "";
    message.public = object.public ?? new Uint8Array();
    message.private = Object.entries(object.private ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseKeyRecoveryInfo_PrivateEntry(): KeyRecoveryInfo_PrivateEntry {
  return { key: "", value: new Uint8Array() };
}

export const KeyRecoveryInfo_PrivateEntry = {
  encode(message: KeyRecoveryInfo_PrivateEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyRecoveryInfo_PrivateEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyRecoveryInfo_PrivateEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyRecoveryInfo_PrivateEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: KeyRecoveryInfo_PrivateEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyRecoveryInfo_PrivateEntry>, I>>(
    object: I,
  ): KeyRecoveryInfo_PrivateEntry {
    const message = createBaseKeyRecoveryInfo_PrivateEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseExternalKeys(): ExternalKeys {
  return { chain: "", keyIds: [] };
}

export const ExternalKeys = {
  encode(message: ExternalKeys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    for (const v of message.keyIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalKeys {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
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

  fromJSON(object: any): ExternalKeys {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyIds: Array.isArray(object?.keyIds) ? object.keyIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ExternalKeys): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    if (message.keyIds) {
      obj.keyIds = message.keyIds.map((e) => e);
    } else {
      obj.keyIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalKeys>, I>>(object: I): ExternalKeys {
    const message = createBaseExternalKeys();
    message.chain = object.chain ?? "";
    message.keyIds = object.keyIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseValidatorStatus(): ValidatorStatus {
  return { validator: new Uint8Array(), suspendedUntil: Long.UZERO };
}

export const ValidatorStatus = {
  encode(message: ValidatorStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }
    if (!message.suspendedUntil.isZero()) {
      writer.uint32(16).uint64(message.suspendedUntil);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.bytes();
          break;
        case 2:
          message.suspendedUntil = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorStatus {
    return {
      validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
      suspendedUntil: isSet(object.suspendedUntil) ? Long.fromValue(object.suspendedUntil) : Long.UZERO,
    };
  },

  toJSON(message: ValidatorStatus): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = base64FromBytes(
        message.validator !== undefined ? message.validator : new Uint8Array(),
      ));
    message.suspendedUntil !== undefined &&
      (obj.suspendedUntil = (message.suspendedUntil || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorStatus>, I>>(object: I): ValidatorStatus {
    const message = createBaseValidatorStatus();
    message.validator = object.validator ?? new Uint8Array();
    message.suspendedUntil =
      object.suspendedUntil !== undefined && object.suspendedUntil !== null
        ? Long.fromValue(object.suspendedUntil)
        : Long.UZERO;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
