/* eslint-disable */
import { Height } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "ibc.lightclients.wasm.v1";
/** Wasm light client's Client state */
export interface ClientState {
  /**
   * bytes encoding the client state of the underlying light client
   * implemented as a Wasm contract.
   */
  data: Uint8Array;
  checksum: Uint8Array;
  latestHeight: Height;
}
/** Wasm light client's ConsensusState */
export interface ConsensusState {
  /**
   * bytes encoding the consensus state of the underlying light client
   * implemented as a Wasm contract.
   */
  data: Uint8Array;
}
/** Wasm light client message (either header(s) or misbehaviour) */
export interface ClientMessage {
  data: Uint8Array;
}
/**
 * Checksums defines a list of all checksums that are stored
 *
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 */
/** @deprecated */
export interface Checksums {
  checksums: Uint8Array[];
}
function createBaseClientState(): ClientState {
  return {
    data: new Uint8Array(),
    checksum: new Uint8Array(),
    latestHeight: Height.fromPartial({}),
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.wasm.v1.ClientState",
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    if (message.latestHeight !== undefined) {
      Height.encode(message.latestHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        case 3:
          message.latestHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    const obj = createBaseClientState();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.checksum)) obj.checksum = bytesFromBase64(object.checksum);
    if (isSet(object.latestHeight)) obj.latestHeight = Height.fromJSON(object.latestHeight);
    return obj;
  },
  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.checksum !== undefined &&
      (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    message.latestHeight !== undefined &&
      (obj.latestHeight = message.latestHeight ? Height.toJSON(message.latestHeight) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClientState>, I>>(object: I): ClientState {
    const message = createBaseClientState();
    message.data = object.data ?? new Uint8Array();
    message.checksum = object.checksum ?? new Uint8Array();
    if (object.latestHeight !== undefined && object.latestHeight !== null) {
      message.latestHeight = Height.fromPartial(object.latestHeight);
    }
    return message;
  },
};
function createBaseConsensusState(): ConsensusState {
  return {
    data: new Uint8Array(),
  };
}
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.wasm.v1.ConsensusState",
  encode(message: ConsensusState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusState {
    const obj = createBaseConsensusState();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: ConsensusState): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsensusState>, I>>(object: I): ConsensusState {
    const message = createBaseConsensusState();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
function createBaseClientMessage(): ClientMessage {
  return {
    data: new Uint8Array(),
  };
}
export const ClientMessage = {
  typeUrl: "/ibc.lightclients.wasm.v1.ClientMessage",
  encode(message: ClientMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientMessage {
    const obj = createBaseClientMessage();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: ClientMessage): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClientMessage>, I>>(object: I): ClientMessage {
    const message = createBaseClientMessage();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
function createBaseChecksums(): Checksums {
  return {
    checksums: [],
  };
}
export const Checksums = {
  typeUrl: "/ibc.lightclients.wasm.v1.Checksums",
  encode(message: Checksums, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.checksums) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Checksums {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChecksums();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksums.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Checksums {
    const obj = createBaseChecksums();
    if (Array.isArray(object?.checksums))
      obj.checksums = object.checksums.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: Checksums): unknown {
    const obj: any = {};
    if (message.checksums) {
      obj.checksums = message.checksums.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.checksums = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Checksums>, I>>(object: I): Checksums {
    const message = createBaseChecksums();
    message.checksums = object.checksums?.map((e) => e) || [];
    return message;
  },
};
