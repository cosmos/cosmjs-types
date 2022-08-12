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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../axelar/axelarnet/v1beta1/params");
const types_1 = require("../../../axelar/axelarnet/v1beta1/types");
exports.protobufPackage = "axelar.axelarnet.v1beta1";
function createBaseGenesisState() {
    return { params: undefined, collectorAddress: new Uint8Array(), chains: [], pendingTransfers: [] };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.collectorAddress.length !== 0) {
            writer.uint32(18).bytes(message.collectorAddress);
        }
        for (const v of message.chains) {
            types_1.CosmosChain.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.pendingTransfers) {
            types_1.IBCTransfer.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.collectorAddress = reader.bytes();
                    break;
                case 3:
                    message.chains.push(types_1.CosmosChain.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.pendingTransfers.push(types_1.IBCTransfer.decode(reader, reader.uint32()));
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
            collectorAddress: isSet(object.collectorAddress)
                ? bytesFromBase64(object.collectorAddress)
                : new Uint8Array(),
            chains: Array.isArray(object === null || object === void 0 ? void 0 : object.chains) ? object.chains.map((e) => types_1.CosmosChain.fromJSON(e)) : [],
            pendingTransfers: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingTransfers)
                ? object.pendingTransfers.map((e) => types_1.IBCTransfer.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        message.collectorAddress !== undefined &&
            (obj.collectorAddress = base64FromBytes(message.collectorAddress !== undefined ? message.collectorAddress : new Uint8Array()));
        if (message.chains) {
            obj.chains = message.chains.map((e) => (e ? types_1.CosmosChain.toJSON(e) : undefined));
        }
        else {
            obj.chains = [];
        }
        if (message.pendingTransfers) {
            obj.pendingTransfers = message.pendingTransfers.map((e) => (e ? types_1.IBCTransfer.toJSON(e) : undefined));
        }
        else {
            obj.pendingTransfers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.collectorAddress = (_a = object.collectorAddress) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chains = ((_b = object.chains) === null || _b === void 0 ? void 0 : _b.map((e) => types_1.CosmosChain.fromPartial(e))) || [];
        message.pendingTransfers = ((_c = object.pendingTransfers) === null || _c === void 0 ? void 0 : _c.map((e) => types_1.IBCTransfer.fromPartial(e))) || [];
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
//# sourceMappingURL=genesis.js.map