/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Threshold } from "../../../../axelar/utils/v1beta1/threshold";

export const protobufPackage = "axelar.vote.exported.v1beta1";

export enum PollState {
  /**
   * POLL_STATE_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
   * be powers of 2
   */
  POLL_STATE_UNSPECIFIED = 0,
  POLL_STATE_PENDING = 1,
  POLL_STATE_COMPLETED = 2,
  POLL_STATE_FAILED = 4,
  POLL_STATE_EXPIRED = 8,
  POLL_STATE_ALLOW_OVERRIDE = 16,
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
    case 4:
    case "POLL_STATE_FAILED":
      return PollState.POLL_STATE_FAILED;
    case 8:
    case "POLL_STATE_EXPIRED":
      return PollState.POLL_STATE_EXPIRED;
    case 16:
    case "POLL_STATE_ALLOW_OVERRIDE":
      return PollState.POLL_STATE_ALLOW_OVERRIDE;
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
    case PollState.POLL_STATE_EXPIRED:
      return "POLL_STATE_EXPIRED";
    case PollState.POLL_STATE_ALLOW_OVERRIDE:
      return "POLL_STATE_ALLOW_OVERRIDE";
    case PollState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** PollKey represents the key data for a poll */
export interface PollKey {
  module: string;
  id: string;
}

export interface Voter {
  validator: Uint8Array;
  votingPower: Long;
}

export interface Vote {
  result?: Any;
}

/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadata {
  key?: PollKey;
  expiresAt: Long;
  result?: Any;
  votingThreshold?: Threshold;
  state: PollState;
  minVoterCount: Long;
  voters: Voter[];
  totalVotingPower: Uint8Array;
  rewardPoolName: string;
  gracePeriod: Long;
  completedAt: Long;
}

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

function createBaseVoter(): Voter {
  return { validator: new Uint8Array(), votingPower: Long.ZERO };
}

export const Voter = {
  encode(message: Voter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }
    if (!message.votingPower.isZero()) {
      writer.uint32(16).int64(message.votingPower);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Voter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.bytes();
          break;
        case 2:
          message.votingPower = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Voter {
    return {
      validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
      votingPower: isSet(object.votingPower) ? Long.fromValue(object.votingPower) : Long.ZERO,
    };
  },

  toJSON(message: Voter): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = base64FromBytes(
        message.validator !== undefined ? message.validator : new Uint8Array(),
      ));
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Voter>, I>>(object: I): Voter {
    const message = createBaseVoter();
    message.validator = object.validator ?? new Uint8Array();
    message.votingPower =
      object.votingPower !== undefined && object.votingPower !== null
        ? Long.fromValue(object.votingPower)
        : Long.ZERO;
    return message;
  },
};

function createBaseVote(): Vote {
  return { result: undefined };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.result = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    return {
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? Any.toJSON(message.result) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote {
    const message = createBaseVote();
    message.result =
      object.result !== undefined && object.result !== null ? Any.fromPartial(object.result) : undefined;
    return message;
  },
};

function createBasePollMetadata(): PollMetadata {
  return {
    key: undefined,
    expiresAt: Long.ZERO,
    result: undefined,
    votingThreshold: undefined,
    state: 0,
    minVoterCount: Long.ZERO,
    voters: [],
    totalVotingPower: new Uint8Array(),
    rewardPoolName: "",
    gracePeriod: Long.ZERO,
    completedAt: Long.ZERO,
  };
}

export const PollMetadata = {
  encode(message: PollMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      PollKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
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
    for (const v of message.voters) {
      Voter.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.totalVotingPower.length !== 0) {
      writer.uint32(74).bytes(message.totalVotingPower);
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
          message.key = PollKey.decode(reader, reader.uint32());
          break;
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
        case 8:
          message.voters.push(Voter.decode(reader, reader.uint32()));
          break;
        case 9:
          message.totalVotingPower = reader.bytes();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PollMetadata {
    return {
      key: isSet(object.key) ? PollKey.fromJSON(object.key) : undefined,
      expiresAt: isSet(object.expiresAt) ? Long.fromValue(object.expiresAt) : Long.ZERO,
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined,
      votingThreshold: isSet(object.votingThreshold) ? Threshold.fromJSON(object.votingThreshold) : undefined,
      state: isSet(object.state) ? pollStateFromJSON(object.state) : 0,
      minVoterCount: isSet(object.minVoterCount) ? Long.fromValue(object.minVoterCount) : Long.ZERO,
      voters: Array.isArray(object?.voters) ? object.voters.map((e: any) => Voter.fromJSON(e)) : [],
      totalVotingPower: isSet(object.totalVotingPower)
        ? bytesFromBase64(object.totalVotingPower)
        : new Uint8Array(),
      rewardPoolName: isSet(object.rewardPoolName) ? String(object.rewardPoolName) : "",
      gracePeriod: isSet(object.gracePeriod) ? Long.fromValue(object.gracePeriod) : Long.ZERO,
      completedAt: isSet(object.completedAt) ? Long.fromValue(object.completedAt) : Long.ZERO,
    };
  },

  toJSON(message: PollMetadata): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key ? PollKey.toJSON(message.key) : undefined);
    message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || Long.ZERO).toString());
    message.result !== undefined && (obj.result = message.result ? Any.toJSON(message.result) : undefined);
    message.votingThreshold !== undefined &&
      (obj.votingThreshold = message.votingThreshold ? Threshold.toJSON(message.votingThreshold) : undefined);
    message.state !== undefined && (obj.state = pollStateToJSON(message.state));
    message.minVoterCount !== undefined &&
      (obj.minVoterCount = (message.minVoterCount || Long.ZERO).toString());
    if (message.voters) {
      obj.voters = message.voters.map((e) => (e ? Voter.toJSON(e) : undefined));
    } else {
      obj.voters = [];
    }
    message.totalVotingPower !== undefined &&
      (obj.totalVotingPower = base64FromBytes(
        message.totalVotingPower !== undefined ? message.totalVotingPower : new Uint8Array(),
      ));
    message.rewardPoolName !== undefined && (obj.rewardPoolName = message.rewardPoolName);
    message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || Long.ZERO).toString());
    message.completedAt !== undefined && (obj.completedAt = (message.completedAt || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PollMetadata>, I>>(object: I): PollMetadata {
    const message = createBasePollMetadata();
    message.key =
      object.key !== undefined && object.key !== null ? PollKey.fromPartial(object.key) : undefined;
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
    message.voters = object.voters?.map((e) => Voter.fromPartial(e)) || [];
    message.totalVotingPower = object.totalVotingPower ?? new Uint8Array();
    message.rewardPoolName = object.rewardPoolName ?? "";
    message.gracePeriod =
      object.gracePeriod !== undefined && object.gracePeriod !== null
        ? Long.fromValue(object.gracePeriod)
        : Long.ZERO;
    message.completedAt =
      object.completedAt !== undefined && object.completedAt !== null
        ? Long.fromValue(object.completedAt)
        : Long.ZERO;
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
