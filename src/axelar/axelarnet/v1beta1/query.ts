/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/axelarnet/v1beta1/params";

export const protobufPackage = "axelar.axelarnet.v1beta1";

export interface PendingIBCTransferCountRequest {}

export interface PendingIBCTransferCountResponse {
  transfersByChain: { [key: string]: number };
}

export interface PendingIBCTransferCountResponse_TransfersByChainEntry {
  key: string;
  value: number;
}

/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {}

export interface ParamsResponse {
  params?: Params;
}

/**
 * IBCPathRequest represents a message that queries the IBC path registered for
 * a given chain
 */
export interface IBCPathRequest {
  chain: string;
}

export interface IBCPathResponse {
  ibcPath: string;
}

/**
 * ChainByIBCPathRequest represents a message that queries the chain that an IBC
 * path is registered to
 */
export interface ChainByIBCPathRequest {
  ibcPath: string;
}

export interface ChainByIBCPathResponse {
  chain: string;
}

function createBasePendingIBCTransferCountRequest(): PendingIBCTransferCountRequest {
  return {};
}

export const PendingIBCTransferCountRequest = {
  encode(_: PendingIBCTransferCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingIBCTransferCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingIBCTransferCountRequest();
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

  fromJSON(_: any): PendingIBCTransferCountRequest {
    return {};
  },

  toJSON(_: PendingIBCTransferCountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingIBCTransferCountRequest>, I>>(
    _: I,
  ): PendingIBCTransferCountRequest {
    const message = createBasePendingIBCTransferCountRequest();
    return message;
  },
};

function createBasePendingIBCTransferCountResponse(): PendingIBCTransferCountResponse {
  return { transfersByChain: {} };
}

export const PendingIBCTransferCountResponse = {
  encode(message: PendingIBCTransferCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.transfersByChain).forEach(([key, value]) => {
      PendingIBCTransferCountResponse_TransfersByChainEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingIBCTransferCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingIBCTransferCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = PendingIBCTransferCountResponse_TransfersByChainEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.transfersByChain[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingIBCTransferCountResponse {
    return {
      transfersByChain: isObject(object.transfersByChain)
        ? Object.entries(object.transfersByChain).reduce<{ [key: string]: number }>((acc, [key, value]) => {
            acc[key] = Number(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: PendingIBCTransferCountResponse): unknown {
    const obj: any = {};
    obj.transfersByChain = {};
    if (message.transfersByChain) {
      Object.entries(message.transfersByChain).forEach(([k, v]) => {
        obj.transfersByChain[k] = Math.round(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingIBCTransferCountResponse>, I>>(
    object: I,
  ): PendingIBCTransferCountResponse {
    const message = createBasePendingIBCTransferCountResponse();
    message.transfersByChain = Object.entries(object.transfersByChain ?? {}).reduce<{
      [key: string]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBasePendingIBCTransferCountResponse_TransfersByChainEntry(): PendingIBCTransferCountResponse_TransfersByChainEntry {
  return { key: "", value: 0 };
}

export const PendingIBCTransferCountResponse_TransfersByChainEntry = {
  encode(
    message: PendingIBCTransferCountResponse_TransfersByChainEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PendingIBCTransferCountResponse_TransfersByChainEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingIBCTransferCountResponse_TransfersByChainEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingIBCTransferCountResponse_TransfersByChainEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: PendingIBCTransferCountResponse_TransfersByChainEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingIBCTransferCountResponse_TransfersByChainEntry>, I>>(
    object: I,
  ): PendingIBCTransferCountResponse_TransfersByChainEntry {
    const message = createBasePendingIBCTransferCountResponse_TransfersByChainEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
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

function createBaseIBCPathRequest(): IBCPathRequest {
  return { chain: "" };
}

export const IBCPathRequest = {
  encode(message: IBCPathRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCPathRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCPathRequest();
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

  fromJSON(object: any): IBCPathRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: IBCPathRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IBCPathRequest>, I>>(object: I): IBCPathRequest {
    const message = createBaseIBCPathRequest();
    message.chain = object.chain ?? "";
    return message;
  },
};

function createBaseIBCPathResponse(): IBCPathResponse {
  return { ibcPath: "" };
}

export const IBCPathResponse = {
  encode(message: IBCPathResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ibcPath !== "") {
      writer.uint32(10).string(message.ibcPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCPathResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCPathResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ibcPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IBCPathResponse {
    return {
      ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : "",
    };
  },

  toJSON(message: IBCPathResponse): unknown {
    const obj: any = {};
    message.ibcPath !== undefined && (obj.ibcPath = message.ibcPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IBCPathResponse>, I>>(object: I): IBCPathResponse {
    const message = createBaseIBCPathResponse();
    message.ibcPath = object.ibcPath ?? "";
    return message;
  },
};

function createBaseChainByIBCPathRequest(): ChainByIBCPathRequest {
  return { ibcPath: "" };
}

export const ChainByIBCPathRequest = {
  encode(message: ChainByIBCPathRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ibcPath !== "") {
      writer.uint32(10).string(message.ibcPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainByIBCPathRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainByIBCPathRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ibcPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChainByIBCPathRequest {
    return {
      ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : "",
    };
  },

  toJSON(message: ChainByIBCPathRequest): unknown {
    const obj: any = {};
    message.ibcPath !== undefined && (obj.ibcPath = message.ibcPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChainByIBCPathRequest>, I>>(object: I): ChainByIBCPathRequest {
    const message = createBaseChainByIBCPathRequest();
    message.ibcPath = object.ibcPath ?? "";
    return message;
  },
};

function createBaseChainByIBCPathResponse(): ChainByIBCPathResponse {
  return { chain: "" };
}

export const ChainByIBCPathResponse = {
  encode(message: ChainByIBCPathResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainByIBCPathResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainByIBCPathResponse();
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

  fromJSON(object: any): ChainByIBCPathResponse {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: ChainByIBCPathResponse): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChainByIBCPathResponse>, I>>(object: I): ChainByIBCPathResponse {
    const message = createBaseChainByIBCPathResponse();
    message.chain = object.chain ?? "";
    return message;
  },
};

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
