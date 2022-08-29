/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "axelar.evm.v1beta1";

export enum Status {
  /**
   * STATUS_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
   * be powers of 2
   */
  STATUS_UNSPECIFIED = 0,
  STATUS_INITIALIZED = 1,
  STATUS_PENDING = 2,
  STATUS_CONFIRMED = 4,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_INITIALIZED":
      return Status.STATUS_INITIALIZED;
    case 2:
    case "STATUS_PENDING":
      return Status.STATUS_PENDING;
    case 4:
    case "STATUS_CONFIRMED":
      return Status.STATUS_CONFIRMED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Status.STATUS_INITIALIZED:
      return "STATUS_INITIALIZED";
    case Status.STATUS_PENDING:
      return "STATUS_PENDING";
    case Status.STATUS_CONFIRMED:
      return "STATUS_CONFIRMED";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BatchedCommandsStatus {
  BATCHED_COMMANDS_STATUS_UNSPECIFIED = 0,
  BATCHED_COMMANDS_STATUS_SIGNING = 1,
  BATCHED_COMMANDS_STATUS_ABORTED = 2,
  BATCHED_COMMANDS_STATUS_SIGNED = 3,
  UNRECOGNIZED = -1,
}

export function batchedCommandsStatusFromJSON(object: any): BatchedCommandsStatus {
  switch (object) {
    case 0:
    case "BATCHED_COMMANDS_STATUS_UNSPECIFIED":
      return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_UNSPECIFIED;
    case 1:
    case "BATCHED_COMMANDS_STATUS_SIGNING":
      return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNING;
    case 2:
    case "BATCHED_COMMANDS_STATUS_ABORTED":
      return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_ABORTED;
    case 3:
    case "BATCHED_COMMANDS_STATUS_SIGNED":
      return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BatchedCommandsStatus.UNRECOGNIZED;
  }
}

export function batchedCommandsStatusToJSON(object: BatchedCommandsStatus): string {
  switch (object) {
    case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_UNSPECIFIED:
      return "BATCHED_COMMANDS_STATUS_UNSPECIFIED";
    case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNING:
      return "BATCHED_COMMANDS_STATUS_SIGNING";
    case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_ABORTED:
      return "BATCHED_COMMANDS_STATUS_ABORTED";
    case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNED:
      return "BATCHED_COMMANDS_STATUS_SIGNED";
    case BatchedCommandsStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SigType {
  SIG_TYPE_UNSPECIFIED = 0,
  SIG_TYPE_TX = 1,
  SIG_TYPE_COMMAND = 2,
  UNRECOGNIZED = -1,
}

export function sigTypeFromJSON(object: any): SigType {
  switch (object) {
    case 0:
    case "SIG_TYPE_UNSPECIFIED":
      return SigType.SIG_TYPE_UNSPECIFIED;
    case 1:
    case "SIG_TYPE_TX":
      return SigType.SIG_TYPE_TX;
    case 2:
    case "SIG_TYPE_COMMAND":
      return SigType.SIG_TYPE_COMMAND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SigType.UNRECOGNIZED;
  }
}

export function sigTypeToJSON(object: SigType): string {
  switch (object) {
    case SigType.SIG_TYPE_UNSPECIFIED:
      return "SIG_TYPE_UNSPECIFIED";
    case SigType.SIG_TYPE_TX:
      return "SIG_TYPE_TX";
    case SigType.SIG_TYPE_COMMAND:
      return "SIG_TYPE_COMMAND";
    case SigType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DepositStatus {
  DEPOSIT_STATUS_UNSPECIFIED = 0,
  DEPOSIT_STATUS_PENDING = 1,
  DEPOSIT_STATUS_CONFIRMED = 2,
  DEPOSIT_STATUS_BURNED = 3,
  UNRECOGNIZED = -1,
}

export function depositStatusFromJSON(object: any): DepositStatus {
  switch (object) {
    case 0:
    case "DEPOSIT_STATUS_UNSPECIFIED":
      return DepositStatus.DEPOSIT_STATUS_UNSPECIFIED;
    case 1:
    case "DEPOSIT_STATUS_PENDING":
      return DepositStatus.DEPOSIT_STATUS_PENDING;
    case 2:
    case "DEPOSIT_STATUS_CONFIRMED":
      return DepositStatus.DEPOSIT_STATUS_CONFIRMED;
    case 3:
    case "DEPOSIT_STATUS_BURNED":
      return DepositStatus.DEPOSIT_STATUS_BURNED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositStatus.UNRECOGNIZED;
  }
}

export function depositStatusToJSON(object: DepositStatus): string {
  switch (object) {
    case DepositStatus.DEPOSIT_STATUS_UNSPECIFIED:
      return "DEPOSIT_STATUS_UNSPECIFIED";
    case DepositStatus.DEPOSIT_STATUS_PENDING:
      return "DEPOSIT_STATUS_PENDING";
    case DepositStatus.DEPOSIT_STATUS_CONFIRMED:
      return "DEPOSIT_STATUS_CONFIRMED";
    case DepositStatus.DEPOSIT_STATUS_BURNED:
      return "DEPOSIT_STATUS_BURNED";
    case DepositStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface VoteEvents {
  chain: string;
  events: Event[];
}

export interface Event {
  chain: string;
  txId: Uint8Array;
  index: Long;
  status: Event_Status;
  tokenSent?: EventTokenSent | undefined;
  contractCall?: EventContractCall | undefined;
  contractCallWithToken?: EventContractCallWithToken | undefined;
  transfer?: EventTransfer | undefined;
  tokenDeployed?: EventTokenDeployed | undefined;
  /** @deprecated */
  multisigOwnershipTransferred?: EventMultisigOwnershipTransferred | undefined;
  multisigOperatorshipTransferred?: EventMultisigOperatorshipTransferred | undefined;
}

export enum Event_Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_CONFIRMED = 1,
  STATUS_COMPLETED = 2,
  STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}

export function event_StatusFromJSON(object: any): Event_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Event_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_CONFIRMED":
      return Event_Status.STATUS_CONFIRMED;
    case 2:
    case "STATUS_COMPLETED":
      return Event_Status.STATUS_COMPLETED;
    case 3:
    case "STATUS_FAILED":
      return Event_Status.STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Event_Status.UNRECOGNIZED;
  }
}

export function event_StatusToJSON(object: Event_Status): string {
  switch (object) {
    case Event_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Event_Status.STATUS_CONFIRMED:
      return "STATUS_CONFIRMED";
    case Event_Status.STATUS_COMPLETED:
      return "STATUS_COMPLETED";
    case Event_Status.STATUS_FAILED:
      return "STATUS_FAILED";
    case Event_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EventTokenSent {
  sender: Uint8Array;
  destinationChain: string;
  destinationAddress: string;
  symbol: string;
  amount: Uint8Array;
}

export interface EventContractCall {
  sender: Uint8Array;
  destinationChain: string;
  contractAddress: string;
  payloadHash: Uint8Array;
}

export interface EventContractCallWithToken {
  sender: Uint8Array;
  destinationChain: string;
  contractAddress: string;
  payloadHash: Uint8Array;
  symbol: string;
  amount: Uint8Array;
}

export interface EventTransfer {
  to: Uint8Array;
  amount: Uint8Array;
}

export interface EventTokenDeployed {
  symbol: string;
  tokenAddress: Uint8Array;
}

/** @deprecated */
export interface EventMultisigOwnershipTransferred {
  preOwners: Uint8Array[];
  prevThreshold: Uint8Array;
  newOwners: Uint8Array[];
  newThreshold: Uint8Array;
}

export interface EventMultisigOperatorshipTransferred {
  newOperators: Uint8Array[];
  newThreshold: Uint8Array;
  newWeights: Uint8Array[];
}

/** NetworkInfo describes information about a network */
export interface NetworkInfo {
  name: string;
  id: Uint8Array;
}

/**
 * BurnerInfo describes information required to burn token at an burner address
 * that is deposited by an user
 */
export interface BurnerInfo {
  burnerAddress: Uint8Array;
  tokenAddress: Uint8Array;
  destinationChain: string;
  symbol: string;
  asset: string;
  salt: Uint8Array;
}

/** ERC20Deposit contains information for an ERC20 deposit */
export interface ERC20Deposit {
  txId: Uint8Array;
  amount: Uint8Array;
  asset: string;
  destinationChain: string;
  burnerAddress: Uint8Array;
}

/** ERC20TokenMetadata describes information about an ERC20 token */
export interface ERC20TokenMetadata {
  asset: string;
  chainId: Uint8Array;
  details?: TokenDetails;
  tokenAddress: string;
  txHash: string;
  status: Status;
  isExternal: boolean;
  burnerCode: Uint8Array;
}

export interface TransactionMetadata {
  rawTx: Uint8Array;
  pubKey: Uint8Array;
}

export interface Command {
  id: Uint8Array;
  command: string;
  params: Uint8Array;
  keyId: string;
  maxGasCost: number;
}

export interface CommandBatchMetadata {
  id: Uint8Array;
  commandIds: Uint8Array[];
  data: Uint8Array;
  sigHash: Uint8Array;
  status: BatchedCommandsStatus;
  keyId: string;
  prevBatchedCommandsId: Uint8Array;
  signature?: Any;
}

/**
 * SigMetadata stores necessary information for external apps to map signature
 * results to evm relay transaction types
 */
export interface SigMetadata {
  type: SigType;
  chain: string;
  commandBatchId: Uint8Array;
}

/** TransferKey contains information for a transfer operatorship */
export interface TransferKey {
  txId: Uint8Array;
  nextKeyId: string;
}

export interface Asset {
  chain: string;
  name: string;
}

export interface TokenDetails {
  tokenName: string;
  symbol: string;
  decimals: number;
  capacity: Uint8Array;
}

export interface Gateway {
  address: Uint8Array;
  /** @deprecated */
  status: Gateway_Status;
}

export enum Gateway_Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_PENDING = 1,
  STATUS_CONFIRMED = 2,
  UNRECOGNIZED = -1,
}

export function gateway_StatusFromJSON(object: any): Gateway_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Gateway_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_PENDING":
      return Gateway_Status.STATUS_PENDING;
    case 2:
    case "STATUS_CONFIRMED":
      return Gateway_Status.STATUS_CONFIRMED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Gateway_Status.UNRECOGNIZED;
  }
}

export function gateway_StatusToJSON(object: Gateway_Status): string {
  switch (object) {
    case Gateway_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Gateway_Status.STATUS_PENDING:
      return "STATUS_PENDING";
    case Gateway_Status.STATUS_CONFIRMED:
      return "STATUS_CONFIRMED";
    case Gateway_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PollMetadata {
  chain: string;
  txId: Uint8Array;
}

function createBaseVoteEvents(): VoteEvents {
  return { chain: "", events: [] };
}

export const VoteEvents = {
  encode(message: VoteEvents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteEvents {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteEvents {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
    };
  },

  toJSON(message: VoteEvents): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteEvents>, I>>(object: I): VoteEvents {
    const message = createBaseVoteEvents();
    message.chain = object.chain ?? "";
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEvent(): Event {
  return {
    chain: "",
    txId: new Uint8Array(),
    index: Long.UZERO,
    status: 0,
    tokenSent: undefined,
    contractCall: undefined,
    contractCallWithToken: undefined,
    transfer: undefined,
    tokenDeployed: undefined,
    multisigOwnershipTransferred: undefined,
    multisigOperatorshipTransferred: undefined,
  };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(18).bytes(message.txId);
    }
    if (!message.index.isZero()) {
      writer.uint32(24).uint64(message.index);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokenSent !== undefined) {
      EventTokenSent.encode(message.tokenSent, writer.uint32(42).fork()).ldelim();
    }
    if (message.contractCall !== undefined) {
      EventContractCall.encode(message.contractCall, writer.uint32(50).fork()).ldelim();
    }
    if (message.contractCallWithToken !== undefined) {
      EventContractCallWithToken.encode(message.contractCallWithToken, writer.uint32(58).fork()).ldelim();
    }
    if (message.transfer !== undefined) {
      EventTransfer.encode(message.transfer, writer.uint32(66).fork()).ldelim();
    }
    if (message.tokenDeployed !== undefined) {
      EventTokenDeployed.encode(message.tokenDeployed, writer.uint32(74).fork()).ldelim();
    }
    if (message.multisigOwnershipTransferred !== undefined) {
      EventMultisigOwnershipTransferred.encode(
        message.multisigOwnershipTransferred,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.multisigOperatorshipTransferred !== undefined) {
      EventMultisigOperatorshipTransferred.encode(
        message.multisigOperatorshipTransferred,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.txId = reader.bytes();
          break;
        case 3:
          message.index = reader.uint64() as Long;
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokenSent = EventTokenSent.decode(reader, reader.uint32());
          break;
        case 6:
          message.contractCall = EventContractCall.decode(reader, reader.uint32());
          break;
        case 7:
          message.contractCallWithToken = EventContractCallWithToken.decode(reader, reader.uint32());
          break;
        case 8:
          message.transfer = EventTransfer.decode(reader, reader.uint32());
          break;
        case 9:
          message.tokenDeployed = EventTokenDeployed.decode(reader, reader.uint32());
          break;
        case 10:
          message.multisigOwnershipTransferred = EventMultisigOwnershipTransferred.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 11:
          message.multisigOperatorshipTransferred = EventMultisigOperatorshipTransferred.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      status: isSet(object.status) ? event_StatusFromJSON(object.status) : 0,
      tokenSent: isSet(object.tokenSent) ? EventTokenSent.fromJSON(object.tokenSent) : undefined,
      contractCall: isSet(object.contractCall) ? EventContractCall.fromJSON(object.contractCall) : undefined,
      contractCallWithToken: isSet(object.contractCallWithToken)
        ? EventContractCallWithToken.fromJSON(object.contractCallWithToken)
        : undefined,
      transfer: isSet(object.transfer) ? EventTransfer.fromJSON(object.transfer) : undefined,
      tokenDeployed: isSet(object.tokenDeployed)
        ? EventTokenDeployed.fromJSON(object.tokenDeployed)
        : undefined,
      multisigOwnershipTransferred: isSet(object.multisigOwnershipTransferred)
        ? EventMultisigOwnershipTransferred.fromJSON(object.multisigOwnershipTransferred)
        : undefined,
      multisigOperatorshipTransferred: isSet(object.multisigOperatorshipTransferred)
        ? EventMultisigOperatorshipTransferred.fromJSON(object.multisigOperatorshipTransferred)
        : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    message.status !== undefined && (obj.status = event_StatusToJSON(message.status));
    message.tokenSent !== undefined &&
      (obj.tokenSent = message.tokenSent ? EventTokenSent.toJSON(message.tokenSent) : undefined);
    message.contractCall !== undefined &&
      (obj.contractCall = message.contractCall ? EventContractCall.toJSON(message.contractCall) : undefined);
    message.contractCallWithToken !== undefined &&
      (obj.contractCallWithToken = message.contractCallWithToken
        ? EventContractCallWithToken.toJSON(message.contractCallWithToken)
        : undefined);
    message.transfer !== undefined &&
      (obj.transfer = message.transfer ? EventTransfer.toJSON(message.transfer) : undefined);
    message.tokenDeployed !== undefined &&
      (obj.tokenDeployed = message.tokenDeployed
        ? EventTokenDeployed.toJSON(message.tokenDeployed)
        : undefined);
    message.multisigOwnershipTransferred !== undefined &&
      (obj.multisigOwnershipTransferred = message.multisigOwnershipTransferred
        ? EventMultisigOwnershipTransferred.toJSON(message.multisigOwnershipTransferred)
        : undefined);
    message.multisigOperatorshipTransferred !== undefined &&
      (obj.multisigOperatorshipTransferred = message.multisigOperatorshipTransferred
        ? EventMultisigOperatorshipTransferred.toJSON(message.multisigOperatorshipTransferred)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.index =
      object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.status = object.status ?? 0;
    message.tokenSent =
      object.tokenSent !== undefined && object.tokenSent !== null
        ? EventTokenSent.fromPartial(object.tokenSent)
        : undefined;
    message.contractCall =
      object.contractCall !== undefined && object.contractCall !== null
        ? EventContractCall.fromPartial(object.contractCall)
        : undefined;
    message.contractCallWithToken =
      object.contractCallWithToken !== undefined && object.contractCallWithToken !== null
        ? EventContractCallWithToken.fromPartial(object.contractCallWithToken)
        : undefined;
    message.transfer =
      object.transfer !== undefined && object.transfer !== null
        ? EventTransfer.fromPartial(object.transfer)
        : undefined;
    message.tokenDeployed =
      object.tokenDeployed !== undefined && object.tokenDeployed !== null
        ? EventTokenDeployed.fromPartial(object.tokenDeployed)
        : undefined;
    message.multisigOwnershipTransferred =
      object.multisigOwnershipTransferred !== undefined && object.multisigOwnershipTransferred !== null
        ? EventMultisigOwnershipTransferred.fromPartial(object.multisigOwnershipTransferred)
        : undefined;
    message.multisigOperatorshipTransferred =
      object.multisigOperatorshipTransferred !== undefined && object.multisigOperatorshipTransferred !== null
        ? EventMultisigOperatorshipTransferred.fromPartial(object.multisigOperatorshipTransferred)
        : undefined;
    return message;
  },
};

function createBaseEventTokenSent(): EventTokenSent {
  return {
    sender: new Uint8Array(),
    destinationChain: "",
    destinationAddress: "",
    symbol: "",
    amount: new Uint8Array(),
  };
}

export const EventTokenSent = {
  encode(message: EventTokenSent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(26).string(message.destinationAddress);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.amount.length !== 0) {
      writer.uint32(42).bytes(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenSent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTokenSent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.destinationChain = reader.string();
          break;
        case 3:
          message.destinationAddress = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.amount = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventTokenSent {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
    };
  },

  toJSON(message: EventTokenSent): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.destinationAddress !== undefined && (obj.destinationAddress = message.destinationAddress);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined &&
      (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTokenSent>, I>>(object: I): EventTokenSent {
    const message = createBaseEventTokenSent();
    message.sender = object.sender ?? new Uint8Array();
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? new Uint8Array();
    return message;
  },
};

function createBaseEventContractCall(): EventContractCall {
  return {
    sender: new Uint8Array(),
    destinationChain: "",
    contractAddress: "",
    payloadHash: new Uint8Array(),
  };
}

export const EventContractCall = {
  encode(message: EventContractCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(34).bytes(message.payloadHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventContractCall {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventContractCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.destinationChain = reader.string();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.payloadHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventContractCall {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
    };
  },

  toJSON(message: EventContractCall): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.payloadHash !== undefined &&
      (obj.payloadHash = base64FromBytes(
        message.payloadHash !== undefined ? message.payloadHash : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventContractCall>, I>>(object: I): EventContractCall {
    const message = createBaseEventContractCall();
    message.sender = object.sender ?? new Uint8Array();
    message.destinationChain = object.destinationChain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    return message;
  },
};

function createBaseEventContractCallWithToken(): EventContractCallWithToken {
  return {
    sender: new Uint8Array(),
    destinationChain: "",
    contractAddress: "",
    payloadHash: new Uint8Array(),
    symbol: "",
    amount: new Uint8Array(),
  };
}

export const EventContractCallWithToken = {
  encode(message: EventContractCallWithToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(34).bytes(message.payloadHash);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (message.amount.length !== 0) {
      writer.uint32(50).bytes(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventContractCallWithToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventContractCallWithToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.destinationChain = reader.string();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.payloadHash = reader.bytes();
          break;
        case 5:
          message.symbol = reader.string();
          break;
        case 6:
          message.amount = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventContractCallWithToken {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
    };
  },

  toJSON(message: EventContractCallWithToken): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.payloadHash !== undefined &&
      (obj.payloadHash = base64FromBytes(
        message.payloadHash !== undefined ? message.payloadHash : new Uint8Array(),
      ));
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined &&
      (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventContractCallWithToken>, I>>(
    object: I,
  ): EventContractCallWithToken {
    const message = createBaseEventContractCallWithToken();
    message.sender = object.sender ?? new Uint8Array();
    message.destinationChain = object.destinationChain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? new Uint8Array();
    return message;
  },
};

function createBaseEventTransfer(): EventTransfer {
  return { to: new Uint8Array(), amount: new Uint8Array() };
}

export const EventTransfer = {
  encode(message: EventTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to.length !== 0) {
      writer.uint32(10).bytes(message.to);
    }
    if (message.amount.length !== 0) {
      writer.uint32(18).bytes(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.to = reader.bytes();
          break;
        case 2:
          message.amount = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventTransfer {
    return {
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(),
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
    };
  },

  toJSON(message: EventTransfer): unknown {
    const obj: any = {};
    message.to !== undefined &&
      (obj.to = base64FromBytes(message.to !== undefined ? message.to : new Uint8Array()));
    message.amount !== undefined &&
      (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTransfer>, I>>(object: I): EventTransfer {
    const message = createBaseEventTransfer();
    message.to = object.to ?? new Uint8Array();
    message.amount = object.amount ?? new Uint8Array();
    return message;
  },
};

function createBaseEventTokenDeployed(): EventTokenDeployed {
  return { symbol: "", tokenAddress: new Uint8Array() };
}

export const EventTokenDeployed = {
  encode(message: EventTokenDeployed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.tokenAddress.length !== 0) {
      writer.uint32(18).bytes(message.tokenAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenDeployed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTokenDeployed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.tokenAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventTokenDeployed {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
    };
  },

  toJSON(message: EventTokenDeployed): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.tokenAddress !== undefined &&
      (obj.tokenAddress = base64FromBytes(
        message.tokenAddress !== undefined ? message.tokenAddress : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTokenDeployed>, I>>(object: I): EventTokenDeployed {
    const message = createBaseEventTokenDeployed();
    message.symbol = object.symbol ?? "";
    message.tokenAddress = object.tokenAddress ?? new Uint8Array();
    return message;
  },
};

function createBaseEventMultisigOwnershipTransferred(): EventMultisigOwnershipTransferred {
  return { preOwners: [], prevThreshold: new Uint8Array(), newOwners: [], newThreshold: new Uint8Array() };
}

export const EventMultisigOwnershipTransferred = {
  encode(message: EventMultisigOwnershipTransferred, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.preOwners) {
      writer.uint32(10).bytes(v!);
    }
    if (message.prevThreshold.length !== 0) {
      writer.uint32(18).bytes(message.prevThreshold);
    }
    for (const v of message.newOwners) {
      writer.uint32(26).bytes(v!);
    }
    if (message.newThreshold.length !== 0) {
      writer.uint32(34).bytes(message.newThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMultisigOwnershipTransferred {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMultisigOwnershipTransferred();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preOwners.push(reader.bytes());
          break;
        case 2:
          message.prevThreshold = reader.bytes();
          break;
        case 3:
          message.newOwners.push(reader.bytes());
          break;
        case 4:
          message.newThreshold = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMultisigOwnershipTransferred {
    return {
      preOwners: Array.isArray(object?.preOwners) ? object.preOwners.map((e: any) => bytesFromBase64(e)) : [],
      prevThreshold: isSet(object.prevThreshold) ? bytesFromBase64(object.prevThreshold) : new Uint8Array(),
      newOwners: Array.isArray(object?.newOwners) ? object.newOwners.map((e: any) => bytesFromBase64(e)) : [],
      newThreshold: isSet(object.newThreshold) ? bytesFromBase64(object.newThreshold) : new Uint8Array(),
    };
  },

  toJSON(message: EventMultisigOwnershipTransferred): unknown {
    const obj: any = {};
    if (message.preOwners) {
      obj.preOwners = message.preOwners.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.preOwners = [];
    }
    message.prevThreshold !== undefined &&
      (obj.prevThreshold = base64FromBytes(
        message.prevThreshold !== undefined ? message.prevThreshold : new Uint8Array(),
      ));
    if (message.newOwners) {
      obj.newOwners = message.newOwners.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.newOwners = [];
    }
    message.newThreshold !== undefined &&
      (obj.newThreshold = base64FromBytes(
        message.newThreshold !== undefined ? message.newThreshold : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMultisigOwnershipTransferred>, I>>(
    object: I,
  ): EventMultisigOwnershipTransferred {
    const message = createBaseEventMultisigOwnershipTransferred();
    message.preOwners = object.preOwners?.map((e) => e) || [];
    message.prevThreshold = object.prevThreshold ?? new Uint8Array();
    message.newOwners = object.newOwners?.map((e) => e) || [];
    message.newThreshold = object.newThreshold ?? new Uint8Array();
    return message;
  },
};

function createBaseEventMultisigOperatorshipTransferred(): EventMultisigOperatorshipTransferred {
  return { newOperators: [], newThreshold: new Uint8Array(), newWeights: [] };
}

export const EventMultisigOperatorshipTransferred = {
  encode(
    message: EventMultisigOperatorshipTransferred,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.newOperators) {
      writer.uint32(26).bytes(v!);
    }
    if (message.newThreshold.length !== 0) {
      writer.uint32(34).bytes(message.newThreshold);
    }
    for (const v of message.newWeights) {
      writer.uint32(42).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMultisigOperatorshipTransferred {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMultisigOperatorshipTransferred();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.newOperators.push(reader.bytes());
          break;
        case 4:
          message.newThreshold = reader.bytes();
          break;
        case 5:
          message.newWeights.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMultisigOperatorshipTransferred {
    return {
      newOperators: Array.isArray(object?.newOperators)
        ? object.newOperators.map((e: any) => bytesFromBase64(e))
        : [],
      newThreshold: isSet(object.newThreshold) ? bytesFromBase64(object.newThreshold) : new Uint8Array(),
      newWeights: Array.isArray(object?.newWeights)
        ? object.newWeights.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: EventMultisigOperatorshipTransferred): unknown {
    const obj: any = {};
    if (message.newOperators) {
      obj.newOperators = message.newOperators.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.newOperators = [];
    }
    message.newThreshold !== undefined &&
      (obj.newThreshold = base64FromBytes(
        message.newThreshold !== undefined ? message.newThreshold : new Uint8Array(),
      ));
    if (message.newWeights) {
      obj.newWeights = message.newWeights.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.newWeights = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMultisigOperatorshipTransferred>, I>>(
    object: I,
  ): EventMultisigOperatorshipTransferred {
    const message = createBaseEventMultisigOperatorshipTransferred();
    message.newOperators = object.newOperators?.map((e) => e) || [];
    message.newThreshold = object.newThreshold ?? new Uint8Array();
    message.newWeights = object.newWeights?.map((e) => e) || [];
    return message;
  },
};

function createBaseNetworkInfo(): NetworkInfo {
  return { name: "", id: new Uint8Array() };
}

export const NetworkInfo = {
  encode(message: NetworkInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id.length !== 0) {
      writer.uint32(18).bytes(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetworkInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
    };
  },

  toJSON(message: NetworkInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined &&
      (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkInfo>, I>>(object: I): NetworkInfo {
    const message = createBaseNetworkInfo();
    message.name = object.name ?? "";
    message.id = object.id ?? new Uint8Array();
    return message;
  },
};

function createBaseBurnerInfo(): BurnerInfo {
  return {
    burnerAddress: new Uint8Array(),
    tokenAddress: new Uint8Array(),
    destinationChain: "",
    symbol: "",
    asset: "",
    salt: new Uint8Array(),
  };
}

export const BurnerInfo = {
  encode(message: BurnerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burnerAddress.length !== 0) {
      writer.uint32(10).bytes(message.burnerAddress);
    }
    if (message.tokenAddress.length !== 0) {
      writer.uint32(18).bytes(message.tokenAddress);
    }
    if (message.destinationChain !== "") {
      writer.uint32(26).string(message.destinationChain);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.asset !== "") {
      writer.uint32(42).string(message.asset);
    }
    if (message.salt.length !== 0) {
      writer.uint32(50).bytes(message.salt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BurnerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnerAddress = reader.bytes();
          break;
        case 2:
          message.tokenAddress = reader.bytes();
          break;
        case 3:
          message.destinationChain = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.asset = reader.string();
          break;
        case 6:
          message.salt = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BurnerInfo {
    return {
      burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
      tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
    };
  },

  toJSON(message: BurnerInfo): unknown {
    const obj: any = {};
    message.burnerAddress !== undefined &&
      (obj.burnerAddress = base64FromBytes(
        message.burnerAddress !== undefined ? message.burnerAddress : new Uint8Array(),
      ));
    message.tokenAddress !== undefined &&
      (obj.tokenAddress = base64FromBytes(
        message.tokenAddress !== undefined ? message.tokenAddress : new Uint8Array(),
      ));
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.asset !== undefined && (obj.asset = message.asset);
    message.salt !== undefined &&
      (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BurnerInfo>, I>>(object: I): BurnerInfo {
    const message = createBaseBurnerInfo();
    message.burnerAddress = object.burnerAddress ?? new Uint8Array();
    message.tokenAddress = object.tokenAddress ?? new Uint8Array();
    message.destinationChain = object.destinationChain ?? "";
    message.symbol = object.symbol ?? "";
    message.asset = object.asset ?? "";
    message.salt = object.salt ?? new Uint8Array();
    return message;
  },
};

function createBaseERC20Deposit(): ERC20Deposit {
  return {
    txId: new Uint8Array(),
    amount: new Uint8Array(),
    asset: "",
    destinationChain: "",
    burnerAddress: new Uint8Array(),
  };
}

export const ERC20Deposit = {
  encode(message: ERC20Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.amount.length !== 0) {
      writer.uint32(18).bytes(message.amount);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    if (message.burnerAddress.length !== 0) {
      writer.uint32(42).bytes(message.burnerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20Deposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.bytes();
          break;
        case 2:
          message.amount = reader.bytes();
          break;
        case 3:
          message.asset = reader.string();
          break;
        case 4:
          message.destinationChain = reader.string();
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

  fromJSON(object: any): ERC20Deposit {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
      asset: isSet(object.asset) ? String(object.asset) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
    };
  },

  toJSON(message: ERC20Deposit): unknown {
    const obj: any = {};
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.amount !== undefined &&
      (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
    message.asset !== undefined && (obj.asset = message.asset);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.burnerAddress !== undefined &&
      (obj.burnerAddress = base64FromBytes(
        message.burnerAddress !== undefined ? message.burnerAddress : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20Deposit>, I>>(object: I): ERC20Deposit {
    const message = createBaseERC20Deposit();
    message.txId = object.txId ?? new Uint8Array();
    message.amount = object.amount ?? new Uint8Array();
    message.asset = object.asset ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.burnerAddress = object.burnerAddress ?? new Uint8Array();
    return message;
  },
};

function createBaseERC20TokenMetadata(): ERC20TokenMetadata {
  return {
    asset: "",
    chainId: new Uint8Array(),
    details: undefined,
    tokenAddress: "",
    txHash: "",
    status: 0,
    isExternal: false,
    burnerCode: new Uint8Array(),
  };
}

export const ERC20TokenMetadata = {
  encode(message: ERC20TokenMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.chainId.length !== 0) {
      writer.uint32(18).bytes(message.chainId);
    }
    if (message.details !== undefined) {
      TokenDetails.encode(message.details, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenAddress !== "") {
      writer.uint32(34).string(message.tokenAddress);
    }
    if (message.txHash !== "") {
      writer.uint32(42).string(message.txHash);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.isExternal === true) {
      writer.uint32(64).bool(message.isExternal);
    }
    if (message.burnerCode.length !== 0) {
      writer.uint32(74).bytes(message.burnerCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokenMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20TokenMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.chainId = reader.bytes();
          break;
        case 3:
          message.details = TokenDetails.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenAddress = reader.string();
          break;
        case 5:
          message.txHash = reader.string();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.isExternal = reader.bool();
          break;
        case 9:
          message.burnerCode = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20TokenMetadata {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      chainId: isSet(object.chainId) ? bytesFromBase64(object.chainId) : new Uint8Array(),
      details: isSet(object.details) ? TokenDetails.fromJSON(object.details) : undefined,
      tokenAddress: isSet(object.tokenAddress) ? String(object.tokenAddress) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      isExternal: isSet(object.isExternal) ? Boolean(object.isExternal) : false,
      burnerCode: isSet(object.burnerCode) ? bytesFromBase64(object.burnerCode) : new Uint8Array(),
    };
  },

  toJSON(message: ERC20TokenMetadata): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.chainId !== undefined &&
      (obj.chainId = base64FromBytes(message.chainId !== undefined ? message.chainId : new Uint8Array()));
    message.details !== undefined &&
      (obj.details = message.details ? TokenDetails.toJSON(message.details) : undefined);
    message.tokenAddress !== undefined && (obj.tokenAddress = message.tokenAddress);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.isExternal !== undefined && (obj.isExternal = message.isExternal);
    message.burnerCode !== undefined &&
      (obj.burnerCode = base64FromBytes(
        message.burnerCode !== undefined ? message.burnerCode : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20TokenMetadata>, I>>(object: I): ERC20TokenMetadata {
    const message = createBaseERC20TokenMetadata();
    message.asset = object.asset ?? "";
    message.chainId = object.chainId ?? new Uint8Array();
    message.details =
      object.details !== undefined && object.details !== null
        ? TokenDetails.fromPartial(object.details)
        : undefined;
    message.tokenAddress = object.tokenAddress ?? "";
    message.txHash = object.txHash ?? "";
    message.status = object.status ?? 0;
    message.isExternal = object.isExternal ?? false;
    message.burnerCode = object.burnerCode ?? new Uint8Array();
    return message;
  },
};

function createBaseTransactionMetadata(): TransactionMetadata {
  return { rawTx: new Uint8Array(), pubKey: new Uint8Array() };
}

export const TransactionMetadata = {
  encode(message: TransactionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rawTx.length !== 0) {
      writer.uint32(10).bytes(message.rawTx);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(18).bytes(message.pubKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rawTx = reader.bytes();
          break;
        case 2:
          message.pubKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionMetadata {
    return {
      rawTx: isSet(object.rawTx) ? bytesFromBase64(object.rawTx) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
    };
  },

  toJSON(message: TransactionMetadata): unknown {
    const obj: any = {};
    message.rawTx !== undefined &&
      (obj.rawTx = base64FromBytes(message.rawTx !== undefined ? message.rawTx : new Uint8Array()));
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransactionMetadata>, I>>(object: I): TransactionMetadata {
    const message = createBaseTransactionMetadata();
    message.rawTx = object.rawTx ?? new Uint8Array();
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  },
};

function createBaseCommand(): Command {
  return { id: new Uint8Array(), command: "", params: new Uint8Array(), keyId: "", maxGasCost: 0 };
}

export const Command = {
  encode(message: Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.command !== "") {
      writer.uint32(18).string(message.command);
    }
    if (message.params.length !== 0) {
      writer.uint32(26).bytes(message.params);
    }
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    if (message.maxGasCost !== 0) {
      writer.uint32(40).uint32(message.maxGasCost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Command {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.command = reader.string();
          break;
        case 3:
          message.params = reader.bytes();
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

  fromJSON(object: any): Command {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      command: isSet(object.command) ? String(object.command) : "",
      params: isSet(object.params) ? bytesFromBase64(object.params) : new Uint8Array(),
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      maxGasCost: isSet(object.maxGasCost) ? Number(object.maxGasCost) : 0,
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    message.command !== undefined && (obj.command = message.command);
    message.params !== undefined &&
      (obj.params = base64FromBytes(message.params !== undefined ? message.params : new Uint8Array()));
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.maxGasCost !== undefined && (obj.maxGasCost = Math.round(message.maxGasCost));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
    message.id = object.id ?? new Uint8Array();
    message.command = object.command ?? "";
    message.params = object.params ?? new Uint8Array();
    message.keyId = object.keyId ?? "";
    message.maxGasCost = object.maxGasCost ?? 0;
    return message;
  },
};

function createBaseCommandBatchMetadata(): CommandBatchMetadata {
  return {
    id: new Uint8Array(),
    commandIds: [],
    data: new Uint8Array(),
    sigHash: new Uint8Array(),
    status: 0,
    keyId: "",
    prevBatchedCommandsId: new Uint8Array(),
    signature: undefined,
  };
}

export const CommandBatchMetadata = {
  encode(message: CommandBatchMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    for (const v of message.commandIds) {
      writer.uint32(18).bytes(v!);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.sigHash.length !== 0) {
      writer.uint32(34).bytes(message.sigHash);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.keyId !== "") {
      writer.uint32(50).string(message.keyId);
    }
    if (message.prevBatchedCommandsId.length !== 0) {
      writer.uint32(58).bytes(message.prevBatchedCommandsId);
    }
    if (message.signature !== undefined) {
      Any.encode(message.signature, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandBatchMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandBatchMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.commandIds.push(reader.bytes());
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.sigHash = reader.bytes();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.keyId = reader.string();
          break;
        case 7:
          message.prevBatchedCommandsId = reader.bytes();
          break;
        case 8:
          message.signature = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandBatchMetadata {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      commandIds: Array.isArray(object?.commandIds)
        ? object.commandIds.map((e: any) => bytesFromBase64(e))
        : [],
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      sigHash: isSet(object.sigHash) ? bytesFromBase64(object.sigHash) : new Uint8Array(),
      status: isSet(object.status) ? batchedCommandsStatusFromJSON(object.status) : 0,
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      prevBatchedCommandsId: isSet(object.prevBatchedCommandsId)
        ? bytesFromBase64(object.prevBatchedCommandsId)
        : new Uint8Array(),
      signature: isSet(object.signature) ? Any.fromJSON(object.signature) : undefined,
    };
  },

  toJSON(message: CommandBatchMetadata): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    if (message.commandIds) {
      obj.commandIds = message.commandIds.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.commandIds = [];
    }
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.sigHash !== undefined &&
      (obj.sigHash = base64FromBytes(message.sigHash !== undefined ? message.sigHash : new Uint8Array()));
    message.status !== undefined && (obj.status = batchedCommandsStatusToJSON(message.status));
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.prevBatchedCommandsId !== undefined &&
      (obj.prevBatchedCommandsId = base64FromBytes(
        message.prevBatchedCommandsId !== undefined ? message.prevBatchedCommandsId : new Uint8Array(),
      ));
    message.signature !== undefined &&
      (obj.signature = message.signature ? Any.toJSON(message.signature) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommandBatchMetadata>, I>>(object: I): CommandBatchMetadata {
    const message = createBaseCommandBatchMetadata();
    message.id = object.id ?? new Uint8Array();
    message.commandIds = object.commandIds?.map((e) => e) || [];
    message.data = object.data ?? new Uint8Array();
    message.sigHash = object.sigHash ?? new Uint8Array();
    message.status = object.status ?? 0;
    message.keyId = object.keyId ?? "";
    message.prevBatchedCommandsId = object.prevBatchedCommandsId ?? new Uint8Array();
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? Any.fromPartial(object.signature)
        : undefined;
    return message;
  },
};

function createBaseSigMetadata(): SigMetadata {
  return { type: 0, chain: "", commandBatchId: new Uint8Array() };
}

export const SigMetadata = {
  encode(message: SigMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.commandBatchId.length !== 0) {
      writer.uint32(26).bytes(message.commandBatchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.commandBatchId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SigMetadata {
    return {
      type: isSet(object.type) ? sigTypeFromJSON(object.type) : 0,
      chain: isSet(object.chain) ? String(object.chain) : "",
      commandBatchId: isSet(object.commandBatchId)
        ? bytesFromBase64(object.commandBatchId)
        : new Uint8Array(),
    };
  },

  toJSON(message: SigMetadata): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = sigTypeToJSON(message.type));
    message.chain !== undefined && (obj.chain = message.chain);
    message.commandBatchId !== undefined &&
      (obj.commandBatchId = base64FromBytes(
        message.commandBatchId !== undefined ? message.commandBatchId : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SigMetadata>, I>>(object: I): SigMetadata {
    const message = createBaseSigMetadata();
    message.type = object.type ?? 0;
    message.chain = object.chain ?? "";
    message.commandBatchId = object.commandBatchId ?? new Uint8Array();
    return message;
  },
};

function createBaseTransferKey(): TransferKey {
  return { txId: new Uint8Array(), nextKeyId: "" };
}

export const TransferKey = {
  encode(message: TransferKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.nextKeyId !== "") {
      writer.uint32(26).string(message.nextKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.bytes();
          break;
        case 3:
          message.nextKeyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferKey {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      nextKeyId: isSet(object.nextKeyId) ? String(object.nextKeyId) : "",
    };
  },

  toJSON(message: TransferKey): unknown {
    const obj: any = {};
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.nextKeyId !== undefined && (obj.nextKeyId = message.nextKeyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransferKey>, I>>(object: I): TransferKey {
    const message = createBaseTransferKey();
    message.txId = object.txId ?? new Uint8Array();
    message.nextKeyId = object.nextKeyId ?? "";
    return message;
  },
};

function createBaseAsset(): Asset {
  return { chain: "", name: "" };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Asset>, I>>(object: I): Asset {
    const message = createBaseAsset();
    message.chain = object.chain ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseTokenDetails(): TokenDetails {
  return { tokenName: "", symbol: "", decimals: 0, capacity: new Uint8Array() };
}

export const TokenDetails = {
  encode(message: TokenDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenName !== "") {
      writer.uint32(10).string(message.tokenName);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.decimals !== 0) {
      writer.uint32(24).uint32(message.decimals);
    }
    if (message.capacity.length !== 0) {
      writer.uint32(34).bytes(message.capacity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenName = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.decimals = reader.uint32();
          break;
        case 4:
          message.capacity = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenDetails {
    return {
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      capacity: isSet(object.capacity) ? bytesFromBase64(object.capacity) : new Uint8Array(),
    };
  },

  toJSON(message: TokenDetails): unknown {
    const obj: any = {};
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
    message.capacity !== undefined &&
      (obj.capacity = base64FromBytes(message.capacity !== undefined ? message.capacity : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenDetails>, I>>(object: I): TokenDetails {
    const message = createBaseTokenDetails();
    message.tokenName = object.tokenName ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals ?? 0;
    message.capacity = object.capacity ?? new Uint8Array();
    return message;
  },
};

function createBaseGateway(): Gateway {
  return { address: new Uint8Array(), status: 0 };
}

export const Gateway = {
  encode(message: Gateway, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Gateway {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGateway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
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

  fromJSON(object: any): Gateway {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      status: isSet(object.status) ? gateway_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Gateway): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.status !== undefined && (obj.status = gateway_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Gateway>, I>>(object: I): Gateway {
    const message = createBaseGateway();
    message.address = object.address ?? new Uint8Array();
    message.status = object.status ?? 0;
    return message;
  },
};

function createBasePollMetadata(): PollMetadata {
  return { chain: "", txId: new Uint8Array() };
}

export const PollMetadata = {
  encode(message: PollMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(18).bytes(message.txId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PollMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePollMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.txId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PollMetadata {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
    };
  },

  toJSON(message: PollMetadata): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PollMetadata>, I>>(object: I): PollMetadata {
    const message = createBasePollMetadata();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
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
