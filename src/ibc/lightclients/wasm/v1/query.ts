/* eslint-disable */
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../../../helpers";
export const protobufPackage = "ibc.lightclients.wasm.v1";
/** QueryChecksumsRequest is the request type for the Query/Checksums RPC method. */
export interface QueryChecksumsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryChecksumsResponse is the response type for the Query/Checksums RPC method. */
export interface QueryChecksumsResponse {
  /** checksums is a list of the hex encoded checksums of all wasm codes stored. */
  checksums: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
  /** checksum is a hex encoded string of the code stored. */
  checksum: string;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method. */
export interface QueryCodeResponse {
  data: Uint8Array;
}
function createBaseQueryChecksumsRequest(): QueryChecksumsRequest {
  return {
    pagination: undefined,
  };
}
export const QueryChecksumsRequest = {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryChecksumsRequest",
  encode(message: QueryChecksumsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChecksumsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChecksumsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChecksumsRequest {
    const obj = createBaseQueryChecksumsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryChecksumsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryChecksumsRequest>, I>>(object: I): QueryChecksumsRequest {
    const message = createBaseQueryChecksumsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryChecksumsResponse(): QueryChecksumsResponse {
  return {
    checksums: [],
    pagination: undefined,
  };
}
export const QueryChecksumsResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryChecksumsResponse",
  encode(message: QueryChecksumsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.checksums) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChecksumsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChecksumsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksums.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChecksumsResponse {
    const obj = createBaseQueryChecksumsResponse();
    if (Array.isArray(object?.checksums)) obj.checksums = object.checksums.map((e: any) => String(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryChecksumsResponse): unknown {
    const obj: any = {};
    if (message.checksums) {
      obj.checksums = message.checksums.map((e) => e);
    } else {
      obj.checksums = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryChecksumsResponse>, I>>(object: I): QueryChecksumsResponse {
    const message = createBaseQueryChecksumsResponse();
    message.checksums = object.checksums?.map((e) => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    checksum: "",
  };
}
export const QueryCodeRequest = {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryCodeRequest",
  encode(message: QueryCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.checksum !== "") {
      writer.uint32(10).string(message.checksum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeRequest {
    const obj = createBaseQueryCodeRequest();
    if (isSet(object.checksum)) obj.checksum = String(object.checksum);
    return obj;
  },
  toJSON(message: QueryCodeRequest): unknown {
    const obj: any = {};
    message.checksum !== undefined && (obj.checksum = message.checksum);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCodeRequest>, I>>(object: I): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.checksum = object.checksum ?? "";
    return message;
  },
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    data: new Uint8Array(),
  };
}
export const QueryCodeResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryCodeResponse",
  encode(message: QueryCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeResponse {
    const obj = createBaseQueryCodeResponse();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: QueryCodeResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCodeResponse>, I>>(object: I): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
/** Query service for wasm module */
export interface Query {
  /** Get all Wasm checksums */
  Checksums(request?: QueryChecksumsRequest): Promise<QueryChecksumsResponse>;
  /** Get Wasm code for given checksum */
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Checksums = this.Checksums.bind(this);
    this.Code = this.Code.bind(this);
  }
  Checksums(
    request: QueryChecksumsRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryChecksumsResponse> {
    const data = QueryChecksumsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Query", "Checksums", data);
    return promise.then((data) => QueryChecksumsResponse.decode(new BinaryReader(data)));
  }
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Query", "Code", data);
    return promise.then((data) => QueryCodeResponse.decode(new BinaryReader(data)));
  }
}
