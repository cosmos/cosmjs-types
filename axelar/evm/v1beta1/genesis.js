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
exports.GenesisState_Chain = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../axelar/evm/v1beta1/params");
const queuer_1 = require("../../../axelar/utils/v1beta1/queuer");
const types_1 = require("../../../axelar/evm/v1beta1/types");
exports.protobufPackage = "axelar.evm.v1beta1";
function createBaseGenesisState() {
    return { chains: [] };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.chains) {
            exports.GenesisState_Chain.encode(v, writer.uint32(26).fork()).ldelim();
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
                case 3:
                    message.chains.push(exports.GenesisState_Chain.decode(reader, reader.uint32()));
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
            chains: Array.isArray(object === null || object === void 0 ? void 0 : object.chains)
                ? object.chains.map((e) => exports.GenesisState_Chain.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chains) {
            obj.chains = message.chains.map((e) => (e ? exports.GenesisState_Chain.toJSON(e) : undefined));
        }
        else {
            obj.chains = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.chains = ((_a = object.chains) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GenesisState_Chain.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGenesisState_Chain() {
    return {
        params: undefined,
        burnerInfos: [],
        commandQueue: undefined,
        confirmedDeposits: [],
        burnedDeposits: [],
        commandBatches: [],
        gateway: undefined,
        tokens: [],
        events: [],
        confirmedEventQueue: undefined,
    };
}
exports.GenesisState_Chain = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.burnerInfos) {
            types_1.BurnerInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.commandQueue !== undefined) {
            queuer_1.QueueState.encode(message.commandQueue, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.confirmedDeposits) {
            types_1.ERC20Deposit.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.burnedDeposits) {
            types_1.ERC20Deposit.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.commandBatches) {
            types_1.CommandBatchMetadata.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.gateway !== undefined) {
            types_1.Gateway.encode(message.gateway, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.tokens) {
            types_1.ERC20TokenMetadata.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.events) {
            types_1.Event.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.confirmedEventQueue !== undefined) {
            queuer_1.QueueState.encode(message.confirmedEventQueue, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState_Chain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.burnerInfos.push(types_1.BurnerInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.commandQueue = queuer_1.QueueState.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.confirmedDeposits.push(types_1.ERC20Deposit.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.burnedDeposits.push(types_1.ERC20Deposit.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.commandBatches.push(types_1.CommandBatchMetadata.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.gateway = types_1.Gateway.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.tokens.push(types_1.ERC20TokenMetadata.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.events.push(types_1.Event.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.confirmedEventQueue = queuer_1.QueueState.decode(reader, reader.uint32());
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
            burnerInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.burnerInfos)
                ? object.burnerInfos.map((e) => types_1.BurnerInfo.fromJSON(e))
                : [],
            commandQueue: isSet(object.commandQueue) ? queuer_1.QueueState.fromJSON(object.commandQueue) : undefined,
            confirmedDeposits: Array.isArray(object === null || object === void 0 ? void 0 : object.confirmedDeposits)
                ? object.confirmedDeposits.map((e) => types_1.ERC20Deposit.fromJSON(e))
                : [],
            burnedDeposits: Array.isArray(object === null || object === void 0 ? void 0 : object.burnedDeposits)
                ? object.burnedDeposits.map((e) => types_1.ERC20Deposit.fromJSON(e))
                : [],
            commandBatches: Array.isArray(object === null || object === void 0 ? void 0 : object.commandBatches)
                ? object.commandBatches.map((e) => types_1.CommandBatchMetadata.fromJSON(e))
                : [],
            gateway: isSet(object.gateway) ? types_1.Gateway.fromJSON(object.gateway) : undefined,
            tokens: Array.isArray(object === null || object === void 0 ? void 0 : object.tokens)
                ? object.tokens.map((e) => types_1.ERC20TokenMetadata.fromJSON(e))
                : [],
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => types_1.Event.fromJSON(e)) : [],
            confirmedEventQueue: isSet(object.confirmedEventQueue)
                ? queuer_1.QueueState.fromJSON(object.confirmedEventQueue)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.burnerInfos) {
            obj.burnerInfos = message.burnerInfos.map((e) => (e ? types_1.BurnerInfo.toJSON(e) : undefined));
        }
        else {
            obj.burnerInfos = [];
        }
        message.commandQueue !== undefined &&
            (obj.commandQueue = message.commandQueue ? queuer_1.QueueState.toJSON(message.commandQueue) : undefined);
        if (message.confirmedDeposits) {
            obj.confirmedDeposits = message.confirmedDeposits.map((e) => (e ? types_1.ERC20Deposit.toJSON(e) : undefined));
        }
        else {
            obj.confirmedDeposits = [];
        }
        if (message.burnedDeposits) {
            obj.burnedDeposits = message.burnedDeposits.map((e) => (e ? types_1.ERC20Deposit.toJSON(e) : undefined));
        }
        else {
            obj.burnedDeposits = [];
        }
        if (message.commandBatches) {
            obj.commandBatches = message.commandBatches.map((e) => e ? types_1.CommandBatchMetadata.toJSON(e) : undefined);
        }
        else {
            obj.commandBatches = [];
        }
        message.gateway !== undefined &&
            (obj.gateway = message.gateway ? types_1.Gateway.toJSON(message.gateway) : undefined);
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => (e ? types_1.ERC20TokenMetadata.toJSON(e) : undefined));
        }
        else {
            obj.tokens = [];
        }
        if (message.events) {
            obj.events = message.events.map((e) => (e ? types_1.Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        message.confirmedEventQueue !== undefined &&
            (obj.confirmedEventQueue = message.confirmedEventQueue
                ? queuer_1.QueueState.toJSON(message.confirmedEventQueue)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseGenesisState_Chain();
        message.params =
            object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.burnerInfos = ((_a = object.burnerInfos) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.BurnerInfo.fromPartial(e))) || [];
        message.commandQueue =
            object.commandQueue !== undefined && object.commandQueue !== null
                ? queuer_1.QueueState.fromPartial(object.commandQueue)
                : undefined;
        message.confirmedDeposits = ((_b = object.confirmedDeposits) === null || _b === void 0 ? void 0 : _b.map((e) => types_1.ERC20Deposit.fromPartial(e))) || [];
        message.burnedDeposits = ((_c = object.burnedDeposits) === null || _c === void 0 ? void 0 : _c.map((e) => types_1.ERC20Deposit.fromPartial(e))) || [];
        message.commandBatches = ((_d = object.commandBatches) === null || _d === void 0 ? void 0 : _d.map((e) => types_1.CommandBatchMetadata.fromPartial(e))) || [];
        message.gateway =
            object.gateway !== undefined && object.gateway !== null
                ? types_1.Gateway.fromPartial(object.gateway)
                : undefined;
        message.tokens = ((_e = object.tokens) === null || _e === void 0 ? void 0 : _e.map((e) => types_1.ERC20TokenMetadata.fromPartial(e))) || [];
        message.events = ((_f = object.events) === null || _f === void 0 ? void 0 : _f.map((e) => types_1.Event.fromPartial(e))) || [];
        message.confirmedEventQueue =
            object.confirmedEventQueue !== undefined && object.confirmedEventQueue !== null
                ? queuer_1.QueueState.fromPartial(object.confirmedEventQueue)
                : undefined;
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
//# sourceMappingURL=genesis.js.map