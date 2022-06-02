/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Chain, Asset } from "../../../axelar/nexus/exported/v1beta1/types";

export const protobufPackage = "axelar.axelarnet.v1beta1";

/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
 * address
 */
export interface LinkRequest {
  sender: Uint8Array;
  recipientAddr: string;
  recipientChain: string;
  asset: string;
}

export interface LinkResponse {
  depositAddr: string;
}

/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequest {
  sender: Uint8Array;
  depositAddress: Uint8Array;
  denom: string;
}

export interface ConfirmDepositResponse {}

/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequest {
  sender: Uint8Array;
}

export interface ExecutePendingTransfersResponse {}

/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 */
export interface RegisterIBCPathRequest {
  sender: Uint8Array;
  chain: string;
  path: string;
}

export interface RegisterIBCPathResponse {}

/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequest {
  sender: Uint8Array;
  chain?: Chain;
  addrPrefix: string;
  nativeAssets: Asset[];
}

export interface AddCosmosBasedChainResponse {}

/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequest {
  sender: Uint8Array;
  chain: string;
  asset?: Asset;
}

export interface RegisterAssetResponse {}

/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequest {
  sender: Uint8Array;
}

export interface RouteIBCTransfersResponse {}

/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequest {
  sender: Uint8Array;
  feeCollector: Uint8Array;
}

export interface RegisterFeeCollectorResponse {}

function createBaseLinkRequest(): LinkRequest {
  return { sender: new Uint8Array(), recipientAddr: "", recipientChain: "", asset: "" };
}

