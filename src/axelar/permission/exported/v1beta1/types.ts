/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "axelar.permission.exported.v1beta1";

export enum Role {
  ROLE_UNSPECIFIED = 0,
  ROLE_UNRESTRICTED = 1,
  ROLE_CHAIN_MANAGEMENT = 2,
  ROLE_ACCESS_CONTROL = 3,
  UNRECOGNIZED = -1,
}

export function roleFromJSON(object: any): Role {
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

export function roleToJSON(object: Role): string {
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
