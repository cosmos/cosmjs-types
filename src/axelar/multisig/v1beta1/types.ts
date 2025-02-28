/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Snapshot } from "../../../axelar/snapshot/exported/v1beta1/types";
import { Threshold } from "../../../axelar/utils/v1beta1/threshold";
import {
  KeyState,
  MultisigState,
  keyStateFromJSON,
  keyStateToJSON,
  multisigStateFromJSON,
  multisigStateToJSON,
} from "../../../axelar/multisig/exported/v1beta1/types";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "axelar.multisig.v1beta1";

export interface Key {
  id: string;
  snapshot?: Snapshot;
  pubKeys: { [key: string]: Uint8Array };
  signingThreshold?: Threshold;
  state: KeyState;
}

export interface Key_PubKeysEntry {
  key: string;
  value: Uint8Array;
}

export interface KeygenSession {
  key?: Key;
  state: MultisigState;
  keygenThreshold?: Threshold;
  expiresAt: Long;
  completedAt: Long;
  isPubKeyReceived: { [key: string]: boolean };
  gracePeriod: Long;
}

export interface KeygenSession_IsPubKeyReceivedEntry {
  key: string;
  value: boolean;
}

export interface MultiSig {
  keyId: string;
  payloadHash: Uint8Array;
  sigs: { [key: string]: Uint8Array };
}

export interface MultiSig_SigsEntry {
  key: string;
  value: Uint8Array;
}

export interface SigningSession {
  id: Long;
  multiSig?: MultiSig;
  state: MultisigState;
  key?: Key;
  expiresAt: Long;
  completedAt: Long;
  gracePeriod: Long;
  module: string;
  moduleMetadata?: Any;
}

export interface KeyEpoch {
  epoch: Long;
  chain: string;
  keyId: string;
}

function createBaseKey(): Key {
  return { id: "", snapshot: undefined, pubKeys: {}, signingThreshold: undefined, state: 0 };
}

