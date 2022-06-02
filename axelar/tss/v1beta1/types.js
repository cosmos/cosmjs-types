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
exports.ValidatorStatus = exports.ExternalKeys = exports.KeyRecoveryInfo_PrivateEntry = exports.KeyRecoveryInfo = exports.MultisigInfo_Info = exports.MultisigInfo = exports.KeyInfo = exports.KeygenVoteData = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/tss/exported/v1beta1/types");
exports.protobufPackage = "axelar.tss.v1beta1";
function createBaseKeygenVoteData() {
    return { pubKey: new Uint8Array(), groupRecoveryInfo: new Uint8Array() };
}
exports.KeygenVoteData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pubKey.length !== 0) {
            writer.uint32(10).bytes(message.pubKey);
        }
        if (message.groupRecoveryInfo.length !== 0) {
            writer.uint32(18).bytes(message.groupRecoveryInfo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenVoteData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = reader.bytes();
                    break;
                case 2:
                    message.groupRecoveryInfo = reader.bytes();
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
            groupRecoveryInfo: isSet(object.groupRecoveryInfo)
                ? bytesFromBase64(object.groupRecoveryInfo)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined &&
            (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
        message.groupRecoveryInfo !== undefined &&
            (obj.groupRecoveryInfo = base64FromBytes(message.groupRecoveryInfo !== undefined ? message.groupRecoveryInfo : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKeygenVoteData();
        message.pubKey = (_a = object.pubKey) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.groupRecoveryInfo = (_b = object.groupRecoveryInfo) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseKeyInfo() {
    return { keyId: "", keyRole: 0, keyType: 0 };
}
exports.KeyInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.keyRole !== 0) {
            writer.uint32(16).int32(message.keyRole);
        }
        if (message.keyType !== 0) {
            writer.uint32(24).int32(message.keyType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.keyRole = reader.int32();
                    break;
                case 3:
                    message.keyType = reader.int32();
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
            keyRole: isSet(object.keyRole) ? (0, types_1.keyRoleFromJSON)(object.keyRole) : 0,
            keyType: isSet(object.keyType) ? (0, types_1.keyTypeFromJSON)(object.keyType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.keyRole !== undefined && (obj.keyRole = (0, types_1.keyRoleToJSON)(message.keyRole));
        message.keyType !== undefined && (obj.keyType = (0, types_1.keyTypeToJSON)(message.keyType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseKeyInfo();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.keyRole = (_b = object.keyRole) !== null && _b !== void 0 ? _b : 0;
        message.keyType = (_c = object.keyType) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseMultisigInfo() {
    return { id: "", timeout: long_1.default.ZERO, targetNum: long_1.default.ZERO, infos: [] };
}
exports.MultisigInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (!message.timeout.isZero()) {
            writer.uint32(16).int64(message.timeout);
        }
        if (!message.targetNum.isZero()) {
            writer.uint32(24).int64(message.targetNum);
        }
        for (const v of message.infos) {
            exports.MultisigInfo_Info.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultisigInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.timeout = reader.int64();
                    break;
                case 3:
                    message.targetNum = reader.int64();
                    break;
                case 4:
                    message.infos.push(exports.MultisigInfo_Info.decode(reader, reader.uint32()));
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
            timeout: isSet(object.timeout) ? long_1.default.fromValue(object.timeout) : long_1.default.ZERO,
            targetNum: isSet(object.targetNum) ? long_1.default.fromValue(object.targetNum) : long_1.default.ZERO,
            infos: Array.isArray(object === null || object === void 0 ? void 0 : object.infos) ? object.infos.map((e) => exports.MultisigInfo_Info.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.timeout !== undefined && (obj.timeout = (message.timeout || long_1.default.ZERO).toString());
        message.targetNum !== undefined && (obj.targetNum = (message.targetNum || long_1.default.ZERO).toString());
        if (message.infos) {
            obj.infos = message.infos.map((e) => (e ? exports.MultisigInfo_Info.toJSON(e) : undefined));
        }
        else {
            obj.infos = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMultisigInfo();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.timeout =
            object.timeout !== undefined && object.timeout !== null ? long_1.default.fromValue(object.timeout) : long_1.default.ZERO;
        message.targetNum =
            object.targetNum !== undefined && object.targetNum !== null
                ? long_1.default.fromValue(object.targetNum)
                : long_1.default.ZERO;
        message.infos = ((_b = object.infos) === null || _b === void 0 ? void 0 : _b.map((e) => exports.MultisigInfo_Info.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMultisigInfo_Info() {
    return { participant: new Uint8Array(), data: [] };
}
exports.MultisigInfo_Info = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.participant.length !== 0) {
            writer.uint32(10).bytes(message.participant);
        }
        for (const v of message.data) {
            writer.uint32(18).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultisigInfo_Info();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.participant = reader.bytes();
                    break;
                case 2:
                    message.data.push(reader.bytes());
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
            participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => bytesFromBase64(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.participant !== undefined &&
            (obj.participant = base64FromBytes(message.participant !== undefined ? message.participant : new Uint8Array()));
        if (message.data) {
            obj.data = message.data.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMultisigInfo_Info();
        message.participant = (_a = object.participant) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.data = ((_b = object.data) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseKeyRecoveryInfo() {
    return { keyId: "", public: new Uint8Array(), private: {} };
}
exports.KeyRecoveryInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.public.length !== 0) {
            writer.uint32(18).bytes(message.public);
        }
        Object.entries(message.private).forEach(([key, value]) => {
            exports.KeyRecoveryInfo_PrivateEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyRecoveryInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.public = reader.bytes();
                    break;
                case 3:
                    const entry3 = exports.KeyRecoveryInfo_PrivateEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.private[entry3.key] = entry3.value;
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
            public: isSet(object.public) ? bytesFromBase64(object.public) : new Uint8Array(),
            private: isObject(object.private)
                ? Object.entries(object.private).reduce((acc, [key, value]) => {
                    acc[key] = bytesFromBase64(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.public !== undefined &&
            (obj.public = base64FromBytes(message.public !== undefined ? message.public : new Uint8Array()));
        obj.private = {};
        if (message.private) {
            Object.entries(message.private).forEach(([k, v]) => {
                obj.private[k] = base64FromBytes(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseKeyRecoveryInfo();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.public = (_b = object.public) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.private = Object.entries((_c = object.private) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseKeyRecoveryInfo_PrivateEntry() {
    return { key: "", value: new Uint8Array() };
}
exports.KeyRecoveryInfo_PrivateEntry = {
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
        const message = createBaseKeyRecoveryInfo_PrivateEntry();
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
        const message = createBaseKeyRecoveryInfo_PrivateEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseExternalKeys() {
    return { chain: "", keyIds: [] };
}
exports.ExternalKeys = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        for (const v of message.keyIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExternalKeys();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyIds: Array.isArray(object === null || object === void 0 ? void 0 : object.keyIds) ? object.keyIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        if (message.keyIds) {
            obj.keyIds = message.keyIds.map((e) => e);
        }
        else {
            obj.keyIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseExternalKeys();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.keyIds = ((_b = object.keyIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseValidatorStatus() {
    return { validator: new Uint8Array(), suspendedUntil: long_1.default.UZERO };
}
exports.ValidatorStatus = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator.length !== 0) {
            writer.uint32(10).bytes(message.validator);
        }
        if (!message.suspendedUntil.isZero()) {
            writer.uint32(16).uint64(message.suspendedUntil);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.bytes();
                    break;
                case 2:
                    message.suspendedUntil = reader.uint64();
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
            validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
            suspendedUntil: isSet(object.suspendedUntil) ? long_1.default.fromValue(object.suspendedUntil) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = base64FromBytes(message.validator !== undefined ? message.validator : new Uint8Array()));
        message.suspendedUntil !== undefined &&
            (obj.suspendedUntil = (message.suspendedUntil || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorStatus();
        message.validator = (_a = object.validator) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.suspendedUntil =
            object.suspendedUntil !== undefined && object.suspendedUntil !== null
                ? long_1.default.fromValue(object.suspendedUntil)
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=types.js.map