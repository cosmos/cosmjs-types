/* eslint-disable */
import { ContinuousFund, Params } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.protocolpool.v1";
/** GenesisState defines the protocolpool module's genesis state. */
export interface GenesisState {
  /** ContinuousFunds defines the continuous funds at genesis. */
  continuousFunds: ContinuousFund[];
  /**
   * Params defines the parameters of this module, currently only contains the
   * denoms that will be used for continuous fund distributions.
   */
  params: Params;
}
function createBaseGenesisState(): GenesisState {
  return {
    continuousFunds: [],
    params: Params.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.protocolpool.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.continuousFunds) {
      ContinuousFund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.continuousFunds.push(ContinuousFund.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
    if (Array.isArray(object?.continuousFunds))
      obj.continuousFunds = object.continuousFunds.map((e: any) => ContinuousFund.fromJSON(e));
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.continuousFunds) {
      obj.continuousFunds = message.continuousFunds.map((e) => (e ? ContinuousFund.toJSON(e) : undefined));
    } else {
      obj.continuousFunds = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.continuousFunds = object.continuousFunds?.map((e) => ContinuousFund.fromPartial(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
