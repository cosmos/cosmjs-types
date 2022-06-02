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
const params_1 = require("../../../axelar/tss/v1beta1/params");
const types_1 = require("../../../axelar/tss/v1beta1/types");
const types_2 = require("../../../axelar/tss/exported/v1beta1/types");
exports.protobufPackage = "axelar.tss.v1beta1";
function createBaseGenesisState() {
    return {
        params: undefined,
        keyRecoveryInfos: [],
        keys: [],
        multisigInfos: [],
        externalKeys: [],
        signatures: [],
        validatorStatuses: [],
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.keyRecoveryInfos) {
            types_1.KeyRecoveryInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.keys) {
            types_2.Key.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.multisigInfos) {
            types_1.MultisigInfo.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.externalKeys) {
            types_1.ExternalKeys.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.signatures) {
            types_2.Signature.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validatorStatuses) {
            types_1.ValidatorStatus.encode(v, writer.uint32(58).fork()).ldelim();
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
                    message.keyRecoveryInfos.push(types_1.KeyRecoveryInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.keys.push(types_2.Key.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.multisigInfos.push(types_1.MultisigInfo.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.externalKeys.push(types_1.ExternalKeys.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.signatures.push(types_2.Signature.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validatorStatuses.push(types_1.ValidatorStatus.decode(reader, reader.uint32()));
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
            keyRecoveryInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.keyRecoveryInfos)
                ? object.keyRecoveryInfos.map((e) => types_1.KeyRecoveryInfo.fromJSON(e))
                : [],
            keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map((e) => types_2.Key.fromJSON(e)) : [],
            multisigInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.multisigInfos)
                ? object.multisigInfos.map((e) => types_1.MultisigInfo.fromJSON(e))
                : [],
            externalKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.externalKeys)
                ? object.externalKeys.map((e) => types_1.ExternalKeys.fromJSON(e))
                : [],
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures)
                ? object.signatures.map((e) => types_2.Signature.fromJSON(e))
                : [],
            validatorStatuses: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorStatuses)
                ? object.validatorStatuses.map((e) => types_1.ValidatorStatus.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.keyRecoveryInfos) {
            obj.keyRecoveryInfos = message.keyRecoveryInfos.map((e) => (e ? types_1.KeyRecoveryInfo.toJSON(e) : undefined));
        }
        else {
            obj.keyRecoveryInfos = [];
        }
        if (message.keys) {
            obj.keys = message.keys.map((e) => (e ? types_2.Key.toJSON(e) : undefined));
        }
        else {
            obj.keys = [];
        }
        if (message.multisigInfos) {
            obj.multisigInfos = message.multisigInfos.map((e) => (e ? types_1.MultisigInfo.toJSON(e) : undefined));
        }
        else {
            obj.multisigInfos = [];
        }
        if (message.externalKeys) {
            obj.externalKeys = message.externalKeys.map((e) => (e ? types_1.ExternalKeys.toJSON(e) : undefined));
        }
        else {
            obj.externalKeys = [];
        }
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => (e ? types_2.Signature.toJSON(e) : undefined));
        }
        else {
            obj.signatures = [];
        }
        if (message.validatorStatuses) {
            obj.validatorStatuses = message.validatorStatuses.map((e) => e ? types_1.ValidatorStatus.toJSON(e) : undefined);
        }
        else {
            obj.validatorStatuses = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.keyRecoveryInfos = ((_a = object.keyRecoveryInfos) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.KeyRecoveryInfo.fromPartial(e))) || [];
        message.keys = ((_b = object.keys) === null || _b === void 0 ? void 0 : _b.map((e) => types_2.Key.fromPartial(e))) || [];
        message.multisigInfos = ((_c = object.multisigInfos) === null || _c === void 0 ? void 0 : _c.map((e) => types_1.MultisigInfo.fromPartial(e))) || [];
        message.externalKeys = ((_d = object.externalKeys) === null || _d === void 0 ? void 0 : _d.map((e) => types_1.ExternalKeys.fromPartial(e))) || [];
        message.signatures = ((_e = object.signatures) === null || _e === void 0 ? void 0 : _e.map((e) => types_2.Signature.fromPartial(e))) || [];
        message.validatorStatuses = ((_f = object.validatorStatuses) === null || _f === void 0 ? void 0 : _f.map((e) => types_1.ValidatorStatus.fromPartial(e))) || [];
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