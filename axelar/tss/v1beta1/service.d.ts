import { HeartBeatResponse, HeartBeatRequest } from "../../../axelar/tss/v1beta1/tx";
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
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
