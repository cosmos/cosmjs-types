import { HeartBeatResponse, HeartBeatRequest } from "../../../axelar/tss/v1beta1/tx";
import { ParamsResponse, ParamsRequest } from "../../../axelar/tss/v1beta1/query";
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
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
