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
exports.roleToJSON = exports.roleFromJSON = exports.Role = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "axelar.permission.exported.v1beta1";
var Role;
(function (Role) {
    Role[Role["ROLE_UNSPECIFIED"] = 0] = "ROLE_UNSPECIFIED";
    Role[Role["ROLE_UNRESTRICTED"] = 1] = "ROLE_UNRESTRICTED";
    Role[Role["ROLE_CHAIN_MANAGEMENT"] = 2] = "ROLE_CHAIN_MANAGEMENT";
    Role[Role["ROLE_ACCESS_CONTROL"] = 3] = "ROLE_ACCESS_CONTROL";
    Role[Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Role = exports.Role || (exports.Role = {}));
function roleFromJSON(object) {
    switch (object) {
        case 0:
        case "ROLE_UNSPECIFIED":
            return Role.ROLE_UNSPECIFIED;
        case 1:
        case "ROLE_UNRESTRICTED":
            return Role.ROLE_UNRESTRICTED;
        case 2:
        case "ROLE_CHAIN_MANAGEMENT":
            return Role.ROLE_CHAIN_MANAGEMENT;
        case 3:
        case "ROLE_ACCESS_CONTROL":
            return Role.ROLE_ACCESS_CONTROL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Role.UNRECOGNIZED;
    }
}
exports.roleFromJSON = roleFromJSON;
function roleToJSON(object) {
    switch (object) {
        case Role.ROLE_UNSPECIFIED:
            return "ROLE_UNSPECIFIED";
        case Role.ROLE_UNRESTRICTED:
            return "ROLE_UNRESTRICTED";
        case Role.ROLE_CHAIN_MANAGEMENT:
            return "ROLE_CHAIN_MANAGEMENT";
        case Role.ROLE_ACCESS_CONTROL:
            return "ROLE_ACCESS_CONTROL";
        case Role.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.roleToJSON = roleToJSON;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=types.js.map