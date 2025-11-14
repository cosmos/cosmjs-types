/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { JsonSafe } from "../../../../json-safe";
import { DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.core.channel.v2";
/** GenesisState defines the ibc channel/v2 submodule's genesis state. */
export interface GenesisState {
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  asyncPackets: PacketState[];
  sendSequences: PacketSequence[];
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketState {
  /** client unique identifier. */
  clientId: string;
  /** packet sequence. */
  sequence: bigint;
  /** embedded data that represents packet state. */
  data: Uint8Array;
}
/** PacketSequence defines the genesis type necessary to retrieve and store next send sequences. */
export interface PacketSequence {
  /** client unique identifier. */
  clientId: string;
  /** packet sequence */
  sequence: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    acknowledgements: [],
    commitments: [],
    receipts: [],
    asyncPackets: [],
    sendSequences: [],
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.channel.v2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      PacketState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.asyncPackets) {
      PacketState.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.sendSequences) {
      PacketSequence.encode(v!, writer.uint32(50).fork()).ldelim();
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
        case 2:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.receipts.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.asyncPackets.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 6:
          message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.acknowledgements))
      obj.acknowledgements = object.acknowledgements.map((e: any) => PacketState.fromJSON(e));
    if (Array.isArray(object?.commitments))
      obj.commitments = object.commitments.map((e: any) => PacketState.fromJSON(e));
    if (Array.isArray(object?.receipts))
      obj.receipts = object.receipts.map((e: any) => PacketState.fromJSON(e));
    if (Array.isArray(object?.asyncPackets))
      obj.asyncPackets = object.asyncPackets.map((e: any) => PacketState.fromJSON(e));
    if (Array.isArray(object?.sendSequences))
      obj.sendSequences = object.sendSequences.map((e: any) => PacketSequence.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map((e) => (e ? PacketState.toJSON(e) : undefined));
    } else {
      obj.acknowledgements = [];
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) => (e ? PacketState.toJSON(e) : undefined));
    } else {
      obj.commitments = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map((e) => (e ? PacketState.toJSON(e) : undefined));
    } else {
      obj.receipts = [];
    }
    if (message.asyncPackets) {
      obj.asyncPackets = message.asyncPackets.map((e) => (e ? PacketState.toJSON(e) : undefined));
    } else {
      obj.asyncPackets = [];
    }
    if (message.sendSequences) {
      obj.sendSequences = message.sendSequences.map((e) => (e ? PacketSequence.toJSON(e) : undefined));
    } else {
      obj.sendSequences = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.acknowledgements = object.acknowledgements?.map((e) => PacketState.fromPartial(e)) || [];
    message.commitments = object.commitments?.map((e) => PacketState.fromPartial(e)) || [];
    message.receipts = object.receipts?.map((e) => PacketState.fromPartial(e)) || [];
    message.asyncPackets = object.asyncPackets?.map((e) => PacketState.fromPartial(e)) || [];
    message.sendSequences = object.sendSequences?.map((e) => PacketSequence.fromPartial(e)) || [];
    return message;
  },
};
function createBasePacketState(): PacketState {
  return {
    clientId: "",
    sequence: BigInt(0),
    data: new Uint8Array(),
  };
}
export const PacketState = {
  typeUrl: "/ibc.core.channel.v2.PacketState",
  encode(message: PacketState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketState {
    const obj = createBasePacketState();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: PacketState): JsonSafe<PacketState> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PacketState>, I>>(object: I): PacketState {
    const message = createBasePacketState();
    message.clientId = object.clientId ?? "";
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
function createBasePacketSequence(): PacketSequence {
  return {
    clientId: "",
    sequence: BigInt(0),
  };
}
export const PacketSequence = {
  typeUrl: "/ibc.core.channel.v2.PacketSequence",
  encode(message: PacketSequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketSequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketSequence {
    const obj = createBasePacketSequence();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    return obj;
  },
  toJSON(message: PacketSequence): JsonSafe<PacketSequence> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PacketSequence>, I>>(object: I): PacketSequence {
    const message = createBasePacketSequence();
    message.clientId = object.clientId ?? "";
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    return message;
  },
};
