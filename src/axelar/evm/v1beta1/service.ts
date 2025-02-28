/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  SetGatewayResponse,
  ConfirmGatewayTxResponse,
  ConfirmGatewayTxsResponse,
  LinkResponse,
  ConfirmTokenResponse,
  ConfirmDepositResponse,
  ConfirmTransferKeyResponse,
  CreateDeployTokenResponse,
  CreateBurnTokensResponse,
  CreatePendingTransfersResponse,
  CreateTransferOperatorshipResponse,
  SignCommandsResponse,
  AddChainResponse,
  RetryFailedEventResponse,
  SetGatewayRequest,
  ConfirmGatewayTxRequest,
  ConfirmGatewayTxsRequest,
  LinkRequest,
  ConfirmTokenRequest,
  ConfirmDepositRequest,
  ConfirmTransferKeyRequest,
  CreateDeployTokenRequest,
  CreateBurnTokensRequest,
  CreatePendingTransfersRequest,
  CreateTransferOperatorshipRequest,
  SignCommandsRequest,
  AddChainRequest,
  RetryFailedEventRequest,
} from "../../../axelar/evm/v1beta1/tx";
import {
  BatchedCommandsResponse,
  BurnerInfoResponse,
  ConfirmationHeightResponse,
  DepositStateResponse,
  PendingCommandsResponse,
  ChainsResponse,
  CommandResponse,
  KeyAddressResponse,
  GatewayAddressResponse,
  BytecodeResponse,
  EventResponse,
  ERC20TokensResponse,
  TokenInfoResponse,
  ParamsResponse,
  BatchedCommandsRequest,
  BurnerInfoRequest,
  ConfirmationHeightRequest,
  DepositStateRequest,
  PendingCommandsRequest,
  ChainsRequest,
  CommandRequest,
  KeyAddressRequest,
  GatewayAddressRequest,
  BytecodeRequest,
  EventRequest,
  ERC20TokensRequest,
  TokenInfoRequest,
  ParamsRequest,
} from "../../../axelar/evm/v1beta1/query";

export const protobufPackage = "axelar.evm.v1beta1";

