/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Bitmap } from "../../../axelar/utils/v1beta1/bitmap";
import { Chain, CrossChainAddress, Asset } from "../../../axelar/nexus/exported/v1beta1/types";

export const protobufPackage = "axelar.nexus.v1beta1";

export interface MaintainerState {
  address: Uint8Array;
  missingVotes?: Bitmap;
  incorrectVotes?: Bitmap;
}

/** ChainState represents the state of a registered blockchain */
export interface ChainState {
  chain?: Chain;
  /** @deprecated */
  maintainers: Uint8Array[];
  activated: boolean;
  assets: Asset[];
  maintainerStates: MaintainerState[];
}

export interface LinkedAddresses {
  depositAddress?: CrossChainAddress;
  recipientAddress?: CrossChainAddress;
}

function createBaseMaintainerState(): MaintainerState {
  return { address: new Uint8Array(), missingVotes: undefined, incorrectVotes: undefined };
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
    return message;
  },
};

function createBaseChainState(): ChainState {
  return { chain: undefined, maintainers: [], activated: false, assets: [], maintainerStates: [] };
}

export const ChainState = {
  encode(message: ChainState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== undefined) {
      Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.maintainers) {
      writer.uint32(18).bytes(v!);
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
        case 2:
          message.maintainers.push(reader.bytes());
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
      maintainers: Array.isArray(object?.maintainers)
        ? object.maintainers.map((e: any) => bytesFromBase64(e))
        : [],
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
    if (message.maintainers) {
      obj.maintainers = message.maintainers.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.maintainers = [];
    }
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
    message.maintainers = object.maintainers?.map((e) => e) || [];
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
