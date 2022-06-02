/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Threshold } from "../../../axelar/utils/v1beta1/threshold";
import { KeyRequirement } from "../../../axelar/tss/exported/v1beta1/types";

export const protobufPackage = "axelar.tss.v1beta1";

/** Params is the parameter set for this module */
export interface Params {
  /** KeyRequirements defines the requirement for each key role */
  keyRequirements: KeyRequirement[];
  /**
   * SuspendDurationInBlocks defines the number of blocks a
   * validator is disallowed to participate in any TSS ceremony after
   * committing a malicious behaviour during signing
   */
  suspendDurationInBlocks: Long;
  /**
   * HeartBeatPeriodInBlocks defines the time period in blocks for tss to
   * emit the event asking validators to send their heartbeats
   */
  heartbeatPeriodInBlocks: Long;
  maxMissedBlocksPerWindow?: Threshold;
  unbondingLockingKeyRotationCount: Long;
  externalMultisigThreshold?: Threshold;
  maxSignQueueSize: Long;
  maxSimultaneousSignShares: Long;
  tssSignedBlocksWindow: Long;
}

function createBaseParams(): Params {
  return {
    keyRequirements: [],
    suspendDurationInBlocks: Long.ZERO,
    heartbeatPeriodInBlocks: Long.ZERO,
    maxMissedBlocksPerWindow: undefined,
    unbondingLockingKeyRotationCount: Long.ZERO,
    externalMultisigThreshold: undefined,
    maxSignQueueSize: Long.ZERO,
    maxSimultaneousSignShares: Long.ZERO,
    tssSignedBlocksWindow: Long.ZERO,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keyRequirements) {
      KeyRequirement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.suspendDurationInBlocks.isZero()) {
      writer.uint32(16).int64(message.suspendDurationInBlocks);
    }
    if (!message.heartbeatPeriodInBlocks.isZero()) {
      writer.uint32(24).int64(message.heartbeatPeriodInBlocks);
    }
    if (message.maxMissedBlocksPerWindow !== undefined) {
      Threshold.encode(message.maxMissedBlocksPerWindow, writer.uint32(34).fork()).ldelim();
    }
    if (!message.unbondingLockingKeyRotationCount.isZero()) {
      writer.uint32(40).int64(message.unbondingLockingKeyRotationCount);
    }
    if (message.externalMultisigThreshold !== undefined) {
      Threshold.encode(message.externalMultisigThreshold, writer.uint32(50).fork()).ldelim();
    }
    if (!message.maxSignQueueSize.isZero()) {
      writer.uint32(56).int64(message.maxSignQueueSize);
    }
    if (!message.maxSimultaneousSignShares.isZero()) {
      writer.uint32(64).int64(message.maxSimultaneousSignShares);
    }
    if (!message.tssSignedBlocksWindow.isZero()) {
      writer.uint32(72).int64(message.tssSignedBlocksWindow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyRequirements.push(KeyRequirement.decode(reader, reader.uint32()));
          break;
        case 2:
          message.suspendDurationInBlocks = reader.int64() as Long;
          break;
        case 3:
          message.heartbeatPeriodInBlocks = reader.int64() as Long;
          break;
        case 4:
          message.maxMissedBlocksPerWindow = Threshold.decode(reader, reader.uint32());
          break;
        case 5:
          message.unbondingLockingKeyRotationCount = reader.int64() as Long;
          break;
        case 6:
          message.externalMultisigThreshold = Threshold.decode(reader, reader.uint32());
          break;
        case 7:
          message.maxSignQueueSize = reader.int64() as Long;
          break;
        case 8:
          message.maxSimultaneousSignShares = reader.int64() as Long;
          break;
        case 9:
          message.tssSignedBlocksWindow = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      keyRequirements: Array.isArray(object?.keyRequirements)
        ? object.keyRequirements.map((e: any) => KeyRequirement.fromJSON(e))
        : [],
      suspendDurationInBlocks: isSet(object.suspendDurationInBlocks)
        ? Long.fromValue(object.suspendDurationInBlocks)
        : Long.ZERO,
      heartbeatPeriodInBlocks: isSet(object.heartbeatPeriodInBlocks)
        ? Long.fromValue(object.heartbeatPeriodInBlocks)
        : Long.ZERO,
      maxMissedBlocksPerWindow: isSet(object.maxMissedBlocksPerWindow)
        ? Threshold.fromJSON(object.maxMissedBlocksPerWindow)
        : undefined,
      unbondingLockingKeyRotationCount: isSet(object.unbondingLockingKeyRotationCount)
        ? Long.fromValue(object.unbondingLockingKeyRotationCount)
        : Long.ZERO,
      externalMultisigThreshold: isSet(object.externalMultisigThreshold)
        ? Threshold.fromJSON(object.externalMultisigThreshold)
        : undefined,
      maxSignQueueSize: isSet(object.maxSignQueueSize) ? Long.fromValue(object.maxSignQueueSize) : Long.ZERO,
      maxSimultaneousSignShares: isSet(object.maxSimultaneousSignShares)
        ? Long.fromValue(object.maxSimultaneousSignShares)
        : Long.ZERO,
      tssSignedBlocksWindow: isSet(object.tssSignedBlocksWindow)
        ? Long.fromValue(object.tssSignedBlocksWindow)
        : Long.ZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.keyRequirements) {
      obj.keyRequirements = message.keyRequirements.map((e) => (e ? KeyRequirement.toJSON(e) : undefined));
    } else {
      obj.keyRequirements = [];
    }
    message.suspendDurationInBlocks !== undefined &&
      (obj.suspendDurationInBlocks = (message.suspendDurationInBlocks || Long.ZERO).toString());
    message.heartbeatPeriodInBlocks !== undefined &&
      (obj.heartbeatPeriodInBlocks = (message.heartbeatPeriodInBlocks || Long.ZERO).toString());
    message.maxMissedBlocksPerWindow !== undefined &&
      (obj.maxMissedBlocksPerWindow = message.maxMissedBlocksPerWindow
        ? Threshold.toJSON(message.maxMissedBlocksPerWindow)
        : undefined);
    message.unbondingLockingKeyRotationCount !== undefined &&
      (obj.unbondingLockingKeyRotationCount = (
        message.unbondingLockingKeyRotationCount || Long.ZERO
      ).toString());
    message.externalMultisigThreshold !== undefined &&
      (obj.externalMultisigThreshold = message.externalMultisigThreshold
        ? Threshold.toJSON(message.externalMultisigThreshold)
        : undefined);
    message.maxSignQueueSize !== undefined &&
      (obj.maxSignQueueSize = (message.maxSignQueueSize || Long.ZERO).toString());
    message.maxSimultaneousSignShares !== undefined &&
      (obj.maxSimultaneousSignShares = (message.maxSimultaneousSignShares || Long.ZERO).toString());
    message.tssSignedBlocksWindow !== undefined &&
      (obj.tssSignedBlocksWindow = (message.tssSignedBlocksWindow || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.keyRequirements = object.keyRequirements?.map((e) => KeyRequirement.fromPartial(e)) || [];
    message.suspendDurationInBlocks =
      object.suspendDurationInBlocks !== undefined && object.suspendDurationInBlocks !== null
        ? Long.fromValue(object.suspendDurationInBlocks)
        : Long.ZERO;
    message.heartbeatPeriodInBlocks =
      object.heartbeatPeriodInBlocks !== undefined && object.heartbeatPeriodInBlocks !== null
        ? Long.fromValue(object.heartbeatPeriodInBlocks)
        : Long.ZERO;
    message.maxMissedBlocksPerWindow =
      object.maxMissedBlocksPerWindow !== undefined && object.maxMissedBlocksPerWindow !== null
        ? Threshold.fromPartial(object.maxMissedBlocksPerWindow)
        : undefined;
    message.unbondingLockingKeyRotationCount =
      object.unbondingLockingKeyRotationCount !== undefined &&
      object.unbondingLockingKeyRotationCount !== null
        ? Long.fromValue(object.unbondingLockingKeyRotationCount)
        : Long.ZERO;
    message.externalMultisigThreshold =
      object.externalMultisigThreshold !== undefined && object.externalMultisigThreshold !== null
        ? Threshold.fromPartial(object.externalMultisigThreshold)
        : undefined;
    message.maxSignQueueSize =
      object.maxSignQueueSize !== undefined && object.maxSignQueueSize !== null
        ? Long.fromValue(object.maxSignQueueSize)
        : Long.ZERO;
    message.maxSimultaneousSignShares =
      object.maxSimultaneousSignShares !== undefined && object.maxSimultaneousSignShares !== null
        ? Long.fromValue(object.maxSimultaneousSignShares)
        : Long.ZERO;
    message.tssSignedBlocksWindow =
      object.tssSignedBlocksWindow !== undefined && object.tssSignedBlocksWindow !== null
        ? Long.fromValue(object.tssSignedBlocksWindow)
        : Long.ZERO;
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
