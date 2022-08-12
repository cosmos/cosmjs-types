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
exports.RetryFailedEventResponse = exports.RetryFailedEventRequest = exports.AddChainResponse = exports.AddChainRequest = exports.SignCommandsResponse = exports.SignCommandsRequest = exports.CreateTransferOperatorshipResponse = exports.CreateTransferOperatorshipRequest = exports.CreateTransferOwnershipResponse = exports.CreateTransferOwnershipRequest = exports.CreatePendingTransfersResponse = exports.CreatePendingTransfersRequest = exports.CreateDeployTokenResponse = exports.CreateDeployTokenRequest = exports.CreateBurnTokensResponse = exports.CreateBurnTokensRequest = exports.LinkResponse = exports.LinkRequest = exports.ConfirmTransferKeyResponse = exports.ConfirmTransferKeyRequest = exports.ConfirmTokenResponse = exports.ConfirmTokenRequest = exports.ConfirmDepositResponse = exports.ConfirmDepositRequest = exports.ConfirmGatewayTxResponse = exports.ConfirmGatewayTxRequest = exports.SetGatewayResponse = exports.SetGatewayRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/evm/v1beta1/types");
const types_2 = require("../../../axelar/tss/exported/v1beta1/types");
exports.protobufPackage = "axelar.evm.v1beta1";
function createBaseSetGatewayRequest() {
    return { sender: new Uint8Array(), chain: "", address: new Uint8Array() };
}
exports.SetGatewayRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.address.length !== 0) {
            writer.uint32(26).bytes(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetGatewayRequest();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSetGatewayRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.address = (_c = object.address) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseSetGatewayResponse() {
    return {};
}
exports.SetGatewayResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetGatewayResponse();
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
        const message = createBaseSetGatewayResponse();
        return message;
    },
};
function createBaseConfirmGatewayTxRequest() {
    return { sender: new Uint8Array(), chain: "", txId: new Uint8Array() };
}
exports.ConfirmGatewayTxRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(26).bytes(message.txId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmGatewayTxRequest();
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
                    message.txId = reader.bytes();
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseConfirmGatewayTxRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.txId = (_c = object.txId) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseConfirmGatewayTxResponse() {
    return {};
}
exports.ConfirmGatewayTxResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmGatewayTxResponse();
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
        const message = createBaseConfirmGatewayTxResponse();
        return message;
    },
};
function createBaseConfirmDepositRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        txId: new Uint8Array(),
        amount: new Uint8Array(),
        burnerAddress: new Uint8Array(),
    };
}
exports.ConfirmDepositRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(26).bytes(message.txId);
        }
        if (message.amount.length !== 0) {
            writer.uint32(34).bytes(message.amount);
        }
        if (message.burnerAddress.length !== 0) {
            writer.uint32(42).bytes(message.burnerAddress);
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
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.txId = reader.bytes();
                    break;
                case 4:
                    message.amount = reader.bytes();
                    break;
                case 5:
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
            burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.amount !== undefined &&
            (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
        message.burnerAddress !== undefined &&
            (obj.burnerAddress = base64FromBytes(message.burnerAddress !== undefined ? message.burnerAddress : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseConfirmDepositRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.txId = (_c = object.txId) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.burnerAddress = (_e = object.burnerAddress) !== null && _e !== void 0 ? _e : new Uint8Array();
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
function createBaseConfirmTokenRequest() {
    return { sender: new Uint8Array(), chain: "", txId: new Uint8Array(), asset: undefined };
}
exports.ConfirmTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(26).bytes(message.txId);
        }
        if (message.asset !== undefined) {
            types_1.Asset.encode(message.asset, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmTokenRequest();
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
                    message.txId = reader.bytes();
                    break;
                case 4:
                    message.asset = types_1.Asset.decode(reader, reader.uint32());
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            asset: isSet(object.asset) ? types_1.Asset.fromJSON(object.asset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.asset !== undefined && (obj.asset = message.asset ? types_1.Asset.toJSON(message.asset) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseConfirmTokenRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.txId = (_c = object.txId) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.asset =
            object.asset !== undefined && object.asset !== null ? types_1.Asset.fromPartial(object.asset) : undefined;
        return message;
    },
};
function createBaseConfirmTokenResponse() {
    return {};
}
exports.ConfirmTokenResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmTokenResponse();
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
        const message = createBaseConfirmTokenResponse();
        return message;
    },
};
function createBaseConfirmTransferKeyRequest() {
    return { sender: new Uint8Array(), chain: "", txId: new Uint8Array() };
}
exports.ConfirmTransferKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(26).bytes(message.txId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmTransferKeyRequest();
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
                    message.txId = reader.bytes();
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseConfirmTransferKeyRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.txId = (_c = object.txId) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseConfirmTransferKeyResponse() {
    return {};
}
exports.ConfirmTransferKeyResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmTransferKeyResponse();
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
        const message = createBaseConfirmTransferKeyResponse();
        return message;
    },
};
function createBaseLinkRequest() {
    return { sender: new Uint8Array(), chain: "", recipientAddr: "", asset: "", recipientChain: "" };
}
exports.LinkRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.recipientAddr !== "") {
            writer.uint32(26).string(message.recipientAddr);
        }
        if (message.asset !== "") {
            writer.uint32(34).string(message.asset);
        }
        if (message.recipientChain !== "") {
            writer.uint32(42).string(message.recipientChain);
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
                    message.chain = reader.string();
                    break;
                case 3:
                    message.recipientAddr = reader.string();
                    break;
                case 4:
                    message.asset = reader.string();
                    break;
                case 5:
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.recipientAddr !== undefined && (obj.recipientAddr = message.recipientAddr);
        message.asset !== undefined && (obj.asset = message.asset);
        message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseLinkRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.recipientAddr = (_c = object.recipientAddr) !== null && _c !== void 0 ? _c : "";
        message.asset = (_d = object.asset) !== null && _d !== void 0 ? _d : "";
        message.recipientChain = (_e = object.recipientChain) !== null && _e !== void 0 ? _e : "";
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
function createBaseCreateBurnTokensRequest() {
    return { sender: new Uint8Array(), chain: "" };
}
exports.CreateBurnTokensRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateBurnTokensRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateBurnTokensRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreateBurnTokensResponse() {
    return {};
}
exports.CreateBurnTokensResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateBurnTokensResponse();
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
        const message = createBaseCreateBurnTokensResponse();
        return message;
    },
};
function createBaseCreateDeployTokenRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        asset: undefined,
        tokenDetails: undefined,
        address: new Uint8Array(),
        dailyMintLimit: "",
    };
}
exports.CreateDeployTokenRequest = {
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
        if (message.tokenDetails !== undefined) {
            types_1.TokenDetails.encode(message.tokenDetails, writer.uint32(34).fork()).ldelim();
        }
        if (message.address.length !== 0) {
            writer.uint32(50).bytes(message.address);
        }
        if (message.dailyMintLimit !== "") {
            writer.uint32(58).string(message.dailyMintLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateDeployTokenRequest();
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
                    message.tokenDetails = types_1.TokenDetails.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.address = reader.bytes();
                    break;
                case 7:
                    message.dailyMintLimit = reader.string();
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
            tokenDetails: isSet(object.tokenDetails) ? types_1.TokenDetails.fromJSON(object.tokenDetails) : undefined,
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            dailyMintLimit: isSet(object.dailyMintLimit) ? String(object.dailyMintLimit) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.asset !== undefined && (obj.asset = message.asset ? types_1.Asset.toJSON(message.asset) : undefined);
        message.tokenDetails !== undefined &&
            (obj.tokenDetails = message.tokenDetails ? types_1.TokenDetails.toJSON(message.tokenDetails) : undefined);
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        message.dailyMintLimit !== undefined && (obj.dailyMintLimit = message.dailyMintLimit);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCreateDeployTokenRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.asset =
            object.asset !== undefined && object.asset !== null ? types_1.Asset.fromPartial(object.asset) : undefined;
        message.tokenDetails =
            object.tokenDetails !== undefined && object.tokenDetails !== null
                ? types_1.TokenDetails.fromPartial(object.tokenDetails)
                : undefined;
        message.address = (_c = object.address) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.dailyMintLimit = (_d = object.dailyMintLimit) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseCreateDeployTokenResponse() {
    return {};
}
exports.CreateDeployTokenResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateDeployTokenResponse();
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
        const message = createBaseCreateDeployTokenResponse();
        return message;
    },
};
function createBaseCreatePendingTransfersRequest() {
    return { sender: new Uint8Array(), chain: "" };
}
exports.CreatePendingTransfersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePendingTransfersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreatePendingTransfersRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreatePendingTransfersResponse() {
    return {};
}
exports.CreatePendingTransfersResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePendingTransfersResponse();
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
        const message = createBaseCreatePendingTransfersResponse();
        return message;
    },
};
function createBaseCreateTransferOwnershipRequest() {
    return { sender: new Uint8Array(), chain: "", keyId: "" };
}
exports.CreateTransferOwnershipRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateTransferOwnershipRequest();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateTransferOwnershipRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.keyId = (_c = object.keyId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCreateTransferOwnershipResponse() {
    return {};
}
exports.CreateTransferOwnershipResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateTransferOwnershipResponse();
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
        const message = createBaseCreateTransferOwnershipResponse();
        return message;
    },
};
function createBaseCreateTransferOperatorshipRequest() {
    return { sender: new Uint8Array(), chain: "", keyId: "" };
}
exports.CreateTransferOperatorshipRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateTransferOperatorshipRequest();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateTransferOperatorshipRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.keyId = (_c = object.keyId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCreateTransferOperatorshipResponse() {
    return {};
}
exports.CreateTransferOperatorshipResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateTransferOperatorshipResponse();
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
        const message = createBaseCreateTransferOperatorshipResponse();
        return message;
    },
};
function createBaseSignCommandsRequest() {
    return { sender: new Uint8Array(), chain: "" };
}
exports.SignCommandsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignCommandsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSignCommandsRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseSignCommandsResponse() {
    return { batchedCommandsId: new Uint8Array(), commandCount: 0 };
}
exports.SignCommandsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.batchedCommandsId.length !== 0) {
            writer.uint32(10).bytes(message.batchedCommandsId);
        }
        if (message.commandCount !== 0) {
            writer.uint32(16).uint32(message.commandCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignCommandsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchedCommandsId = reader.bytes();
                    break;
                case 2:
                    message.commandCount = reader.uint32();
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
            batchedCommandsId: isSet(object.batchedCommandsId)
                ? bytesFromBase64(object.batchedCommandsId)
                : new Uint8Array(),
            commandCount: isSet(object.commandCount) ? Number(object.commandCount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.batchedCommandsId !== undefined &&
            (obj.batchedCommandsId = base64FromBytes(message.batchedCommandsId !== undefined ? message.batchedCommandsId : new Uint8Array()));
        message.commandCount !== undefined && (obj.commandCount = Math.round(message.commandCount));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSignCommandsResponse();
        message.batchedCommandsId = (_a = object.batchedCommandsId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.commandCount = (_b = object.commandCount) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseAddChainRequest() {
    return { sender: new Uint8Array(), name: "", keyType: 0, params: new Uint8Array() };
}
exports.AddChainRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.keyType !== 0) {
            writer.uint32(32).int32(message.keyType);
        }
        if (message.params.length !== 0) {
            writer.uint32(42).bytes(message.params);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddChainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 4:
                    message.keyType = reader.int32();
                    break;
                case 5:
                    message.params = reader.bytes();
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
            name: isSet(object.name) ? String(object.name) : "",
            keyType: isSet(object.keyType) ? (0, types_2.keyTypeFromJSON)(object.keyType) : 0,
            params: isSet(object.params) ? bytesFromBase64(object.params) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.name !== undefined && (obj.name = message.name);
        message.keyType !== undefined && (obj.keyType = (0, types_2.keyTypeToJSON)(message.keyType));
        message.params !== undefined &&
            (obj.params = base64FromBytes(message.params !== undefined ? message.params : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseAddChainRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.keyType = (_c = object.keyType) !== null && _c !== void 0 ? _c : 0;
        message.params = (_d = object.params) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseAddChainResponse() {
    return {};
}
exports.AddChainResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddChainResponse();
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
        const message = createBaseAddChainResponse();
        return message;
    },
};
function createBaseRetryFailedEventRequest() {
    return { sender: new Uint8Array(), chain: "", eventId: "" };
}
exports.RetryFailedEventRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(26).string(message.eventId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRetryFailedEventRequest();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.eventId !== undefined && (obj.eventId = message.eventId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRetryFailedEventRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.eventId = (_c = object.eventId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRetryFailedEventResponse() {
    return {};
}
exports.RetryFailedEventResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRetryFailedEventResponse();
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
        const message = createBaseRetryFailedEventResponse();
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