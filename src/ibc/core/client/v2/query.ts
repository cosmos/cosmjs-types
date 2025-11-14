/* eslint-disable */
import { CounterpartyInfo } from "./counterparty";
import { Config } from "./config";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.core.client.v2";
/**
 * QueryCounterpartyInfoRequest is the request type for the Query/CounterpartyInfo RPC
 * method
 */
export interface QueryCounterpartyInfoRequest {
  /** client state unique identifier */
  clientId: string;
}
/**
 * QueryCounterpartyInfoResponse is the response type for the
 * Query/CounterpartyInfo RPC method.
 */
export interface QueryCounterpartyInfoResponse {
  counterpartyInfo?: CounterpartyInfo;
}
/** QueryConfigRequest is the request type for the Query/Config RPC method */
export interface QueryConfigRequest {
  /** client state unique identifier */
  clientId: string;
}
/** QueryConfigResponse is the response type for the Query/Config RPC method */
export interface QueryConfigResponse {
  config?: Config;
}
function createBaseQueryCounterpartyInfoRequest(): QueryCounterpartyInfoRequest {
  return {
    clientId: "",
  };
}
export const QueryCounterpartyInfoRequest = {
  typeUrl: "/ibc.core.client.v2.QueryCounterpartyInfoRequest",
  encode(message: QueryCounterpartyInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCounterpartyInfoRequest {
    const obj = createBaseQueryCounterpartyInfoRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    return obj;
  },
  toJSON(message: QueryCounterpartyInfoRequest): JsonSafe<QueryCounterpartyInfoRequest> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCounterpartyInfoRequest>, I>>(
    object: I,
  ): QueryCounterpartyInfoRequest {
    const message = createBaseQueryCounterpartyInfoRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
};
function createBaseQueryCounterpartyInfoResponse(): QueryCounterpartyInfoResponse {
  return {
    counterpartyInfo: undefined,
  };
}
export const QueryCounterpartyInfoResponse = {
  typeUrl: "/ibc.core.client.v2.QueryCounterpartyInfoResponse",
  encode(message: QueryCounterpartyInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.counterpartyInfo !== undefined) {
      CounterpartyInfo.encode(message.counterpartyInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyInfo = CounterpartyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCounterpartyInfoResponse {
    const obj = createBaseQueryCounterpartyInfoResponse();
    if (isSet(object.counterpartyInfo))
      obj.counterpartyInfo = CounterpartyInfo.fromJSON(object.counterpartyInfo);
    return obj;
  },
  toJSON(message: QueryCounterpartyInfoResponse): JsonSafe<QueryCounterpartyInfoResponse> {
    const obj: any = {};
    message.counterpartyInfo !== undefined &&
      (obj.counterpartyInfo = message.counterpartyInfo
        ? CounterpartyInfo.toJSON(message.counterpartyInfo)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCounterpartyInfoResponse>, I>>(
    object: I,
  ): QueryCounterpartyInfoResponse {
    const message = createBaseQueryCounterpartyInfoResponse();
    if (object.counterpartyInfo !== undefined && object.counterpartyInfo !== null) {
      message.counterpartyInfo = CounterpartyInfo.fromPartial(object.counterpartyInfo);
    }
    return message;
  },
};
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {
    clientId: "",
  };
}
export const QueryConfigRequest = {
  typeUrl: "/ibc.core.client.v2.QueryConfigRequest",
  encode(message: QueryConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConfigRequest {
    const obj = createBaseQueryConfigRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    return obj;
  },
  toJSON(message: QueryConfigRequest): JsonSafe<QueryConfigRequest> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConfigRequest>, I>>(object: I): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
};
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: undefined,
  };
}
export const QueryConfigResponse = {
  typeUrl: "/ibc.core.client.v2.QueryConfigResponse",
  encode(message: QueryConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConfigResponse {
    const obj = createBaseQueryConfigResponse();
    if (isSet(object.config)) obj.config = Config.fromJSON(object.config);
    return obj;
  },
  toJSON(message: QueryConfigResponse): JsonSafe<QueryConfigResponse> {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConfigResponse>, I>>(object: I): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromPartial(object.config);
    }
    return message;
  },
};
/** Query provides defines the gRPC querier service */
export interface Query {
  /** CounterpartyInfo queries an IBC light counter party info. */
  CounterpartyInfo(request: QueryCounterpartyInfoRequest): Promise<QueryCounterpartyInfoResponse>;
  /** Config queries the IBC client v2 configuration for a given client. */
  Config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CounterpartyInfo = this.CounterpartyInfo.bind(this);
    this.Config = this.Config.bind(this);
  }
  CounterpartyInfo(request: QueryCounterpartyInfoRequest): Promise<QueryCounterpartyInfoResponse> {
    const data = QueryCounterpartyInfoRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Query", "CounterpartyInfo", data);
    return promise.then((data) => QueryCounterpartyInfoResponse.decode(new BinaryReader(data)));
  }
  Config(request: QueryConfigRequest): Promise<QueryConfigResponse> {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Query", "Config", data);
    return promise.then((data) => QueryConfigResponse.decode(new BinaryReader(data)));
  }
}
