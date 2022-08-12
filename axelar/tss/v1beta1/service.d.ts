import { HeartBeatResponse, HeartBeatRequest } from "../../../axelar/tss/v1beta1/tx";
import { NextKeyIDResponse, AssignableKeyResponse, ValidatorMultisigKeysResponse, NextKeyIDRequest, AssignableKeyRequest, ValidatorMultisigKeysRequest } from "../../../axelar/tss/v1beta1/query";
export declare const protobufPackage = "axelar.tss.v1beta1";
/** Msg defines the tss Msg service. */
export interface MsgService {
    HeartBeat(request: HeartBeatRequest): Promise<HeartBeatResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    HeartBeat(request: HeartBeatRequest): Promise<HeartBeatResponse>;
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
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    NextKeyID(request: NextKeyIDRequest): Promise<NextKeyIDResponse>;
    AssignableKey(request: AssignableKeyRequest): Promise<AssignableKeyResponse>;
    ValidatorMultisigKeys(request: ValidatorMultisigKeysRequest): Promise<ValidatorMultisigKeysResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
