/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Threshold } from "../../../../axelar/utils/v1beta1/threshold";
import { Snapshot } from "../../../../axelar/snapshot/exported/v1beta1/types";

export const protobufPackage = "axelar.vote.exported.v1beta1";

export enum PollState {
  POLL_STATE_UNSPECIFIED = 0,
  POLL_STATE_PENDING = 1,
  POLL_STATE_COMPLETED = 2,
  POLL_STATE_FAILED = 3,
  UNRECOGNIZED = -1,
}

export function pollStateFromJSON(object: any): PollState {
  switch (object) {
    case 0:
    case "POLL_STATE_UNSPECIFIED":
      return PollState.POLL_STATE_UNSPECIFIED;
    case 1:
    case "POLL_STATE_PENDING":
      return PollState.POLL_STATE_PENDING;
    case 2:
    case "POLL_STATE_COMPLETED":
      return PollState.POLL_STATE_COMPLETED;
    case 3:
    case "POLL_STATE_FAILED":
      return PollState.POLL_STATE_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PollState.UNRECOGNIZED;
  }
}

export function pollStateToJSON(object: PollState): string {
  switch (object) {
    case PollState.POLL_STATE_UNSPECIFIED:
      return "POLL_STATE_UNSPECIFIED";
    case PollState.POLL_STATE_PENDING:
      return "POLL_STATE_PENDING";
    case PollState.POLL_STATE_COMPLETED:
      return "POLL_STATE_COMPLETED";
    case PollState.POLL_STATE_FAILED:
      return "POLL_STATE_FAILED";
    case PollState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadata {
  expiresAt: Long;
  result?: Any;
  votingThreshold?: Threshold;
  state: PollState;
  minVoterCount: Long;
  rewardPoolName: string;
  gracePeriod: Long;
  completedAt: Long;
  id: Long;
  snapshot?: Snapshot;
  module: string;
  moduleMetadata?: Any;
}

/**
 * PollKey represents the key data for a poll
 *
 * @deprecated
 */
export interface PollKey {
  module: string;
  id: string;
}

/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipants {
  pollId: Long;
  participants: Uint8Array[];
}

function createBasePollMetadata(): PollMetadata {
  return {
    expiresAt: Long.ZERO,
    result: undefined,
    votingThreshold: undefined,
    state: 0,
    minVoterCount: Long.ZERO,
    rewardPoolName: "",
    gracePeriod: Long.ZERO,
    completedAt: Long.ZERO,
    id: Long.UZERO,
    snapshot: undefined,
    module: "",
    moduleMetadata: undefined,
  };
}

export const PollMetadata = {
  encode(message: PollMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.expiresAt.isZero()) {
      writer.uint32(24).int64(message.expiresAt);
    }
    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    if (message.votingThreshold !== undefined) {
      Threshold.encode(message.votingThreshold, writer.uint32(42).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    if (!message.minVoterCount.isZero()) {
      writer.uint32(56).int64(message.minVoterCount);
    }
    if (message.rewardPoolName !== "") {
      writer.uint32(82).string(message.rewardPoolName);
    }
    if (!message.gracePeriod.isZero()) {
      writer.uint32(88).int64(message.gracePeriod);
    }
    if (!message.completedAt.isZero()) {
      writer.uint32(96).int64(message.completedAt);
    }
    if (!message.id.isZero()) {
      writer.uint32(104).uint64(message.id);
    }
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(122).fork()).ldelim();
    }
    if (message.module !== "") {
      writer.uint32(130).string(message.module);
    }
    if (message.moduleMetadata !== undefined) {
      Any.encode(message.moduleMetadata, writer.uint32(138).fork()).ldelim();
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
        case 3:
          message.expiresAt = reader.int64() as Long;
          break;
        case 4:
          message.result = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.votingThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 6:
          message.state = reader.int32() as any;
          break;
        case 7:
          message.minVoterCount = reader.int64() as Long;
          break;
        case 10:
          message.rewardPoolName = reader.string();
          break;
        case 11:
          message.gracePeriod = reader.int64() as Long;
          break;
        case 12:
          message.completedAt = reader.int64() as Long;
          break;
        case 13:
          message.id = reader.uint64() as Long;
          break;
        case 15:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 16:
          message.module = reader.string();
          break;
        case 17:
          message.moduleMetadata = Any.decode(reader, reader.uint32());
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
      expiresAt: isSet(object.expiresAt) ? Long.fromValue(object.expiresAt) : Long.ZERO,
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined,
      votingThreshold: isSet(object.votingThreshold) ? Threshold.fromJSON(object.votingThreshold) : undefined,
      state: isSet(object.state) ? pollStateFromJSON(object.state) : 0,
      minVoterCount: isSet(object.minVoterCount) ? Long.fromValue(object.minVoterCount) : Long.ZERO,
      rewardPoolName: isSet(object.rewardPoolName) ? String(object.rewardPoolName) : "",
      gracePeriod: isSet(object.gracePeriod) ? Long.fromValue(object.gracePeriod) : Long.ZERO,
      completedAt: isSet(object.completedAt) ? Long.fromValue(object.completedAt) : Long.ZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      snapshot: isSet(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : undefined,
      module: isSet(object.module) ? String(object.module) : "",
      moduleMetadata: isSet(object.moduleMetadata) ? Any.fromJSON(object.moduleMetadata) : undefined,
    };
  },

  toJSON(message: PollMetadata): unknown {
    const obj: any = {};
    message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || Long.ZERO).toString());
    message.result !== undefined && (obj.result = message.result ? Any.toJSON(message.result) : undefined);
    message.votingThreshold !== undefined &&
      (obj.votingThreshold = message.votingThreshold ? Threshold.toJSON(message.votingThreshold) : undefined);
    message.state !== undefined && (obj.state = pollStateToJSON(message.state));
    message.minVoterCount !== undefined &&
      (obj.minVoterCount = (message.minVoterCount || Long.ZERO).toString());
    message.rewardPoolName !== undefined && (obj.rewardPoolName = message.rewardPoolName);
    message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || Long.ZERO).toString());
    message.completedAt !== undefined && (obj.completedAt = (message.completedAt || Long.ZERO).toString());
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.snapshot !== undefined &&
      (obj.snapshot = message.snapshot ? Snapshot.toJSON(message.snapshot) : undefined);
    message.module !== undefined && (obj.module = message.module);
    message.moduleMetadata !== undefined &&
      (obj.moduleMetadata = message.moduleMetadata ? Any.toJSON(message.moduleMetadata) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PollMetadata>, I>>(object: I): PollMetadata {
    const message = createBasePollMetadata();
    message.expiresAt =
      object.expiresAt !== undefined && object.expiresAt !== null
        ? Long.fromValue(object.expiresAt)
        : Long.ZERO;
    message.result =
      object.result !== undefined && object.result !== null ? Any.fromPartial(object.result) : undefined;
    message.votingThreshold =
      object.votingThreshold !== undefined && object.votingThreshold !== null
        ? Threshold.fromPartial(object.votingThreshold)
        : undefined;
    message.state = object.state ?? 0;
    message.minVoterCount =
      object.minVoterCount !== undefined && object.minVoterCount !== null
        ? Long.fromValue(object.minVoterCount)
        : Long.ZERO;
    message.rewardPoolName = object.rewardPoolName ?? "";
    message.gracePeriod =
      object.gracePeriod !== undefined && object.gracePeriod !== null
        ? Long.fromValue(object.gracePeriod)
        : Long.ZERO;
    message.completedAt =
      object.completedAt !== undefined && object.completedAt !== null
        ? Long.fromValue(object.completedAt)
        : Long.ZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.snapshot =
      object.snapshot !== undefined && object.snapshot !== null
        ? Snapshot.fromPartial(object.snapshot)
        : undefined;
    message.module = object.module ?? "";
    message.moduleMetadata =
      object.moduleMetadata !== undefined && object.moduleMetadata !== null
        ? Any.fromPartial(object.moduleMetadata)
        : undefined;
    return message;
  },
};

