/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.core.channel.v2";
/** PacketStatus specifies the status of a RecvPacketResult. */
export enum PacketStatus {
  /** PACKET_STATUS_UNSPECIFIED - PACKET_STATUS_UNSPECIFIED indicates an unknown packet status. */
  PACKET_STATUS_UNSPECIFIED = 0,
  /** PACKET_STATUS_SUCCESS - PACKET_STATUS_SUCCESS indicates a successful packet receipt. */
  PACKET_STATUS_SUCCESS = 1,
  /** PACKET_STATUS_FAILURE - PACKET_STATUS_FAILURE indicates a failed packet receipt. */
  PACKET_STATUS_FAILURE = 2,
  /** PACKET_STATUS_ASYNC - PACKET_STATUS_ASYNC indicates an async packet receipt. */
  PACKET_STATUS_ASYNC = 3,
  UNRECOGNIZED = -1,
}
export function packetStatusFromJSON(object: any): PacketStatus {
  switch (object) {
    case 0:
    case "PACKET_STATUS_UNSPECIFIED":
      return PacketStatus.PACKET_STATUS_UNSPECIFIED;
    case 1:
    case "PACKET_STATUS_SUCCESS":
      return PacketStatus.PACKET_STATUS_SUCCESS;
    case 2:
    case "PACKET_STATUS_FAILURE":
      return PacketStatus.PACKET_STATUS_FAILURE;
    case 3:
    case "PACKET_STATUS_ASYNC":
      return PacketStatus.PACKET_STATUS_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PacketStatus.UNRECOGNIZED;
  }
}
export function packetStatusToJSON(object: PacketStatus): string {
  switch (object) {
    case PacketStatus.PACKET_STATUS_UNSPECIFIED:
      return "PACKET_STATUS_UNSPECIFIED";
    case PacketStatus.PACKET_STATUS_SUCCESS:
      return "PACKET_STATUS_SUCCESS";
    case PacketStatus.PACKET_STATUS_FAILURE:
      return "PACKET_STATUS_FAILURE";
    case PacketStatus.PACKET_STATUS_ASYNC:
      return "PACKET_STATUS_ASYNC";
    case PacketStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Packet defines a type that carries data across different chains through IBC */
export interface Packet {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   */
  sequence: bigint;
  /** identifies the sending client on the sending chain. */
  sourceClient: string;
  /** identifies the receiving client on the receiving chain. */
  destinationClient: string;
  /** timeout timestamp in seconds after which the packet times out. */
  timeoutTimestamp: bigint;
  /** a list of payloads, each one for a specific application. */
  payloads: Payload[];
}
/** Payload contains the source and destination ports and payload for the application (version, encoding, raw bytes) */
export interface Payload {
  /** specifies the source port of the packet. */
  sourcePort: string;
  /** specifies the destination port of the packet. */
  destinationPort: string;
  /** version of the specified application. */
  version: string;
  /** the encoding used for the provided value. */
  encoding: string;
  /** the raw bytes for the payload. */
  value: Uint8Array;
}
/**
 * Acknowledgement contains a list of all ack results associated with a single packet.
 * In the case of a successful receive, the acknowledgement will contain an app acknowledgement
 * for each application that received a payload in the same order that the payloads were sent
 * in the packet.
 * If the receive is not successful, the acknowledgement will contain a single app acknowledgment
 * which will be a constant error acknowledgment as defined by the IBC v2 protocol.
 */
export interface Acknowledgement {
  appAcknowledgements: Uint8Array[];
}
/** RecvPacketResult speecifies the status of a packet as well as the acknowledgement bytes. */
export interface RecvPacketResult {
  /** status of the packet */
  status: PacketStatus;
  /** acknowledgement of the packet */
  acknowledgement: Uint8Array;
}
function createBasePacket(): Packet {
  return {
    sequence: BigInt(0),
    sourceClient: "",
    destinationClient: "",
    timeoutTimestamp: BigInt(0),
    payloads: [],
  };
}
export const Packet = {
  typeUrl: "/ibc.core.channel.v2.Packet",
  encode(message: Packet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.sourceClient !== "") {
      writer.uint32(18).string(message.sourceClient);
    }
    if (message.destinationClient !== "") {
      writer.uint32(26).string(message.destinationClient);
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    for (const v of message.payloads) {
      Payload.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Packet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.sourceClient = reader.string();
          break;
        case 3:
          message.destinationClient = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = reader.uint64();
          break;
        case 5:
          message.payloads.push(Payload.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Packet {
    const obj = createBasePacket();
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    if (isSet(object.sourceClient)) obj.sourceClient = String(object.sourceClient);
    if (isSet(object.destinationClient)) obj.destinationClient = String(object.destinationClient);
    if (isSet(object.timeoutTimestamp)) obj.timeoutTimestamp = BigInt(object.timeoutTimestamp.toString());
    if (Array.isArray(object?.payloads)) obj.payloads = object.payloads.map((e: any) => Payload.fromJSON(e));
    return obj;
  },
  toJSON(message: Packet): JsonSafe<Packet> {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.sourceClient !== undefined && (obj.sourceClient = message.sourceClient);
    message.destinationClient !== undefined && (obj.destinationClient = message.destinationClient);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = (message.timeoutTimestamp || BigInt(0)).toString());
    if (message.payloads) {
      obj.payloads = message.payloads.map((e) => (e ? Payload.toJSON(e) : undefined));
    } else {
      obj.payloads = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Packet>, I>>(object: I): Packet {
    const message = createBasePacket();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    message.sourceClient = object.sourceClient ?? "";
    message.destinationClient = object.destinationClient ?? "";
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeoutTimestamp.toString());
    }
    message.payloads = object.payloads?.map((e) => Payload.fromPartial(e)) || [];
    return message;
  },
};
function createBasePayload(): Payload {
  return {
    sourcePort: "",
    destinationPort: "",
    version: "",
    encoding: "",
    value: new Uint8Array(),
  };
}
export const Payload = {
  typeUrl: "/ibc.core.channel.v2.Payload",
  encode(message: Payload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.destinationPort !== "") {
      writer.uint32(18).string(message.destinationPort);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    if (message.value.length !== 0) {
      writer.uint32(42).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Payload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.destinationPort = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.encoding = reader.string();
          break;
        case 5:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Payload {
    const obj = createBasePayload();
    if (isSet(object.sourcePort)) obj.sourcePort = String(object.sourcePort);
    if (isSet(object.destinationPort)) obj.destinationPort = String(object.destinationPort);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.encoding)) obj.encoding = String(object.encoding);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    return obj;
  },
  toJSON(message: Payload): JsonSafe<Payload> {
    const obj: any = {};
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.destinationPort !== undefined && (obj.destinationPort = message.destinationPort);
    message.version !== undefined && (obj.version = message.version);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Payload>, I>>(object: I): Payload {
    const message = createBasePayload();
    message.sourcePort = object.sourcePort ?? "";
    message.destinationPort = object.destinationPort ?? "";
    message.version = object.version ?? "";
    message.encoding = object.encoding ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};
function createBaseAcknowledgement(): Acknowledgement {
  return {
    appAcknowledgements: [],
  };
}
export const Acknowledgement = {
  typeUrl: "/ibc.core.channel.v2.Acknowledgement",
  encode(message: Acknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.appAcknowledgements) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Acknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appAcknowledgements.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Acknowledgement {
    const obj = createBaseAcknowledgement();
    if (Array.isArray(object?.appAcknowledgements))
      obj.appAcknowledgements = object.appAcknowledgements.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: Acknowledgement): JsonSafe<Acknowledgement> {
    const obj: any = {};
    if (message.appAcknowledgements) {
      obj.appAcknowledgements = message.appAcknowledgements.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.appAcknowledgements = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Acknowledgement>, I>>(object: I): Acknowledgement {
    const message = createBaseAcknowledgement();
    message.appAcknowledgements = object.appAcknowledgements?.map((e) => e) || [];
    return message;
  },
};
function createBaseRecvPacketResult(): RecvPacketResult {
  return {
    status: 0,
    acknowledgement: new Uint8Array(),
  };
}
export const RecvPacketResult = {
  typeUrl: "/ibc.core.channel.v2.RecvPacketResult",
  encode(message: RecvPacketResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecvPacketResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecvPacketResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RecvPacketResult {
    const obj = createBaseRecvPacketResult();
    if (isSet(object.status)) obj.status = packetStatusFromJSON(object.status);
    if (isSet(object.acknowledgement)) obj.acknowledgement = bytesFromBase64(object.acknowledgement);
    return obj;
  },
  toJSON(message: RecvPacketResult): JsonSafe<RecvPacketResult> {
    const obj: any = {};
    message.status !== undefined && (obj.status = packetStatusToJSON(message.status));
    message.acknowledgement !== undefined &&
      (obj.acknowledgement = base64FromBytes(
        message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RecvPacketResult>, I>>(object: I): RecvPacketResult {
    const message = createBaseRecvPacketResult();
    message.status = object.status ?? 0;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    return message;
  },
};
