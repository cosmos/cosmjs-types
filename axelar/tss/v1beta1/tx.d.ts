import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { KeyInfo } from "../../../axelar/tss/v1beta1/types";
import { KeyRole, SigKeyPair } from "../../../axelar/tss/exported/v1beta1/types";
import { TrafficOut, MessageOut_KeygenResult, MessageOut_SignResult } from "../../../axelar/tss/tofnd/v1beta1/tofnd";
import { PollKey } from "../../../axelar/vote/exported/v1beta1/types";
export declare const protobufPackage = "axelar.tss.v1beta1";
/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequest {
    sender: string;
    keyInfo?: KeyInfo;
}
export interface StartKeygenResponse {
}
export interface RotateKeyRequest {
    sender: Uint8Array;
    chain: string;
    keyRole: KeyRole;
    keyId: string;
}
export interface RotateKeyResponse {
}
/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequest {
    sender: Uint8Array;
    sessionId: string;
    payload?: TrafficOut;
}
export interface ProcessKeygenTrafficResponse {
}
/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequest {
    sender: Uint8Array;
    sessionId: string;
    payload?: TrafficOut;
}
export interface ProcessSignTrafficResponse {
}
/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequest {
    sender: Uint8Array;
    pollKey?: PollKey;
    result?: MessageOut_KeygenResult;
}
export interface VotePubKeyResponse {
    log: string;
}
/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequest {
    sender: Uint8Array;
    pollKey?: PollKey;
    result?: MessageOut_SignResult;
}
export interface VoteSigResponse {
    log: string;
}
export interface HeartBeatRequest {
    sender: Uint8Array;
    keyIds: string[];
}
export interface HeartBeatResponse {
}
export interface RegisterExternalKeysRequest {
    sender: Uint8Array;
    chain: string;
    externalKeys: RegisterExternalKeysRequest_ExternalKey[];
}
export interface RegisterExternalKeysRequest_ExternalKey {
    id: string;
    pubKey: Uint8Array;
}
export interface RegisterExternalKeysResponse {
}
export interface SubmitMultisigPubKeysRequest {
    sender: Uint8Array;
    keyId: string;
    sigKeyPairs: SigKeyPair[];
}
export interface SubmitMultisigPubKeysResponse {
}
export interface SubmitMultisigSignaturesRequest {
    sender: Uint8Array;
    sigId: string;
    signatures: Uint8Array[];
}
export interface SubmitMultisigSignaturesResponse {
}
export declare const StartKeygenRequest: {
    encode(message: StartKeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenRequest;
    fromJSON(object: any): StartKeygenRequest;
    toJSON(message: StartKeygenRequest): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        keyInfo?: {
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        keyInfo?: ({
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
        } & {
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
        } & Record<Exclude<keyof I["keyInfo"], keyof KeyInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof StartKeygenRequest>, never>>(object: I): StartKeygenRequest;
};
export declare const StartKeygenResponse: {
    encode(_: StartKeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenResponse;
    fromJSON(_: any): StartKeygenResponse;
    toJSON(_: StartKeygenResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): StartKeygenResponse;
};
export declare const RotateKeyRequest: {
    encode(message: RotateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyRequest;
    fromJSON(object: any): RotateKeyRequest;
    toJSON(message: RotateKeyRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
    } & {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, keyof RotateKeyRequest>, never>>(object: I): RotateKeyRequest;
};
export declare const RotateKeyResponse: {
    encode(_: RotateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyResponse;
    fromJSON(_: any): RotateKeyResponse;
    toJSON(_: RotateKeyResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RotateKeyResponse;
};
export declare const ProcessKeygenTrafficRequest: {
    encode(message: ProcessKeygenTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessKeygenTrafficRequest;
    fromJSON(object: any): ProcessKeygenTrafficRequest;
    toJSON(message: ProcessKeygenTrafficRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        sessionId?: string | undefined;
        payload?: {
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
    } & {
        sender?: Uint8Array | undefined;
        sessionId?: string | undefined;
        payload?: ({
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & Record<Exclude<keyof I["payload"], keyof TrafficOut>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ProcessKeygenTrafficRequest>, never>>(object: I): ProcessKeygenTrafficRequest;
};
export declare const ProcessKeygenTrafficResponse: {
    encode(_: ProcessKeygenTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessKeygenTrafficResponse;
    fromJSON(_: any): ProcessKeygenTrafficResponse;
    toJSON(_: ProcessKeygenTrafficResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ProcessKeygenTrafficResponse;
};
export declare const ProcessSignTrafficRequest: {
    encode(message: ProcessSignTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessSignTrafficRequest;
    fromJSON(object: any): ProcessSignTrafficRequest;
    toJSON(message: ProcessSignTrafficRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        sessionId?: string | undefined;
        payload?: {
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
    } & {
        sender?: Uint8Array | undefined;
        sessionId?: string | undefined;
        payload?: ({
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & Record<Exclude<keyof I["payload"], keyof TrafficOut>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ProcessSignTrafficRequest>, never>>(object: I): ProcessSignTrafficRequest;
};
export declare const ProcessSignTrafficResponse: {
    encode(_: ProcessSignTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessSignTrafficResponse;
    fromJSON(_: any): ProcessSignTrafficResponse;
    toJSON(_: ProcessSignTrafficResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ProcessSignTrafficResponse;
};
export declare const VotePubKeyRequest: {
    encode(message: VotePubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VotePubKeyRequest;
    fromJSON(object: any): VotePubKeyRequest;
    toJSON(message: VotePubKeyRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        pollKey?: {
            module?: string | undefined;
            id?: string | undefined;
        } | undefined;
        result?: {
            data?: {
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        sender?: Uint8Array | undefined;
        pollKey?: ({
            module?: string | undefined;
            id?: string | undefined;
        } & {
            module?: string | undefined;
            id?: string | undefined;
        } & Record<Exclude<keyof I["pollKey"], keyof PollKey>, never>) | undefined;
        result?: ({
            data?: {
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            data?: ({
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } & {
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["result"]["data"], keyof import("../../../axelar/tss/tofnd/v1beta1/tofnd").KeygenOutput>, never>) | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & Record<Exclude<keyof I["result"]["criminals"]["criminals"][number], keyof import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal>, never>)[] & Record<Exclude<keyof I["result"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["result"]["criminals"], "criminals">, never>) | undefined;
        } & Record<Exclude<keyof I["result"], keyof MessageOut_KeygenResult>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof VotePubKeyRequest>, never>>(object: I): VotePubKeyRequest;
};
export declare const VotePubKeyResponse: {
    encode(message: VotePubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VotePubKeyResponse;
    fromJSON(object: any): VotePubKeyResponse;
    toJSON(message: VotePubKeyResponse): unknown;
    fromPartial<I extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & Record<Exclude<keyof I, "log">, never>>(object: I): VotePubKeyResponse;
};
export declare const VoteSigRequest: {
    encode(message: VoteSigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteSigRequest;
    fromJSON(object: any): VoteSigRequest;
    toJSON(message: VoteSigRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        pollKey?: {
            module?: string | undefined;
            id?: string | undefined;
        } | undefined;
        result?: {
            signature?: Uint8Array | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        sender?: Uint8Array | undefined;
        pollKey?: ({
            module?: string | undefined;
            id?: string | undefined;
        } & {
            module?: string | undefined;
            id?: string | undefined;
        } & Record<Exclude<keyof I["pollKey"], keyof PollKey>, never>) | undefined;
        result?: ({
            signature?: Uint8Array | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            signature?: Uint8Array | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & Record<Exclude<keyof I["result"]["criminals"]["criminals"][number], keyof import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal>, never>)[] & Record<Exclude<keyof I["result"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["result"]["criminals"], "criminals">, never>) | undefined;
        } & Record<Exclude<keyof I["result"], keyof MessageOut_SignResult>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof VoteSigRequest>, never>>(object: I): VoteSigRequest;
};
export declare const VoteSigResponse: {
    encode(message: VoteSigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteSigResponse;
    fromJSON(object: any): VoteSigResponse;
    toJSON(message: VoteSigResponse): unknown;
    fromPartial<I extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & Record<Exclude<keyof I, "log">, never>>(object: I): VoteSigResponse;
};
export declare const HeartBeatRequest: {
    encode(message: HeartBeatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeartBeatRequest;
    fromJSON(object: any): HeartBeatRequest;
    toJSON(message: HeartBeatRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        keyIds?: string[] | undefined;
    } & {
        sender?: Uint8Array | undefined;
        keyIds?: (string[] & string[] & Record<Exclude<keyof I["keyIds"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof HeartBeatRequest>, never>>(object: I): HeartBeatRequest;
};
export declare const HeartBeatResponse: {
    encode(_: HeartBeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeartBeatResponse;
    fromJSON(_: any): HeartBeatResponse;
    toJSON(_: HeartBeatResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): HeartBeatResponse;
};
export declare const RegisterExternalKeysRequest: {
    encode(message: RegisterExternalKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysRequest;
    fromJSON(object: any): RegisterExternalKeysRequest;
    toJSON(message: RegisterExternalKeysRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        externalKeys?: {
            id?: string | undefined;
            pubKey?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        externalKeys?: ({
            id?: string | undefined;
            pubKey?: Uint8Array | undefined;
        }[] & ({
            id?: string | undefined;
            pubKey?: Uint8Array | undefined;
        } & {
            id?: string | undefined;
            pubKey?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["externalKeys"][number], keyof RegisterExternalKeysRequest_ExternalKey>, never>)[] & Record<Exclude<keyof I["externalKeys"], keyof {
            id?: string | undefined;
            pubKey?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RegisterExternalKeysRequest>, never>>(object: I): RegisterExternalKeysRequest;
};
export declare const RegisterExternalKeysRequest_ExternalKey: {
    encode(message: RegisterExternalKeysRequest_ExternalKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysRequest_ExternalKey;
    fromJSON(object: any): RegisterExternalKeysRequest_ExternalKey;
    toJSON(message: RegisterExternalKeysRequest_ExternalKey): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        pubKey?: Uint8Array | undefined;
    } & {
        id?: string | undefined;
        pubKey?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof RegisterExternalKeysRequest_ExternalKey>, never>>(object: I): RegisterExternalKeysRequest_ExternalKey;
};
export declare const RegisterExternalKeysResponse: {
    encode(_: RegisterExternalKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysResponse;
    fromJSON(_: any): RegisterExternalKeysResponse;
    toJSON(_: RegisterExternalKeysResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterExternalKeysResponse;
};
export declare const SubmitMultisigPubKeysRequest: {
    encode(message: SubmitMultisigPubKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigPubKeysRequest;
    fromJSON(object: any): SubmitMultisigPubKeysRequest;
    toJSON(message: SubmitMultisigPubKeysRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        keyId?: string | undefined;
        sigKeyPairs?: {
            pubKey?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        sender?: Uint8Array | undefined;
        keyId?: string | undefined;
        sigKeyPairs?: ({
            pubKey?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            pubKey?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            pubKey?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["sigKeyPairs"][number], keyof SigKeyPair>, never>)[] & Record<Exclude<keyof I["sigKeyPairs"], keyof {
            pubKey?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SubmitMultisigPubKeysRequest>, never>>(object: I): SubmitMultisigPubKeysRequest;
};
export declare const SubmitMultisigPubKeysResponse: {
    encode(_: SubmitMultisigPubKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigPubKeysResponse;
    fromJSON(_: any): SubmitMultisigPubKeysResponse;
    toJSON(_: SubmitMultisigPubKeysResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): SubmitMultisigPubKeysResponse;
};
export declare const SubmitMultisigSignaturesRequest: {
    encode(message: SubmitMultisigSignaturesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigSignaturesRequest;
    fromJSON(object: any): SubmitMultisigSignaturesRequest;
    toJSON(message: SubmitMultisigSignaturesRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        sigId?: string | undefined;
        signatures?: Uint8Array[] | undefined;
    } & {
        sender?: Uint8Array | undefined;
        sigId?: string | undefined;
        signatures?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["signatures"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SubmitMultisigSignaturesRequest>, never>>(object: I): SubmitMultisigSignaturesRequest;
};
export declare const SubmitMultisigSignaturesResponse: {
    encode(_: SubmitMultisigSignaturesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigSignaturesResponse;
    fromJSON(_: any): SubmitMultisigSignaturesResponse;
    toJSON(_: SubmitMultisigSignaturesResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): SubmitMultisigSignaturesResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
