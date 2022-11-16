import { SetGatewayResponse, ConfirmGatewayTxResponse, LinkResponse, ConfirmTokenResponse, ConfirmDepositResponse, ConfirmTransferKeyResponse, CreateDeployTokenResponse, CreateBurnTokensResponse, CreatePendingTransfersResponse, CreateTransferOperatorshipResponse, SignCommandsResponse, AddChainResponse, RetryFailedEventResponse, SetGatewayRequest, ConfirmGatewayTxRequest, LinkRequest, ConfirmTokenRequest, ConfirmDepositRequest, ConfirmTransferKeyRequest, CreateDeployTokenRequest, CreateBurnTokensRequest, CreatePendingTransfersRequest, CreateTransferOperatorshipRequest, SignCommandsRequest, AddChainRequest, RetryFailedEventRequest } from "../../../axelar/evm/v1beta1/tx";
import { BatchedCommandsResponse, BurnerInfoResponse, ConfirmationHeightResponse, DepositStateResponse, PendingCommandsResponse, ChainsResponse, KeyAddressResponse, GatewayAddressResponse, BytecodeResponse, EventResponse, ERC20TokensResponse, TokenInfoResponse, BatchedCommandsRequest, BurnerInfoRequest, ConfirmationHeightRequest, DepositStateRequest, PendingCommandsRequest, ChainsRequest, KeyAddressRequest, GatewayAddressRequest, BytecodeRequest, EventRequest, ERC20TokensRequest, TokenInfoRequest } from "../../../axelar/evm/v1beta1/query";
export declare const protobufPackage = "axelar.evm.v1beta1";
/** Msg defines the evm Msg service. */
export interface MsgService {
    SetGateway(request: SetGatewayRequest): Promise<SetGatewayResponse>;
    ConfirmGatewayTx(request: ConfirmGatewayTxRequest): Promise<ConfirmGatewayTxResponse>;
    Link(request: LinkRequest): Promise<LinkResponse>;
    ConfirmToken(request: ConfirmTokenRequest): Promise<ConfirmTokenResponse>;
    ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse>;
    ConfirmTransferKey(request: ConfirmTransferKeyRequest): Promise<ConfirmTransferKeyResponse>;
    CreateDeployToken(request: CreateDeployTokenRequest): Promise<CreateDeployTokenResponse>;
    CreateBurnTokens(request: CreateBurnTokensRequest): Promise<CreateBurnTokensResponse>;
    CreatePendingTransfers(request: CreatePendingTransfersRequest): Promise<CreatePendingTransfersResponse>;
    CreateTransferOperatorship(request: CreateTransferOperatorshipRequest): Promise<CreateTransferOperatorshipResponse>;
    SignCommands(request: SignCommandsRequest): Promise<SignCommandsResponse>;
    AddChain(request: AddChainRequest): Promise<AddChainResponse>;
    RetryFailedEvent(request: RetryFailedEventRequest): Promise<RetryFailedEventResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    SetGateway(request: SetGatewayRequest): Promise<SetGatewayResponse>;
    ConfirmGatewayTx(request: ConfirmGatewayTxRequest): Promise<ConfirmGatewayTxResponse>;
    Link(request: LinkRequest): Promise<LinkResponse>;
    ConfirmToken(request: ConfirmTokenRequest): Promise<ConfirmTokenResponse>;
    ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse>;
    ConfirmTransferKey(request: ConfirmTransferKeyRequest): Promise<ConfirmTransferKeyResponse>;
    CreateDeployToken(request: CreateDeployTokenRequest): Promise<CreateDeployTokenResponse>;
    CreateBurnTokens(request: CreateBurnTokensRequest): Promise<CreateBurnTokensResponse>;
    CreatePendingTransfers(request: CreatePendingTransfersRequest): Promise<CreatePendingTransfersResponse>;
    CreateTransferOperatorship(request: CreateTransferOperatorshipRequest): Promise<CreateTransferOperatorshipResponse>;
    SignCommands(request: SignCommandsRequest): Promise<SignCommandsResponse>;
    AddChain(request: AddChainRequest): Promise<AddChainResponse>;
    RetryFailedEvent(request: RetryFailedEventRequest): Promise<RetryFailedEventResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    /**
     * BatchedCommands queries the batched commands for a specified chain and
     * BatchedCommandsID if no BatchedCommandsID is specified, then it returns the
     * latest batched commands
     */
    BatchedCommands(request: BatchedCommandsRequest): Promise<BatchedCommandsResponse>;
    /** BurnerInfo queries the burner info for the specified address */
    BurnerInfo(request: BurnerInfoRequest): Promise<BurnerInfoResponse>;
    /** ConfirmationHeight queries the confirmation height for the specified chain */
    ConfirmationHeight(request: ConfirmationHeightRequest): Promise<ConfirmationHeightResponse>;
    /**
     * DepositState queries the state of the specified deposit
     *
     * @deprecated
     */
    DepositState(request: DepositStateRequest): Promise<DepositStateResponse>;
    /** PendingCommands queries the pending commands for the specified chain */
    PendingCommands(request: PendingCommandsRequest): Promise<PendingCommandsResponse>;
    /** Chains queries the available evm chains */
    Chains(request: ChainsRequest): Promise<ChainsResponse>;
    /** KeyAddress queries the address of key of a chain */
    KeyAddress(request: KeyAddressRequest): Promise<KeyAddressResponse>;
    /** GatewayAddress queries the address of axelar gateway at the specified chain */
    GatewayAddress(request: GatewayAddressRequest): Promise<GatewayAddressResponse>;
    /** Bytecode queries the bytecode of a specified gateway at the specified chain */
    Bytecode(request: BytecodeRequest): Promise<BytecodeResponse>;
    /** Event queries an event at the specified chain */
    Event(request: EventRequest): Promise<EventResponse>;
    /** ERC20Tokens queries the ERC20 tokens registered for a chain */
    ERC20Tokens(request: ERC20TokensRequest): Promise<ERC20TokensResponse>;
    /** TokenInfo queries the token info for a registered ERC20 Token */
    TokenInfo(request: TokenInfoRequest): Promise<TokenInfoResponse>;
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    BatchedCommands(request: BatchedCommandsRequest): Promise<BatchedCommandsResponse>;
    BurnerInfo(request: BurnerInfoRequest): Promise<BurnerInfoResponse>;
    ConfirmationHeight(request: ConfirmationHeightRequest): Promise<ConfirmationHeightResponse>;
    DepositState(request: DepositStateRequest): Promise<DepositStateResponse>;
    PendingCommands(request: PendingCommandsRequest): Promise<PendingCommandsResponse>;
    Chains(request: ChainsRequest): Promise<ChainsResponse>;
    KeyAddress(request: KeyAddressRequest): Promise<KeyAddressResponse>;
    GatewayAddress(request: GatewayAddressRequest): Promise<GatewayAddressResponse>;
    Bytecode(request: BytecodeRequest): Promise<BytecodeResponse>;
    Event(request: EventRequest): Promise<EventResponse>;
    ERC20Tokens(request: ERC20TokensRequest): Promise<ERC20TokensResponse>;
    TokenInfo(request: TokenInfoRequest): Promise<TokenInfoResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
