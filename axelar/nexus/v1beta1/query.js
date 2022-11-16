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
exports.TransferRateLimit = exports.TransferRateLimitResponse = exports.TransferRateLimitRequest = exports.RecipientAddressResponse = exports.RecipientAddressRequest = exports.ChainsByAssetResponse = exports.ChainsByAssetRequest = exports.ChainStateResponse = exports.ChainStateRequest = exports.AssetsResponse = exports.AssetsRequest = exports.ChainsResponse = exports.ChainsRequest = exports.TransferFeeResponse = exports.TransferFeeRequest = exports.FeeInfoResponse = exports.FeeInfoRequest = exports.TransfersForChainResponse = exports.TransfersForChainRequest = exports.LatestDepositAddressResponse = exports.LatestDepositAddressRequest = exports.QueryChainMaintainersResponse = exports.chainStatusToJSON = exports.chainStatusFromJSON = exports.ChainStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/nexus/exported/v1beta1/types");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const types_2 = require("../../../axelar/nexus/v1beta1/types");
const duration_1 = require("../../../google/protobuf/duration");
exports.protobufPackage = "axelar.nexus.v1beta1";
var ChainStatus;
(function (ChainStatus) {
    ChainStatus[ChainStatus["CHAIN_STATUS_UNSPECIFIED"] = 0] = "CHAIN_STATUS_UNSPECIFIED";
    ChainStatus[ChainStatus["CHAIN_STATUS_ACTIVATED"] = 1] = "CHAIN_STATUS_ACTIVATED";
    ChainStatus[ChainStatus["CHAIN_STATUS_DEACTIVATED"] = 2] = "CHAIN_STATUS_DEACTIVATED";
    ChainStatus[ChainStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChainStatus = exports.ChainStatus || (exports.ChainStatus = {}));
function chainStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "CHAIN_STATUS_UNSPECIFIED":
            return ChainStatus.CHAIN_STATUS_UNSPECIFIED;
        case 1:
        case "CHAIN_STATUS_ACTIVATED":
            return ChainStatus.CHAIN_STATUS_ACTIVATED;
        case 2:
        case "CHAIN_STATUS_DEACTIVATED":
            return ChainStatus.CHAIN_STATUS_DEACTIVATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChainStatus.UNRECOGNIZED;
    }
}
exports.chainStatusFromJSON = chainStatusFromJSON;
function chainStatusToJSON(object) {
    switch (object) {
        case ChainStatus.CHAIN_STATUS_UNSPECIFIED:
            return "CHAIN_STATUS_UNSPECIFIED";
        case ChainStatus.CHAIN_STATUS_ACTIVATED:
            return "CHAIN_STATUS_ACTIVATED";
        case ChainStatus.CHAIN_STATUS_DEACTIVATED:
            return "CHAIN_STATUS_DEACTIVATED";
        case ChainStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.chainStatusToJSON = chainStatusToJSON;
function createBaseQueryChainMaintainersResponse() {
    return { maintainers: [] };
}
exports.QueryChainMaintainersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.maintainers) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChainMaintainersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maintainers.push(reader.bytes());
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
            maintainers: Array.isArray(object === null || object === void 0 ? void 0 : object.maintainers)
                ? object.maintainers.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.maintainers) {
            obj.maintainers = message.maintainers.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.maintainers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryChainMaintainersResponse();
        message.maintainers = ((_a = object.maintainers) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseLatestDepositAddressRequest() {
    return { recipientAddr: "", recipientChain: "", depositChain: "" };
}
exports.LatestDepositAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.recipientAddr !== "") {
            writer.uint32(10).string(message.recipientAddr);
        }
        if (message.recipientChain !== "") {
            writer.uint32(18).string(message.recipientChain);
        }
        if (message.depositChain !== "") {
            writer.uint32(26).string(message.depositChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLatestDepositAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipientAddr = reader.string();
                    break;
                case 2:
                    message.recipientChain = reader.string();
                    break;
                case 3:
                    message.depositChain = reader.string();
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
            recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
            depositChain: isSet(object.depositChain) ? String(object.depositChain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.recipientAddr !== undefined && (obj.recipientAddr = message.recipientAddr);
        message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
        message.depositChain !== undefined && (obj.depositChain = message.depositChain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseLatestDepositAddressRequest();
        message.recipientAddr = (_a = object.recipientAddr) !== null && _a !== void 0 ? _a : "";
        message.recipientChain = (_b = object.recipientChain) !== null && _b !== void 0 ? _b : "";
        message.depositChain = (_c = object.depositChain) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseLatestDepositAddressResponse() {
    return { depositAddr: "" };
}
exports.LatestDepositAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositAddr !== "") {
            writer.uint32(10).string(message.depositAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLatestDepositAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositAddr = reader.string();
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
            depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositAddr !== undefined && (obj.depositAddr = message.depositAddr);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLatestDepositAddressResponse();
        message.depositAddr = (_a = object.depositAddr) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseTransfersForChainRequest() {
    return { chain: "", state: 0, pagination: undefined };
}
exports.TransfersForChainRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransfersForChainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            state: isSet(object.state) ? (0, types_1.transferStateFromJSON)(object.state) : 0,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.state !== undefined && (obj.state = (0, types_1.transferStateToJSON)(message.state));
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTransfersForChainRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseTransfersForChainResponse() {
    return { transfers: [], pagination: undefined };
}
exports.TransfersForChainResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.transfers) {
            types_1.CrossChainTransfer.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransfersForChainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfers.push(types_1.CrossChainTransfer.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            transfers: Array.isArray(object === null || object === void 0 ? void 0 : object.transfers)
                ? object.transfers.map((e) => types_1.CrossChainTransfer.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map((e) => (e ? types_1.CrossChainTransfer.toJSON(e) : undefined));
        }
        else {
            obj.transfers = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTransfersForChainResponse();
        message.transfers = ((_a = object.transfers) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.CrossChainTransfer.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseFeeInfoRequest() {
    return { chain: "", asset: "" };
}
exports.FeeInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.asset = reader.string();
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.asset !== undefined && (obj.asset = message.asset);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeeInfoRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.asset = (_b = object.asset) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseFeeInfoResponse() {
    return { feeInfo: undefined };
}
exports.FeeInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feeInfo !== undefined) {
            types_1.FeeInfo.encode(message.feeInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeInfo = types_1.FeeInfo.decode(reader, reader.uint32());
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
            feeInfo: isSet(object.feeInfo) ? types_1.FeeInfo.fromJSON(object.feeInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.feeInfo !== undefined &&
            (obj.feeInfo = message.feeInfo ? types_1.FeeInfo.toJSON(message.feeInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFeeInfoResponse();
        message.feeInfo =
            object.feeInfo !== undefined && object.feeInfo !== null
                ? types_1.FeeInfo.fromPartial(object.feeInfo)
                : undefined;
        return message;
    },
};
function createBaseTransferFeeRequest() {
    return { sourceChain: "", destinationChain: "", amount: "" };
}
exports.TransferFeeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sourceChain !== "") {
            writer.uint32(10).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(18).string(message.destinationChain);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferFeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceChain = reader.string();
                    break;
                case 2:
                    message.destinationChain = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
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
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTransferFeeRequest();
        message.sourceChain = (_a = object.sourceChain) !== null && _a !== void 0 ? _a : "";
        message.destinationChain = (_b = object.destinationChain) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseTransferFeeResponse() {
    return { fee: undefined };
}
exports.TransferFeeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fee !== undefined) {
            coin_1.Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee = coin_1.Coin.decode(reader, reader.uint32());
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
            fee: isSet(object.fee) ? coin_1.Coin.fromJSON(object.fee) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fee !== undefined && (obj.fee = message.fee ? coin_1.Coin.toJSON(message.fee) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTransferFeeResponse();
        message.fee = object.fee !== undefined && object.fee !== null ? coin_1.Coin.fromPartial(object.fee) : undefined;
        return message;
    },
};
function createBaseChainsRequest() {
    return { status: 0 };
}
exports.ChainsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
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
            status: isSet(object.status) ? chainStatusFromJSON(object.status) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = chainStatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseChainsRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseChainsResponse() {
    return { chains: [] };
}
exports.ChainsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.chains) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chains.push(reader.string());
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
            chains: Array.isArray(object === null || object === void 0 ? void 0 : object.chains) ? object.chains.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chains) {
            obj.chains = message.chains.map((e) => e);
        }
        else {
            obj.chains = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseChainsResponse();
        message.chains = ((_a = object.chains) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseAssetsRequest() {
    return { chain: "" };
}
exports.AssetsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
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
            chain: isSet(object.chain) ? String(object.chain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetsRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAssetsResponse() {
    return { assets: [] };
}
exports.AssetsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.assets) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(reader.string());
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
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets) ? object.assets.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map((e) => e);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetsResponse();
        message.assets = ((_a = object.assets) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseChainStateRequest() {
    return { chain: "" };
}
exports.ChainStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
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
            chain: isSet(object.chain) ? String(object.chain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseChainStateRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseChainStateResponse() {
    return { state: undefined };
}
exports.ChainStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== undefined) {
            types_2.ChainState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = types_2.ChainState.decode(reader, reader.uint32());
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
            state: isSet(object.state) ? types_2.ChainState.fromJSON(object.state) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? types_2.ChainState.toJSON(message.state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChainStateResponse();
        message.state =
            object.state !== undefined && object.state !== null ? types_2.ChainState.fromPartial(object.state) : undefined;
        return message;
    },
};
function createBaseChainsByAssetRequest() {
    return { asset: "" };
}
exports.ChainsByAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.asset !== "") {
            writer.uint32(10).string(message.asset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainsByAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = reader.string();
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
            asset: isSet(object.asset) ? String(object.asset) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.asset !== undefined && (obj.asset = message.asset);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseChainsByAssetRequest();
        message.asset = (_a = object.asset) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseChainsByAssetResponse() {
    return { chains: [] };
}
exports.ChainsByAssetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.chains) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainsByAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chains.push(reader.string());
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
            chains: Array.isArray(object === null || object === void 0 ? void 0 : object.chains) ? object.chains.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chains) {
            obj.chains = message.chains.map((e) => e);
        }
        else {
            obj.chains = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseChainsByAssetResponse();
        message.chains = ((_a = object.chains) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseRecipientAddressRequest() {
    return { depositAddr: "", depositChain: "" };
}
exports.RecipientAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositAddr !== "") {
            writer.uint32(10).string(message.depositAddr);
        }
        if (message.depositChain !== "") {
            writer.uint32(18).string(message.depositChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecipientAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositAddr = reader.string();
                    break;
                case 2:
                    message.depositChain = reader.string();
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
            depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : "",
            depositChain: isSet(object.depositChain) ? String(object.depositChain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositAddr !== undefined && (obj.depositAddr = message.depositAddr);
        message.depositChain !== undefined && (obj.depositChain = message.depositChain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRecipientAddressRequest();
        message.depositAddr = (_a = object.depositAddr) !== null && _a !== void 0 ? _a : "";
        message.depositChain = (_b = object.depositChain) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRecipientAddressResponse() {
    return { recipientAddr: "", recipientChain: "" };
}
exports.RecipientAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.recipientAddr !== "") {
            writer.uint32(10).string(message.recipientAddr);
        }
        if (message.recipientChain !== "") {
            writer.uint32(18).string(message.recipientChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecipientAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipientAddr = reader.string();
                    break;
                case 2:
                    message.recipientChain = reader.string();
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
            recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.recipientAddr !== undefined && (obj.recipientAddr = message.recipientAddr);
        message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRecipientAddressResponse();
        message.recipientAddr = (_a = object.recipientAddr) !== null && _a !== void 0 ? _a : "";
        message.recipientChain = (_b = object.recipientChain) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTransferRateLimitRequest() {
    return { chain: "", asset: "" };
}
exports.TransferRateLimitRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferRateLimitRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.asset = reader.string();
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.asset !== undefined && (obj.asset = message.asset);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTransferRateLimitRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.asset = (_b = object.asset) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTransferRateLimitResponse() {
    return { transferRateLimit: undefined };
}
exports.TransferRateLimitResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.transferRateLimit !== undefined) {
            exports.TransferRateLimit.encode(message.transferRateLimit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferRateLimitResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferRateLimit = exports.TransferRateLimit.decode(reader, reader.uint32());
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
            transferRateLimit: isSet(object.transferRateLimit)
                ? exports.TransferRateLimit.fromJSON(object.transferRateLimit)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.transferRateLimit !== undefined &&
            (obj.transferRateLimit = message.transferRateLimit
                ? exports.TransferRateLimit.toJSON(message.transferRateLimit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTransferRateLimitResponse();
        message.transferRateLimit =
            object.transferRateLimit !== undefined && object.transferRateLimit !== null
                ? exports.TransferRateLimit.fromPartial(object.transferRateLimit)
                : undefined;
        return message;
    },
};
function createBaseTransferRateLimit() {
    return {
        limit: new Uint8Array(),
        window: undefined,
        incoming: new Uint8Array(),
        outgoing: new Uint8Array(),
        timeLeft: undefined,
    };
}
exports.TransferRateLimit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit.length !== 0) {
            writer.uint32(10).bytes(message.limit);
        }
        if (message.window !== undefined) {
            duration_1.Duration.encode(message.window, writer.uint32(18).fork()).ldelim();
        }
        if (message.incoming.length !== 0) {
            writer.uint32(26).bytes(message.incoming);
        }
        if (message.outgoing.length !== 0) {
            writer.uint32(34).bytes(message.outgoing);
        }
        if (message.timeLeft !== undefined) {
            duration_1.Duration.encode(message.timeLeft, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferRateLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limit = reader.bytes();
                    break;
                case 2:
                    message.window = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.incoming = reader.bytes();
                    break;
                case 4:
                    message.outgoing = reader.bytes();
                    break;
                case 5:
                    message.timeLeft = duration_1.Duration.decode(reader, reader.uint32());
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
            limit: isSet(object.limit) ? bytesFromBase64(object.limit) : new Uint8Array(),
            window: isSet(object.window) ? duration_1.Duration.fromJSON(object.window) : undefined,
            incoming: isSet(object.incoming) ? bytesFromBase64(object.incoming) : new Uint8Array(),
            outgoing: isSet(object.outgoing) ? bytesFromBase64(object.outgoing) : new Uint8Array(),
            timeLeft: isSet(object.timeLeft) ? duration_1.Duration.fromJSON(object.timeLeft) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined &&
            (obj.limit = base64FromBytes(message.limit !== undefined ? message.limit : new Uint8Array()));
        message.window !== undefined &&
            (obj.window = message.window ? duration_1.Duration.toJSON(message.window) : undefined);
        message.incoming !== undefined &&
            (obj.incoming = base64FromBytes(message.incoming !== undefined ? message.incoming : new Uint8Array()));
        message.outgoing !== undefined &&
            (obj.outgoing = base64FromBytes(message.outgoing !== undefined ? message.outgoing : new Uint8Array()));
        message.timeLeft !== undefined &&
            (obj.timeLeft = message.timeLeft ? duration_1.Duration.toJSON(message.timeLeft) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTransferRateLimit();
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.window =
            object.window !== undefined && object.window !== null ? duration_1.Duration.fromPartial(object.window) : undefined;
        message.incoming = (_b = object.incoming) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.outgoing = (_c = object.outgoing) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.timeLeft =
            object.timeLeft !== undefined && object.timeLeft !== null
                ? duration_1.Duration.fromPartial(object.timeLeft)
                : undefined;
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    arr.forEach((byte) => {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(""));
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map