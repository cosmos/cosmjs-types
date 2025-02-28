/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Bitmap } from "../../../axelar/utils/v1beta1/bitmap";
import {
  Chain,
  CrossChainAddress,
  TransferDirection,
  Asset,
  transferDirectionFromJSON,
  transferDirectionToJSON,
} from "../../../axelar/nexus/exported/v1beta1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "axelar.nexus.v1beta1";

export interface MaintainerState {
  address: Uint8Array;
  missingVotes?: Bitmap;
  incorrectVotes?: Bitmap;
  chain: string;
}

/** ChainState represents the state of a registered blockchain */
export interface ChainState {
  chain?: Chain;
  activated: boolean;
  assets: Asset[];
  /** @deprecated */
  maintainerStates: MaintainerState[];
}

export interface LinkedAddresses {
  depositAddress?: CrossChainAddress;
  recipientAddress?: CrossChainAddress;
}

export interface RateLimit {
  chain: string;
  limit?: Coin;
  window?: Duration;
}

export interface TransferEpoch {
  chain: string;
  amount?: Coin;
  epoch: Long;
  /** indicates whether the rate tracking is for transfers going */
  direction: TransferDirection;
}

function createBaseMaintainerState(): MaintainerState {
  return { address: new Uint8Array(), missingVotes: undefined, incorrectVotes: undefined, chain: "" };
}

