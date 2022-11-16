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
exports.PollMetadata = exports.Gateway = exports.TokenDetails = exports.Asset = exports.TransferKey = exports.SigMetadata = exports.CommandBatchMetadata = exports.Command = exports.TransactionMetadata = exports.ERC20TokenMetadata = exports.ERC20Deposit = exports.BurnerInfo = exports.NetworkInfo = exports.EventMultisigOperatorshipTransferred = exports.EventMultisigOwnershipTransferred = exports.EventTokenDeployed = exports.EventTransfer = exports.EventContractCallWithToken = exports.EventContractCall = exports.EventTokenSent = exports.Event = exports.VoteEvents = exports.event_StatusToJSON = exports.event_StatusFromJSON = exports.Event_Status = exports.depositStatusToJSON = exports.depositStatusFromJSON = exports.DepositStatus = exports.sigTypeToJSON = exports.sigTypeFromJSON = exports.SigType = exports.batchedCommandsStatusToJSON = exports.batchedCommandsStatusFromJSON = exports.BatchedCommandsStatus = exports.commandTypeToJSON = exports.commandTypeFromJSON = exports.CommandType = exports.statusToJSON = exports.statusFromJSON = exports.Status = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "axelar.evm.v1beta1";
var Status;
(function (Status) {
    /**
     * STATUS_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
     * be powers of 2
     */
    Status[Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Status[Status["STATUS_INITIALIZED"] = 1] = "STATUS_INITIALIZED";
    Status[Status["STATUS_PENDING"] = 2] = "STATUS_PENDING";
    Status[Status["STATUS_CONFIRMED"] = 4] = "STATUS_CONFIRMED";
    Status[Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Status = exports.Status || (exports.Status = {}));
function statusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Status.STATUS_UNSPECIFIED;
        case 1:
        case "STATUS_INITIALIZED":
            return Status.STATUS_INITIALIZED;
        case 2:
        case "STATUS_PENDING":
            return Status.STATUS_PENDING;
        case 4:
        case "STATUS_CONFIRMED":
            return Status.STATUS_CONFIRMED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Status.UNRECOGNIZED;
    }
}
exports.statusFromJSON = statusFromJSON;
function statusToJSON(object) {
    switch (object) {
        case Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Status.STATUS_INITIALIZED:
            return "STATUS_INITIALIZED";
        case Status.STATUS_PENDING:
            return "STATUS_PENDING";
        case Status.STATUS_CONFIRMED:
            return "STATUS_CONFIRMED";
        case Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.statusToJSON = statusToJSON;
var CommandType;
(function (CommandType) {
    CommandType[CommandType["COMMAND_TYPE_UNSPECIFIED"] = 0] = "COMMAND_TYPE_UNSPECIFIED";
    CommandType[CommandType["COMMAND_TYPE_MINT_TOKEN"] = 1] = "COMMAND_TYPE_MINT_TOKEN";
    CommandType[CommandType["COMMAND_TYPE_DEPLOY_TOKEN"] = 2] = "COMMAND_TYPE_DEPLOY_TOKEN";
    CommandType[CommandType["COMMAND_TYPE_BURN_TOKEN"] = 3] = "COMMAND_TYPE_BURN_TOKEN";
    CommandType[CommandType["COMMAND_TYPE_TRANSFER_OPERATORSHIP"] = 4] = "COMMAND_TYPE_TRANSFER_OPERATORSHIP";
    CommandType[CommandType["COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT"] = 5] = "COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT";
    CommandType[CommandType["COMMAND_TYPE_APPROVE_CONTRACT_CALL"] = 6] = "COMMAND_TYPE_APPROVE_CONTRACT_CALL";
    CommandType[CommandType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CommandType = exports.CommandType || (exports.CommandType = {}));
function commandTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "COMMAND_TYPE_UNSPECIFIED":
            return CommandType.COMMAND_TYPE_UNSPECIFIED;
        case 1:
        case "COMMAND_TYPE_MINT_TOKEN":
            return CommandType.COMMAND_TYPE_MINT_TOKEN;
        case 2:
        case "COMMAND_TYPE_DEPLOY_TOKEN":
            return CommandType.COMMAND_TYPE_DEPLOY_TOKEN;
        case 3:
        case "COMMAND_TYPE_BURN_TOKEN":
            return CommandType.COMMAND_TYPE_BURN_TOKEN;
        case 4:
        case "COMMAND_TYPE_TRANSFER_OPERATORSHIP":
            return CommandType.COMMAND_TYPE_TRANSFER_OPERATORSHIP;
        case 5:
        case "COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT":
            return CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT;
        case 6:
        case "COMMAND_TYPE_APPROVE_CONTRACT_CALL":
            return CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CommandType.UNRECOGNIZED;
    }
}
exports.commandTypeFromJSON = commandTypeFromJSON;
function commandTypeToJSON(object) {
    switch (object) {
        case CommandType.COMMAND_TYPE_UNSPECIFIED:
            return "COMMAND_TYPE_UNSPECIFIED";
        case CommandType.COMMAND_TYPE_MINT_TOKEN:
            return "COMMAND_TYPE_MINT_TOKEN";
        case CommandType.COMMAND_TYPE_DEPLOY_TOKEN:
            return "COMMAND_TYPE_DEPLOY_TOKEN";
        case CommandType.COMMAND_TYPE_BURN_TOKEN:
            return "COMMAND_TYPE_BURN_TOKEN";
        case CommandType.COMMAND_TYPE_TRANSFER_OPERATORSHIP:
            return "COMMAND_TYPE_TRANSFER_OPERATORSHIP";
        case CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT:
            return "COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT";
        case CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL:
            return "COMMAND_TYPE_APPROVE_CONTRACT_CALL";
        case CommandType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.commandTypeToJSON = commandTypeToJSON;
var BatchedCommandsStatus;
(function (BatchedCommandsStatus) {
    BatchedCommandsStatus[BatchedCommandsStatus["BATCHED_COMMANDS_STATUS_UNSPECIFIED"] = 0] = "BATCHED_COMMANDS_STATUS_UNSPECIFIED";
    BatchedCommandsStatus[BatchedCommandsStatus["BATCHED_COMMANDS_STATUS_SIGNING"] = 1] = "BATCHED_COMMANDS_STATUS_SIGNING";
    BatchedCommandsStatus[BatchedCommandsStatus["BATCHED_COMMANDS_STATUS_ABORTED"] = 2] = "BATCHED_COMMANDS_STATUS_ABORTED";
    BatchedCommandsStatus[BatchedCommandsStatus["BATCHED_COMMANDS_STATUS_SIGNED"] = 3] = "BATCHED_COMMANDS_STATUS_SIGNED";
    BatchedCommandsStatus[BatchedCommandsStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BatchedCommandsStatus = exports.BatchedCommandsStatus || (exports.BatchedCommandsStatus = {}));
function batchedCommandsStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BATCHED_COMMANDS_STATUS_UNSPECIFIED":
            return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_UNSPECIFIED;
        case 1:
        case "BATCHED_COMMANDS_STATUS_SIGNING":
            return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNING;
        case 2:
        case "BATCHED_COMMANDS_STATUS_ABORTED":
            return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_ABORTED;
        case 3:
        case "BATCHED_COMMANDS_STATUS_SIGNED":
            return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BatchedCommandsStatus.UNRECOGNIZED;
    }
}
exports.batchedCommandsStatusFromJSON = batchedCommandsStatusFromJSON;
function batchedCommandsStatusToJSON(object) {
    switch (object) {
        case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_UNSPECIFIED:
            return "BATCHED_COMMANDS_STATUS_UNSPECIFIED";
        case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNING:
            return "BATCHED_COMMANDS_STATUS_SIGNING";
        case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_ABORTED:
            return "BATCHED_COMMANDS_STATUS_ABORTED";
        case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNED:
            return "BATCHED_COMMANDS_STATUS_SIGNED";
        case BatchedCommandsStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.batchedCommandsStatusToJSON = batchedCommandsStatusToJSON;
var SigType;
(function (SigType) {
    SigType[SigType["SIG_TYPE_UNSPECIFIED"] = 0] = "SIG_TYPE_UNSPECIFIED";
    SigType[SigType["SIG_TYPE_TX"] = 1] = "SIG_TYPE_TX";
    SigType[SigType["SIG_TYPE_COMMAND"] = 2] = "SIG_TYPE_COMMAND";
    SigType[SigType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SigType = exports.SigType || (exports.SigType = {}));
function sigTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIG_TYPE_UNSPECIFIED":
            return SigType.SIG_TYPE_UNSPECIFIED;
        case 1:
        case "SIG_TYPE_TX":
            return SigType.SIG_TYPE_TX;
        case 2:
        case "SIG_TYPE_COMMAND":
            return SigType.SIG_TYPE_COMMAND;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SigType.UNRECOGNIZED;
    }
}
exports.sigTypeFromJSON = sigTypeFromJSON;
function sigTypeToJSON(object) {
    switch (object) {
        case SigType.SIG_TYPE_UNSPECIFIED:
            return "SIG_TYPE_UNSPECIFIED";
        case SigType.SIG_TYPE_TX:
            return "SIG_TYPE_TX";
        case SigType.SIG_TYPE_COMMAND:
            return "SIG_TYPE_COMMAND";
        case SigType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sigTypeToJSON = sigTypeToJSON;
var DepositStatus;
(function (DepositStatus) {
    DepositStatus[DepositStatus["DEPOSIT_STATUS_UNSPECIFIED"] = 0] = "DEPOSIT_STATUS_UNSPECIFIED";
    DepositStatus[DepositStatus["DEPOSIT_STATUS_PENDING"] = 1] = "DEPOSIT_STATUS_PENDING";
    DepositStatus[DepositStatus["DEPOSIT_STATUS_CONFIRMED"] = 2] = "DEPOSIT_STATUS_CONFIRMED";
    DepositStatus[DepositStatus["DEPOSIT_STATUS_BURNED"] = 3] = "DEPOSIT_STATUS_BURNED";
    DepositStatus[DepositStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DepositStatus = exports.DepositStatus || (exports.DepositStatus = {}));
function depositStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "DEPOSIT_STATUS_UNSPECIFIED":
            return DepositStatus.DEPOSIT_STATUS_UNSPECIFIED;
        case 1:
        case "DEPOSIT_STATUS_PENDING":
            return DepositStatus.DEPOSIT_STATUS_PENDING;
        case 2:
        case "DEPOSIT_STATUS_CONFIRMED":
            return DepositStatus.DEPOSIT_STATUS_CONFIRMED;
        case 3:
        case "DEPOSIT_STATUS_BURNED":
            return DepositStatus.DEPOSIT_STATUS_BURNED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DepositStatus.UNRECOGNIZED;
    }
}
exports.depositStatusFromJSON = depositStatusFromJSON;
function depositStatusToJSON(object) {
    switch (object) {
        case DepositStatus.DEPOSIT_STATUS_UNSPECIFIED:
            return "DEPOSIT_STATUS_UNSPECIFIED";
        case DepositStatus.DEPOSIT_STATUS_PENDING:
            return "DEPOSIT_STATUS_PENDING";
        case DepositStatus.DEPOSIT_STATUS_CONFIRMED:
            return "DEPOSIT_STATUS_CONFIRMED";
        case DepositStatus.DEPOSIT_STATUS_BURNED:
            return "DEPOSIT_STATUS_BURNED";
        case DepositStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.depositStatusToJSON = depositStatusToJSON;
var Event_Status;
(function (Event_Status) {
    Event_Status[Event_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Event_Status[Event_Status["STATUS_CONFIRMED"] = 1] = "STATUS_CONFIRMED";
    Event_Status[Event_Status["STATUS_COMPLETED"] = 2] = "STATUS_COMPLETED";
    Event_Status[Event_Status["STATUS_FAILED"] = 3] = "STATUS_FAILED";
    Event_Status[Event_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Event_Status = exports.Event_Status || (exports.Event_Status = {}));
function event_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Event_Status.STATUS_UNSPECIFIED;
        case 1:
        case "STATUS_CONFIRMED":
            return Event_Status.STATUS_CONFIRMED;
        case 2:
        case "STATUS_COMPLETED":
            return Event_Status.STATUS_COMPLETED;
        case 3:
        case "STATUS_FAILED":
            return Event_Status.STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Event_Status.UNRECOGNIZED;
    }
}
exports.event_StatusFromJSON = event_StatusFromJSON;
function event_StatusToJSON(object) {
    switch (object) {
        case Event_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Event_Status.STATUS_CONFIRMED:
            return "STATUS_CONFIRMED";
        case Event_Status.STATUS_COMPLETED:
            return "STATUS_COMPLETED";
        case Event_Status.STATUS_FAILED:
            return "STATUS_FAILED";
        case Event_Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.event_StatusToJSON = event_StatusToJSON;
function createBaseVoteEvents() {
    return { chain: "", events: [] };
}
exports.VoteEvents = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        if (message.events) {
            obj.events = message.events.map((e) => (e ? exports.Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVoteEvents();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.events = ((_b = object.events) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Event.fromPartial(e))) || [];
        return message;
    },
};
function createBaseEvent() {
    return {
        chain: "",
        txId: new Uint8Array(),
        index: long_1.default.UZERO,
        status: 0,
        tokenSent: undefined,
        contractCall: undefined,
        contractCallWithToken: undefined,
        transfer: undefined,
        tokenDeployed: undefined,
        multisigOwnershipTransferred: undefined,
        multisigOperatorshipTransferred: undefined,
    };
}
exports.Event = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(18).bytes(message.txId);
        }
        if (!message.index.isZero()) {
            writer.uint32(24).uint64(message.index);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokenSent !== undefined) {
            exports.EventTokenSent.encode(message.tokenSent, writer.uint32(42).fork()).ldelim();
        }
        if (message.contractCall !== undefined) {
            exports.EventContractCall.encode(message.contractCall, writer.uint32(50).fork()).ldelim();
        }
        if (message.contractCallWithToken !== undefined) {
            exports.EventContractCallWithToken.encode(message.contractCallWithToken, writer.uint32(58).fork()).ldelim();
        }
        if (message.transfer !== undefined) {
            exports.EventTransfer.encode(message.transfer, writer.uint32(66).fork()).ldelim();
        }
        if (message.tokenDeployed !== undefined) {
            exports.EventTokenDeployed.encode(message.tokenDeployed, writer.uint32(74).fork()).ldelim();
        }
        if (message.multisigOwnershipTransferred !== undefined) {
            exports.EventMultisigOwnershipTransferred.encode(message.multisigOwnershipTransferred, writer.uint32(82).fork()).ldelim();
        }
        if (message.multisigOperatorshipTransferred !== undefined) {
            exports.EventMultisigOperatorshipTransferred.encode(message.multisigOperatorshipTransferred, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.txId = reader.bytes();
                    break;
                case 3:
                    message.index = reader.uint64();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokenSent = exports.EventTokenSent.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.contractCall = exports.EventContractCall.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.contractCallWithToken = exports.EventContractCallWithToken.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.transfer = exports.EventTransfer.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.tokenDeployed = exports.EventTokenDeployed.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.multisigOwnershipTransferred = exports.EventMultisigOwnershipTransferred.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.multisigOperatorshipTransferred = exports.EventMultisigOperatorshipTransferred.decode(reader, reader.uint32());
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            index: isSet(object.index) ? long_1.default.fromValue(object.index) : long_1.default.UZERO,
            status: isSet(object.status) ? event_StatusFromJSON(object.status) : 0,
            tokenSent: isSet(object.tokenSent) ? exports.EventTokenSent.fromJSON(object.tokenSent) : undefined,
            contractCall: isSet(object.contractCall) ? exports.EventContractCall.fromJSON(object.contractCall) : undefined,
            contractCallWithToken: isSet(object.contractCallWithToken)
                ? exports.EventContractCallWithToken.fromJSON(object.contractCallWithToken)
                : undefined,
            transfer: isSet(object.transfer) ? exports.EventTransfer.fromJSON(object.transfer) : undefined,
            tokenDeployed: isSet(object.tokenDeployed)
                ? exports.EventTokenDeployed.fromJSON(object.tokenDeployed)
                : undefined,
            multisigOwnershipTransferred: isSet(object.multisigOwnershipTransferred)
                ? exports.EventMultisigOwnershipTransferred.fromJSON(object.multisigOwnershipTransferred)
                : undefined,
            multisigOperatorshipTransferred: isSet(object.multisigOperatorshipTransferred)
                ? exports.EventMultisigOperatorshipTransferred.fromJSON(object.multisigOperatorshipTransferred)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.index !== undefined && (obj.index = (message.index || long_1.default.UZERO).toString());
        message.status !== undefined && (obj.status = event_StatusToJSON(message.status));
        message.tokenSent !== undefined &&
            (obj.tokenSent = message.tokenSent ? exports.EventTokenSent.toJSON(message.tokenSent) : undefined);
        message.contractCall !== undefined &&
            (obj.contractCall = message.contractCall ? exports.EventContractCall.toJSON(message.contractCall) : undefined);
        message.contractCallWithToken !== undefined &&
            (obj.contractCallWithToken = message.contractCallWithToken
                ? exports.EventContractCallWithToken.toJSON(message.contractCallWithToken)
                : undefined);
        message.transfer !== undefined &&
            (obj.transfer = message.transfer ? exports.EventTransfer.toJSON(message.transfer) : undefined);
        message.tokenDeployed !== undefined &&
            (obj.tokenDeployed = message.tokenDeployed
                ? exports.EventTokenDeployed.toJSON(message.tokenDeployed)
                : undefined);
        message.multisigOwnershipTransferred !== undefined &&
            (obj.multisigOwnershipTransferred = message.multisigOwnershipTransferred
                ? exports.EventMultisigOwnershipTransferred.toJSON(message.multisigOwnershipTransferred)
                : undefined);
        message.multisigOperatorshipTransferred !== undefined &&
            (obj.multisigOperatorshipTransferred = message.multisigOperatorshipTransferred
                ? exports.EventMultisigOperatorshipTransferred.toJSON(message.multisigOperatorshipTransferred)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEvent();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.txId = (_b = object.txId) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.index =
            object.index !== undefined && object.index !== null ? long_1.default.fromValue(object.index) : long_1.default.UZERO;
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
        message.tokenSent =
            object.tokenSent !== undefined && object.tokenSent !== null
                ? exports.EventTokenSent.fromPartial(object.tokenSent)
                : undefined;
        message.contractCall =
            object.contractCall !== undefined && object.contractCall !== null
                ? exports.EventContractCall.fromPartial(object.contractCall)
                : undefined;
        message.contractCallWithToken =
            object.contractCallWithToken !== undefined && object.contractCallWithToken !== null
                ? exports.EventContractCallWithToken.fromPartial(object.contractCallWithToken)
                : undefined;
        message.transfer =
            object.transfer !== undefined && object.transfer !== null
                ? exports.EventTransfer.fromPartial(object.transfer)
                : undefined;
        message.tokenDeployed =
            object.tokenDeployed !== undefined && object.tokenDeployed !== null
                ? exports.EventTokenDeployed.fromPartial(object.tokenDeployed)
                : undefined;
        message.multisigOwnershipTransferred =
            object.multisigOwnershipTransferred !== undefined && object.multisigOwnershipTransferred !== null
                ? exports.EventMultisigOwnershipTransferred.fromPartial(object.multisigOwnershipTransferred)
                : undefined;
        message.multisigOperatorshipTransferred =
            object.multisigOperatorshipTransferred !== undefined && object.multisigOperatorshipTransferred !== null
                ? exports.EventMultisigOperatorshipTransferred.fromPartial(object.multisigOperatorshipTransferred)
                : undefined;
        return message;
    },
};
function createBaseEventTokenSent() {
    return {
        sender: new Uint8Array(),
        destinationChain: "",
        destinationAddress: "",
        symbol: "",
        amount: new Uint8Array(),
    };
}
exports.EventTokenSent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(18).string(message.destinationChain);
        }
        if (message.destinationAddress !== "") {
            writer.uint32(26).string(message.destinationAddress);
        }
        if (message.symbol !== "") {
            writer.uint32(34).string(message.symbol);
        }
        if (message.amount.length !== 0) {
            writer.uint32(42).bytes(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTokenSent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.destinationChain = reader.string();
                    break;
                case 3:
                    message.destinationAddress = reader.string();
                    break;
                case 4:
                    message.symbol = reader.string();
                    break;
                case 5:
                    message.amount = reader.bytes();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.destinationAddress !== undefined && (obj.destinationAddress = message.destinationAddress);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.amount !== undefined &&
            (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseEventTokenSent();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.destinationChain = (_b = object.destinationChain) !== null && _b !== void 0 ? _b : "";
        message.destinationAddress = (_c = object.destinationAddress) !== null && _c !== void 0 ? _c : "";
        message.symbol = (_d = object.symbol) !== null && _d !== void 0 ? _d : "";
        message.amount = (_e = object.amount) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseEventContractCall() {
    return {
        sender: new Uint8Array(),
        destinationChain: "",
        contractAddress: "",
        payloadHash: new Uint8Array(),
    };
}
exports.EventContractCall = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(18).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(26).string(message.contractAddress);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(34).bytes(message.payloadHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventContractCall();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.destinationChain = reader.string();
                    break;
                case 3:
                    message.contractAddress = reader.string();
                    break;
                case 4:
                    message.payloadHash = reader.bytes();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.payloadHash !== undefined &&
            (obj.payloadHash = base64FromBytes(message.payloadHash !== undefined ? message.payloadHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEventContractCall();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.destinationChain = (_b = object.destinationChain) !== null && _b !== void 0 ? _b : "";
        message.contractAddress = (_c = object.contractAddress) !== null && _c !== void 0 ? _c : "";
        message.payloadHash = (_d = object.payloadHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseEventContractCallWithToken() {
    return {
        sender: new Uint8Array(),
        destinationChain: "",
        contractAddress: "",
        payloadHash: new Uint8Array(),
        symbol: "",
        amount: new Uint8Array(),
    };
}
exports.EventContractCallWithToken = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(18).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(26).string(message.contractAddress);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(34).bytes(message.payloadHash);
        }
        if (message.symbol !== "") {
            writer.uint32(42).string(message.symbol);
        }
        if (message.amount.length !== 0) {
            writer.uint32(50).bytes(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventContractCallWithToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.destinationChain = reader.string();
                    break;
                case 3:
                    message.contractAddress = reader.string();
                    break;
                case 4:
                    message.payloadHash = reader.bytes();
                    break;
                case 5:
                    message.symbol = reader.string();
                    break;
                case 6:
                    message.amount = reader.bytes();
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
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.payloadHash !== undefined &&
            (obj.payloadHash = base64FromBytes(message.payloadHash !== undefined ? message.payloadHash : new Uint8Array()));
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.amount !== undefined &&
            (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseEventContractCallWithToken();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.destinationChain = (_b = object.destinationChain) !== null && _b !== void 0 ? _b : "";
        message.contractAddress = (_c = object.contractAddress) !== null && _c !== void 0 ? _c : "";
        message.payloadHash = (_d = object.payloadHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.symbol = (_e = object.symbol) !== null && _e !== void 0 ? _e : "";
        message.amount = (_f = object.amount) !== null && _f !== void 0 ? _f : new Uint8Array();
        return message;
    },
};
function createBaseEventTransfer() {
    return { to: new Uint8Array(), amount: new Uint8Array() };
}
exports.EventTransfer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.to.length !== 0) {
            writer.uint32(10).bytes(message.to);
        }
        if (message.amount.length !== 0) {
            writer.uint32(18).bytes(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.to = reader.bytes();
                    break;
                case 2:
                    message.amount = reader.bytes();
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
            to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(),
            amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.to !== undefined &&
            (obj.to = base64FromBytes(message.to !== undefined ? message.to : new Uint8Array()));
        message.amount !== undefined &&
            (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventTransfer();
        message.to = (_a = object.to) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseEventTokenDeployed() {
    return { symbol: "", tokenAddress: new Uint8Array() };
}
exports.EventTokenDeployed = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (message.tokenAddress.length !== 0) {
            writer.uint32(18).bytes(message.tokenAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTokenDeployed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.tokenAddress = reader.bytes();
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
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.tokenAddress !== undefined &&
            (obj.tokenAddress = base64FromBytes(message.tokenAddress !== undefined ? message.tokenAddress : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventTokenDeployed();
        message.symbol = (_a = object.symbol) !== null && _a !== void 0 ? _a : "";
        message.tokenAddress = (_b = object.tokenAddress) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseEventMultisigOwnershipTransferred() {
    return { preOwners: [], prevThreshold: new Uint8Array(), newOwners: [], newThreshold: new Uint8Array() };
}
exports.EventMultisigOwnershipTransferred = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.preOwners) {
            writer.uint32(10).bytes(v);
        }
        if (message.prevThreshold.length !== 0) {
            writer.uint32(18).bytes(message.prevThreshold);
        }
        for (const v of message.newOwners) {
            writer.uint32(26).bytes(v);
        }
        if (message.newThreshold.length !== 0) {
            writer.uint32(34).bytes(message.newThreshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMultisigOwnershipTransferred();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.preOwners.push(reader.bytes());
                    break;
                case 2:
                    message.prevThreshold = reader.bytes();
                    break;
                case 3:
                    message.newOwners.push(reader.bytes());
                    break;
                case 4:
                    message.newThreshold = reader.bytes();
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
            preOwners: Array.isArray(object === null || object === void 0 ? void 0 : object.preOwners) ? object.preOwners.map((e) => bytesFromBase64(e)) : [],
            prevThreshold: isSet(object.prevThreshold) ? bytesFromBase64(object.prevThreshold) : new Uint8Array(),
            newOwners: Array.isArray(object === null || object === void 0 ? void 0 : object.newOwners) ? object.newOwners.map((e) => bytesFromBase64(e)) : [],
            newThreshold: isSet(object.newThreshold) ? bytesFromBase64(object.newThreshold) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.preOwners) {
            obj.preOwners = message.preOwners.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.preOwners = [];
        }
        message.prevThreshold !== undefined &&
            (obj.prevThreshold = base64FromBytes(message.prevThreshold !== undefined ? message.prevThreshold : new Uint8Array()));
        if (message.newOwners) {
            obj.newOwners = message.newOwners.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.newOwners = [];
        }
        message.newThreshold !== undefined &&
            (obj.newThreshold = base64FromBytes(message.newThreshold !== undefined ? message.newThreshold : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEventMultisigOwnershipTransferred();
        message.preOwners = ((_a = object.preOwners) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.prevThreshold = (_b = object.prevThreshold) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.newOwners = ((_c = object.newOwners) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.newThreshold = (_d = object.newThreshold) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseEventMultisigOperatorshipTransferred() {
    return { newOperators: [], newThreshold: new Uint8Array(), newWeights: [] };
}
exports.EventMultisigOperatorshipTransferred = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.newOperators) {
            writer.uint32(26).bytes(v);
        }
        if (message.newThreshold.length !== 0) {
            writer.uint32(34).bytes(message.newThreshold);
        }
        for (const v of message.newWeights) {
            writer.uint32(42).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMultisigOperatorshipTransferred();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.newOperators.push(reader.bytes());
                    break;
                case 4:
                    message.newThreshold = reader.bytes();
                    break;
                case 5:
                    message.newWeights.push(reader.bytes());
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
            newOperators: Array.isArray(object === null || object === void 0 ? void 0 : object.newOperators)
                ? object.newOperators.map((e) => bytesFromBase64(e))
                : [],
            newThreshold: isSet(object.newThreshold) ? bytesFromBase64(object.newThreshold) : new Uint8Array(),
            newWeights: Array.isArray(object === null || object === void 0 ? void 0 : object.newWeights)
                ? object.newWeights.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.newOperators) {
            obj.newOperators = message.newOperators.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.newOperators = [];
        }
        message.newThreshold !== undefined &&
            (obj.newThreshold = base64FromBytes(message.newThreshold !== undefined ? message.newThreshold : new Uint8Array()));
        if (message.newWeights) {
            obj.newWeights = message.newWeights.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.newWeights = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventMultisigOperatorshipTransferred();
        message.newOperators = ((_a = object.newOperators) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.newThreshold = (_b = object.newThreshold) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.newWeights = ((_c = object.newWeights) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseNetworkInfo() {
    return { name: "", id: new Uint8Array() };
}
exports.NetworkInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.id.length !== 0) {
            writer.uint32(18).bytes(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNetworkInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.id = reader.bytes();
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
            name: isSet(object.name) ? String(object.name) : "",
            id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.id !== undefined &&
            (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseNetworkInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseBurnerInfo() {
    return {
        burnerAddress: new Uint8Array(),
        tokenAddress: new Uint8Array(),
        destinationChain: "",
        symbol: "",
        asset: "",
        salt: new Uint8Array(),
    };
}
exports.BurnerInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.burnerAddress.length !== 0) {
            writer.uint32(10).bytes(message.burnerAddress);
        }
        if (message.tokenAddress.length !== 0) {
            writer.uint32(18).bytes(message.tokenAddress);
        }
        if (message.destinationChain !== "") {
            writer.uint32(26).string(message.destinationChain);
        }
        if (message.symbol !== "") {
            writer.uint32(34).string(message.symbol);
        }
        if (message.asset !== "") {
            writer.uint32(42).string(message.asset);
        }
        if (message.salt.length !== 0) {
            writer.uint32(50).bytes(message.salt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBurnerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.burnerAddress = reader.bytes();
                    break;
                case 2:
                    message.tokenAddress = reader.bytes();
                    break;
                case 3:
                    message.destinationChain = reader.string();
                    break;
                case 4:
                    message.symbol = reader.string();
                    break;
                case 5:
                    message.asset = reader.string();
                    break;
                case 6:
                    message.salt = reader.bytes();
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
            burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
            tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
            salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.burnerAddress !== undefined &&
            (obj.burnerAddress = base64FromBytes(message.burnerAddress !== undefined ? message.burnerAddress : new Uint8Array()));
        message.tokenAddress !== undefined &&
            (obj.tokenAddress = base64FromBytes(message.tokenAddress !== undefined ? message.tokenAddress : new Uint8Array()));
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.asset !== undefined && (obj.asset = message.asset);
        message.salt !== undefined &&
            (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseBurnerInfo();
        message.burnerAddress = (_a = object.burnerAddress) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.tokenAddress = (_b = object.tokenAddress) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.destinationChain = (_c = object.destinationChain) !== null && _c !== void 0 ? _c : "";
        message.symbol = (_d = object.symbol) !== null && _d !== void 0 ? _d : "";
        message.asset = (_e = object.asset) !== null && _e !== void 0 ? _e : "";
        message.salt = (_f = object.salt) !== null && _f !== void 0 ? _f : new Uint8Array();
        return message;
    },
};
function createBaseERC20Deposit() {
    return {
        txId: new Uint8Array(),
        amount: new Uint8Array(),
        asset: "",
        destinationChain: "",
        burnerAddress: new Uint8Array(),
        logIndex: long_1.default.UZERO,
    };
}
exports.ERC20Deposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.amount.length !== 0) {
            writer.uint32(18).bytes(message.amount);
        }
        if (message.asset !== "") {
            writer.uint32(26).string(message.asset);
        }
        if (message.destinationChain !== "") {
            writer.uint32(34).string(message.destinationChain);
        }
        if (message.burnerAddress.length !== 0) {
            writer.uint32(42).bytes(message.burnerAddress);
        }
        if (!message.logIndex.isZero()) {
            writer.uint32(48).uint64(message.logIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20Deposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.bytes();
                    break;
                case 2:
                    message.amount = reader.bytes();
                    break;
                case 3:
                    message.asset = reader.string();
                    break;
                case 4:
                    message.destinationChain = reader.string();
                    break;
                case 5:
                    message.burnerAddress = reader.bytes();
                    break;
                case 6:
                    message.logIndex = reader.uint64();
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
            asset: isSet(object.asset) ? String(object.asset) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
            logIndex: isSet(object.logIndex) ? long_1.default.fromValue(object.logIndex) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.amount !== undefined &&
            (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
        message.asset !== undefined && (obj.asset = message.asset);
        message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
        message.burnerAddress !== undefined &&
            (obj.burnerAddress = base64FromBytes(message.burnerAddress !== undefined ? message.burnerAddress : new Uint8Array()));
        message.logIndex !== undefined && (obj.logIndex = (message.logIndex || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseERC20Deposit();
        message.txId = (_a = object.txId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.asset = (_c = object.asset) !== null && _c !== void 0 ? _c : "";
        message.destinationChain = (_d = object.destinationChain) !== null && _d !== void 0 ? _d : "";
        message.burnerAddress = (_e = object.burnerAddress) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.logIndex =
            object.logIndex !== undefined && object.logIndex !== null
                ? long_1.default.fromValue(object.logIndex)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseERC20TokenMetadata() {
    return {
        asset: "",
        chainId: new Uint8Array(),
        details: undefined,
        tokenAddress: "",
        txHash: "",
        status: 0,
        isExternal: false,
        burnerCode: new Uint8Array(),
    };
}
exports.ERC20TokenMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.asset !== "") {
            writer.uint32(10).string(message.asset);
        }
        if (message.chainId.length !== 0) {
            writer.uint32(18).bytes(message.chainId);
        }
        if (message.details !== undefined) {
            exports.TokenDetails.encode(message.details, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenAddress !== "") {
            writer.uint32(34).string(message.tokenAddress);
        }
        if (message.txHash !== "") {
            writer.uint32(42).string(message.txHash);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.isExternal === true) {
            writer.uint32(64).bool(message.isExternal);
        }
        if (message.burnerCode.length !== 0) {
            writer.uint32(74).bytes(message.burnerCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20TokenMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = reader.string();
                    break;
                case 2:
                    message.chainId = reader.bytes();
                    break;
                case 3:
                    message.details = exports.TokenDetails.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenAddress = reader.string();
                    break;
                case 5:
                    message.txHash = reader.string();
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.isExternal = reader.bool();
                    break;
                case 9:
                    message.burnerCode = reader.bytes();
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
            asset: isSet(object.asset) ? String(object.asset) : "",
            chainId: isSet(object.chainId) ? bytesFromBase64(object.chainId) : new Uint8Array(),
            details: isSet(object.details) ? exports.TokenDetails.fromJSON(object.details) : undefined,
            tokenAddress: isSet(object.tokenAddress) ? String(object.tokenAddress) : "",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
            status: isSet(object.status) ? statusFromJSON(object.status) : 0,
            isExternal: isSet(object.isExternal) ? Boolean(object.isExternal) : false,
            burnerCode: isSet(object.burnerCode) ? bytesFromBase64(object.burnerCode) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.asset !== undefined && (obj.asset = message.asset);
        message.chainId !== undefined &&
            (obj.chainId = base64FromBytes(message.chainId !== undefined ? message.chainId : new Uint8Array()));
        message.details !== undefined &&
            (obj.details = message.details ? exports.TokenDetails.toJSON(message.details) : undefined);
        message.tokenAddress !== undefined && (obj.tokenAddress = message.tokenAddress);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.status !== undefined && (obj.status = statusToJSON(message.status));
        message.isExternal !== undefined && (obj.isExternal = message.isExternal);
        message.burnerCode !== undefined &&
            (obj.burnerCode = base64FromBytes(message.burnerCode !== undefined ? message.burnerCode : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseERC20TokenMetadata();
        message.asset = (_a = object.asset) !== null && _a !== void 0 ? _a : "";
        message.chainId = (_b = object.chainId) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.details =
            object.details !== undefined && object.details !== null
                ? exports.TokenDetails.fromPartial(object.details)
                : undefined;
        message.tokenAddress = (_c = object.tokenAddress) !== null && _c !== void 0 ? _c : "";
        message.txHash = (_d = object.txHash) !== null && _d !== void 0 ? _d : "";
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.isExternal = (_f = object.isExternal) !== null && _f !== void 0 ? _f : false;
        message.burnerCode = (_g = object.burnerCode) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    },
};
function createBaseTransactionMetadata() {
    return { rawTx: new Uint8Array(), pubKey: new Uint8Array() };
}
exports.TransactionMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rawTx.length !== 0) {
            writer.uint32(10).bytes(message.rawTx);
        }
        if (message.pubKey.length !== 0) {
            writer.uint32(18).bytes(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransactionMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rawTx = reader.bytes();
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
            rawTx: isSet(object.rawTx) ? bytesFromBase64(object.rawTx) : new Uint8Array(),
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.rawTx !== undefined &&
            (obj.rawTx = base64FromBytes(message.rawTx !== undefined ? message.rawTx : new Uint8Array()));
        message.pubKey !== undefined &&
            (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTransactionMetadata();
        message.rawTx = (_a = object.rawTx) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.pubKey = (_b = object.pubKey) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseCommand() {
    return { id: new Uint8Array(), command: "", params: new Uint8Array(), keyId: "", maxGasCost: 0, type: 0 };
}
exports.Command = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id.length !== 0) {
            writer.uint32(10).bytes(message.id);
        }
        if (message.command !== "") {
            writer.uint32(18).string(message.command);
        }
        if (message.params.length !== 0) {
            writer.uint32(26).bytes(message.params);
        }
        if (message.keyId !== "") {
            writer.uint32(34).string(message.keyId);
        }
        if (message.maxGasCost !== 0) {
            writer.uint32(40).uint32(message.maxGasCost);
        }
        if (message.type !== 0) {
            writer.uint32(48).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommand();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.command = reader.string();
                    break;
                case 3:
                    message.params = reader.bytes();
                    break;
                case 4:
                    message.keyId = reader.string();
                    break;
                case 5:
                    message.maxGasCost = reader.uint32();
                    break;
                case 6:
                    message.type = reader.int32();
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
            id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
            command: isSet(object.command) ? String(object.command) : "",
            params: isSet(object.params) ? bytesFromBase64(object.params) : new Uint8Array(),
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            maxGasCost: isSet(object.maxGasCost) ? Number(object.maxGasCost) : 0,
            type: isSet(object.type) ? commandTypeFromJSON(object.type) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
        message.command !== undefined && (obj.command = message.command);
        message.params !== undefined &&
            (obj.params = base64FromBytes(message.params !== undefined ? message.params : new Uint8Array()));
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.maxGasCost !== undefined && (obj.maxGasCost = Math.round(message.maxGasCost));
        message.type !== undefined && (obj.type = commandTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCommand();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.command = (_b = object.command) !== null && _b !== void 0 ? _b : "";
        message.params = (_c = object.params) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.keyId = (_d = object.keyId) !== null && _d !== void 0 ? _d : "";
        message.maxGasCost = (_e = object.maxGasCost) !== null && _e !== void 0 ? _e : 0;
        message.type = (_f = object.type) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseCommandBatchMetadata() {
    return {
        id: new Uint8Array(),
        commandIds: [],
        data: new Uint8Array(),
        sigHash: new Uint8Array(),
        status: 0,
        keyId: "",
        prevBatchedCommandsId: new Uint8Array(),
        signature: undefined,
    };
}
exports.CommandBatchMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id.length !== 0) {
            writer.uint32(10).bytes(message.id);
        }
        for (const v of message.commandIds) {
            writer.uint32(18).bytes(v);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (message.sigHash.length !== 0) {
            writer.uint32(34).bytes(message.sigHash);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.keyId !== "") {
            writer.uint32(50).string(message.keyId);
        }
        if (message.prevBatchedCommandsId.length !== 0) {
            writer.uint32(58).bytes(message.prevBatchedCommandsId);
        }
        if (message.signature !== undefined) {
            any_1.Any.encode(message.signature, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommandBatchMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.commandIds.push(reader.bytes());
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.sigHash = reader.bytes();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.keyId = reader.string();
                    break;
                case 7:
                    message.prevBatchedCommandsId = reader.bytes();
                    break;
                case 8:
                    message.signature = any_1.Any.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
            commandIds: Array.isArray(object === null || object === void 0 ? void 0 : object.commandIds)
                ? object.commandIds.map((e) => bytesFromBase64(e))
                : [],
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            sigHash: isSet(object.sigHash) ? bytesFromBase64(object.sigHash) : new Uint8Array(),
            status: isSet(object.status) ? batchedCommandsStatusFromJSON(object.status) : 0,
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            prevBatchedCommandsId: isSet(object.prevBatchedCommandsId)
                ? bytesFromBase64(object.prevBatchedCommandsId)
                : new Uint8Array(),
            signature: isSet(object.signature) ? any_1.Any.fromJSON(object.signature) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
        if (message.commandIds) {
            obj.commandIds = message.commandIds.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.commandIds = [];
        }
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.sigHash !== undefined &&
            (obj.sigHash = base64FromBytes(message.sigHash !== undefined ? message.sigHash : new Uint8Array()));
        message.status !== undefined && (obj.status = batchedCommandsStatusToJSON(message.status));
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.prevBatchedCommandsId !== undefined &&
            (obj.prevBatchedCommandsId = base64FromBytes(message.prevBatchedCommandsId !== undefined ? message.prevBatchedCommandsId : new Uint8Array()));
        message.signature !== undefined &&
            (obj.signature = message.signature ? any_1.Any.toJSON(message.signature) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseCommandBatchMetadata();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.commandIds = ((_b = object.commandIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.sigHash = (_d = object.sigHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.keyId = (_f = object.keyId) !== null && _f !== void 0 ? _f : "";
        message.prevBatchedCommandsId = (_g = object.prevBatchedCommandsId) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.signature =
            object.signature !== undefined && object.signature !== null
                ? any_1.Any.fromPartial(object.signature)
                : undefined;
        return message;
    },
};
function createBaseSigMetadata() {
    return { type: 0, chain: "", commandBatchId: new Uint8Array() };
}
exports.SigMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.commandBatchId.length !== 0) {
            writer.uint32(26).bytes(message.commandBatchId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.commandBatchId = reader.bytes();
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
            type: isSet(object.type) ? sigTypeFromJSON(object.type) : 0,
            chain: isSet(object.chain) ? String(object.chain) : "",
            commandBatchId: isSet(object.commandBatchId)
                ? bytesFromBase64(object.commandBatchId)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = sigTypeToJSON(message.type));
        message.chain !== undefined && (obj.chain = message.chain);
        message.commandBatchId !== undefined &&
            (obj.commandBatchId = base64FromBytes(message.commandBatchId !== undefined ? message.commandBatchId : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSigMetadata();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.commandBatchId = (_c = object.commandBatchId) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseTransferKey() {
    return { txId: new Uint8Array(), nextKeyId: "" };
}
exports.TransferKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.nextKeyId !== "") {
            writer.uint32(26).string(message.nextKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.bytes();
                    break;
                case 3:
                    message.nextKeyId = reader.string();
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            nextKeyId: isSet(object.nextKeyId) ? String(object.nextKeyId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        message.nextKeyId !== undefined && (obj.nextKeyId = message.nextKeyId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTransferKey();
        message.txId = (_a = object.txId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.nextKeyId = (_b = object.nextKeyId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseAsset() {
    return { chain: "", name: "" };
}
exports.Asset = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAsset();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTokenDetails() {
    return { tokenName: "", symbol: "", decimals: 0, capacity: new Uint8Array() };
}
exports.TokenDetails = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tokenName !== "") {
            writer.uint32(10).string(message.tokenName);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.decimals !== 0) {
            writer.uint32(24).uint32(message.decimals);
        }
        if (message.capacity.length !== 0) {
            writer.uint32(34).bytes(message.capacity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenName = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.decimals = reader.uint32();
                    break;
                case 4:
                    message.capacity = reader.bytes();
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
            tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
            capacity: isSet(object.capacity) ? bytesFromBase64(object.capacity) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenName !== undefined && (obj.tokenName = message.tokenName);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
        message.capacity !== undefined &&
            (obj.capacity = base64FromBytes(message.capacity !== undefined ? message.capacity : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTokenDetails();
        message.tokenName = (_a = object.tokenName) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.decimals = (_c = object.decimals) !== null && _c !== void 0 ? _c : 0;
        message.capacity = (_d = object.capacity) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseGateway() {
    return { address: new Uint8Array() };
}
exports.Gateway = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGateway();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
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
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGateway();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBasePollMetadata() {
    return { chain: "", txId: new Uint8Array() };
}
exports.PollMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(18).bytes(message.txId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePollMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = reader.string();
                    break;
                case 2:
                    message.txId = reader.bytes();
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
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain);
        message.txId !== undefined &&
            (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePollMetadata();
        message.chain = (_a = object.chain) !== null && _a !== void 0 ? _a : "";
        message.txId = (_b = object.txId) !== null && _b !== void 0 ? _b : new Uint8Array();
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
//# sourceMappingURL=types.js.map