/* eslint-disable */
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Permissions, GenesisAccountPermissions } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.circuit.v1";
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  address: string;
}
/** AccountResponse is the response type for the Query/Account RPC method. */
export interface AccountResponse {
  permission?: Permissions;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** AccountsResponse is the response type for the Query/Accounts RPC method. */
export interface AccountsResponse {
  accounts: GenesisAccountPermissions[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryDisableListRequest is the request type for the Query/DisabledList RPC method. */
export interface QueryDisabledListRequest {}
/** DisabledListResponse is the response type for the Query/DisabledList RPC method. */
export interface DisabledListResponse {
  disabledList: string[];
}
function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: "",
  };
}
export const QueryAccountRequest = {
  typeUrl: "/cosmos.circuit.v1.QueryAccountRequest",
  encode(message: QueryAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountRequest {
    const obj = createBaseQueryAccountRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountRequest>, I>>(object: I): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseAccountResponse(): AccountResponse {
  return {
    permission: undefined,
  };
}
export const AccountResponse = {
  typeUrl: "/cosmos.circuit.v1.AccountResponse",
  encode(message: AccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.permission !== undefined) {
      Permissions.encode(message.permission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = Permissions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountResponse {
    const obj = createBaseAccountResponse();
    if (isSet(object.permission)) obj.permission = Permissions.fromJSON(object.permission);
    return obj;
  },
  toJSON(message: AccountResponse): unknown {
    const obj: any = {};
    message.permission !== undefined &&
      (obj.permission = message.permission ? Permissions.toJSON(message.permission) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AccountResponse>, I>>(object: I): AccountResponse {
    const message = createBaseAccountResponse();
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = Permissions.fromPartial(object.permission);
    }
    return message;
  },
};
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAccountsRequest = {
  typeUrl: "/cosmos.circuit.v1.QueryAccountsRequest",
  encode(message: QueryAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
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
  fromJSON(object: any): QueryAccountsRequest {
    const obj = createBaseQueryAccountsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountsRequest>, I>>(object: I): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseAccountsResponse(): AccountsResponse {
  return {
    accounts: [],
    pagination: undefined,
  };
}
export const AccountsResponse = {
  typeUrl: "/cosmos.circuit.v1.AccountsResponse",
  encode(message: AccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      GenesisAccountPermissions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(GenesisAccountPermissions.decode(reader, reader.uint32()));
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
  fromJSON(object: any): AccountsResponse {
    const obj = createBaseAccountsResponse();
    if (Array.isArray(object?.accounts))
      obj.accounts = object.accounts.map((e: any) => GenesisAccountPermissions.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: AccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => (e ? GenesisAccountPermissions.toJSON(e) : undefined));
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AccountsResponse>, I>>(object: I): AccountsResponse {
    const message = createBaseAccountsResponse();
    message.accounts = object.accounts?.map((e) => GenesisAccountPermissions.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDisabledListRequest(): QueryDisabledListRequest {
  return {};
}
export const QueryDisabledListRequest = {
  typeUrl: "/cosmos.circuit.v1.QueryDisabledListRequest",
  encode(_: QueryDisabledListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDisabledListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDisabledListRequest();
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
  fromJSON(_: any): QueryDisabledListRequest {
    const obj = createBaseQueryDisabledListRequest();
    return obj;
  },
  toJSON(_: QueryDisabledListRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDisabledListRequest>, I>>(_: I): QueryDisabledListRequest {
    const message = createBaseQueryDisabledListRequest();
    return message;
  },
};
function createBaseDisabledListResponse(): DisabledListResponse {
  return {
    disabledList: [],
  };
}
export const DisabledListResponse = {
  typeUrl: "/cosmos.circuit.v1.DisabledListResponse",
  encode(message: DisabledListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.disabledList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DisabledListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisabledListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disabledList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DisabledListResponse {
    const obj = createBaseDisabledListResponse();
    if (Array.isArray(object?.disabledList))
      obj.disabledList = object.disabledList.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: DisabledListResponse): unknown {
    const obj: any = {};
    if (message.disabledList) {
      obj.disabledList = message.disabledList.map((e) => e);
    } else {
      obj.disabledList = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DisabledListResponse>, I>>(object: I): DisabledListResponse {
    const message = createBaseDisabledListResponse();
    message.disabledList = object.disabledList?.map((e) => e) || [];
    return message;
  },
};
/** Query defines the circuit gRPC querier service. */
export interface Query {
  /** Account returns account permissions. */
  Account(request: QueryAccountRequest): Promise<AccountResponse>;
  /** Account returns account permissions. */
  Accounts(request?: QueryAccountsRequest): Promise<AccountsResponse>;
  /** DisabledList returns a list of disabled message urls */
  DisabledList(request?: QueryDisabledListRequest): Promise<DisabledListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Account = this.Account.bind(this);
    this.Accounts = this.Accounts.bind(this);
    this.DisabledList = this.DisabledList.bind(this);
  }
  Account(request: QueryAccountRequest): Promise<AccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Account", data);
    return promise.then((data) => AccountResponse.decode(new BinaryReader(data)));
  }
  Accounts(
    request: QueryAccountsRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<AccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Accounts", data);
    return promise.then((data) => AccountsResponse.decode(new BinaryReader(data)));
  }
  DisabledList(request: QueryDisabledListRequest = {}): Promise<DisabledListResponse> {
    const data = QueryDisabledListRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "DisabledList", data);
    return promise.then((data) => DisabledListResponse.decode(new BinaryReader(data)));
  }
}
