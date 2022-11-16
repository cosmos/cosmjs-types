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
exports.SigKeyPair = exports.KeyRequirement = exports.keyShareDistributionPolicyToJSON = exports.keyShareDistributionPolicyFromJSON = exports.KeyShareDistributionPolicy = exports.keyTypeToJSON = exports.keyTypeFromJSON = exports.KeyType = exports.keyRoleToJSON = exports.keyRoleFromJSON = exports.KeyRole = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const threshold_1 = require("../../../../axelar/utils/v1beta1/threshold");
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