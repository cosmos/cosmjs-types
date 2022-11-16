import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { FeeInfo } from "../../../axelar/nexus/exported/v1beta1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export interface RegisterChainMaintainerRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface RegisterChainMaintainerResponse {
}
export interface DeregisterChainMaintainerRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface DeregisterChainMaintainerResponse {
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface ActivateChainResponse {
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface DeactivateChainResponse {
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequest {
    sender: Uint8Array;
    feeInfo?: FeeInfo;
}
export interface RegisterAssetFeeResponse {
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequest {
    sender: Uint8Array;
    chain: string;
    limit?: Coin;
    window?: Duration;
}
export interface SetTransferRateLimitResponse {
}
export declare const RegisterChainMaintainerRequest: {
    encode(message: RegisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterChainMaintainerRequest;
    fromJSON(object: any): RegisterChainMaintainerRequest;
    toJSON(message: RegisterChainMaintainerRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        chains?: string[] | undefined;
    } & {
        sender?: Uint8Array | undefined;
        chains?: (string[] & string[] & Record<Exclude<keyof I["chains"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RegisterChainMaintainerRequest>, never>>(object: I): RegisterChainMaintainerRequest;
};
export declare const RegisterChainMaintainerResponse: {
    encode(_: RegisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterChainMaintainerResponse;
    fromJSON(_: any): RegisterChainMaintainerResponse;
    toJSON(_: RegisterChainMaintainerResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterChainMaintainerResponse;
};
export declare const DeregisterChainMaintainerRequest: {
    encode(message: DeregisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterChainMaintainerRequest;
    fromJSON(object: any): DeregisterChainMaintainerRequest;
    toJSON(message: DeregisterChainMaintainerRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        chains?: string[] | undefined;
    } & {
        sender?: Uint8Array | undefined;
        chains?: (string[] & string[] & Record<Exclude<keyof I["chains"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DeregisterChainMaintainerRequest>, never>>(object: I): DeregisterChainMaintainerRequest;
};
export declare const DeregisterChainMaintainerResponse: {
    encode(_: DeregisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterChainMaintainerResponse;
    fromJSON(_: any): DeregisterChainMaintainerResponse;
    toJSON(_: DeregisterChainMaintainerResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): DeregisterChainMaintainerResponse;
};
export declare const ActivateChainRequest: {
    encode(message: ActivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateChainRequest;
    fromJSON(object: any): ActivateChainRequest;
    toJSON(message: ActivateChainRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        chains?: string[] | undefined;
    } & {
        sender?: Uint8Array | undefined;
        chains?: (string[] & string[] & Record<Exclude<keyof I["chains"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ActivateChainRequest>, never>>(object: I): ActivateChainRequest;
};
export declare const ActivateChainResponse: {
    encode(_: ActivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateChainResponse;
    fromJSON(_: any): ActivateChainResponse;
    toJSON(_: ActivateChainResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ActivateChainResponse;
};
export declare const DeactivateChainRequest: {
    encode(message: DeactivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateChainRequest;
    fromJSON(object: any): DeactivateChainRequest;
    toJSON(message: DeactivateChainRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        chains?: string[] | undefined;
    } & {
        sender?: Uint8Array | undefined;
        chains?: (string[] & string[] & Record<Exclude<keyof I["chains"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DeactivateChainRequest>, never>>(object: I): DeactivateChainRequest;
};
export declare const DeactivateChainResponse: {
    encode(_: DeactivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateChainResponse;
    fromJSON(_: any): DeactivateChainResponse;
    toJSON(_: DeactivateChainResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): DeactivateChainResponse;
};
export declare const RegisterAssetFeeRequest: {
    encode(message: RegisterAssetFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetFeeRequest;
    fromJSON(object: any): RegisterAssetFeeRequest;
    toJSON(message: RegisterAssetFeeRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        feeInfo?: {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Uint8Array | undefined;
            minFee?: Uint8Array | undefined;
            maxFee?: Uint8Array | undefined;
        } | undefined;
    } & {
        sender?: Uint8Array | undefined;
        feeInfo?: ({
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Uint8Array | undefined;
            minFee?: Uint8Array | undefined;
            maxFee?: Uint8Array | undefined;
        } & {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Uint8Array | undefined;
            minFee?: Uint8Array | undefined;
            maxFee?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["feeInfo"], keyof FeeInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RegisterAssetFeeRequest>, never>>(object: I): RegisterAssetFeeRequest;
};
export declare const RegisterAssetFeeResponse: {
    encode(_: RegisterAssetFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetFeeResponse;
    fromJSON(_: any): RegisterAssetFeeResponse;
    toJSON(_: RegisterAssetFeeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterAssetFeeResponse;
};
export declare const SetTransferRateLimitRequest: {
    encode(message: SetTransferRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetTransferRateLimitRequest;
    fromJSON(object: any): SetTransferRateLimitRequest;
    toJSON(message: SetTransferRateLimitRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        limit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        limit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["limit"], keyof Coin>, never>) | undefined;
        window?: ({
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["window"]["seconds"], keyof Long.Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["window"], keyof Duration>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SetTransferRateLimitRequest>, never>>(object: I): SetTransferRateLimitRequest;
};
export declare const SetTransferRateLimitResponse: {
    encode(_: SetTransferRateLimitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetTransferRateLimitResponse;
    fromJSON(_: any): SetTransferRateLimitResponse;
    toJSON(_: SetTransferRateLimitResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): SetTransferRateLimitResponse;
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