export const MaintainerState = {
  encode(message: MaintainerState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.missingVotes !== undefined) {
      Bitmap.encode(message.missingVotes, writer.uint32(18).fork()).ldelim();
    }
    if (message.incorrectVotes !== undefined) {
      Bitmap.encode(message.incorrectVotes, writer.uint32(26).fork()).ldelim();
    }
    if (message.chain !== "") {
      writer.uint32(34).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaintainerState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaintainerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.missingVotes = Bitmap.decode(reader, reader.uint32());
          break;
        case 3:
          message.incorrectVotes = Bitmap.decode(reader, reader.uint32());
          break;
        case 4:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MaintainerState {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      missingVotes: isSet(object.missingVotes) ? Bitmap.fromJSON(object.missingVotes) : undefined,
      incorrectVotes: isSet(object.incorrectVotes) ? Bitmap.fromJSON(object.incorrectVotes) : undefined,
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: MaintainerState): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.missingVotes !== undefined &&
      (obj.missingVotes = message.missingVotes ? Bitmap.toJSON(message.missingVotes) : undefined);
    message.incorrectVotes !== undefined &&
      (obj.incorrectVotes = message.incorrectVotes ? Bitmap.toJSON(message.incorrectVotes) : undefined);
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MaintainerState>, I>>(object: I): MaintainerState {
    const message = createBaseMaintainerState();
    message.address = object.address ?? new Uint8Array();
    message.missingVotes =
      object.missingVotes !== undefined && object.missingVotes !== null
        ? Bitmap.fromPartial(object.missingVotes)
        : undefined;
    message.incorrectVotes =
      object.incorrectVotes !== undefined && object.incorrectVotes !== null
        ? Bitmap.fromPartial(object.incorrectVotes)
        : undefined;
    message.chain = object.chain ?? "";
    return message;
  },
};

function createBaseChainState(): ChainState {
  return { chain: undefined, activated: false, assets: [], maintainerStates: [] };
}

export const ChainState = {
  encode(message: ChainState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== undefined) {
      Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    if (message.activated === true) {
      writer.uint32(24).bool(message.activated);
    }
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.maintainerStates) {
      MaintainerState.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = Chain.decode(reader, reader.uint32());
          break;
        case 3:
          message.activated = reader.bool();
          break;
        case 5:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        case 6:
          message.maintainerStates.push(MaintainerState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChainState {
    return {
      chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined,
      activated: isSet(object.activated) ? Boolean(object.activated) : false,
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [],
      maintainerStates: Array.isArray(object?.maintainerStates)
        ? object.maintainerStates.map((e: any) => MaintainerState.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ChainState): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain ? Chain.toJSON(message.chain) : undefined);
    message.activated !== undefined && (obj.activated = message.activated);
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    if (message.maintainerStates) {
      obj.maintainerStates = message.maintainerStates.map((e) => (e ? MaintainerState.toJSON(e) : undefined));
    } else {
      obj.maintainerStates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChainState>, I>>(object: I): ChainState {
    const message = createBaseChainState();
    message.chain =
      object.chain !== undefined && object.chain !== null ? Chain.fromPartial(object.chain) : undefined;
    message.activated = object.activated ?? false;
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    message.maintainerStates = object.maintainerStates?.map((e) => MaintainerState.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLinkedAddresses(): LinkedAddresses {
  return { depositAddress: undefined, recipientAddress: undefined };
}

export const LinkedAddresses = {
  encode(message: LinkedAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddress !== undefined) {
      CrossChainAddress.encode(message.depositAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.recipientAddress !== undefined) {
      CrossChainAddress.encode(message.recipientAddress, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkedAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkedAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositAddress = CrossChainAddress.decode(reader, reader.uint32());
          break;
        case 2:
          message.recipientAddress = CrossChainAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LinkedAddresses {
    return {
      depositAddress: isSet(object.depositAddress)
        ? CrossChainAddress.fromJSON(object.depositAddress)
        : undefined,
      recipientAddress: isSet(object.recipientAddress)
        ? CrossChainAddress.fromJSON(object.recipientAddress)
        : undefined,
    };
  },

  toJSON(message: LinkedAddresses): unknown {
    const obj: any = {};
    message.depositAddress !== undefined &&
      (obj.depositAddress = message.depositAddress
        ? CrossChainAddress.toJSON(message.depositAddress)
        : undefined);
    message.recipientAddress !== undefined &&
      (obj.recipientAddress = message.recipientAddress
        ? CrossChainAddress.toJSON(message.recipientAddress)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LinkedAddresses>, I>>(object: I): LinkedAddresses {
    const message = createBaseLinkedAddresses();
    message.depositAddress =
      object.depositAddress !== undefined && object.depositAddress !== null
        ? CrossChainAddress.fromPartial(object.depositAddress)
        : undefined;
    message.recipientAddress =
      object.recipientAddress !== undefined && object.recipientAddress !== null
        ? CrossChainAddress.fromPartial(object.recipientAddress)
        : undefined;
    return message;
  },
};

function createBaseRateLimit(): RateLimit {
  return { chain: "", limit: undefined, window: undefined };
}

export const RateLimit = {
  encode(message: RateLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.limit !== undefined) {
      Coin.encode(message.limit, writer.uint32(18).fork()).ldelim();
    }
    if (message.window !== undefined) {
      Duration.encode(message.window, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RateLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.limit = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.window = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RateLimit {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      limit: isSet(object.limit) ? Coin.fromJSON(object.limit) : undefined,
      window: isSet(object.window) ? Duration.fromJSON(object.window) : undefined,
    };
  },

  toJSON(message: RateLimit): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.limit !== undefined && (obj.limit = message.limit ? Coin.toJSON(message.limit) : undefined);
    message.window !== undefined &&
      (obj.window = message.window ? Duration.toJSON(message.window) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RateLimit>, I>>(object: I): RateLimit {
    const message = createBaseRateLimit();
    message.chain = object.chain ?? "";
    message.limit =
      object.limit !== undefined && object.limit !== null ? Coin.fromPartial(object.limit) : undefined;
    message.window =
      object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
    return message;
  },
};

function createBaseTransferEpoch(): TransferEpoch {
  return { chain: "", amount: undefined, epoch: Long.UZERO, direction: 0 };
}

export const TransferEpoch = {
  encode(message: TransferEpoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (!message.epoch.isZero()) {
      writer.uint32(24).uint64(message.epoch);
    }
    if (message.direction !== 0) {
      writer.uint32(32).int32(message.direction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferEpoch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.epoch = reader.uint64() as Long;
          break;
        case 4:
          message.direction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferEpoch {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      direction: isSet(object.direction) ? transferDirectionFromJSON(object.direction) : 0,
    };
  },

  toJSON(message: TransferEpoch): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.direction !== undefined && (obj.direction = transferDirectionToJSON(message.direction));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransferEpoch>, I>>(object: I): TransferEpoch {
    const message = createBaseTransferEpoch();
    message.chain = object.chain ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.epoch =
      object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.direction = object.direction ?? 0;
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
