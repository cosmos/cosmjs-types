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
exports.Threshold = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.utils.v1beta1";
function createBaseThreshold() {
    return { numerator: long_1.default.ZERO, denominator: long_1.default.ZERO };
}
exports.Threshold = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.numerator.isZero()) {
            writer.uint32(8).int64(message.numerator);
        }
        if (!message.denominator.isZero()) {
            writer.uint32(16).int64(message.denominator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseThreshold();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numerator = reader.int64();
                    break;
                case 2:
                    message.denominator = reader.int64();
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
            numerator: isSet(object.numerator) ? long_1.default.fromValue(object.numerator) : long_1.default.ZERO,
            denominator: isSet(object.denominator) ? long_1.default.fromValue(object.denominator) : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.numerator !== undefined && (obj.numerator = (message.numerator || long_1.default.ZERO).toString());
        message.denominator !== undefined && (obj.denominator = (message.denominator || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseThreshold();
        message.numerator =
            object.numerator !== undefined && object.numerator !== null
                ? long_1.default.fromValue(object.numerator)
                : long_1.default.ZERO;
        message.denominator =
            object.denominator !== undefined && object.denominator !== null
                ? long_1.default.fromValue(object.denominator)
                : long_1.default.ZERO;
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
//# sourceMappingURL=threshold.js.map