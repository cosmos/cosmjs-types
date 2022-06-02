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
exports.CircularBuffer = exports.Bitmap = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.utils.v1beta1";
function createBaseBitmap() {
    return { trueCountCache: undefined };
}
exports.Bitmap = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trueCountCache !== undefined) {
            exports.CircularBuffer.encode(message.trueCountCache, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBitmap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.trueCountCache = exports.CircularBuffer.decode(reader, reader.uint32());
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
            trueCountCache: isSet(object.trueCountCache)
                ? exports.CircularBuffer.fromJSON(object.trueCountCache)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.trueCountCache !== undefined &&
            (obj.trueCountCache = message.trueCountCache
                ? exports.CircularBuffer.toJSON(message.trueCountCache)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBitmap();
        message.trueCountCache =
            object.trueCountCache !== undefined && object.trueCountCache !== null
                ? exports.CircularBuffer.fromPartial(object.trueCountCache)
                : undefined;
        return message;
    },
};
function createBaseCircularBuffer() {
    return { cumulativeValue: [], index: 0, maxSize: 0 };
}
exports.CircularBuffer = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.cumulativeValue) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.index !== 0) {
            writer.uint32(16).int32(message.index);
        }
        if (message.maxSize !== 0) {
            writer.uint32(24).int32(message.maxSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCircularBuffer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cumulativeValue.push(reader.uint64());
                        }
                    }
                    else {
                        message.cumulativeValue.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.index = reader.int32();
                    break;
                case 3:
                    message.maxSize = reader.int32();
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
            cumulativeValue: Array.isArray(object === null || object === void 0 ? void 0 : object.cumulativeValue)
                ? object.cumulativeValue.map((e) => long_1.default.fromValue(e))
                : [],
            index: isSet(object.index) ? Number(object.index) : 0,
            maxSize: isSet(object.maxSize) ? Number(object.maxSize) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.cumulativeValue) {
            obj.cumulativeValue = message.cumulativeValue.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.cumulativeValue = [];
        }
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.maxSize !== undefined && (obj.maxSize = Math.round(message.maxSize));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCircularBuffer();
        message.cumulativeValue = ((_a = object.cumulativeValue) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        message.index = (_b = object.index) !== null && _b !== void 0 ? _b : 0;
        message.maxSize = (_c = object.maxSize) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=bitmap.js.map