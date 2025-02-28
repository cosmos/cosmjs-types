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
exports.CallContractProposalMinDeposit = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "axelar.axelarnet.v1beta1";
function createBaseParams() {
    return {
        routeTimeoutWindow: long_1.default.UZERO,
        transferLimit: long_1.default.UZERO,
        endBlockerLimit: long_1.default.UZERO,
        callContractsProposalMinDeposits: [],
    };
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
        for (const v of message.callContractsProposalMinDeposits) {
            exports.CallContractProposalMinDeposit.encode(v, writer.uint32(42).fork()).ldelim();
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
                case 5:
                    message.callContractsProposalMinDeposits.push(exports.CallContractProposalMinDeposit.decode(reader, reader.uint32()));
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
            callContractsProposalMinDeposits: Array.isArray(object === null || object === void 0 ? void 0 : object.callContractsProposalMinDeposits)
                ? object.callContractsProposalMinDeposits.map((e) => exports.CallContractProposalMinDeposit.fromJSON(e))
                : [],
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
        if (message.callContractsProposalMinDeposits) {
            obj.callContractsProposalMinDeposits = message.callContractsProposalMinDeposits.map((e) => e ? exports.CallContractProposalMinDeposit.toJSON(e) : undefined);
        }
        else {
            obj.callContractsProposalMinDeposits = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
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
        message.callContractsProposalMinDeposits =
            ((_a = object.callContractsProposalMinDeposits) === null || _a === void 0 ? void 0 : _a.map((e) => exports.CallContractProposalMinDeposit.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseCallContractProposalMinDeposit() {
    return { chain: "", contractAddress: "", minDeposits: [] };
}
exports.CallContractProposalMinDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        for (const v of message.minDeposits) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCallContractProposalMinDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.contractAddress = reader.string();
                    break;
                case 3:
                    message.minDeposits.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            minDeposits: Array.isArray(object === null || object === void 0 ? void 0 : object.minDeposits)
                ? object.minDeposits.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        if (message.minDeposits) {
            obj.minDeposits = message.minDeposits.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.minDeposits = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCallContractProposalMinDeposit();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.contractAddress = (_b = object.contractAddress) !== null && _b !== void 0 ? _b : "";
        message.minDeposits = ((_c = object.minDeposits) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
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