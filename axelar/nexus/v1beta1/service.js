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
const tx_1 = require("../../../axelar/nexus/v1beta1/tx");
const query_1 = require("../../../axelar/nexus/v1beta1/query");
exports.protobufPackage = "axelar.nexus.v1beta1";
class MsgServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.RegisterChainMaintainer = this.RegisterChainMaintainer.bind(this);
        this.DeregisterChainMaintainer = this.DeregisterChainMaintainer.bind(this);
        this.ActivateChain = this.ActivateChain.bind(this);
        this.DeactivateChain = this.DeactivateChain.bind(this);
        this.RegisterAssetFee = this.RegisterAssetFee.bind(this);
        this.SetTransferRateLimit = this.SetTransferRateLimit.bind(this);
    }
    RegisterChainMaintainer(request) {
        const data = tx_1.RegisterChainMaintainerRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.MsgService", "RegisterChainMaintainer", data);
        return promise.then((data) => tx_1.RegisterChainMaintainerResponse.decode(new _m0.Reader(data)));
    }
    DeregisterChainMaintainer(request) {
        const data = tx_1.DeregisterChainMaintainerRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.MsgService", "DeregisterChainMaintainer", data);
        return promise.then((data) => tx_1.DeregisterChainMaintainerResponse.decode(new _m0.Reader(data)));
    }
    ActivateChain(request) {
        const data = tx_1.ActivateChainRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.MsgService", "ActivateChain", data);
        return promise.then((data) => tx_1.ActivateChainResponse.decode(new _m0.Reader(data)));
    }
    DeactivateChain(request) {
        const data = tx_1.DeactivateChainRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.MsgService", "DeactivateChain", data);
        return promise.then((data) => tx_1.DeactivateChainResponse.decode(new _m0.Reader(data)));
    }
    RegisterAssetFee(request) {
        const data = tx_1.RegisterAssetFeeRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.MsgService", "RegisterAssetFee", data);
        return promise.then((data) => tx_1.RegisterAssetFeeResponse.decode(new _m0.Reader(data)));
    }
    SetTransferRateLimit(request) {
        const data = tx_1.SetTransferRateLimitRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.MsgService", "SetTransferRateLimit", data);
        return promise.then((data) => tx_1.SetTransferRateLimitResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgServiceClientImpl = MsgServiceClientImpl;
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.LatestDepositAddress = this.LatestDepositAddress.bind(this);
        this.TransfersForChain = this.TransfersForChain.bind(this);
        this.FeeInfo = this.FeeInfo.bind(this);
        this.TransferFee = this.TransferFee.bind(this);
        this.Chains = this.Chains.bind(this);
        this.Assets = this.Assets.bind(this);
        this.ChainState = this.ChainState.bind(this);
        this.ChainsByAsset = this.ChainsByAsset.bind(this);
        this.RecipientAddress = this.RecipientAddress.bind(this);
        this.TransferRateLimit = this.TransferRateLimit.bind(this);
    }
    LatestDepositAddress(request) {
        const data = query_1.LatestDepositAddressRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.QueryService", "LatestDepositAddress", data);
        return promise.then((data) => query_1.LatestDepositAddressResponse.decode(new _m0.Reader(data)));
    }
    TransfersForChain(request) {
        const data = query_1.TransfersForChainRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.QueryService", "TransfersForChain", data);
        return promise.then((data) => query_1.TransfersForChainResponse.decode(new _m0.Reader(data)));
    }
    FeeInfo(request) {
        const data = query_1.FeeInfoRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.QueryService", "FeeInfo", data);
        return promise.then((data) => query_1.FeeInfoResponse.decode(new _m0.Reader(data)));
    }
    TransferFee(request) {
        const data = query_1.TransferFeeRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.QueryService", "TransferFee", data);
        return promise.then((data) => query_1.TransferFeeResponse.decode(new _m0.Reader(data)));
    }
    Chains(request) {
        const data = query_1.ChainsRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.QueryService", "Chains", data);
        return promise.then((data) => query_1.ChainsResponse.decode(new _m0.Reader(data)));
    }
    Assets(request) {
        const data = query_1.AssetsRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.QueryService", "Assets", data);
        return promise.then((data) => query_1.AssetsResponse.decode(new _m0.Reader(data)));
    }
    ChainState(request) {
        const data = query_1.ChainStateRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.QueryService", "ChainState", data);
        return promise.then((data) => query_1.ChainStateResponse.decode(new _m0.Reader(data)));
    }
    ChainsByAsset(request) {
        const data = query_1.ChainsByAssetRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.QueryService", "ChainsByAsset", data);
        return promise.then((data) => query_1.ChainsByAssetResponse.decode(new _m0.Reader(data)));
    }
    RecipientAddress(request) {
        const data = query_1.RecipientAddressRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.QueryService", "RecipientAddress", data);
        return promise.then((data) => query_1.RecipientAddressResponse.decode(new _m0.Reader(data)));
    }
    TransferRateLimit(request) {
        const data = query_1.TransferRateLimitRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.nexus.v1beta1.QueryService", "TransferRateLimit", data);
        return promise.then((data) => query_1.TransferRateLimitResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=service.js.map