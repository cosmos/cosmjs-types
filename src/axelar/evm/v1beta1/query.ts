/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  BatchedCommandsStatus,
  DepositStatus,
  Event,
  BurnerInfo,
  TokenDetails,
  batchedCommandsStatusFromJSON,
  batchedCommandsStatusToJSON,
  depositStatusFromJSON,
  depositStatusToJSON,
} from "../../../axelar/evm/v1beta1/types";
import { Params } from "../../../axelar/evm/v1beta1/params";

export const protobufPackage = "axelar.evm.v1beta1";

export enum ChainStatus {
  CHAIN_STATUS_UNSPECIFIED = 0,
  CHAIN_STATUS_ACTIVATED = 1,
  CHAIN_STATUS_DEACTIVATED = 2,
  UNRECOGNIZED = -1,
}

export function chainStatusFromJSON(object: any): ChainStatus {
  switch (object) {
    case 0:
    case "CHAIN_STATUS_UNSPECIFIED":
      return ChainStatus.CHAIN_STATUS_UNSPECIFIED;
    case 1:
    case "CHAIN_STATUS_ACTIVATED":
      return ChainStatus.CHAIN_STATUS_ACTIVATED;
    case 2:
    case "CHAIN_STATUS_DEACTIVATED":
      return ChainStatus.CHAIN_STATUS_DEACTIVATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChainStatus.UNRECOGNIZED;
  }
}

