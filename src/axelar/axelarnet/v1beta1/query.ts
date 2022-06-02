/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "axelar.axelarnet.v1beta1";

export interface PendingIBCTransferCountRequest {}

export interface PendingIBCTransferCountResponse {
  transfersByChain: { [key: string]: number };
}

export interface PendingIBCTransferCountResponse_TransfersByChainEntry {
  key: string;
  value: number;
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
