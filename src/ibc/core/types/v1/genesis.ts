/* eslint-disable */
import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { GenesisState as GenesisState4 } from "../../client/v2/genesis";
import { GenesisState as GenesisState5 } from "../../channel/v2/genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.core.types.v1";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
  /** ICS002 - Clients genesis state */
  clientGenesis: GenesisState1;
  /** ICS003 - Connections genesis state */
  connectionGenesis: GenesisState2;
  /** ICS004 - Channel genesis state */
  channelGenesis: GenesisState3;
  /** ICS002 - Clients/v2 genesis state */
  clientV2Genesis: GenesisState4;
  /** ICS004 - Channel/v2 genesis state */
  channelV2Genesis: GenesisState5;
}
function createBaseGenesisState(): GenesisState {
  return {
    clientGenesis: GenesisState1.fromPartial({}),
    connectionGenesis: GenesisState2.fromPartial({}),
    channelGenesis: GenesisState3.fromPartial({}),
    clientV2Genesis: GenesisState4.fromPartial({}),
    channelV2Genesis: GenesisState5.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.types.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientGenesis !== undefined) {
      GenesisState1.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
    }
    if (message.connectionGenesis !== undefined) {
      GenesisState2.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
    }
    if (message.channelGenesis !== undefined) {
      GenesisState3.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
    }
    if (message.clientV2Genesis !== undefined) {
      GenesisState4.encode(message.clientV2Genesis, writer.uint32(34).fork()).ldelim();
    }
    if (message.channelV2Genesis !== undefined) {
      GenesisState5.encode(message.channelV2Genesis, writer.uint32(42).fork()).ldelim();
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
          message.clientGenesis = GenesisState1.decode(reader, reader.uint32());
          break;
        case 2:
          message.connectionGenesis = GenesisState2.decode(reader, reader.uint32());
          break;
        case 3:
          message.channelGenesis = GenesisState3.decode(reader, reader.uint32());
          break;
        case 4:
          message.clientV2Genesis = GenesisState4.decode(reader, reader.uint32());
          break;
        case 5:
          message.channelV2Genesis = GenesisState5.decode(reader, reader.uint32());
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
    if (isSet(object.clientGenesis)) obj.clientGenesis = GenesisState1.fromJSON(object.clientGenesis);
    if (isSet(object.connectionGenesis))
      obj.connectionGenesis = GenesisState2.fromJSON(object.connectionGenesis);
    if (isSet(object.channelGenesis)) obj.channelGenesis = GenesisState3.fromJSON(object.channelGenesis);
    if (isSet(object.clientV2Genesis)) obj.clientV2Genesis = GenesisState4.fromJSON(object.clientV2Genesis);
    if (isSet(object.channelV2Genesis))
      obj.channelV2Genesis = GenesisState5.fromJSON(object.channelV2Genesis);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.clientGenesis !== undefined &&
      (obj.clientGenesis = message.clientGenesis ? GenesisState1.toJSON(message.clientGenesis) : undefined);
    message.connectionGenesis !== undefined &&
      (obj.connectionGenesis = message.connectionGenesis
        ? GenesisState2.toJSON(message.connectionGenesis)
        : undefined);
    message.channelGenesis !== undefined &&
      (obj.channelGenesis = message.channelGenesis
        ? GenesisState3.toJSON(message.channelGenesis)
        : undefined);
    message.clientV2Genesis !== undefined &&
      (obj.clientV2Genesis = message.clientV2Genesis
        ? GenesisState4.toJSON(message.clientV2Genesis)
        : undefined);
    message.channelV2Genesis !== undefined &&
      (obj.channelV2Genesis = message.channelV2Genesis
        ? GenesisState5.toJSON(message.channelV2Genesis)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.clientGenesis !== undefined && object.clientGenesis !== null) {
      message.clientGenesis = GenesisState1.fromPartial(object.clientGenesis);
    }
    if (object.connectionGenesis !== undefined && object.connectionGenesis !== null) {
      message.connectionGenesis = GenesisState2.fromPartial(object.connectionGenesis);
    }
    if (object.channelGenesis !== undefined && object.channelGenesis !== null) {
      message.channelGenesis = GenesisState3.fromPartial(object.channelGenesis);
    }
    if (object.clientV2Genesis !== undefined && object.clientV2Genesis !== null) {
      message.clientV2Genesis = GenesisState4.fromPartial(object.clientV2Genesis);
    }
    if (object.channelV2Genesis !== undefined && object.channelV2Genesis !== null) {
      message.channelV2Genesis = GenesisState5.fromPartial(object.channelV2Genesis);
    }
    return message;
  },
};
