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
exports.RetryIBCTransferResponse = exports.RetryIBCTransferRequest = exports.RegisterFeeCollectorResponse = exports.RegisterFeeCollectorRequest = exports.RouteIBCTransfersResponse = exports.RouteIBCTransfersRequest = exports.RegisterAssetResponse = exports.RegisterAssetRequest = exports.AddCosmosBasedChainResponse = exports.AddCosmosBasedChainRequest = exports.RegisterIBCPathResponse = exports.RegisterIBCPathRequest = exports.ExecutePendingTransfersResponse = exports.ExecutePendingTransfersRequest = exports.ConfirmDepositResponse = exports.ConfirmDepositRequest = exports.LinkResponse = exports.LinkRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/nexus/exported/v1beta1/types");
const duration_1 = require("../../../google/protobuf/duration");
exports.protobufPackage = "axelar.axelarnet.v1beta1";
function createBaseLinkRequest() {
    return { sender: new Uint8Array(), recipientAddr: "", recipientChain: "", asset: "" };
}
exports.LinkRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.recipientAddr !== "") {
            writer.uint32(18).string(message.recipientAddr);
        }
        if (message.recipientChain !== "") {
            writer.uint32(26).string(message.recipientChain);
        }
        if (message.asset !== "") {
            writer.uint32(34).string(message.asset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLinkRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.recipientAddr = reader.string();
                    break;
                case 3:
                    message.recipientChain = reader.string();
                    break;
                case 4:
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.recipientAddr !== undefined && (obj.recipientAddr = message.recipientAddr);
        message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
        message.asset !== undefined && (obj.asset = message.asset);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLinkRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.recipientAddr = (_b = object.recipientAddr) !== null && _b !== void 0 ? _b : "";
        message.recipientChain = (_c = object.recipientChain) !== null && _c !== void 0 ? _c : "";
        message.asset = (_d = object.asset) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseLinkResponse() {
    return { depositAddr: "" };
}
exports.LinkResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositAddr !== "") {
            writer.uint32(10).string(message.depositAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLinkResponse();
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
        const message = createBaseLinkResponse();
        message.depositAddr = (_a = object.depositAddr) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseConfirmDepositRequest() {
    return { sender: new Uint8Array(), depositAddress: new Uint8Array(), denom: "" };
}
exports.ConfirmDepositRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.depositAddress.length !== 0) {
            writer.uint32(34).bytes(message.depositAddress);
        }
        if (message.denom !== "") {
            writer.uint32(42).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 4:
                    message.depositAddress = reader.bytes();
                    break;
                case 5:
                    message.denom = reader.string();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            depositAddress: isSet(object.depositAddress)
                ? bytesFromBase64(object.depositAddress)
                : new Uint8Array(),
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.depositAddress !== undefined &&
            (obj.depositAddress = base64FromBytes(message.depositAddress !== undefined ? message.depositAddress : new Uint8Array()));
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseConfirmDepositRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.depositAddress = (_b = object.depositAddress) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseConfirmDepositResponse() {
    return {};
}
exports.ConfirmDepositResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseConfirmDepositResponse();
        return message;
    },
};
function createBaseExecutePendingTransfersRequest() {
    return { sender: new Uint8Array() };
}
exports.ExecutePendingTransfersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutePendingTransfersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseExecutePendingTransfersRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseExecutePendingTransfersResponse() {
    return {};
}
exports.ExecutePendingTransfersResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutePendingTransfersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseExecutePendingTransfersResponse();
        return message;
    },
};
function createBaseRegisterIBCPathRequest() {
    return { sender: new Uint8Array(), chain: "", path: "" };
}
exports.RegisterIBCPathRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.path !== "") {
            writer.uint32(26).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterIBCPathRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.path = reader.string();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            path: isSet(object.path) ? String(object.path) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisterIBCPathRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.path = (_c = object.path) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegisterIBCPathResponse() {
    return {};
}
exports.RegisterIBCPathResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterIBCPathResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRegisterIBCPathResponse();
        return message;
    },
};
function createBaseAddCosmosBasedChainRequest() {
    return {
        sender: new Uint8Array(),
        chain: undefined,
        addrPrefix: "",
        nativeAssets: [],
        cosmosChain: "",
        ibcPath: "",
    };
}
exports.AddCosmosBasedChainRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== undefined) {
            types_1.Chain.encode(message.chain, writer.uint32(18).fork()).ldelim();
        }
        if (message.addrPrefix !== "") {
            writer.uint32(26).string(message.addrPrefix);
        }
        for (const v of message.nativeAssets) {
            types_1.Asset.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.cosmosChain !== "") {
            writer.uint32(50).string(message.cosmosChain);
        }
        if (message.ibcPath !== "") {
            writer.uint32(58).string(message.ibcPath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddCosmosBasedChainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.chain = types_1.Chain.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.addrPrefix = reader.string();
                    break;
                case 5:
                    message.nativeAssets.push(types_1.Asset.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.cosmosChain = reader.string();
                    break;
                case 7:
                    message.ibcPath = reader.string();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? types_1.Chain.fromJSON(object.chain) : undefined,
            addrPrefix: isSet(object.addrPrefix) ? String(object.addrPrefix) : "",
            nativeAssets: Array.isArray(object === null || object === void 0 ? void 0 : object.nativeAssets)
                ? object.nativeAssets.map((e) => types_1.Asset.fromJSON(e))
                : [],
            cosmosChain: isSet(object.cosmosChain) ? String(object.cosmosChain) : "",
            ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain ? types_1.Chain.toJSON(message.chain) : undefined);
        message.addrPrefix !== undefined && (obj.addrPrefix = message.addrPrefix);
        if (message.nativeAssets) {
            obj.nativeAssets = message.nativeAssets.map((e) => (e ? types_1.Asset.toJSON(e) : undefined));
        }
        else {
            obj.nativeAssets = [];
        }
        message.cosmosChain !== undefined && (obj.cosmosChain = message.cosmosChain);
        message.ibcPath !== undefined && (obj.ibcPath = message.ibcPath);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseAddCosmosBasedChainRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain =
            object.chain !== undefined && object.chain !== null ? types_1.Chain.fromPartial(object.chain) : undefined;
        message.addrPrefix = (_b = object.addrPrefix) !== null && _b !== void 0 ? _b : "";
        message.nativeAssets = ((_c = object.nativeAssets) === null || _c === void 0 ? void 0 : _c.map((e) => types_1.Asset.fromPartial(e))) || [];
        message.cosmosChain = (_d = object.cosmosChain) !== null && _d !== void 0 ? _d : "";
        message.ibcPath = (_e = object.ibcPath) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseAddCosmosBasedChainResponse() {
    return {};
}
exports.AddCosmosBasedChainResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddCosmosBasedChainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseAddCosmosBasedChainResponse();
        return message;
    },
};
function createBaseRegisterAssetRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        asset: undefined,
        limit: new Uint8Array(),
        window: undefined,
    };
}
exports.RegisterAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.asset !== undefined) {
            types_1.Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (message.limit.length !== 0) {
            writer.uint32(34).bytes(message.limit);
        }
        if (message.window !== undefined) {
            duration_1.Duration.encode(message.window, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.asset = types_1.Asset.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.limit = reader.bytes();
                    break;
                case 5:
                    message.window = duration_1.Duration.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            asset: isSet(object.asset) ? types_1.Asset.fromJSON(object.asset) : undefined,
            limit: isSet(object.limit) ? bytesFromBase64(object.limit) : new Uint8Array(),
            window: isSet(object.window) ? duration_1.Duration.fromJSON(object.window) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.asset !== undefined && (obj.asset = message.asset ? types_1.Asset.toJSON(message.asset) : undefined);
        message.limit !== undefined &&
            (obj.limit = base64FromBytes(message.limit !== undefined ? message.limit : new Uint8Array()));
        message.window !== undefined &&
            (obj.window = message.window ? duration_1.Duration.toJSON(message.window) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisterAssetRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.asset =
            object.asset !== undefined && object.asset !== null ? types_1.Asset.fromPartial(object.asset) : undefined;
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.window =
            object.window !== undefined && object.window !== null ? duration_1.Duration.fromPartial(object.window) : undefined;
        return message;
    },
};
function createBaseRegisterAssetResponse() {
    return {};
}
exports.RegisterAssetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRegisterAssetResponse();
        return message;
    },
};
function createBaseRouteIBCTransfersRequest() {
    return { sender: new Uint8Array() };
}
exports.RouteIBCTransfersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRouteIBCTransfersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRouteIBCTransfersRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseRouteIBCTransfersResponse() {
    return {};
}
exports.RouteIBCTransfersResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRouteIBCTransfersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRouteIBCTransfersResponse();
        return message;
    },
};
function createBaseRegisterFeeCollectorRequest() {
    return { sender: new Uint8Array(), feeCollector: new Uint8Array() };
}
exports.RegisterFeeCollectorRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.feeCollector.length !== 0) {
            writer.uint32(18).bytes(message.feeCollector);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterFeeCollectorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.feeCollector = reader.bytes();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            feeCollector: isSet(object.feeCollector) ? bytesFromBase64(object.feeCollector) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.feeCollector !== undefined &&
            (obj.feeCollector = base64FromBytes(message.feeCollector !== undefined ? message.feeCollector : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRegisterFeeCollectorRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.feeCollector = (_b = object.feeCollector) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseRegisterFeeCollectorResponse() {
    return {};
}
exports.RegisterFeeCollectorResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterFeeCollectorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRegisterFeeCollectorResponse();
        return message;
    },
};
function createBaseRetryIBCTransferRequest() {
    return { sender: new Uint8Array(), chain: "", id: long_1.default.UZERO };
}
exports.RetryIBCTransferRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (!message.id.isZero()) {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRetryIBCTransferRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.id = reader.uint64();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRetryIBCTransferRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.id = object.id !== undefined && object.id !== null ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        return message;
    },
};
function createBaseRetryIBCTransferResponse() {
    return {};
}
exports.RetryIBCTransferResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRetryIBCTransferResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRetryIBCTransferResponse();
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
//# sourceMappingURL=tx.js.map