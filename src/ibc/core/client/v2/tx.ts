/* eslint-disable */
import { Config } from "./config";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, Rpc } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.core.client.v2";
/** MsgRegisterCounterparty defines a message to register a counterparty on a client */
export interface MsgRegisterCounterparty {
  /** client identifier */
  clientId: string;
  /** counterparty merkle prefix */
  counterpartyMerklePrefix: Uint8Array[];
  /** counterparty client identifier */
  counterpartyClientId: string;
  /** signer address */
  signer: string;
}
/** MsgRegisterCounterpartyResponse defines the Msg/RegisterCounterparty response type. */
export interface MsgRegisterCounterpartyResponse {}
/** MsgUpdateClientConfig defines the sdk.Msg type to update the configuration for a given client */
export interface MsgUpdateClientConfig {
  /** client identifier */
  clientId: string;
  /**
   * allowed relayers
   *
   * NOTE: All fields in the config must be supplied.
   */
  config: Config;
  /** signer address */
  signer: string;
}
/** MsgUpdateClientConfigResponse defines the MsgUpdateClientConfig response type. */
export interface MsgUpdateClientConfigResponse {}
function createBaseMsgRegisterCounterparty(): MsgRegisterCounterparty {
  return {
    clientId: "",
    counterpartyMerklePrefix: [],
    counterpartyClientId: "",
    signer: "",
  };
}
export const MsgRegisterCounterparty = {
  typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
  encode(message: MsgRegisterCounterparty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.counterpartyMerklePrefix) {
      writer.uint32(18).bytes(v!);
    }
    if (message.counterpartyClientId !== "") {
      writer.uint32(26).string(message.counterpartyClientId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterparty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterpartyMerklePrefix.push(reader.bytes());
          break;
        case 3:
          message.counterpartyClientId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterCounterparty {
    const obj = createBaseMsgRegisterCounterparty();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (Array.isArray(object?.counterpartyMerklePrefix))
      obj.counterpartyMerklePrefix = object.counterpartyMerklePrefix.map((e: any) => bytesFromBase64(e));
    if (isSet(object.counterpartyClientId)) obj.counterpartyClientId = String(object.counterpartyClientId);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgRegisterCounterparty): JsonSafe<MsgRegisterCounterparty> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.counterpartyMerklePrefix) {
      obj.counterpartyMerklePrefix = message.counterpartyMerklePrefix.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.counterpartyMerklePrefix = [];
    }
    message.counterpartyClientId !== undefined && (obj.counterpartyClientId = message.counterpartyClientId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterparty>, I>>(object: I): MsgRegisterCounterparty {
    const message = createBaseMsgRegisterCounterparty();
    message.clientId = object.clientId ?? "";
    message.counterpartyMerklePrefix = object.counterpartyMerklePrefix?.map((e) => e) || [];
    message.counterpartyClientId = object.counterpartyClientId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};
function createBaseMsgRegisterCounterpartyResponse(): MsgRegisterCounterpartyResponse {
  return {};
}
export const MsgRegisterCounterpartyResponse = {
  typeUrl: "/ibc.core.client.v2.MsgRegisterCounterpartyResponse",
  encode(_: MsgRegisterCounterpartyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterCounterpartyResponse {
    const obj = createBaseMsgRegisterCounterpartyResponse();
    return obj;
  },
  toJSON(_: MsgRegisterCounterpartyResponse): JsonSafe<MsgRegisterCounterpartyResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterpartyResponse>, I>>(
    _: I,
  ): MsgRegisterCounterpartyResponse {
    const message = createBaseMsgRegisterCounterpartyResponse();
    return message;
  },
};
function createBaseMsgUpdateClientConfig(): MsgUpdateClientConfig {
  return {
    clientId: "",
    config: Config.fromPartial({}),
    signer: "",
  };
}
export const MsgUpdateClientConfig = {
  typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
  encode(message: MsgUpdateClientConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.config = Config.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateClientConfig {
    const obj = createBaseMsgUpdateClientConfig();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.config)) obj.config = Config.fromJSON(object.config);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgUpdateClientConfig): JsonSafe<MsgUpdateClientConfig> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateClientConfig>, I>>(object: I): MsgUpdateClientConfig {
    const message = createBaseMsgUpdateClientConfig();
    message.clientId = object.clientId ?? "";
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromPartial(object.config);
    }
    message.signer = object.signer ?? "";
    return message;
  },
};
function createBaseMsgUpdateClientConfigResponse(): MsgUpdateClientConfigResponse {
  return {};
}
export const MsgUpdateClientConfigResponse = {
  typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfigResponse",
  encode(_: MsgUpdateClientConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateClientConfigResponse {
    const obj = createBaseMsgUpdateClientConfigResponse();
    return obj;
  },
  toJSON(_: MsgUpdateClientConfigResponse): JsonSafe<MsgUpdateClientConfigResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateClientConfigResponse>, I>>(
    _: I,
  ): MsgUpdateClientConfigResponse {
    const message = createBaseMsgUpdateClientConfigResponse();
    return message;
  },
};
/** Msg defines the ibc/client/v2 Msg service. */
export interface Msg {
  /** RegisterCounterparty defines a rpc handler method for MsgRegisterCounterparty. */
  RegisterCounterparty(request: MsgRegisterCounterparty): Promise<MsgRegisterCounterpartyResponse>;
  /** UpdateClientConfig defines a rpc handler method for MsgUpdateClientConfig. */
  UpdateClientConfig(request: MsgUpdateClientConfig): Promise<MsgUpdateClientConfigResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterCounterparty = this.RegisterCounterparty.bind(this);
    this.UpdateClientConfig = this.UpdateClientConfig.bind(this);
  }
  RegisterCounterparty(request: MsgRegisterCounterparty): Promise<MsgRegisterCounterpartyResponse> {
    const data = MsgRegisterCounterparty.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Msg", "RegisterCounterparty", data);
    return promise.then((data) => MsgRegisterCounterpartyResponse.decode(new BinaryReader(data)));
  }
  UpdateClientConfig(request: MsgUpdateClientConfig): Promise<MsgUpdateClientConfigResponse> {
    const data = MsgUpdateClientConfig.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Msg", "UpdateClientConfig", data);
    return promise.then((data) => MsgUpdateClientConfigResponse.decode(new BinaryReader(data)));
  }
}
