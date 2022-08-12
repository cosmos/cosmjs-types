import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { FeeInfo } from "../../../axelar/nexus/exported/v1beta1/types";
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
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
