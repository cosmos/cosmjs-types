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
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.axelarnet.v1beta1";
function createBaseParams() {
    return { routeTimeoutWindow: long_1.default.UZERO, transferLimit: long_1.default.UZERO, endBlockerLimit: long_1.default.UZERO };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.routeTimeoutWindow.isZero()) {
            writer.uint32(8).uint64(message.routeTimeoutWindow);
        }
        if (!message.transferLimit.isZero()) {
            writer.uint32(24).uint64(message.transferLimit);
        }
        if (!message.endBlockerLimit.isZero()) {
            writer.uint32(32).uint64(message.endBlockerLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTimeoutWindow = reader.uint64();
                    break;
                case 3:
                    message.transferLimit = reader.uint64();
                    break;
                case 4:
                    message.endBlockerLimit = reader.uint64();
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
            routeTimeoutWindow: isSet(object.routeTimeoutWindow)
                ? long_1.default.fromValue(object.routeTimeoutWindow)
                : long_1.default.UZERO,
            transferLimit: isSet(object.transferLimit) ? long_1.default.fromValue(object.transferLimit) : long_1.default.UZERO,
            endBlockerLimit: isSet(object.endBlockerLimit) ? long_1.default.fromValue(object.endBlockerLimit) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.routeTimeoutWindow !== undefined &&
            (obj.routeTimeoutWindow = (message.routeTimeoutWindow || long_1.default.UZERO).toString());
        message.transferLimit !== undefined &&
            (obj.transferLimit = (message.transferLimit || long_1.default.UZERO).toString());
        message.endBlockerLimit !== undefined &&
            (obj.endBlockerLimit = (message.endBlockerLimit || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.routeTimeoutWindow =
            object.routeTimeoutWindow !== undefined && object.routeTimeoutWindow !== null
                ? long_1.default.fromValue(object.routeTimeoutWindow)
                : long_1.default.UZERO;
        message.transferLimit =
            object.transferLimit !== undefined && object.transferLimit !== null
                ? long_1.default.fromValue(object.transferLimit)
                : long_1.default.UZERO;
        message.endBlockerLimit =
            object.endBlockerLimit !== undefined && object.endBlockerLimit !== null
                ? long_1.default.fromValue(object.endBlockerLimit)
                : long_1.default.UZERO;
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
//# sourceMappingURL=params.js.map