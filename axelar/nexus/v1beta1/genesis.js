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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../axelar/nexus/v1beta1/params");
const types_1 = require("../../../axelar/nexus/exported/v1beta1/types");
const types_2 = require("../../../axelar/nexus/v1beta1/types");
exports.protobufPackage = "axelar.nexus.v1beta1";
function createBaseGenesisState() {
    return {
        params: undefined,
        nonce: long_1.default.UZERO,
        chains: [],
        chainStates: [],
        linkedAddresses: [],
        transfers: [],
        fee: undefined,
        feeInfos: [],
        rateLimits: [],
        transferEpochs: [],
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (!message.nonce.isZero()) {
            writer.uint32(16).uint64(message.nonce);
        }
        for (const v of message.chains) {
            types_1.Chain.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.chainStates) {
            types_2.ChainState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.linkedAddresses) {
            types_2.LinkedAddresses.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.transfers) {
            types_1.CrossChainTransfer.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            types_1.TransferFee.encode(message.fee, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.feeInfos) {
            types_1.FeeInfo.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.rateLimits) {
            types_2.RateLimit.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.transferEpochs) {
            types_2.TransferEpoch.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonce = reader.uint64();
                    break;
                case 3:
                    message.chains.push(types_1.Chain.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.chainStates.push(types_2.ChainState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.linkedAddresses.push(types_2.LinkedAddresses.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.transfers.push(types_1.CrossChainTransfer.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.fee = types_1.TransferFee.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.feeInfos.push(types_1.FeeInfo.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.rateLimits.push(types_2.RateLimit.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.transferEpochs.push(types_2.TransferEpoch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            nonce: isSet(object.nonce) ? long_1.default.fromValue(object.nonce) : long_1.default.UZERO,
            chains: Array.isArray(object === null || object === void 0 ? void 0 : object.chains) ? object.chains.map((e) => types_1.Chain.fromJSON(e)) : [],
            chainStates: Array.isArray(object === null || object === void 0 ? void 0 : object.chainStates)
                ? object.chainStates.map((e) => types_2.ChainState.fromJSON(e))
                : [],
            linkedAddresses: Array.isArray(object === null || object === void 0 ? void 0 : object.linkedAddresses)
                ? object.linkedAddresses.map((e) => types_2.LinkedAddresses.fromJSON(e))
                : [],
            transfers: Array.isArray(object === null || object === void 0 ? void 0 : object.transfers)
                ? object.transfers.map((e) => types_1.CrossChainTransfer.fromJSON(e))
                : [],
            fee: isSet(object.fee) ? types_1.TransferFee.fromJSON(object.fee) : undefined,
            feeInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.feeInfos) ? object.feeInfos.map((e) => types_1.FeeInfo.fromJSON(e)) : [],
            rateLimits: Array.isArray(object === null || object === void 0 ? void 0 : object.rateLimits)
                ? object.rateLimits.map((e) => types_2.RateLimit.fromJSON(e))
                : [],
            transferEpochs: Array.isArray(object === null || object === void 0 ? void 0 : object.transferEpochs)
                ? object.transferEpochs.map((e) => types_2.TransferEpoch.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        message.nonce !== undefined && (obj.nonce = (message.nonce || long_1.default.UZERO).toString());
        if (message.chains) {
            obj.chains = message.chains.map((e) => (e ? types_1.Chain.toJSON(e) : undefined));
        }
        else {
            obj.chains = [];
        }
        if (message.chainStates) {
            obj.chainStates = message.chainStates.map((e) => (e ? types_2.ChainState.toJSON(e) : undefined));
        }
        else {
            obj.chainStates = [];
        }
        if (message.linkedAddresses) {
            obj.linkedAddresses = message.linkedAddresses.map((e) => (e ? types_2.LinkedAddresses.toJSON(e) : undefined));
        }
        else {
            obj.linkedAddresses = [];
        }
        if (message.transfers) {
            obj.transfers = message.transfers.map((e) => (e ? types_1.CrossChainTransfer.toJSON(e) : undefined));
        }
        else {
            obj.transfers = [];
        }
        message.fee !== undefined && (obj.fee = message.fee ? types_1.TransferFee.toJSON(message.fee) : undefined);
        if (message.feeInfos) {
            obj.feeInfos = message.feeInfos.map((e) => (e ? types_1.FeeInfo.toJSON(e) : undefined));
        }
        else {
            obj.feeInfos = [];
        }
        if (message.rateLimits) {
            obj.rateLimits = message.rateLimits.map((e) => (e ? types_2.RateLimit.toJSON(e) : undefined));
        }
        else {
            obj.rateLimits = [];
        }
        if (message.transferEpochs) {
            obj.transferEpochs = message.transferEpochs.map((e) => (e ? types_2.TransferEpoch.toJSON(e) : undefined));
        }
        else {
            obj.transferEpochs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.nonce =
            object.nonce !== undefined && object.nonce !== null ? long_1.default.fromValue(object.nonce) : long_1.default.UZERO;
        message.chains = ((_a = object.chains) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.Chain.fromPartial(e))) || [];
        message.chainStates = ((_b = object.chainStates) === null || _b === void 0 ? void 0 : _b.map((e) => types_2.ChainState.fromPartial(e))) || [];
        message.linkedAddresses = ((_c = object.linkedAddresses) === null || _c === void 0 ? void 0 : _c.map((e) => types_2.LinkedAddresses.fromPartial(e))) || [];
        message.transfers = ((_d = object.transfers) === null || _d === void 0 ? void 0 : _d.map((e) => types_1.CrossChainTransfer.fromPartial(e))) || [];
        message.fee =
            object.fee !== undefined && object.fee !== null ? types_1.TransferFee.fromPartial(object.fee) : undefined;
        message.feeInfos = ((_e = object.feeInfos) === null || _e === void 0 ? void 0 : _e.map((e) => types_1.FeeInfo.fromPartial(e))) || [];
        message.rateLimits = ((_f = object.rateLimits) === null || _f === void 0 ? void 0 : _f.map((e) => types_2.RateLimit.fromPartial(e))) || [];
        message.transferEpochs = ((_g = object.transferEpochs) === null || _g === void 0 ? void 0 : _g.map((e) => types_2.TransferEpoch.fromPartial(e))) || [];
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map