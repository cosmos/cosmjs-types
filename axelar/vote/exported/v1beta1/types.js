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
exports.PollMetadata = exports.Vote = exports.Voter = exports.PollKey = exports.pollStateToJSON = exports.pollStateFromJSON = exports.PollState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../../google/protobuf/any");
const threshold_1 = require("../../../../axelar/utils/v1beta1/threshold");
exports.protobufPackage = "axelar.vote.exported.v1beta1";
var PollState;
(function (PollState) {
    /**
     * POLL_STATE_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
     * be powers of 2
     */
    PollState[PollState["POLL_STATE_UNSPECIFIED"] = 0] = "POLL_STATE_UNSPECIFIED";
    PollState[PollState["POLL_STATE_PENDING"] = 1] = "POLL_STATE_PENDING";
    PollState[PollState["POLL_STATE_COMPLETED"] = 2] = "POLL_STATE_COMPLETED";
    PollState[PollState["POLL_STATE_FAILED"] = 4] = "POLL_STATE_FAILED";
    PollState[PollState["POLL_STATE_EXPIRED"] = 8] = "POLL_STATE_EXPIRED";
    PollState[PollState["POLL_STATE_ALLOW_OVERRIDE"] = 16] = "POLL_STATE_ALLOW_OVERRIDE";
    PollState[PollState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PollState = exports.PollState || (exports.PollState = {}));
function pollStateFromJSON(object) {
    switch (object) {
        case 0:
        case "POLL_STATE_UNSPECIFIED":
            return PollState.POLL_STATE_UNSPECIFIED;
        case 1:
        case "POLL_STATE_PENDING":
            return PollState.POLL_STATE_PENDING;
        case 2:
        case "POLL_STATE_COMPLETED":
            return PollState.POLL_STATE_COMPLETED;
        case 4:
        case "POLL_STATE_FAILED":
            return PollState.POLL_STATE_FAILED;
        case 8:
        case "POLL_STATE_EXPIRED":
            return PollState.POLL_STATE_EXPIRED;
        case 16:
        case "POLL_STATE_ALLOW_OVERRIDE":
            return PollState.POLL_STATE_ALLOW_OVERRIDE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PollState.UNRECOGNIZED;
    }
}
exports.pollStateFromJSON = pollStateFromJSON;
function pollStateToJSON(object) {
    switch (object) {
        case PollState.POLL_STATE_UNSPECIFIED:
            return "POLL_STATE_UNSPECIFIED";
        case PollState.POLL_STATE_PENDING:
            return "POLL_STATE_PENDING";
        case PollState.POLL_STATE_COMPLETED:
            return "POLL_STATE_COMPLETED";
        case PollState.POLL_STATE_FAILED:
            return "POLL_STATE_FAILED";
        case PollState.POLL_STATE_EXPIRED:
            return "POLL_STATE_EXPIRED";
        case PollState.POLL_STATE_ALLOW_OVERRIDE:
            return "POLL_STATE_ALLOW_OVERRIDE";
        case PollState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.pollStateToJSON = pollStateToJSON;
function createBasePollKey() {
    return { module: "", id: "" };
}
exports.PollKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePollKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            module: isSet(object.module) ? String(object.module) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePollKey();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseVoter() {
    return { validator: new Uint8Array(), votingPower: long_1.default.ZERO };
}
exports.Voter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator.length !== 0) {
            writer.uint32(10).bytes(message.validator);
        }
        if (!message.votingPower.isZero()) {
            writer.uint32(16).int64(message.votingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.bytes();
                    break;
                case 2:
                    message.votingPower = reader.int64();
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
            validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
            votingPower: isSet(object.votingPower) ? long_1.default.fromValue(object.votingPower) : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = base64FromBytes(message.validator !== undefined ? message.validator : new Uint8Array()));
        message.votingPower !== undefined && (obj.votingPower = (message.votingPower || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVoter();
        message.validator = (_a = object.validator) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.votingPower =
            object.votingPower !== undefined && object.votingPower !== null
                ? long_1.default.fromValue(object.votingPower)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseVote() {
    return { result: undefined };
}
exports.Vote = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== undefined) {
            any_1.Any.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.result = any_1.Any.decode(reader, reader.uint32());
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
            result: isSet(object.result) ? any_1.Any.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? any_1.Any.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.result =
            object.result !== undefined && object.result !== null ? any_1.Any.fromPartial(object.result) : undefined;
        return message;
    },
};
function createBasePollMetadata() {
    return {
        key: undefined,
        expiresAt: long_1.default.ZERO,
        result: undefined,
        votingThreshold: undefined,
        state: 0,
        minVoterCount: long_1.default.ZERO,
        voters: [],
        totalVotingPower: new Uint8Array(),
        rewardPoolName: "",
        gracePeriod: long_1.default.ZERO,
        completedAt: long_1.default.ZERO,
    };
}
exports.PollMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== undefined) {
            exports.PollKey.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        if (!message.expiresAt.isZero()) {
            writer.uint32(24).int64(message.expiresAt);
        }
        if (message.result !== undefined) {
            any_1.Any.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        if (message.votingThreshold !== undefined) {
            threshold_1.Threshold.encode(message.votingThreshold, writer.uint32(42).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(48).int32(message.state);
        }
        if (!message.minVoterCount.isZero()) {
            writer.uint32(56).int64(message.minVoterCount);
        }
        for (const v of message.voters) {
            exports.Voter.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.totalVotingPower.length !== 0) {
            writer.uint32(74).bytes(message.totalVotingPower);
        }
        if (message.rewardPoolName !== "") {
            writer.uint32(82).string(message.rewardPoolName);
        }
        if (!message.gracePeriod.isZero()) {
            writer.uint32(88).int64(message.gracePeriod);
        }
        if (!message.completedAt.isZero()) {
            writer.uint32(96).int64(message.completedAt);
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
                    message.key = exports.PollKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expiresAt = reader.int64();
                    break;
                case 4:
                    message.result = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.votingThreshold = threshold_1.Threshold.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.state = reader.int32();
                    break;
                case 7:
                    message.minVoterCount = reader.int64();
                    break;
                case 8:
                    message.voters.push(exports.Voter.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.totalVotingPower = reader.bytes();
                    break;
                case 10:
                    message.rewardPoolName = reader.string();
                    break;
                case 11:
                    message.gracePeriod = reader.int64();
                    break;
                case 12:
                    message.completedAt = reader.int64();
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
            key: isSet(object.key) ? exports.PollKey.fromJSON(object.key) : undefined,
            expiresAt: isSet(object.expiresAt) ? long_1.default.fromValue(object.expiresAt) : long_1.default.ZERO,
            result: isSet(object.result) ? any_1.Any.fromJSON(object.result) : undefined,
            votingThreshold: isSet(object.votingThreshold) ? threshold_1.Threshold.fromJSON(object.votingThreshold) : undefined,
            state: isSet(object.state) ? pollStateFromJSON(object.state) : 0,
            minVoterCount: isSet(object.minVoterCount) ? long_1.default.fromValue(object.minVoterCount) : long_1.default.ZERO,
            voters: Array.isArray(object === null || object === void 0 ? void 0 : object.voters) ? object.voters.map((e) => exports.Voter.fromJSON(e)) : [],
            totalVotingPower: isSet(object.totalVotingPower)
                ? bytesFromBase64(object.totalVotingPower)
                : new Uint8Array(),
            rewardPoolName: isSet(object.rewardPoolName) ? String(object.rewardPoolName) : "",
            gracePeriod: isSet(object.gracePeriod) ? long_1.default.fromValue(object.gracePeriod) : long_1.default.ZERO,
            completedAt: isSet(object.completedAt) ? long_1.default.fromValue(object.completedAt) : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key ? exports.PollKey.toJSON(message.key) : undefined);
        message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || long_1.default.ZERO).toString());
        message.result !== undefined && (obj.result = message.result ? any_1.Any.toJSON(message.result) : undefined);
        message.votingThreshold !== undefined &&
            (obj.votingThreshold = message.votingThreshold ? threshold_1.Threshold.toJSON(message.votingThreshold) : undefined);
        message.state !== undefined && (obj.state = pollStateToJSON(message.state));
        message.minVoterCount !== undefined &&
            (obj.minVoterCount = (message.minVoterCount || long_1.default.ZERO).toString());
        if (message.voters) {
            obj.voters = message.voters.map((e) => (e ? exports.Voter.toJSON(e) : undefined));
        }
        else {
            obj.voters = [];
        }
        message.totalVotingPower !== undefined &&
            (obj.totalVotingPower = base64FromBytes(message.totalVotingPower !== undefined ? message.totalVotingPower : new Uint8Array()));
        message.rewardPoolName !== undefined && (obj.rewardPoolName = message.rewardPoolName);
        message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || long_1.default.ZERO).toString());
        message.completedAt !== undefined && (obj.completedAt = (message.completedAt || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePollMetadata();
        message.key =
            object.key !== undefined && object.key !== null ? exports.PollKey.fromPartial(object.key) : undefined;
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? long_1.default.fromValue(object.expiresAt)
                : long_1.default.ZERO;
        message.result =
            object.result !== undefined && object.result !== null ? any_1.Any.fromPartial(object.result) : undefined;
        message.votingThreshold =
            object.votingThreshold !== undefined && object.votingThreshold !== null
                ? threshold_1.Threshold.fromPartial(object.votingThreshold)
                : undefined;
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.minVoterCount =
            object.minVoterCount !== undefined && object.minVoterCount !== null
                ? long_1.default.fromValue(object.minVoterCount)
                : long_1.default.ZERO;
        message.voters = ((_b = object.voters) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Voter.fromPartial(e))) || [];
        message.totalVotingPower = (_c = object.totalVotingPower) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.rewardPoolName = (_d = object.rewardPoolName) !== null && _d !== void 0 ? _d : "";
        message.gracePeriod =
            object.gracePeriod !== undefined && object.gracePeriod !== null
                ? long_1.default.fromValue(object.gracePeriod)
                : long_1.default.ZERO;
        message.completedAt =
            object.completedAt !== undefined && object.completedAt !== null
                ? long_1.default.fromValue(object.completedAt)
                : long_1.default.ZERO;
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