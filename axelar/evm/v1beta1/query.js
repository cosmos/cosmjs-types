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
exports.Proof = exports.TokenInfoResponse = exports.TokenInfoRequest = exports.ERC20TokensResponse_Token = exports.ERC20TokensResponse = exports.ERC20TokensRequest = exports.BytecodeResponse = exports.BytecodeRequest = exports.GatewayAddressResponse = exports.GatewayAddressRequest = exports.ConfirmationHeightResponse = exports.ConfirmationHeightRequest = exports.BurnerInfoResponse = exports.BurnerInfoRequest = exports.QueryCommandResponse_ParamsEntry = exports.QueryCommandResponse = exports.PendingCommandsResponse = exports.PendingCommandsRequest = exports.ChainsResponse = exports.ChainsRequest = exports.QueryBurnerAddressResponse = exports.EventResponse = exports.EventRequest = exports.DepositStateResponse = exports.DepositStateRequest = exports.QueryDepositStateParams = exports.QueryTokenAddressResponse = exports.KeyAddressResponse_WeightedAddress = exports.KeyAddressResponse = exports.KeyAddressRequest = exports.BatchedCommandsResponse = exports.BatchedCommandsRequest = exports.DepositQueryParams = exports.tokenTypeToJSON = exports.tokenTypeFromJSON = exports.TokenType = exports.chainStatusToJSON = exports.chainStatusFromJSON = exports.ChainStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/evm/v1beta1/types");
exports.protobufPackage = "axelar.evm.v1beta1";
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
var TokenType;
(function (TokenType) {
    TokenType[TokenType["TOKEN_TYPE_UNSPECIFIED"] = 0] = "TOKEN_TYPE_UNSPECIFIED";
    TokenType[TokenType["TOKEN_TYPE_INTERNAL"] = 1] = "TOKEN_TYPE_INTERNAL";
    TokenType[TokenType["TOKEN_TYPE_EXTERNAL"] = 2] = "TOKEN_TYPE_EXTERNAL";
    TokenType[TokenType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
function tokenTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TOKEN_TYPE_UNSPECIFIED":
            return TokenType.TOKEN_TYPE_UNSPECIFIED;
        case 1:
        case "TOKEN_TYPE_INTERNAL":
            return TokenType.TOKEN_TYPE_INTERNAL;
        case 2:
        case "TOKEN_TYPE_EXTERNAL":
            return TokenType.TOKEN_TYPE_EXTERNAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TokenType.UNRECOGNIZED;
    }
}
exports.tokenTypeFromJSON = tokenTypeFromJSON;
function tokenTypeToJSON(object) {
    switch (object) {
        case TokenType.TOKEN_TYPE_UNSPECIFIED:
            return "TOKEN_TYPE_UNSPECIFIED";
        case TokenType.TOKEN_TYPE_INTERNAL:
            return "TOKEN_TYPE_INTERNAL";
        case TokenType.TOKEN_TYPE_EXTERNAL:
            return "TOKEN_TYPE_EXTERNAL";
        case TokenType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.tokenTypeToJSON = tokenTypeToJSON;
function createBaseDepositQueryParams() {
    return { address: "", asset: "", chain: "" };
}
exports.DepositQueryParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        if (message.chain !== "") {
            writer.uint32(26).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositQueryParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.asset = reader.string();
                    break;
                case 3:
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
            address: isSet(object.address) ? String(object.address) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
            chain: isSet(object.chain) ? String(object.chain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.asset !== undefined && (obj.asset = message.asset);
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDepositQueryParams();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.asset = (_b = object.asset) !== null && _b !== void 0 ? _b : "";
        message.chain = (_c = object.chain) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseBatchedCommandsRequest() {
    return { chain: "", id: "" };
}
exports.BatchedCommandsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchedCommandsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBatchedCommandsRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseBatchedCommandsResponse() {
    return {
        id: "",
        data: "",
        status: 0,
        keyId: "",
        executeData: "",
        prevBatchedCommandsId: "",
        commandIds: [],
        proof: undefined,
    };
}
exports.BatchedCommandsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.data !== "") {
            writer.uint32(18).string(message.data);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.keyId !== "") {
            writer.uint32(34).string(message.keyId);
        }
        if (message.executeData !== "") {
            writer.uint32(50).string(message.executeData);
        }
        if (message.prevBatchedCommandsId !== "") {
            writer.uint32(58).string(message.prevBatchedCommandsId);
        }
        for (const v of message.commandIds) {
            writer.uint32(66).string(v);
        }
        if (message.proof !== undefined) {
            exports.Proof.encode(message.proof, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchedCommandsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.data = reader.string();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.keyId = reader.string();
                    break;
                case 6:
                    message.executeData = reader.string();
                    break;
                case 7:
                    message.prevBatchedCommandsId = reader.string();
                    break;
                case 8:
                    message.commandIds.push(reader.string());
                    break;
                case 9:
                    message.proof = exports.Proof.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "",
            data: isSet(object.data) ? String(object.data) : "",
            status: isSet(object.status) ? (0, types_1.batchedCommandsStatusFromJSON)(object.status) : 0,
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            executeData: isSet(object.executeData) ? String(object.executeData) : "",
            prevBatchedCommandsId: isSet(object.prevBatchedCommandsId) ? String(object.prevBatchedCommandsId) : "",
            commandIds: Array.isArray(object === null || object === void 0 ? void 0 : object.commandIds) ? object.commandIds.map((e) => String(e)) : [],
            proof: isSet(object.proof) ? exports.Proof.fromJSON(object.proof) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.data !== undefined && (obj.data = message.data);
        message.status !== undefined && (obj.status = (0, types_1.batchedCommandsStatusToJSON)(message.status));
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.executeData !== undefined && (obj.executeData = message.executeData);
        message.prevBatchedCommandsId !== undefined &&
            (obj.prevBatchedCommandsId = message.prevBatchedCommandsId);
        if (message.commandIds) {
            obj.commandIds = message.commandIds.map((e) => e);
        }
        else {
            obj.commandIds = [];
        }
        message.proof !== undefined && (obj.proof = message.proof ? exports.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseBatchedCommandsResponse();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : "";
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
        message.keyId = (_d = object.keyId) !== null && _d !== void 0 ? _d : "";
        message.executeData = (_e = object.executeData) !== null && _e !== void 0 ? _e : "";
        message.prevBatchedCommandsId = (_f = object.prevBatchedCommandsId) !== null && _f !== void 0 ? _f : "";
        message.commandIds = ((_g = object.commandIds) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.proof =
            object.proof !== undefined && object.proof !== null ? exports.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
};
function createBaseKeyAddressRequest() {
    return { chain: "", keyId: "" };
}
exports.KeyAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.keyId !== "") {
            writer.uint32(34).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 4:
                    message.keyId = reader.string();
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
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKeyAddressRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.keyId = (_b = object.keyId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseKeyAddressResponse() {
    return { keyId: "", addresses: [], threshold: "" };
}
exports.KeyAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        for (const v of message.addresses) {
            exports.KeyAddressResponse_WeightedAddress.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.threshold !== "") {
            writer.uint32(26).string(message.threshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.addresses.push(exports.KeyAddressResponse_WeightedAddress.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.threshold = reader.string();
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
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses)
                ? object.addresses.map((e) => exports.KeyAddressResponse_WeightedAddress.fromJSON(e))
                : [],
            threshold: isSet(object.threshold) ? String(object.threshold) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e ? exports.KeyAddressResponse_WeightedAddress.toJSON(e) : undefined);
        }
        else {
            obj.addresses = [];
        }
        message.threshold !== undefined && (obj.threshold = message.threshold);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseKeyAddressResponse();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.addresses = ((_b = object.addresses) === null || _b === void 0 ? void 0 : _b.map((e) => exports.KeyAddressResponse_WeightedAddress.fromPartial(e))) || [];
        message.threshold = (_c = object.threshold) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseKeyAddressResponse_WeightedAddress() {
    return { address: "", weight: "" };
}
exports.KeyAddressResponse_WeightedAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyAddressResponse_WeightedAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            weight: isSet(object.weight) ? String(object.weight) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKeyAddressResponse_WeightedAddress();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.weight = (_b = object.weight) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryTokenAddressResponse() {
    return { address: "", confirmed: false };
}
exports.QueryTokenAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.confirmed === true) {
            writer.uint32(16).bool(message.confirmed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.confirmed = reader.bool();
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
            address: isSet(object.address) ? String(object.address) : "",
            confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.confirmed !== undefined && (obj.confirmed = message.confirmed);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryTokenAddressResponse();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.confirmed = (_b = object.confirmed) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQueryDepositStateParams() {
    return { txId: new Uint8Array(), burnerAddress: new Uint8Array() };
}
exports.QueryDepositStateParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.burnerAddress.length !== 0) {
            writer.uint32(18).bytes(message.burnerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositStateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.bytes();
                    break;
                case 2:
                    message.burnerAddress = reader.bytes();
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.burnerAddress !== undefined &&
            (obj.burnerAddress = base64FromBytes(message.burnerAddress !== undefined ? message.burnerAddress : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDepositStateParams();
        message.txId = (_a = object.txId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.burnerAddress = (_b = object.burnerAddress) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseDepositStateRequest() {
    return { chain: "", params: undefined };
}
exports.DepositStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.params !== undefined) {
            exports.QueryDepositStateParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.params = exports.QueryDepositStateParams.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? exports.QueryDepositStateParams.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.params !== undefined &&
            (obj.params = message.params ? exports.QueryDepositStateParams.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDepositStateRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.params =
            object.params !== undefined && object.params !== null
                ? exports.QueryDepositStateParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseDepositStateResponse() {
    return { status: 0 };
}
exports.DepositStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
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
            status: isSet(object.status) ? (0, types_1.depositStatusFromJSON)(object.status) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = (0, types_1.depositStatusToJSON)(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDepositStateResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseEventRequest() {
    return { chain: "", eventId: "" };
}
exports.EventRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.eventId = reader.string();
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
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.eventId !== undefined && (obj.eventId = message.eventId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.eventId = (_b = object.eventId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventResponse() {
    return { event: undefined };
}
exports.EventResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.event !== undefined) {
            types_1.Event.encode(message.event, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.event = types_1.Event.decode(reader, reader.uint32());
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
            event: isSet(object.event) ? types_1.Event.fromJSON(object.event) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.event !== undefined && (obj.event = message.event ? types_1.Event.toJSON(message.event) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventResponse();
        message.event =
            object.event !== undefined && object.event !== null ? types_1.Event.fromPartial(object.event) : undefined;
        return message;
    },
};
function createBaseQueryBurnerAddressResponse() {
    return { address: "" };
}
exports.QueryBurnerAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBurnerAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBurnerAddressResponse();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
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
function createBasePendingCommandsRequest() {
    return { chain: "" };
}
exports.PendingCommandsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingCommandsRequest();
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
        const message = createBasePendingCommandsRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBasePendingCommandsResponse() {
    return { commands: [] };
}
exports.PendingCommandsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.commands) {
            exports.QueryCommandResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingCommandsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commands.push(exports.QueryCommandResponse.decode(reader, reader.uint32()));
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
            commands: Array.isArray(object === null || object === void 0 ? void 0 : object.commands)
                ? object.commands.map((e) => exports.QueryCommandResponse.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commands) {
            obj.commands = message.commands.map((e) => (e ? exports.QueryCommandResponse.toJSON(e) : undefined));
        }
        else {
            obj.commands = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePendingCommandsResponse();
        message.commands = ((_a = object.commands) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QueryCommandResponse.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryCommandResponse() {
    return { id: "", type: "", params: {}, keyId: "", maxGasCost: 0 };
}
exports.QueryCommandResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        Object.entries(message.params).forEach(([key, value]) => {
            exports.QueryCommandResponse_ParamsEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        if (message.keyId !== "") {
            writer.uint32(34).string(message.keyId);
        }
        if (message.maxGasCost !== 0) {
            writer.uint32(40).uint32(message.maxGasCost);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCommandResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    const entry3 = exports.QueryCommandResponse_ParamsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.params[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.keyId = reader.string();
                    break;
                case 5:
                    message.maxGasCost = reader.uint32();
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
            id: isSet(object.id) ? String(object.id) : "",
            type: isSet(object.type) ? String(object.type) : "",
            params: isObject(object.params)
                ? Object.entries(object.params).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            maxGasCost: isSet(object.maxGasCost) ? Number(object.maxGasCost) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        obj.params = {};
        if (message.params) {
            Object.entries(message.params).forEach(([k, v]) => {
                obj.params[k] = v;
            });
        }
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.maxGasCost !== undefined && (obj.maxGasCost = Math.round(message.maxGasCost));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseQueryCommandResponse();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        message.params = Object.entries((_c = object.params) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.keyId = (_d = object.keyId) !== null && _d !== void 0 ? _d : "";
        message.maxGasCost = (_e = object.maxGasCost) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseQueryCommandResponse_ParamsEntry() {
    return { key: "", value: "" };
}
exports.QueryCommandResponse_ParamsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCommandResponse_ParamsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryCommandResponse_ParamsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseBurnerInfoRequest() {
    return { address: new Uint8Array() };
}
exports.BurnerInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBurnerInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
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
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBurnerInfoRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseBurnerInfoResponse() {
    return { chain: "", burnerInfo: undefined };
}
exports.BurnerInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.burnerInfo !== undefined) {
            types_1.BurnerInfo.encode(message.burnerInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBurnerInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.burnerInfo = types_1.BurnerInfo.decode(reader, reader.uint32());
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
            burnerInfo: isSet(object.burnerInfo) ? types_1.BurnerInfo.fromJSON(object.burnerInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.burnerInfo !== undefined &&
            (obj.burnerInfo = message.burnerInfo ? types_1.BurnerInfo.toJSON(message.burnerInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBurnerInfoResponse();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.burnerInfo =
            object.burnerInfo !== undefined && object.burnerInfo !== null
                ? types_1.BurnerInfo.fromPartial(object.burnerInfo)
                : undefined;
        return message;
    },
};
function createBaseConfirmationHeightRequest() {
    return { chain: "" };
}
exports.ConfirmationHeightRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmationHeightRequest();
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
        const message = createBaseConfirmationHeightRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseConfirmationHeightResponse() {
    return { height: long_1.default.UZERO };
}
exports.ConfirmationHeightResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmationHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
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
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConfirmationHeightResponse();
        message.height =
            object.height !== undefined && object.height !== null ? long_1.default.fromValue(object.height) : long_1.default.UZERO;
        return message;
    },
};
function createBaseGatewayAddressRequest() {
    return { chain: "" };
}
exports.GatewayAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGatewayAddressRequest();
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
        const message = createBaseGatewayAddressRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGatewayAddressResponse() {
    return { address: "" };
}
exports.GatewayAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGatewayAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGatewayAddressResponse();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseBytecodeRequest() {
    return { chain: "", contract: "" };
}
exports.BytecodeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBytecodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
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
            contract: isSet(object.contract) ? String(object.contract) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBytecodeRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.contract = (_b = object.contract) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseBytecodeResponse() {
    return { bytecode: "" };
}
exports.BytecodeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bytecode !== "") {
            writer.uint32(10).string(message.bytecode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBytecodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bytecode = reader.string();
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
            bytecode: isSet(object.bytecode) ? String(object.bytecode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bytecode !== undefined && (obj.bytecode = message.bytecode);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBytecodeResponse();
        message.bytecode = (_a = object.bytecode) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseERC20TokensRequest() {
    return { chain: "", type: 0 };
}
exports.ERC20TokensRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20TokensRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
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
            type: isSet(object.type) ? tokenTypeFromJSON(object.type) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.type !== undefined && (obj.type = tokenTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseERC20TokensRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseERC20TokensResponse() {
    return { tokens: [] };
}
exports.ERC20TokensResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tokens) {
            exports.ERC20TokensResponse_Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20TokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens.push(exports.ERC20TokensResponse_Token.decode(reader, reader.uint32()));
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
            tokens: Array.isArray(object === null || object === void 0 ? void 0 : object.tokens)
                ? object.tokens.map((e) => exports.ERC20TokensResponse_Token.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => (e ? exports.ERC20TokensResponse_Token.toJSON(e) : undefined));
        }
        else {
            obj.tokens = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseERC20TokensResponse();
        message.tokens = ((_a = object.tokens) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ERC20TokensResponse_Token.fromPartial(e))) || [];
        return message;
    },
};
function createBaseERC20TokensResponse_Token() {
    return { asset: "", symbol: "" };
}
exports.ERC20TokensResponse_Token = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.asset !== "") {
            writer.uint32(10).string(message.asset);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20TokensResponse_Token();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
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
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.asset !== undefined && (obj.asset = message.asset);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseERC20TokensResponse_Token();
        message.asset = (_a = object.asset) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTokenInfoRequest() {
    return { chain: "", asset: undefined, symbol: undefined, address: undefined };
}
exports.TokenInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.asset !== undefined) {
            writer.uint32(18).string(message.asset);
        }
        if (message.symbol !== undefined) {
            writer.uint32(26).string(message.symbol);
        }
        if (message.address !== undefined) {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.asset = reader.string();
                    break;
                case 3:
                    message.symbol = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
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
            asset: isSet(object.asset) ? String(object.asset) : undefined,
            symbol: isSet(object.symbol) ? String(object.symbol) : undefined,
            address: isSet(object.address) ? String(object.address) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.asset !== undefined && (obj.asset = message.asset);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTokenInfoRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.asset = (_b = object.asset) !== null && _b !== void 0 ? _b : undefined;
        message.symbol = (_c = object.symbol) !== null && _c !== void 0 ? _c : undefined;
        message.address = (_d = object.address) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseTokenInfoResponse() {
    return {
        asset: "",
        details: undefined,
        address: "",
        confirmed: false,
        isExternal: false,
        burnerCodeHash: "",
    };
}
exports.TokenInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.asset !== "") {
            writer.uint32(10).string(message.asset);
        }
        if (message.details !== undefined) {
            types_1.TokenDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        if (message.confirmed === true) {
            writer.uint32(32).bool(message.confirmed);
        }
        if (message.isExternal === true) {
            writer.uint32(40).bool(message.isExternal);
        }
        if (message.burnerCodeHash !== "") {
            writer.uint32(50).string(message.burnerCodeHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = reader.string();
                    break;
                case 2:
                    message.details = types_1.TokenDetails.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.confirmed = reader.bool();
                    break;
                case 5:
                    message.isExternal = reader.bool();
                    break;
                case 6:
                    message.burnerCodeHash = reader.string();
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
            details: isSet(object.details) ? types_1.TokenDetails.fromJSON(object.details) : undefined,
            address: isSet(object.address) ? String(object.address) : "",
            confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false,
            isExternal: isSet(object.isExternal) ? Boolean(object.isExternal) : false,
            burnerCodeHash: isSet(object.burnerCodeHash) ? String(object.burnerCodeHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.asset !== undefined && (obj.asset = message.asset);
        message.details !== undefined &&
            (obj.details = message.details ? types_1.TokenDetails.toJSON(message.details) : undefined);
        message.address !== undefined && (obj.address = message.address);
        message.confirmed !== undefined && (obj.confirmed = message.confirmed);
        message.isExternal !== undefined && (obj.isExternal = message.isExternal);
        message.burnerCodeHash !== undefined && (obj.burnerCodeHash = message.burnerCodeHash);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseTokenInfoResponse();
        message.asset = (_a = object.asset) !== null && _a !== void 0 ? _a : "";
        message.details =
            object.details !== undefined && object.details !== null
                ? types_1.TokenDetails.fromPartial(object.details)
                : undefined;
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.confirmed = (_c = object.confirmed) !== null && _c !== void 0 ? _c : false;
        message.isExternal = (_d = object.isExternal) !== null && _d !== void 0 ? _d : false;
        message.burnerCodeHash = (_e = object.burnerCodeHash) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseProof() {
    return { addresses: [], weights: [], threshold: "", signatures: [] };
}
exports.Proof = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        for (const v of message.weights) {
            writer.uint32(18).string(v);
        }
        if (message.threshold !== "") {
            writer.uint32(26).string(message.threshold);
        }
        for (const v of message.signatures) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
                    break;
                case 2:
                    message.weights.push(reader.string());
                    break;
                case 3:
                    message.threshold = reader.string();
                    break;
                case 4:
                    message.signatures.push(reader.string());
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
            addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map((e) => String(e)) : [],
            weights: Array.isArray(object === null || object === void 0 ? void 0 : object.weights) ? object.weights.map((e) => String(e)) : [],
            threshold: isSet(object.threshold) ? String(object.threshold) : "",
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e);
        }
        else {
            obj.addresses = [];
        }
        if (message.weights) {
            obj.weights = message.weights.map((e) => e);
        }
        else {
            obj.weights = [];
        }
        message.threshold !== undefined && (obj.threshold = message.threshold);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseProof();
        message.addresses = ((_a = object.addresses) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.weights = ((_b = object.weights) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.threshold = (_c = object.threshold) !== null && _c !== void 0 ? _c : "";
        message.signatures = ((_d = object.signatures) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map