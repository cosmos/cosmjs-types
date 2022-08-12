/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { HeartBeatResponse, HeartBeatRequest } from "../../../axelar/tss/v1beta1/tx";
import {
  NextKeyIDResponse,
  AssignableKeyResponse,
  ValidatorMultisigKeysResponse,
  NextKeyIDRequest,
  AssignableKeyRequest,
  ValidatorMultisigKeysRequest,
} from "../../../axelar/tss/v1beta1/query";

export const protobufPackage = "axelar.tss.v1beta1";

/** Msg defines the tss Msg service. */
export interface MsgService {
  HeartBeat(request: HeartBeatRequest): Promise<HeartBeatResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.HeartBeat = this.HeartBeat.bind(this);
  }
  HeartBeat(request: HeartBeatRequest): Promise<HeartBeatResponse> {
    const data = HeartBeatRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "HeartBeat", data);
    return promise.then((data) => HeartBeatResponse.decode(new _m0.Reader(data)));
  }
}

/** Query defines the gRPC querier service. */
export interface QueryService {
  /**
   * NextKeyID returns the key ID assigned for the next rotation on a given
   * chain and for the given key role
   */
  NextKeyID(request: NextKeyIDRequest): Promise<NextKeyIDResponse>;
  /**
   * AssignableKey returns true if there is no assigned key for the
   * next rotation on a given chain, and false otherwise
   */
  AssignableKey(request: AssignableKeyRequest): Promise<AssignableKeyResponse>;
  /**
   * ValidatorMultisigKeys returns the validator's multisig pubkeys
   * corresponding to each active key ID
   */
  ValidatorMultisigKeys(request: ValidatorMultisigKeysRequest): Promise<ValidatorMultisigKeysResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.NextKeyID = this.NextKeyID.bind(this);
    this.AssignableKey = this.AssignableKey.bind(this);
    this.ValidatorMultisigKeys = this.ValidatorMultisigKeys.bind(this);
  }
  NextKeyID(request: NextKeyIDRequest): Promise<NextKeyIDResponse> {
    const data = NextKeyIDRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.QueryService", "NextKeyID", data);
    return promise.then((data) => NextKeyIDResponse.decode(new _m0.Reader(data)));
  }

  AssignableKey(request: AssignableKeyRequest): Promise<AssignableKeyResponse> {
    const data = AssignableKeyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.QueryService", "AssignableKey", data);
    return promise.then((data) => AssignableKeyResponse.decode(new _m0.Reader(data)));
  }

  ValidatorMultisigKeys(request: ValidatorMultisigKeysRequest): Promise<ValidatorMultisigKeysResponse> {
    const data = ValidatorMultisigKeysRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.QueryService", "ValidatorMultisigKeys", data);
    return promise.then((data) => ValidatorMultisigKeysResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
