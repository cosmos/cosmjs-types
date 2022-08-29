/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Asset, TokenDetails } from "../../../axelar/evm/v1beta1/types";
import { KeyType, keyTypeFromJSON, keyTypeToJSON } from "../../../axelar/tss/exported/v1beta1/types";

export const protobufPackage = "axelar.evm.v1beta1";

export interface SetGatewayRequest {
  sender: Uint8Array;
  chain: string;
  address: Uint8Array;
}

export interface SetGatewayResponse {}

export interface ConfirmGatewayTxRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
}

export interface ConfirmGatewayTxResponse {}

/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
  /** @deprecated */
  amount: Uint8Array;
  burnerAddress: Uint8Array;
}

export interface ConfirmDepositResponse {}

/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
  asset?: Asset;
}

export interface ConfirmTokenResponse {}

export interface ConfirmTransferKeyRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
}

export interface ConfirmTransferKeyResponse {}

/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 */
export interface LinkRequest {
  sender: Uint8Array;
  chain: string;
  recipientAddr: string;
  asset: string;
  recipientChain: string;
}

export interface LinkResponse {
  depositAddr: string;
}

/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with AxelarGateway
 */
export interface CreateBurnTokensRequest {
  sender: Uint8Array;
  chain: string;
}

export interface CreateBurnTokensResponse {}

/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequest {
  sender: Uint8Array;
  chain: string;
  asset?: Asset;
  tokenDetails?: TokenDetails;
  address: Uint8Array;
  dailyMintLimit: string;
}

export interface CreateDeployTokenResponse {}

/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequest {
  sender: Uint8Array;
  chain: string;
}

export interface CreatePendingTransfersResponse {}

/** @deprecated */
export interface CreateTransferOwnershipRequest {
  sender: Uint8Array;
  chain: string;
  keyId: string;
}

/** @deprecated */
export interface CreateTransferOwnershipResponse {}

export interface CreateTransferOperatorshipRequest {
  sender: Uint8Array;
  chain: string;
  keyId: string;
}

export interface CreateTransferOperatorshipResponse {}

export interface SignCommandsRequest {
  sender: Uint8Array;
  chain: string;
}

export interface SignCommandsResponse {
  batchedCommandsId: Uint8Array;
  commandCount: number;
}

export interface AddChainRequest {
  sender: Uint8Array;
  name: string;
  /** @deprecated */
  keyType: KeyType;
  params: Uint8Array;
}

export interface AddChainResponse {}

export interface RetryFailedEventRequest {
  sender: Uint8Array;
  chain: string;
  eventId: string;
}

export interface RetryFailedEventResponse {}

function createBaseSetGatewayRequest(): SetGatewayRequest {
  return { sender: new Uint8Array(), chain: "", address: new Uint8Array() };
}

