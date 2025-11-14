/* eslint-disable */
import { Coin } from "../../base/v1beta1/coin";
import { ContinuousFund, Params } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.protocolpool.v1";
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: Coin[];
}
/**
 * QueryContinuousFundRequest is the request type for the Query/ContinuousFund
 * RPC method.
 */
export interface QueryContinuousFundRequest {
  /** recipient is the recipient address to query unclaimed budget amount for. */
  recipient: string;
}
/**
 * QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFund
 * RPC method.
 */
export interface QueryContinuousFundResponse {
  /** ContinuousFunds is the given continuous fund returned in the query. */
  continuousFund: ContinuousFund;
}
/**
 * QueryContinuousFundRequest is the request type for the Query/ContinuousFunds
 * RPC method.
 */
export interface QueryContinuousFundsRequest {}
/**
 * QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFunds
 * RPC method.
 */
export interface QueryContinuousFundsResponse {
  /** ContinuousFunds defines all continuous funds in state. */
  continuousFunds: ContinuousFund[];
}
/** QueryParamsRequest is the response type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params;
}
function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return {};
}
export const QueryCommunityPoolRequest = {
  typeUrl: "/cosmos.protocolpool.v1.QueryCommunityPoolRequest",
  encode(_: QueryCommunityPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();
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
  fromJSON(_: any): QueryCommunityPoolRequest {
    const obj = createBaseQueryCommunityPoolRequest();
    return obj;
  },
  toJSON(_: QueryCommunityPoolRequest): JsonSafe<QueryCommunityPoolRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCommunityPoolRequest>, I>>(_: I): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
};
function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return {
    pool: [],
  };
}
export const QueryCommunityPoolResponse = {
  typeUrl: "/cosmos.protocolpool.v1.QueryCommunityPoolResponse",
  encode(message: QueryCommunityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCommunityPoolResponse {
    const obj = createBaseQueryCommunityPoolResponse();
    if (Array.isArray(object?.pool)) obj.pool = object.pool.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryCommunityPoolResponse): JsonSafe<QueryCommunityPoolResponse> {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.pool = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCommunityPoolResponse>, I>>(
    object: I,
  ): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryContinuousFundRequest(): QueryContinuousFundRequest {
  return {
    recipient: "",
  };
}
export const QueryContinuousFundRequest = {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundRequest",
  encode(message: QueryContinuousFundRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContinuousFundRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContinuousFundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContinuousFundRequest {
    const obj = createBaseQueryContinuousFundRequest();
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    return obj;
  },
  toJSON(message: QueryContinuousFundRequest): JsonSafe<QueryContinuousFundRequest> {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContinuousFundRequest>, I>>(
    object: I,
  ): QueryContinuousFundRequest {
    const message = createBaseQueryContinuousFundRequest();
    message.recipient = object.recipient ?? "";
    return message;
  },
};
function createBaseQueryContinuousFundResponse(): QueryContinuousFundResponse {
  return {
    continuousFund: ContinuousFund.fromPartial({}),
  };
}
export const QueryContinuousFundResponse = {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundResponse",
  encode(message: QueryContinuousFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.continuousFund !== undefined) {
      ContinuousFund.encode(message.continuousFund, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContinuousFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContinuousFundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.continuousFund = ContinuousFund.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContinuousFundResponse {
    const obj = createBaseQueryContinuousFundResponse();
    if (isSet(object.continuousFund)) obj.continuousFund = ContinuousFund.fromJSON(object.continuousFund);
    return obj;
  },
  toJSON(message: QueryContinuousFundResponse): JsonSafe<QueryContinuousFundResponse> {
    const obj: any = {};
    message.continuousFund !== undefined &&
      (obj.continuousFund = message.continuousFund
        ? ContinuousFund.toJSON(message.continuousFund)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContinuousFundResponse>, I>>(
    object: I,
  ): QueryContinuousFundResponse {
    const message = createBaseQueryContinuousFundResponse();
    if (object.continuousFund !== undefined && object.continuousFund !== null) {
      message.continuousFund = ContinuousFund.fromPartial(object.continuousFund);
    }
    return message;
  },
};
function createBaseQueryContinuousFundsRequest(): QueryContinuousFundsRequest {
  return {};
}
export const QueryContinuousFundsRequest = {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundsRequest",
  encode(_: QueryContinuousFundsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContinuousFundsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContinuousFundsRequest();
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
  fromJSON(_: any): QueryContinuousFundsRequest {
    const obj = createBaseQueryContinuousFundsRequest();
    return obj;
  },
  toJSON(_: QueryContinuousFundsRequest): JsonSafe<QueryContinuousFundsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContinuousFundsRequest>, I>>(
    _: I,
  ): QueryContinuousFundsRequest {
    const message = createBaseQueryContinuousFundsRequest();
    return message;
  },
};
function createBaseQueryContinuousFundsResponse(): QueryContinuousFundsResponse {
  return {
    continuousFunds: [],
  };
}
export const QueryContinuousFundsResponse = {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundsResponse",
  encode(message: QueryContinuousFundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.continuousFunds) {
      ContinuousFund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContinuousFundsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContinuousFundsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.continuousFunds.push(ContinuousFund.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContinuousFundsResponse {
    const obj = createBaseQueryContinuousFundsResponse();
    if (Array.isArray(object?.continuousFunds))
      obj.continuousFunds = object.continuousFunds.map((e: any) => ContinuousFund.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryContinuousFundsResponse): JsonSafe<QueryContinuousFundsResponse> {
    const obj: any = {};
    if (message.continuousFunds) {
      obj.continuousFunds = message.continuousFunds.map((e) => (e ? ContinuousFund.toJSON(e) : undefined));
    } else {
      obj.continuousFunds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContinuousFundsResponse>, I>>(
    object: I,
  ): QueryContinuousFundsResponse {
    const message = createBaseQueryContinuousFundsResponse();
    message.continuousFunds = object.continuousFunds?.map((e) => ContinuousFund.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.protocolpool.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.protocolpool.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
/** Query defines the gRPC querier service for community pool module. */
export interface Query {
  /** CommunityPool queries the community pool coins. */
  CommunityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
  /** ContinuousFund queries a continuous fund by the recipient is is associated with. */
  ContinuousFund(request: QueryContinuousFundRequest): Promise<QueryContinuousFundResponse>;
  /** ContinuousFunds queries all continuous funds in the store. */
  ContinuousFunds(request?: QueryContinuousFundsRequest): Promise<QueryContinuousFundsResponse>;
  /** Params returns the total set of x/protocolpool parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CommunityPool = this.CommunityPool.bind(this);
    this.ContinuousFund = this.ContinuousFund.bind(this);
    this.ContinuousFunds = this.ContinuousFunds.bind(this);
    this.Params = this.Params.bind(this);
  }
  CommunityPool(request: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "CommunityPool", data);
    return promise.then((data) => QueryCommunityPoolResponse.decode(new BinaryReader(data)));
  }
  ContinuousFund(request: QueryContinuousFundRequest): Promise<QueryContinuousFundResponse> {
    const data = QueryContinuousFundRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "ContinuousFund", data);
    return promise.then((data) => QueryContinuousFundResponse.decode(new BinaryReader(data)));
  }
  ContinuousFunds(request: QueryContinuousFundsRequest = {}): Promise<QueryContinuousFundsResponse> {
    const data = QueryContinuousFundsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "ContinuousFunds", data);
    return promise.then((data) => QueryContinuousFundsResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
