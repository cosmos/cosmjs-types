/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  RegisterExternalKeysResponse,
  HeartBeatResponse,
  StartKeygenResponse,
  ProcessKeygenTrafficResponse,
  RotateKeyResponse,
  VotePubKeyResponse,
  ProcessSignTrafficResponse,
  VoteSigResponse,
  SubmitMultisigPubKeysResponse,
  SubmitMultisigSignaturesResponse,
  RegisterExternalKeysRequest,
  HeartBeatRequest,
  StartKeygenRequest,
  ProcessKeygenTrafficRequest,
  RotateKeyRequest,
  VotePubKeyRequest,
  ProcessSignTrafficRequest,
  VoteSigRequest,
  SubmitMultisigPubKeysRequest,
  SubmitMultisigSignaturesRequest,
} from "../../../axelar/tss/v1beta1/tx";
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
  RegisterExternalKeys(request: RegisterExternalKeysRequest): Promise<RegisterExternalKeysResponse>;
  HeartBeat(request: HeartBeatRequest): Promise<HeartBeatResponse>;
  StartKeygen(request: StartKeygenRequest): Promise<StartKeygenResponse>;
  ProcessKeygenTraffic(request: ProcessKeygenTrafficRequest): Promise<ProcessKeygenTrafficResponse>;
  RotateKey(request: RotateKeyRequest): Promise<RotateKeyResponse>;
  VotePubKey(request: VotePubKeyRequest): Promise<VotePubKeyResponse>;
  ProcessSignTraffic(request: ProcessSignTrafficRequest): Promise<ProcessSignTrafficResponse>;
  VoteSig(request: VoteSigRequest): Promise<VoteSigResponse>;
  SubmitMultisigPubKeys(request: SubmitMultisigPubKeysRequest): Promise<SubmitMultisigPubKeysResponse>;
  SubmitMultisigSignatures(
    request: SubmitMultisigSignaturesRequest,
  ): Promise<SubmitMultisigSignaturesResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterExternalKeys = this.RegisterExternalKeys.bind(this);
    this.HeartBeat = this.HeartBeat.bind(this);
    this.StartKeygen = this.StartKeygen.bind(this);
    this.ProcessKeygenTraffic = this.ProcessKeygenTraffic.bind(this);
    this.RotateKey = this.RotateKey.bind(this);
    this.VotePubKey = this.VotePubKey.bind(this);
    this.ProcessSignTraffic = this.ProcessSignTraffic.bind(this);
    this.VoteSig = this.VoteSig.bind(this);
    this.SubmitMultisigPubKeys = this.SubmitMultisigPubKeys.bind(this);
    this.SubmitMultisigSignatures = this.SubmitMultisigSignatures.bind(this);
  }
  RegisterExternalKeys(request: RegisterExternalKeysRequest): Promise<RegisterExternalKeysResponse> {
    const data = RegisterExternalKeysRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "RegisterExternalKeys", data);
    return promise.then((data) => RegisterExternalKeysResponse.decode(new _m0.Reader(data)));
  }

  HeartBeat(request: HeartBeatRequest): Promise<HeartBeatResponse> {
    const data = HeartBeatRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "HeartBeat", data);
    return promise.then((data) => HeartBeatResponse.decode(new _m0.Reader(data)));
  }

  StartKeygen(request: StartKeygenRequest): Promise<StartKeygenResponse> {
    const data = StartKeygenRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "StartKeygen", data);
    return promise.then((data) => StartKeygenResponse.decode(new _m0.Reader(data)));
  }

  ProcessKeygenTraffic(request: ProcessKeygenTrafficRequest): Promise<ProcessKeygenTrafficResponse> {
    const data = ProcessKeygenTrafficRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "ProcessKeygenTraffic", data);
    return promise.then((data) => ProcessKeygenTrafficResponse.decode(new _m0.Reader(data)));
  }

  RotateKey(request: RotateKeyRequest): Promise<RotateKeyResponse> {
    const data = RotateKeyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "RotateKey", data);
    return promise.then((data) => RotateKeyResponse.decode(new _m0.Reader(data)));
  }

  VotePubKey(request: VotePubKeyRequest): Promise<VotePubKeyResponse> {
    const data = VotePubKeyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "VotePubKey", data);
    return promise.then((data) => VotePubKeyResponse.decode(new _m0.Reader(data)));
  }

  ProcessSignTraffic(request: ProcessSignTrafficRequest): Promise<ProcessSignTrafficResponse> {
    const data = ProcessSignTrafficRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "ProcessSignTraffic", data);
    return promise.then((data) => ProcessSignTrafficResponse.decode(new _m0.Reader(data)));
  }

  VoteSig(request: VoteSigRequest): Promise<VoteSigResponse> {
    const data = VoteSigRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "VoteSig", data);
    return promise.then((data) => VoteSigResponse.decode(new _m0.Reader(data)));
  }

  SubmitMultisigPubKeys(request: SubmitMultisigPubKeysRequest): Promise<SubmitMultisigPubKeysResponse> {
    const data = SubmitMultisigPubKeysRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "SubmitMultisigPubKeys", data);
    return promise.then((data) => SubmitMultisigPubKeysResponse.decode(new _m0.Reader(data)));
  }

  SubmitMultisigSignatures(
    request: SubmitMultisigSignaturesRequest,
  ): Promise<SubmitMultisigSignaturesResponse> {
    const data = SubmitMultisigSignaturesRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "SubmitMultisigSignatures", data);
    return promise.then((data) => SubmitMultisigSignaturesResponse.decode(new _m0.Reader(data)));
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
