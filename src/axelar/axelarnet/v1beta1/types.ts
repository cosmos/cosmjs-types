/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "axelar.axelarnet.v1beta1";

export interface IBCTransfer {
  sender: Uint8Array;
  receiver: string;
  token?: Coin;
  portId: string;
  channelId: string;
  /** @deprecated */
  sequence: Long;
  id: Long;
  status: IBCTransfer_Status;
}

export enum IBCTransfer_Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_PENDING = 1,
  STATUS_COMPLETED = 2,
  STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}

export function iBCTransfer_StatusFromJSON(object: any): IBCTransfer_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return IBCTransfer_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_PENDING":
      return IBCTransfer_Status.STATUS_PENDING;
    case 2:
    case "STATUS_COMPLETED":
      return IBCTransfer_Status.STATUS_COMPLETED;
    case 3:
    case "STATUS_FAILED":
      return IBCTransfer_Status.STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IBCTransfer_Status.UNRECOGNIZED;
  }
}

export function iBCTransfer_StatusToJSON(object: IBCTransfer_Status): string {
  switch (object) {
    case IBCTransfer_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case IBCTransfer_Status.STATUS_PENDING:
      return "STATUS_PENDING";
    case IBCTransfer_Status.STATUS_COMPLETED:
      return "STATUS_COMPLETED";
    case IBCTransfer_Status.STATUS_FAILED:
      return "STATUS_FAILED";
    case IBCTransfer_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CosmosChain {
  name: string;
  ibcPath: string;
  /** @deprecated */
  assets: Asset[];
  addrPrefix: string;
}

/** @deprecated */
export interface Asset {
  denom: string;
  minAmount: Uint8Array;
}

export interface Fee {
  amount?: Coin;
  recipient: Uint8Array;
  refundRecipient: Uint8Array;
}

function createBaseIBCTransfer(): IBCTransfer {
  return {
    sender: new Uint8Array(),
    receiver: "",
    token: undefined,
    portId: "",
    channelId: "",
    sequence: Long.UZERO,
    id: Long.UZERO,
    status: 0,
  };
}

export const IBCTransfer = {
  encode(message: IBCTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(34).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(42).string(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(48).uint64(message.sequence);
    }
    if (!message.id.isZero()) {
      writer.uint32(56).uint64(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.portId = reader.string();
          break;
        case 5:
          message.channelId = reader.string();
          break;
        case 6:
          message.sequence = reader.uint64() as Long;
          break;
        case 7:
          message.id = reader.uint64() as Long;
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IBCTransfer {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      status: isSet(object.status) ? iBCTransfer_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: IBCTransfer): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.status !== undefined && (obj.status = iBCTransfer_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IBCTransfer>, I>>(object: I): IBCTransfer {
    const message = createBaseIBCTransfer();
    message.sender = object.sender ?? new Uint8Array();
    message.receiver = object.receiver ?? "";
    message.token =
      object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseCosmosChain(): CosmosChain {
  return { name: "", ibcPath: "", assets: [], addrPrefix: "" };
}

export const CosmosChain = {
  encode(message: CosmosChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.ibcPath !== "") {
      writer.uint32(18).string(message.ibcPath);
    }
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.addrPrefix !== "") {
      writer.uint32(34).string(message.addrPrefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CosmosChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.ibcPath = reader.string();
          break;
        case 3:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.addrPrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CosmosChain {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : "",
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [],
      addrPrefix: isSet(object.addrPrefix) ? String(object.addrPrefix) : "",
    };
  },

  toJSON(message: CosmosChain): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.ibcPath !== undefined && (obj.ibcPath = message.ibcPath);
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    message.addrPrefix !== undefined && (obj.addrPrefix = message.addrPrefix);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CosmosChain>, I>>(object: I): CosmosChain {
    const message = createBaseCosmosChain();
    message.name = object.name ?? "";
    message.ibcPath = object.ibcPath ?? "";
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    message.addrPrefix = object.addrPrefix ?? "";
    return message;
  },
};

function createBaseAsset(): Asset {
  return { denom: "", minAmount: new Uint8Array() };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.minAmount.length !== 0) {
      writer.uint32(18).bytes(message.minAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.minAmount = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      minAmount: isSet(object.minAmount) ? bytesFromBase64(object.minAmount) : new Uint8Array(),
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.minAmount !== undefined &&
      (obj.minAmount = base64FromBytes(
        message.minAmount !== undefined ? message.minAmount : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Asset>, I>>(object: I): Asset {
    const message = createBaseAsset();
    message.denom = object.denom ?? "";
    message.minAmount = object.minAmount ?? new Uint8Array();
    return message;
  },
};

function createBaseFee(): Fee {
  return { amount: undefined, recipient: new Uint8Array(), refundRecipient: new Uint8Array() };
}

export const Fee = {
  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.recipient.length !== 0) {
      writer.uint32(18).bytes(message.recipient);
    }
    if (message.refundRecipient.length !== 0) {
      writer.uint32(26).bytes(message.refundRecipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.recipient = reader.bytes();
          break;
        case 3:
          message.refundRecipient = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fee {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(),
      refundRecipient: isSet(object.refundRecipient)
        ? bytesFromBase64(object.refundRecipient)
        : new Uint8Array(),
    };
  },

  toJSON(message: Fee): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.recipient !== undefined &&
      (obj.recipient = base64FromBytes(
        message.recipient !== undefined ? message.recipient : new Uint8Array(),
      ));
    message.refundRecipient !== undefined &&
      (obj.refundRecipient = base64FromBytes(
        message.refundRecipient !== undefined ? message.refundRecipient : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fee>, I>>(object: I): Fee {
    const message = createBaseFee();
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.recipient = object.recipient ?? new Uint8Array();
    message.refundRecipient = object.refundRecipient ?? new Uint8Array();
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
