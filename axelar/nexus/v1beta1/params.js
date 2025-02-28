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
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const threshold_1 = require("../../../axelar/utils/v1beta1/threshold");
exports.protobufPackage = "axelar.nexus.v1beta1";
function createBaseParams() {
    return {
        chainActivationThreshold: undefined,
        chainMaintainerMissingVoteThreshold: undefined,
        chainMaintainerIncorrectVoteThreshold: undefined,
        chainMaintainerCheckWindow: 0,
        gateway: new Uint8Array(),
        endBlockerLimit: long_1.default.UZERO,
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainActivationThreshold !== undefined) {
            threshold_1.Threshold.encode(message.chainActivationThreshold, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainMaintainerMissingVoteThreshold !== undefined) {
            threshold_1.Threshold.encode(message.chainMaintainerMissingVoteThreshold, writer.uint32(18).fork()).ldelim();
        }
        if (message.chainMaintainerIncorrectVoteThreshold !== undefined) {
            threshold_1.Threshold.encode(message.chainMaintainerIncorrectVoteThreshold, writer.uint32(26).fork()).ldelim();
        }
        if (message.chainMaintainerCheckWindow !== 0) {
            writer.uint32(32).int32(message.chainMaintainerCheckWindow);
        }
        if (message.gateway.length !== 0) {
            writer.uint32(42).bytes(message.gateway);
        }
        if (!message.endBlockerLimit.isZero()) {
            writer.uint32(48).uint64(message.endBlockerLimit);
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
                    message.chainActivationThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainMaintainerMissingVoteThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chainMaintainerIncorrectVoteThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.chainMaintainerCheckWindow = reader.int32();
                    break;
                case 5:
                    message.gateway = reader.bytes();
                    break;
                case 6:
                    message.endBlockerLimit = reader.uint64();
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
            chainActivationThreshold: isSet(object.chainActivationThreshold)
                ? threshold_1.Threshold.fromJSON(object.chainActivationThreshold)
                : undefined,
            chainMaintainerMissingVoteThreshold: isSet(object.chainMaintainerMissingVoteThreshold)
                ? threshold_1.Threshold.fromJSON(object.chainMaintainerMissingVoteThreshold)
                : undefined,
            chainMaintainerIncorrectVoteThreshold: isSet(object.chainMaintainerIncorrectVoteThreshold)
                ? threshold_1.Threshold.fromJSON(object.chainMaintainerIncorrectVoteThreshold)
                : undefined,
            chainMaintainerCheckWindow: isSet(object.chainMaintainerCheckWindow)
                ? Number(object.chainMaintainerCheckWindow)
                : 0,
            gateway: isSet(object.gateway) ? bytesFromBase64(object.gateway) : new Uint8Array(),
            endBlockerLimit: isSet(object.endBlockerLimit) ? long_1.default.fromValue(object.endBlockerLimit) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainActivationThreshold !== undefined &&
            (obj.chainActivationThreshold = message.chainActivationThreshold
                ? threshold_1.Threshold.toJSON(message.chainActivationThreshold)
                : undefined);
        message.chainMaintainerMissingVoteThreshold !== undefined &&
            (obj.chainMaintainerMissingVoteThreshold = message.chainMaintainerMissingVoteThreshold
                ? threshold_1.Threshold.toJSON(message.chainMaintainerMissingVoteThreshold)
                : undefined);
        message.chainMaintainerIncorrectVoteThreshold !== undefined &&
            (obj.chainMaintainerIncorrectVoteThreshold = message.chainMaintainerIncorrectVoteThreshold
                ? threshold_1.Threshold.toJSON(message.chainMaintainerIncorrectVoteThreshold)
                : undefined);
        message.chainMaintainerCheckWindow !== undefined &&
            (obj.chainMaintainerCheckWindow = Math.round(message.chainMaintainerCheckWindow));
        message.gateway !== undefined &&
            (obj.gateway = base64FromBytes(message.gateway !== undefined ? message.gateway : new Uint8Array()));
        message.endBlockerLimit !== undefined &&
            (obj.endBlockerLimit = (message.endBlockerLimit || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseParams();
        message.chainActivationThreshold =
            object.chainActivationThreshold !== undefined && object.chainActivationThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.chainActivationThreshold)
                : undefined;
        message.chainMaintainerMissingVoteThreshold =
            object.chainMaintainerMissingVoteThreshold !== undefined &&
                object.chainMaintainerMissingVoteThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.chainMaintainerMissingVoteThreshold)
                : undefined;
        message.chainMaintainerIncorrectVoteThreshold =
            object.chainMaintainerIncorrectVoteThreshold !== undefined &&
                object.chainMaintainerIncorrectVoteThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.chainMaintainerIncorrectVoteThreshold)
                : undefined;
        message.chainMaintainerCheckWindow = (_a = object.chainMaintainerCheckWindow) !== null && _a !== void 0 ? _a : 0;
        message.gateway = (_b = object.gateway) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.endBlockerLimit =
            object.endBlockerLimit !== undefined && object.endBlockerLimit !== null
                ? long_1.default.fromValue(object.endBlockerLimit)
                : long_1.default.UZERO;
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