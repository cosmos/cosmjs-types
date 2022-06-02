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
exports.KeyPresenceResponse = exports.KeyPresenceRequest = exports.keyPresenceResponse_ResponseToJSON = exports.keyPresenceResponse_ResponseFromJSON = exports.KeyPresenceResponse_Response = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.tss.tofnd.v1beta1";
var KeyPresenceResponse_Response;
(function (KeyPresenceResponse_Response) {
    KeyPresenceResponse_Response[KeyPresenceResponse_Response["RESPONSE_UNSPECIFIED"] = 0] = "RESPONSE_UNSPECIFIED";
    KeyPresenceResponse_Response[KeyPresenceResponse_Response["RESPONSE_PRESENT"] = 1] = "RESPONSE_PRESENT";
    KeyPresenceResponse_Response[KeyPresenceResponse_Response["RESPONSE_ABSENT"] = 2] = "RESPONSE_ABSENT";
    KeyPresenceResponse_Response[KeyPresenceResponse_Response["RESPONSE_FAIL"] = 3] = "RESPONSE_FAIL";
    KeyPresenceResponse_Response[KeyPresenceResponse_Response["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyPresenceResponse_Response = exports.KeyPresenceResponse_Response || (exports.KeyPresenceResponse_Response = {}));
function keyPresenceResponse_ResponseFromJSON(object) {
    switch (object) {
        case 0:
        case "RESPONSE_UNSPECIFIED":
            return KeyPresenceResponse_Response.RESPONSE_UNSPECIFIED;
        case 1:
        case "RESPONSE_PRESENT":
            return KeyPresenceResponse_Response.RESPONSE_PRESENT;
        case 2:
        case "RESPONSE_ABSENT":
            return KeyPresenceResponse_Response.RESPONSE_ABSENT;
        case 3:
        case "RESPONSE_FAIL":
            return KeyPresenceResponse_Response.RESPONSE_FAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KeyPresenceResponse_Response.UNRECOGNIZED;
    }
}
exports.keyPresenceResponse_ResponseFromJSON = keyPresenceResponse_ResponseFromJSON;
function keyPresenceResponse_ResponseToJSON(object) {
    switch (object) {
        case KeyPresenceResponse_Response.RESPONSE_UNSPECIFIED:
            return "RESPONSE_UNSPECIFIED";
        case KeyPresenceResponse_Response.RESPONSE_PRESENT:
            return "RESPONSE_PRESENT";
        case KeyPresenceResponse_Response.RESPONSE_ABSENT:
            return "RESPONSE_ABSENT";
        case KeyPresenceResponse_Response.RESPONSE_FAIL:
            return "RESPONSE_FAIL";
        case KeyPresenceResponse_Response.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.keyPresenceResponse_ResponseToJSON = keyPresenceResponse_ResponseToJSON;
function createBaseKeyPresenceRequest() {
    return { keyUid: "", pubKey: new Uint8Array() };
}
exports.KeyPresenceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyUid !== "") {
            writer.uint32(10).string(message.keyUid);
        }
        if (message.pubKey.length !== 0) {
            writer.uint32(18).bytes(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyPresenceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyUid = reader.string();
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
            keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyUid !== undefined && (obj.keyUid = message.keyUid);
        message.pubKey !== undefined &&
            (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseKeyPresenceRequest();
        message.keyUid = (_a = object.keyUid) !== null && _a !== void 0 ? _a : "";
        message.pubKey = (_b = object.pubKey) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseKeyPresenceResponse() {
    return { response: 0 };
}
exports.KeyPresenceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.response !== 0) {
            writer.uint32(8).int32(message.response);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyPresenceResponse();
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
            response: isSet(object.response) ? keyPresenceResponse_ResponseFromJSON(object.response) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.response !== undefined && (obj.response = keyPresenceResponse_ResponseToJSON(message.response));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseKeyPresenceResponse();
        message.response = (_a = object.response) !== null && _a !== void 0 ? _a : 0;
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
//# sourceMappingURL=common.js.map