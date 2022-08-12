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
exports.PollParticipants = exports.PollKey = exports.PollMetadata = exports.pollStateToJSON = exports.pollStateFromJSON = exports.PollState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../../google/protobuf/any");
const threshold_1 = require("../../../../axelar/utils/v1beta1/threshold");
const types_1 = require("../../../../axelar/snapshot/exported/v1beta1/types");
exports.protobufPackage = "axelar.vote.exported.v1beta1";
var PollState;
(function (PollState) {
    PollState[PollState["POLL_STATE_UNSPECIFIED"] = 0] = "POLL_STATE_UNSPECIFIED";
    PollState[PollState["POLL_STATE_PENDING"] = 1] = "POLL_STATE_PENDING";
    PollState[PollState["POLL_STATE_COMPLETED"] = 2] = "POLL_STATE_COMPLETED";
    PollState[PollState["POLL_STATE_FAILED"] = 3] = "POLL_STATE_FAILED";
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
        case 3:
        case "POLL_STATE_FAILED":
            return PollState.POLL_STATE_FAILED;
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
        case PollState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.pollStateToJSON = pollStateToJSON;
function createBasePollMetadata() {
    return {
        expiresAt: long_1.default.ZERO,
        result: undefined,
        votingThreshold: undefined,
        state: 0,
        minVoterCount: long_1.default.ZERO,
        rewardPoolName: "",
        gracePeriod: long_1.default.ZERO,
        completedAt: long_1.default.ZERO,
        id: long_1.default.UZERO,
        snapshot: undefined,
        module: "",
        moduleMetadata: undefined,
    };
}
exports.PollMetadata = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (message.rewardPoolName !== "") {
            writer.uint32(82).string(message.rewardPoolName);
        }
        if (!message.gracePeriod.isZero()) {
            writer.uint32(88).int64(message.gracePeriod);
        }
        if (!message.completedAt.isZero()) {
            writer.uint32(96).int64(message.completedAt);
        }
        if (!message.id.isZero()) {
            writer.uint32(104).uint64(message.id);
        }
        if (message.snapshot !== undefined) {
            types_1.Snapshot.encode(message.snapshot, writer.uint32(122).fork()).ldelim();
        }
        if (message.module !== "") {
            writer.uint32(130).string(message.module);
        }
        if (message.moduleMetadata !== undefined) {
            any_1.Any.encode(message.moduleMetadata, writer.uint32(138).fork()).ldelim();
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
                case 10:
                    message.rewardPoolName = reader.string();
                    break;
                case 11:
                    message.gracePeriod = reader.int64();
                    break;
                case 12:
                    message.completedAt = reader.int64();
                    break;
                case 13:
                    message.id = reader.uint64();
                    break;
                case 15:
                    message.snapshot = types_1.Snapshot.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.module = reader.string();
                    break;
                case 17:
                    message.moduleMetadata = any_1.Any.decode(reader, reader.uint32());
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
            expiresAt: isSet(object.expiresAt) ? long_1.default.fromValue(object.expiresAt) : long_1.default.ZERO,
            result: isSet(object.result) ? any_1.Any.fromJSON(object.result) : undefined,
            votingThreshold: isSet(object.votingThreshold) ? threshold_1.Threshold.fromJSON(object.votingThreshold) : undefined,
            state: isSet(object.state) ? pollStateFromJSON(object.state) : 0,
            minVoterCount: isSet(object.minVoterCount) ? long_1.default.fromValue(object.minVoterCount) : long_1.default.ZERO,
            rewardPoolName: isSet(object.rewardPoolName) ? String(object.rewardPoolName) : "",
            gracePeriod: isSet(object.gracePeriod) ? long_1.default.fromValue(object.gracePeriod) : long_1.default.ZERO,
            completedAt: isSet(object.completedAt) ? long_1.default.fromValue(object.completedAt) : long_1.default.ZERO,
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            snapshot: isSet(object.snapshot) ? types_1.Snapshot.fromJSON(object.snapshot) : undefined,
            module: isSet(object.module) ? String(object.module) : "",
            moduleMetadata: isSet(object.moduleMetadata) ? any_1.Any.fromJSON(object.moduleMetadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || long_1.default.ZERO).toString());
        message.result !== undefined && (obj.result = message.result ? any_1.Any.toJSON(message.result) : undefined);
        message.votingThreshold !== undefined &&
            (obj.votingThreshold = message.votingThreshold ? threshold_1.Threshold.toJSON(message.votingThreshold) : undefined);
        message.state !== undefined && (obj.state = pollStateToJSON(message.state));
        message.minVoterCount !== undefined &&
            (obj.minVoterCount = (message.minVoterCount || long_1.default.ZERO).toString());
        message.rewardPoolName !== undefined && (obj.rewardPoolName = message.rewardPoolName);
        message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || long_1.default.ZERO).toString());
        message.completedAt !== undefined && (obj.completedAt = (message.completedAt || long_1.default.ZERO).toString());
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.snapshot !== undefined &&
            (obj.snapshot = message.snapshot ? types_1.Snapshot.toJSON(message.snapshot) : undefined);
        message.module !== undefined && (obj.module = message.module);
        message.moduleMetadata !== undefined &&
            (obj.moduleMetadata = message.moduleMetadata ? any_1.Any.toJSON(message.moduleMetadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePollMetadata();
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
        message.rewardPoolName = (_b = object.rewardPoolName) !== null && _b !== void 0 ? _b : "";
        message.gracePeriod =
            object.gracePeriod !== undefined && object.gracePeriod !== null
                ? long_1.default.fromValue(object.gracePeriod)
                : long_1.default.ZERO;
        message.completedAt =
            object.completedAt !== undefined && object.completedAt !== null
                ? long_1.default.fromValue(object.completedAt)
                : long_1.default.ZERO;
        message.id = object.id !== undefined && object.id !== null ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.snapshot =
            object.snapshot !== undefined && object.snapshot !== null
                ? types_1.Snapshot.fromPartial(object.snapshot)
                : undefined;
        message.module = (_c = object.module) !== null && _c !== void 0 ? _c : "";
        message.moduleMetadata =
            object.moduleMetadata !== undefined && object.moduleMetadata !== null
                ? any_1.Any.fromPartial(object.moduleMetadata)
                : undefined;
        return message;
    },
};
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
function createBasePollParticipants() {
    return { pollId: long_1.default.UZERO, participants: [] };
}
exports.PollParticipants = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.pollId.isZero()) {
            writer.uint32(8).uint64(message.pollId);
        }
        for (const v of message.participants) {
            writer.uint32(18).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePollParticipants();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pollId = reader.uint64();
                    break;
                case 2:
                    message.participants.push(reader.bytes());
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
            pollId: isSet(object.pollId) ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO,
            participants: Array.isArray(object === null || object === void 0 ? void 0 : object.participants)
                ? object.participants.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.pollId !== undefined && (obj.pollId = (message.pollId || long_1.default.UZERO).toString());
        if (message.participants) {
            obj.participants = message.participants.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.participants = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePollParticipants();
        message.pollId =
            object.pollId !== undefined && object.pollId !== null ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO;
        message.participants = ((_a = object.participants) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
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