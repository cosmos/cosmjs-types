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
exports.SubmitMultisigSignaturesResponse = exports.SubmitMultisigSignaturesRequest = exports.SubmitMultisigPubKeysResponse = exports.SubmitMultisigPubKeysRequest = exports.RegisterExternalKeysResponse = exports.RegisterExternalKeysRequest_ExternalKey = exports.RegisterExternalKeysRequest = exports.HeartBeatResponse = exports.HeartBeatRequest = exports.VoteSigResponse = exports.VoteSigRequest = exports.VotePubKeyResponse = exports.VotePubKeyRequest = exports.ProcessSignTrafficResponse = exports.ProcessSignTrafficRequest = exports.ProcessKeygenTrafficResponse = exports.ProcessKeygenTrafficRequest = exports.RotateKeyResponse = exports.RotateKeyRequest = exports.StartKeygenResponse = exports.StartKeygenRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/tss/v1beta1/types");
const types_2 = require("../../../axelar/tss/exported/v1beta1/types");
const tofnd_1 = require("../../../axelar/tss/tofnd/v1beta1/tofnd");
const types_3 = require("../../../axelar/vote/exported/v1beta1/types");
exports.protobufPackage = "axelar.tss.v1beta1";
function createBaseStartKeygenRequest() {
    return { sender: "", keyInfo: undefined };
}
exports.StartKeygenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.keyInfo !== undefined) {
            types_1.KeyInfo.encode(message.keyInfo, writer.uint32(18).fork()).ldelim();
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
                    message.sender = reader.string();
                    break;
                case 2:
                    message.keyInfo = types_1.KeyInfo.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            keyInfo: isSet(object.keyInfo) ? types_1.KeyInfo.fromJSON(object.keyInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.keyInfo !== undefined &&
            (obj.keyInfo = message.keyInfo ? types_1.KeyInfo.toJSON(message.keyInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStartKeygenRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.keyInfo =
            object.keyInfo !== undefined && object.keyInfo !== null
                ? types_1.KeyInfo.fromPartial(object.keyInfo)
                : undefined;
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
function createBaseRotateKeyRequest() {
    return { sender: new Uint8Array(), chain: "", keyRole: 0, keyId: "" };
}
exports.RotateKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.keyRole !== 0) {
            writer.uint32(24).int32(message.keyRole);
        }
        if (message.keyId !== "") {
            writer.uint32(34).string(message.keyId);
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
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.keyRole = reader.int32();
                    break;
                case 4:
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyRole: isSet(object.keyRole) ? (0, types_2.keyRoleFromJSON)(object.keyRole) : 0,
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.keyRole !== undefined && (obj.keyRole = (0, types_2.keyRoleToJSON)(message.keyRole));
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseRotateKeyRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.keyRole = (_c = object.keyRole) !== null && _c !== void 0 ? _c : 0;
        message.keyId = (_d = object.keyId) !== null && _d !== void 0 ? _d : "";
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
function createBaseProcessKeygenTrafficRequest() {
    return { sender: new Uint8Array(), sessionId: "", payload: undefined };
}
exports.ProcessKeygenTrafficRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.sessionId !== "") {
            writer.uint32(18).string(message.sessionId);
        }
        if (message.payload !== undefined) {
            tofnd_1.TrafficOut.encode(message.payload, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProcessKeygenTrafficRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.sessionId = reader.string();
                    break;
                case 3:
                    message.payload = tofnd_1.TrafficOut.decode(reader, reader.uint32());
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
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
            payload: isSet(object.payload) ? tofnd_1.TrafficOut.fromJSON(object.payload) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.payload !== undefined &&
            (obj.payload = message.payload ? tofnd_1.TrafficOut.toJSON(message.payload) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProcessKeygenTrafficRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.sessionId = (_b = object.sessionId) !== null && _b !== void 0 ? _b : "";
        message.payload =
            object.payload !== undefined && object.payload !== null
                ? tofnd_1.TrafficOut.fromPartial(object.payload)
                : undefined;
        return message;
    },
};
function createBaseProcessKeygenTrafficResponse() {
    return {};
}
exports.ProcessKeygenTrafficResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProcessKeygenTrafficResponse();
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
        const message = createBaseProcessKeygenTrafficResponse();
        return message;
    },
};
function createBaseProcessSignTrafficRequest() {
    return { sender: new Uint8Array(), sessionId: "", payload: undefined };
}
exports.ProcessSignTrafficRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.sessionId !== "") {
            writer.uint32(18).string(message.sessionId);
        }
        if (message.payload !== undefined) {
            tofnd_1.TrafficOut.encode(message.payload, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProcessSignTrafficRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.sessionId = reader.string();
                    break;
                case 3:
                    message.payload = tofnd_1.TrafficOut.decode(reader, reader.uint32());
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
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
            payload: isSet(object.payload) ? tofnd_1.TrafficOut.fromJSON(object.payload) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.payload !== undefined &&
            (obj.payload = message.payload ? tofnd_1.TrafficOut.toJSON(message.payload) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProcessSignTrafficRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.sessionId = (_b = object.sessionId) !== null && _b !== void 0 ? _b : "";
        message.payload =
            object.payload !== undefined && object.payload !== null
                ? tofnd_1.TrafficOut.fromPartial(object.payload)
                : undefined;
        return message;
    },
};
function createBaseProcessSignTrafficResponse() {
    return {};
}
exports.ProcessSignTrafficResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProcessSignTrafficResponse();
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
        const message = createBaseProcessSignTrafficResponse();
        return message;
    },
};
function createBaseVotePubKeyRequest() {
    return { sender: new Uint8Array(), pollKey: undefined, result: undefined };
}
exports.VotePubKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.pollKey !== undefined) {
            types_3.PollKey.encode(message.pollKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.result !== undefined) {
            tofnd_1.MessageOut_KeygenResult.encode(message.result, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotePubKeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.pollKey = types_3.PollKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.result = tofnd_1.MessageOut_KeygenResult.decode(reader, reader.uint32());
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
            pollKey: isSet(object.pollKey) ? types_3.PollKey.fromJSON(object.pollKey) : undefined,
            result: isSet(object.result) ? tofnd_1.MessageOut_KeygenResult.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.pollKey !== undefined &&
            (obj.pollKey = message.pollKey ? types_3.PollKey.toJSON(message.pollKey) : undefined);
        message.result !== undefined &&
            (obj.result = message.result ? tofnd_1.MessageOut_KeygenResult.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVotePubKeyRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.pollKey =
            object.pollKey !== undefined && object.pollKey !== null
                ? types_3.PollKey.fromPartial(object.pollKey)
                : undefined;
        message.result =
            object.result !== undefined && object.result !== null
                ? tofnd_1.MessageOut_KeygenResult.fromPartial(object.result)
                : undefined;
        return message;
    },
};
function createBaseVotePubKeyResponse() {
    return { log: "" };
}
exports.VotePubKeyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.log !== "") {
            writer.uint32(10).string(message.log);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotePubKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.log = reader.string();
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
            log: isSet(object.log) ? String(object.log) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.log !== undefined && (obj.log = message.log);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVotePubKeyResponse();
        message.log = (_a = object.log) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseVoteSigRequest() {
    return { sender: new Uint8Array(), pollKey: undefined, result: undefined };
}
exports.VoteSigRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.pollKey !== undefined) {
            types_3.PollKey.encode(message.pollKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.result !== undefined) {
            tofnd_1.MessageOut_SignResult.encode(message.result, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteSigRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.pollKey = types_3.PollKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.result = tofnd_1.MessageOut_SignResult.decode(reader, reader.uint32());
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
            pollKey: isSet(object.pollKey) ? types_3.PollKey.fromJSON(object.pollKey) : undefined,
            result: isSet(object.result) ? tofnd_1.MessageOut_SignResult.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.pollKey !== undefined &&
            (obj.pollKey = message.pollKey ? types_3.PollKey.toJSON(message.pollKey) : undefined);
        message.result !== undefined &&
            (obj.result = message.result ? tofnd_1.MessageOut_SignResult.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVoteSigRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.pollKey =
            object.pollKey !== undefined && object.pollKey !== null
                ? types_3.PollKey.fromPartial(object.pollKey)
                : undefined;
        message.result =
            object.result !== undefined && object.result !== null
                ? tofnd_1.MessageOut_SignResult.fromPartial(object.result)
                : undefined;
        return message;
    },
};
function createBaseVoteSigResponse() {
    return { log: "" };
}
exports.VoteSigResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.log !== "") {
            writer.uint32(10).string(message.log);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteSigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.log = reader.string();
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
            log: isSet(object.log) ? String(object.log) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.log !== undefined && (obj.log = message.log);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVoteSigResponse();
        message.log = (_a = object.log) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseHeartBeatRequest() {
    return { sender: new Uint8Array(), keyIds: [] };
}
exports.HeartBeatRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        for (const v of message.keyIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeartBeatRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            keyIds: Array.isArray(object === null || object === void 0 ? void 0 : object.keyIds) ? object.keyIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
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
        const message = createBaseHeartBeatRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.keyIds = ((_b = object.keyIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseHeartBeatResponse() {
    return {};
}
exports.HeartBeatResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeartBeatResponse();
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
        const message = createBaseHeartBeatResponse();
        return message;
    },
};
function createBaseRegisterExternalKeysRequest() {
    return { sender: new Uint8Array(), chain: "", externalKeys: [] };
}
exports.RegisterExternalKeysRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        for (const v of message.externalKeys) {
            exports.RegisterExternalKeysRequest_ExternalKey.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterExternalKeysRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.externalKeys.push(exports.RegisterExternalKeysRequest_ExternalKey.decode(reader, reader.uint32()));
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            externalKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.externalKeys)
                ? object.externalKeys.map((e) => exports.RegisterExternalKeysRequest_ExternalKey.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        if (message.externalKeys) {
            obj.externalKeys = message.externalKeys.map((e) => e ? exports.RegisterExternalKeysRequest_ExternalKey.toJSON(e) : undefined);
        }
        else {
            obj.externalKeys = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisterExternalKeysRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.externalKeys =
            ((_c = object.externalKeys) === null || _c === void 0 ? void 0 : _c.map((e) => exports.RegisterExternalKeysRequest_ExternalKey.fromPartial(e))) || [];
        return message;
    },
};
function createBaseRegisterExternalKeysRequest_ExternalKey() {
    return { id: "", pubKey: new Uint8Array() };
}
exports.RegisterExternalKeysRequest_ExternalKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.pubKey.length !== 0) {
            writer.uint32(18).bytes(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterExternalKeysRequest_ExternalKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.pubKey = reader.bytes();
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
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.pubKey !== undefined &&
            (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRegisterExternalKeysRequest_ExternalKey();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.pubKey = (_b = object.pubKey) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseRegisterExternalKeysResponse() {
    return {};
}
exports.RegisterExternalKeysResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterExternalKeysResponse();
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
        const message = createBaseRegisterExternalKeysResponse();
        return message;
    },
};
function createBaseSubmitMultisigPubKeysRequest() {
    return { sender: new Uint8Array(), keyId: "", sigKeyPairs: [] };
}
exports.SubmitMultisigPubKeysRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        for (const v of message.sigKeyPairs) {
            types_2.SigKeyPair.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubmitMultisigPubKeysRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.keyId = reader.string();
                    break;
                case 3:
                    message.sigKeyPairs.push(types_2.SigKeyPair.decode(reader, reader.uint32()));
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
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            sigKeyPairs: Array.isArray(object === null || object === void 0 ? void 0 : object.sigKeyPairs)
                ? object.sigKeyPairs.map((e) => types_2.SigKeyPair.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.keyId !== undefined && (obj.keyId = message.keyId);
        if (message.sigKeyPairs) {
            obj.sigKeyPairs = message.sigKeyPairs.map((e) => (e ? types_2.SigKeyPair.toJSON(e) : undefined));
        }
        else {
            obj.sigKeyPairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSubmitMultisigPubKeysRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.keyId = (_b = object.keyId) !== null && _b !== void 0 ? _b : "";
        message.sigKeyPairs = ((_c = object.sigKeyPairs) === null || _c === void 0 ? void 0 : _c.map((e) => types_2.SigKeyPair.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSubmitMultisigPubKeysResponse() {
    return {};
}
exports.SubmitMultisigPubKeysResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubmitMultisigPubKeysResponse();
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
        const message = createBaseSubmitMultisigPubKeysResponse();
        return message;
    },
};
function createBaseSubmitMultisigSignaturesRequest() {
    return { sender: new Uint8Array(), sigId: "", signatures: [] };
}
exports.SubmitMultisigSignaturesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.sigId !== "") {
            writer.uint32(18).string(message.sigId);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubmitMultisigSignaturesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.sigId = reader.string();
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
            sigId: isSet(object.sigId) ? String(object.sigId) : "",
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures)
                ? object.signatures.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.sigId !== undefined && (obj.sigId = message.sigId);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSubmitMultisigSignaturesRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.sigId = (_b = object.sigId) !== null && _b !== void 0 ? _b : "";
        message.signatures = ((_c = object.signatures) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseSubmitMultisigSignaturesResponse() {
    return {};
}
exports.SubmitMultisigSignaturesResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubmitMultisigSignaturesResponse();
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
        const message = createBaseSubmitMultisigSignaturesResponse();
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