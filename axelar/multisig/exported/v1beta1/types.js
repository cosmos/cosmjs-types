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
exports.keyStateToJSON = exports.keyStateFromJSON = exports.KeyState = exports.multisigStateToJSON = exports.multisigStateFromJSON = exports.MultisigState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.multisig.exported.v1beta1";
var MultisigState;
(function (MultisigState) {
    MultisigState[MultisigState["MULTISIG_STATE_UNSPECIFIED"] = 0] = "MULTISIG_STATE_UNSPECIFIED";
    MultisigState[MultisigState["MULTISIG_STATE_PENDING"] = 1] = "MULTISIG_STATE_PENDING";
    MultisigState[MultisigState["MULTISIG_STATE_COMPLETED"] = 2] = "MULTISIG_STATE_COMPLETED";
    MultisigState[MultisigState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MultisigState = exports.MultisigState || (exports.MultisigState = {}));
function multisigStateFromJSON(object) {
    switch (object) {
        case 0:
        case "MULTISIG_STATE_UNSPECIFIED":
            return MultisigState.MULTISIG_STATE_UNSPECIFIED;
        case 1:
        case "MULTISIG_STATE_PENDING":
            return MultisigState.MULTISIG_STATE_PENDING;
        case 2:
        case "MULTISIG_STATE_COMPLETED":
            return MultisigState.MULTISIG_STATE_COMPLETED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MultisigState.UNRECOGNIZED;
    }
}
exports.multisigStateFromJSON = multisigStateFromJSON;
function multisigStateToJSON(object) {
    switch (object) {
        case MultisigState.MULTISIG_STATE_UNSPECIFIED:
            return "MULTISIG_STATE_UNSPECIFIED";
        case MultisigState.MULTISIG_STATE_PENDING:
            return "MULTISIG_STATE_PENDING";
        case MultisigState.MULTISIG_STATE_COMPLETED:
            return "MULTISIG_STATE_COMPLETED";
        case MultisigState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.multisigStateToJSON = multisigStateToJSON;
var KeyState;
(function (KeyState) {
    KeyState[KeyState["KEY_STATE_UNSPECIFIED"] = 0] = "KEY_STATE_UNSPECIFIED";
    KeyState[KeyState["KEY_STATE_ASSIGNED"] = 1] = "KEY_STATE_ASSIGNED";
    KeyState[KeyState["KEY_STATE_ACTIVE"] = 2] = "KEY_STATE_ACTIVE";
    KeyState[KeyState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyState = exports.KeyState || (exports.KeyState = {}));
function keyStateFromJSON(object) {
    switch (object) {
        case 0:
        case "KEY_STATE_UNSPECIFIED":
            return KeyState.KEY_STATE_UNSPECIFIED;
        case 1:
        case "KEY_STATE_ASSIGNED":
            return KeyState.KEY_STATE_ASSIGNED;
        case 2:
        case "KEY_STATE_ACTIVE":
            return KeyState.KEY_STATE_ACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KeyState.UNRECOGNIZED;
    }
}
exports.keyStateFromJSON = keyStateFromJSON;
function keyStateToJSON(object) {
    switch (object) {
        case KeyState.KEY_STATE_UNSPECIFIED:
            return "KEY_STATE_UNSPECIFIED";
        case KeyState.KEY_STATE_ASSIGNED:
            return "KEY_STATE_ASSIGNED";
        case KeyState.KEY_STATE_ACTIVE:
            return "KEY_STATE_ACTIVE";
        case KeyState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.keyStateToJSON = keyStateToJSON;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=types.js.map