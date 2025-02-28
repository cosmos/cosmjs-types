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
exports.protobufPackage = "axelar.multisig.v1beta1";
function createBaseParams() {
    return {
        keygenThreshold: undefined,
        signingThreshold: undefined,
        keygenTimeout: long_1.default.ZERO,
        keygenGracePeriod: long_1.default.ZERO,
        signingTimeout: long_1.default.ZERO,
        signingGracePeriod: long_1.default.ZERO,
        activeEpochCount: long_1.default.UZERO,
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keygenThreshold !== undefined) {
            threshold_1.Threshold.encode(message.keygenThreshold, writer.uint32(10).fork()).ldelim();
        }
        if (message.signingThreshold !== undefined) {
            threshold_1.Threshold.encode(message.signingThreshold, writer.uint32(18).fork()).ldelim();
        }
        if (!message.keygenTimeout.isZero()) {
            writer.uint32(24).int64(message.keygenTimeout);
        }
        if (!message.keygenGracePeriod.isZero()) {
            writer.uint32(32).int64(message.keygenGracePeriod);
        }
        if (!message.signingTimeout.isZero()) {
            writer.uint32(40).int64(message.signingTimeout);
        }
        if (!message.signingGracePeriod.isZero()) {
            writer.uint32(48).int64(message.signingGracePeriod);
        }
        if (!message.activeEpochCount.isZero()) {
            writer.uint32(56).uint64(message.activeEpochCount);
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
                    message.keygenThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signingThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.keygenTimeout = reader.int64();
                    break;
                case 4:
                    message.keygenGracePeriod = reader.int64();
                    break;
                case 5:
                    message.signingTimeout = reader.int64();
                    break;
                case 6:
                    message.signingGracePeriod = reader.int64();
                    break;
                case 7:
                    message.activeEpochCount = reader.uint64();
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
            keygenThreshold: isSet(object.keygenThreshold) ? threshold_1.Threshold.fromJSON(object.keygenThreshold) : undefined,
            signingThreshold: isSet(object.signingThreshold)
                ? threshold_1.Threshold.fromJSON(object.signingThreshold)
                : undefined,
            keygenTimeout: isSet(object.keygenTimeout) ? long_1.default.fromValue(object.keygenTimeout) : long_1.default.ZERO,
            keygenGracePeriod: isSet(object.keygenGracePeriod)
                ? long_1.default.fromValue(object.keygenGracePeriod)
                : long_1.default.ZERO,
            signingTimeout: isSet(object.signingTimeout) ? long_1.default.fromValue(object.signingTimeout) : long_1.default.ZERO,
            signingGracePeriod: isSet(object.signingGracePeriod)
                ? long_1.default.fromValue(object.signingGracePeriod)
                : long_1.default.ZERO,
            activeEpochCount: isSet(object.activeEpochCount) ? long_1.default.fromValue(object.activeEpochCount) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.keygenThreshold !== undefined &&
            (obj.keygenThreshold = message.keygenThreshold ? threshold_1.Threshold.toJSON(message.keygenThreshold) : undefined);
        message.signingThreshold !== undefined &&
            (obj.signingThreshold = message.signingThreshold
                ? threshold_1.Threshold.toJSON(message.signingThreshold)
                : undefined);
        message.keygenTimeout !== undefined &&
            (obj.keygenTimeout = (message.keygenTimeout || long_1.default.ZERO).toString());
        message.keygenGracePeriod !== undefined &&
            (obj.keygenGracePeriod = (message.keygenGracePeriod || long_1.default.ZERO).toString());
        message.signingTimeout !== undefined &&
            (obj.signingTimeout = (message.signingTimeout || long_1.default.ZERO).toString());
        message.signingGracePeriod !== undefined &&
            (obj.signingGracePeriod = (message.signingGracePeriod || long_1.default.ZERO).toString());
        message.activeEpochCount !== undefined &&
            (obj.activeEpochCount = (message.activeEpochCount || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.keygenThreshold =
            object.keygenThreshold !== undefined && object.keygenThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.keygenThreshold)
                : undefined;
        message.signingThreshold =
            object.signingThreshold !== undefined && object.signingThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.signingThreshold)
                : undefined;
        message.keygenTimeout =
            object.keygenTimeout !== undefined && object.keygenTimeout !== null
                ? long_1.default.fromValue(object.keygenTimeout)
                : long_1.default.ZERO;
        message.keygenGracePeriod =
            object.keygenGracePeriod !== undefined && object.keygenGracePeriod !== null
                ? long_1.default.fromValue(object.keygenGracePeriod)
                : long_1.default.ZERO;
        message.signingTimeout =
            object.signingTimeout !== undefined && object.signingTimeout !== null
                ? long_1.default.fromValue(object.signingTimeout)
                : long_1.default.ZERO;
        message.signingGracePeriod =
            object.signingGracePeriod !== undefined && object.signingGracePeriod !== null
                ? long_1.default.fromValue(object.signingGracePeriod)
                : long_1.default.ZERO;
        message.activeEpochCount =
            object.activeEpochCount !== undefined && object.activeEpochCount !== null
                ? long_1.default.fromValue(object.activeEpochCount)
                : long_1.default.UZERO;
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
//# sourceMappingURL=params.js.map