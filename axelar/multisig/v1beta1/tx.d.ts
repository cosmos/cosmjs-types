import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.multisig.v1beta1";
export interface StartKeygenRequest {
    /**
     * Deprecated: This is the original "sender" field, but was originally declared as a string,
     * rather than a byte array.
     *
     * @deprecated
     */
    senderStr: string;
    keyId: string;
    /** New "sender" field, using the appropriate type */
    sender: Uint8Array;
}
export interface StartKeygenResponse {
}
export interface SubmitPubKeyRequest {
    /**
     * Deprecated: This is the original "sender" field, but was originally declared as a string,
     * rather than a byte array.
     *
     * @deprecated
     */
    senderStr: string;
    keyId: string;
    pubKey: Uint8Array;
    signature: Uint8Array;
    /** New "sender" field, using the appropriate type */
    sender: Uint8Array;
}
export interface SubmitPubKeyResponse {
}
export interface SubmitSignatureRequest {
    /**
     * Deprecated: This is the original "sender" field, but was originally declared as a string,
     * rather than a byte array.
     *
     * @deprecated
     */
    senderStr: string;
    sigId: Long;
    signature: Uint8Array;
    /** New "sender" field, using the appropriate type */
    sender: Uint8Array;
}
export interface SubmitSignatureResponse {
}
export interface RotateKeyRequest {
    /**
     * Deprecated: This is the original "sender" field, but was originally declared as a string,
     * rather than a byte array.
     *
     * @deprecated
     */
    senderStr: string;
    chain: string;
    keyId: string;
    /** New "sender" field, using the appropriate type */
    sender: Uint8Array;
}
export interface RotateKeyResponse {
}
export interface KeygenOptOutRequest {
    sender: Uint8Array;
}
export interface KeygenOptOutResponse {
}
export interface KeygenOptInRequest {
    sender: Uint8Array;
}
export interface KeygenOptInResponse {
}
export declare const StartKeygenRequest: {
    encode(message: StartKeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenRequest;
    fromJSON(object: any): StartKeygenRequest;
    toJSON(message: StartKeygenRequest): unknown;
    fromPartial<I extends {
        senderStr?: string | undefined;
        keyId?: string | undefined;
        sender?: Uint8Array | undefined;
    } & {
        senderStr?: string | undefined;
        keyId?: string | undefined;
        sender?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof StartKeygenRequest>, never>>(object: I): StartKeygenRequest;
};
export declare const StartKeygenResponse: {
    encode(_: StartKeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenResponse;
    fromJSON(_: any): StartKeygenResponse;
    toJSON(_: StartKeygenResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): StartKeygenResponse;
};
export declare const SubmitPubKeyRequest: {
    encode(message: SubmitPubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitPubKeyRequest;
    fromJSON(object: any): SubmitPubKeyRequest;
    toJSON(message: SubmitPubKeyRequest): unknown;
    fromPartial<I extends {
        senderStr?: string | undefined;
        keyId?: string | undefined;
        pubKey?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
        sender?: Uint8Array | undefined;
    } & {
        senderStr?: string | undefined;
        keyId?: string | undefined;
        pubKey?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
        sender?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof SubmitPubKeyRequest>, never>>(object: I): SubmitPubKeyRequest;
};
export declare const SubmitPubKeyResponse: {
    encode(_: SubmitPubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitPubKeyResponse;
    fromJSON(_: any): SubmitPubKeyResponse;
    toJSON(_: SubmitPubKeyResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): SubmitPubKeyResponse;
};
export declare const SubmitSignatureRequest: {
    encode(message: SubmitSignatureRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitSignatureRequest;
    fromJSON(object: any): SubmitSignatureRequest;
    toJSON(message: SubmitSignatureRequest): unknown;
    fromPartial<I extends {
        senderStr?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
        signature?: Uint8Array | undefined;
        sender?: Uint8Array | undefined;
    } & {
        senderStr?: string | undefined;
        sigId?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["sigId"], keyof Long.Long>, never>) | undefined;
        signature?: Uint8Array | undefined;
        sender?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof SubmitSignatureRequest>, never>>(object: I): SubmitSignatureRequest;
};
export declare const SubmitSignatureResponse: {
    encode(_: SubmitSignatureResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitSignatureResponse;
    fromJSON(_: any): SubmitSignatureResponse;
    toJSON(_: SubmitSignatureResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): SubmitSignatureResponse;
};
export declare const RotateKeyRequest: {
    encode(message: RotateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyRequest;
    fromJSON(object: any): RotateKeyRequest;
    toJSON(message: RotateKeyRequest): unknown;
    fromPartial<I extends {
        senderStr?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: Uint8Array | undefined;
    } & {
        senderStr?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof RotateKeyRequest>, never>>(object: I): RotateKeyRequest;
};
export declare const RotateKeyResponse: {
    encode(_: RotateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyResponse;
    fromJSON(_: any): RotateKeyResponse;
    toJSON(_: RotateKeyResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RotateKeyResponse;
};
export declare const KeygenOptOutRequest: {
    encode(message: KeygenOptOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptOutRequest;
    fromJSON(object: any): KeygenOptOutRequest;
    toJSON(message: KeygenOptOutRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "sender">, never>>(object: I): KeygenOptOutRequest;
};
export declare const KeygenOptOutResponse: {
    encode(_: KeygenOptOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptOutResponse;
    fromJSON(_: any): KeygenOptOutResponse;
    toJSON(_: KeygenOptOutResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): KeygenOptOutResponse;
};
export declare const KeygenOptInRequest: {
    encode(message: KeygenOptInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptInRequest;
    fromJSON(object: any): KeygenOptInRequest;
    toJSON(message: KeygenOptInRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "sender">, never>>(object: I): KeygenOptInRequest;
};
export declare const KeygenOptInResponse: {
    encode(_: KeygenOptInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptInResponse;
    fromJSON(_: any): KeygenOptInResponse;
    toJSON(_: KeygenOptInResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): KeygenOptInResponse;
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
