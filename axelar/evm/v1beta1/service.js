"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryServiceClientImpl = exports.MsgServiceClientImpl = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const tx_1 = require("../../../axelar/evm/v1beta1/tx");
const query_1 = require("../../../axelar/evm/v1beta1/query");
exports.protobufPackage = "axelar.evm.v1beta1";
class MsgServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SetGateway = this.SetGateway.bind(this);
        this.ConfirmGatewayTx = this.ConfirmGatewayTx.bind(this);
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
    SetGateway(request) {
        const data = tx_1.SetGatewayRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "SetGateway", data);
        return promise.then((data) => tx_1.SetGatewayResponse.decode(new _m0.Reader(data)));
    }
    ConfirmGatewayTx(request) {
        const data = tx_1.ConfirmGatewayTxRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "ConfirmGatewayTx", data);
        return promise.then((data) => tx_1.ConfirmGatewayTxResponse.decode(new _m0.Reader(data)));
    }
    Link(request) {
        const data = tx_1.LinkRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "Link", data);
        return promise.then((data) => tx_1.LinkResponse.decode(new _m0.Reader(data)));
    }
    ConfirmToken(request) {
        const data = tx_1.ConfirmTokenRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "ConfirmToken", data);
        return promise.then((data) => tx_1.ConfirmTokenResponse.decode(new _m0.Reader(data)));
    }
    ConfirmDeposit(request) {
        const data = tx_1.ConfirmDepositRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "ConfirmDeposit", data);
        return promise.then((data) => tx_1.ConfirmDepositResponse.decode(new _m0.Reader(data)));
    }
    ConfirmTransferKey(request) {
        const data = tx_1.ConfirmTransferKeyRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "ConfirmTransferKey", data);
        return promise.then((data) => tx_1.ConfirmTransferKeyResponse.decode(new _m0.Reader(data)));
    }
    CreateDeployToken(request) {
        const data = tx_1.CreateDeployTokenRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "CreateDeployToken", data);
        return promise.then((data) => tx_1.CreateDeployTokenResponse.decode(new _m0.Reader(data)));
    }
    CreateBurnTokens(request) {
        const data = tx_1.CreateBurnTokensRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "CreateBurnTokens", data);
        return promise.then((data) => tx_1.CreateBurnTokensResponse.decode(new _m0.Reader(data)));
    }
    CreatePendingTransfers(request) {
        const data = tx_1.CreatePendingTransfersRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "CreatePendingTransfers", data);
        return promise.then((data) => tx_1.CreatePendingTransfersResponse.decode(new _m0.Reader(data)));
    }
    CreateTransferOperatorship(request) {
        const data = tx_1.CreateTransferOperatorshipRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "CreateTransferOperatorship", data);
        return promise.then((data) => tx_1.CreateTransferOperatorshipResponse.decode(new _m0.Reader(data)));
    }
    SignCommands(request) {
        const data = tx_1.SignCommandsRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "SignCommands", data);
        return promise.then((data) => tx_1.SignCommandsResponse.decode(new _m0.Reader(data)));
    }
    AddChain(request) {
        const data = tx_1.AddChainRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "AddChain", data);
        return promise.then((data) => tx_1.AddChainResponse.decode(new _m0.Reader(data)));
    }
    RetryFailedEvent(request) {
        const data = tx_1.RetryFailedEventRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.MsgService", "RetryFailedEvent", data);
        return promise.then((data) => tx_1.RetryFailedEventResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgServiceClientImpl = MsgServiceClientImpl;
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.BatchedCommands = this.BatchedCommands.bind(this);
        this.BurnerInfo = this.BurnerInfo.bind(this);
        this.ConfirmationHeight = this.ConfirmationHeight.bind(this);
        this.DepositState = this.DepositState.bind(this);
        this.PendingCommands = this.PendingCommands.bind(this);
        this.Chains = this.Chains.bind(this);
        this.KeyAddress = this.KeyAddress.bind(this);
        this.GatewayAddress = this.GatewayAddress.bind(this);
        this.Bytecode = this.Bytecode.bind(this);
        this.Event = this.Event.bind(this);
        this.ERC20Tokens = this.ERC20Tokens.bind(this);
        this.TokenInfo = this.TokenInfo.bind(this);
    }
    BatchedCommands(request) {
        const data = query_1.BatchedCommandsRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "BatchedCommands", data);
        return promise.then((data) => query_1.BatchedCommandsResponse.decode(new _m0.Reader(data)));
    }
    BurnerInfo(request) {
        const data = query_1.BurnerInfoRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "BurnerInfo", data);
        return promise.then((data) => query_1.BurnerInfoResponse.decode(new _m0.Reader(data)));
    }
    ConfirmationHeight(request) {
        const data = query_1.ConfirmationHeightRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "ConfirmationHeight", data);
        return promise.then((data) => query_1.ConfirmationHeightResponse.decode(new _m0.Reader(data)));
    }
    DepositState(request) {
        const data = query_1.DepositStateRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "DepositState", data);
        return promise.then((data) => query_1.DepositStateResponse.decode(new _m0.Reader(data)));
    }
    PendingCommands(request) {
        const data = query_1.PendingCommandsRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "PendingCommands", data);
        return promise.then((data) => query_1.PendingCommandsResponse.decode(new _m0.Reader(data)));
    }
    Chains(request) {
        const data = query_1.ChainsRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "Chains", data);
        return promise.then((data) => query_1.ChainsResponse.decode(new _m0.Reader(data)));
    }
    KeyAddress(request) {
        const data = query_1.KeyAddressRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "KeyAddress", data);
        return promise.then((data) => query_1.KeyAddressResponse.decode(new _m0.Reader(data)));
    }
    GatewayAddress(request) {
        const data = query_1.GatewayAddressRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "GatewayAddress", data);
        return promise.then((data) => query_1.GatewayAddressResponse.decode(new _m0.Reader(data)));
    }
    Bytecode(request) {
        const data = query_1.BytecodeRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "Bytecode", data);
        return promise.then((data) => query_1.BytecodeResponse.decode(new _m0.Reader(data)));
    }
    Event(request) {
        const data = query_1.EventRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "Event", data);
        return promise.then((data) => query_1.EventResponse.decode(new _m0.Reader(data)));
    }
    ERC20Tokens(request) {
        const data = query_1.ERC20TokensRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "ERC20Tokens", data);
        return promise.then((data) => query_1.ERC20TokensResponse.decode(new _m0.Reader(data)));
    }
    TokenInfo(request) {
        const data = query_1.TokenInfoRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.evm.v1beta1.QueryService", "TokenInfo", data);
        return promise.then((data) => query_1.TokenInfoResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=service.js.map