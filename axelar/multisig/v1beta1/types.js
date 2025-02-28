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
exports.KeyEpoch = exports.SigningSession = exports.MultiSig_SigsEntry = exports.MultiSig = exports.KeygenSession_IsPubKeyReceivedEntry = exports.KeygenSession = exports.Key_PubKeysEntry = exports.Key = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/snapshot/exported/v1beta1/types");
const threshold_1 = require("../../../axelar/utils/v1beta1/threshold");
const types_2 = require("../../../axelar/multisig/exported/v1beta1/types");
const any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "axelar.multisig.v1beta1";
function createBaseKey() {
    return { id: "", snapshot: undefined, pubKeys: {}, signingThreshold: undefined, state: 0 };
}
exports.Key = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.snapshot !== undefined) {
            types_1.Snapshot.encode(message.snapshot, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.pubKeys).forEach(([key, value]) => {
            exports.Key_PubKeysEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        if (message.signingThreshold !== undefined) {
            threshold_1.Threshold.encode(message.signingThreshold, writer.uint32(34).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(40).int32(message.state);
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
                    message.snapshot = types_1.Snapshot.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = exports.Key_PubKeysEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.pubKeys[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.signingThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.state = reader.int32();
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
            snapshot: isSet(object.snapshot) ? types_1.Snapshot.fromJSON(object.snapshot) : undefined,
            pubKeys: isObject(object.pubKeys)
                ? Object.entries(object.pubKeys).reduce((acc, [key, value]) => {
                    acc[key] = bytesFromBase64(value);
                    return acc;
                }, {})
                : {},
            signingThreshold: isSet(object.signingThreshold)
                ? threshold_1.Threshold.fromJSON(object.signingThreshold)
                : undefined,
            state: isSet(object.state) ? (0, types_2.keyStateFromJSON)(object.state) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.snapshot !== undefined &&
            (obj.snapshot = message.snapshot ? types_1.Snapshot.toJSON(message.snapshot) : undefined);
        obj.pubKeys = {};
        if (message.pubKeys) {
            Object.entries(message.pubKeys).forEach(([k, v]) => {
                obj.pubKeys[k] = base64FromBytes(v);
            });
        }
        message.signingThreshold !== undefined &&
            (obj.signingThreshold = message.signingThreshold
                ? threshold_1.Threshold.toJSON(message.signingThreshold)
                : undefined);
        message.state !== undefined && (obj.state = (0, types_2.keyStateToJSON)(message.state));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseKey();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.snapshot =
            object.snapshot !== undefined && object.snapshot !== null
                ? types_1.Snapshot.fromPartial(object.snapshot)
                : undefined;
        message.pubKeys = Object.entries((_b = object.pubKeys) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.signingThreshold =
            object.signingThreshold !== undefined && object.signingThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.signingThreshold)
                : undefined;
        message.state = (_c = object.state) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseKey_PubKeysEntry() {
    return { key: "", value: new Uint8Array() };
}
exports.Key_PubKeysEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKey_PubKeysEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKey_PubKeysEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseKeygenSession() {
    return {
        key: undefined,
        state: 0,
        keygenThreshold: undefined,
        expiresAt: long_1.default.ZERO,
        completedAt: long_1.default.ZERO,
        isPubKeyReceived: {},
        gracePeriod: long_1.default.ZERO,
    };
}
exports.KeygenSession = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== undefined) {
            exports.Key.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.keygenThreshold !== undefined) {
            threshold_1.Threshold.encode(message.keygenThreshold, writer.uint32(26).fork()).ldelim();
        }
        if (!message.expiresAt.isZero()) {
            writer.uint32(32).int64(message.expiresAt);
        }
        if (!message.completedAt.isZero()) {
            writer.uint32(40).int64(message.completedAt);
        }
        Object.entries(message.isPubKeyReceived).forEach(([key, value]) => {
            exports.KeygenSession_IsPubKeyReceivedEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (!message.gracePeriod.isZero()) {
            writer.uint32(56).int64(message.gracePeriod);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenSession();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = exports.Key.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.keygenThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expiresAt = reader.int64();
                    break;
                case 5:
                    message.completedAt = reader.int64();
                    break;
                case 6:
                    const entry6 = exports.KeygenSession_IsPubKeyReceivedEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.isPubKeyReceived[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.gracePeriod = reader.int64();
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
            key: isSet(object.key) ? exports.Key.fromJSON(object.key) : undefined,
            state: isSet(object.state) ? (0, types_2.multisigStateFromJSON)(object.state) : 0,
            keygenThreshold: isSet(object.keygenThreshold) ? threshold_1.Threshold.fromJSON(object.keygenThreshold) : undefined,
            expiresAt: isSet(object.expiresAt) ? long_1.default.fromValue(object.expiresAt) : long_1.default.ZERO,
            completedAt: isSet(object.completedAt) ? long_1.default.fromValue(object.completedAt) : long_1.default.ZERO,
            isPubKeyReceived: isObject(object.isPubKeyReceived)
                ? Object.entries(object.isPubKeyReceived).reduce((acc, [key, value]) => {
                    acc[key] = Boolean(value);
                    return acc;
                }, {})
                : {},
            gracePeriod: isSet(object.gracePeriod) ? long_1.default.fromValue(object.gracePeriod) : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key ? exports.Key.toJSON(message.key) : undefined);
        message.state !== undefined && (obj.state = (0, types_2.multisigStateToJSON)(message.state));
        message.keygenThreshold !== undefined &&
            (obj.keygenThreshold = message.keygenThreshold ? threshold_1.Threshold.toJSON(message.keygenThreshold) : undefined);
        message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || long_1.default.ZERO).toString());
        message.completedAt !== undefined && (obj.completedAt = (message.completedAt || long_1.default.ZERO).toString());
        obj.isPubKeyReceived = {};
        if (message.isPubKeyReceived) {
            Object.entries(message.isPubKeyReceived).forEach(([k, v]) => {
                obj.isPubKeyReceived[k] = v;
            });
        }
        message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKeygenSession();
        message.key = object.key !== undefined && object.key !== null ? exports.Key.fromPartial(object.key) : undefined;
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.keygenThreshold =
            object.keygenThreshold !== undefined && object.keygenThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.keygenThreshold)
                : undefined;
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? long_1.default.fromValue(object.expiresAt)
                : long_1.default.ZERO;
        message.completedAt =
            object.completedAt !== undefined && object.completedAt !== null
                ? long_1.default.fromValue(object.completedAt)
                : long_1.default.ZERO;
        message.isPubKeyReceived = Object.entries((_b = object.isPubKeyReceived) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Boolean(value);
            }
            return acc;
        }, {});
        message.gracePeriod =
            object.gracePeriod !== undefined && object.gracePeriod !== null
                ? long_1.default.fromValue(object.gracePeriod)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseKeygenSession_IsPubKeyReceivedEntry() {
    return { key: "", value: false };
}
exports.KeygenSession_IsPubKeyReceivedEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value === true) {
            writer.uint32(16).bool(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenSession_IsPubKeyReceivedEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.bool();
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
            value: isSet(object.value) ? Boolean(object.value) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKeygenSession_IsPubKeyReceivedEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseMultiSig() {
    return { keyId: "", payloadHash: new Uint8Array(), sigs: {} };
}
exports.MultiSig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(18).bytes(message.payloadHash);
        }
        Object.entries(message.sigs).forEach(([key, value]) => {
            exports.MultiSig_SigsEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.payloadHash = reader.bytes();
                    break;
                case 3:
                    const entry3 = exports.MultiSig_SigsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.sigs[entry3.key] = entry3.value;
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
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            sigs: isObject(object.sigs)
                ? Object.entries(object.sigs).reduce((acc, [key, value]) => {
                    acc[key] = bytesFromBase64(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.payloadHash !== undefined &&
            (obj.payloadHash = base64FromBytes(message.payloadHash !== undefined ? message.payloadHash : new Uint8Array()));
        obj.sigs = {};
        if (message.sigs) {
            Object.entries(message.sigs).forEach(([k, v]) => {
                obj.sigs[k] = base64FromBytes(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMultiSig();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.payloadHash = (_b = object.payloadHash) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.sigs = Object.entries((_c = object.sigs) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseMultiSig_SigsEntry() {
    return { key: "", value: new Uint8Array() };
}
exports.MultiSig_SigsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiSig_SigsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMultiSig_SigsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseSigningSession() {
    return {
        id: long_1.default.UZERO,
        multiSig: undefined,
        state: 0,
        key: undefined,
        expiresAt: long_1.default.ZERO,
        completedAt: long_1.default.ZERO,
        gracePeriod: long_1.default.ZERO,
        module: "",
        moduleMetadata: undefined,
    };
}
exports.SigningSession = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.multiSig !== undefined) {
            exports.MultiSig.encode(message.multiSig, writer.uint32(18).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.key !== undefined) {
            exports.Key.encode(message.key, writer.uint32(34).fork()).ldelim();
        }
        if (!message.expiresAt.isZero()) {
            writer.uint32(40).int64(message.expiresAt);
        }
        if (!message.completedAt.isZero()) {
            writer.uint32(48).int64(message.completedAt);
        }
        if (!message.gracePeriod.isZero()) {
            writer.uint32(56).int64(message.gracePeriod);
        }
        if (message.module !== "") {
            writer.uint32(66).string(message.module);
        }
        if (message.moduleMetadata !== undefined) {
            any_1.Any.encode(message.moduleMetadata, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningSession();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.multiSig = exports.MultiSig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.key = exports.Key.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.expiresAt = reader.int64();
                    break;
                case 6:
                    message.completedAt = reader.int64();
                    break;
                case 7:
                    message.gracePeriod = reader.int64();
                    break;
                case 8:
                    message.module = reader.string();
                    break;
                case 9:
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            multiSig: isSet(object.multiSig) ? exports.MultiSig.fromJSON(object.multiSig) : undefined,
            state: isSet(object.state) ? (0, types_2.multisigStateFromJSON)(object.state) : 0,
            key: isSet(object.key) ? exports.Key.fromJSON(object.key) : undefined,
            expiresAt: isSet(object.expiresAt) ? long_1.default.fromValue(object.expiresAt) : long_1.default.ZERO,
            completedAt: isSet(object.completedAt) ? long_1.default.fromValue(object.completedAt) : long_1.default.ZERO,
            gracePeriod: isSet(object.gracePeriod) ? long_1.default.fromValue(object.gracePeriod) : long_1.default.ZERO,
            module: isSet(object.module) ? String(object.module) : "",
            moduleMetadata: isSet(object.moduleMetadata) ? any_1.Any.fromJSON(object.moduleMetadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.multiSig !== undefined &&
            (obj.multiSig = message.multiSig ? exports.MultiSig.toJSON(message.multiSig) : undefined);
        message.state !== undefined && (obj.state = (0, types_2.multisigStateToJSON)(message.state));
        message.key !== undefined && (obj.key = message.key ? exports.Key.toJSON(message.key) : undefined);
        message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || long_1.default.ZERO).toString());
        message.completedAt !== undefined && (obj.completedAt = (message.completedAt || long_1.default.ZERO).toString());
        message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || long_1.default.ZERO).toString());
        message.module !== undefined && (obj.module = message.module);
        message.moduleMetadata !== undefined &&
            (obj.moduleMetadata = message.moduleMetadata ? any_1.Any.toJSON(message.moduleMetadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSigningSession();
        message.id = object.id !== undefined && object.id !== null ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.multiSig =
            object.multiSig !== undefined && object.multiSig !== null
                ? exports.MultiSig.fromPartial(object.multiSig)
                : undefined;
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.key = object.key !== undefined && object.key !== null ? exports.Key.fromPartial(object.key) : undefined;
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? long_1.default.fromValue(object.expiresAt)
                : long_1.default.ZERO;
        message.completedAt =
            object.completedAt !== undefined && object.completedAt !== null
                ? long_1.default.fromValue(object.completedAt)
                : long_1.default.ZERO;
        message.gracePeriod =
            object.gracePeriod !== undefined && object.gracePeriod !== null
                ? long_1.default.fromValue(object.gracePeriod)
                : long_1.default.ZERO;
        message.module = (_b = object.module) !== null && _b !== void 0 ? _b : "";
        message.moduleMetadata =
            object.moduleMetadata !== undefined && object.moduleMetadata !== null
                ? any_1.Any.fromPartial(object.moduleMetadata)
                : undefined;
        return message;
    },
};
function createBaseKeyEpoch() {
    return { epoch: long_1.default.UZERO, chain: "", keyId: "" };
}
exports.KeyEpoch = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.epoch.isZero()) {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyEpoch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epoch = reader.uint64();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
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
            epoch: isSet(object.epoch) ? long_1.default.fromValue(object.epoch) : long_1.default.UZERO,
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.epoch !== undefined && (obj.epoch = (message.epoch || long_1.default.UZERO).toString());
        message.chain !== undefined && (obj.chain = message.chain);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKeyEpoch();
        message.epoch =
            object.epoch !== undefined && object.epoch !== null ? long_1.default.fromValue(object.epoch) : long_1.default.UZERO;
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.keyId = (_b = object.keyId) !== null && _b !== void 0 ? _b : "";
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=types.js.map