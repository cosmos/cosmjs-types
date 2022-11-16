import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { TransferState, FeeInfo, CrossChainTransfer } from "../../../axelar/nexus/exported/v1beta1/types";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ChainState } from "../../../axelar/nexus/v1beta1/types";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export declare enum ChainStatus {
    CHAIN_STATUS_UNSPECIFIED = 0,
    CHAIN_STATUS_ACTIVATED = 1,
    CHAIN_STATUS_DEACTIVATED = 2,
    UNRECOGNIZED = -1
}
export declare function chainStatusFromJSON(object: any): ChainStatus;
export declare function chainStatusToJSON(object: ChainStatus): string;
export interface QueryChainMaintainersResponse {
    maintainers: Uint8Array[];
}
/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequest {
    recipientAddr: string;
    recipientChain: string;
    depositChain: string;
}
export interface LatestDepositAddressResponse {
    depositAddr: string;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequest {
    chain: string;
    state: TransferState;
    pagination?: PageRequest;
}
export interface TransfersForChainResponse {
    transfers: CrossChainTransfer[];
    pagination?: PageResponse;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequest {
    chain: string;
    asset: string;
}
export interface FeeInfoResponse {
    feeInfo?: FeeInfo;
}
/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequest {
    sourceChain: string;
    destinationChain: string;
    amount: string;
}
export interface TransferFeeResponse {
    fee?: Coin;
}
/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequest {
    status: ChainStatus;
}
export interface ChainsResponse {
    chains: string[];
}
/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequest {
    chain: string;
}
export interface AssetsResponse {
    assets: string[];
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequest {
    chain: string;
}
export interface ChainStateResponse {
    state?: ChainState;
}
/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequest {
    asset: string;
}
export interface ChainsByAssetResponse {
    chains: string[];
}
/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequest {
    depositAddr: string;
    depositChain: string;
}
export interface RecipientAddressResponse {
    recipientAddr: string;
    recipientChain: string;
}
/**
 * TransferRateLimitRequest represents a message that queries the registered
 * transfer rate limit and current transfer amounts for a given chain and asset
 */
export interface TransferRateLimitRequest {
    chain: string;
    asset: string;
}
export interface TransferRateLimitResponse {
    transferRateLimit?: TransferRateLimit;
}
export interface TransferRateLimit {
    limit: Uint8Array;
    window?: Duration;
    incoming: Uint8Array;
    outgoing: Uint8Array;
    /** time_left indicates the time left in the rate limit window */
    timeLeft?: Duration;
}
export declare const QueryChainMaintainersResponse: {
    encode(message: QueryChainMaintainersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryChainMaintainersResponse;
    fromJSON(object: any): QueryChainMaintainersResponse;
    toJSON(message: QueryChainMaintainersResponse): unknown;
    fromPartial<I extends {
        maintainers?: Uint8Array[] | undefined;
    } & {
        maintainers?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["maintainers"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "maintainers">, never>>(object: I): QueryChainMaintainersResponse;
};
export declare const LatestDepositAddressRequest: {
    encode(message: LatestDepositAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LatestDepositAddressRequest;
    fromJSON(object: any): LatestDepositAddressRequest;
    toJSON(message: LatestDepositAddressRequest): unknown;
    fromPartial<I extends {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        depositChain?: string | undefined;
    } & {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        depositChain?: string | undefined;
    } & Record<Exclude<keyof I, keyof LatestDepositAddressRequest>, never>>(object: I): LatestDepositAddressRequest;
};
export declare const LatestDepositAddressResponse: {
    encode(message: LatestDepositAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LatestDepositAddressResponse;
    fromJSON(object: any): LatestDepositAddressResponse;
    toJSON(message: LatestDepositAddressResponse): unknown;
    fromPartial<I extends {
        depositAddr?: string | undefined;
    } & {
        depositAddr?: string | undefined;
    } & Record<Exclude<keyof I, "depositAddr">, never>>(object: I): LatestDepositAddressResponse;
};
export declare const TransfersForChainRequest: {
    encode(message: TransfersForChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransfersForChainRequest;
    fromJSON(object: any): TransfersForChainRequest;
    toJSON(message: TransfersForChainRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        state?: TransferState | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        state?: TransferState | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["offset"], keyof Long.Long>, never>) | undefined;
            limit?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["limit"], keyof Long.Long>, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TransfersForChainRequest>, never>>(object: I): TransfersForChainRequest;
};
export declare const TransfersForChainResponse: {
    encode(message: TransfersForChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransfersForChainResponse;
    fromJSON(object: any): TransfersForChainResponse;
    toJSON(message: TransfersForChainResponse): unknown;
    fromPartial<I extends {
        transfers?: {
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        transfers?: ({
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        }[] & ({
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        } & {
            recipient?: ({
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } & {
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
                } & Record<Exclude<keyof I["transfers"][number]["recipient"]["chain"], keyof import("../../../axelar/nexus/exported/v1beta1/types").Chain>, never>) | undefined;
                address?: string | undefined;
            } & Record<Exclude<keyof I["transfers"][number]["recipient"], keyof import("../../../axelar/nexus/exported/v1beta1/types").CrossChainAddress>, never>) | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["transfers"][number]["asset"], keyof Coin>, never>) | undefined;
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
            } & Record<Exclude<keyof I["transfers"][number]["id"], keyof Long.Long>, never>) | undefined;
            state?: TransferState | undefined;
        } & Record<Exclude<keyof I["transfers"][number], keyof CrossChainTransfer>, never>)[] & Record<Exclude<keyof I["transfers"], keyof {
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["total"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TransfersForChainResponse>, never>>(object: I): TransfersForChainResponse;
};
export declare const FeeInfoRequest: {
    encode(message: FeeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeeInfoRequest;
    fromJSON(object: any): FeeInfoRequest;
    toJSON(message: FeeInfoRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        asset?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: string | undefined;
    } & Record<Exclude<keyof I, keyof FeeInfoRequest>, never>>(object: I): FeeInfoRequest;
};
export declare const FeeInfoResponse: {
    encode(message: FeeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeeInfoResponse;
    fromJSON(object: any): FeeInfoResponse;
    toJSON(message: FeeInfoResponse): unknown;
    fromPartial<I extends {
        feeInfo?: {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Uint8Array | undefined;
            minFee?: Uint8Array | undefined;
            maxFee?: Uint8Array | undefined;
        } | undefined;
    } & {
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
    } & Record<Exclude<keyof I, "feeInfo">, never>>(object: I): FeeInfoResponse;
};
export declare const TransferFeeRequest: {
    encode(message: TransferFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferFeeRequest;
    fromJSON(object: any): TransferFeeRequest;
    toJSON(message: TransferFeeRequest): unknown;
    fromPartial<I extends {
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
        amount?: string | undefined;
    } & {
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof TransferFeeRequest>, never>>(object: I): TransferFeeRequest;
};
export declare const TransferFeeResponse: {
    encode(message: TransferFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferFeeResponse;
    fromJSON(object: any): TransferFeeResponse;
    toJSON(message: TransferFeeResponse): unknown;
    fromPartial<I extends {
        fee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        fee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["fee"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, "fee">, never>>(object: I): TransferFeeResponse;
};
export declare const ChainsRequest: {
    encode(message: ChainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsRequest;
    fromJSON(object: any): ChainsRequest;
    toJSON(message: ChainsRequest): unknown;
    fromPartial<I extends {
        status?: ChainStatus | undefined;
    } & {
        status?: ChainStatus | undefined;
    } & Record<Exclude<keyof I, "status">, never>>(object: I): ChainsRequest;
};
export declare const ChainsResponse: {
    encode(message: ChainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsResponse;
    fromJSON(object: any): ChainsResponse;
    toJSON(message: ChainsResponse): unknown;
    fromPartial<I extends {
        chains?: string[] | undefined;
    } & {
        chains?: (string[] & string[] & Record<Exclude<keyof I["chains"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "chains">, never>>(object: I): ChainsResponse;
};
export declare const AssetsRequest: {
    encode(message: AssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetsRequest;
    fromJSON(object: any): AssetsRequest;
    toJSON(message: AssetsRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & Record<Exclude<keyof I, "chain">, never>>(object: I): AssetsRequest;
};
export declare const AssetsResponse: {
    encode(message: AssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetsResponse;
    fromJSON(object: any): AssetsResponse;
    toJSON(message: AssetsResponse): unknown;
    fromPartial<I extends {
        assets?: string[] | undefined;
    } & {
        assets?: (string[] & string[] & Record<Exclude<keyof I["assets"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "assets">, never>>(object: I): AssetsResponse;
};
export declare const ChainStateRequest: {
    encode(message: ChainStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainStateRequest;
    fromJSON(object: any): ChainStateRequest;
    toJSON(message: ChainStateRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & Record<Exclude<keyof I, "chain">, never>>(object: I): ChainStateRequest;
};
export declare const ChainStateResponse: {
    encode(message: ChainStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainStateResponse;
    fromJSON(object: any): ChainStateResponse;
    toJSON(message: ChainStateResponse): unknown;
    fromPartial<I extends {
        state?: {
            chain?: {
                name?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                module?: string | undefined;
            } | undefined;
            activated?: boolean | undefined;
            assets?: {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] | undefined;
            maintainerStates?: {
                address?: Uint8Array | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        state?: ({
            chain?: {
                name?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                module?: string | undefined;
            } | undefined;
            activated?: boolean | undefined;
            assets?: {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] | undefined;
            maintainerStates?: {
                address?: Uint8Array | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[] | undefined;
        } & {
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
            } & Record<Exclude<keyof I["state"]["chain"], keyof import("../../../axelar/nexus/exported/v1beta1/types").Chain>, never>) | undefined;
            activated?: boolean | undefined;
            assets?: ({
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] & ({
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            } & {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            } & Record<Exclude<keyof I["state"]["assets"][number], keyof import("../../../axelar/nexus/exported/v1beta1/types").Asset>, never>)[] & Record<Exclude<keyof I["state"]["assets"], keyof {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[]>, never>) | undefined;
            maintainerStates?: ({
                address?: Uint8Array | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[] & ({
                address?: Uint8Array | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            } & {
                address?: Uint8Array | undefined;
                missingVotes?: ({
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } & {
                    trueCountCache?: ({
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & {
                        cumulativeValue?: ((string | number | Long.Long)[] & (string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>, never>))[] & Record<Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>, never>) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & Record<Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>, never>) | undefined;
                } & Record<Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"], "trueCountCache">, never>) | undefined;
                incorrectVotes?: ({
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } & {
                    trueCountCache?: ({
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & {
                        cumulativeValue?: ((string | number | Long.Long)[] & (string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>, never>))[] & Record<Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>, never>) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & Record<Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>, never>) | undefined;
                } & Record<Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"], "trueCountCache">, never>) | undefined;
                chain?: string | undefined;
            } & Record<Exclude<keyof I["state"]["maintainerStates"][number], keyof import("../../../axelar/nexus/v1beta1/types").MaintainerState>, never>)[] & Record<Exclude<keyof I["state"]["maintainerStates"], keyof {
                address?: Uint8Array | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["state"], keyof ChainState>, never>) | undefined;
    } & Record<Exclude<keyof I, "state">, never>>(object: I): ChainStateResponse;
};
export declare const ChainsByAssetRequest: {
    encode(message: ChainsByAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsByAssetRequest;
    fromJSON(object: any): ChainsByAssetRequest;
    toJSON(message: ChainsByAssetRequest): unknown;
    fromPartial<I extends {
        asset?: string | undefined;
    } & {
        asset?: string | undefined;
    } & Record<Exclude<keyof I, "asset">, never>>(object: I): ChainsByAssetRequest;
};
export declare const ChainsByAssetResponse: {
    encode(message: ChainsByAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsByAssetResponse;
    fromJSON(object: any): ChainsByAssetResponse;
    toJSON(message: ChainsByAssetResponse): unknown;
    fromPartial<I extends {
        chains?: string[] | undefined;
    } & {
        chains?: (string[] & string[] & Record<Exclude<keyof I["chains"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "chains">, never>>(object: I): ChainsByAssetResponse;
};
export declare const RecipientAddressRequest: {
    encode(message: RecipientAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecipientAddressRequest;
    fromJSON(object: any): RecipientAddressRequest;
    toJSON(message: RecipientAddressRequest): unknown;
    fromPartial<I extends {
        depositAddr?: string | undefined;
        depositChain?: string | undefined;
    } & {
        depositAddr?: string | undefined;
        depositChain?: string | undefined;
    } & Record<Exclude<keyof I, keyof RecipientAddressRequest>, never>>(object: I): RecipientAddressRequest;
};
export declare const RecipientAddressResponse: {
    encode(message: RecipientAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecipientAddressResponse;
    fromJSON(object: any): RecipientAddressResponse;
    toJSON(message: RecipientAddressResponse): unknown;
    fromPartial<I extends {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & Record<Exclude<keyof I, keyof RecipientAddressResponse>, never>>(object: I): RecipientAddressResponse;
};
export declare const TransferRateLimitRequest: {
    encode(message: TransferRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferRateLimitRequest;
    fromJSON(object: any): TransferRateLimitRequest;
    toJSON(message: TransferRateLimitRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        asset?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: string | undefined;
    } & Record<Exclude<keyof I, keyof TransferRateLimitRequest>, never>>(object: I): TransferRateLimitRequest;
};
export declare const TransferRateLimitResponse: {
    encode(message: TransferRateLimitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferRateLimitResponse;
    fromJSON(object: any): TransferRateLimitResponse;
    toJSON(message: TransferRateLimitResponse): unknown;
    fromPartial<I extends {
        transferRateLimit?: {
            limit?: Uint8Array | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            incoming?: Uint8Array | undefined;
            outgoing?: Uint8Array | undefined;
            timeLeft?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        transferRateLimit?: ({
            limit?: Uint8Array | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            incoming?: Uint8Array | undefined;
            outgoing?: Uint8Array | undefined;
            timeLeft?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
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
                } & Record<Exclude<keyof I["transferRateLimit"]["window"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["transferRateLimit"]["window"], keyof Duration>, never>) | undefined;
            incoming?: Uint8Array | undefined;
            outgoing?: Uint8Array | undefined;
            timeLeft?: ({
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
                } & Record<Exclude<keyof I["transferRateLimit"]["timeLeft"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["transferRateLimit"]["timeLeft"], keyof Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["transferRateLimit"], keyof TransferRateLimit>, never>) | undefined;
    } & Record<Exclude<keyof I, "transferRateLimit">, never>>(object: I): TransferRateLimitResponse;
};
export declare const TransferRateLimit: {
    encode(message: TransferRateLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferRateLimit;
    fromJSON(object: any): TransferRateLimit;
    toJSON(message: TransferRateLimit): unknown;
    fromPartial<I extends {
        limit?: Uint8Array | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        incoming?: Uint8Array | undefined;
        outgoing?: Uint8Array | undefined;
        timeLeft?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
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
        incoming?: Uint8Array | undefined;
        outgoing?: Uint8Array | undefined;
        timeLeft?: ({
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
            } & Record<Exclude<keyof I["timeLeft"]["seconds"], keyof Long.Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timeLeft"], keyof Duration>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TransferRateLimit>, never>>(object: I): TransferRateLimit;
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
