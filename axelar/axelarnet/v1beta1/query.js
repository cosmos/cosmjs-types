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
exports.PendingIBCTransferCountResponse_TransfersByChainEntry = exports.PendingIBCTransferCountResponse = exports.PendingIBCTransferCountRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.axelarnet.v1beta1";
function createBasePendingIBCTransferCountRequest() {
    return {};
}
exports.PendingIBCTransferCountRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingIBCTransferCountRequest();
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
        const message = createBasePendingIBCTransferCountRequest();
        return message;
    },
};
function createBasePendingIBCTransferCountResponse() {
    return { transfersByChain: {} };
}
exports.PendingIBCTransferCountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.transfersByChain).forEach(([key, value]) => {
            exports.PendingIBCTransferCountResponse_TransfersByChainEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingIBCTransferCountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.PendingIBCTransferCountResponse_TransfersByChainEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.transfersByChain[entry1.key] = entry1.value;
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
            transfersByChain: isObject(object.transfersByChain)
                ? Object.entries(object.transfersByChain).reduce((acc, [key, value]) => {
                    acc[key] = Number(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        obj.transfersByChain = {};
        if (message.transfersByChain) {
            Object.entries(message.transfersByChain).forEach(([k, v]) => {
                obj.transfersByChain[k] = Math.round(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePendingIBCTransferCountResponse();
        message.transfersByChain = Object.entries((_a = object.transfersByChain) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Number(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBasePendingIBCTransferCountResponse_TransfersByChainEntry() {
    return { key: "", value: 0 };
}
exports.PendingIBCTransferCountResponse_TransfersByChainEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).uint32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingIBCTransferCountResponse_TransfersByChainEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.uint32();
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
            value: isSet(object.value) ? Number(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePendingIBCTransferCountResponse_TransfersByChainEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
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
//# sourceMappingURL=query.js.map