import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Chain, Asset } from "../../../axelar/nexus/exported/v1beta1/types";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
 * address
 */
export interface LinkRequest {
    sender: Uint8Array;
    recipientAddr: string;
    recipientChain: string;
    asset: string;
}
export interface LinkResponse {
    depositAddr: string;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequest {
    sender: Uint8Array;
    depositAddress: Uint8Array;
    denom: string;
}
export interface ConfirmDepositResponse {
}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequest {
    sender: Uint8Array;
}
export interface ExecutePendingTransfersResponse {
}
/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 *
 * @deprecated
 */
export interface RegisterIBCPathRequest {
    sender: Uint8Array;
    chain: string;
    path: string;
}
export interface RegisterIBCPathResponse {
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequest {
    sender: Uint8Array;
    /**
     * chain was deprecated in v0.27
     *
     * @deprecated
     */
    chain?: Chain;
    addrPrefix: string;
    /**
     * native_assets was deprecated in v0.27
     *
     * @deprecated
     */
    nativeAssets: Asset[];
    /** TODO: Rename this to `chain` after v1beta1 -> v1 version bump */
    cosmosChain: string;
    ibcPath: string;
}
export interface AddCosmosBasedChainResponse {
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequest {
    sender: Uint8Array;
    chain: string;
    asset?: Asset;
    limit: Uint8Array;
    window?: Duration;
}
export interface RegisterAssetResponse {
}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequest {
    sender: Uint8Array;
}
export interface RouteIBCTransfersResponse {
}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequest {
    sender: Uint8Array;
    feeCollector: Uint8Array;
}
export interface RegisterFeeCollectorResponse {
}
export interface RetryIBCTransferRequest {
    sender: Uint8Array;
    chain: string;
    id: Long;
}
export interface RetryIBCTransferResponse {
}
export declare const LinkRequest: {
    encode(message: LinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkRequest;
    fromJSON(object: any): LinkRequest;
    toJSON(message: LinkRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        asset?: string | undefined;
    } & {
        sender?: Uint8Array | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        asset?: string | undefined;
    } & Record<Exclude<keyof I, keyof LinkRequest>, never>>(object: I): LinkRequest;
};
export declare const LinkResponse: {
    encode(message: LinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkResponse;
    fromJSON(object: any): LinkResponse;
    toJSON(message: LinkResponse): unknown;
    fromPartial<I extends {
        depositAddr?: string | undefined;
    } & {
        depositAddr?: string | undefined;
    } & Record<Exclude<keyof I, "depositAddr">, never>>(object: I): LinkResponse;
};
export declare const ConfirmDepositRequest: {
    encode(message: ConfirmDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositRequest;
    fromJSON(object: any): ConfirmDepositRequest;
    toJSON(message: ConfirmDepositRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        depositAddress?: Uint8Array | undefined;
        denom?: string | undefined;
    } & {
        sender?: Uint8Array | undefined;
        depositAddress?: Uint8Array | undefined;
        denom?: string | undefined;
    } & Record<Exclude<keyof I, keyof ConfirmDepositRequest>, never>>(object: I): ConfirmDepositRequest;
};
export declare const ConfirmDepositResponse: {
    encode(_: ConfirmDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositResponse;
    fromJSON(_: any): ConfirmDepositResponse;
    toJSON(_: ConfirmDepositResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ConfirmDepositResponse;
};
export declare const ExecutePendingTransfersRequest: {
    encode(message: ExecutePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExecutePendingTransfersRequest;
    fromJSON(object: any): ExecutePendingTransfersRequest;
    toJSON(message: ExecutePendingTransfersRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "sender">, never>>(object: I): ExecutePendingTransfersRequest;
};
export declare const ExecutePendingTransfersResponse: {
    encode(_: ExecutePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExecutePendingTransfersResponse;
    fromJSON(_: any): ExecutePendingTransfersResponse;
    toJSON(_: ExecutePendingTransfersResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ExecutePendingTransfersResponse;
};
export declare const RegisterIBCPathRequest: {
    encode(message: RegisterIBCPathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterIBCPathRequest;
    fromJSON(object: any): RegisterIBCPathRequest;
    toJSON(message: RegisterIBCPathRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        path?: string | undefined;
    } & {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        path?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisterIBCPathRequest>, never>>(object: I): RegisterIBCPathRequest;
};
export declare const RegisterIBCPathResponse: {
    encode(_: RegisterIBCPathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterIBCPathResponse;
    fromJSON(_: any): RegisterIBCPathResponse;
    toJSON(_: RegisterIBCPathResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterIBCPathResponse;
};
export declare const AddCosmosBasedChainRequest: {
    encode(message: AddCosmosBasedChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddCosmosBasedChainRequest;
    fromJSON(object: any): AddCosmosBasedChainRequest;
    toJSON(message: AddCosmosBasedChainRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        chain?: {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } | undefined;
        addrPrefix?: string | undefined;
        nativeAssets?: {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[] | undefined;
        cosmosChain?: string | undefined;
        ibcPath?: string | undefined;
    } & {
        sender?: Uint8Array | undefined;
        chain?: ({
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } & {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } & Record<Exclude<keyof I["chain"], keyof Chain>, never>) | undefined;
        addrPrefix?: string | undefined;
        nativeAssets?: ({
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[] & ({
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & Record<Exclude<keyof I["nativeAssets"][number], keyof Asset>, never>)[] & Record<Exclude<keyof I["nativeAssets"], keyof {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[]>, never>) | undefined;
        cosmosChain?: string | undefined;
        ibcPath?: string | undefined;
    } & Record<Exclude<keyof I, keyof AddCosmosBasedChainRequest>, never>>(object: I): AddCosmosBasedChainRequest;
};
export declare const AddCosmosBasedChainResponse: {
    encode(_: AddCosmosBasedChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddCosmosBasedChainResponse;
    fromJSON(_: any): AddCosmosBasedChainResponse;
    toJSON(_: AddCosmosBasedChainResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): AddCosmosBasedChainResponse;
};
export declare const RegisterAssetRequest: {
    encode(message: RegisterAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetRequest;
    fromJSON(object: any): RegisterAssetRequest;
    toJSON(message: RegisterAssetRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        asset?: {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } | undefined;
        limit?: Uint8Array | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        asset?: ({
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & Record<Exclude<keyof I["asset"], keyof Asset>, never>) | undefined;
        limit?: Uint8Array | undefined;
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
    } & Record<Exclude<keyof I, keyof RegisterAssetRequest>, never>>(object: I): RegisterAssetRequest;
};
export declare const RegisterAssetResponse: {
    encode(_: RegisterAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetResponse;
    fromJSON(_: any): RegisterAssetResponse;
    toJSON(_: RegisterAssetResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterAssetResponse;
};
export declare const RouteIBCTransfersRequest: {
    encode(message: RouteIBCTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteIBCTransfersRequest;
    fromJSON(object: any): RouteIBCTransfersRequest;
    toJSON(message: RouteIBCTransfersRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "sender">, never>>(object: I): RouteIBCTransfersRequest;
};
export declare const RouteIBCTransfersResponse: {
    encode(_: RouteIBCTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteIBCTransfersResponse;
    fromJSON(_: any): RouteIBCTransfersResponse;
    toJSON(_: RouteIBCTransfersResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RouteIBCTransfersResponse;
};
export declare const RegisterFeeCollectorRequest: {
    encode(message: RegisterFeeCollectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterFeeCollectorRequest;
    fromJSON(object: any): RegisterFeeCollectorRequest;
    toJSON(message: RegisterFeeCollectorRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        feeCollector?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
        feeCollector?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof RegisterFeeCollectorRequest>, never>>(object: I): RegisterFeeCollectorRequest;
};
export declare const RegisterFeeCollectorResponse: {
    encode(_: RegisterFeeCollectorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterFeeCollectorResponse;
    fromJSON(_: any): RegisterFeeCollectorResponse;
    toJSON(_: RegisterFeeCollectorResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterFeeCollectorResponse;
};
export declare const RetryIBCTransferRequest: {
    encode(message: RetryIBCTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryIBCTransferRequest;
    fromJSON(object: any): RetryIBCTransferRequest;
    toJSON(message: RetryIBCTransferRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        id?: string | number | Long.Long | undefined;
    } & {
        sender?: Uint8Array | undefined;
        chain?: string | undefined;
        id?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RetryIBCTransferRequest>, never>>(object: I): RetryIBCTransferRequest;
};
export declare const RetryIBCTransferResponse: {
    encode(_: RetryIBCTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryIBCTransferResponse;
    fromJSON(_: any): RetryIBCTransferResponse;
    toJSON(_: RetryIBCTransferResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RetryIBCTransferResponse;
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
