import { StartKeygenResponse, SubmitPubKeyResponse, SubmitSignatureResponse, RotateKeyResponse, KeygenOptOutResponse, KeygenOptInResponse, StartKeygenRequest, SubmitPubKeyRequest, SubmitSignatureRequest, RotateKeyRequest, KeygenOptOutRequest, KeygenOptInRequest } from "../../../axelar/multisig/v1beta1/tx";
import { KeyIDResponse, NextKeyIDResponse, KeyResponse, KeygenSessionResponse, ParamsResponse, KeyIDRequest, NextKeyIDRequest, KeyRequest, KeygenSessionRequest, ParamsRequest } from "../../../axelar/multisig/v1beta1/query";
export declare const protobufPackage = "axelar.multisig.v1beta1";
/** Msg defines the multisig Msg service. */
export interface MsgService {
    StartKeygen(request: StartKeygenRequest): Promise<StartKeygenResponse>;
    SubmitPubKey(request: SubmitPubKeyRequest): Promise<SubmitPubKeyResponse>;
    SubmitSignature(request: SubmitSignatureRequest): Promise<SubmitSignatureResponse>;
    RotateKey(request: RotateKeyRequest): Promise<RotateKeyResponse>;
    KeygenOptOut(request: KeygenOptOutRequest): Promise<KeygenOptOutResponse>;
    KeygenOptIn(request: KeygenOptInRequest): Promise<KeygenOptInResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    StartKeygen(request: StartKeygenRequest): Promise<StartKeygenResponse>;
    SubmitPubKey(request: SubmitPubKeyRequest): Promise<SubmitPubKeyResponse>;
    SubmitSignature(request: SubmitSignatureRequest): Promise<SubmitSignatureResponse>;
    RotateKey(request: RotateKeyRequest): Promise<RotateKeyResponse>;
    KeygenOptOut(request: KeygenOptOutRequest): Promise<KeygenOptOutResponse>;
    KeygenOptIn(request: KeygenOptInRequest): Promise<KeygenOptInResponse>;
}
/** Query defines the gRPC querier service. */
export interface QueryService {
    /**
     * KeyID returns the key ID of a key assigned to a given chain.
     * If no key is assigned, it returns the grpc NOT_FOUND error.
     */
    KeyID(request: KeyIDRequest): Promise<KeyIDResponse>;
    /**
     * NextKeyID returns the key ID assigned for the next rotation on a given
     * chain. If no key rotation is in progress, it returns the grpc NOT_FOUND
     * error.
     */
    NextKeyID(request: NextKeyIDRequest): Promise<NextKeyIDResponse>;
    /**
     * Key returns the key corresponding to a given key ID.
     * If no key is found, it returns the grpc NOT_FOUND error.
     */
    Key(request: KeyRequest): Promise<KeyResponse>;
    /**
     * KeygenSession returns the keygen session info for a given key ID.
     * If no key is found, it returns the grpc NOT_FOUND error.
     */
    KeygenSession(request: KeygenSessionRequest): Promise<KeygenSessionResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    KeyID(request: KeyIDRequest): Promise<KeyIDResponse>;
    NextKeyID(request: NextKeyIDRequest): Promise<NextKeyIDResponse>;
    Key(request: KeyRequest): Promise<KeyResponse>;
    KeygenSession(request: KeygenSessionRequest): Promise<KeygenSessionResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
