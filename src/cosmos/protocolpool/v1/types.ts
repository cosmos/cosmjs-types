/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.protocolpool.v1";
/** ContinuousFund defines the fields of continuous fund proposal. */
export interface ContinuousFund {
  /** Recipient is the address string of the account receiving funds. */
  recipient: string;
  /** Percentage is the percentage of funds to be allocated from Community pool. */
  percentage: string;
  /** Optional, if expiry is set, removes the state object when expired. */
  expiry?: Timestamp;
}
/** Params defines the parameters for the protocolpool module. */
export interface Params {
  /**
   * EnabledDistributionDenoms lists the denoms that are allowed to be distributed.
   * This is to avoid spending time distributing undesired tokens to continuous funds and budgets.
   */
  enabledDistributionDenoms: string[];
  /**
   * DistributionFrequency is the frequency (in terms of blocks) that funds are distributed out from the
   * x/protocolpool module.
   */
  distributionFrequency: bigint;
}
function createBaseContinuousFund(): ContinuousFund {
  return {
    recipient: "",
    percentage: "",
    expiry: undefined,
  };
}
export const ContinuousFund = {
  typeUrl: "/cosmos.protocolpool.v1.ContinuousFund",
  encode(message: ContinuousFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.percentage !== "") {
      writer.uint32(18).string(message.percentage);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(message.expiry, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContinuousFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContinuousFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.percentage = reader.string();
          break;
        case 3:
          message.expiry = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContinuousFund {
    const obj = createBaseContinuousFund();
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    if (isSet(object.percentage)) obj.percentage = String(object.percentage);
    if (isSet(object.expiry)) obj.expiry = fromJsonTimestamp(object.expiry);
    return obj;
  },
  toJSON(message: ContinuousFund): JsonSafe<ContinuousFund> {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.expiry !== undefined && (obj.expiry = fromTimestamp(message.expiry).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ContinuousFund>, I>>(object: I): ContinuousFund {
    const message = createBaseContinuousFund();
    message.recipient = object.recipient ?? "";
    message.percentage = object.percentage ?? "";
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = Timestamp.fromPartial(object.expiry);
    }
    return message;
  },
};
function createBaseParams(): Params {
  return {
    enabledDistributionDenoms: [],
    distributionFrequency: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/cosmos.protocolpool.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.enabledDistributionDenoms) {
      writer.uint32(10).string(v!);
    }
    if (message.distributionFrequency !== BigInt(0)) {
      writer.uint32(16).uint64(message.distributionFrequency);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabledDistributionDenoms.push(reader.string());
          break;
        case 2:
          message.distributionFrequency = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (Array.isArray(object?.enabledDistributionDenoms))
      obj.enabledDistributionDenoms = object.enabledDistributionDenoms.map((e: any) => String(e));
    if (isSet(object.distributionFrequency))
      obj.distributionFrequency = BigInt(object.distributionFrequency.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.enabledDistributionDenoms) {
      obj.enabledDistributionDenoms = message.enabledDistributionDenoms.map((e) => e);
    } else {
      obj.enabledDistributionDenoms = [];
    }
    message.distributionFrequency !== undefined &&
      (obj.distributionFrequency = (message.distributionFrequency || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.enabledDistributionDenoms = object.enabledDistributionDenoms?.map((e) => e) || [];
    if (object.distributionFrequency !== undefined && object.distributionFrequency !== null) {
      message.distributionFrequency = BigInt(object.distributionFrequency.toString());
    }
    return message;
  },
};
