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
exports.KeygenOptInResponse = exports.KeygenOptInRequest = exports.KeygenOptOutResponse = exports.KeygenOptOutRequest = exports.RotateKeyResponse = exports.RotateKeyRequest = exports.SubmitSignatureResponse = exports.SubmitSignatureRequest = exports.SubmitPubKeyResponse = exports.SubmitPubKeyRequest = exports.StartKeygenResponse = exports.StartKeygenRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.multisig.v1beta1";
function createBaseStartKeygenRequest() {
    return { senderStr: "", keyId: "", sender: new Uint8Array() };
}
exports.StartKeygenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderStr !== "") {
            writer.uint32(10).string(message.senderStr);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        if (message.sender.length !== 0) {
            writer.uint32(26).bytes(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartKeygenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderStr = reader.string();
                    break;
                case 2:
                    message.keyId = reader.string();
                    break;
                case 3:
                    message.sender = reader.bytes();
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
            senderStr: isSet(object.senderStr) ? String(object.senderStr) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderStr !== undefined && (obj.senderStr = message.senderStr);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStartKeygenRequest();
        message.senderStr = (_a = object.senderStr) !== null && _a !== void 0 ? _a : "";
        message.keyId = (_b = object.keyId) !== null && _b !== void 0 ? _b : "";
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseStartKeygenResponse() {
    return {};
}
exports.StartKeygenResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartKeygenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseStartKeygenResponse();
        return message;
    },
};
function createBaseSubmitPubKeyRequest() {
    return {
        senderStr: "",
        keyId: "",
        pubKey: new Uint8Array(),
        signature: new Uint8Array(),
        sender: new Uint8Array(),
    };
}
exports.SubmitPubKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderStr !== "") {
            writer.uint32(10).string(message.senderStr);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        if (message.pubKey.length !== 0) {
            writer.uint32(26).bytes(message.pubKey);
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        if (message.sender.length !== 0) {
            writer.uint32(42).bytes(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubmitPubKeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderStr = reader.string();
                    break;
                case 2:
                    message.keyId = reader.string();
                    break;
                case 3:
                    message.pubKey = reader.bytes();
                    break;
                case 4:
                    message.signature = reader.bytes();
                    break;
                case 5:
                    message.sender = reader.bytes();
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
            senderStr: isSet(object.senderStr) ? String(object.senderStr) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderStr !== undefined && (obj.senderStr = message.senderStr);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.pubKey !== undefined &&
            (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSubmitPubKeyRequest();
        message.senderStr = (_a = object.senderStr) !== null && _a !== void 0 ? _a : "";
        message.keyId = (_b = object.keyId) !== null && _b !== void 0 ? _b : "";
        message.pubKey = (_c = object.pubKey) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.signature = (_d = object.signature) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.sender = (_e = object.sender) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseSubmitPubKeyResponse() {
    return {};
}
exports.SubmitPubKeyResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubmitPubKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseSubmitPubKeyResponse();
        return message;
    },
};
function createBaseSubmitSignatureRequest() {
    return { senderStr: "", sigId: long_1.default.UZERO, signature: new Uint8Array(), sender: new Uint8Array() };
}
exports.SubmitSignatureRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderStr !== "") {
            writer.uint32(10).string(message.senderStr);
        }
        if (!message.sigId.isZero()) {
            writer.uint32(16).uint64(message.sigId);
        }
        if (message.signature.length !== 0) {
            writer.uint32(26).bytes(message.signature);
        }
        if (message.sender.length !== 0) {
            writer.uint32(34).bytes(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubmitSignatureRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderStr = reader.string();
                    break;
                case 2:
                    message.sigId = reader.uint64();
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                case 4:
                    message.sender = reader.bytes();
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
            senderStr: isSet(object.senderStr) ? String(object.senderStr) : "",
            sigId: isSet(object.sigId) ? long_1.default.fromValue(object.sigId) : long_1.default.UZERO,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderStr !== undefined && (obj.senderStr = message.senderStr);
        message.sigId !== undefined && (obj.sigId = (message.sigId || long_1.default.UZERO).toString());
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSubmitSignatureRequest();
        message.senderStr = (_a = object.senderStr) !== null && _a !== void 0 ? _a : "";
        message.sigId =
            object.sigId !== undefined && object.sigId !== null ? long_1.default.fromValue(object.sigId) : long_1.default.UZERO;
        message.signature = (_b = object.signature) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseSubmitSignatureResponse() {
    return {};
}
exports.SubmitSignatureResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubmitSignatureResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseSubmitSignatureResponse();
        return message;
    },
};
function createBaseRotateKeyRequest() {
    return { senderStr: "", chain: "", keyId: "", sender: new Uint8Array() };
}
exports.RotateKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderStr !== "") {
            writer.uint32(10).string(message.senderStr);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        if (message.sender.length !== 0) {
            writer.uint32(34).bytes(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRotateKeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderStr = reader.string();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.keyId = reader.string();
                    break;
                case 4:
                    message.sender = reader.bytes();
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
            senderStr: isSet(object.senderStr) ? String(object.senderStr) : "",
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderStr !== undefined && (obj.senderStr = message.senderStr);
        message.chain !== undefined && (obj.chain = message.chain);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseRotateKeyRequest();
        message.senderStr = (_a = object.senderStr) !== null && _a !== void 0 ? _a : "";
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.keyId = (_c = object.keyId) !== null && _c !== void 0 ? _c : "";
        message.sender = (_d = object.sender) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseRotateKeyResponse() {
    return {};
}
exports.RotateKeyResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRotateKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRotateKeyResponse();
        return message;
    },
};
function createBaseKeygenOptOutRequest() {
    return { sender: new Uint8Array() };
}
exports.KeygenOptOutRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenOptOutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseKeygenOptOutRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseKeygenOptOutResponse() {
    return {};
}
exports.KeygenOptOutResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenOptOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseKeygenOptOutResponse();
        return message;
    },
};
function createBaseKeygenOptInRequest() {
    return { sender: new Uint8Array() };
}
exports.KeygenOptInRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenOptInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseKeygenOptInRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseKeygenOptInResponse() {
    return {};
}
exports.KeygenOptInResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenOptInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseKeygenOptInResponse();
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
//# sourceMappingURL=tx.js.map