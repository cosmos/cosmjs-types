/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.counter.v1";
/** QueryGetCountRequest defines the request type for querying x/mock count. */
export interface QueryGetCountRequest {}
/** QueryGetCountResponse defines the response type for querying x/mock count. */
export interface QueryGetCountResponse {
  totalCount: bigint;
}
function createBaseQueryGetCountRequest(): QueryGetCountRequest {
  return {};
}
export const QueryGetCountRequest = {
  typeUrl: "/cosmos.counter.v1.QueryGetCountRequest",
  encode(_: QueryGetCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCountRequest();
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
  fromJSON(_: any): QueryGetCountRequest {
    const obj = createBaseQueryGetCountRequest();
    return obj;
  },
  toJSON(_: QueryGetCountRequest): JsonSafe<QueryGetCountRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetCountRequest>, I>>(_: I): QueryGetCountRequest {
    const message = createBaseQueryGetCountRequest();
    return message;
  },
};
function createBaseQueryGetCountResponse(): QueryGetCountResponse {
  return {
    totalCount: BigInt(0),
  };
}
export const QueryGetCountResponse = {
  typeUrl: "/cosmos.counter.v1.QueryGetCountResponse",
  encode(message: QueryGetCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(8).int64(message.totalCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetCountResponse {
    const obj = createBaseQueryGetCountResponse();
    if (isSet(object.totalCount)) obj.totalCount = BigInt(object.totalCount.toString());
    return obj;
  },
  toJSON(message: QueryGetCountResponse): JsonSafe<QueryGetCountResponse> {
    const obj: any = {};
    message.totalCount !== undefined && (obj.totalCount = (message.totalCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetCountResponse>, I>>(object: I): QueryGetCountResponse {
    const message = createBaseQueryGetCountResponse();
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = BigInt(object.totalCount.toString());
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** GetCount queries the parameters of x/Counter module. */
  GetCount(request?: QueryGetCountRequest): Promise<QueryGetCountResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetCount = this.GetCount.bind(this);
  }
  GetCount(request: QueryGetCountRequest = {}): Promise<QueryGetCountResponse> {
    const data = QueryGetCountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.counter.v1.Query", "GetCount", data);
    return promise.then((data) => QueryGetCountResponse.decode(new BinaryReader(data)));
  }
}
