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
const tx_1 = require("../../../axelar/tss/v1beta1/tx");
const query_1 = require("../../../axelar/tss/v1beta1/query");
exports.protobufPackage = "axelar.tss.v1beta1";
class MsgServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.HeartBeat = this.HeartBeat.bind(this);
    }
    HeartBeat(request) {
        const data = tx_1.HeartBeatRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.tss.v1beta1.MsgService", "HeartBeat", data);
        return promise.then((data) => tx_1.HeartBeatResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgServiceClientImpl = MsgServiceClientImpl;
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.NextKeyID = this.NextKeyID.bind(this);
        this.AssignableKey = this.AssignableKey.bind(this);
        this.ValidatorMultisigKeys = this.ValidatorMultisigKeys.bind(this);
    }
    NextKeyID(request) {
        const data = query_1.NextKeyIDRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.tss.v1beta1.QueryService", "NextKeyID", data);
        return promise.then((data) => query_1.NextKeyIDResponse.decode(new _m0.Reader(data)));
    }
    AssignableKey(request) {
        const data = query_1.AssignableKeyRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.tss.v1beta1.QueryService", "AssignableKey", data);
        return promise.then((data) => query_1.AssignableKeyResponse.decode(new _m0.Reader(data)));
    }
    ValidatorMultisigKeys(request) {
        const data = query_1.ValidatorMultisigKeysRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.tss.v1beta1.QueryService", "ValidatorMultisigKeys", data);
        return promise.then((data) => query_1.ValidatorMultisigKeysResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=service.js.map