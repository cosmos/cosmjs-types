/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  LinkResponse,
  ConfirmDepositResponse,
  ExecutePendingTransfersResponse,
  AddCosmosBasedChainResponse,
  RegisterAssetResponse,
  RouteIBCTransfersResponse,
  RegisterFeeCollectorResponse,
  RetryIBCTransferResponse,
  LinkRequest,
  ConfirmDepositRequest,
  ExecutePendingTransfersRequest,
  AddCosmosBasedChainRequest,
  RegisterAssetRequest,
  RouteIBCTransfersRequest,
  RegisterFeeCollectorRequest,
  RetryIBCTransferRequest,
} from "../../../axelar/axelarnet/v1beta1/tx";
import {
  PendingIBCTransferCountResponse,
  PendingIBCTransferCountRequest,
} from "../../../axelar/axelarnet/v1beta1/query";

export const protobufPackage = "axelar.axelarnet.v1beta1";

/** Msg defines the axelarnet Msg service. */
export interface MsgService {
  Link(request: LinkRequest): Promise<LinkResponse>;
  ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse>;
  ExecutePendingTransfers(request: ExecutePendingTransfersRequest): Promise<ExecutePendingTransfersResponse>;
  AddCosmosBasedChain(request: AddCosmosBasedChainRequest): Promise<AddCosmosBasedChainResponse>;
  RegisterAsset(request: RegisterAssetRequest): Promise<RegisterAssetResponse>;
  RouteIBCTransfers(request: RouteIBCTransfersRequest): Promise<RouteIBCTransfersResponse>;
  RegisterFeeCollector(request: RegisterFeeCollectorRequest): Promise<RegisterFeeCollectorResponse>;
  RetryIBCTransfer(request: RetryIBCTransferRequest): Promise<RetryIBCTransferResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Link = this.Link.bind(this);
    this.ConfirmDeposit = this.ConfirmDeposit.bind(this);
    this.ExecutePendingTransfers = this.ExecutePendingTransfers.bind(this);
    this.AddCosmosBasedChain = this.AddCosmosBasedChain.bind(this);
    this.RegisterAsset = this.RegisterAsset.bind(this);
    this.RouteIBCTransfers = this.RouteIBCTransfers.bind(this);
    this.RegisterFeeCollector = this.RegisterFeeCollector.bind(this);
    this.RetryIBCTransfer = this.RetryIBCTransfer.bind(this);
  }
  Link(request: LinkRequest): Promise<LinkResponse> {
    const data = LinkRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "Link", data);
    return promise.then((data) => LinkResponse.decode(new _m0.Reader(data)));
  }

  ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse> {
    const data = ConfirmDepositRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "ConfirmDeposit", data);
    return promise.then((data) => ConfirmDepositResponse.decode(new _m0.Reader(data)));
  }

  ExecutePendingTransfers(request: ExecutePendingTransfersRequest): Promise<ExecutePendingTransfersResponse> {
    const data = ExecutePendingTransfersRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "ExecutePendingTransfers", data);
    return promise.then((data) => ExecutePendingTransfersResponse.decode(new _m0.Reader(data)));
  }

  AddCosmosBasedChain(request: AddCosmosBasedChainRequest): Promise<AddCosmosBasedChainResponse> {
    const data = AddCosmosBasedChainRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "AddCosmosBasedChain", data);
    return promise.then((data) => AddCosmosBasedChainResponse.decode(new _m0.Reader(data)));
  }

  RegisterAsset(request: RegisterAssetRequest): Promise<RegisterAssetResponse> {
    const data = RegisterAssetRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "RegisterAsset", data);
    return promise.then((data) => RegisterAssetResponse.decode(new _m0.Reader(data)));
  }

  RouteIBCTransfers(request: RouteIBCTransfersRequest): Promise<RouteIBCTransfersResponse> {
    const data = RouteIBCTransfersRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "RouteIBCTransfers", data);
    return promise.then((data) => RouteIBCTransfersResponse.decode(new _m0.Reader(data)));
  }

  RegisterFeeCollector(request: RegisterFeeCollectorRequest): Promise<RegisterFeeCollectorResponse> {
    const data = RegisterFeeCollectorRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "RegisterFeeCollector", data);
    return promise.then((data) => RegisterFeeCollectorResponse.decode(new _m0.Reader(data)));
  }

  RetryIBCTransfer(request: RetryIBCTransferRequest): Promise<RetryIBCTransferResponse> {
    const data = RetryIBCTransferRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "RetryIBCTransfer", data);
    return promise.then((data) => RetryIBCTransferResponse.decode(new _m0.Reader(data)));
  }
}

/** QueryService defines the gRPC querier service. */
export interface QueryService {
  /** PendingIBCTransferCount queries the pending ibc transfers for all chains */
  PendingIBCTransferCount(request: PendingIBCTransferCountRequest): Promise<PendingIBCTransferCountResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PendingIBCTransferCount = this.PendingIBCTransferCount.bind(this);
  }
  PendingIBCTransferCount(request: PendingIBCTransferCountRequest): Promise<PendingIBCTransferCountResponse> {
    const data = PendingIBCTransferCountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "axelar.axelarnet.v1beta1.QueryService",
      "PendingIBCTransferCount",
      data,
    );
    return promise.then((data) => PendingIBCTransferCountResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
