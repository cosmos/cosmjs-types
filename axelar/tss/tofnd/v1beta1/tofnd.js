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
exports.SignInit = exports.KeygenInit = exports.TrafficOut = exports.TrafficIn = exports.MessageOut_CriminalList_Criminal = exports.MessageOut_CriminalList = exports.MessageOut_SignResult = exports.MessageOut_KeygenResult = exports.MessageOut = exports.MessageIn = exports.KeygenOutput = exports.RecoverResponse = exports.RecoverRequest = exports.messageOut_CriminalList_Criminal_CrimeTypeToJSON = exports.messageOut_CriminalList_Criminal_CrimeTypeFromJSON = exports.MessageOut_CriminalList_Criminal_CrimeType = exports.recoverResponse_ResponseToJSON = exports.recoverResponse_ResponseFromJSON = exports.RecoverResponse_Response = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.tss.tofnd.v1beta1";
var RecoverResponse_Response;
(function (RecoverResponse_Response) {
    RecoverResponse_Response[RecoverResponse_Response["RESPONSE_UNSPECIFIED"] = 0] = "RESPONSE_UNSPECIFIED";
    RecoverResponse_Response[RecoverResponse_Response["RESPONSE_SUCCESS"] = 1] = "RESPONSE_SUCCESS";
    RecoverResponse_Response[RecoverResponse_Response["RESPONSE_FAIL"] = 2] = "RESPONSE_FAIL";
    RecoverResponse_Response[RecoverResponse_Response["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RecoverResponse_Response = exports.RecoverResponse_Response || (exports.RecoverResponse_Response = {}));
function recoverResponse_ResponseFromJSON(object) {
    switch (object) {
        case 0:
        case "RESPONSE_UNSPECIFIED":
            return RecoverResponse_Response.RESPONSE_UNSPECIFIED;
        case 1:
        case "RESPONSE_SUCCESS":
            return RecoverResponse_Response.RESPONSE_SUCCESS;
        case 2:
        case "RESPONSE_FAIL":
            return RecoverResponse_Response.RESPONSE_FAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RecoverResponse_Response.UNRECOGNIZED;
    }
}
exports.recoverResponse_ResponseFromJSON = recoverResponse_ResponseFromJSON;
function recoverResponse_ResponseToJSON(object) {
    switch (object) {
        case RecoverResponse_Response.RESPONSE_UNSPECIFIED:
            return "RESPONSE_UNSPECIFIED";
        case RecoverResponse_Response.RESPONSE_SUCCESS:
            return "RESPONSE_SUCCESS";
        case RecoverResponse_Response.RESPONSE_FAIL:
            return "RESPONSE_FAIL";
        case RecoverResponse_Response.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.recoverResponse_ResponseToJSON = recoverResponse_ResponseToJSON;
var MessageOut_CriminalList_Criminal_CrimeType;
(function (MessageOut_CriminalList_Criminal_CrimeType) {
    MessageOut_CriminalList_Criminal_CrimeType[MessageOut_CriminalList_Criminal_CrimeType["CRIME_TYPE_UNSPECIFIED"] = 0] = "CRIME_TYPE_UNSPECIFIED";
    MessageOut_CriminalList_Criminal_CrimeType[MessageOut_CriminalList_Criminal_CrimeType["CRIME_TYPE_NON_MALICIOUS"] = 1] = "CRIME_TYPE_NON_MALICIOUS";
    MessageOut_CriminalList_Criminal_CrimeType[MessageOut_CriminalList_Criminal_CrimeType["CRIME_TYPE_MALICIOUS"] = 2] = "CRIME_TYPE_MALICIOUS";
    MessageOut_CriminalList_Criminal_CrimeType[MessageOut_CriminalList_Criminal_CrimeType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MessageOut_CriminalList_Criminal_CrimeType = exports.MessageOut_CriminalList_Criminal_CrimeType || (exports.MessageOut_CriminalList_Criminal_CrimeType = {}));
function messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CRIME_TYPE_UNSPECIFIED":
            return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_UNSPECIFIED;
        case 1:
        case "CRIME_TYPE_NON_MALICIOUS":
            return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_NON_MALICIOUS;
        case 2:
        case "CRIME_TYPE_MALICIOUS":
            return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_MALICIOUS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MessageOut_CriminalList_Criminal_CrimeType.UNRECOGNIZED;
    }
}
exports.messageOut_CriminalList_Criminal_CrimeTypeFromJSON = messageOut_CriminalList_Criminal_CrimeTypeFromJSON;
function messageOut_CriminalList_Criminal_CrimeTypeToJSON(object) {
    switch (object) {
        case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_UNSPECIFIED:
            return "CRIME_TYPE_UNSPECIFIED";
        case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_NON_MALICIOUS:
            return "CRIME_TYPE_NON_MALICIOUS";
        case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_MALICIOUS:
            return "CRIME_TYPE_MALICIOUS";
        case MessageOut_CriminalList_Criminal_CrimeType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.messageOut_CriminalList_Criminal_CrimeTypeToJSON = messageOut_CriminalList_Criminal_CrimeTypeToJSON;
function createBaseRecoverRequest() {
    return { keygenInit: undefined, keygenOutput: undefined };
}
exports.RecoverRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keygenInit !== undefined) {
            exports.KeygenInit.encode(message.keygenInit, writer.uint32(10).fork()).ldelim();
        }
        if (message.keygenOutput !== undefined) {
            exports.KeygenOutput.encode(message.keygenOutput, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecoverRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keygenInit = exports.KeygenInit.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.keygenOutput = exports.KeygenOutput.decode(reader, reader.uint32());
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
            keygenInit: isSet(object.keygenInit) ? exports.KeygenInit.fromJSON(object.keygenInit) : undefined,
            keygenOutput: isSet(object.keygenOutput) ? exports.KeygenOutput.fromJSON(object.keygenOutput) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.keygenInit !== undefined &&
            (obj.keygenInit = message.keygenInit ? exports.KeygenInit.toJSON(message.keygenInit) : undefined);
        message.keygenOutput !== undefined &&
            (obj.keygenOutput = message.keygenOutput ? exports.KeygenOutput.toJSON(message.keygenOutput) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecoverRequest();
        message.keygenInit =
            object.keygenInit !== undefined && object.keygenInit !== null
                ? exports.KeygenInit.fromPartial(object.keygenInit)
                : undefined;
        message.keygenOutput =
            object.keygenOutput !== undefined && object.keygenOutput !== null
                ? exports.KeygenOutput.fromPartial(object.keygenOutput)
                : undefined;
        return message;
    },
};
function createBaseRecoverResponse() {
    return { response: 0 };
}
exports.RecoverResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.response !== 0) {
            writer.uint32(8).int32(message.response);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecoverResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = reader.int32();
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
            response: isSet(object.response) ? recoverResponse_ResponseFromJSON(object.response) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.response !== undefined && (obj.response = recoverResponse_ResponseToJSON(message.response));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRecoverResponse();
        message.response = (_a = object.response) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseKeygenOutput() {
    return {
        pubKey: new Uint8Array(),
        groupRecoverInfo: new Uint8Array(),
        privateRecoverInfo: new Uint8Array(),
    };
}
exports.KeygenOutput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pubKey.length !== 0) {
            writer.uint32(10).bytes(message.pubKey);
        }
        if (message.groupRecoverInfo.length !== 0) {
            writer.uint32(18).bytes(message.groupRecoverInfo);
        }
        if (message.privateRecoverInfo.length !== 0) {
            writer.uint32(26).bytes(message.privateRecoverInfo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = reader.bytes();
                    break;
                case 2:
                    message.groupRecoverInfo = reader.bytes();
                    break;
                case 3:
                    message.privateRecoverInfo = reader.bytes();
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
            groupRecoverInfo: isSet(object.groupRecoverInfo)
                ? bytesFromBase64(object.groupRecoverInfo)
                : new Uint8Array(),
            privateRecoverInfo: isSet(object.privateRecoverInfo)
                ? bytesFromBase64(object.privateRecoverInfo)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined &&
            (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
        message.groupRecoverInfo !== undefined &&
            (obj.groupRecoverInfo = base64FromBytes(message.groupRecoverInfo !== undefined ? message.groupRecoverInfo : new Uint8Array()));
        message.privateRecoverInfo !== undefined &&
            (obj.privateRecoverInfo = base64FromBytes(message.privateRecoverInfo !== undefined ? message.privateRecoverInfo : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseKeygenOutput();
        message.pubKey = (_a = object.pubKey) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.groupRecoverInfo = (_b = object.groupRecoverInfo) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.privateRecoverInfo = (_c = object.privateRecoverInfo) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseMessageIn() {
    return { keygenInit: undefined, signInit: undefined, traffic: undefined, abort: undefined };
}
exports.MessageIn = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keygenInit !== undefined) {
            exports.KeygenInit.encode(message.keygenInit, writer.uint32(10).fork()).ldelim();
        }
        if (message.signInit !== undefined) {
            exports.SignInit.encode(message.signInit, writer.uint32(18).fork()).ldelim();
        }
        if (message.traffic !== undefined) {
            exports.TrafficIn.encode(message.traffic, writer.uint32(26).fork()).ldelim();
        }
        if (message.abort !== undefined) {
            writer.uint32(32).bool(message.abort);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keygenInit = exports.KeygenInit.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signInit = exports.SignInit.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.traffic = exports.TrafficIn.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.abort = reader.bool();
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
            keygenInit: isSet(object.keygenInit) ? exports.KeygenInit.fromJSON(object.keygenInit) : undefined,
            signInit: isSet(object.signInit) ? exports.SignInit.fromJSON(object.signInit) : undefined,
            traffic: isSet(object.traffic) ? exports.TrafficIn.fromJSON(object.traffic) : undefined,
            abort: isSet(object.abort) ? Boolean(object.abort) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.keygenInit !== undefined &&
            (obj.keygenInit = message.keygenInit ? exports.KeygenInit.toJSON(message.keygenInit) : undefined);
        message.signInit !== undefined &&
            (obj.signInit = message.signInit ? exports.SignInit.toJSON(message.signInit) : undefined);
        message.traffic !== undefined &&
            (obj.traffic = message.traffic ? exports.TrafficIn.toJSON(message.traffic) : undefined);
        message.abort !== undefined && (obj.abort = message.abort);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMessageIn();
        message.keygenInit =
            object.keygenInit !== undefined && object.keygenInit !== null
                ? exports.KeygenInit.fromPartial(object.keygenInit)
                : undefined;
        message.signInit =
            object.signInit !== undefined && object.signInit !== null
                ? exports.SignInit.fromPartial(object.signInit)
                : undefined;
        message.traffic =
            object.traffic !== undefined && object.traffic !== null
                ? exports.TrafficIn.fromPartial(object.traffic)
                : undefined;
        message.abort = (_a = object.abort) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseMessageOut() {
    return { traffic: undefined, keygenResult: undefined, signResult: undefined, needRecover: undefined };
}
exports.MessageOut = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.traffic !== undefined) {
            exports.TrafficOut.encode(message.traffic, writer.uint32(10).fork()).ldelim();
        }
        if (message.keygenResult !== undefined) {
            exports.MessageOut_KeygenResult.encode(message.keygenResult, writer.uint32(18).fork()).ldelim();
        }
        if (message.signResult !== undefined) {
            exports.MessageOut_SignResult.encode(message.signResult, writer.uint32(26).fork()).ldelim();
        }
        if (message.needRecover !== undefined) {
            writer.uint32(32).bool(message.needRecover);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.traffic = exports.TrafficOut.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.keygenResult = exports.MessageOut_KeygenResult.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signResult = exports.MessageOut_SignResult.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.needRecover = reader.bool();
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
            traffic: isSet(object.traffic) ? exports.TrafficOut.fromJSON(object.traffic) : undefined,
            keygenResult: isSet(object.keygenResult)
                ? exports.MessageOut_KeygenResult.fromJSON(object.keygenResult)
                : undefined,
            signResult: isSet(object.signResult) ? exports.MessageOut_SignResult.fromJSON(object.signResult) : undefined,
            needRecover: isSet(object.needRecover) ? Boolean(object.needRecover) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.traffic !== undefined &&
            (obj.traffic = message.traffic ? exports.TrafficOut.toJSON(message.traffic) : undefined);
        message.keygenResult !== undefined &&
            (obj.keygenResult = message.keygenResult
                ? exports.MessageOut_KeygenResult.toJSON(message.keygenResult)
                : undefined);
        message.signResult !== undefined &&
            (obj.signResult = message.signResult ? exports.MessageOut_SignResult.toJSON(message.signResult) : undefined);
        message.needRecover !== undefined && (obj.needRecover = message.needRecover);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMessageOut();
        message.traffic =
            object.traffic !== undefined && object.traffic !== null
                ? exports.TrafficOut.fromPartial(object.traffic)
                : undefined;
        message.keygenResult =
            object.keygenResult !== undefined && object.keygenResult !== null
                ? exports.MessageOut_KeygenResult.fromPartial(object.keygenResult)
                : undefined;
        message.signResult =
            object.signResult !== undefined && object.signResult !== null
                ? exports.MessageOut_SignResult.fromPartial(object.signResult)
                : undefined;
        message.needRecover = (_a = object.needRecover) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseMessageOut_KeygenResult() {
    return { data: undefined, criminals: undefined };
}
exports.MessageOut_KeygenResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== undefined) {
            exports.KeygenOutput.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.criminals !== undefined) {
            exports.MessageOut_CriminalList.encode(message.criminals, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOut_KeygenResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = exports.KeygenOutput.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.criminals = exports.MessageOut_CriminalList.decode(reader, reader.uint32());
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
            data: isSet(object.data) ? exports.KeygenOutput.fromJSON(object.data) : undefined,
            criminals: isSet(object.criminals) ? exports.MessageOut_CriminalList.fromJSON(object.criminals) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data ? exports.KeygenOutput.toJSON(message.data) : undefined);
        message.criminals !== undefined &&
            (obj.criminals = message.criminals ? exports.MessageOut_CriminalList.toJSON(message.criminals) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMessageOut_KeygenResult();
        message.data =
            object.data !== undefined && object.data !== null ? exports.KeygenOutput.fromPartial(object.data) : undefined;
        message.criminals =
            object.criminals !== undefined && object.criminals !== null
                ? exports.MessageOut_CriminalList.fromPartial(object.criminals)
                : undefined;
        return message;
    },
};
function createBaseMessageOut_SignResult() {
    return { signature: undefined, criminals: undefined };
}
exports.MessageOut_SignResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signature !== undefined) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.criminals !== undefined) {
            exports.MessageOut_CriminalList.encode(message.criminals, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOut_SignResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signature = reader.bytes();
                    break;
                case 2:
                    message.criminals = exports.MessageOut_CriminalList.decode(reader, reader.uint32());
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
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
            criminals: isSet(object.criminals) ? exports.MessageOut_CriminalList.fromJSON(object.criminals) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature !== undefined &&
            (obj.signature = message.signature !== undefined ? base64FromBytes(message.signature) : undefined);
        message.criminals !== undefined &&
            (obj.criminals = message.criminals ? exports.MessageOut_CriminalList.toJSON(message.criminals) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMessageOut_SignResult();
        message.signature = (_a = object.signature) !== null && _a !== void 0 ? _a : undefined;
        message.criminals =
            object.criminals !== undefined && object.criminals !== null
                ? exports.MessageOut_CriminalList.fromPartial(object.criminals)
                : undefined;
        return message;
    },
};
function createBaseMessageOut_CriminalList() {
    return { criminals: [] };
}
exports.MessageOut_CriminalList = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.criminals) {
            exports.MessageOut_CriminalList_Criminal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOut_CriminalList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.criminals.push(exports.MessageOut_CriminalList_Criminal.decode(reader, reader.uint32()));
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
            criminals: Array.isArray(object === null || object === void 0 ? void 0 : object.criminals)
                ? object.criminals.map((e) => exports.MessageOut_CriminalList_Criminal.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.criminals) {
            obj.criminals = message.criminals.map((e) => e ? exports.MessageOut_CriminalList_Criminal.toJSON(e) : undefined);
        }
        else {
            obj.criminals = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMessageOut_CriminalList();
        message.criminals = ((_a = object.criminals) === null || _a === void 0 ? void 0 : _a.map((e) => exports.MessageOut_CriminalList_Criminal.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMessageOut_CriminalList_Criminal() {
    return { partyUid: "", crimeType: 0 };
}
exports.MessageOut_CriminalList_Criminal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.partyUid !== "") {
            writer.uint32(10).string(message.partyUid);
        }
        if (message.crimeType !== 0) {
            writer.uint32(16).int32(message.crimeType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOut_CriminalList_Criminal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partyUid = reader.string();
                    break;
                case 2:
                    message.crimeType = reader.int32();
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
            partyUid: isSet(object.partyUid) ? String(object.partyUid) : "",
            crimeType: isSet(object.crimeType)
                ? messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object.crimeType)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.partyUid !== undefined && (obj.partyUid = message.partyUid);
        message.crimeType !== undefined &&
            (obj.crimeType = messageOut_CriminalList_Criminal_CrimeTypeToJSON(message.crimeType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMessageOut_CriminalList_Criminal();
        message.partyUid = (_a = object.partyUid) !== null && _a !== void 0 ? _a : "";
        message.crimeType = (_b = object.crimeType) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseTrafficIn() {
    return { fromPartyUid: "", payload: new Uint8Array(), isBroadcast: false };
}
exports.TrafficIn = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fromPartyUid !== "") {
            writer.uint32(10).string(message.fromPartyUid);
        }
        if (message.payload.length !== 0) {
            writer.uint32(18).bytes(message.payload);
        }
        if (message.isBroadcast === true) {
            writer.uint32(24).bool(message.isBroadcast);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrafficIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromPartyUid = reader.string();
                    break;
                case 2:
                    message.payload = reader.bytes();
                    break;
                case 3:
                    message.isBroadcast = reader.bool();
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
            fromPartyUid: isSet(object.fromPartyUid) ? String(object.fromPartyUid) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            isBroadcast: isSet(object.isBroadcast) ? Boolean(object.isBroadcast) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromPartyUid !== undefined && (obj.fromPartyUid = message.fromPartyUid);
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        message.isBroadcast !== undefined && (obj.isBroadcast = message.isBroadcast);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTrafficIn();
        message.fromPartyUid = (_a = object.fromPartyUid) !== null && _a !== void 0 ? _a : "";
        message.payload = (_b = object.payload) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.isBroadcast = (_c = object.isBroadcast) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseTrafficOut() {
    return { toPartyUid: "", payload: new Uint8Array(), isBroadcast: false };
}
exports.TrafficOut = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.toPartyUid !== "") {
            writer.uint32(10).string(message.toPartyUid);
        }
        if (message.payload.length !== 0) {
            writer.uint32(18).bytes(message.payload);
        }
        if (message.isBroadcast === true) {
            writer.uint32(24).bool(message.isBroadcast);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrafficOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.toPartyUid = reader.string();
                    break;
                case 2:
                    message.payload = reader.bytes();
                    break;
                case 3:
                    message.isBroadcast = reader.bool();
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
            toPartyUid: isSet(object.toPartyUid) ? String(object.toPartyUid) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            isBroadcast: isSet(object.isBroadcast) ? Boolean(object.isBroadcast) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.toPartyUid !== undefined && (obj.toPartyUid = message.toPartyUid);
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        message.isBroadcast !== undefined && (obj.isBroadcast = message.isBroadcast);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTrafficOut();
        message.toPartyUid = (_a = object.toPartyUid) !== null && _a !== void 0 ? _a : "";
        message.payload = (_b = object.payload) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.isBroadcast = (_c = object.isBroadcast) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseKeygenInit() {
    return { newKeyUid: "", partyUids: [], partyShareCounts: [], myPartyIndex: 0, threshold: 0 };
}
exports.KeygenInit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.newKeyUid !== "") {
            writer.uint32(10).string(message.newKeyUid);
        }
        for (const v of message.partyUids) {
            writer.uint32(18).string(v);
        }
        writer.uint32(42).fork();
        for (const v of message.partyShareCounts) {
            writer.uint32(v);
        }
        writer.ldelim();
        if (message.myPartyIndex !== 0) {
            writer.uint32(24).uint32(message.myPartyIndex);
        }
        if (message.threshold !== 0) {
            writer.uint32(32).uint32(message.threshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeygenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newKeyUid = reader.string();
                    break;
                case 2:
                    message.partyUids.push(reader.string());
                    break;
                case 5:
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
                    message.myPartyIndex = reader.uint32();
                    break;
                case 4:
                    message.threshold = reader.uint32();
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
            newKeyUid: isSet(object.newKeyUid) ? String(object.newKeyUid) : "",
            partyUids: Array.isArray(object === null || object === void 0 ? void 0 : object.partyUids) ? object.partyUids.map((e) => String(e)) : [],
            partyShareCounts: Array.isArray(object === null || object === void 0 ? void 0 : object.partyShareCounts)
                ? object.partyShareCounts.map((e) => Number(e))
                : [],
            myPartyIndex: isSet(object.myPartyIndex) ? Number(object.myPartyIndex) : 0,
            threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.newKeyUid !== undefined && (obj.newKeyUid = message.newKeyUid);
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
        message.myPartyIndex !== undefined && (obj.myPartyIndex = Math.round(message.myPartyIndex));
        message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseKeygenInit();
        message.newKeyUid = (_a = object.newKeyUid) !== null && _a !== void 0 ? _a : "";
        message.partyUids = ((_b = object.partyUids) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.partyShareCounts = ((_c = object.partyShareCounts) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.myPartyIndex = (_d = object.myPartyIndex) !== null && _d !== void 0 ? _d : 0;
        message.threshold = (_e = object.threshold) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseSignInit() {
    return { newSigUid: "", keyUid: "", partyUids: [], messageToSign: new Uint8Array() };
}
exports.SignInit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.newSigUid !== "") {
            writer.uint32(10).string(message.newSigUid);
        }
        if (message.keyUid !== "") {
            writer.uint32(18).string(message.keyUid);
        }
        for (const v of message.partyUids) {
            writer.uint32(26).string(v);
        }
        if (message.messageToSign.length !== 0) {
            writer.uint32(34).bytes(message.messageToSign);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newSigUid = reader.string();
                    break;
                case 2:
                    message.keyUid = reader.string();
                    break;
                case 3:
                    message.partyUids.push(reader.string());
                    break;
                case 4:
                    message.messageToSign = reader.bytes();
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
            newSigUid: isSet(object.newSigUid) ? String(object.newSigUid) : "",
            keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
            partyUids: Array.isArray(object === null || object === void 0 ? void 0 : object.partyUids) ? object.partyUids.map((e) => String(e)) : [],
            messageToSign: isSet(object.messageToSign) ? bytesFromBase64(object.messageToSign) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.newSigUid !== undefined && (obj.newSigUid = message.newSigUid);
        message.keyUid !== undefined && (obj.keyUid = message.keyUid);
        if (message.partyUids) {
            obj.partyUids = message.partyUids.map((e) => e);
        }
        else {
            obj.partyUids = [];
        }
        message.messageToSign !== undefined &&
            (obj.messageToSign = base64FromBytes(message.messageToSign !== undefined ? message.messageToSign : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSignInit();
        message.newSigUid = (_a = object.newSigUid) !== null && _a !== void 0 ? _a : "";
        message.keyUid = (_b = object.keyUid) !== null && _b !== void 0 ? _b : "";
        message.partyUids = ((_c = object.partyUids) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.messageToSign = (_d = object.messageToSign) !== null && _d !== void 0 ? _d : new Uint8Array();
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
//# sourceMappingURL=tofnd.js.map