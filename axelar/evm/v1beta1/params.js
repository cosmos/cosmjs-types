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
exports.PendingChain = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const threshold_1 = require("../../../axelar/utils/v1beta1/threshold");
const types_1 = require("../../../axelar/nexus/exported/v1beta1/types");
const types_2 = require("../../../axelar/evm/v1beta1/types");
exports.protobufPackage = "axelar.evm.v1beta1";
function createBaseParams() {
    return {
        chain: "",
        confirmationHeight: long_1.default.UZERO,
        network: "",
        tokenCode: new Uint8Array(),
        burnable: new Uint8Array(),
        revoteLockingPeriod: long_1.default.ZERO,
        networks: [],
        votingThreshold: undefined,
        minVoterCount: long_1.default.ZERO,
        commandsGasLimit: 0,
        votingGracePeriod: long_1.default.ZERO,
        endBlockerLimit: long_1.default.ZERO,
        transferLimit: long_1.default.UZERO,
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (!message.confirmationHeight.isZero()) {
            writer.uint32(16).uint64(message.confirmationHeight);
        }
        if (message.network !== "") {
            writer.uint32(26).string(message.network);
        }
        if (message.tokenCode.length !== 0) {
            writer.uint32(42).bytes(message.tokenCode);
        }
        if (message.burnable.length !== 0) {
            writer.uint32(50).bytes(message.burnable);
        }
        if (!message.revoteLockingPeriod.isZero()) {
            writer.uint32(56).int64(message.revoteLockingPeriod);
        }
        for (const v of message.networks) {
            types_2.NetworkInfo.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.votingThreshold !== undefined) {
            threshold_1.Threshold.encode(message.votingThreshold, writer.uint32(74).fork()).ldelim();
        }
        if (!message.minVoterCount.isZero()) {
            writer.uint32(80).int64(message.minVoterCount);
        }
        if (message.commandsGasLimit !== 0) {
            writer.uint32(88).uint32(message.commandsGasLimit);
        }
        if (!message.votingGracePeriod.isZero()) {
            writer.uint32(104).int64(message.votingGracePeriod);
        }
        if (!message.endBlockerLimit.isZero()) {
            writer.uint32(112).int64(message.endBlockerLimit);
        }
        if (!message.transferLimit.isZero()) {
            writer.uint32(120).uint64(message.transferLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.confirmationHeight = reader.uint64();
                    break;
                case 3:
                    message.network = reader.string();
                    break;
                case 5:
                    message.tokenCode = reader.bytes();
                    break;
                case 6:
                    message.burnable = reader.bytes();
                    break;
                case 7:
                    message.revoteLockingPeriod = reader.int64();
                    break;
                case 8:
                    message.networks.push(types_2.NetworkInfo.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.votingThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.minVoterCount = reader.int64();
                    break;
                case 11:
                    message.commandsGasLimit = reader.uint32();
                    break;
                case 13:
                    message.votingGracePeriod = reader.int64();
                    break;
                case 14:
                    message.endBlockerLimit = reader.int64();
                    break;
                case 15:
                    message.transferLimit = reader.uint64();
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
            confirmationHeight: isSet(object.confirmationHeight)
                ? long_1.default.fromValue(object.confirmationHeight)
                : long_1.default.UZERO,
            network: isSet(object.network) ? String(object.network) : "",
            tokenCode: isSet(object.tokenCode) ? bytesFromBase64(object.tokenCode) : new Uint8Array(),
            burnable: isSet(object.burnable) ? bytesFromBase64(object.burnable) : new Uint8Array(),
            revoteLockingPeriod: isSet(object.revoteLockingPeriod)
                ? long_1.default.fromValue(object.revoteLockingPeriod)
                : long_1.default.ZERO,
            networks: Array.isArray(object === null || object === void 0 ? void 0 : object.networks)
                ? object.networks.map((e) => types_2.NetworkInfo.fromJSON(e))
                : [],
            votingThreshold: isSet(object.votingThreshold) ? threshold_1.Threshold.fromJSON(object.votingThreshold) : undefined,
            minVoterCount: isSet(object.minVoterCount) ? long_1.default.fromValue(object.minVoterCount) : long_1.default.ZERO,
            commandsGasLimit: isSet(object.commandsGasLimit) ? Number(object.commandsGasLimit) : 0,
            votingGracePeriod: isSet(object.votingGracePeriod)
                ? long_1.default.fromValue(object.votingGracePeriod)
                : long_1.default.ZERO,
            endBlockerLimit: isSet(object.endBlockerLimit) ? long_1.default.fromValue(object.endBlockerLimit) : long_1.default.ZERO,
            transferLimit: isSet(object.transferLimit) ? long_1.default.fromValue(object.transferLimit) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.confirmationHeight !== undefined &&
            (obj.confirmationHeight = (message.confirmationHeight || long_1.default.UZERO).toString());
        message.network !== undefined && (obj.network = message.network);
        message.tokenCode !== undefined &&
            (obj.tokenCode = base64FromBytes(message.tokenCode !== undefined ? message.tokenCode : new Uint8Array()));
        message.burnable !== undefined &&
            (obj.burnable = base64FromBytes(message.burnable !== undefined ? message.burnable : new Uint8Array()));
        message.revoteLockingPeriod !== undefined &&
            (obj.revoteLockingPeriod = (message.revoteLockingPeriod || long_1.default.ZERO).toString());
        if (message.networks) {
            obj.networks = message.networks.map((e) => (e ? types_2.NetworkInfo.toJSON(e) : undefined));
        }
        else {
            obj.networks = [];
        }
        message.votingThreshold !== undefined &&
            (obj.votingThreshold = message.votingThreshold ? threshold_1.Threshold.toJSON(message.votingThreshold) : undefined);
        message.minVoterCount !== undefined &&
            (obj.minVoterCount = (message.minVoterCount || long_1.default.ZERO).toString());
        message.commandsGasLimit !== undefined && (obj.commandsGasLimit = Math.round(message.commandsGasLimit));
        message.votingGracePeriod !== undefined &&
            (obj.votingGracePeriod = (message.votingGracePeriod || long_1.default.ZERO).toString());
        message.endBlockerLimit !== undefined &&
            (obj.endBlockerLimit = (message.endBlockerLimit || long_1.default.ZERO).toString());
        message.transferLimit !== undefined &&
            (obj.transferLimit = (message.transferLimit || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseParams();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.confirmationHeight =
            object.confirmationHeight !== undefined && object.confirmationHeight !== null
                ? long_1.default.fromValue(object.confirmationHeight)
                : long_1.default.UZERO;
        message.network = (_b = object.network) !== null && _b !== void 0 ? _b : "";
        message.tokenCode = (_c = object.tokenCode) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.burnable = (_d = object.burnable) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.revoteLockingPeriod =
            object.revoteLockingPeriod !== undefined && object.revoteLockingPeriod !== null
                ? long_1.default.fromValue(object.revoteLockingPeriod)
                : long_1.default.ZERO;
        message.networks = ((_e = object.networks) === null || _e === void 0 ? void 0 : _e.map((e) => types_2.NetworkInfo.fromPartial(e))) || [];
        message.votingThreshold =
            object.votingThreshold !== undefined && object.votingThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.votingThreshold)
                : undefined;
        message.minVoterCount =
            object.minVoterCount !== undefined && object.minVoterCount !== null
                ? long_1.default.fromValue(object.minVoterCount)
                : long_1.default.ZERO;
        message.commandsGasLimit = (_f = object.commandsGasLimit) !== null && _f !== void 0 ? _f : 0;
        message.votingGracePeriod =
            object.votingGracePeriod !== undefined && object.votingGracePeriod !== null
                ? long_1.default.fromValue(object.votingGracePeriod)
                : long_1.default.ZERO;
        message.endBlockerLimit =
            object.endBlockerLimit !== undefined && object.endBlockerLimit !== null
                ? long_1.default.fromValue(object.endBlockerLimit)
                : long_1.default.ZERO;
        message.transferLimit =
            object.transferLimit !== undefined && object.transferLimit !== null
                ? long_1.default.fromValue(object.transferLimit)
                : long_1.default.UZERO;
        return message;
    },
};
function createBasePendingChain() {
    return { params: undefined, chain: undefined };
}
exports.PendingChain = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain !== undefined) {
            types_1.Chain.encode(message.chain, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain = types_1.Chain.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? exports.Params.fromJSON(object.params) : undefined,
            chain: isSet(object.chain) ? types_1.Chain.fromJSON(object.chain) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        message.chain !== undefined && (obj.chain = message.chain ? types_1.Chain.toJSON(message.chain) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePendingChain();
        message.params =
            object.params !== undefined && object.params !== null ? exports.Params.fromPartial(object.params) : undefined;
        message.chain =
            object.chain !== undefined && object.chain !== null ? types_1.Chain.fromPartial(object.chain) : undefined;
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
//# sourceMappingURL=params.js.map