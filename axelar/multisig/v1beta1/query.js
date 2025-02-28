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
exports.ParamsResponse = exports.ParamsRequest = exports.KeygenSessionResponse = exports.KeygenSessionRequest = exports.KeyResponse = exports.KeygenParticipant = exports.KeyRequest = exports.NextKeyIDResponse = exports.NextKeyIDRequest = exports.KeyIDResponse = exports.KeyIDRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/multisig/exported/v1beta1/types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const params_1 = require("../../../axelar/multisig/v1beta1/params");
exports.protobufPackage = "axelar.multisig.v1beta1";
function createBaseKeyIDRequest() {
    return { chain: "" };
}
exports.KeyIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseKeyIDRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseKeyIDResponse() {
    return { keyId: "" };
}
exports.KeyIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyIDResponse();
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
        const message = createBaseKeyIDResponse();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseNextKeyIDRequest() {
    return { chain: "" };
}
exports.NextKeyIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseNextKeyIDRequest();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
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
function createBaseKeyRequest() {
    return { keyId: "" };
}
exports.KeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyRequest();
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
        const message = createBaseKeyRequest();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseKeygenParticipant() {
    return { address: "", weight: new Uint8Array(), pubKey: "" };
}
exports.KeygenParticipant = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight.length !== 0) {
            writer.uint32(18).bytes(message.weight);
        }
        if (message.pubKey !== "") {
            writer.uint32(26).string(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenParticipant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.bytes();
                    break;
                case 3:
                    message.pubKey = reader.string();
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
            weight: isSet(object.weight) ? bytesFromBase64(object.weight) : new Uint8Array(),
            pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.weight !== undefined &&
            (obj.weight = base64FromBytes(message.weight !== undefined ? message.weight : new Uint8Array()));
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseKeygenParticipant();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.weight = (_b = object.weight) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.pubKey = (_c = object.pubKey) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseKeyResponse() {
    return {
        keyId: "",
        state: 0,
        startedAt: long_1.default.ZERO,
        startedAtTimestamp: undefined,
        thresholdWeight: new Uint8Array(),
        bondedWeight: new Uint8Array(),
        participants: [],
    };
}
exports.KeyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (!message.startedAt.isZero()) {
            writer.uint32(24).int64(message.startedAt);
        }
        if (message.startedAtTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.startedAtTimestamp, writer.uint32(34).fork()).ldelim();
        }
        if (message.thresholdWeight.length !== 0) {
            writer.uint32(42).bytes(message.thresholdWeight);
        }
        if (message.bondedWeight.length !== 0) {
            writer.uint32(50).bytes(message.bondedWeight);
        }
        for (const v of message.participants) {
            exports.KeygenParticipant.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.startedAt = reader.int64();
                    break;
                case 4:
                    message.startedAtTimestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.thresholdWeight = reader.bytes();
                    break;
                case 6:
                    message.bondedWeight = reader.bytes();
                    break;
                case 7:
                    message.participants.push(exports.KeygenParticipant.decode(reader, reader.uint32()));
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
            state: isSet(object.state) ? (0, types_1.keyStateFromJSON)(object.state) : 0,
            startedAt: isSet(object.startedAt) ? long_1.default.fromValue(object.startedAt) : long_1.default.ZERO,
            startedAtTimestamp: isSet(object.startedAtTimestamp)
                ? fromJsonTimestamp(object.startedAtTimestamp)
                : undefined,
            thresholdWeight: isSet(object.thresholdWeight)
                ? bytesFromBase64(object.thresholdWeight)
                : new Uint8Array(),
            bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array(),
            participants: Array.isArray(object === null || object === void 0 ? void 0 : object.participants)
                ? object.participants.map((e) => exports.KeygenParticipant.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.state !== undefined && (obj.state = (0, types_1.keyStateToJSON)(message.state));
        message.startedAt !== undefined && (obj.startedAt = (message.startedAt || long_1.default.ZERO).toString());
        message.startedAtTimestamp !== undefined &&
            (obj.startedAtTimestamp = fromTimestamp(message.startedAtTimestamp).toISOString());
        message.thresholdWeight !== undefined &&
            (obj.thresholdWeight = base64FromBytes(message.thresholdWeight !== undefined ? message.thresholdWeight : new Uint8Array()));
        message.bondedWeight !== undefined &&
            (obj.bondedWeight = base64FromBytes(message.bondedWeight !== undefined ? message.bondedWeight : new Uint8Array()));
        if (message.participants) {
            obj.participants = message.participants.map((e) => (e ? exports.KeygenParticipant.toJSON(e) : undefined));
        }
        else {
            obj.participants = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseKeyResponse();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? long_1.default.fromValue(object.startedAt)
                : long_1.default.ZERO;
        message.startedAtTimestamp =
            object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null
                ? timestamp_1.Timestamp.fromPartial(object.startedAtTimestamp)
                : undefined;
        message.thresholdWeight = (_c = object.thresholdWeight) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.bondedWeight = (_d = object.bondedWeight) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.participants = ((_e = object.participants) === null || _e === void 0 ? void 0 : _e.map((e) => exports.KeygenParticipant.fromPartial(e))) || [];
        return message;
    },
};
function createBaseKeygenSessionRequest() {
    return { keyId: "" };
}
exports.KeygenSessionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenSessionRequest();
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
        const message = createBaseKeygenSessionRequest();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseKeygenSessionResponse() {
    return {
        startedAt: long_1.default.ZERO,
        startedAtTimestamp: undefined,
        expiresAt: long_1.default.ZERO,
        completedAt: long_1.default.ZERO,
        gracePeriod: long_1.default.ZERO,
        state: 0,
        keygenThresholdWeight: new Uint8Array(),
        signingThresholdWeight: new Uint8Array(),
        bondedWeight: new Uint8Array(),
        participants: [],
    };
}
exports.KeygenSessionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.startedAt.isZero()) {
            writer.uint32(8).int64(message.startedAt);
        }
        if (message.startedAtTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.startedAtTimestamp, writer.uint32(18).fork()).ldelim();
        }
        if (!message.expiresAt.isZero()) {
            writer.uint32(24).int64(message.expiresAt);
        }
        if (!message.completedAt.isZero()) {
            writer.uint32(32).int64(message.completedAt);
        }
        if (!message.gracePeriod.isZero()) {
            writer.uint32(40).int64(message.gracePeriod);
        }
        if (message.state !== 0) {
            writer.uint32(48).int32(message.state);
        }
        if (message.keygenThresholdWeight.length !== 0) {
            writer.uint32(58).bytes(message.keygenThresholdWeight);
        }
        if (message.signingThresholdWeight.length !== 0) {
            writer.uint32(66).bytes(message.signingThresholdWeight);
        }
        if (message.bondedWeight.length !== 0) {
            writer.uint32(74).bytes(message.bondedWeight);
        }
        for (const v of message.participants) {
            exports.KeygenParticipant.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenSessionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startedAt = reader.int64();
                    break;
                case 2:
                    message.startedAtTimestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expiresAt = reader.int64();
                    break;
                case 4:
                    message.completedAt = reader.int64();
                    break;
                case 5:
                    message.gracePeriod = reader.int64();
                    break;
                case 6:
                    message.state = reader.int32();
                    break;
                case 7:
                    message.keygenThresholdWeight = reader.bytes();
                    break;
                case 8:
                    message.signingThresholdWeight = reader.bytes();
                    break;
                case 9:
                    message.bondedWeight = reader.bytes();
                    break;
                case 10:
                    message.participants.push(exports.KeygenParticipant.decode(reader, reader.uint32()));
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
            startedAt: isSet(object.startedAt) ? long_1.default.fromValue(object.startedAt) : long_1.default.ZERO,
            startedAtTimestamp: isSet(object.startedAtTimestamp)
                ? fromJsonTimestamp(object.startedAtTimestamp)
                : undefined,
            expiresAt: isSet(object.expiresAt) ? long_1.default.fromValue(object.expiresAt) : long_1.default.ZERO,
            completedAt: isSet(object.completedAt) ? long_1.default.fromValue(object.completedAt) : long_1.default.ZERO,
            gracePeriod: isSet(object.gracePeriod) ? long_1.default.fromValue(object.gracePeriod) : long_1.default.ZERO,
            state: isSet(object.state) ? (0, types_1.multisigStateFromJSON)(object.state) : 0,
            keygenThresholdWeight: isSet(object.keygenThresholdWeight)
                ? bytesFromBase64(object.keygenThresholdWeight)
                : new Uint8Array(),
            signingThresholdWeight: isSet(object.signingThresholdWeight)
                ? bytesFromBase64(object.signingThresholdWeight)
                : new Uint8Array(),
            bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array(),
            participants: Array.isArray(object === null || object === void 0 ? void 0 : object.participants)
                ? object.participants.map((e) => exports.KeygenParticipant.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.startedAt !== undefined && (obj.startedAt = (message.startedAt || long_1.default.ZERO).toString());
        message.startedAtTimestamp !== undefined &&
            (obj.startedAtTimestamp = fromTimestamp(message.startedAtTimestamp).toISOString());
        message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || long_1.default.ZERO).toString());
        message.completedAt !== undefined && (obj.completedAt = (message.completedAt || long_1.default.ZERO).toString());
        message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || long_1.default.ZERO).toString());
        message.state !== undefined && (obj.state = (0, types_1.multisigStateToJSON)(message.state));
        message.keygenThresholdWeight !== undefined &&
            (obj.keygenThresholdWeight = base64FromBytes(message.keygenThresholdWeight !== undefined ? message.keygenThresholdWeight : new Uint8Array()));
        message.signingThresholdWeight !== undefined &&
            (obj.signingThresholdWeight = base64FromBytes(message.signingThresholdWeight !== undefined ? message.signingThresholdWeight : new Uint8Array()));
        message.bondedWeight !== undefined &&
            (obj.bondedWeight = base64FromBytes(message.bondedWeight !== undefined ? message.bondedWeight : new Uint8Array()));
        if (message.participants) {
            obj.participants = message.participants.map((e) => (e ? exports.KeygenParticipant.toJSON(e) : undefined));
        }
        else {
            obj.participants = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseKeygenSessionResponse();
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? long_1.default.fromValue(object.startedAt)
                : long_1.default.ZERO;
        message.startedAtTimestamp =
            object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null
                ? timestamp_1.Timestamp.fromPartial(object.startedAtTimestamp)
                : undefined;
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
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.keygenThresholdWeight = (_b = object.keygenThresholdWeight) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.signingThresholdWeight = (_c = object.signingThresholdWeight) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.bondedWeight = (_d = object.bondedWeight) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.participants = ((_e = object.participants) === null || _e === void 0 ? void 0 : _e.map((e) => exports.KeygenParticipant.fromPartial(e))) || [];
        return message;
    },
};
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
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
        const message = createBaseParamsRequest();
        return message;
    },
};
function createBaseParamsResponse() {
    return { params: undefined };
}
exports.ParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
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
//# sourceMappingURL=query.js.map