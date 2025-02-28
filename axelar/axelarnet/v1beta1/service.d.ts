import { LinkResponse, ConfirmDepositResponse, ExecutePendingTransfersResponse, AddCosmosBasedChainResponse, RegisterAssetResponse, RouteIBCTransfersResponse, RegisterFeeCollectorResponse, RetryIBCTransferResponse, RouteMessageResponse, CallContractResponse, LinkRequest, ConfirmDepositRequest, ExecutePendingTransfersRequest, AddCosmosBasedChainRequest, RegisterAssetRequest, RouteIBCTransfersRequest, RegisterFeeCollectorRequest, RetryIBCTransferRequest, RouteMessageRequest, CallContractRequest } from "../../../axelar/axelarnet/v1beta1/tx";
import { PendingIBCTransferCountResponse, ParamsResponse, IBCPathResponse, ChainByIBCPathResponse, PendingIBCTransferCountRequest, ParamsRequest, IBCPathRequest, ChainByIBCPathRequest } from "../../../axelar/axelarnet/v1beta1/query";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
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
    RouteMessage(request: RouteMessageRequest): Promise<RouteMessageResponse>;
    CallContract(request: CallContractRequest): Promise<CallContractResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    Link(request: LinkRequest): Promise<LinkResponse>;
    ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse>;
    ExecutePendingTransfers(request: ExecutePendingTransfersRequest): Promise<ExecutePendingTransfersResponse>;
    AddCosmosBasedChain(request: AddCosmosBasedChainRequest): Promise<AddCosmosBasedChainResponse>;
    RegisterAsset(request: RegisterAssetRequest): Promise<RegisterAssetResponse>;
    RouteIBCTransfers(request: RouteIBCTransfersRequest): Promise<RouteIBCTransfersResponse>;
    RegisterFeeCollector(request: RegisterFeeCollectorRequest): Promise<RegisterFeeCollectorResponse>;
    RetryIBCTransfer(request: RetryIBCTransferRequest): Promise<RetryIBCTransferResponse>;
    RouteMessage(request: RouteMessageRequest): Promise<RouteMessageResponse>;
    CallContract(request: CallContractRequest): Promise<CallContractResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    /** PendingIBCTransferCount queries the pending ibc transfers for all chains */
    PendingIBCTransferCount(request: PendingIBCTransferCountRequest): Promise<PendingIBCTransferCountResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
    IBCPath(request: IBCPathRequest): Promise<IBCPathResponse>;
    ChainByIBCPath(request: ChainByIBCPathRequest): Promise<ChainByIBCPathResponse>;
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    PendingIBCTransferCount(request: PendingIBCTransferCountRequest): Promise<PendingIBCTransferCountResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
    IBCPath(request: IBCPathRequest): Promise<IBCPathResponse>;
    ChainByIBCPath(request: ChainByIBCPathRequest): Promise<ChainByIBCPathResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