export function chainStatusToJSON(object: ChainStatus): string {
  switch (object) {
    case ChainStatus.CHAIN_STATUS_UNSPECIFIED:
      return "CHAIN_STATUS_UNSPECIFIED";
    case ChainStatus.CHAIN_STATUS_ACTIVATED:
      return "CHAIN_STATUS_ACTIVATED";
    case ChainStatus.CHAIN_STATUS_DEACTIVATED:
      return "CHAIN_STATUS_DEACTIVATED";
    case ChainStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TokenType {
  TOKEN_TYPE_UNSPECIFIED = 0,
  TOKEN_TYPE_INTERNAL = 1,
  TOKEN_TYPE_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}

export function tokenTypeFromJSON(object: any): TokenType {
  switch (object) {
    case 0:
    case "TOKEN_TYPE_UNSPECIFIED":
      return TokenType.TOKEN_TYPE_UNSPECIFIED;
    case 1:
    case "TOKEN_TYPE_INTERNAL":
      return TokenType.TOKEN_TYPE_INTERNAL;
    case 2:
    case "TOKEN_TYPE_EXTERNAL":
      return TokenType.TOKEN_TYPE_EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenType.UNRECOGNIZED;
  }
}

export function tokenTypeToJSON(object: TokenType): string {
  switch (object) {
    case TokenType.TOKEN_TYPE_UNSPECIFIED:
      return "TOKEN_TYPE_UNSPECIFIED";
    case TokenType.TOKEN_TYPE_INTERNAL:
      return "TOKEN_TYPE_INTERNAL";
    case TokenType.TOKEN_TYPE_EXTERNAL:
      return "TOKEN_TYPE_EXTERNAL";
    case TokenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 */
export interface DepositQueryParams {
  address: string;
  asset: string;
  chain: string;
}

export interface BatchedCommandsRequest {
  chain: string;
  /**
   * id defines an optional id for the commandsbatch. If not specified the
   * latest will be returned
   */
  id: string;
}

export interface BatchedCommandsResponse {
  id: string;
  data: string;
  status: BatchedCommandsStatus;
  keyId: string;
  executeData: string;
  prevBatchedCommandsId: string;
  commandIds: string[];
  proof?: Proof;
}

export interface KeyAddressRequest {
  chain: string;
  keyId: string;
}

export interface KeyAddressResponse {
  keyId: string;
  addresses: KeyAddressResponse_WeightedAddress[];
  threshold: string;
}

export interface KeyAddressResponse_WeightedAddress {
  address: string;
  weight: string;
}

/** @deprecated */
export interface QueryTokenAddressResponse {
  address: string;
  confirmed: boolean;
}

/** @deprecated */
export interface QueryDepositStateParams {
  txId: Uint8Array;
  burnerAddress: Uint8Array;
}

/** @deprecated */
export interface DepositStateRequest {
  chain: string;
  params?: QueryDepositStateParams;
}

/** @deprecated */
export interface DepositStateResponse {
  status: DepositStatus;
}

export interface EventRequest {
  chain: string;
  eventId: string;
}

export interface EventResponse {
  event?: Event;
}

export interface QueryBurnerAddressResponse {
  address: string;
}

export interface ChainsRequest {
  status: ChainStatus;
}

export interface ChainsResponse {
  chains: string[];
}

export interface CommandRequest {
  chain: string;
  id: string;
}

export interface CommandResponse {
  id: string;
  type: string;
  params: { [key: string]: string };
  keyId: string;
  maxGasCost: number;
}

export interface CommandResponse_ParamsEntry {
  key: string;
  value: string;
}

export interface PendingCommandsRequest {
  chain: string;
}

export interface PendingCommandsResponse {
  commands: QueryCommandResponse[];
}

export interface QueryCommandResponse {
  id: string;
  type: string;
  params: { [key: string]: string };
  keyId: string;
  maxGasCost: number;
}

export interface QueryCommandResponse_ParamsEntry {
  key: string;
  value: string;
}

export interface BurnerInfoRequest {
  address: Uint8Array;
}

export interface BurnerInfoResponse {
  chain: string;
  burnerInfo?: BurnerInfo;
}

export interface ConfirmationHeightRequest {
  chain: string;
}

export interface ConfirmationHeightResponse {
  height: Long;
}

export interface GatewayAddressRequest {
  chain: string;
}

export interface GatewayAddressResponse {
  address: string;
}

export interface BytecodeRequest {
  chain: string;
  contract: string;
}

export interface BytecodeResponse {
  bytecode: string;
}

/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequest {
  chain: string;
  type: TokenType;
}

/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponse {
  tokens: ERC20TokensResponse_Token[];
}

export interface ERC20TokensResponse_Token {
  asset: string;
  symbol: string;
}

export interface TokenInfoRequest {
  chain: string;
  asset: string | undefined;
  symbol: string | undefined;
  address: string | undefined;
}

export interface TokenInfoResponse {
  asset: string;
  details?: TokenDetails;
  address: string;
  confirmed: boolean;
  isExternal: boolean;
  burnerCodeHash: string;
}

export interface Proof {
  addresses: string[];
  weights: string[];
  threshold: string;
  signatures: string[];
}

/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
  chain: string;
}

export interface ParamsResponse {
  params?: Params;
}

function createBaseDepositQueryParams(): DepositQueryParams {
  return { address: "", asset: "", chain: "" };
}

export const DepositQueryParams = {
  encode(message: DepositQueryParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.chain !== "") {
      writer.uint32(26).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositQueryParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositQueryParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositQueryParams {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: DepositQueryParams): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.asset !== undefined && (obj.asset = message.asset);
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositQueryParams>, I>>(object: I): DepositQueryParams {
    const message = createBaseDepositQueryParams();
    message.address = object.address ?? "";
    message.asset = object.asset ?? "";
    message.chain = object.chain ?? "";
    return message;
  },
};

function createBaseBatchedCommandsRequest(): BatchedCommandsRequest {
  return { chain: "", id: "" };
}

export const BatchedCommandsRequest = {
  encode(message: BatchedCommandsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchedCommandsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchedCommandsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchedCommandsRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: BatchedCommandsRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchedCommandsRequest>, I>>(object: I): BatchedCommandsRequest {
    const message = createBaseBatchedCommandsRequest();
    message.chain = object.chain ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseBatchedCommandsResponse(): BatchedCommandsResponse {
  return {
    id: "",
    data: "",
    status: 0,
    keyId: "",
    executeData: "",
    prevBatchedCommandsId: "",
    commandIds: [],
    proof: undefined,
  };
}

export const BatchedCommandsResponse = {
  encode(message: BatchedCommandsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    if (message.executeData !== "") {
      writer.uint32(50).string(message.executeData);
    }
    if (message.prevBatchedCommandsId !== "") {
      writer.uint32(58).string(message.prevBatchedCommandsId);
    }
    for (const v of message.commandIds) {
      writer.uint32(66).string(v!);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchedCommandsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchedCommandsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.data = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.keyId = reader.string();
          break;
        case 6:
          message.executeData = reader.string();
          break;
        case 7:
          message.prevBatchedCommandsId = reader.string();
          break;
        case 8:
          message.commandIds.push(reader.string());
          break;
        case 9:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchedCommandsResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      data: isSet(object.data) ? String(object.data) : "",
      status: isSet(object.status) ? batchedCommandsStatusFromJSON(object.status) : 0,
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      executeData: isSet(object.executeData) ? String(object.executeData) : "",
      prevBatchedCommandsId: isSet(object.prevBatchedCommandsId) ? String(object.prevBatchedCommandsId) : "",
      commandIds: Array.isArray(object?.commandIds) ? object.commandIds.map((e: any) => String(e)) : [],
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
    };
  },

  toJSON(message: BatchedCommandsResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.data !== undefined && (obj.data = message.data);
    message.status !== undefined && (obj.status = batchedCommandsStatusToJSON(message.status));
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.executeData !== undefined && (obj.executeData = message.executeData);
    message.prevBatchedCommandsId !== undefined &&
      (obj.prevBatchedCommandsId = message.prevBatchedCommandsId);
    if (message.commandIds) {
      obj.commandIds = message.commandIds.map((e) => e);
    } else {
      obj.commandIds = [];
    }
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchedCommandsResponse>, I>>(object: I): BatchedCommandsResponse {
    const message = createBaseBatchedCommandsResponse();
    message.id = object.id ?? "";
    message.data = object.data ?? "";
    message.status = object.status ?? 0;
    message.keyId = object.keyId ?? "";
    message.executeData = object.executeData ?? "";
    message.prevBatchedCommandsId = object.prevBatchedCommandsId ?? "";
    message.commandIds = object.commandIds?.map((e) => e) || [];
    message.proof =
      object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
};

function createBaseKeyAddressRequest(): KeyAddressRequest {
  return { chain: "", keyId: "" };
}

export const KeyAddressRequest = {
  encode(message: KeyAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 4:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyAddressRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: KeyAddressRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyAddressRequest>, I>>(object: I): KeyAddressRequest {
    const message = createBaseKeyAddressRequest();
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseKeyAddressResponse(): KeyAddressResponse {
  return { keyId: "", addresses: [], threshold: "" };
}

export const KeyAddressResponse = {
  encode(message: KeyAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    for (const v of message.addresses) {
      KeyAddressResponse_WeightedAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.threshold !== "") {
      writer.uint32(26).string(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.addresses.push(KeyAddressResponse_WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 3:
          message.threshold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyAddressResponse {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      addresses: Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => KeyAddressResponse_WeightedAddress.fromJSON(e))
        : [],
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
    };
  },

  toJSON(message: KeyAddressResponse): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) =>
        e ? KeyAddressResponse_WeightedAddress.toJSON(e) : undefined,
      );
    } else {
      obj.addresses = [];
    }
    message.threshold !== undefined && (obj.threshold = message.threshold);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyAddressResponse>, I>>(object: I): KeyAddressResponse {
    const message = createBaseKeyAddressResponse();
    message.keyId = object.keyId ?? "";
    message.addresses = object.addresses?.map((e) => KeyAddressResponse_WeightedAddress.fromPartial(e)) || [];
    message.threshold = object.threshold ?? "";
    return message;
  },
};

function createBaseKeyAddressResponse_WeightedAddress(): KeyAddressResponse_WeightedAddress {
  return { address: "", weight: "" };
}

export const KeyAddressResponse_WeightedAddress = {
  encode(message: KeyAddressResponse_WeightedAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyAddressResponse_WeightedAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyAddressResponse_WeightedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyAddressResponse_WeightedAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
    };
  },

  toJSON(message: KeyAddressResponse_WeightedAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyAddressResponse_WeightedAddress>, I>>(
    object: I,
  ): KeyAddressResponse_WeightedAddress {
    const message = createBaseKeyAddressResponse_WeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
};

function createBaseQueryTokenAddressResponse(): QueryTokenAddressResponse {
  return { address: "", confirmed: false };
}

export const QueryTokenAddressResponse = {
  encode(message: QueryTokenAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.confirmed === true) {
      writer.uint32(16).bool(message.confirmed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.confirmed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false,
    };
  },

  toJSON(message: QueryTokenAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.confirmed !== undefined && (obj.confirmed = message.confirmed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenAddressResponse>, I>>(
    object: I,
  ): QueryTokenAddressResponse {
    const message = createBaseQueryTokenAddressResponse();
    message.address = object.address ?? "";
    message.confirmed = object.confirmed ?? false;
    return message;
  },
};

function createBaseQueryDepositStateParams(): QueryDepositStateParams {
  return { txId: new Uint8Array(), burnerAddress: new Uint8Array() };
}

export const QueryDepositStateParams = {
  encode(message: QueryDepositStateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.burnerAddress.length !== 0) {
      writer.uint32(18).bytes(message.burnerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositStateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositStateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.bytes();
          break;
        case 2:
          message.burnerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDepositStateParams {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
    };
  },

  toJSON(message: QueryDepositStateParams): unknown {
    const obj: any = {};
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.burnerAddress !== undefined &&
      (obj.burnerAddress = base64FromBytes(
        message.burnerAddress !== undefined ? message.burnerAddress : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositStateParams>, I>>(object: I): QueryDepositStateParams {
    const message = createBaseQueryDepositStateParams();
    message.txId = object.txId ?? new Uint8Array();
    message.burnerAddress = object.burnerAddress ?? new Uint8Array();
    return message;
  },
};

function createBaseDepositStateRequest(): DepositStateRequest {
  return { chain: "", params: undefined };
}

export const DepositStateRequest = {
  encode(message: DepositStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.params !== undefined) {
      QueryDepositStateParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.params = QueryDepositStateParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositStateRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      params: isSet(object.params) ? QueryDepositStateParams.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: DepositStateRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.params !== undefined &&
      (obj.params = message.params ? QueryDepositStateParams.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositStateRequest>, I>>(object: I): DepositStateRequest {
    const message = createBaseDepositStateRequest();
    message.chain = object.chain ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? QueryDepositStateParams.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseDepositStateResponse(): DepositStateResponse {
  return { status: 0 };
}

export const DepositStateResponse = {
  encode(message: DepositStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositStateResponse {
    return {
      status: isSet(object.status) ? depositStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: DepositStateResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = depositStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositStateResponse>, I>>(object: I): DepositStateResponse {
    const message = createBaseDepositStateResponse();
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseEventRequest(): EventRequest {
  return { chain: "", eventId: "" };
}

export const EventRequest = {
  encode(message: EventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.eventId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
    };
  },

  toJSON(message: EventRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRequest>, I>>(object: I): EventRequest {
    const message = createBaseEventRequest();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseEventResponse(): EventResponse {
  return { event: undefined };
}

export const EventResponse = {
  encode(message: EventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = Event.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventResponse {
    return {
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
    };
  },

  toJSON(message: EventResponse): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event ? Event.toJSON(message.event) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventResponse>, I>>(object: I): EventResponse {
    const message = createBaseEventResponse();
    message.event =
      object.event !== undefined && object.event !== null ? Event.fromPartial(object.event) : undefined;
    return message;
  },
};

function createBaseQueryBurnerAddressResponse(): QueryBurnerAddressResponse {
  return { address: "" };
}

export const QueryBurnerAddressResponse = {
  encode(message: QueryBurnerAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnerAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurnerAddressResponse();
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

  fromJSON(object: any): QueryBurnerAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryBurnerAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBurnerAddressResponse>, I>>(
    object: I,
  ): QueryBurnerAddressResponse {
    const message = createBaseQueryBurnerAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseChainsRequest(): ChainsRequest {
  return { status: 0 };
}

export const ChainsRequest = {
  encode(message: ChainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChainsRequest {
    return {
      status: isSet(object.status) ? chainStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: ChainsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = chainStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChainsRequest>, I>>(object: I): ChainsRequest {
    const message = createBaseChainsRequest();
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseChainsResponse(): ChainsResponse {
  return { chains: [] };
}

export const ChainsResponse = {
  encode(message: ChainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chains) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chains.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChainsResponse {
    return {
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ChainsResponse): unknown {
    const obj: any = {};
    if (message.chains) {
      obj.chains = message.chains.map((e) => e);
    } else {
      obj.chains = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChainsResponse>, I>>(object: I): ChainsResponse {
    const message = createBaseChainsResponse();
    message.chains = object.chains?.map((e) => e) || [];
    return message;
  },
};

function createBaseCommandRequest(): CommandRequest {
  return { chain: "", id: "" };
}

export const CommandRequest = {
  encode(message: CommandRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: CommandRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommandRequest>, I>>(object: I): CommandRequest {
    const message = createBaseCommandRequest();
    message.chain = object.chain ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseCommandResponse(): CommandResponse {
  return { id: "", type: "", params: {}, keyId: "", maxGasCost: 0 };
}

export const CommandResponse = {
  encode(message: CommandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    Object.entries(message.params).forEach(([key, value]) => {
      CommandResponse_ParamsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    if (message.maxGasCost !== 0) {
      writer.uint32(40).uint32(message.maxGasCost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          const entry3 = CommandResponse_ParamsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.params[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.keyId = reader.string();
          break;
        case 5:
          message.maxGasCost = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      params: isObject(object.params)
        ? Object.entries(object.params).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {})
        : {},
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      maxGasCost: isSet(object.maxGasCost) ? Number(object.maxGasCost) : 0,
    };
  },

  toJSON(message: CommandResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    obj.params = {};
    if (message.params) {
      Object.entries(message.params).forEach(([k, v]) => {
        obj.params[k] = v;
      });
    }
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.maxGasCost !== undefined && (obj.maxGasCost = Math.round(message.maxGasCost));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommandResponse>, I>>(object: I): CommandResponse {
    const message = createBaseCommandResponse();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.params = Object.entries(object.params ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.keyId = object.keyId ?? "";
    message.maxGasCost = object.maxGasCost ?? 0;
    return message;
  },
};

function createBaseCommandResponse_ParamsEntry(): CommandResponse_ParamsEntry {
  return { key: "", value: "" };
}

export const CommandResponse_ParamsEntry = {
  encode(message: CommandResponse_ParamsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandResponse_ParamsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandResponse_ParamsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandResponse_ParamsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CommandResponse_ParamsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommandResponse_ParamsEntry>, I>>(
    object: I,
  ): CommandResponse_ParamsEntry {
    const message = createBaseCommandResponse_ParamsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBasePendingCommandsRequest(): PendingCommandsRequest {
  return { chain: "" };
}

export const PendingCommandsRequest = {
  encode(message: PendingCommandsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingCommandsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingCommandsRequest();
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

  fromJSON(object: any): PendingCommandsRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: PendingCommandsRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingCommandsRequest>, I>>(object: I): PendingCommandsRequest {
    const message = createBasePendingCommandsRequest();
    message.chain = object.chain ?? "";
    return message;
  },
};

function createBasePendingCommandsResponse(): PendingCommandsResponse {
  return { commands: [] };
}

export const PendingCommandsResponse = {
  encode(message: PendingCommandsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commands) {
      QueryCommandResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingCommandsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingCommandsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commands.push(QueryCommandResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingCommandsResponse {
    return {
      commands: Array.isArray(object?.commands)
        ? object.commands.map((e: any) => QueryCommandResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PendingCommandsResponse): unknown {
    const obj: any = {};
    if (message.commands) {
      obj.commands = message.commands.map((e) => (e ? QueryCommandResponse.toJSON(e) : undefined));
    } else {
      obj.commands = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingCommandsResponse>, I>>(object: I): PendingCommandsResponse {
    const message = createBasePendingCommandsResponse();
    message.commands = object.commands?.map((e) => QueryCommandResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryCommandResponse(): QueryCommandResponse {
  return { id: "", type: "", params: {}, keyId: "", maxGasCost: 0 };
}

export const QueryCommandResponse = {
  encode(message: QueryCommandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    Object.entries(message.params).forEach(([key, value]) => {
      QueryCommandResponse_ParamsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    if (message.maxGasCost !== 0) {
      writer.uint32(40).uint32(message.maxGasCost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommandResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommandResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          const entry3 = QueryCommandResponse_ParamsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.params[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.keyId = reader.string();
          break;
        case 5:
          message.maxGasCost = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommandResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      params: isObject(object.params)
        ? Object.entries(object.params).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {})
        : {},
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      maxGasCost: isSet(object.maxGasCost) ? Number(object.maxGasCost) : 0,
    };
  },

  toJSON(message: QueryCommandResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    obj.params = {};
    if (message.params) {
      Object.entries(message.params).forEach(([k, v]) => {
        obj.params[k] = v;
      });
    }
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.maxGasCost !== undefined && (obj.maxGasCost = Math.round(message.maxGasCost));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommandResponse>, I>>(object: I): QueryCommandResponse {
    const message = createBaseQueryCommandResponse();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.params = Object.entries(object.params ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.keyId = object.keyId ?? "";
    message.maxGasCost = object.maxGasCost ?? 0;
    return message;
  },
};

function createBaseQueryCommandResponse_ParamsEntry(): QueryCommandResponse_ParamsEntry {
  return { key: "", value: "" };
}

export const QueryCommandResponse_ParamsEntry = {
  encode(message: QueryCommandResponse_ParamsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommandResponse_ParamsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommandResponse_ParamsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommandResponse_ParamsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: QueryCommandResponse_ParamsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommandResponse_ParamsEntry>, I>>(
    object: I,
  ): QueryCommandResponse_ParamsEntry {
    const message = createBaseQueryCommandResponse_ParamsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseBurnerInfoRequest(): BurnerInfoRequest {
  return { address: new Uint8Array() };
}

export const BurnerInfoRequest = {
  encode(message: BurnerInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BurnerInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnerInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BurnerInfoRequest {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
    };
  },

  toJSON(message: BurnerInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BurnerInfoRequest>, I>>(object: I): BurnerInfoRequest {
    const message = createBaseBurnerInfoRequest();
    message.address = object.address ?? new Uint8Array();
    return message;
  },
};

function createBaseBurnerInfoResponse(): BurnerInfoResponse {
  return { chain: "", burnerInfo: undefined };
}

export const BurnerInfoResponse = {
  encode(message: BurnerInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.burnerInfo !== undefined) {
      BurnerInfo.encode(message.burnerInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BurnerInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnerInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.burnerInfo = BurnerInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BurnerInfoResponse {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      burnerInfo: isSet(object.burnerInfo) ? BurnerInfo.fromJSON(object.burnerInfo) : undefined,
    };
  },

  toJSON(message: BurnerInfoResponse): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.burnerInfo !== undefined &&
      (obj.burnerInfo = message.burnerInfo ? BurnerInfo.toJSON(message.burnerInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BurnerInfoResponse>, I>>(object: I): BurnerInfoResponse {
    const message = createBaseBurnerInfoResponse();
    message.chain = object.chain ?? "";
    message.burnerInfo =
      object.burnerInfo !== undefined && object.burnerInfo !== null
        ? BurnerInfo.fromPartial(object.burnerInfo)
        : undefined;
    return message;
  },
};

function createBaseConfirmationHeightRequest(): ConfirmationHeightRequest {
  return { chain: "" };
}

export const ConfirmationHeightRequest = {
  encode(message: ConfirmationHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmationHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmationHeightRequest();
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

  fromJSON(object: any): ConfirmationHeightRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: ConfirmationHeightRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmationHeightRequest>, I>>(
    object: I,
  ): ConfirmationHeightRequest {
    const message = createBaseConfirmationHeightRequest();
    message.chain = object.chain ?? "";
    return message;
  },
};

function createBaseConfirmationHeightResponse(): ConfirmationHeightResponse {
  return { height: Long.UZERO };
}

export const ConfirmationHeightResponse = {
  encode(message: ConfirmationHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmationHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmationHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmationHeightResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
    };
  },

  toJSON(message: ConfirmationHeightResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmationHeightResponse>, I>>(
    object: I,
  ): ConfirmationHeightResponse {
    const message = createBaseConfirmationHeightResponse();
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  },
};

function createBaseGatewayAddressRequest(): GatewayAddressRequest {
  return { chain: "" };
}

export const GatewayAddressRequest = {
  encode(message: GatewayAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GatewayAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGatewayAddressRequest();
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

  fromJSON(object: any): GatewayAddressRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: GatewayAddressRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GatewayAddressRequest>, I>>(object: I): GatewayAddressRequest {
    const message = createBaseGatewayAddressRequest();
    message.chain = object.chain ?? "";
    return message;
  },
};

function createBaseGatewayAddressResponse(): GatewayAddressResponse {
  return { address: "" };
}

export const GatewayAddressResponse = {
  encode(message: GatewayAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GatewayAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGatewayAddressResponse();
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

  fromJSON(object: any): GatewayAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: GatewayAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GatewayAddressResponse>, I>>(object: I): GatewayAddressResponse {
    const message = createBaseGatewayAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseBytecodeRequest(): BytecodeRequest {
  return { chain: "", contract: "" };
}

export const BytecodeRequest = {
  encode(message: BytecodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BytecodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytecodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BytecodeRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: BytecodeRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BytecodeRequest>, I>>(object: I): BytecodeRequest {
    const message = createBaseBytecodeRequest();
    message.chain = object.chain ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBaseBytecodeResponse(): BytecodeResponse {
  return { bytecode: "" };
}

export const BytecodeResponse = {
  encode(message: BytecodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bytecode !== "") {
      writer.uint32(10).string(message.bytecode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BytecodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytecodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bytecode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BytecodeResponse {
    return {
      bytecode: isSet(object.bytecode) ? String(object.bytecode) : "",
    };
  },

  toJSON(message: BytecodeResponse): unknown {
    const obj: any = {};
    message.bytecode !== undefined && (obj.bytecode = message.bytecode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BytecodeResponse>, I>>(object: I): BytecodeResponse {
    const message = createBaseBytecodeResponse();
    message.bytecode = object.bytecode ?? "";
    return message;
  },
};

function createBaseERC20TokensRequest(): ERC20TokensRequest {
  return { chain: "", type: 0 };
}

export const ERC20TokensRequest = {
  encode(message: ERC20TokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20TokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20TokensRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      type: isSet(object.type) ? tokenTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: ERC20TokensRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.type !== undefined && (obj.type = tokenTypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20TokensRequest>, I>>(object: I): ERC20TokensRequest {
    const message = createBaseERC20TokensRequest();
    message.chain = object.chain ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseERC20TokensResponse(): ERC20TokensResponse {
  return { tokens: [] };
}

export const ERC20TokensResponse = {
  encode(message: ERC20TokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokens) {
      ERC20TokensResponse_Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20TokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(ERC20TokensResponse_Token.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20TokensResponse {
    return {
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => ERC20TokensResponse_Token.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ERC20TokensResponse): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e ? ERC20TokensResponse_Token.toJSON(e) : undefined));
    } else {
      obj.tokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20TokensResponse>, I>>(object: I): ERC20TokensResponse {
    const message = createBaseERC20TokensResponse();
    message.tokens = object.tokens?.map((e) => ERC20TokensResponse_Token.fromPartial(e)) || [];
    return message;
  },
};

function createBaseERC20TokensResponse_Token(): ERC20TokensResponse_Token {
  return { asset: "", symbol: "" };
}

export const ERC20TokensResponse_Token = {
  encode(message: ERC20TokensResponse_Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokensResponse_Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20TokensResponse_Token();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20TokensResponse_Token {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
    };
  },

  toJSON(message: ERC20TokensResponse_Token): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20TokensResponse_Token>, I>>(
    object: I,
  ): ERC20TokensResponse_Token {
    const message = createBaseERC20TokensResponse_Token();
    message.asset = object.asset ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  },
};

function createBaseTokenInfoRequest(): TokenInfoRequest {
  return { chain: "", asset: undefined, symbol: undefined, address: undefined };
}

export const TokenInfoRequest = {
  encode(message: TokenInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.asset !== undefined) {
      writer.uint32(18).string(message.asset);
    }
    if (message.symbol !== undefined) {
      writer.uint32(26).string(message.symbol);
    }
    if (message.address !== undefined) {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenInfoRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? String(object.asset) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : undefined,
      address: isSet(object.address) ? String(object.address) : undefined,
    };
  },

  toJSON(message: TokenInfoRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.asset !== undefined && (obj.asset = message.asset);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenInfoRequest>, I>>(object: I): TokenInfoRequest {
    const message = createBaseTokenInfoRequest();
    message.chain = object.chain ?? "";
    message.asset = object.asset ?? undefined;
    message.symbol = object.symbol ?? undefined;
    message.address = object.address ?? undefined;
    return message;
  },
};

function createBaseTokenInfoResponse(): TokenInfoResponse {
  return {
    asset: "",
    details: undefined,
    address: "",
    confirmed: false,
    isExternal: false,
    burnerCodeHash: "",
  };
}

export const TokenInfoResponse = {
  encode(message: TokenInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.details !== undefined) {
      TokenDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.confirmed === true) {
      writer.uint32(32).bool(message.confirmed);
    }
    if (message.isExternal === true) {
      writer.uint32(40).bool(message.isExternal);
    }
    if (message.burnerCodeHash !== "") {
      writer.uint32(50).string(message.burnerCodeHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.details = TokenDetails.decode(reader, reader.uint32());
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.confirmed = reader.bool();
          break;
        case 5:
          message.isExternal = reader.bool();
          break;
        case 6:
          message.burnerCodeHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenInfoResponse {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      details: isSet(object.details) ? TokenDetails.fromJSON(object.details) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
      confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false,
      isExternal: isSet(object.isExternal) ? Boolean(object.isExternal) : false,
      burnerCodeHash: isSet(object.burnerCodeHash) ? String(object.burnerCodeHash) : "",
    };
  },

  toJSON(message: TokenInfoResponse): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.details !== undefined &&
      (obj.details = message.details ? TokenDetails.toJSON(message.details) : undefined);
    message.address !== undefined && (obj.address = message.address);
    message.confirmed !== undefined && (obj.confirmed = message.confirmed);
    message.isExternal !== undefined && (obj.isExternal = message.isExternal);
    message.burnerCodeHash !== undefined && (obj.burnerCodeHash = message.burnerCodeHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenInfoResponse>, I>>(object: I): TokenInfoResponse {
    const message = createBaseTokenInfoResponse();
    message.asset = object.asset ?? "";
    message.details =
      object.details !== undefined && object.details !== null
        ? TokenDetails.fromPartial(object.details)
        : undefined;
    message.address = object.address ?? "";
    message.confirmed = object.confirmed ?? false;
    message.isExternal = object.isExternal ?? false;
    message.burnerCodeHash = object.burnerCodeHash ?? "";
    return message;
  },
};

function createBaseProof(): Proof {
  return { addresses: [], weights: [], threshold: "", signatures: [] };
}

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.weights) {
      writer.uint32(18).string(v!);
    }
    if (message.threshold !== "") {
      writer.uint32(26).string(message.threshold);
    }
    for (const v of message.signatures) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        case 2:
          message.weights.push(reader.string());
          break;
        case 3:
          message.threshold = reader.string();
          break;
        case 4:
          message.signatures.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proof {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [],
      weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => String(e)) : [],
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    if (message.weights) {
      obj.weights = message.weights.map((e) => e);
    } else {
      obj.weights = [];
    }
    message.threshold !== undefined && (obj.threshold = message.threshold);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e);
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    message.addresses = object.addresses?.map((e) => e) || [];
    message.weights = object.weights?.map((e) => e) || [];
    message.threshold = object.threshold ?? "";
    message.signatures = object.signatures?.map((e) => e) || [];
    return message;
  },
};

function createBaseParamsRequest(): ParamsRequest {
  return { chain: "" };
}

export const ParamsRequest = {
  encode(message: ParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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

  fromJSON(object: any): ParamsRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: ParamsRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(object: I): ParamsRequest {
    const message = createBaseParamsRequest();
    message.chain = object.chain ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
