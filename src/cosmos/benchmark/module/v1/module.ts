/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "cosmos.benchmark.module.v1";
/** Module is the config object of the benchmark module. */
export interface Module {
  genesisParams?: GeneratorParams;
}
/** GenesisParams defines the genesis parameters for the benchmark module. */
export interface GeneratorParams {
  /** seed is the seed for the random number generator. */
  seed: bigint;
  /** bucket_count is the number of store keys to uniformly distribute genesis_count keys across. */
  bucketCount: bigint;
  /** key_mean is the mean size (in normal distribution) of keys in each bucket. */
  keyMean: bigint;
  /** key_std_dev is the standard deviation of key sizes in each bucket. */
  keyStdDev: bigint;
  /** value_mean is the mean size (in normal distribution) of values in each bucket. */
  valueMean: bigint;
  /** value_std_dev is the standard deviation of value sizes in each bucket. */
  valueStdDev: bigint;
  /** genesis_count is the number of keys to insert in the store, distributed across all buckets. */
  genesisCount: bigint;
  /** insert_weight is the weight of insert operations. */
  insertWeight: number;
  /** update_weight is the weight of update operations. */
  updateWeight: number;
  /** get_weight is the weight of get operations. */
  getWeight: number;
  /** delete_weight is the weight of delete operations. */
  deleteWeight: number;
}
function createBaseModule(): Module {
  return {
    genesisParams: undefined,
  };
}
export const Module = {
  typeUrl: "/cosmos.benchmark.module.v1.Module",
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.genesisParams !== undefined) {
      GeneratorParams.encode(message.genesisParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisParams = GeneratorParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    const obj = createBaseModule();
    if (isSet(object.genesisParams)) obj.genesisParams = GeneratorParams.fromJSON(object.genesisParams);
    return obj;
  },
  toJSON(message: Module): JsonSafe<Module> {
    const obj: any = {};
    message.genesisParams !== undefined &&
      (obj.genesisParams = message.genesisParams ? GeneratorParams.toJSON(message.genesisParams) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    if (object.genesisParams !== undefined && object.genesisParams !== null) {
      message.genesisParams = GeneratorParams.fromPartial(object.genesisParams);
    }
    return message;
  },
};
function createBaseGeneratorParams(): GeneratorParams {
  return {
    seed: BigInt(0),
    bucketCount: BigInt(0),
    keyMean: BigInt(0),
    keyStdDev: BigInt(0),
    valueMean: BigInt(0),
    valueStdDev: BigInt(0),
    genesisCount: BigInt(0),
    insertWeight: 0,
    updateWeight: 0,
    getWeight: 0,
    deleteWeight: 0,
  };
}
export const GeneratorParams = {
  typeUrl: "/cosmos.benchmark.module.v1.GeneratorParams",
  encode(message: GeneratorParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seed !== BigInt(0)) {
      writer.uint32(8).uint64(message.seed);
    }
    if (message.bucketCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.bucketCount);
    }
    if (message.keyMean !== BigInt(0)) {
      writer.uint32(24).uint64(message.keyMean);
    }
    if (message.keyStdDev !== BigInt(0)) {
      writer.uint32(32).uint64(message.keyStdDev);
    }
    if (message.valueMean !== BigInt(0)) {
      writer.uint32(48).uint64(message.valueMean);
    }
    if (message.valueStdDev !== BigInt(0)) {
      writer.uint32(56).uint64(message.valueStdDev);
    }
    if (message.genesisCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.genesisCount);
    }
    if (message.insertWeight !== 0) {
      writer.uint32(77).float(message.insertWeight);
    }
    if (message.updateWeight !== 0) {
      writer.uint32(85).float(message.updateWeight);
    }
    if (message.getWeight !== 0) {
      writer.uint32(101).float(message.getWeight);
    }
    if (message.deleteWeight !== 0) {
      writer.uint32(93).float(message.deleteWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GeneratorParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.uint64();
          break;
        case 2:
          message.bucketCount = reader.uint64();
          break;
        case 3:
          message.keyMean = reader.uint64();
          break;
        case 4:
          message.keyStdDev = reader.uint64();
          break;
        case 6:
          message.valueMean = reader.uint64();
          break;
        case 7:
          message.valueStdDev = reader.uint64();
          break;
        case 8:
          message.genesisCount = reader.uint64();
          break;
        case 9:
          message.insertWeight = reader.float();
          break;
        case 10:
          message.updateWeight = reader.float();
          break;
        case 12:
          message.getWeight = reader.float();
          break;
        case 11:
          message.deleteWeight = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GeneratorParams {
    const obj = createBaseGeneratorParams();
    if (isSet(object.seed)) obj.seed = BigInt(object.seed.toString());
    if (isSet(object.bucketCount)) obj.bucketCount = BigInt(object.bucketCount.toString());
    if (isSet(object.keyMean)) obj.keyMean = BigInt(object.keyMean.toString());
    if (isSet(object.keyStdDev)) obj.keyStdDev = BigInt(object.keyStdDev.toString());
    if (isSet(object.valueMean)) obj.valueMean = BigInt(object.valueMean.toString());
    if (isSet(object.valueStdDev)) obj.valueStdDev = BigInt(object.valueStdDev.toString());
    if (isSet(object.genesisCount)) obj.genesisCount = BigInt(object.genesisCount.toString());
    if (isSet(object.insertWeight)) obj.insertWeight = Number(object.insertWeight);
    if (isSet(object.updateWeight)) obj.updateWeight = Number(object.updateWeight);
    if (isSet(object.getWeight)) obj.getWeight = Number(object.getWeight);
    if (isSet(object.deleteWeight)) obj.deleteWeight = Number(object.deleteWeight);
    return obj;
  },
  toJSON(message: GeneratorParams): JsonSafe<GeneratorParams> {
    const obj: any = {};
    message.seed !== undefined && (obj.seed = (message.seed || BigInt(0)).toString());
    message.bucketCount !== undefined && (obj.bucketCount = (message.bucketCount || BigInt(0)).toString());
    message.keyMean !== undefined && (obj.keyMean = (message.keyMean || BigInt(0)).toString());
    message.keyStdDev !== undefined && (obj.keyStdDev = (message.keyStdDev || BigInt(0)).toString());
    message.valueMean !== undefined && (obj.valueMean = (message.valueMean || BigInt(0)).toString());
    message.valueStdDev !== undefined && (obj.valueStdDev = (message.valueStdDev || BigInt(0)).toString());
    message.genesisCount !== undefined && (obj.genesisCount = (message.genesisCount || BigInt(0)).toString());
    message.insertWeight !== undefined && (obj.insertWeight = message.insertWeight);
    message.updateWeight !== undefined && (obj.updateWeight = message.updateWeight);
    message.getWeight !== undefined && (obj.getWeight = message.getWeight);
    message.deleteWeight !== undefined && (obj.deleteWeight = message.deleteWeight);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorParams>, I>>(object: I): GeneratorParams {
    const message = createBaseGeneratorParams();
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = BigInt(object.seed.toString());
    }
    if (object.bucketCount !== undefined && object.bucketCount !== null) {
      message.bucketCount = BigInt(object.bucketCount.toString());
    }
    if (object.keyMean !== undefined && object.keyMean !== null) {
      message.keyMean = BigInt(object.keyMean.toString());
    }
    if (object.keyStdDev !== undefined && object.keyStdDev !== null) {
      message.keyStdDev = BigInt(object.keyStdDev.toString());
    }
    if (object.valueMean !== undefined && object.valueMean !== null) {
      message.valueMean = BigInt(object.valueMean.toString());
    }
    if (object.valueStdDev !== undefined && object.valueStdDev !== null) {
      message.valueStdDev = BigInt(object.valueStdDev.toString());
    }
    if (object.genesisCount !== undefined && object.genesisCount !== null) {
      message.genesisCount = BigInt(object.genesisCount.toString());
    }
    message.insertWeight = object.insertWeight ?? 0;
    message.updateWeight = object.updateWeight ?? 0;
    message.getWeight = object.getWeight ?? 0;
    message.deleteWeight = object.deleteWeight ?? 0;
    return message;
  },
};
