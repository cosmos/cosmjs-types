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
exports.Key_MultisigKey = exports.Key_ECDSAKey = exports.Key = exports.Signature_MultiSig = exports.Signature_SingleSig = exports.Signature = exports.SigKeyPair = exports.SignInfo = exports.KeyRequirement = exports.keyTypeToJSON = exports.keyTypeFromJSON = exports.KeyType = exports.sigStatusToJSON = exports.sigStatusFromJSON = exports.SigStatus = exports.ackTypeToJSON = exports.ackTypeFromJSON = exports.AckType = exports.keyShareDistributionPolicyToJSON = exports.keyShareDistributionPolicyFromJSON = exports.KeyShareDistributionPolicy = exports.keyRoleToJSON = exports.keyRoleFromJSON = exports.KeyRole = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const threshold_1 = require("../../../../axelar/utils/v1beta1/threshold");
const any_1 = require("../../../../google/protobuf/any");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "axelar.tss.exported.v1beta1";
var KeyRole;
(function (KeyRole) {
    KeyRole[KeyRole["KEY_ROLE_UNSPECIFIED"] = 0] = "KEY_ROLE_UNSPECIFIED";
    KeyRole[KeyRole["KEY_ROLE_MASTER_KEY"] = 1] = "KEY_ROLE_MASTER_KEY";
    KeyRole[KeyRole["KEY_ROLE_SECONDARY_KEY"] = 2] = "KEY_ROLE_SECONDARY_KEY";
    KeyRole[KeyRole["KEY_ROLE_EXTERNAL_KEY"] = 3] = "KEY_ROLE_EXTERNAL_KEY";
    KeyRole[KeyRole["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyRole = exports.KeyRole || (exports.KeyRole = {}));
function keyRoleFromJSON(object) {
    switch (object) {
        case 0:
        case "KEY_ROLE_UNSPECIFIED":
            return KeyRole.KEY_ROLE_UNSPECIFIED;
        case 1:
        case "KEY_ROLE_MASTER_KEY":
            return KeyRole.KEY_ROLE_MASTER_KEY;
        case 2:
        case "KEY_ROLE_SECONDARY_KEY":
            return KeyRole.KEY_ROLE_SECONDARY_KEY;
        case 3:
        case "KEY_ROLE_EXTERNAL_KEY":
            return KeyRole.KEY_ROLE_EXTERNAL_KEY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KeyRole.UNRECOGNIZED;
    }
}
exports.keyRoleFromJSON = keyRoleFromJSON;
function keyRoleToJSON(object) {
    switch (object) {
        case KeyRole.KEY_ROLE_UNSPECIFIED:
            return "KEY_ROLE_UNSPECIFIED";
        case KeyRole.KEY_ROLE_MASTER_KEY:
            return "KEY_ROLE_MASTER_KEY";
        case KeyRole.KEY_ROLE_SECONDARY_KEY:
            return "KEY_ROLE_SECONDARY_KEY";
        case KeyRole.KEY_ROLE_EXTERNAL_KEY:
            return "KEY_ROLE_EXTERNAL_KEY";
        case KeyRole.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.keyRoleToJSON = keyRoleToJSON;
var KeyShareDistributionPolicy;
(function (KeyShareDistributionPolicy) {
    KeyShareDistributionPolicy[KeyShareDistributionPolicy["KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED"] = 0] = "KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED";
    KeyShareDistributionPolicy[KeyShareDistributionPolicy["KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE"] = 1] = "KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE";
    KeyShareDistributionPolicy[KeyShareDistributionPolicy["KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR"] = 2] = "KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR";
    KeyShareDistributionPolicy[KeyShareDistributionPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyShareDistributionPolicy = exports.KeyShareDistributionPolicy || (exports.KeyShareDistributionPolicy = {}));
function keyShareDistributionPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED":
            return KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED;
        case 1:
        case "KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE":
            return KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE;
        case 2:
        case "KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR":
            return KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KeyShareDistributionPolicy.UNRECOGNIZED;
    }
}
exports.keyShareDistributionPolicyFromJSON = keyShareDistributionPolicyFromJSON;
function keyShareDistributionPolicyToJSON(object) {
    switch (object) {
        case KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED:
            return "KEY_SHARE_DISTRIBUTION_POLICY_UNSPECIFIED";
        case KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE:
            return "KEY_SHARE_DISTRIBUTION_POLICY_WEIGHTED_BY_STAKE";
        case KeyShareDistributionPolicy.KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR:
            return "KEY_SHARE_DISTRIBUTION_POLICY_ONE_PER_VALIDATOR";
        case KeyShareDistributionPolicy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.keyShareDistributionPolicyToJSON = keyShareDistributionPolicyToJSON;
var AckType;
(function (AckType) {
    AckType[AckType["ACK_TYPE_UNSPECIFIED"] = 0] = "ACK_TYPE_UNSPECIFIED";
    AckType[AckType["ACK_TYPE_KEYGEN"] = 1] = "ACK_TYPE_KEYGEN";
    AckType[AckType["ACK_TYPE_SIGN"] = 2] = "ACK_TYPE_SIGN";
    AckType[AckType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AckType = exports.AckType || (exports.AckType = {}));
function ackTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ACK_TYPE_UNSPECIFIED":
            return AckType.ACK_TYPE_UNSPECIFIED;
        case 1:
        case "ACK_TYPE_KEYGEN":
            return AckType.ACK_TYPE_KEYGEN;
        case 2:
        case "ACK_TYPE_SIGN":
            return AckType.ACK_TYPE_SIGN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AckType.UNRECOGNIZED;
    }
}
exports.ackTypeFromJSON = ackTypeFromJSON;
function ackTypeToJSON(object) {
    switch (object) {
        case AckType.ACK_TYPE_UNSPECIFIED:
            return "ACK_TYPE_UNSPECIFIED";
        case AckType.ACK_TYPE_KEYGEN:
            return "ACK_TYPE_KEYGEN";
        case AckType.ACK_TYPE_SIGN:
            return "ACK_TYPE_SIGN";
        case AckType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.ackTypeToJSON = ackTypeToJSON;
var SigStatus;
(function (SigStatus) {
    SigStatus[SigStatus["SIG_STATUS_UNSPECIFIED"] = 0] = "SIG_STATUS_UNSPECIFIED";
    SigStatus[SigStatus["SIG_STATUS_QUEUED"] = 1] = "SIG_STATUS_QUEUED";
    SigStatus[SigStatus["SIG_STATUS_SIGNING"] = 2] = "SIG_STATUS_SIGNING";
    SigStatus[SigStatus["SIG_STATUS_SIGNED"] = 3] = "SIG_STATUS_SIGNED";
    SigStatus[SigStatus["SIG_STATUS_ABORTED"] = 4] = "SIG_STATUS_ABORTED";
    SigStatus[SigStatus["SIG_STATUS_INVALID"] = 5] = "SIG_STATUS_INVALID";
    SigStatus[SigStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SigStatus = exports.SigStatus || (exports.SigStatus = {}));
function sigStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "SIG_STATUS_UNSPECIFIED":
            return SigStatus.SIG_STATUS_UNSPECIFIED;
        case 1:
        case "SIG_STATUS_QUEUED":
            return SigStatus.SIG_STATUS_QUEUED;
        case 2:
        case "SIG_STATUS_SIGNING":
            return SigStatus.SIG_STATUS_SIGNING;
        case 3:
        case "SIG_STATUS_SIGNED":
            return SigStatus.SIG_STATUS_SIGNED;
        case 4:
        case "SIG_STATUS_ABORTED":
            return SigStatus.SIG_STATUS_ABORTED;
        case 5:
        case "SIG_STATUS_INVALID":
            return SigStatus.SIG_STATUS_INVALID;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SigStatus.UNRECOGNIZED;
    }
}
exports.sigStatusFromJSON = sigStatusFromJSON;
function sigStatusToJSON(object) {
    switch (object) {
        case SigStatus.SIG_STATUS_UNSPECIFIED:
            return "SIG_STATUS_UNSPECIFIED";
        case SigStatus.SIG_STATUS_QUEUED:
            return "SIG_STATUS_QUEUED";
        case SigStatus.SIG_STATUS_SIGNING:
            return "SIG_STATUS_SIGNING";
        case SigStatus.SIG_STATUS_SIGNED:
            return "SIG_STATUS_SIGNED";
        case SigStatus.SIG_STATUS_ABORTED:
            return "SIG_STATUS_ABORTED";
        case SigStatus.SIG_STATUS_INVALID:
            return "SIG_STATUS_INVALID";
        case SigStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sigStatusToJSON = sigStatusToJSON;
var KeyType;
(function (KeyType) {
    KeyType[KeyType["KEY_TYPE_UNSPECIFIED"] = 0] = "KEY_TYPE_UNSPECIFIED";
    KeyType[KeyType["KEY_TYPE_NONE"] = 1] = "KEY_TYPE_NONE";
    KeyType[KeyType["KEY_TYPE_THRESHOLD"] = 2] = "KEY_TYPE_THRESHOLD";
    KeyType[KeyType["KEY_TYPE_MULTISIG"] = 3] = "KEY_TYPE_MULTISIG";
    KeyType[KeyType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
function keyTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "KEY_TYPE_UNSPECIFIED":
            return KeyType.KEY_TYPE_UNSPECIFIED;
        case 1:
        case "KEY_TYPE_NONE":
            return KeyType.KEY_TYPE_NONE;
        case 2:
        case "KEY_TYPE_THRESHOLD":
            return KeyType.KEY_TYPE_THRESHOLD;
        case 3:
        case "KEY_TYPE_MULTISIG":
            return KeyType.KEY_TYPE_MULTISIG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KeyType.UNRECOGNIZED;
    }
}
exports.keyTypeFromJSON = keyTypeFromJSON;
function keyTypeToJSON(object) {
    switch (object) {
        case KeyType.KEY_TYPE_UNSPECIFIED:
            return "KEY_TYPE_UNSPECIFIED";
        case KeyType.KEY_TYPE_NONE:
            return "KEY_TYPE_NONE";
        case KeyType.KEY_TYPE_THRESHOLD:
            return "KEY_TYPE_THRESHOLD";
        case KeyType.KEY_TYPE_MULTISIG:
            return "KEY_TYPE_MULTISIG";
        case KeyType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.keyTypeToJSON = keyTypeToJSON;
function createBaseKeyRequirement() {
    return {
        keyRole: 0,
        keyType: 0,
        minKeygenThreshold: undefined,
        safetyThreshold: undefined,
        keyShareDistributionPolicy: 0,
        maxTotalShareCount: long_1.default.ZERO,
        minTotalShareCount: long_1.default.ZERO,
        keygenVotingThreshold: undefined,
        signVotingThreshold: undefined,
        keygenTimeout: long_1.default.ZERO,
        signTimeout: long_1.default.ZERO,
    };
}
exports.KeyRequirement = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyRole !== 0) {
            writer.uint32(8).int32(message.keyRole);
        }
        if (message.keyType !== 0) {
            writer.uint32(16).int32(message.keyType);
        }
        if (message.minKeygenThreshold !== undefined) {
            threshold_1.Threshold.encode(message.minKeygenThreshold, writer.uint32(26).fork()).ldelim();
        }
        if (message.safetyThreshold !== undefined) {
            threshold_1.Threshold.encode(message.safetyThreshold, writer.uint32(34).fork()).ldelim();
        }
        if (message.keyShareDistributionPolicy !== 0) {
            writer.uint32(40).int32(message.keyShareDistributionPolicy);
        }
        if (!message.maxTotalShareCount.isZero()) {
            writer.uint32(48).int64(message.maxTotalShareCount);
        }
        if (!message.minTotalShareCount.isZero()) {
            writer.uint32(56).int64(message.minTotalShareCount);
        }
        if (message.keygenVotingThreshold !== undefined) {
            threshold_1.Threshold.encode(message.keygenVotingThreshold, writer.uint32(66).fork()).ldelim();
        }
        if (message.signVotingThreshold !== undefined) {
            threshold_1.Threshold.encode(message.signVotingThreshold, writer.uint32(74).fork()).ldelim();
        }
        if (!message.keygenTimeout.isZero()) {
            writer.uint32(80).int64(message.keygenTimeout);
        }
        if (!message.signTimeout.isZero()) {
            writer.uint32(88).int64(message.signTimeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyRequirement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyRole = reader.int32();
                    break;
                case 2:
                    message.keyType = reader.int32();
                    break;
                case 3:
                    message.minKeygenThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.safetyThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.keyShareDistributionPolicy = reader.int32();
                    break;
                case 6:
                    message.maxTotalShareCount = reader.int64();
                    break;
                case 7:
                    message.minTotalShareCount = reader.int64();
                    break;
                case 8:
                    message.keygenVotingThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.signVotingThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.keygenTimeout = reader.int64();
                    break;
                case 11:
                    message.signTimeout = reader.int64();
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
            keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : 0,
            keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : 0,
            minKeygenThreshold: isSet(object.minKeygenThreshold)
                ? threshold_1.Threshold.fromJSON(object.minKeygenThreshold)
                : undefined,
            safetyThreshold: isSet(object.safetyThreshold) ? threshold_1.Threshold.fromJSON(object.safetyThreshold) : undefined,
            keyShareDistributionPolicy: isSet(object.keyShareDistributionPolicy)
                ? keyShareDistributionPolicyFromJSON(object.keyShareDistributionPolicy)
                : 0,
            maxTotalShareCount: isSet(object.maxTotalShareCount)
                ? long_1.default.fromValue(object.maxTotalShareCount)
                : long_1.default.ZERO,
            minTotalShareCount: isSet(object.minTotalShareCount)
                ? long_1.default.fromValue(object.minTotalShareCount)
                : long_1.default.ZERO,
            keygenVotingThreshold: isSet(object.keygenVotingThreshold)
                ? threshold_1.Threshold.fromJSON(object.keygenVotingThreshold)
                : undefined,
            signVotingThreshold: isSet(object.signVotingThreshold)
                ? threshold_1.Threshold.fromJSON(object.signVotingThreshold)
                : undefined,
            keygenTimeout: isSet(object.keygenTimeout) ? long_1.default.fromValue(object.keygenTimeout) : long_1.default.ZERO,
            signTimeout: isSet(object.signTimeout) ? long_1.default.fromValue(object.signTimeout) : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyRole !== undefined && (obj.keyRole = keyRoleToJSON(message.keyRole));
        message.keyType !== undefined && (obj.keyType = keyTypeToJSON(message.keyType));
        message.minKeygenThreshold !== undefined &&
            (obj.minKeygenThreshold = message.minKeygenThreshold
                ? threshold_1.Threshold.toJSON(message.minKeygenThreshold)
                : undefined);
        message.safetyThreshold !== undefined &&
            (obj.safetyThreshold = message.safetyThreshold ? threshold_1.Threshold.toJSON(message.safetyThreshold) : undefined);
        message.keyShareDistributionPolicy !== undefined &&
            (obj.keyShareDistributionPolicy = keyShareDistributionPolicyToJSON(message.keyShareDistributionPolicy));
        message.maxTotalShareCount !== undefined &&
            (obj.maxTotalShareCount = (message.maxTotalShareCount || long_1.default.ZERO).toString());
        message.minTotalShareCount !== undefined &&
            (obj.minTotalShareCount = (message.minTotalShareCount || long_1.default.ZERO).toString());
        message.keygenVotingThreshold !== undefined &&
            (obj.keygenVotingThreshold = message.keygenVotingThreshold
                ? threshold_1.Threshold.toJSON(message.keygenVotingThreshold)
                : undefined);
        message.signVotingThreshold !== undefined &&
            (obj.signVotingThreshold = message.signVotingThreshold
                ? threshold_1.Threshold.toJSON(message.signVotingThreshold)
                : undefined);
        message.keygenTimeout !== undefined &&
            (obj.keygenTimeout = (message.keygenTimeout || long_1.default.ZERO).toString());
        message.signTimeout !== undefined && (obj.signTimeout = (message.signTimeout || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseKeyRequirement();
        message.keyRole = (_a = object.keyRole) !== null && _a !== void 0 ? _a : 0;
        message.keyType = (_b = object.keyType) !== null && _b !== void 0 ? _b : 0;
        message.minKeygenThreshold =
            object.minKeygenThreshold !== undefined && object.minKeygenThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.minKeygenThreshold)
                : undefined;
        message.safetyThreshold =
            object.safetyThreshold !== undefined && object.safetyThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.safetyThreshold)
                : undefined;
        message.keyShareDistributionPolicy = (_c = object.keyShareDistributionPolicy) !== null && _c !== void 0 ? _c : 0;
        message.maxTotalShareCount =
            object.maxTotalShareCount !== undefined && object.maxTotalShareCount !== null
                ? long_1.default.fromValue(object.maxTotalShareCount)
                : long_1.default.ZERO;
        message.minTotalShareCount =
            object.minTotalShareCount !== undefined && object.minTotalShareCount !== null
                ? long_1.default.fromValue(object.minTotalShareCount)
                : long_1.default.ZERO;
        message.keygenVotingThreshold =
            object.keygenVotingThreshold !== undefined && object.keygenVotingThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.keygenVotingThreshold)
                : undefined;
        message.signVotingThreshold =
            object.signVotingThreshold !== undefined && object.signVotingThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.signVotingThreshold)
                : undefined;
        message.keygenTimeout =
            object.keygenTimeout !== undefined && object.keygenTimeout !== null
                ? long_1.default.fromValue(object.keygenTimeout)
                : long_1.default.ZERO;
        message.signTimeout =
            object.signTimeout !== undefined && object.signTimeout !== null
                ? long_1.default.fromValue(object.signTimeout)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseSignInfo() {
    return {
        keyId: "",
        sigId: "",
        msg: new Uint8Array(),
        snapshotCounter: long_1.default.ZERO,
        requestModule: "",
        metadata: "",
        moduleMetadata: undefined,
    };
}
exports.SignInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.sigId !== "") {
            writer.uint32(18).string(message.sigId);
        }
        if (message.msg.length !== 0) {
            writer.uint32(26).bytes(message.msg);
        }
        if (!message.snapshotCounter.isZero()) {
            writer.uint32(32).int64(message.snapshotCounter);
        }
        if (message.requestModule !== "") {
            writer.uint32(42).string(message.requestModule);
        }
        if (message.metadata !== "") {
            writer.uint32(50).string(message.metadata);
        }
        if (message.moduleMetadata !== undefined) {
            any_1.Any.encode(message.moduleMetadata, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.sigId = reader.string();
                    break;
                case 3:
                    message.msg = reader.bytes();
                    break;
                case 4:
                    message.snapshotCounter = reader.int64();
                    break;
                case 5:
                    message.requestModule = reader.string();
                    break;
                case 6:
                    message.metadata = reader.string();
                    break;
                case 7:
                    message.moduleMetadata = any_1.Any.decode(reader, reader.uint32());
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
            sigId: isSet(object.sigId) ? String(object.sigId) : "",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
            snapshotCounter: isSet(object.snapshotCounter) ? long_1.default.fromValue(object.snapshotCounter) : long_1.default.ZERO,
            requestModule: isSet(object.requestModule) ? String(object.requestModule) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            moduleMetadata: isSet(object.moduleMetadata) ? any_1.Any.fromJSON(object.moduleMetadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.sigId !== undefined && (obj.sigId = message.sigId);
        message.msg !== undefined &&
            (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
        message.snapshotCounter !== undefined &&
            (obj.snapshotCounter = (message.snapshotCounter || long_1.default.ZERO).toString());
        message.requestModule !== undefined && (obj.requestModule = message.requestModule);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.moduleMetadata !== undefined &&
            (obj.moduleMetadata = message.moduleMetadata ? any_1.Any.toJSON(message.moduleMetadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSignInfo();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.sigId = (_b = object.sigId) !== null && _b !== void 0 ? _b : "";
        message.msg = (_c = object.msg) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.snapshotCounter =
            object.snapshotCounter !== undefined && object.snapshotCounter !== null
                ? long_1.default.fromValue(object.snapshotCounter)
                : long_1.default.ZERO;
        message.requestModule = (_d = object.requestModule) !== null && _d !== void 0 ? _d : "";
        message.metadata = (_e = object.metadata) !== null && _e !== void 0 ? _e : "";
        message.moduleMetadata =
            object.moduleMetadata !== undefined && object.moduleMetadata !== null
                ? any_1.Any.fromPartial(object.moduleMetadata)
                : undefined;
        return message;
    },
};
function createBaseSigKeyPair() {
    return { pubKey: new Uint8Array(), signature: new Uint8Array() };
}
exports.SigKeyPair = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pubKey.length !== 0) {
            writer.uint32(10).bytes(message.pubKey);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigKeyPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = reader.bytes();
                    break;
                case 2:
                    message.signature = reader.bytes();
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
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined &&
            (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSigKeyPair();
        message.pubKey = (_a = object.pubKey) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.signature = (_b = object.signature) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseSignature() {
    return { sigId: "", singleSig: undefined, multiSig: undefined, sigStatus: 0 };
}
exports.Signature = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sigId !== "") {
            writer.uint32(10).string(message.sigId);
        }
        if (message.singleSig !== undefined) {
            exports.Signature_SingleSig.encode(message.singleSig, writer.uint32(18).fork()).ldelim();
        }
        if (message.multiSig !== undefined) {
            exports.Signature_MultiSig.encode(message.multiSig, writer.uint32(26).fork()).ldelim();
        }
        if (message.sigStatus !== 0) {
            writer.uint32(32).int32(message.sigStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sigId = reader.string();
                    break;
                case 2:
                    message.singleSig = exports.Signature_SingleSig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.multiSig = exports.Signature_MultiSig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sigStatus = reader.int32();
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
            sigId: isSet(object.sigId) ? String(object.sigId) : "",
            singleSig: isSet(object.singleSig) ? exports.Signature_SingleSig.fromJSON(object.singleSig) : undefined,
            multiSig: isSet(object.multiSig) ? exports.Signature_MultiSig.fromJSON(object.multiSig) : undefined,
            sigStatus: isSet(object.sigStatus) ? sigStatusFromJSON(object.sigStatus) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sigId !== undefined && (obj.sigId = message.sigId);
        message.singleSig !== undefined &&
            (obj.singleSig = message.singleSig ? exports.Signature_SingleSig.toJSON(message.singleSig) : undefined);
        message.multiSig !== undefined &&
            (obj.multiSig = message.multiSig ? exports.Signature_MultiSig.toJSON(message.multiSig) : undefined);
        message.sigStatus !== undefined && (obj.sigStatus = sigStatusToJSON(message.sigStatus));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSignature();
        message.sigId = (_a = object.sigId) !== null && _a !== void 0 ? _a : "";
        message.singleSig =
            object.singleSig !== undefined && object.singleSig !== null
                ? exports.Signature_SingleSig.fromPartial(object.singleSig)
                : undefined;
        message.multiSig =
            object.multiSig !== undefined && object.multiSig !== null
                ? exports.Signature_MultiSig.fromPartial(object.multiSig)
                : undefined;
        message.sigStatus = (_b = object.sigStatus) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseSignature_SingleSig() {
    return { sigKeyPair: undefined };
}
exports.Signature_SingleSig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sigKeyPair !== undefined) {
            exports.SigKeyPair.encode(message.sigKeyPair, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignature_SingleSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sigKeyPair = exports.SigKeyPair.decode(reader, reader.uint32());
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
            sigKeyPair: isSet(object.sigKeyPair) ? exports.SigKeyPair.fromJSON(object.sigKeyPair) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sigKeyPair !== undefined &&
            (obj.sigKeyPair = message.sigKeyPair ? exports.SigKeyPair.toJSON(message.sigKeyPair) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignature_SingleSig();
        message.sigKeyPair =
            object.sigKeyPair !== undefined && object.sigKeyPair !== null
                ? exports.SigKeyPair.fromPartial(object.sigKeyPair)
                : undefined;
        return message;
    },
};
function createBaseSignature_MultiSig() {
    return { sigKeyPairs: [] };
}
exports.Signature_MultiSig = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.sigKeyPairs) {
            exports.SigKeyPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignature_MultiSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sigKeyPairs.push(exports.SigKeyPair.decode(reader, reader.uint32()));
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
            sigKeyPairs: Array.isArray(object === null || object === void 0 ? void 0 : object.sigKeyPairs)
                ? object.sigKeyPairs.map((e) => exports.SigKeyPair.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sigKeyPairs) {
            obj.sigKeyPairs = message.sigKeyPairs.map((e) => (e ? exports.SigKeyPair.toJSON(e) : undefined));
        }
        else {
            obj.sigKeyPairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSignature_MultiSig();
        message.sigKeyPairs = ((_a = object.sigKeyPairs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SigKeyPair.fromPartial(e))) || [];
        return message;
    },
};
function createBaseKey() {
    return {
        id: "",
        role: 0,
        type: 0,
        ecdsaKey: undefined,
        multisigKey: undefined,
        rotatedAt: undefined,
        rotationCount: long_1.default.ZERO,
        chain: "",
        snapshotCounter: long_1.default.ZERO,
    };
}
exports.Key = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.role !== 0) {
            writer.uint32(16).int32(message.role);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.ecdsaKey !== undefined) {
            exports.Key_ECDSAKey.encode(message.ecdsaKey, writer.uint32(34).fork()).ldelim();
        }
        if (message.multisigKey !== undefined) {
            exports.Key_MultisigKey.encode(message.multisigKey, writer.uint32(42).fork()).ldelim();
        }
        if (message.rotatedAt !== undefined) {
            timestamp_1.Timestamp.encode(message.rotatedAt, writer.uint32(50).fork()).ldelim();
        }
        if (!message.rotationCount.isZero()) {
            writer.uint32(56).int64(message.rotationCount);
        }
        if (message.chain !== "") {
            writer.uint32(66).string(message.chain);
        }
        if (!message.snapshotCounter.isZero()) {
            writer.uint32(72).int64(message.snapshotCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.role = reader.int32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.ecdsaKey = exports.Key_ECDSAKey.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.multisigKey = exports.Key_MultisigKey.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.rotatedAt = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.rotationCount = reader.int64();
                    break;
                case 8:
                    message.chain = reader.string();
                    break;
                case 9:
                    message.snapshotCounter = reader.int64();
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
            role: isSet(object.role) ? keyRoleFromJSON(object.role) : 0,
            type: isSet(object.type) ? keyTypeFromJSON(object.type) : 0,
            ecdsaKey: isSet(object.ecdsaKey) ? exports.Key_ECDSAKey.fromJSON(object.ecdsaKey) : undefined,
            multisigKey: isSet(object.multisigKey) ? exports.Key_MultisigKey.fromJSON(object.multisigKey) : undefined,
            rotatedAt: isSet(object.rotatedAt) ? fromJsonTimestamp(object.rotatedAt) : undefined,
            rotationCount: isSet(object.rotationCount) ? long_1.default.fromValue(object.rotationCount) : long_1.default.ZERO,
            chain: isSet(object.chain) ? String(object.chain) : "",
            snapshotCounter: isSet(object.snapshotCounter) ? long_1.default.fromValue(object.snapshotCounter) : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.role !== undefined && (obj.role = keyRoleToJSON(message.role));
        message.type !== undefined && (obj.type = keyTypeToJSON(message.type));
        message.ecdsaKey !== undefined &&
            (obj.ecdsaKey = message.ecdsaKey ? exports.Key_ECDSAKey.toJSON(message.ecdsaKey) : undefined);
        message.multisigKey !== undefined &&
            (obj.multisigKey = message.multisigKey ? exports.Key_MultisigKey.toJSON(message.multisigKey) : undefined);
        message.rotatedAt !== undefined && (obj.rotatedAt = fromTimestamp(message.rotatedAt).toISOString());
        message.rotationCount !== undefined &&
            (obj.rotationCount = (message.rotationCount || long_1.default.ZERO).toString());
        message.chain !== undefined && (obj.chain = message.chain);
        message.snapshotCounter !== undefined &&
            (obj.snapshotCounter = (message.snapshotCounter || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseKey();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.role = (_b = object.role) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.ecdsaKey =
            object.ecdsaKey !== undefined && object.ecdsaKey !== null
                ? exports.Key_ECDSAKey.fromPartial(object.ecdsaKey)
                : undefined;
        message.multisigKey =
            object.multisigKey !== undefined && object.multisigKey !== null
                ? exports.Key_MultisigKey.fromPartial(object.multisigKey)
                : undefined;
        message.rotatedAt =
            object.rotatedAt !== undefined && object.rotatedAt !== null
                ? timestamp_1.Timestamp.fromPartial(object.rotatedAt)
                : undefined;
        message.rotationCount =
            object.rotationCount !== undefined && object.rotationCount !== null
                ? long_1.default.fromValue(object.rotationCount)
                : long_1.default.ZERO;
        message.chain = (_d = object.chain) !== null && _d !== void 0 ? _d : "";
        message.snapshotCounter =
            object.snapshotCounter !== undefined && object.snapshotCounter !== null
                ? long_1.default.fromValue(object.snapshotCounter)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseKey_ECDSAKey() {
    return { value: new Uint8Array() };
}
exports.Key_ECDSAKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value.length !== 0) {
            writer.uint32(10).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKey_ECDSAKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.bytes();
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
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseKey_ECDSAKey();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseKey_MultisigKey() {
    return { values: [], threshold: long_1.default.ZERO };
}
exports.Key_MultisigKey = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.values) {
            writer.uint32(10).bytes(v);
        }
        if (!message.threshold.isZero()) {
            writer.uint32(16).int64(message.threshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKey_MultisigKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(reader.bytes());
                    break;
                case 2:
                    message.threshold = reader.int64();
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
            values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? object.values.map((e) => bytesFromBase64(e)) : [],
            threshold: isSet(object.threshold) ? long_1.default.fromValue(object.threshold) : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.values = [];
        }
        message.threshold !== undefined && (obj.threshold = (message.threshold || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseKey_MultisigKey();
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.threshold =
            object.threshold !== undefined && object.threshold !== null
                ? long_1.default.fromValue(object.threshold)
                : long_1.default.ZERO;
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
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return toTimestamp(o);
    }
    else if (typeof o === "string") {
        return toTimestamp(new Date(o));
    }
    else {
        return timestamp_1.Timestamp.fromJSON(o);
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=types.js.map