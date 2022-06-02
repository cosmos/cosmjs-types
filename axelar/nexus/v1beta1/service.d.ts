import { RegisterChainMaintainerResponse, DeregisterChainMaintainerResponse, ActivateChainResponse, DeactivateChainResponse, RegisterAssetFeeResponse, RegisterChainMaintainerRequest, DeregisterChainMaintainerRequest, ActivateChainRequest, DeactivateChainRequest, RegisterAssetFeeRequest } from "../../../axelar/nexus/v1beta1/tx";
import { LatestDepositAddressResponse, TransfersForChainResponse, FeeInfoResponse, TransferFeeResponse, ChainsResponse, AssetsResponse, ChainStateResponse, ChainsByAssetResponse, RecipientAddressResponse, LatestDepositAddressRequest, TransfersForChainRequest, FeeInfoRequest, TransferFeeRequest, ChainsRequest, AssetsRequest, ChainStateRequest, ChainsByAssetRequest, RecipientAddressRequest } from "../../../axelar/nexus/v1beta1/query";
export declare const protobufPackage = "axelar.nexus.v1beta1";
/** Msg defines the nexus Msg service. */
export interface MsgService {
    RegisterChainMaintainer(request: RegisterChainMaintainerRequest): Promise<RegisterChainMaintainerResponse>;
    DeregisterChainMaintainer(request: DeregisterChainMaintainerRequest): Promise<DeregisterChainMaintainerResponse>;
    ActivateChain(request: ActivateChainRequest): Promise<ActivateChainResponse>;
    DeactivateChain(request: DeactivateChainRequest): Promise<DeactivateChainResponse>;
    RegisterAssetFee(request: RegisterAssetFeeRequest): Promise<RegisterAssetFeeResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterChainMaintainer(request: RegisterChainMaintainerRequest): Promise<RegisterChainMaintainerResponse>;
    DeregisterChainMaintainer(request: DeregisterChainMaintainerRequest): Promise<DeregisterChainMaintainerResponse>;
    ActivateChain(request: ActivateChainRequest): Promise<ActivateChainResponse>;
    DeactivateChain(request: DeactivateChainRequest): Promise<DeactivateChainResponse>;
    RegisterAssetFee(request: RegisterAssetFeeRequest): Promise<RegisterAssetFeeResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    /** LatestDepositAddress queries the a deposit address by recipient */
    LatestDepositAddress(request: LatestDepositAddressRequest): Promise<LatestDepositAddressResponse>;
    /** TransfersForChain queries transfers by chain */
    TransfersForChain(request: TransfersForChainRequest): Promise<TransfersForChainResponse>;
    /** FeeInfo queries the fee info by chain and asset */
    FeeInfo(request: FeeInfoRequest): Promise<FeeInfoResponse>;
    /**
     * TransferFee queries the transfer fee by the source, destination chain,
     * and amount. If amount is 0, the min fee is returned
     */
    TransferFee(request: TransferFeeRequest): Promise<TransferFeeResponse>;
    /** Chains queries the chains registered on the network */
    Chains(request: ChainsRequest): Promise<ChainsResponse>;
    /** Assets queries the assets registered for a chain */
    Assets(request: AssetsRequest): Promise<AssetsResponse>;
    /** ChainState queries the state of a registered chain on the network */
    ChainState(request: ChainStateRequest): Promise<ChainStateResponse>;
    /** ChainsByAsset queries the chains that support an asset on the network */
    ChainsByAsset(request: ChainsByAssetRequest): Promise<ChainsByAssetResponse>;
    /** RecipientAddress queries the recipient address for a given deposit address */
    RecipientAddress(request: RecipientAddressRequest): Promise<RecipientAddressResponse>;
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    LatestDepositAddress(request: LatestDepositAddressRequest): Promise<LatestDepositAddressResponse>;
    TransfersForChain(request: TransfersForChainRequest): Promise<TransfersForChainResponse>;
    FeeInfo(request: FeeInfoRequest): Promise<FeeInfoResponse>;
    TransferFee(request: TransferFeeRequest): Promise<TransferFeeResponse>;
    Chains(request: ChainsRequest): Promise<ChainsResponse>;
    Assets(request: AssetsRequest): Promise<AssetsResponse>;
    ChainState(request: ChainStateRequest): Promise<ChainStateResponse>;
    ChainsByAsset(request: ChainsByAssetRequest): Promise<ChainsByAssetResponse>;
    RecipientAddress(request: RecipientAddressRequest): Promise<RecipientAddressResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
