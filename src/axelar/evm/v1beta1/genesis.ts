/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/evm/v1beta1/params";
import { QueueState } from "../../../axelar/utils/v1beta1/queuer";
import {
  Gateway,
  BurnerInfo,
  ERC20Deposit,
  CommandBatchMetadata,
  ERC20TokenMetadata,
  Event,
} from "../../../axelar/evm/v1beta1/types";

export const protobufPackage = "axelar.evm.v1beta1";

/** GenesisState represents the genesis state */
export interface GenesisState {
  chains: GenesisState_Chain[];
}

export interface GenesisState_Chain {
  params?: Params;
  burnerInfos: BurnerInfo[];
  commandQueue?: QueueState;
  confirmedDeposits: ERC20Deposit[];
  burnedDeposits: ERC20Deposit[];
  commandBatches: CommandBatchMetadata[];
  gateway?: Gateway;
  tokens: ERC20TokenMetadata[];
  events: Event[];
  confirmedEventQueue?: QueueState;
  legacyConfirmedDeposits: ERC20Deposit[];
  legacyBurnedDeposits: ERC20Deposit[];
}

function createBaseGenesisState(): GenesisState {
  return { chains: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chains) {
      GenesisState_Chain.encode(v!, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.chains.push(GenesisState_Chain.decode(reader, reader.uint32()));
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
      chains: Array.isArray(object?.chains)
        ? object.chains.map((e: any) => GenesisState_Chain.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.chains) {
      obj.chains = message.chains.map((e) => (e ? GenesisState_Chain.toJSON(e) : undefined));
    } else {
      obj.chains = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.chains = object.chains?.map((e) => GenesisState_Chain.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGenesisState_Chain(): GenesisState_Chain {
  return {
    params: undefined,
    burnerInfos: [],
    commandQueue: undefined,
    confirmedDeposits: [],
    burnedDeposits: [],
    commandBatches: [],
    gateway: undefined,
    tokens: [],
    events: [],
    confirmedEventQueue: undefined,
    legacyConfirmedDeposits: [],
    legacyBurnedDeposits: [],
  };
}

export const GenesisState_Chain = {
  encode(message: GenesisState_Chain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.burnerInfos) {
      BurnerInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.commandQueue !== undefined) {
      QueueState.encode(message.commandQueue, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.confirmedDeposits) {
      ERC20Deposit.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.burnedDeposits) {
      ERC20Deposit.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.commandBatches) {
      CommandBatchMetadata.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.gateway !== undefined) {
      Gateway.encode(message.gateway, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.tokens) {
      ERC20TokenMetadata.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.confirmedEventQueue !== undefined) {
      QueueState.encode(message.confirmedEventQueue, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.legacyConfirmedDeposits) {
      ERC20Deposit.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.legacyBurnedDeposits) {
      ERC20Deposit.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_Chain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_Chain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.burnerInfos.push(BurnerInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commandQueue = QueueState.decode(reader, reader.uint32());
          break;
        case 4:
          message.confirmedDeposits.push(ERC20Deposit.decode(reader, reader.uint32()));
          break;
        case 5:
          message.burnedDeposits.push(ERC20Deposit.decode(reader, reader.uint32()));
          break;
        case 8:
          message.commandBatches.push(CommandBatchMetadata.decode(reader, reader.uint32()));
          break;
        case 9:
          message.gateway = Gateway.decode(reader, reader.uint32());
          break;
        case 10:
          message.tokens.push(ERC20TokenMetadata.decode(reader, reader.uint32()));
          break;
        case 11:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 12:
          message.confirmedEventQueue = QueueState.decode(reader, reader.uint32());
          break;
        case 13:
          message.legacyConfirmedDeposits.push(ERC20Deposit.decode(reader, reader.uint32()));
          break;
        case 14:
          message.legacyBurnedDeposits.push(ERC20Deposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_Chain {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      burnerInfos: Array.isArray(object?.burnerInfos)
        ? object.burnerInfos.map((e: any) => BurnerInfo.fromJSON(e))
        : [],
      commandQueue: isSet(object.commandQueue) ? QueueState.fromJSON(object.commandQueue) : undefined,
      confirmedDeposits: Array.isArray(object?.confirmedDeposits)
        ? object.confirmedDeposits.map((e: any) => ERC20Deposit.fromJSON(e))
        : [],
      burnedDeposits: Array.isArray(object?.burnedDeposits)
        ? object.burnedDeposits.map((e: any) => ERC20Deposit.fromJSON(e))
        : [],
      commandBatches: Array.isArray(object?.commandBatches)
        ? object.commandBatches.map((e: any) => CommandBatchMetadata.fromJSON(e))
        : [],
      gateway: isSet(object.gateway) ? Gateway.fromJSON(object.gateway) : undefined,
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => ERC20TokenMetadata.fromJSON(e))
        : [],
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      confirmedEventQueue: isSet(object.confirmedEventQueue)
        ? QueueState.fromJSON(object.confirmedEventQueue)
        : undefined,
      legacyConfirmedDeposits: Array.isArray(object?.legacyConfirmedDeposits)
        ? object.legacyConfirmedDeposits.map((e: any) => ERC20Deposit.fromJSON(e))
        : [],
      legacyBurnedDeposits: Array.isArray(object?.legacyBurnedDeposits)
        ? object.legacyBurnedDeposits.map((e: any) => ERC20Deposit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState_Chain): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.burnerInfos) {
      obj.burnerInfos = message.burnerInfos.map((e) => (e ? BurnerInfo.toJSON(e) : undefined));
    } else {
      obj.burnerInfos = [];
    }
    message.commandQueue !== undefined &&
      (obj.commandQueue = message.commandQueue ? QueueState.toJSON(message.commandQueue) : undefined);
    if (message.confirmedDeposits) {
      obj.confirmedDeposits = message.confirmedDeposits.map((e) => (e ? ERC20Deposit.toJSON(e) : undefined));
    } else {
      obj.confirmedDeposits = [];
    }
    if (message.burnedDeposits) {
      obj.burnedDeposits = message.burnedDeposits.map((e) => (e ? ERC20Deposit.toJSON(e) : undefined));
    } else {
      obj.burnedDeposits = [];
    }
    if (message.commandBatches) {
      obj.commandBatches = message.commandBatches.map((e) =>
        e ? CommandBatchMetadata.toJSON(e) : undefined,
      );
    } else {
      obj.commandBatches = [];
    }
    message.gateway !== undefined &&
      (obj.gateway = message.gateway ? Gateway.toJSON(message.gateway) : undefined);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e ? ERC20TokenMetadata.toJSON(e) : undefined));
    } else {
      obj.tokens = [];
    }
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.confirmedEventQueue !== undefined &&
      (obj.confirmedEventQueue = message.confirmedEventQueue
        ? QueueState.toJSON(message.confirmedEventQueue)
        : undefined);
    if (message.legacyConfirmedDeposits) {
      obj.legacyConfirmedDeposits = message.legacyConfirmedDeposits.map((e) =>
        e ? ERC20Deposit.toJSON(e) : undefined,
      );
    } else {
      obj.legacyConfirmedDeposits = [];
    }
    if (message.legacyBurnedDeposits) {
      obj.legacyBurnedDeposits = message.legacyBurnedDeposits.map((e) =>
        e ? ERC20Deposit.toJSON(e) : undefined,
      );
    } else {
      obj.legacyBurnedDeposits = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState_Chain>, I>>(object: I): GenesisState_Chain {
    const message = createBaseGenesisState_Chain();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.burnerInfos = object.burnerInfos?.map((e) => BurnerInfo.fromPartial(e)) || [];
    message.commandQueue =
      object.commandQueue !== undefined && object.commandQueue !== null
        ? QueueState.fromPartial(object.commandQueue)
        : undefined;
    message.confirmedDeposits = object.confirmedDeposits?.map((e) => ERC20Deposit.fromPartial(e)) || [];
    message.burnedDeposits = object.burnedDeposits?.map((e) => ERC20Deposit.fromPartial(e)) || [];
    message.commandBatches = object.commandBatches?.map((e) => CommandBatchMetadata.fromPartial(e)) || [];
    message.gateway =
      object.gateway !== undefined && object.gateway !== null
        ? Gateway.fromPartial(object.gateway)
        : undefined;
    message.tokens = object.tokens?.map((e) => ERC20TokenMetadata.fromPartial(e)) || [];
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.confirmedEventQueue =
      object.confirmedEventQueue !== undefined && object.confirmedEventQueue !== null
        ? QueueState.fromPartial(object.confirmedEventQueue)
        : undefined;
    message.legacyConfirmedDeposits =
      object.legacyConfirmedDeposits?.map((e) => ERC20Deposit.fromPartial(e)) || [];
    message.legacyBurnedDeposits = object.legacyBurnedDeposits?.map((e) => ERC20Deposit.fromPartial(e)) || [];
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
