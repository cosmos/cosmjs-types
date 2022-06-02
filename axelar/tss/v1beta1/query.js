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
exports.ValidatorMultisigKeysResponse_KeysEntry = exports.ValidatorMultisigKeysResponse_Keys = exports.ValidatorMultisigKeysResponse = exports.ValidatorMultisigKeysRequest = exports.AssignableKeyResponse = exports.AssignableKeyRequest = exports.NextKeyIDResponse = exports.NextKeyIDRequest = exports.QueryExternalKeyIDResponse = exports.QueryActiveOldKeysResponse = exports.QueryActiveOldKeysValidatorResponse_KeyInfo = exports.QueryActiveOldKeysValidatorResponse = exports.QueryDeactivatedOperatorsResponse = exports.QueryKeyShareResponse_ShareInfo = exports.QueryKeyShareResponse = exports.QueryRecoveryResponse = exports.QueryKeyResponse_MultisigKey = exports.QueryKeyResponse_ECDSAKey = exports.QueryKeyResponse_Key = exports.QueryKeyResponse = exports.QuerySignatureResponse_MultisigSignature = exports.QuerySignatureResponse_ThresholdSignature = exports.QuerySignatureResponse_Signature = exports.QuerySignatureResponse = exports.voteStatusToJSON = exports.voteStatusFromJSON = exports.VoteStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/tss/exported/v1beta1/types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const tofnd_1 = require("../../../axelar/tss/tofnd/v1beta1/tofnd");
exports.protobufPackage = "axelar.tss.v1beta1";
var VoteStatus;
(function (VoteStatus) {
    VoteStatus[VoteStatus["VOTE_STATUS_UNSPECIFIED"] = 0] = "VOTE_STATUS_UNSPECIFIED";
    VoteStatus[VoteStatus["VOTE_STATUS_NOT_FOUND"] = 1] = "VOTE_STATUS_NOT_FOUND";
    VoteStatus[VoteStatus["VOTE_STATUS_PENDING"] = 2] = "VOTE_STATUS_PENDING";
    VoteStatus[VoteStatus["VOTE_STATUS_DECIDED"] = 3] = "VOTE_STATUS_DECIDED";
    VoteStatus[VoteStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteStatus = exports.VoteStatus || (exports.VoteStatus = {}));
function voteStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_STATUS_UNSPECIFIED":
            return VoteStatus.VOTE_STATUS_UNSPECIFIED;
        case 1:
        case "VOTE_STATUS_NOT_FOUND":
            return VoteStatus.VOTE_STATUS_NOT_FOUND;
        case 2:
        case "VOTE_STATUS_PENDING":
            return VoteStatus.VOTE_STATUS_PENDING;
        case 3:
        case "VOTE_STATUS_DECIDED":
            return VoteStatus.VOTE_STATUS_DECIDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteStatus.UNRECOGNIZED;
    }
}
exports.voteStatusFromJSON = voteStatusFromJSON;
function voteStatusToJSON(object) {
    switch (object) {
        case VoteStatus.VOTE_STATUS_UNSPECIFIED:
            return "VOTE_STATUS_UNSPECIFIED";
        case VoteStatus.VOTE_STATUS_NOT_FOUND:
            return "VOTE_STATUS_NOT_FOUND";
        case VoteStatus.VOTE_STATUS_PENDING:
            return "VOTE_STATUS_PENDING";
        case VoteStatus.VOTE_STATUS_DECIDED:
            return "VOTE_STATUS_DECIDED";
        case VoteStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.voteStatusToJSON = voteStatusToJSON;
function createBaseQuerySignatureResponse() {
    return { thresholdSignature: undefined, multisigSignature: undefined };
}
exports.QuerySignatureResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.thresholdSignature !== undefined) {
            exports.QuerySignatureResponse_ThresholdSignature.encode(message.thresholdSignature, writer.uint32(10).fork()).ldelim();
        }
        if (message.multisigSignature !== undefined) {
            exports.QuerySignatureResponse_MultisigSignature.encode(message.multisigSignature, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySignatureResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.thresholdSignature = exports.QuerySignatureResponse_ThresholdSignature.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multisigSignature = exports.QuerySignatureResponse_MultisigSignature.decode(reader, reader.uint32());
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
            thresholdSignature: isSet(object.thresholdSignature)
                ? exports.QuerySignatureResponse_ThresholdSignature.fromJSON(object.thresholdSignature)
                : undefined,
            multisigSignature: isSet(object.multisigSignature)
                ? exports.QuerySignatureResponse_MultisigSignature.fromJSON(object.multisigSignature)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.thresholdSignature !== undefined &&
            (obj.thresholdSignature = message.thresholdSignature
                ? exports.QuerySignatureResponse_ThresholdSignature.toJSON(message.thresholdSignature)
                : undefined);
        message.multisigSignature !== undefined &&
            (obj.multisigSignature = message.multisigSignature
                ? exports.QuerySignatureResponse_MultisigSignature.toJSON(message.multisigSignature)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySignatureResponse();
        message.thresholdSignature =
            object.thresholdSignature !== undefined && object.thresholdSignature !== null
                ? exports.QuerySignatureResponse_ThresholdSignature.fromPartial(object.thresholdSignature)
                : undefined;
        message.multisigSignature =
            object.multisigSignature !== undefined && object.multisigSignature !== null
                ? exports.QuerySignatureResponse_MultisigSignature.fromPartial(object.multisigSignature)
                : undefined;
        return message;
    },
};
function createBaseQuerySignatureResponse_Signature() {
    return { r: "", s: "" };
}
exports.QuerySignatureResponse_Signature = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.r !== "") {
            writer.uint32(10).string(message.r);
        }
        if (message.s !== "") {
            writer.uint32(18).string(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySignatureResponse_Signature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.r = reader.string();
                    break;
                case 2:
                    message.s = reader.string();
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
            r: isSet(object.r) ? String(object.r) : "",
            s: isSet(object.s) ? String(object.s) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.r !== undefined && (obj.r = message.r);
        message.s !== undefined && (obj.s = message.s);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySignatureResponse_Signature();
        message.r = (_a = object.r) !== null && _a !== void 0 ? _a : "";
        message.s = (_b = object.s) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQuerySignatureResponse_ThresholdSignature() {
    return { voteStatus: 0, signature: undefined };
}
exports.QuerySignatureResponse_ThresholdSignature = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.voteStatus !== 0) {
            writer.uint32(8).int32(message.voteStatus);
        }
        if (message.signature !== undefined) {
            exports.QuerySignatureResponse_Signature.encode(message.signature, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySignatureResponse_ThresholdSignature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voteStatus = reader.int32();
                    break;
                case 2:
                    message.signature = exports.QuerySignatureResponse_Signature.decode(reader, reader.uint32());
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
            voteStatus: isSet(object.voteStatus) ? voteStatusFromJSON(object.voteStatus) : 0,
            signature: isSet(object.signature)
                ? exports.QuerySignatureResponse_Signature.fromJSON(object.signature)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.voteStatus !== undefined && (obj.voteStatus = voteStatusToJSON(message.voteStatus));
        message.signature !== undefined &&
            (obj.signature = message.signature
                ? exports.QuerySignatureResponse_Signature.toJSON(message.signature)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySignatureResponse_ThresholdSignature();
        message.voteStatus = (_a = object.voteStatus) !== null && _a !== void 0 ? _a : 0;
        message.signature =
            object.signature !== undefined && object.signature !== null
                ? exports.QuerySignatureResponse_Signature.fromPartial(object.signature)
                : undefined;
        return message;
    },
};
function createBaseQuerySignatureResponse_MultisigSignature() {
    return { sigStatus: 0, signatures: [] };
}
exports.QuerySignatureResponse_MultisigSignature = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sigStatus !== 0) {
            writer.uint32(8).int32(message.sigStatus);
        }
        for (const v of message.signatures) {
            exports.QuerySignatureResponse_Signature.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySignatureResponse_MultisigSignature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sigStatus = reader.int32();
                    break;
                case 2:
                    message.signatures.push(exports.QuerySignatureResponse_Signature.decode(reader, reader.uint32()));
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
            sigStatus: isSet(object.sigStatus) ? (0, types_1.sigStatusFromJSON)(object.sigStatus) : 0,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures)
                ? object.signatures.map((e) => exports.QuerySignatureResponse_Signature.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sigStatus !== undefined && (obj.sigStatus = (0, types_1.sigStatusToJSON)(message.sigStatus));
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? exports.QuerySignatureResponse_Signature.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySignatureResponse_MultisigSignature();
        message.sigStatus = (_a = object.sigStatus) !== null && _a !== void 0 ? _a : 0;
        message.signatures = ((_b = object.signatures) === null || _b === void 0 ? void 0 : _b.map((e) => exports.QuerySignatureResponse_Signature.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryKeyResponse() {
    return { ecdsaKey: undefined, multisigKey: undefined, role: 0, rotatedAt: undefined };
}
exports.QueryKeyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ecdsaKey !== undefined) {
            exports.QueryKeyResponse_ECDSAKey.encode(message.ecdsaKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.multisigKey !== undefined) {
            exports.QueryKeyResponse_MultisigKey.encode(message.multisigKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.role !== 0) {
            writer.uint32(24).int32(message.role);
        }
        if (message.rotatedAt !== undefined) {
            timestamp_1.Timestamp.encode(message.rotatedAt, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ecdsaKey = exports.QueryKeyResponse_ECDSAKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multisigKey = exports.QueryKeyResponse_MultisigKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.role = reader.int32();
                    break;
                case 4:
                    message.rotatedAt = timestamp_1.Timestamp.decode(reader, reader.uint32());
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
            ecdsaKey: isSet(object.ecdsaKey) ? exports.QueryKeyResponse_ECDSAKey.fromJSON(object.ecdsaKey) : undefined,
            multisigKey: isSet(object.multisigKey)
                ? exports.QueryKeyResponse_MultisigKey.fromJSON(object.multisigKey)
                : undefined,
            role: isSet(object.role) ? (0, types_1.keyRoleFromJSON)(object.role) : 0,
            rotatedAt: isSet(object.rotatedAt) ? fromJsonTimestamp(object.rotatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.ecdsaKey !== undefined &&
            (obj.ecdsaKey = message.ecdsaKey ? exports.QueryKeyResponse_ECDSAKey.toJSON(message.ecdsaKey) : undefined);
        message.multisigKey !== undefined &&
            (obj.multisigKey = message.multisigKey
                ? exports.QueryKeyResponse_MultisigKey.toJSON(message.multisigKey)
                : undefined);
        message.role !== undefined && (obj.role = (0, types_1.keyRoleToJSON)(message.role));
        message.rotatedAt !== undefined && (obj.rotatedAt = fromTimestamp(message.rotatedAt).toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryKeyResponse();
        message.ecdsaKey =
            object.ecdsaKey !== undefined && object.ecdsaKey !== null
                ? exports.QueryKeyResponse_ECDSAKey.fromPartial(object.ecdsaKey)
                : undefined;
        message.multisigKey =
            object.multisigKey !== undefined && object.multisigKey !== null
                ? exports.QueryKeyResponse_MultisigKey.fromPartial(object.multisigKey)
                : undefined;
        message.role = (_a = object.role) !== null && _a !== void 0 ? _a : 0;
        message.rotatedAt =
            object.rotatedAt !== undefined && object.rotatedAt !== null
                ? timestamp_1.Timestamp.fromPartial(object.rotatedAt)
                : undefined;
        return message;
    },
};
function createBaseQueryKeyResponse_Key() {
    return { x: "", y: "" };
}
exports.QueryKeyResponse_Key = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.x !== "") {
            writer.uint32(10).string(message.x);
        }
        if (message.y !== "") {
            writer.uint32(18).string(message.y);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryKeyResponse_Key();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.x = reader.string();
                    break;
                case 2:
                    message.y = reader.string();
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
            x: isSet(object.x) ? String(object.x) : "",
            y: isSet(object.y) ? String(object.y) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.x !== undefined && (obj.x = message.x);
        message.y !== undefined && (obj.y = message.y);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryKeyResponse_Key();
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : "";
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryKeyResponse_ECDSAKey() {
    return { voteStatus: 0, key: undefined };
}
exports.QueryKeyResponse_ECDSAKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.voteStatus !== 0) {
            writer.uint32(8).int32(message.voteStatus);
        }
        if (message.key !== undefined) {
            exports.QueryKeyResponse_Key.encode(message.key, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryKeyResponse_ECDSAKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voteStatus = reader.int32();
                    break;
                case 2:
                    message.key = exports.QueryKeyResponse_Key.decode(reader, reader.uint32());
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
            voteStatus: isSet(object.voteStatus) ? voteStatusFromJSON(object.voteStatus) : 0,
            key: isSet(object.key) ? exports.QueryKeyResponse_Key.fromJSON(object.key) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.voteStatus !== undefined && (obj.voteStatus = voteStatusToJSON(message.voteStatus));
        message.key !== undefined &&
            (obj.key = message.key ? exports.QueryKeyResponse_Key.toJSON(message.key) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryKeyResponse_ECDSAKey();
        message.voteStatus = (_a = object.voteStatus) !== null && _a !== void 0 ? _a : 0;
        message.key =
            object.key !== undefined && object.key !== null
                ? exports.QueryKeyResponse_Key.fromPartial(object.key)
                : undefined;
        return message;
    },
};
function createBaseQueryKeyResponse_MultisigKey() {
    return { threshold: long_1.default.ZERO, key: [] };
}
exports.QueryKeyResponse_MultisigKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.threshold.isZero()) {
            writer.uint32(8).int64(message.threshold);
        }
        for (const v of message.key) {
            exports.QueryKeyResponse_Key.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryKeyResponse_MultisigKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.int64();
                    break;
                case 2:
                    message.key.push(exports.QueryKeyResponse_Key.decode(reader, reader.uint32()));
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
            threshold: isSet(object.threshold) ? long_1.default.fromValue(object.threshold) : long_1.default.ZERO,
            key: Array.isArray(object === null || object === void 0 ? void 0 : object.key) ? object.key.map((e) => exports.QueryKeyResponse_Key.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.threshold !== undefined && (obj.threshold = (message.threshold || long_1.default.ZERO).toString());
        if (message.key) {
            obj.key = message.key.map((e) => (e ? exports.QueryKeyResponse_Key.toJSON(e) : undefined));
        }
        else {
            obj.key = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryKeyResponse_MultisigKey();
        message.threshold =
            object.threshold !== undefined && object.threshold !== null
                ? long_1.default.fromValue(object.threshold)
                : long_1.default.ZERO;
        message.key = ((_a = object.key) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QueryKeyResponse_Key.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryRecoveryResponse() {
    return { partyUids: [], partyShareCounts: [], threshold: 0, keygenOutput: undefined };
}
exports.QueryRecoveryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.partyUids) {
            writer.uint32(10).string(v);
        }
        writer.uint32(18).fork();
        for (const v of message.partyShareCounts) {
            writer.uint32(v);
        }
        writer.ldelim();
        if (message.threshold !== 0) {
            writer.uint32(24).uint32(message.threshold);
        }
        if (message.keygenOutput !== undefined) {
            tofnd_1.KeygenOutput.encode(message.keygenOutput, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRecoveryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partyUids.push(reader.string());
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.partyShareCounts.push(reader.uint32());
                        }
                    }
                    else {
                        message.partyShareCounts.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.threshold = reader.uint32();
                    break;
                case 4:
                    message.keygenOutput = tofnd_1.KeygenOutput.decode(reader, reader.uint32());
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
            partyUids: Array.isArray(object === null || object === void 0 ? void 0 : object.partyUids) ? object.partyUids.map((e) => String(e)) : [],
            partyShareCounts: Array.isArray(object === null || object === void 0 ? void 0 : object.partyShareCounts)
                ? object.partyShareCounts.map((e) => Number(e))
                : [],
            threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
            keygenOutput: isSet(object.keygenOutput) ? tofnd_1.KeygenOutput.fromJSON(object.keygenOutput) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.partyUids) {
            obj.partyUids = message.partyUids.map((e) => e);
        }
        else {
            obj.partyUids = [];
        }
        if (message.partyShareCounts) {
            obj.partyShareCounts = message.partyShareCounts.map((e) => Math.round(e));
        }
        else {
            obj.partyShareCounts = [];
        }
        message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
        message.keygenOutput !== undefined &&
            (obj.keygenOutput = message.keygenOutput ? tofnd_1.KeygenOutput.toJSON(message.keygenOutput) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryRecoveryResponse();
        message.partyUids = ((_a = object.partyUids) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.partyShareCounts = ((_b = object.partyShareCounts) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.threshold = (_c = object.threshold) !== null && _c !== void 0 ? _c : 0;
        message.keygenOutput =
            object.keygenOutput !== undefined && object.keygenOutput !== null
                ? tofnd_1.KeygenOutput.fromPartial(object.keygenOutput)
                : undefined;
        return message;
    },
};
function createBaseQueryKeyShareResponse() {
    return { shareInfos: [] };
}
exports.QueryKeyShareResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.shareInfos) {
            exports.QueryKeyShareResponse_ShareInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryKeyShareResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareInfos.push(exports.QueryKeyShareResponse_ShareInfo.decode(reader, reader.uint32()));
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
            shareInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.shareInfos)
                ? object.shareInfos.map((e) => exports.QueryKeyShareResponse_ShareInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.shareInfos) {
            obj.shareInfos = message.shareInfos.map((e) => e ? exports.QueryKeyShareResponse_ShareInfo.toJSON(e) : undefined);
        }
        else {
            obj.shareInfos = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryKeyShareResponse();
        message.shareInfos = ((_a = object.shareInfos) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QueryKeyShareResponse_ShareInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryKeyShareResponse_ShareInfo() {
    return {
        keyId: "",
        keyChain: "",
        keyRole: "",
        snapshotBlockNumber: long_1.default.ZERO,
        validatorAddress: "",
        numValidatorShares: long_1.default.ZERO,
        numTotalShares: long_1.default.ZERO,
    };
}
exports.QueryKeyShareResponse_ShareInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.keyChain !== "") {
            writer.uint32(18).string(message.keyChain);
        }
        if (message.keyRole !== "") {
            writer.uint32(26).string(message.keyRole);
        }
        if (!message.snapshotBlockNumber.isZero()) {
            writer.uint32(32).int64(message.snapshotBlockNumber);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(42).string(message.validatorAddress);
        }
        if (!message.numValidatorShares.isZero()) {
            writer.uint32(48).int64(message.numValidatorShares);
        }
        if (!message.numTotalShares.isZero()) {
            writer.uint32(56).int64(message.numTotalShares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryKeyShareResponse_ShareInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.keyChain = reader.string();
                    break;
                case 3:
                    message.keyRole = reader.string();
                    break;
                case 4:
                    message.snapshotBlockNumber = reader.int64();
                    break;
                case 5:
                    message.validatorAddress = reader.string();
                    break;
                case 6:
                    message.numValidatorShares = reader.int64();
                    break;
                case 7:
                    message.numTotalShares = reader.int64();
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
            keyChain: isSet(object.keyChain) ? String(object.keyChain) : "",
            keyRole: isSet(object.keyRole) ? String(object.keyRole) : "",
            snapshotBlockNumber: isSet(object.snapshotBlockNumber)
                ? long_1.default.fromValue(object.snapshotBlockNumber)
                : long_1.default.ZERO,
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            numValidatorShares: isSet(object.numValidatorShares)
                ? long_1.default.fromValue(object.numValidatorShares)
                : long_1.default.ZERO,
            numTotalShares: isSet(object.numTotalShares) ? long_1.default.fromValue(object.numTotalShares) : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.keyChain !== undefined && (obj.keyChain = message.keyChain);
        message.keyRole !== undefined && (obj.keyRole = message.keyRole);
        message.snapshotBlockNumber !== undefined &&
            (obj.snapshotBlockNumber = (message.snapshotBlockNumber || long_1.default.ZERO).toString());
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.numValidatorShares !== undefined &&
            (obj.numValidatorShares = (message.numValidatorShares || long_1.default.ZERO).toString());
        message.numTotalShares !== undefined &&
            (obj.numTotalShares = (message.numTotalShares || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryKeyShareResponse_ShareInfo();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.keyChain = (_b = object.keyChain) !== null && _b !== void 0 ? _b : "";
        message.keyRole = (_c = object.keyRole) !== null && _c !== void 0 ? _c : "";
        message.snapshotBlockNumber =
            object.snapshotBlockNumber !== undefined && object.snapshotBlockNumber !== null
                ? long_1.default.fromValue(object.snapshotBlockNumber)
                : long_1.default.ZERO;
        message.validatorAddress = (_d = object.validatorAddress) !== null && _d !== void 0 ? _d : "";
        message.numValidatorShares =
            object.numValidatorShares !== undefined && object.numValidatorShares !== null
                ? long_1.default.fromValue(object.numValidatorShares)
                : long_1.default.ZERO;
        message.numTotalShares =
            object.numTotalShares !== undefined && object.numTotalShares !== null
                ? long_1.default.fromValue(object.numTotalShares)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseQueryDeactivatedOperatorsResponse() {
    return { operatorAddresses: [] };
}
exports.QueryDeactivatedOperatorsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.operatorAddresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeactivatedOperatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operatorAddresses.push(reader.string());
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
            operatorAddresses: Array.isArray(object === null || object === void 0 ? void 0 : object.operatorAddresses)
                ? object.operatorAddresses.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operatorAddresses) {
            obj.operatorAddresses = message.operatorAddresses.map((e) => e);
        }
        else {
            obj.operatorAddresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDeactivatedOperatorsResponse();
        message.operatorAddresses = ((_a = object.operatorAddresses) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryActiveOldKeysValidatorResponse() {
    return { keysInfo: [] };
}
exports.QueryActiveOldKeysValidatorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keysInfo) {
            exports.QueryActiveOldKeysValidatorResponse_KeyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryActiveOldKeysValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keysInfo.push(exports.QueryActiveOldKeysValidatorResponse_KeyInfo.decode(reader, reader.uint32()));
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
            keysInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.keysInfo)
                ? object.keysInfo.map((e) => exports.QueryActiveOldKeysValidatorResponse_KeyInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.keysInfo) {
            obj.keysInfo = message.keysInfo.map((e) => e ? exports.QueryActiveOldKeysValidatorResponse_KeyInfo.toJSON(e) : undefined);
        }
        else {
            obj.keysInfo = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryActiveOldKeysValidatorResponse();
        message.keysInfo =
            ((_a = object.keysInfo) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QueryActiveOldKeysValidatorResponse_KeyInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryActiveOldKeysValidatorResponse_KeyInfo() {
    return { id: "", chain: "", role: 0 };
}
exports.QueryActiveOldKeysValidatorResponse_KeyInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.role !== 0) {
            writer.uint32(24).int32(message.role);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryActiveOldKeysValidatorResponse_KeyInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.role = reader.int32();
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            role: isSet(object.role) ? Number(object.role) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.chain !== undefined && (obj.chain = message.chain);
        message.role !== undefined && (obj.role = Math.round(message.role));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryActiveOldKeysValidatorResponse_KeyInfo();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.role = (_c = object.role) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseQueryActiveOldKeysResponse() {
    return { keyIds: [] };
}
exports.QueryActiveOldKeysResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keyIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryActiveOldKeysResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyIds.push(reader.string());
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
            keyIds: Array.isArray(object === null || object === void 0 ? void 0 : object.keyIds) ? object.keyIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.keyIds) {
            obj.keyIds = message.keyIds.map((e) => e);
        }
        else {
            obj.keyIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryActiveOldKeysResponse();
        message.keyIds = ((_a = object.keyIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryExternalKeyIDResponse() {
    return { keyIds: [] };
}
exports.QueryExternalKeyIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keyIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalKeyIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyIds.push(reader.string());
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
            keyIds: Array.isArray(object === null || object === void 0 ? void 0 : object.keyIds) ? object.keyIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.keyIds) {
            obj.keyIds = message.keyIds.map((e) => e);
        }
        else {
            obj.keyIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExternalKeyIDResponse();
        message.keyIds = ((_a = object.keyIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseNextKeyIDRequest() {
    return { chain: "", keyRole: 0 };
}
exports.NextKeyIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.keyRole !== 0) {
            writer.uint32(16).int32(message.keyRole);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextKeyIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.keyRole = reader.int32();
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
            keyRole: isSet(object.keyRole) ? (0, types_1.keyRoleFromJSON)(object.keyRole) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.keyRole !== undefined && (obj.keyRole = (0, types_1.keyRoleToJSON)(message.keyRole));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseNextKeyIDRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.keyRole = (_b = object.keyRole) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseNextKeyIDResponse() {
    return { keyId: "" };
}
exports.NextKeyIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextKeyIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseNextKeyIDResponse();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAssignableKeyRequest() {
    return { chain: "", keyRole: 0 };
}
exports.AssignableKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.keyRole !== 0) {
            writer.uint32(16).int32(message.keyRole);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssignableKeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.keyRole = reader.int32();
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
            keyRole: isSet(object.keyRole) ? (0, types_1.keyRoleFromJSON)(object.keyRole) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.keyRole !== undefined && (obj.keyRole = (0, types_1.keyRoleToJSON)(message.keyRole));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAssignableKeyRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.keyRole = (_b = object.keyRole) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseAssignableKeyResponse() {
    return { assignable: false };
}
exports.AssignableKeyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.assignable === true) {
            writer.uint32(8).bool(message.assignable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssignableKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assignable = reader.bool();
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
            assignable: isSet(object.assignable) ? Boolean(object.assignable) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assignable !== undefined && (obj.assignable = message.assignable);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssignableKeyResponse();
        message.assignable = (_a = object.assignable) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseValidatorMultisigKeysRequest() {
    return { address: "" };
}
exports.ValidatorMultisigKeysRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMultisigKeysRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorMultisigKeysRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseValidatorMultisigKeysResponse() {
    return { keys: {} };
}
exports.ValidatorMultisigKeysResponse = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.keys).forEach(([key, value]) => {
            exports.ValidatorMultisigKeysResponse_KeysEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMultisigKeysResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.ValidatorMultisigKeysResponse_KeysEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.keys[entry1.key] = entry1.value;
                    }
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
            keys: isObject(object.keys)
                ? Object.entries(object.keys).reduce((acc, [key, value]) => {
                    acc[key] = exports.ValidatorMultisigKeysResponse_Keys.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        obj.keys = {};
        if (message.keys) {
            Object.entries(message.keys).forEach(([k, v]) => {
                obj.keys[k] = exports.ValidatorMultisigKeysResponse_Keys.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorMultisigKeysResponse();
        message.keys = Object.entries((_a = object.keys) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.ValidatorMultisigKeysResponse_Keys.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseValidatorMultisigKeysResponse_Keys() {
    return { keys: [] };
}
exports.ValidatorMultisigKeysResponse_Keys = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keys) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMultisigKeysResponse_Keys();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(reader.bytes());
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
            keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map((e) => bytesFromBase64(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorMultisigKeysResponse_Keys();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseValidatorMultisigKeysResponse_KeysEntry() {
    return { key: "", value: undefined };
}
exports.ValidatorMultisigKeysResponse_KeysEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.ValidatorMultisigKeysResponse_Keys.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMultisigKeysResponse_KeysEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.ValidatorMultisigKeysResponse_Keys.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.ValidatorMultisigKeysResponse_Keys.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.ValidatorMultisigKeysResponse_Keys.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorMultisigKeysResponse_KeysEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.ValidatorMultisigKeysResponse_Keys.fromPartial(object.value)
                : undefined;
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map