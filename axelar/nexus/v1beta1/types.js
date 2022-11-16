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
exports.TransferEpoch = exports.RateLimit = exports.LinkedAddresses = exports.ChainState = exports.MaintainerState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const bitmap_1 = require("../../../axelar/utils/v1beta1/bitmap");
const types_1 = require("../../../axelar/nexus/exported/v1beta1/types");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const duration_1 = require("../../../google/protobuf/duration");
exports.protobufPackage = "axelar.nexus.v1beta1";
function createBaseMaintainerState() {
    return { address: new Uint8Array(), missingVotes: undefined, incorrectVotes: undefined, chain: "" };
}
exports.MaintainerState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.missingVotes !== undefined) {
            bitmap_1.Bitmap.encode(message.missingVotes, writer.uint32(18).fork()).ldelim();
        }
        if (message.incorrectVotes !== undefined) {
            bitmap_1.Bitmap.encode(message.incorrectVotes, writer.uint32(26).fork()).ldelim();
        }
        if (message.chain !== "") {
            writer.uint32(34).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaintainerState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.missingVotes = bitmap_1.Bitmap.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.incorrectVotes = bitmap_1.Bitmap.decode(reader, reader.uint32());
                    break;
                case 4:
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
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            missingVotes: isSet(object.missingVotes) ? bitmap_1.Bitmap.fromJSON(object.missingVotes) : undefined,
            incorrectVotes: isSet(object.incorrectVotes) ? bitmap_1.Bitmap.fromJSON(object.incorrectVotes) : undefined,
            chain: isSet(object.chain) ? String(object.chain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        message.missingVotes !== undefined &&
            (obj.missingVotes = message.missingVotes ? bitmap_1.Bitmap.toJSON(message.missingVotes) : undefined);
        message.incorrectVotes !== undefined &&
            (obj.incorrectVotes = message.incorrectVotes ? bitmap_1.Bitmap.toJSON(message.incorrectVotes) : undefined);
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMaintainerState();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.missingVotes =
            object.missingVotes !== undefined && object.missingVotes !== null
                ? bitmap_1.Bitmap.fromPartial(object.missingVotes)
                : undefined;
        message.incorrectVotes =
            object.incorrectVotes !== undefined && object.incorrectVotes !== null
                ? bitmap_1.Bitmap.fromPartial(object.incorrectVotes)
                : undefined;
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseChainState() {
    return { chain: undefined, activated: false, assets: [], maintainerStates: [] };
}
exports.ChainState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== undefined) {
            types_1.Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        if (message.activated === true) {
            writer.uint32(24).bool(message.activated);
        }
        for (const v of message.assets) {
            types_1.Asset.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.maintainerStates) {
            exports.MaintainerState.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = types_1.Chain.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.activated = reader.bool();
                    break;
                case 5:
                    message.assets.push(types_1.Asset.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.maintainerStates.push(exports.MaintainerState.decode(reader, reader.uint32()));
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
            chain: isSet(object.chain) ? types_1.Chain.fromJSON(object.chain) : undefined,
            activated: isSet(object.activated) ? Boolean(object.activated) : false,
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets) ? object.assets.map((e) => types_1.Asset.fromJSON(e)) : [],
            maintainerStates: Array.isArray(object === null || object === void 0 ? void 0 : object.maintainerStates)
                ? object.maintainerStates.map((e) => exports.MaintainerState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain ? types_1.Chain.toJSON(message.chain) : undefined);
        message.activated !== undefined && (obj.activated = message.activated);
        if (message.assets) {
            obj.assets = message.assets.map((e) => (e ? types_1.Asset.toJSON(e) : undefined));
        }
        else {
            obj.assets = [];
        }
        if (message.maintainerStates) {
            obj.maintainerStates = message.maintainerStates.map((e) => (e ? exports.MaintainerState.toJSON(e) : undefined));
        }
        else {
            obj.maintainerStates = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseChainState();
        message.chain =
            object.chain !== undefined && object.chain !== null ? types_1.Chain.fromPartial(object.chain) : undefined;
        message.activated = (_a = object.activated) !== null && _a !== void 0 ? _a : false;
        message.assets = ((_b = object.assets) === null || _b === void 0 ? void 0 : _b.map((e) => types_1.Asset.fromPartial(e))) || [];
        message.maintainerStates = ((_c = object.maintainerStates) === null || _c === void 0 ? void 0 : _c.map((e) => exports.MaintainerState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseLinkedAddresses() {
    return { depositAddress: undefined, recipientAddress: undefined };
}
exports.LinkedAddresses = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositAddress !== undefined) {
            types_1.CrossChainAddress.encode(message.depositAddress, writer.uint32(10).fork()).ldelim();
        }
        if (message.recipientAddress !== undefined) {
            types_1.CrossChainAddress.encode(message.recipientAddress, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLinkedAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositAddress = types_1.CrossChainAddress.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.recipientAddress = types_1.CrossChainAddress.decode(reader, reader.uint32());
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
            depositAddress: isSet(object.depositAddress)
                ? types_1.CrossChainAddress.fromJSON(object.depositAddress)
                : undefined,
            recipientAddress: isSet(object.recipientAddress)
                ? types_1.CrossChainAddress.fromJSON(object.recipientAddress)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositAddress !== undefined &&
            (obj.depositAddress = message.depositAddress
                ? types_1.CrossChainAddress.toJSON(message.depositAddress)
                : undefined);
        message.recipientAddress !== undefined &&
            (obj.recipientAddress = message.recipientAddress
                ? types_1.CrossChainAddress.toJSON(message.recipientAddress)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLinkedAddresses();
        message.depositAddress =
            object.depositAddress !== undefined && object.depositAddress !== null
                ? types_1.CrossChainAddress.fromPartial(object.depositAddress)
                : undefined;
        message.recipientAddress =
            object.recipientAddress !== undefined && object.recipientAddress !== null
                ? types_1.CrossChainAddress.fromPartial(object.recipientAddress)
                : undefined;
        return message;
    },
};
function createBaseRateLimit() {
    return { chain: "", limit: undefined, window: undefined };
}
exports.RateLimit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.limit !== undefined) {
            coin_1.Coin.encode(message.limit, writer.uint32(18).fork()).ldelim();
        }
        if (message.window !== undefined) {
            duration_1.Duration.encode(message.window, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRateLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.limit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            limit: isSet(object.limit) ? coin_1.Coin.fromJSON(object.limit) : undefined,
            window: isSet(object.window) ? duration_1.Duration.fromJSON(object.window) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.limit !== undefined && (obj.limit = message.limit ? coin_1.Coin.toJSON(message.limit) : undefined);
        message.window !== undefined &&
            (obj.window = message.window ? duration_1.Duration.toJSON(message.window) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRateLimit();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.limit =
            object.limit !== undefined && object.limit !== null ? coin_1.Coin.fromPartial(object.limit) : undefined;
        message.window =
            object.window !== undefined && object.window !== null ? duration_1.Duration.fromPartial(object.window) : undefined;
        return message;
    },
};
function createBaseTransferEpoch() {
    return { chain: "", amount: undefined, epoch: long_1.default.UZERO, direction: 0 };
}
exports.TransferEpoch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (!message.epoch.isZero()) {
            writer.uint32(24).uint64(message.epoch);
        }
        if (message.direction !== 0) {
            writer.uint32(32).int32(message.direction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferEpoch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.epoch = reader.uint64();
                    break;
                case 4:
                    message.direction = reader.int32();
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
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            epoch: isSet(object.epoch) ? long_1.default.fromValue(object.epoch) : long_1.default.UZERO,
            direction: isSet(object.direction) ? (0, types_1.transferDirectionFromJSON)(object.direction) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.epoch !== undefined && (obj.epoch = (message.epoch || long_1.default.UZERO).toString());
        message.direction !== undefined && (obj.direction = (0, types_1.transferDirectionToJSON)(message.direction));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTransferEpoch();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.amount =
            object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.epoch =
            object.epoch !== undefined && object.epoch !== null ? long_1.default.fromValue(object.epoch) : long_1.default.UZERO;
        message.direction = (_b = object.direction) !== null && _b !== void 0 ? _b : 0;
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