function createBasePollKey(): PollKey {
  return { module: "", id: "" };
}

export const PollKey = {
  encode(message: PollKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PollKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePollKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PollKey {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: PollKey): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PollKey>, I>>(object: I): PollKey {
    const message = createBasePollKey();
    message.module = object.module ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePollParticipants(): PollParticipants {
  return { pollId: Long.UZERO, participants: [] };
}

export const PollParticipants = {
  encode(message: PollParticipants, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pollId.isZero()) {
      writer.uint32(8).uint64(message.pollId);
    }
    for (const v of message.participants) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PollParticipants {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePollParticipants();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pollId = reader.uint64() as Long;
          break;
        case 2:
          message.participants.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PollParticipants {
    return {
      pollId: isSet(object.pollId) ? Long.fromValue(object.pollId) : Long.UZERO,
      participants: Array.isArray(object?.participants)
        ? object.participants.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: PollParticipants): unknown {
    const obj: any = {};
    message.pollId !== undefined && (obj.pollId = (message.pollId || Long.UZERO).toString());
    if (message.participants) {
      obj.participants = message.participants.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.participants = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PollParticipants>, I>>(object: I): PollParticipants {
    const message = createBasePollParticipants();
    message.pollId =
      object.pollId !== undefined && object.pollId !== null ? Long.fromValue(object.pollId) : Long.UZERO;
    message.participants = object.participants?.map((e) => e) || [];
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
