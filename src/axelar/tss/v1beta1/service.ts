/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { HeartBeatResponse, HeartBeatRequest } from "../../../axelar/tss/v1beta1/tx";

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
export interface QueryService {}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
