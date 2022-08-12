/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "axelar.multisig.exported.v1beta1";

export enum MultisigState {
  MULTISIG_STATE_UNSPECIFIED = 0,
  MULTISIG_STATE_PENDING = 1,
  MULTISIG_STATE_COMPLETED = 2,
  UNRECOGNIZED = -1,
}

export function multisigStateFromJSON(object: any): MultisigState {
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

export function multisigStateToJSON(object: MultisigState): string {
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

export enum KeyState {
  KEY_STATE_UNSPECIFIED = 0,
  KEY_STATE_ASSIGNED = 1,
  KEY_STATE_ACTIVE = 2,
  UNRECOGNIZED = -1,
}

export function keyStateFromJSON(object: any): KeyState {
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

export function keyStateToJSON(object: KeyState): string {
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