export const LinkRequest = {
  encode(message: LinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.recipientAddr !== "") {
      writer.uint32(18).string(message.recipientAddr);
    }
    if (message.recipientChain !== "") {
      writer.uint32(26).string(message.recipientChain);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.recipientAddr = reader.string();
          break;
        case 3:
          message.recipientChain = reader.string();
          break;
        case 4:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LinkRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: LinkRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.recipientAddr !== undefined && (obj.recipientAddr = message.recipientAddr);
    message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LinkRequest>, I>>(object: I): LinkRequest {
    const message = createBaseLinkRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.recipientAddr = object.recipientAddr ?? "";
    message.recipientChain = object.recipientChain ?? "";
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBaseLinkResponse(): LinkResponse {
  return { depositAddr: "" };
}

export const LinkResponse = {
  encode(message: LinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddr !== "") {
      writer.uint32(10).string(message.depositAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LinkResponse {
    return {
      depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : "",
    };
  },

  toJSON(message: LinkResponse): unknown {
    const obj: any = {};
    message.depositAddr !== undefined && (obj.depositAddr = message.depositAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LinkResponse>, I>>(object: I): LinkResponse {
    const message = createBaseLinkResponse();
    message.depositAddr = object.depositAddr ?? "";
    return message;
  },
};

function createBaseConfirmDepositRequest(): ConfirmDepositRequest {
  return { sender: new Uint8Array(), depositAddress: new Uint8Array(), denom: "" };
}

export const ConfirmDepositRequest = {
  encode(message: ConfirmDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.depositAddress.length !== 0) {
      writer.uint32(34).bytes(message.depositAddress);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 4:
          message.depositAddress = reader.bytes();
          break;
        case 5:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmDepositRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      depositAddress: isSet(object.depositAddress)
        ? bytesFromBase64(object.depositAddress)
        : new Uint8Array(),
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: ConfirmDepositRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.depositAddress !== undefined &&
      (obj.depositAddress = base64FromBytes(
        message.depositAddress !== undefined ? message.depositAddress : new Uint8Array(),
      ));
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmDepositRequest>, I>>(object: I): ConfirmDepositRequest {
    const message = createBaseConfirmDepositRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.depositAddress = object.depositAddress ?? new Uint8Array();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseConfirmDepositResponse(): ConfirmDepositResponse {
  return {};
}

export const ConfirmDepositResponse = {
  encode(_: ConfirmDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmDepositResponse();
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

  fromJSON(_: any): ConfirmDepositResponse {
    return {};
  },

  toJSON(_: ConfirmDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmDepositResponse>, I>>(_: I): ConfirmDepositResponse {
    const message = createBaseConfirmDepositResponse();
    return message;
  },
};

function createBaseExecutePendingTransfersRequest(): ExecutePendingTransfersRequest {
  return { sender: new Uint8Array() };
}

export const ExecutePendingTransfersRequest = {
  encode(message: ExecutePendingTransfersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePendingTransfersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePendingTransfersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecutePendingTransfersRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
    };
  },

  toJSON(message: ExecutePendingTransfersRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExecutePendingTransfersRequest>, I>>(
    object: I,
  ): ExecutePendingTransfersRequest {
    const message = createBaseExecutePendingTransfersRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  },
};

function createBaseExecutePendingTransfersResponse(): ExecutePendingTransfersResponse {
  return {};
}

export const ExecutePendingTransfersResponse = {
  encode(_: ExecutePendingTransfersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePendingTransfersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePendingTransfersResponse();
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

  fromJSON(_: any): ExecutePendingTransfersResponse {
    return {};
  },

  toJSON(_: ExecutePendingTransfersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExecutePendingTransfersResponse>, I>>(
    _: I,
  ): ExecutePendingTransfersResponse {
    const message = createBaseExecutePendingTransfersResponse();
    return message;
  },
};

function createBaseRegisterIBCPathRequest(): RegisterIBCPathRequest {
  return { sender: new Uint8Array(), chain: "", path: "" };
}

export const RegisterIBCPathRequest = {
  encode(message: RegisterIBCPathRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterIBCPathRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterIBCPathRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterIBCPathRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      path: isSet(object.path) ? String(object.path) : "",
    };
  },

  toJSON(message: RegisterIBCPathRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterIBCPathRequest>, I>>(object: I): RegisterIBCPathRequest {
    const message = createBaseRegisterIBCPathRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseRegisterIBCPathResponse(): RegisterIBCPathResponse {
  return {};
}

export const RegisterIBCPathResponse = {
  encode(_: RegisterIBCPathResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterIBCPathResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterIBCPathResponse();
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

  fromJSON(_: any): RegisterIBCPathResponse {
    return {};
  },

  toJSON(_: RegisterIBCPathResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterIBCPathResponse>, I>>(_: I): RegisterIBCPathResponse {
    const message = createBaseRegisterIBCPathResponse();
    return message;
  },
};

function createBaseAddCosmosBasedChainRequest(): AddCosmosBasedChainRequest {
  return { sender: new Uint8Array(), chain: undefined, addrPrefix: "", nativeAssets: [] };
}

export const AddCosmosBasedChainRequest = {
  encode(message: AddCosmosBasedChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== undefined) {
      Chain.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }
    if (message.addrPrefix !== "") {
      writer.uint32(26).string(message.addrPrefix);
    }
    for (const v of message.nativeAssets) {
      Asset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddCosmosBasedChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCosmosBasedChainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.chain = Chain.decode(reader, reader.uint32());
          break;
        case 3:
          message.addrPrefix = reader.string();
          break;
        case 5:
          message.nativeAssets.push(Asset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddCosmosBasedChainRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined,
      addrPrefix: isSet(object.addrPrefix) ? String(object.addrPrefix) : "",
      nativeAssets: Array.isArray(object?.nativeAssets)
        ? object.nativeAssets.map((e: any) => Asset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddCosmosBasedChainRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain ? Chain.toJSON(message.chain) : undefined);
    message.addrPrefix !== undefined && (obj.addrPrefix = message.addrPrefix);
    if (message.nativeAssets) {
      obj.nativeAssets = message.nativeAssets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.nativeAssets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCosmosBasedChainRequest>, I>>(
    object: I,
  ): AddCosmosBasedChainRequest {
    const message = createBaseAddCosmosBasedChainRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain =
      object.chain !== undefined && object.chain !== null ? Chain.fromPartial(object.chain) : undefined;
    message.addrPrefix = object.addrPrefix ?? "";
    message.nativeAssets = object.nativeAssets?.map((e) => Asset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddCosmosBasedChainResponse(): AddCosmosBasedChainResponse {
  return {};
}

export const AddCosmosBasedChainResponse = {
  encode(_: AddCosmosBasedChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddCosmosBasedChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCosmosBasedChainResponse();
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

  fromJSON(_: any): AddCosmosBasedChainResponse {
    return {};
  },

  toJSON(_: AddCosmosBasedChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCosmosBasedChainResponse>, I>>(
    _: I,
  ): AddCosmosBasedChainResponse {
    const message = createBaseAddCosmosBasedChainResponse();
    return message;
  },
};

function createBaseRegisterAssetRequest(): RegisterAssetRequest {
  return { sender: new Uint8Array(), chain: "", asset: undefined };
}

export const RegisterAssetRequest = {
  encode(message: RegisterAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterAssetRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: RegisterAssetRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterAssetRequest>, I>>(object: I): RegisterAssetRequest {
    const message = createBaseRegisterAssetRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.asset =
      object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  },
};

function createBaseRegisterAssetResponse(): RegisterAssetResponse {
  return {};
}

export const RegisterAssetResponse = {
  encode(_: RegisterAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterAssetResponse();
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

  fromJSON(_: any): RegisterAssetResponse {
    return {};
  },

  toJSON(_: RegisterAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterAssetResponse>, I>>(_: I): RegisterAssetResponse {
    const message = createBaseRegisterAssetResponse();
    return message;
  },
};

function createBaseRouteIBCTransfersRequest(): RouteIBCTransfersRequest {
  return { sender: new Uint8Array() };
}

export const RouteIBCTransfersRequest = {
  encode(message: RouteIBCTransfersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteIBCTransfersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteIBCTransfersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RouteIBCTransfersRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
    };
  },

  toJSON(message: RouteIBCTransfersRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RouteIBCTransfersRequest>, I>>(
    object: I,
  ): RouteIBCTransfersRequest {
    const message = createBaseRouteIBCTransfersRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  },
};

function createBaseRouteIBCTransfersResponse(): RouteIBCTransfersResponse {
  return {};
}

export const RouteIBCTransfersResponse = {
  encode(_: RouteIBCTransfersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteIBCTransfersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteIBCTransfersResponse();
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

  fromJSON(_: any): RouteIBCTransfersResponse {
    return {};
  },

  toJSON(_: RouteIBCTransfersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RouteIBCTransfersResponse>, I>>(_: I): RouteIBCTransfersResponse {
    const message = createBaseRouteIBCTransfersResponse();
    return message;
  },
};

function createBaseRegisterFeeCollectorRequest(): RegisterFeeCollectorRequest {
  return { sender: new Uint8Array(), feeCollector: new Uint8Array() };
}

export const RegisterFeeCollectorRequest = {
  encode(message: RegisterFeeCollectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.feeCollector.length !== 0) {
      writer.uint32(18).bytes(message.feeCollector);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterFeeCollectorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterFeeCollectorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.feeCollector = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterFeeCollectorRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      feeCollector: isSet(object.feeCollector) ? bytesFromBase64(object.feeCollector) : new Uint8Array(),
    };
  },

  toJSON(message: RegisterFeeCollectorRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.feeCollector !== undefined &&
      (obj.feeCollector = base64FromBytes(
        message.feeCollector !== undefined ? message.feeCollector : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterFeeCollectorRequest>, I>>(
    object: I,
  ): RegisterFeeCollectorRequest {
    const message = createBaseRegisterFeeCollectorRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.feeCollector = object.feeCollector ?? new Uint8Array();
    return message;
  },
};

function createBaseRegisterFeeCollectorResponse(): RegisterFeeCollectorResponse {
  return {};
}

export const RegisterFeeCollectorResponse = {
  encode(_: RegisterFeeCollectorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterFeeCollectorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterFeeCollectorResponse();
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

  fromJSON(_: any): RegisterFeeCollectorResponse {
    return {};
  },

  toJSON(_: RegisterFeeCollectorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterFeeCollectorResponse>, I>>(
    _: I,
  ): RegisterFeeCollectorResponse {
    const message = createBaseRegisterFeeCollectorResponse();
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
