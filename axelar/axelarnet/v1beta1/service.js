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
const tx_1 = require("../../../axelar/axelarnet/v1beta1/tx");
const query_1 = require("../../../axelar/axelarnet/v1beta1/query");
exports.protobufPackage = "axelar.axelarnet.v1beta1";
class MsgServiceClientImpl {
    constructor(rpc) {
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
    Link(request) {
        const data = tx_1.LinkRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "Link", data);
        return promise.then((data) => tx_1.LinkResponse.decode(new _m0.Reader(data)));
    }
    ConfirmDeposit(request) {
        const data = tx_1.ConfirmDepositRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "ConfirmDeposit", data);
        return promise.then((data) => tx_1.ConfirmDepositResponse.decode(new _m0.Reader(data)));
    }
    ExecutePendingTransfers(request) {
        const data = tx_1.ExecutePendingTransfersRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "ExecutePendingTransfers", data);
        return promise.then((data) => tx_1.ExecutePendingTransfersResponse.decode(new _m0.Reader(data)));
    }
    AddCosmosBasedChain(request) {
        const data = tx_1.AddCosmosBasedChainRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "AddCosmosBasedChain", data);
        return promise.then((data) => tx_1.AddCosmosBasedChainResponse.decode(new _m0.Reader(data)));
    }
    RegisterAsset(request) {
        const data = tx_1.RegisterAssetRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "RegisterAsset", data);
        return promise.then((data) => tx_1.RegisterAssetResponse.decode(new _m0.Reader(data)));
    }
    RouteIBCTransfers(request) {
        const data = tx_1.RouteIBCTransfersRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "RouteIBCTransfers", data);
        return promise.then((data) => tx_1.RouteIBCTransfersResponse.decode(new _m0.Reader(data)));
    }
    RegisterFeeCollector(request) {
        const data = tx_1.RegisterFeeCollectorRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "RegisterFeeCollector", data);
        return promise.then((data) => tx_1.RegisterFeeCollectorResponse.decode(new _m0.Reader(data)));
    }
    RetryIBCTransfer(request) {
        const data = tx_1.RetryIBCTransferRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.axelarnet.v1beta1.MsgService", "RetryIBCTransfer", data);
        return promise.then((data) => tx_1.RetryIBCTransferResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgServiceClientImpl = MsgServiceClientImpl;
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.PendingIBCTransferCount = this.PendingIBCTransferCount.bind(this);
    }
    PendingIBCTransferCount(request) {
        const data = query_1.PendingIBCTransferCountRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.axelarnet.v1beta1.QueryService", "PendingIBCTransferCount", data);
        return promise.then((data) => query_1.PendingIBCTransferCountResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=service.js.map