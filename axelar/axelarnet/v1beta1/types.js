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
exports.Asset = exports.CosmosChain = exports.IBCTransfer = exports.iBCTransfer_StatusToJSON = exports.iBCTransfer_StatusFromJSON = exports.IBCTransfer_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "axelar.axelarnet.v1beta1";
var IBCTransfer_Status;
(function (IBCTransfer_Status) {
    IBCTransfer_Status[IBCTransfer_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    IBCTransfer_Status[IBCTransfer_Status["STATUS_PENDING"] = 1] = "STATUS_PENDING";
    IBCTransfer_Status[IBCTransfer_Status["STATUS_COMPLETED"] = 2] = "STATUS_COMPLETED";
    IBCTransfer_Status[IBCTransfer_Status["STATUS_FAILED"] = 3] = "STATUS_FAILED";
    IBCTransfer_Status[IBCTransfer_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IBCTransfer_Status = exports.IBCTransfer_Status || (exports.IBCTransfer_Status = {}));
function iBCTransfer_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return IBCTransfer_Status.STATUS_UNSPECIFIED;
        case 1:
        case "STATUS_PENDING":
            return IBCTransfer_Status.STATUS_PENDING;
        case 2:
        case "STATUS_COMPLETED":
            return IBCTransfer_Status.STATUS_COMPLETED;
        case 3:
        case "STATUS_FAILED":
            return IBCTransfer_Status.STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IBCTransfer_Status.UNRECOGNIZED;
    }
}
exports.iBCTransfer_StatusFromJSON = iBCTransfer_StatusFromJSON;
function iBCTransfer_StatusToJSON(object) {
    switch (object) {
        case IBCTransfer_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case IBCTransfer_Status.STATUS_PENDING:
            return "STATUS_PENDING";
        case IBCTransfer_Status.STATUS_COMPLETED:
            return "STATUS_COMPLETED";
        case IBCTransfer_Status.STATUS_FAILED:
            return "STATUS_FAILED";
        case IBCTransfer_Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.iBCTransfer_StatusToJSON = iBCTransfer_StatusToJSON;
function createBaseIBCTransfer() {
    return {
        sender: new Uint8Array(),
        receiver: "",
        token: undefined,
        portId: "",
        channelId: "",
        sequence: long_1.default.UZERO,
        id: long_1.default.UZERO,
        status: 0,
    };
}
exports.IBCTransfer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.token !== undefined) {
            coin_1.Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(34).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(42).string(message.channelId);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(48).uint64(message.sequence);
        }
        if (!message.id.isZero()) {
            writer.uint32(56).uint64(message.id);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.token = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.portId = reader.string();
                    break;
                case 5:
                    message.channelId = reader.string();
                    break;
                case 6:
                    message.sequence = reader.uint64();
                    break;
                case 7:
                    message.id = reader.uint64();
                    break;
                case 8:
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            token: isSet(object.token) ? coin_1.Coin.fromJSON(object.token) : undefined,
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            status: isSet(object.status) ? iBCTransfer_StatusFromJSON(object.status) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.token !== undefined && (obj.token = message.token ? coin_1.Coin.toJSON(message.token) : undefined);
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.status !== undefined && (obj.status = iBCTransfer_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseIBCTransfer();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.receiver = (_b = object.receiver) !== null && _b !== void 0 ? _b : "";
        message.token =
            object.token !== undefined && object.token !== null ? coin_1.Coin.fromPartial(object.token) : undefined;
        message.portId = (_c = object.portId) !== null && _c !== void 0 ? _c : "";
        message.channelId = (_d = object.channelId) !== null && _d !== void 0 ? _d : "";
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
        message.id = object.id !== undefined && object.id !== null ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseCosmosChain() {
    return { name: "", ibcPath: "", assets: [], addrPrefix: "" };
}
exports.CosmosChain = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.ibcPath !== "") {
            writer.uint32(18).string(message.ibcPath);
        }
        for (const v of message.assets) {
            exports.Asset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.addrPrefix !== "") {
            writer.uint32(34).string(message.addrPrefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCosmosChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.ibcPath = reader.string();
                    break;
                case 3:
                    message.assets.push(exports.Asset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.addrPrefix = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : "",
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets) ? object.assets.map((e) => exports.Asset.fromJSON(e)) : [],
            addrPrefix: isSet(object.addrPrefix) ? String(object.addrPrefix) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.ibcPath !== undefined && (obj.ibcPath = message.ibcPath);
        if (message.assets) {
            obj.assets = message.assets.map((e) => (e ? exports.Asset.toJSON(e) : undefined));
        }
        else {
            obj.assets = [];
        }
        message.addrPrefix !== undefined && (obj.addrPrefix = message.addrPrefix);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCosmosChain();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.ibcPath = (_b = object.ibcPath) !== null && _b !== void 0 ? _b : "";
        message.assets = ((_c = object.assets) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Asset.fromPartial(e))) || [];
        message.addrPrefix = (_d = object.addrPrefix) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseAsset() {
    return { denom: "", minAmount: new Uint8Array() };
}
exports.Asset = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.minAmount.length !== 0) {
            writer.uint32(18).bytes(message.minAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.minAmount = reader.bytes();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            minAmount: isSet(object.minAmount) ? bytesFromBase64(object.minAmount) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.minAmount !== undefined &&
            (obj.minAmount = base64FromBytes(message.minAmount !== undefined ? message.minAmount : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAsset();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.minAmount = (_b = object.minAmount) !== null && _b !== void 0 ? _b : new Uint8Array();
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
//# sourceMappingURL=types.js.map