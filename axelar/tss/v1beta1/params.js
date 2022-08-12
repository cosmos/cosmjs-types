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
const types_1 = require("../../../axelar/tss/exported/v1beta1/types");
exports.protobufPackage = "axelar.tss.v1beta1";
function createBaseParams() {
    return {
        keyRequirements: [],
        suspendDurationInBlocks: long_1.default.ZERO,
        heartbeatPeriodInBlocks: long_1.default.ZERO,
        maxMissedBlocksPerWindow: undefined,
        unbondingLockingKeyRotationCount: long_1.default.ZERO,
        externalMultisigThreshold: undefined,
        maxSignQueueSize: long_1.default.ZERO,
        maxSimultaneousSignShares: long_1.default.ZERO,
        tssSignedBlocksWindow: long_1.default.ZERO,
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keyRequirements) {
            types_1.KeyRequirement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.suspendDurationInBlocks.isZero()) {
            writer.uint32(16).int64(message.suspendDurationInBlocks);
        }
        if (!message.heartbeatPeriodInBlocks.isZero()) {
            writer.uint32(24).int64(message.heartbeatPeriodInBlocks);
        }
        if (message.maxMissedBlocksPerWindow !== undefined) {
            threshold_1.Threshold.encode(message.maxMissedBlocksPerWindow, writer.uint32(34).fork()).ldelim();
        }
        if (!message.unbondingLockingKeyRotationCount.isZero()) {
            writer.uint32(40).int64(message.unbondingLockingKeyRotationCount);
        }
        if (message.externalMultisigThreshold !== undefined) {
            threshold_1.Threshold.encode(message.externalMultisigThreshold, writer.uint32(50).fork()).ldelim();
        }
        if (!message.maxSignQueueSize.isZero()) {
            writer.uint32(56).int64(message.maxSignQueueSize);
        }
        if (!message.maxSimultaneousSignShares.isZero()) {
            writer.uint32(64).int64(message.maxSimultaneousSignShares);
        }
        if (!message.tssSignedBlocksWindow.isZero()) {
            writer.uint32(72).int64(message.tssSignedBlocksWindow);
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
                    message.keyRequirements.push(types_1.KeyRequirement.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.suspendDurationInBlocks = reader.int64();
                    break;
                case 3:
                    message.heartbeatPeriodInBlocks = reader.int64();
                    break;
                case 4:
                    message.maxMissedBlocksPerWindow = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.unbondingLockingKeyRotationCount = reader.int64();
                    break;
                case 6:
                    message.externalMultisigThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.maxSignQueueSize = reader.int64();
                    break;
                case 8:
                    message.maxSimultaneousSignShares = reader.int64();
                    break;
                case 9:
                    message.tssSignedBlocksWindow = reader.int64();
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
            keyRequirements: Array.isArray(object === null || object === void 0 ? void 0 : object.keyRequirements)
                ? object.keyRequirements.map((e) => types_1.KeyRequirement.fromJSON(e))
                : [],
            suspendDurationInBlocks: isSet(object.suspendDurationInBlocks)
                ? long_1.default.fromValue(object.suspendDurationInBlocks)
                : long_1.default.ZERO,
            heartbeatPeriodInBlocks: isSet(object.heartbeatPeriodInBlocks)
                ? long_1.default.fromValue(object.heartbeatPeriodInBlocks)
                : long_1.default.ZERO,
            maxMissedBlocksPerWindow: isSet(object.maxMissedBlocksPerWindow)
                ? threshold_1.Threshold.fromJSON(object.maxMissedBlocksPerWindow)
                : undefined,
            unbondingLockingKeyRotationCount: isSet(object.unbondingLockingKeyRotationCount)
                ? long_1.default.fromValue(object.unbondingLockingKeyRotationCount)
                : long_1.default.ZERO,
            externalMultisigThreshold: isSet(object.externalMultisigThreshold)
                ? threshold_1.Threshold.fromJSON(object.externalMultisigThreshold)
                : undefined,
            maxSignQueueSize: isSet(object.maxSignQueueSize) ? long_1.default.fromValue(object.maxSignQueueSize) : long_1.default.ZERO,
            maxSimultaneousSignShares: isSet(object.maxSimultaneousSignShares)
                ? long_1.default.fromValue(object.maxSimultaneousSignShares)
                : long_1.default.ZERO,
            tssSignedBlocksWindow: isSet(object.tssSignedBlocksWindow)
                ? long_1.default.fromValue(object.tssSignedBlocksWindow)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.keyRequirements) {
            obj.keyRequirements = message.keyRequirements.map((e) => (e ? types_1.KeyRequirement.toJSON(e) : undefined));
        }
        else {
            obj.keyRequirements = [];
        }
        message.suspendDurationInBlocks !== undefined &&
            (obj.suspendDurationInBlocks = (message.suspendDurationInBlocks || long_1.default.ZERO).toString());
        message.heartbeatPeriodInBlocks !== undefined &&
            (obj.heartbeatPeriodInBlocks = (message.heartbeatPeriodInBlocks || long_1.default.ZERO).toString());
        message.maxMissedBlocksPerWindow !== undefined &&
            (obj.maxMissedBlocksPerWindow = message.maxMissedBlocksPerWindow
                ? threshold_1.Threshold.toJSON(message.maxMissedBlocksPerWindow)
                : undefined);
        message.unbondingLockingKeyRotationCount !== undefined &&
            (obj.unbondingLockingKeyRotationCount = (message.unbondingLockingKeyRotationCount || long_1.default.ZERO).toString());
        message.externalMultisigThreshold !== undefined &&
            (obj.externalMultisigThreshold = message.externalMultisigThreshold
                ? threshold_1.Threshold.toJSON(message.externalMultisigThreshold)
                : undefined);
        message.maxSignQueueSize !== undefined &&
            (obj.maxSignQueueSize = (message.maxSignQueueSize || long_1.default.ZERO).toString());
        message.maxSimultaneousSignShares !== undefined &&
            (obj.maxSimultaneousSignShares = (message.maxSimultaneousSignShares || long_1.default.ZERO).toString());
        message.tssSignedBlocksWindow !== undefined &&
            (obj.tssSignedBlocksWindow = (message.tssSignedBlocksWindow || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParams();
        message.keyRequirements = ((_a = object.keyRequirements) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.KeyRequirement.fromPartial(e))) || [];
        message.suspendDurationInBlocks =
            object.suspendDurationInBlocks !== undefined && object.suspendDurationInBlocks !== null
                ? long_1.default.fromValue(object.suspendDurationInBlocks)
                : long_1.default.ZERO;
        message.heartbeatPeriodInBlocks =
            object.heartbeatPeriodInBlocks !== undefined && object.heartbeatPeriodInBlocks !== null
                ? long_1.default.fromValue(object.heartbeatPeriodInBlocks)
                : long_1.default.ZERO;
        message.maxMissedBlocksPerWindow =
            object.maxMissedBlocksPerWindow !== undefined && object.maxMissedBlocksPerWindow !== null
                ? threshold_1.Threshold.fromPartial(object.maxMissedBlocksPerWindow)
                : undefined;
        message.unbondingLockingKeyRotationCount =
            object.unbondingLockingKeyRotationCount !== undefined &&
                object.unbondingLockingKeyRotationCount !== null
                ? long_1.default.fromValue(object.unbondingLockingKeyRotationCount)
                : long_1.default.ZERO;
        message.externalMultisigThreshold =
            object.externalMultisigThreshold !== undefined && object.externalMultisigThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.externalMultisigThreshold)
                : undefined;
        message.maxSignQueueSize =
            object.maxSignQueueSize !== undefined && object.maxSignQueueSize !== null
                ? long_1.default.fromValue(object.maxSignQueueSize)
                : long_1.default.ZERO;
        message.maxSimultaneousSignShares =
            object.maxSimultaneousSignShares !== undefined && object.maxSimultaneousSignShares !== null
                ? long_1.default.fromValue(object.maxSimultaneousSignShares)
                : long_1.default.ZERO;
        message.tssSignedBlocksWindow =
            object.tssSignedBlocksWindow !== undefined && object.tssSignedBlocksWindow !== null
                ? long_1.default.fromValue(object.tssSignedBlocksWindow)
                : long_1.default.ZERO;
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