/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/tss/v1beta1/params";
import {
  KeyRecoveryInfo,
  MultisigInfo,
  ExternalKeys,
  ValidatorStatus,
} from "../../../axelar/tss/v1beta1/types";
import { Key, Signature } from "../../../axelar/tss/exported/v1beta1/types";

export const protobufPackage = "axelar.tss.v1beta1";

export interface GenesisState {
  params?: Params;
  keyRecoveryInfos: KeyRecoveryInfo[];
  keys: Key[];
  multisigInfos: MultisigInfo[];
  externalKeys: ExternalKeys[];
  signatures: Signature[];
  validatorStatuses: ValidatorStatus[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    keyRecoveryInfos: [],
    keys: [],
    multisigInfos: [],
    externalKeys: [],
    signatures: [],
    validatorStatuses: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.keyRecoveryInfos) {
      KeyRecoveryInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.keys) {
      Key.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.multisigInfos) {
      MultisigInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.externalKeys) {
      ExternalKeys.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.signatures) {
      Signature.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validatorStatuses) {
      ValidatorStatus.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.keyRecoveryInfos.push(KeyRecoveryInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.keys.push(Key.decode(reader, reader.uint32()));
          break;
        case 4:
          message.multisigInfos.push(MultisigInfo.decode(reader, reader.uint32()));
          break;
        case 5:
          message.externalKeys.push(ExternalKeys.decode(reader, reader.uint32()));
          break;
        case 6:
          message.signatures.push(Signature.decode(reader, reader.uint32()));
          break;
        case 7:
          message.validatorStatuses.push(ValidatorStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      keyRecoveryInfos: Array.isArray(object?.keyRecoveryInfos)
        ? object.keyRecoveryInfos.map((e: any) => KeyRecoveryInfo.fromJSON(e))
        : [],
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => Key.fromJSON(e)) : [],
      multisigInfos: Array.isArray(object?.multisigInfos)
        ? object.multisigInfos.map((e: any) => MultisigInfo.fromJSON(e))
        : [],
      externalKeys: Array.isArray(object?.externalKeys)
        ? object.externalKeys.map((e: any) => ExternalKeys.fromJSON(e))
        : [],
      signatures: Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => Signature.fromJSON(e))
        : [],
      validatorStatuses: Array.isArray(object?.validatorStatuses)
        ? object.validatorStatuses.map((e: any) => ValidatorStatus.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.keyRecoveryInfos) {
      obj.keyRecoveryInfos = message.keyRecoveryInfos.map((e) => (e ? KeyRecoveryInfo.toJSON(e) : undefined));
    } else {
      obj.keyRecoveryInfos = [];
    }
    if (message.keys) {
      obj.keys = message.keys.map((e) => (e ? Key.toJSON(e) : undefined));
    } else {
      obj.keys = [];
    }
    if (message.multisigInfos) {
      obj.multisigInfos = message.multisigInfos.map((e) => (e ? MultisigInfo.toJSON(e) : undefined));
    } else {
      obj.multisigInfos = [];
    }
    if (message.externalKeys) {
      obj.externalKeys = message.externalKeys.map((e) => (e ? ExternalKeys.toJSON(e) : undefined));
    } else {
      obj.externalKeys = [];
    }
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => (e ? Signature.toJSON(e) : undefined));
    } else {
      obj.signatures = [];
    }
    if (message.validatorStatuses) {
      obj.validatorStatuses = message.validatorStatuses.map((e) =>
        e ? ValidatorStatus.toJSON(e) : undefined,
      );
    } else {
      obj.validatorStatuses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.keyRecoveryInfos = object.keyRecoveryInfos?.map((e) => KeyRecoveryInfo.fromPartial(e)) || [];
    message.keys = object.keys?.map((e) => Key.fromPartial(e)) || [];
    message.multisigInfos = object.multisigInfos?.map((e) => MultisigInfo.fromPartial(e)) || [];
    message.externalKeys = object.externalKeys?.map((e) => ExternalKeys.fromPartial(e)) || [];
    message.signatures = object.signatures?.map((e) => Signature.fromPartial(e)) || [];
    message.validatorStatuses = object.validatorStatuses?.map((e) => ValidatorStatus.fromPartial(e)) || [];
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
