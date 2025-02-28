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
const tx_1 = require("../../../axelar/multisig/v1beta1/tx");
const query_1 = require("../../../axelar/multisig/v1beta1/query");
exports.protobufPackage = "axelar.multisig.v1beta1";
class MsgServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.StartKeygen = this.StartKeygen.bind(this);
        this.SubmitPubKey = this.SubmitPubKey.bind(this);
        this.SubmitSignature = this.SubmitSignature.bind(this);
        this.RotateKey = this.RotateKey.bind(this);
        this.KeygenOptOut = this.KeygenOptOut.bind(this);
        this.KeygenOptIn = this.KeygenOptIn.bind(this);
    }
    StartKeygen(request) {
        const data = tx_1.StartKeygenRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.multisig.v1beta1.MsgService", "StartKeygen", data);
        return promise.then((data) => tx_1.StartKeygenResponse.decode(new _m0.Reader(data)));
    }
    SubmitPubKey(request) {
        const data = tx_1.SubmitPubKeyRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.multisig.v1beta1.MsgService", "SubmitPubKey", data);
        return promise.then((data) => tx_1.SubmitPubKeyResponse.decode(new _m0.Reader(data)));
    }
    SubmitSignature(request) {
        const data = tx_1.SubmitSignatureRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.multisig.v1beta1.MsgService", "SubmitSignature", data);
        return promise.then((data) => tx_1.SubmitSignatureResponse.decode(new _m0.Reader(data)));
    }
    RotateKey(request) {
        const data = tx_1.RotateKeyRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.multisig.v1beta1.MsgService", "RotateKey", data);
        return promise.then((data) => tx_1.RotateKeyResponse.decode(new _m0.Reader(data)));
    }
    KeygenOptOut(request) {
        const data = tx_1.KeygenOptOutRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.multisig.v1beta1.MsgService", "KeygenOptOut", data);
        return promise.then((data) => tx_1.KeygenOptOutResponse.decode(new _m0.Reader(data)));
    }
    KeygenOptIn(request) {
        const data = tx_1.KeygenOptInRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.multisig.v1beta1.MsgService", "KeygenOptIn", data);
        return promise.then((data) => tx_1.KeygenOptInResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgServiceClientImpl = MsgServiceClientImpl;
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.KeyID = this.KeyID.bind(this);
        this.NextKeyID = this.NextKeyID.bind(this);
        this.Key = this.Key.bind(this);
        this.KeygenSession = this.KeygenSession.bind(this);
        this.Params = this.Params.bind(this);
    }
    KeyID(request) {
        const data = query_1.KeyIDRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.multisig.v1beta1.QueryService", "KeyID", data);
        return promise.then((data) => query_1.KeyIDResponse.decode(new _m0.Reader(data)));
    }
    NextKeyID(request) {
        const data = query_1.NextKeyIDRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.multisig.v1beta1.QueryService", "NextKeyID", data);
        return promise.then((data) => query_1.NextKeyIDResponse.decode(new _m0.Reader(data)));
    }
    Key(request) {
        const data = query_1.KeyRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.multisig.v1beta1.QueryService", "Key", data);
        return promise.then((data) => query_1.KeyResponse.decode(new _m0.Reader(data)));
    }
    KeygenSession(request) {
        const data = query_1.KeygenSessionRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.multisig.v1beta1.QueryService", "KeygenSession", data);
        return promise.then((data) => query_1.KeygenSessionResponse.decode(new _m0.Reader(data)));
    }
    Params(request) {
        const data = query_1.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.multisig.v1beta1.QueryService", "Params", data);
        return promise.then((data) => query_1.ParamsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=service.js.map