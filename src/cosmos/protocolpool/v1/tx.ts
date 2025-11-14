/* eslint-disable */
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.protocolpool.v1";
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
  depositor: string;
  amount: Coin[];
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 */
export interface MsgCommunityPoolSpend {
  /** Authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  recipient: string;
  amount: Coin[];
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 */
export interface MsgCommunityPoolSpendResponse {}
/** MsgCreateContinuousFund defines a message for adding continuous funds. */
export interface MsgCreateContinuousFund {
  /** Authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** Recipient address of the account receiving funds. */
  recipient: string;
  /** Percentage is the percentage of funds to be allocated from Community pool. */
  percentage: string;
  /** Optional, if expiry is set, removes the state object when expired. */
  expiry?: Timestamp;
}
/**
 * MsgCreateContinuousFundResponse defines the response to executing a
 * MsgCreateContinuousFund message.
 */
export interface MsgCreateContinuousFundResponse {}
/** MsgCancelContinuousFund defines a message to cancel continuous funds for a specific recipient. */
export interface MsgCancelContinuousFund {
  /** Authority is the account address of authority. */
  authority: string;
  /** Recipient is the account address string of the recipient whose funds are to be cancelled. */
  recipient: string;
}
/**
 * MsgCancelContinuousFundResponse defines the response to executing a
 * MsgCancelContinuousFund message.
 */
export interface MsgCancelContinuousFundResponse {
  /** CanceledTime is the canceled time. */
  canceledTime: Timestamp;
  /** CanceledHeight defines the canceled block height. */
  canceledHeight: bigint;
  /** Recipient is the account address string of the recipient whose funds are cancelled. */
  recipient: string;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/protocolpool parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
function createBaseMsgFundCommunityPool(): MsgFundCommunityPool {
  return {
    depositor: "",
    amount: [],
  };
}
export const MsgFundCommunityPool = {
  typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
  encode(message: MsgFundCommunityPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFundCommunityPool {
    const obj = createBaseMsgFundCommunityPool();
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgFundCommunityPool): JsonSafe<MsgFundCommunityPool> {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPool>, I>>(object: I): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgFundCommunityPoolResponse(): MsgFundCommunityPoolResponse {
  return {};
}
export const MsgFundCommunityPoolResponse = {
  typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPoolResponse",
  encode(_: MsgFundCommunityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPoolResponse();
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
  fromJSON(_: any): MsgFundCommunityPoolResponse {
    const obj = createBaseMsgFundCommunityPoolResponse();
    return obj;
  },
  toJSON(_: MsgFundCommunityPoolResponse): JsonSafe<MsgFundCommunityPoolResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPoolResponse>, I>>(
    _: I,
  ): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },
};
function createBaseMsgCommunityPoolSpend(): MsgCommunityPoolSpend {
  return {
    authority: "",
    recipient: "",
    amount: [],
  };
}
export const MsgCommunityPoolSpend = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
  encode(message: MsgCommunityPoolSpend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommunityPoolSpend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommunityPoolSpend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCommunityPoolSpend {
    const obj = createBaseMsgCommunityPoolSpend();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgCommunityPoolSpend): JsonSafe<MsgCommunityPoolSpend> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCommunityPoolSpend>, I>>(object: I): MsgCommunityPoolSpend {
    const message = createBaseMsgCommunityPoolSpend();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgCommunityPoolSpendResponse(): MsgCommunityPoolSpendResponse {
  return {};
}
export const MsgCommunityPoolSpendResponse = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpendResponse",
  encode(_: MsgCommunityPoolSpendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommunityPoolSpendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommunityPoolSpendResponse();
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
  fromJSON(_: any): MsgCommunityPoolSpendResponse {
    const obj = createBaseMsgCommunityPoolSpendResponse();
    return obj;
  },
  toJSON(_: MsgCommunityPoolSpendResponse): JsonSafe<MsgCommunityPoolSpendResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCommunityPoolSpendResponse>, I>>(
    _: I,
  ): MsgCommunityPoolSpendResponse {
    const message = createBaseMsgCommunityPoolSpendResponse();
    return message;
  },
};
function createBaseMsgCreateContinuousFund(): MsgCreateContinuousFund {
  return {
    authority: "",
    recipient: "",
    percentage: "",
    expiry: undefined,
  };
}
export const MsgCreateContinuousFund = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
  encode(message: MsgCreateContinuousFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.percentage !== "") {
      writer.uint32(26).string(message.percentage);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(message.expiry, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateContinuousFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateContinuousFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.percentage = reader.string();
          break;
        case 4:
          message.expiry = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateContinuousFund {
    const obj = createBaseMsgCreateContinuousFund();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    if (isSet(object.percentage)) obj.percentage = String(object.percentage);
    if (isSet(object.expiry)) obj.expiry = fromJsonTimestamp(object.expiry);
    return obj;
  },
  toJSON(message: MsgCreateContinuousFund): JsonSafe<MsgCreateContinuousFund> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.expiry !== undefined && (obj.expiry = fromTimestamp(message.expiry).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateContinuousFund>, I>>(object: I): MsgCreateContinuousFund {
    const message = createBaseMsgCreateContinuousFund();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.percentage = object.percentage ?? "";
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = Timestamp.fromPartial(object.expiry);
    }
    return message;
  },
};
function createBaseMsgCreateContinuousFundResponse(): MsgCreateContinuousFundResponse {
  return {};
}
export const MsgCreateContinuousFundResponse = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFundResponse",
  encode(_: MsgCreateContinuousFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateContinuousFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateContinuousFundResponse();
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
  fromJSON(_: any): MsgCreateContinuousFundResponse {
    const obj = createBaseMsgCreateContinuousFundResponse();
    return obj;
  },
  toJSON(_: MsgCreateContinuousFundResponse): JsonSafe<MsgCreateContinuousFundResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateContinuousFundResponse>, I>>(
    _: I,
  ): MsgCreateContinuousFundResponse {
    const message = createBaseMsgCreateContinuousFundResponse();
    return message;
  },
};
function createBaseMsgCancelContinuousFund(): MsgCancelContinuousFund {
  return {
    authority: "",
    recipient: "",
  };
}
export const MsgCancelContinuousFund = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
  encode(message: MsgCancelContinuousFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelContinuousFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelContinuousFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelContinuousFund {
    const obj = createBaseMsgCancelContinuousFund();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    return obj;
  },
  toJSON(message: MsgCancelContinuousFund): JsonSafe<MsgCancelContinuousFund> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelContinuousFund>, I>>(object: I): MsgCancelContinuousFund {
    const message = createBaseMsgCancelContinuousFund();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};
function createBaseMsgCancelContinuousFundResponse(): MsgCancelContinuousFundResponse {
  return {
    canceledTime: Timestamp.fromPartial({}),
    canceledHeight: BigInt(0),
    recipient: "",
  };
}
export const MsgCancelContinuousFundResponse = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFundResponse",
  encode(
    message: MsgCancelContinuousFundResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.canceledTime !== undefined) {
      Timestamp.encode(message.canceledTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.canceledHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.canceledHeight);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelContinuousFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelContinuousFundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.canceledTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.canceledHeight = reader.uint64();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelContinuousFundResponse {
    const obj = createBaseMsgCancelContinuousFundResponse();
    if (isSet(object.canceledTime)) obj.canceledTime = fromJsonTimestamp(object.canceledTime);
    if (isSet(object.canceledHeight)) obj.canceledHeight = BigInt(object.canceledHeight.toString());
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    return obj;
  },
  toJSON(message: MsgCancelContinuousFundResponse): JsonSafe<MsgCancelContinuousFundResponse> {
    const obj: any = {};
    message.canceledTime !== undefined &&
      (obj.canceledTime = fromTimestamp(message.canceledTime).toISOString());
    message.canceledHeight !== undefined &&
      (obj.canceledHeight = (message.canceledHeight || BigInt(0)).toString());
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelContinuousFundResponse>, I>>(
    object: I,
  ): MsgCancelContinuousFundResponse {
    const message = createBaseMsgCancelContinuousFundResponse();
    if (object.canceledTime !== undefined && object.canceledTime !== null) {
      message.canceledTime = Timestamp.fromPartial(object.canceledTime);
    }
    if (object.canceledHeight !== undefined && object.canceledHeight !== null) {
      message.canceledHeight = BigInt(object.canceledHeight.toString());
    }
    message.recipient = object.recipient ?? "";
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
/** Msg defines the pool Msg service. */
export interface Msg {
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
  /**
   * CommunityPoolSpend defines a governance operation for sending tokens from
   * the community pool in the x/protocolpool module to another account, which
   * could be the governance module itself. The authority is defined in the
   * keeper.
   */
  CommunityPoolSpend(request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse>;
  /**
   * CreateContinuousFund defines a method to distribute a percentage of funds to an address continuously.
   * This ContinuousFund can be indefinite or run until a given expiry time.
   * Funds come from validator block rewards from x/distribution, but may also come from
   * any user who funds the ProtocolPoolEscrow module account directly through x/bank.
   */
  CreateContinuousFund(request: MsgCreateContinuousFund): Promise<MsgCreateContinuousFundResponse>;
  /** CancelContinuousFund defines a method for cancelling continuous fund. */
  CancelContinuousFund(request: MsgCancelContinuousFund): Promise<MsgCancelContinuousFundResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/protocolpool module parameters.
   * The authority is defined in the keeper.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FundCommunityPool = this.FundCommunityPool.bind(this);
    this.CommunityPoolSpend = this.CommunityPoolSpend.bind(this);
    this.CreateContinuousFund = this.CreateContinuousFund.bind(this);
    this.CancelContinuousFund = this.CancelContinuousFund.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse> {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Msg", "FundCommunityPool", data);
    return promise.then((data) => MsgFundCommunityPoolResponse.decode(new BinaryReader(data)));
  }
  CommunityPoolSpend(request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse> {
    const data = MsgCommunityPoolSpend.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Msg", "CommunityPoolSpend", data);
    return promise.then((data) => MsgCommunityPoolSpendResponse.decode(new BinaryReader(data)));
  }
  CreateContinuousFund(request: MsgCreateContinuousFund): Promise<MsgCreateContinuousFundResponse> {
    const data = MsgCreateContinuousFund.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Msg", "CreateContinuousFund", data);
    return promise.then((data) => MsgCreateContinuousFundResponse.decode(new BinaryReader(data)));
  }
  CancelContinuousFund(request: MsgCancelContinuousFund): Promise<MsgCancelContinuousFundResponse> {
    const data = MsgCancelContinuousFund.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Msg", "CancelContinuousFund", data);
    return promise.then((data) => MsgCancelContinuousFundResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
