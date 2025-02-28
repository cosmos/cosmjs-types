/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/nexus/v1beta1/params";
import {
  TransferFee,
  Chain,
  CrossChainTransfer,
  FeeInfo,
  GeneralMessage,
} from "../../../axelar/nexus/exported/v1beta1/types";
import { ChainState, LinkedAddresses, RateLimit, TransferEpoch } from "../../../axelar/nexus/v1beta1/types";

export const protobufPackage = "axelar.nexus.v1beta1";

/** GenesisState represents the genesis state */
export interface GenesisState {
  params?: Params;
  nonce: Long;
  chains: Chain[];
  chainStates: ChainState[];
  linkedAddresses: LinkedAddresses[];
  transfers: CrossChainTransfer[];
  fee?: TransferFee;
  feeInfos: FeeInfo[];
  rateLimits: RateLimit[];
  transferEpochs: TransferEpoch[];
  messages: GeneralMessage[];
  messageNonce: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    nonce: Long.UZERO,
    chains: [],
    chainStates: [],
    linkedAddresses: [],
    transfers: [],
    fee: undefined,
    feeInfos: [],
    rateLimits: [],
    transferEpochs: [],
    messages: [],
    messageNonce: Long.UZERO,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    for (const v of message.chains) {
      Chain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.chainStates) {
      ChainState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.linkedAddresses) {
      LinkedAddresses.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.transfers) {
      CrossChainTransfer.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      TransferFee.encode(message.fee, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.feeInfos) {
      FeeInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.transferEpochs) {
      TransferEpoch.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.messages) {
      GeneralMessage.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (!message.messageNonce.isZero()) {
      writer.uint32(96).uint64(message.messageNonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonce = reader.uint64() as Long;
          break;
        case 3:
          message.chains.push(Chain.decode(reader, reader.uint32()));
          break;
        case 4:
          message.chainStates.push(ChainState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.linkedAddresses.push(LinkedAddresses.decode(reader, reader.uint32()));
          break;
        case 6:
          message.transfers.push(CrossChainTransfer.decode(reader, reader.uint32()));
          break;
        case 7:
          message.fee = TransferFee.decode(reader, reader.uint32());
          break;
        case 8:
          message.feeInfos.push(FeeInfo.decode(reader, reader.uint32()));
          break;
        case 9:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        case 10:
          message.transferEpochs.push(TransferEpoch.decode(reader, reader.uint32()));
          break;
        case 11:
          message.messages.push(GeneralMessage.decode(reader, reader.uint32()));
          break;
        case 12:
          message.messageNonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => Chain.fromJSON(e)) : [],
      chainStates: Array.isArray(object?.chainStates)
        ? object.chainStates.map((e: any) => ChainState.fromJSON(e))
        : [],
      linkedAddresses: Array.isArray(object?.linkedAddresses)
        ? object.linkedAddresses.map((e: any) => LinkedAddresses.fromJSON(e))
        : [],
      transfers: Array.isArray(object?.transfers)
        ? object.transfers.map((e: any) => CrossChainTransfer.fromJSON(e))
        : [],
      fee: isSet(object.fee) ? TransferFee.fromJSON(object.fee) : undefined,
      feeInfos: Array.isArray(object?.feeInfos) ? object.feeInfos.map((e: any) => FeeInfo.fromJSON(e)) : [],
      rateLimits: Array.isArray(object?.rateLimits)
        ? object.rateLimits.map((e: any) => RateLimit.fromJSON(e))
        : [],
      transferEpochs: Array.isArray(object?.transferEpochs)
        ? object.transferEpochs.map((e: any) => TransferEpoch.fromJSON(e))
        : [],
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => GeneralMessage.fromJSON(e))
        : [],
      messageNonce: isSet(object.messageNonce) ? Long.fromValue(object.messageNonce) : Long.UZERO,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    if (message.chains) {
      obj.chains = message.chains.map((e) => (e ? Chain.toJSON(e) : undefined));
    } else {
      obj.chains = [];
    }
    if (message.chainStates) {
      obj.chainStates = message.chainStates.map((e) => (e ? ChainState.toJSON(e) : undefined));
    } else {
      obj.chainStates = [];
    }
    if (message.linkedAddresses) {
      obj.linkedAddresses = message.linkedAddresses.map((e) => (e ? LinkedAddresses.toJSON(e) : undefined));
    } else {
      obj.linkedAddresses = [];
    }
    if (message.transfers) {
      obj.transfers = message.transfers.map((e) => (e ? CrossChainTransfer.toJSON(e) : undefined));
    } else {
      obj.transfers = [];
    }
    message.fee !== undefined && (obj.fee = message.fee ? TransferFee.toJSON(message.fee) : undefined);
    if (message.feeInfos) {
      obj.feeInfos = message.feeInfos.map((e) => (e ? FeeInfo.toJSON(e) : undefined));
    } else {
      obj.feeInfos = [];
    }
    if (message.rateLimits) {
      obj.rateLimits = message.rateLimits.map((e) => (e ? RateLimit.toJSON(e) : undefined));
    } else {
      obj.rateLimits = [];
    }
    if (message.transferEpochs) {
      obj.transferEpochs = message.transferEpochs.map((e) => (e ? TransferEpoch.toJSON(e) : undefined));
    } else {
      obj.transferEpochs = [];
    }
    if (message.messages) {
      obj.messages = message.messages.map((e) => (e ? GeneralMessage.toJSON(e) : undefined));
    } else {
      obj.messages = [];
    }
    message.messageNonce !== undefined &&
      (obj.messageNonce = (message.messageNonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.chains = object.chains?.map((e) => Chain.fromPartial(e)) || [];
    message.chainStates = object.chainStates?.map((e) => ChainState.fromPartial(e)) || [];
    message.linkedAddresses = object.linkedAddresses?.map((e) => LinkedAddresses.fromPartial(e)) || [];
    message.transfers = object.transfers?.map((e) => CrossChainTransfer.fromPartial(e)) || [];
    message.fee =
      object.fee !== undefined && object.fee !== null ? TransferFee.fromPartial(object.fee) : undefined;
    message.feeInfos = object.feeInfos?.map((e) => FeeInfo.fromPartial(e)) || [];
    message.rateLimits = object.rateLimits?.map((e) => RateLimit.fromPartial(e)) || [];
    message.transferEpochs = object.transferEpochs?.map((e) => TransferEpoch.fromPartial(e)) || [];
    message.messages = object.messages?.map((e) => GeneralMessage.fromPartial(e)) || [];
    message.messageNonce =
      object.messageNonce !== undefined && object.messageNonce !== null
        ? Long.fromValue(object.messageNonce)
        : Long.UZERO;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