export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.pubKeys).forEach(([key, value]) => {
      Key_PubKeysEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.signingThreshold !== undefined) {
      Threshold.encode(message.signingThreshold, writer.uint32(34).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
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
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 3:
          const entry3 = Key_PubKeysEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.pubKeys[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.signingThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 5:
          message.state = reader.int32() as any;
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
      snapshot: isSet(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : undefined,
      pubKeys: isObject(object.pubKeys)
        ? Object.entries(object.pubKeys).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
            acc[key] = bytesFromBase64(value as string);
            return acc;
          }, {})
        : {},
      signingThreshold: isSet(object.signingThreshold)
        ? Threshold.fromJSON(object.signingThreshold)
        : undefined,
      state: isSet(object.state) ? keyStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.snapshot !== undefined &&
      (obj.snapshot = message.snapshot ? Snapshot.toJSON(message.snapshot) : undefined);
    obj.pubKeys = {};
    if (message.pubKeys) {
      Object.entries(message.pubKeys).forEach(([k, v]) => {
        obj.pubKeys[k] = base64FromBytes(v);
      });
    }
    message.signingThreshold !== undefined &&
      (obj.signingThreshold = message.signingThreshold
        ? Threshold.toJSON(message.signingThreshold)
        : undefined);
    message.state !== undefined && (obj.state = keyStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Key>, I>>(object: I): Key {
    const message = createBaseKey();
    message.id = object.id ?? "";
    message.snapshot =
      object.snapshot !== undefined && object.snapshot !== null
        ? Snapshot.fromPartial(object.snapshot)
        : undefined;
    message.pubKeys = Object.entries(object.pubKeys ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    message.signingThreshold =
      object.signingThreshold !== undefined && object.signingThreshold !== null
        ? Threshold.fromPartial(object.signingThreshold)
        : undefined;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseKey_PubKeysEntry(): Key_PubKeysEntry {
  return { key: "", value: new Uint8Array() };
}

export const Key_PubKeysEntry = {
  encode(message: Key_PubKeysEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key_PubKeysEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey_PubKeysEntry();
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

  fromJSON(object: any): Key_PubKeysEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: Key_PubKeysEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Key_PubKeysEntry>, I>>(object: I): Key_PubKeysEntry {
    const message = createBaseKey_PubKeysEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseKeygenSession(): KeygenSession {
  return {
    key: undefined,
    state: 0,
    keygenThreshold: undefined,
    expiresAt: Long.ZERO,
    completedAt: Long.ZERO,
    isPubKeyReceived: {},
    gracePeriod: Long.ZERO,
  };
}

export const KeygenSession = {
  encode(message: KeygenSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.keygenThreshold !== undefined) {
      Threshold.encode(message.keygenThreshold, writer.uint32(26).fork()).ldelim();
    }
    if (!message.expiresAt.isZero()) {
      writer.uint32(32).int64(message.expiresAt);
    }
    if (!message.completedAt.isZero()) {
      writer.uint32(40).int64(message.completedAt);
    }
    Object.entries(message.isPubKeyReceived).forEach(([key, value]) => {
      KeygenSession_IsPubKeyReceivedEntry.encode(
        { key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    if (!message.gracePeriod.isZero()) {
      writer.uint32(56).int64(message.gracePeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = Key.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.keygenThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 4:
          message.expiresAt = reader.int64() as Long;
          break;
        case 5:
          message.completedAt = reader.int64() as Long;
          break;
        case 6:
          const entry6 = KeygenSession_IsPubKeyReceivedEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.isPubKeyReceived[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.gracePeriod = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenSession {
    return {
      key: isSet(object.key) ? Key.fromJSON(object.key) : undefined,
      state: isSet(object.state) ? multisigStateFromJSON(object.state) : 0,
      keygenThreshold: isSet(object.keygenThreshold) ? Threshold.fromJSON(object.keygenThreshold) : undefined,
      expiresAt: isSet(object.expiresAt) ? Long.fromValue(object.expiresAt) : Long.ZERO,
      completedAt: isSet(object.completedAt) ? Long.fromValue(object.completedAt) : Long.ZERO,
      isPubKeyReceived: isObject(object.isPubKeyReceived)
        ? Object.entries(object.isPubKeyReceived).reduce<{ [key: string]: boolean }>((acc, [key, value]) => {
            acc[key] = Boolean(value);
            return acc;
          }, {})
        : {},
      gracePeriod: isSet(object.gracePeriod) ? Long.fromValue(object.gracePeriod) : Long.ZERO,
    };
  },

  toJSON(message: KeygenSession): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key ? Key.toJSON(message.key) : undefined);
    message.state !== undefined && (obj.state = multisigStateToJSON(message.state));
    message.keygenThreshold !== undefined &&
      (obj.keygenThreshold = message.keygenThreshold ? Threshold.toJSON(message.keygenThreshold) : undefined);
    message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || Long.ZERO).toString());
    message.completedAt !== undefined && (obj.completedAt = (message.completedAt || Long.ZERO).toString());
    obj.isPubKeyReceived = {};
    if (message.isPubKeyReceived) {
      Object.entries(message.isPubKeyReceived).forEach(([k, v]) => {
        obj.isPubKeyReceived[k] = v;
      });
    }
    message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenSession>, I>>(object: I): KeygenSession {
    const message = createBaseKeygenSession();
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
    message.state = object.state ?? 0;
    message.keygenThreshold =
      object.keygenThreshold !== undefined && object.keygenThreshold !== null
        ? Threshold.fromPartial(object.keygenThreshold)
        : undefined;
    message.expiresAt =
      object.expiresAt !== undefined && object.expiresAt !== null
        ? Long.fromValue(object.expiresAt)
        : Long.ZERO;
    message.completedAt =
      object.completedAt !== undefined && object.completedAt !== null
        ? Long.fromValue(object.completedAt)
        : Long.ZERO;
    message.isPubKeyReceived = Object.entries(object.isPubKeyReceived ?? {}).reduce<{
      [key: string]: boolean;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Boolean(value);
      }
      return acc;
    }, {});
    message.gracePeriod =
      object.gracePeriod !== undefined && object.gracePeriod !== null
        ? Long.fromValue(object.gracePeriod)
        : Long.ZERO;
    return message;
  },
};

function createBaseKeygenSession_IsPubKeyReceivedEntry(): KeygenSession_IsPubKeyReceivedEntry {
  return { key: "", value: false };
}

export const KeygenSession_IsPubKeyReceivedEntry = {
  encode(message: KeygenSession_IsPubKeyReceivedEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSession_IsPubKeyReceivedEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenSession_IsPubKeyReceivedEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenSession_IsPubKeyReceivedEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false,
    };
  },

  toJSON(message: KeygenSession_IsPubKeyReceivedEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenSession_IsPubKeyReceivedEntry>, I>>(
    object: I,
  ): KeygenSession_IsPubKeyReceivedEntry {
    const message = createBaseKeygenSession_IsPubKeyReceivedEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseMultiSig(): MultiSig {
  return { keyId: "", payloadHash: new Uint8Array(), sigs: {} };
}

export const MultiSig = {
  encode(message: MultiSig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(18).bytes(message.payloadHash);
    }
    Object.entries(message.sigs).forEach(([key, value]) => {
      MultiSig_SigsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiSig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.payloadHash = reader.bytes();
          break;
        case 3:
          const entry3 = MultiSig_SigsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.sigs[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultiSig {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      sigs: isObject(object.sigs)
        ? Object.entries(object.sigs).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
            acc[key] = bytesFromBase64(value as string);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: MultiSig): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.payloadHash !== undefined &&
      (obj.payloadHash = base64FromBytes(
        message.payloadHash !== undefined ? message.payloadHash : new Uint8Array(),
      ));
    obj.sigs = {};
    if (message.sigs) {
      Object.entries(message.sigs).forEach(([k, v]) => {
        obj.sigs[k] = base64FromBytes(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultiSig>, I>>(object: I): MultiSig {
    const message = createBaseMultiSig();
    message.keyId = object.keyId ?? "";
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.sigs = Object.entries(object.sigs ?? {}).reduce<{ [key: string]: Uint8Array }>(
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

function createBaseMultiSig_SigsEntry(): MultiSig_SigsEntry {
  return { key: "", value: new Uint8Array() };
}

export const MultiSig_SigsEntry = {
  encode(message: MultiSig_SigsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiSig_SigsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiSig_SigsEntry();
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

  fromJSON(object: any): MultiSig_SigsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: MultiSig_SigsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultiSig_SigsEntry>, I>>(object: I): MultiSig_SigsEntry {
    const message = createBaseMultiSig_SigsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseSigningSession(): SigningSession {
  return {
    id: Long.UZERO,
    multiSig: undefined,
    state: 0,
    key: undefined,
    expiresAt: Long.ZERO,
    completedAt: Long.ZERO,
    gracePeriod: Long.ZERO,
    module: "",
    moduleMetadata: undefined,
  };
}

export const SigningSession = {
  encode(message: SigningSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.multiSig !== undefined) {
      MultiSig.encode(message.multiSig, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(34).fork()).ldelim();
    }
    if (!message.expiresAt.isZero()) {
      writer.uint32(40).int64(message.expiresAt);
    }
    if (!message.completedAt.isZero()) {
      writer.uint32(48).int64(message.completedAt);
    }
    if (!message.gracePeriod.isZero()) {
      writer.uint32(56).int64(message.gracePeriod);
    }
    if (message.module !== "") {
      writer.uint32(66).string(message.module);
    }
    if (message.moduleMetadata !== undefined) {
      Any.encode(message.moduleMetadata, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.multiSig = MultiSig.decode(reader, reader.uint32());
          break;
        case 3:
          message.state = reader.int32() as any;
          break;
        case 4:
          message.key = Key.decode(reader, reader.uint32());
          break;
        case 5:
          message.expiresAt = reader.int64() as Long;
          break;
        case 6:
          message.completedAt = reader.int64() as Long;
          break;
        case 7:
          message.gracePeriod = reader.int64() as Long;
          break;
        case 8:
          message.module = reader.string();
          break;
        case 9:
          message.moduleMetadata = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SigningSession {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      multiSig: isSet(object.multiSig) ? MultiSig.fromJSON(object.multiSig) : undefined,
      state: isSet(object.state) ? multisigStateFromJSON(object.state) : 0,
      key: isSet(object.key) ? Key.fromJSON(object.key) : undefined,
      expiresAt: isSet(object.expiresAt) ? Long.fromValue(object.expiresAt) : Long.ZERO,
      completedAt: isSet(object.completedAt) ? Long.fromValue(object.completedAt) : Long.ZERO,
      gracePeriod: isSet(object.gracePeriod) ? Long.fromValue(object.gracePeriod) : Long.ZERO,
      module: isSet(object.module) ? String(object.module) : "",
      moduleMetadata: isSet(object.moduleMetadata) ? Any.fromJSON(object.moduleMetadata) : undefined,
    };
  },

  toJSON(message: SigningSession): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.multiSig !== undefined &&
      (obj.multiSig = message.multiSig ? MultiSig.toJSON(message.multiSig) : undefined);
    message.state !== undefined && (obj.state = multisigStateToJSON(message.state));
    message.key !== undefined && (obj.key = message.key ? Key.toJSON(message.key) : undefined);
    message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || Long.ZERO).toString());
    message.completedAt !== undefined && (obj.completedAt = (message.completedAt || Long.ZERO).toString());
    message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || Long.ZERO).toString());
    message.module !== undefined && (obj.module = message.module);
    message.moduleMetadata !== undefined &&
      (obj.moduleMetadata = message.moduleMetadata ? Any.toJSON(message.moduleMetadata) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SigningSession>, I>>(object: I): SigningSession {
    const message = createBaseSigningSession();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.multiSig =
      object.multiSig !== undefined && object.multiSig !== null
        ? MultiSig.fromPartial(object.multiSig)
        : undefined;
    message.state = object.state ?? 0;
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
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
    message.module = object.module ?? "";
    message.moduleMetadata =
      object.moduleMetadata !== undefined && object.moduleMetadata !== null
        ? Any.fromPartial(object.moduleMetadata)
        : undefined;
    return message;
  },
};

function createBaseKeyEpoch(): KeyEpoch {
  return { epoch: Long.UZERO, chain: "", keyId: "" };
}

export const KeyEpoch = {
  encode(message: KeyEpoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epoch.isZero()) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyEpoch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64() as Long;
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyEpoch {
    return {
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: KeyEpoch): unknown {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyEpoch>, I>>(object: I): KeyEpoch {
    const message = createBaseKeyEpoch();
    message.epoch =
      object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
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