/** Msg defines the evm Msg service. */
export interface MsgService {
  SetGateway(request: SetGatewayRequest): Promise<SetGatewayResponse>;
  /** Deprecated: use ConfirmGatewayTxs instead */
  ConfirmGatewayTx(request: ConfirmGatewayTxRequest): Promise<ConfirmGatewayTxResponse>;
  ConfirmGatewayTxs(request: ConfirmGatewayTxsRequest): Promise<ConfirmGatewayTxsResponse>;
  Link(request: LinkRequest): Promise<LinkResponse>;
  ConfirmToken(request: ConfirmTokenRequest): Promise<ConfirmTokenResponse>;
  ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse>;
  ConfirmTransferKey(request: ConfirmTransferKeyRequest): Promise<ConfirmTransferKeyResponse>;
  CreateDeployToken(request: CreateDeployTokenRequest): Promise<CreateDeployTokenResponse>;
  CreateBurnTokens(request: CreateBurnTokensRequest): Promise<CreateBurnTokensResponse>;
  CreatePendingTransfers(request: CreatePendingTransfersRequest): Promise<CreatePendingTransfersResponse>;
  CreateTransferOperatorship(
    request: CreateTransferOperatorshipRequest,
  ): Promise<CreateTransferOperatorshipResponse>;
  SignCommands(request: SignCommandsRequest): Promise<SignCommandsResponse>;
  AddChain(request: AddChainRequest): Promise<AddChainResponse>;
  RetryFailedEvent(request: RetryFailedEventRequest): Promise<RetryFailedEventResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetGateway = this.SetGateway.bind(this);
    this.ConfirmGatewayTx = this.ConfirmGatewayTx.bind(this);
    this.ConfirmGatewayTxs = this.ConfirmGatewayTxs.bind(this);
    this.Link = this.Link.bind(this);
    this.ConfirmToken = this.ConfirmToken.bind(this);
    this.ConfirmDeposit = this.ConfirmDeposit.bind(this);
    this.ConfirmTransferKey = this.ConfirmTransferKey.bind(this);
    this.CreateDeployToken = this.CreateDeployToken.bind(this);
    this.CreateBurnTokens = this.CreateBurnTokens.bind(this);
    this.CreatePendingTransfers = this.CreatePendingTransfers.bind(this);
    this.CreateTransferOperatorship = this.CreateTransferOperatorship.bind(this);
    this.SignCommands = this.SignCommands.bind(this);
    this.AddChain = this.AddChain.bind(this);
    this.RetryFailedEvent = this.RetryFailedEvent.bind(this);
  }
  SetGateway(request: SetGatewayRequest): Promise<SetGatewayResponse> {
    const data = SetGatewayRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "SetGateway", data);
    return promise.then((data) => SetGatewayResponse.decode(new _m0.Reader(data)));
  }

  ConfirmGatewayTx(request: ConfirmGatewayTxRequest): Promise<ConfirmGatewayTxResponse> {
    const data = ConfirmGatewayTxRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "ConfirmGatewayTx", data);
    return promise.then((data) => ConfirmGatewayTxResponse.decode(new _m0.Reader(data)));
  }

  ConfirmGatewayTxs(request: ConfirmGatewayTxsRequest): Promise<ConfirmGatewayTxsResponse> {
    const data = ConfirmGatewayTxsRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "ConfirmGatewayTxs", data);
    return promise.then((data) => ConfirmGatewayTxsResponse.decode(new _m0.Reader(data)));
  }

  Link(request: LinkRequest): Promise<LinkResponse> {
    const data = LinkRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "Link", data);
    return promise.then((data) => LinkResponse.decode(new _m0.Reader(data)));
  }

  ConfirmToken(request: ConfirmTokenRequest): Promise<ConfirmTokenResponse> {
    const data = ConfirmTokenRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "ConfirmToken", data);
    return promise.then((data) => ConfirmTokenResponse.decode(new _m0.Reader(data)));
  }

  ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse> {
    const data = ConfirmDepositRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "ConfirmDeposit", data);
    return promise.then((data) => ConfirmDepositResponse.decode(new _m0.Reader(data)));
  }

  ConfirmTransferKey(request: ConfirmTransferKeyRequest): Promise<ConfirmTransferKeyResponse> {
    const data = ConfirmTransferKeyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "ConfirmTransferKey", data);
    return promise.then((data) => ConfirmTransferKeyResponse.decode(new _m0.Reader(data)));
  }

  CreateDeployToken(request: CreateDeployTokenRequest): Promise<CreateDeployTokenResponse> {
    const data = CreateDeployTokenRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "CreateDeployToken", data);
    return promise.then((data) => CreateDeployTokenResponse.decode(new _m0.Reader(data)));
  }

  CreateBurnTokens(request: CreateBurnTokensRequest): Promise<CreateBurnTokensResponse> {
    const data = CreateBurnTokensRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "CreateBurnTokens", data);
    return promise.then((data) => CreateBurnTokensResponse.decode(new _m0.Reader(data)));
  }

  CreatePendingTransfers(request: CreatePendingTransfersRequest): Promise<CreatePendingTransfersResponse> {
    const data = CreatePendingTransfersRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "CreatePendingTransfers", data);
    return promise.then((data) => CreatePendingTransfersResponse.decode(new _m0.Reader(data)));
  }

  CreateTransferOperatorship(
    request: CreateTransferOperatorshipRequest,
  ): Promise<CreateTransferOperatorshipResponse> {
    const data = CreateTransferOperatorshipRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "CreateTransferOperatorship", data);
    return promise.then((data) => CreateTransferOperatorshipResponse.decode(new _m0.Reader(data)));
  }

  SignCommands(request: SignCommandsRequest): Promise<SignCommandsResponse> {
    const data = SignCommandsRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "SignCommands", data);
    return promise.then((data) => SignCommandsResponse.decode(new _m0.Reader(data)));
  }

  AddChain(request: AddChainRequest): Promise<AddChainResponse> {
    const data = AddChainRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "AddChain", data);
    return promise.then((data) => AddChainResponse.decode(new _m0.Reader(data)));
  }

  RetryFailedEvent(request: RetryFailedEventRequest): Promise<RetryFailedEventResponse> {
    const data = RetryFailedEventRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "RetryFailedEvent", data);
    return promise.then((data) => RetryFailedEventResponse.decode(new _m0.Reader(data)));
  }
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
  /** Command queries the command of a chain provided the command id */
  Command(request: CommandRequest): Promise<CommandResponse>;
  /** KeyAddress queries the address of key of a chain */
  KeyAddress(request: KeyAddressRequest): Promise<KeyAddressResponse>;
  /**
   * GatewayAddress queries the address of axelar gateway at the specified
   * chain
   */
  GatewayAddress(request: GatewayAddressRequest): Promise<GatewayAddressResponse>;
  /**
   * Bytecode queries the bytecode of a specified gateway at the specified
   * chain
   */
  Bytecode(request: BytecodeRequest): Promise<BytecodeResponse>;
  /** Event queries an event at the specified chain */
  Event(request: EventRequest): Promise<EventResponse>;
  /** ERC20Tokens queries the ERC20 tokens registered for a chain */
  ERC20Tokens(request: ERC20TokensRequest): Promise<ERC20TokensResponse>;
  /** TokenInfo queries the token info for a registered ERC20 Token */
  TokenInfo(request: TokenInfoRequest): Promise<TokenInfoResponse>;
  Params(request: ParamsRequest): Promise<ParamsResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.BatchedCommands = this.BatchedCommands.bind(this);
    this.BurnerInfo = this.BurnerInfo.bind(this);
    this.ConfirmationHeight = this.ConfirmationHeight.bind(this);
    this.DepositState = this.DepositState.bind(this);
    this.PendingCommands = this.PendingCommands.bind(this);
    this.Chains = this.Chains.bind(this);
    this.Command = this.Command.bind(this);
    this.KeyAddress = this.KeyAddress.bind(this);
    this.GatewayAddress = this.GatewayAddress.bind(this);
    this.Bytecode = this.Bytecode.bind(this);
    this.Event = this.Event.bind(this);
    this.ERC20Tokens = this.ERC20Tokens.bind(this);
    this.TokenInfo = this.TokenInfo.bind(this);
    this.Params = this.Params.bind(this);
  }
  BatchedCommands(request: BatchedCommandsRequest): Promise<BatchedCommandsResponse> {
    const data = BatchedCommandsRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "BatchedCommands", data);
    return promise.then((data) => BatchedCommandsResponse.decode(new _m0.Reader(data)));
  }

  BurnerInfo(request: BurnerInfoRequest): Promise<BurnerInfoResponse> {
    const data = BurnerInfoRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "BurnerInfo", data);
    return promise.then((data) => BurnerInfoResponse.decode(new _m0.Reader(data)));
  }

  ConfirmationHeight(request: ConfirmationHeightRequest): Promise<ConfirmationHeightResponse> {
    const data = ConfirmationHeightRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "ConfirmationHeight", data);
    return promise.then((data) => ConfirmationHeightResponse.decode(new _m0.Reader(data)));
  }

  DepositState(request: DepositStateRequest): Promise<DepositStateResponse> {
    const data = DepositStateRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "DepositState", data);
    return promise.then((data) => DepositStateResponse.decode(new _m0.Reader(data)));
  }

  PendingCommands(request: PendingCommandsRequest): Promise<PendingCommandsResponse> {
    const data = PendingCommandsRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "PendingCommands", data);
    return promise.then((data) => PendingCommandsResponse.decode(new _m0.Reader(data)));
  }

  Chains(request: ChainsRequest): Promise<ChainsResponse> {
    const data = ChainsRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "Chains", data);
    return promise.then((data) => ChainsResponse.decode(new _m0.Reader(data)));
  }

  Command(request: CommandRequest): Promise<CommandResponse> {
    const data = CommandRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "Command", data);
    return promise.then((data) => CommandResponse.decode(new _m0.Reader(data)));
  }

  KeyAddress(request: KeyAddressRequest): Promise<KeyAddressResponse> {
    const data = KeyAddressRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "KeyAddress", data);
    return promise.then((data) => KeyAddressResponse.decode(new _m0.Reader(data)));
  }

  GatewayAddress(request: GatewayAddressRequest): Promise<GatewayAddressResponse> {
    const data = GatewayAddressRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "GatewayAddress", data);
    return promise.then((data) => GatewayAddressResponse.decode(new _m0.Reader(data)));
  }

  Bytecode(request: BytecodeRequest): Promise<BytecodeResponse> {
    const data = BytecodeRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "Bytecode", data);
    return promise.then((data) => BytecodeResponse.decode(new _m0.Reader(data)));
  }

  Event(request: EventRequest): Promise<EventResponse> {
    const data = EventRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "Event", data);
    return promise.then((data) => EventResponse.decode(new _m0.Reader(data)));
  }

  ERC20Tokens(request: ERC20TokensRequest): Promise<ERC20TokensResponse> {
    const data = ERC20TokensRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "ERC20Tokens", data);
    return promise.then((data) => ERC20TokensResponse.decode(new _m0.Reader(data)));
  }

  TokenInfo(request: TokenInfoRequest): Promise<TokenInfoResponse> {
    const data = TokenInfoRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "TokenInfo", data);
    return promise.then((data) => TokenInfoResponse.decode(new _m0.Reader(data)));
  }

  Params(request: ParamsRequest): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "Params", data);
    return promise.then((data) => ParamsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
