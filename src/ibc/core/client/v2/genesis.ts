/* eslint-disable */
import { CounterpartyInfo } from "./counterparty";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.core.client.v2";
/** GenesisCounterpartyInfo defines the state associating a client with a counterparty. */
export interface GenesisCounterpartyInfo {
  /** ClientId is the ID of the given client. */
  clientId: string;
  /** CounterpartyInfo is the counterparty info of the given client. */
  counterpartyInfo: CounterpartyInfo;
}
/** GenesisState defines the ibc client v2 submodule's genesis state. */
export interface GenesisState {
  /** counterparty info for each client */
  counterpartyInfos: GenesisCounterpartyInfo[];
}
function createBaseGenesisCounterpartyInfo(): GenesisCounterpartyInfo {
  return {
    clientId: "",
    counterpartyInfo: CounterpartyInfo.fromPartial({}),
  };
}
export const GenesisCounterpartyInfo = {
  typeUrl: "/ibc.core.client.v2.GenesisCounterpartyInfo",
  encode(message: GenesisCounterpartyInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.counterpartyInfo !== undefined) {
      CounterpartyInfo.encode(message.counterpartyInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisCounterpartyInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisCounterpartyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterpartyInfo = CounterpartyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisCounterpartyInfo {
    const obj = createBaseGenesisCounterpartyInfo();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.counterpartyInfo))
      obj.counterpartyInfo = CounterpartyInfo.fromJSON(object.counterpartyInfo);
    return obj;
  },
  toJSON(message: GenesisCounterpartyInfo): JsonSafe<GenesisCounterpartyInfo> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.counterpartyInfo !== undefined &&
      (obj.counterpartyInfo = message.counterpartyInfo
        ? CounterpartyInfo.toJSON(message.counterpartyInfo)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisCounterpartyInfo>, I>>(object: I): GenesisCounterpartyInfo {
    const message = createBaseGenesisCounterpartyInfo();
    message.clientId = object.clientId ?? "";
    if (object.counterpartyInfo !== undefined && object.counterpartyInfo !== null) {
      message.counterpartyInfo = CounterpartyInfo.fromPartial(object.counterpartyInfo);
    }
    return message;
  },
};
function createBaseGenesisState(): GenesisState {
  return {
    counterpartyInfos: [],
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.client.v2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.counterpartyInfos) {
      GenesisCounterpartyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyInfos.push(GenesisCounterpartyInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.counterpartyInfos))
      obj.counterpartyInfos = object.counterpartyInfos.map((e: any) => GenesisCounterpartyInfo.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.counterpartyInfos) {
      obj.counterpartyInfos = message.counterpartyInfos.map((e) =>
        e ? GenesisCounterpartyInfo.toJSON(e) : undefined,
      );
    } else {
      obj.counterpartyInfos = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.counterpartyInfos =
      object.counterpartyInfos?.map((e) => GenesisCounterpartyInfo.fromPartial(e)) || [];
    return message;
  },
};