export const SetGatewayRequest = {
  encode(message: SetGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.address.length !== 0) {
      writer.uint32(26).bytes(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGatewayRequest();
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
          message.address = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGatewayRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
    };
  },

  toJSON(message: SetGatewayRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGatewayRequest>, I>>(object: I): SetGatewayRequest {
    const message = createBaseSetGatewayRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.address = object.address ?? new Uint8Array();
    return message;
  },
};

function createBaseSetGatewayResponse(): SetGatewayResponse {
  return {};
}

export const SetGatewayResponse = {
  encode(_: SetGatewayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGatewayResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGatewayResponse();
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

  fromJSON(_: any): SetGatewayResponse {
    return {};
  },

  toJSON(_: SetGatewayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGatewayResponse>, I>>(_: I): SetGatewayResponse {
    const message = createBaseSetGatewayResponse();
    return message;
  },
};

function createBaseConfirmGatewayTxRequest(): ConfirmGatewayTxRequest {
  return { sender: new Uint8Array(), chain: "", txId: new Uint8Array() };
}

export const ConfirmGatewayTxRequest = {
  encode(message: ConfirmGatewayTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmGatewayTxRequest();
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
          message.txId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmGatewayTxRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
    };
  },

  toJSON(message: ConfirmGatewayTxRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmGatewayTxRequest>, I>>(object: I): ConfirmGatewayTxRequest {
    const message = createBaseConfirmGatewayTxRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    return message;
  },
};

function createBaseConfirmGatewayTxResponse(): ConfirmGatewayTxResponse {
  return {};
}

export const ConfirmGatewayTxResponse = {
  encode(_: ConfirmGatewayTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmGatewayTxResponse();
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

  fromJSON(_: any): ConfirmGatewayTxResponse {
    return {};
  },

  toJSON(_: ConfirmGatewayTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmGatewayTxResponse>, I>>(_: I): ConfirmGatewayTxResponse {
    const message = createBaseConfirmGatewayTxResponse();
    return message;
  },
};

function createBaseConfirmDepositRequest(): ConfirmDepositRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    txId: new Uint8Array(),
    amount: new Uint8Array(),
    burnerAddress: new Uint8Array(),
  };
}

export const ConfirmDepositRequest = {
  encode(message: ConfirmDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    if (message.amount.length !== 0) {
      writer.uint32(34).bytes(message.amount);
    }
    if (message.burnerAddress.length !== 0) {
      writer.uint32(42).bytes(message.burnerAddress);
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
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.txId = reader.bytes();
          break;
        case 4:
          message.amount = reader.bytes();
          break;
        case 5:
          message.burnerAddress = reader.bytes();
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
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
      burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
    };
  },

  toJSON(message: ConfirmDepositRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.amount !== undefined &&
      (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
    message.burnerAddress !== undefined &&
      (obj.burnerAddress = base64FromBytes(
        message.burnerAddress !== undefined ? message.burnerAddress : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmDepositRequest>, I>>(object: I): ConfirmDepositRequest {
    const message = createBaseConfirmDepositRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.amount = object.amount ?? new Uint8Array();
    message.burnerAddress = object.burnerAddress ?? new Uint8Array();
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

function createBaseConfirmTokenRequest(): ConfirmTokenRequest {
  return { sender: new Uint8Array(), chain: "", txId: new Uint8Array(), asset: undefined };
}

export const ConfirmTokenRequest = {
  encode(message: ConfirmTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmTokenRequest();
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
          message.txId = reader.bytes();
          break;
        case 4:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmTokenRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: ConfirmTokenRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmTokenRequest>, I>>(object: I): ConfirmTokenRequest {
    const message = createBaseConfirmTokenRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.asset =
      object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  },
};

function createBaseConfirmTokenResponse(): ConfirmTokenResponse {
  return {};
}

export const ConfirmTokenResponse = {
  encode(_: ConfirmTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmTokenResponse();
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

  fromJSON(_: any): ConfirmTokenResponse {
    return {};
  },

  toJSON(_: ConfirmTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmTokenResponse>, I>>(_: I): ConfirmTokenResponse {
    const message = createBaseConfirmTokenResponse();
    return message;
  },
};

function createBaseConfirmTransferKeyRequest(): ConfirmTransferKeyRequest {
  return { sender: new Uint8Array(), chain: "", txId: new Uint8Array() };
}

export const ConfirmTransferKeyRequest = {
  encode(message: ConfirmTransferKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTransferKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmTransferKeyRequest();
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
          message.txId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmTransferKeyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
    };
  },

  toJSON(message: ConfirmTransferKeyRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmTransferKeyRequest>, I>>(
    object: I,
  ): ConfirmTransferKeyRequest {
    const message = createBaseConfirmTransferKeyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    return message;
  },
};

function createBaseConfirmTransferKeyResponse(): ConfirmTransferKeyResponse {
  return {};
}

export const ConfirmTransferKeyResponse = {
  encode(_: ConfirmTransferKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTransferKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmTransferKeyResponse();
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

  fromJSON(_: any): ConfirmTransferKeyResponse {
    return {};
  },

  toJSON(_: ConfirmTransferKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmTransferKeyResponse>, I>>(_: I): ConfirmTransferKeyResponse {
    const message = createBaseConfirmTransferKeyResponse();
    return message;
  },
};

function createBaseLinkRequest(): LinkRequest {
  return { sender: new Uint8Array(), chain: "", recipientAddr: "", asset: "", recipientChain: "" };
}

export const LinkRequest = {
  encode(message: LinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.recipientAddr !== "") {
      writer.uint32(26).string(message.recipientAddr);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    if (message.recipientChain !== "") {
      writer.uint32(42).string(message.recipientChain);
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
          message.chain = reader.string();
          break;
        case 3:
          message.recipientAddr = reader.string();
          break;
        case 4:
          message.asset = reader.string();
          break;
        case 5:
          message.recipientChain = reader.string();
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
      chain: isSet(object.chain) ? String(object.chain) : "",
      recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
    };
  },

  toJSON(message: LinkRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.recipientAddr !== undefined && (obj.recipientAddr = message.recipientAddr);
    message.asset !== undefined && (obj.asset = message.asset);
    message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LinkRequest>, I>>(object: I): LinkRequest {
    const message = createBaseLinkRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.recipientAddr = object.recipientAddr ?? "";
    message.asset = object.asset ?? "";
    message.recipientChain = object.recipientChain ?? "";
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

function createBaseCreateBurnTokensRequest(): CreateBurnTokensRequest {
  return { sender: new Uint8Array(), chain: "" };
}

export const CreateBurnTokensRequest = {
  encode(message: CreateBurnTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBurnTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBurnTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBurnTokensRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: CreateBurnTokensRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBurnTokensRequest>, I>>(object: I): CreateBurnTokensRequest {
    const message = createBaseCreateBurnTokensRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    return message;
  },
};

function createBaseCreateBurnTokensResponse(): CreateBurnTokensResponse {
  return {};
}

export const CreateBurnTokensResponse = {
  encode(_: CreateBurnTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBurnTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBurnTokensResponse();
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

  fromJSON(_: any): CreateBurnTokensResponse {
    return {};
  },

  toJSON(_: CreateBurnTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBurnTokensResponse>, I>>(_: I): CreateBurnTokensResponse {
    const message = createBaseCreateBurnTokensResponse();
    return message;
  },
};

function createBaseCreateDeployTokenRequest(): CreateDeployTokenRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    asset: undefined,
    tokenDetails: undefined,
    address: new Uint8Array(),
    dailyMintLimit: "",
  };
}

export const CreateDeployTokenRequest = {
  encode(message: CreateDeployTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenDetails !== undefined) {
      TokenDetails.encode(message.tokenDetails, writer.uint32(34).fork()).ldelim();
    }
    if (message.address.length !== 0) {
      writer.uint32(50).bytes(message.address);
    }
    if (message.dailyMintLimit !== "") {
      writer.uint32(58).string(message.dailyMintLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeployTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDeployTokenRequest();
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
        case 4:
          message.tokenDetails = TokenDetails.decode(reader, reader.uint32());
          break;
        case 6:
          message.address = reader.bytes();
          break;
        case 7:
          message.dailyMintLimit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDeployTokenRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      tokenDetails: isSet(object.tokenDetails) ? TokenDetails.fromJSON(object.tokenDetails) : undefined,
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      dailyMintLimit: isSet(object.dailyMintLimit) ? String(object.dailyMintLimit) : "",
    };
  },

  toJSON(message: CreateDeployTokenRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.tokenDetails !== undefined &&
      (obj.tokenDetails = message.tokenDetails ? TokenDetails.toJSON(message.tokenDetails) : undefined);
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.dailyMintLimit !== undefined && (obj.dailyMintLimit = message.dailyMintLimit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDeployTokenRequest>, I>>(
    object: I,
  ): CreateDeployTokenRequest {
    const message = createBaseCreateDeployTokenRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.asset =
      object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.tokenDetails =
      object.tokenDetails !== undefined && object.tokenDetails !== null
        ? TokenDetails.fromPartial(object.tokenDetails)
        : undefined;
    message.address = object.address ?? new Uint8Array();
    message.dailyMintLimit = object.dailyMintLimit ?? "";
    return message;
  },
};

function createBaseCreateDeployTokenResponse(): CreateDeployTokenResponse {
  return {};
}

export const CreateDeployTokenResponse = {
  encode(_: CreateDeployTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeployTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDeployTokenResponse();
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

  fromJSON(_: any): CreateDeployTokenResponse {
    return {};
  },

  toJSON(_: CreateDeployTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDeployTokenResponse>, I>>(_: I): CreateDeployTokenResponse {
    const message = createBaseCreateDeployTokenResponse();
    return message;
  },
};

function createBaseCreatePendingTransfersRequest(): CreatePendingTransfersRequest {
  return { sender: new Uint8Array(), chain: "" };
}

export const CreatePendingTransfersRequest = {
  encode(message: CreatePendingTransfersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePendingTransfersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePendingTransfersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePendingTransfersRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: CreatePendingTransfersRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePendingTransfersRequest>, I>>(
    object: I,
  ): CreatePendingTransfersRequest {
    const message = createBaseCreatePendingTransfersRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    return message;
  },
};

function createBaseCreatePendingTransfersResponse(): CreatePendingTransfersResponse {
  return {};
}

export const CreatePendingTransfersResponse = {
  encode(_: CreatePendingTransfersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePendingTransfersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePendingTransfersResponse();
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

  fromJSON(_: any): CreatePendingTransfersResponse {
    return {};
  },

  toJSON(_: CreatePendingTransfersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePendingTransfersResponse>, I>>(
    _: I,
  ): CreatePendingTransfersResponse {
    const message = createBaseCreatePendingTransfersResponse();
    return message;
  },
};

function createBaseCreateTransferOwnershipRequest(): CreateTransferOwnershipRequest {
  return { sender: new Uint8Array(), chain: "", keyId: "" };
}

export const CreateTransferOwnershipRequest = {
  encode(message: CreateTransferOwnershipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOwnershipRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransferOwnershipRequest();
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
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTransferOwnershipRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: CreateTransferOwnershipRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTransferOwnershipRequest>, I>>(
    object: I,
  ): CreateTransferOwnershipRequest {
    const message = createBaseCreateTransferOwnershipRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseCreateTransferOwnershipResponse(): CreateTransferOwnershipResponse {
  return {};
}

export const CreateTransferOwnershipResponse = {
  encode(_: CreateTransferOwnershipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOwnershipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransferOwnershipResponse();
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

  fromJSON(_: any): CreateTransferOwnershipResponse {
    return {};
  },

  toJSON(_: CreateTransferOwnershipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTransferOwnershipResponse>, I>>(
    _: I,
  ): CreateTransferOwnershipResponse {
    const message = createBaseCreateTransferOwnershipResponse();
    return message;
  },
};

function createBaseCreateTransferOperatorshipRequest(): CreateTransferOperatorshipRequest {
  return { sender: new Uint8Array(), chain: "", keyId: "" };
}

export const CreateTransferOperatorshipRequest = {
  encode(message: CreateTransferOperatorshipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOperatorshipRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransferOperatorshipRequest();
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
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTransferOperatorshipRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: CreateTransferOperatorshipRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTransferOperatorshipRequest>, I>>(
    object: I,
  ): CreateTransferOperatorshipRequest {
    const message = createBaseCreateTransferOperatorshipRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseCreateTransferOperatorshipResponse(): CreateTransferOperatorshipResponse {
  return {};
}

export const CreateTransferOperatorshipResponse = {
  encode(_: CreateTransferOperatorshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOperatorshipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransferOperatorshipResponse();
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

  fromJSON(_: any): CreateTransferOperatorshipResponse {
    return {};
  },

  toJSON(_: CreateTransferOperatorshipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTransferOperatorshipResponse>, I>>(
    _: I,
  ): CreateTransferOperatorshipResponse {
    const message = createBaseCreateTransferOperatorshipResponse();
    return message;
  },
};

function createBaseSignCommandsRequest(): SignCommandsRequest {
  return { sender: new Uint8Array(), chain: "" };
}

export const SignCommandsRequest = {
  encode(message: SignCommandsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignCommandsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignCommandsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignCommandsRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: SignCommandsRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignCommandsRequest>, I>>(object: I): SignCommandsRequest {
    const message = createBaseSignCommandsRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    return message;
  },
};

function createBaseSignCommandsResponse(): SignCommandsResponse {
  return { batchedCommandsId: new Uint8Array(), commandCount: 0 };
}

export const SignCommandsResponse = {
  encode(message: SignCommandsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchedCommandsId.length !== 0) {
      writer.uint32(10).bytes(message.batchedCommandsId);
    }
    if (message.commandCount !== 0) {
      writer.uint32(16).uint32(message.commandCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignCommandsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignCommandsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchedCommandsId = reader.bytes();
          break;
        case 2:
          message.commandCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignCommandsResponse {
    return {
      batchedCommandsId: isSet(object.batchedCommandsId)
        ? bytesFromBase64(object.batchedCommandsId)
        : new Uint8Array(),
      commandCount: isSet(object.commandCount) ? Number(object.commandCount) : 0,
    };
  },

  toJSON(message: SignCommandsResponse): unknown {
    const obj: any = {};
    message.batchedCommandsId !== undefined &&
      (obj.batchedCommandsId = base64FromBytes(
        message.batchedCommandsId !== undefined ? message.batchedCommandsId : new Uint8Array(),
      ));
    message.commandCount !== undefined && (obj.commandCount = Math.round(message.commandCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignCommandsResponse>, I>>(object: I): SignCommandsResponse {
    const message = createBaseSignCommandsResponse();
    message.batchedCommandsId = object.batchedCommandsId ?? new Uint8Array();
    message.commandCount = object.commandCount ?? 0;
    return message;
  },
};

function createBaseAddChainRequest(): AddChainRequest {
  return { sender: new Uint8Array(), name: "", keyType: 0, params: new Uint8Array() };
}

export const AddChainRequest = {
  encode(message: AddChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.keyType !== 0) {
      writer.uint32(32).int32(message.keyType);
    }
    if (message.params.length !== 0) {
      writer.uint32(42).bytes(message.params);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddChainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 4:
          message.keyType = reader.int32() as any;
          break;
        case 5:
          message.params = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddChainRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      name: isSet(object.name) ? String(object.name) : "",
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : 0,
      params: isSet(object.params) ? bytesFromBase64(object.params) : new Uint8Array(),
    };
  },

  toJSON(message: AddChainRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.name !== undefined && (obj.name = message.name);
    message.keyType !== undefined && (obj.keyType = keyTypeToJSON(message.keyType));
    message.params !== undefined &&
      (obj.params = base64FromBytes(message.params !== undefined ? message.params : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddChainRequest>, I>>(object: I): AddChainRequest {
    const message = createBaseAddChainRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.name = object.name ?? "";
    message.keyType = object.keyType ?? 0;
    message.params = object.params ?? new Uint8Array();
    return message;
  },
};

function createBaseAddChainResponse(): AddChainResponse {
  return {};
}

export const AddChainResponse = {
  encode(_: AddChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddChainResponse();
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

  fromJSON(_: any): AddChainResponse {
    return {};
  },

  toJSON(_: AddChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddChainResponse>, I>>(_: I): AddChainResponse {
    const message = createBaseAddChainResponse();
    return message;
  },
};

function createBaseRetryFailedEventRequest(): RetryFailedEventRequest {
  return { sender: new Uint8Array(), chain: "", eventId: "" };
}

export const RetryFailedEventRequest = {
  encode(message: RetryFailedEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(26).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetryFailedEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetryFailedEventRequest();
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
          message.eventId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RetryFailedEventRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
    };
  },

  toJSON(message: RetryFailedEventRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RetryFailedEventRequest>, I>>(object: I): RetryFailedEventRequest {
    const message = createBaseRetryFailedEventRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseRetryFailedEventResponse(): RetryFailedEventResponse {
  return {};
}

export const RetryFailedEventResponse = {
  encode(_: RetryFailedEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetryFailedEventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetryFailedEventResponse();
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

  fromJSON(_: any): RetryFailedEventResponse {
    return {};
  },

  toJSON(_: RetryFailedEventResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RetryFailedEventResponse>, I>>(_: I): RetryFailedEventResponse {
    const message = createBaseRetryFailedEventResponse();
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
