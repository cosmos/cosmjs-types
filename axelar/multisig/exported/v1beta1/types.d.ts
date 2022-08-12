export declare const protobufPackage = "axelar.multisig.exported.v1beta1";
export declare enum MultisigState {
    MULTISIG_STATE_UNSPECIFIED = 0,
    MULTISIG_STATE_PENDING = 1,
    MULTISIG_STATE_COMPLETED = 2,
    UNRECOGNIZED = -1
}
export declare function multisigStateFromJSON(object: any): MultisigState;
export declare function multisigStateToJSON(object: MultisigState): string;
export declare enum KeyState {
    KEY_STATE_UNSPECIFIED = 0,
    KEY_STATE_ASSIGNED = 1,
    KEY_STATE_ACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function keyStateFromJSON(object: any): KeyState;
export declare function keyStateToJSON(object: KeyState): string;
