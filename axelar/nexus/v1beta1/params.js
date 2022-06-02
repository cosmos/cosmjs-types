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
        return obj;
    },
    fromPartial(object) {
        var _a;
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