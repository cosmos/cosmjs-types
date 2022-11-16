import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/nexus/v1beta1/params";
import { TransferFee, Chain, CrossChainTransfer, FeeInfo } from "../../../axelar/nexus/exported/v1beta1/types";
import { ChainState, LinkedAddresses, RateLimit, TransferEpoch } from "../../../axelar/nexus/v1beta1/types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params?: Params;
    nonce: Long;
    chains: Chain[];
    chainStates: ChainState[];
    linkedAddresses: LinkedAddresses[];
    transfers: CrossChainTransfer[];
    fee?: TransferFee;
    feeInfos: FeeInfo[];
    rateLimits: RateLimit[];
    transferEpochs: TransferEpoch[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            chainActivationThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerMissingVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerIncorrectVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerCheckWindow?: number | undefined;
        } | undefined;
        nonce?: string | number | Long.Long | undefined;
        chains?: {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        }[] | undefined;
        chainStates?: {
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
        }[] | undefined;
        linkedAddresses?: {
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        }[] | undefined;
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
            state?: import("../../../axelar/nexus/exported/v1beta1/types").TransferState | undefined;
        }[] | undefined;
        fee?: {
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
        feeInfos?: {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Uint8Array | undefined;
            minFee?: Uint8Array | undefined;
            maxFee?: Uint8Array | undefined;
        }[] | undefined;
        rateLimits?: {
            chain?: string | undefined;
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
        transferEpochs?: {
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../../../axelar/nexus/exported/v1beta1/types").TransferDirection | undefined;
        }[] | undefined;
    } & {
        params?: ({
            chainActivationThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerMissingVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerIncorrectVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerCheckWindow?: number | undefined;
        } & {
            chainActivationThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainActivationThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
                denominator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainActivationThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["chainActivationThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
            chainMaintainerMissingVoteThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
                denominator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
            chainMaintainerIncorrectVoteThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
                denominator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
            chainMaintainerCheckWindow?: number | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        nonce?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["nonce"], keyof Long.Long>, never>) | undefined;
        chains?: ({
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        }[] & ({
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } & {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } & Record<Exclude<keyof I["chains"][number], keyof Chain>, never>)[] & Record<Exclude<keyof I["chains"], keyof {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        }[]>, never>) | undefined;
        chainStates?: ({
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
        }[] & ({
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
            } & Record<Exclude<keyof I["chainStates"][number]["chain"], keyof Chain>, never>) | undefined;
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
            } & Record<Exclude<keyof I["chainStates"][number]["assets"][number], keyof import("../../../axelar/nexus/exported/v1beta1/types").Asset>, never>)[] & Record<Exclude<keyof I["chainStates"][number]["assets"], keyof {
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
                        } & Record<Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>, never>))[] & Record<Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>, never>) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & Record<Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>, never>) | undefined;
                } & Record<Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"], "trueCountCache">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>, never>))[] & Record<Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>, never>) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & Record<Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>, never>) | undefined;
                } & Record<Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"], "trueCountCache">, never>) | undefined;
                chain?: string | undefined;
            } & Record<Exclude<keyof I["chainStates"][number]["maintainerStates"][number], keyof import("../../../axelar/nexus/v1beta1/types").MaintainerState>, never>)[] & Record<Exclude<keyof I["chainStates"][number]["maintainerStates"], keyof {
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
        } & Record<Exclude<keyof I["chainStates"][number], keyof ChainState>, never>)[] & Record<Exclude<keyof I["chainStates"], keyof {
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
        }[]>, never>) | undefined;
        linkedAddresses?: ({
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        }[] & ({
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        } & {
            depositAddress?: ({
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
                } & Record<Exclude<keyof I["linkedAddresses"][number]["depositAddress"]["chain"], keyof Chain>, never>) | undefined;
                address?: string | undefined;
            } & Record<Exclude<keyof I["linkedAddresses"][number]["depositAddress"], keyof import("../../../axelar/nexus/exported/v1beta1/types").CrossChainAddress>, never>) | undefined;
            recipientAddress?: ({
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
                } & Record<Exclude<keyof I["linkedAddresses"][number]["recipientAddress"]["chain"], keyof Chain>, never>) | undefined;
                address?: string | undefined;
            } & Record<Exclude<keyof I["linkedAddresses"][number]["recipientAddress"], keyof import("../../../axelar/nexus/exported/v1beta1/types").CrossChainAddress>, never>) | undefined;
        } & Record<Exclude<keyof I["linkedAddresses"][number], keyof LinkedAddresses>, never>)[] & Record<Exclude<keyof I["linkedAddresses"], keyof {
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
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
            state?: import("../../../axelar/nexus/exported/v1beta1/types").TransferState | undefined;
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
            state?: import("../../../axelar/nexus/exported/v1beta1/types").TransferState | undefined;
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
                } & Record<Exclude<keyof I["transfers"][number]["recipient"]["chain"], keyof Chain>, never>) | undefined;
                address?: string | undefined;
            } & Record<Exclude<keyof I["transfers"][number]["recipient"], keyof import("../../../axelar/nexus/exported/v1beta1/types").CrossChainAddress>, never>) | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["transfers"][number]["asset"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
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
            state?: import("../../../axelar/nexus/exported/v1beta1/types").TransferState | undefined;
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
            state?: import("../../../axelar/nexus/exported/v1beta1/types").TransferState | undefined;
        }[]>, never>) | undefined;
        fee?: ({
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["fee"]["coins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["fee"]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["fee"], "coins">, never>) | undefined;
        feeInfos?: ({
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Uint8Array | undefined;
            minFee?: Uint8Array | undefined;
            maxFee?: Uint8Array | undefined;
        }[] & ({
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
        } & Record<Exclude<keyof I["feeInfos"][number], keyof FeeInfo>, never>)[] & Record<Exclude<keyof I["feeInfos"], keyof {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Uint8Array | undefined;
            minFee?: Uint8Array | undefined;
            maxFee?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        rateLimits?: ({
            chain?: string | undefined;
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
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
            chain?: string | undefined;
            limit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["rateLimits"][number]["limit"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
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
                } & Record<Exclude<keyof I["rateLimits"][number]["window"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["rateLimits"][number]["window"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["rateLimits"][number], keyof RateLimit>, never>)[] & Record<Exclude<keyof I["rateLimits"], keyof {
            chain?: string | undefined;
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        transferEpochs?: ({
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../../../axelar/nexus/exported/v1beta1/types").TransferDirection | undefined;
        }[] & ({
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../../../axelar/nexus/exported/v1beta1/types").TransferDirection | undefined;
        } & {
            chain?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["transferEpochs"][number]["amount"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            epoch?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["transferEpochs"][number]["epoch"], keyof Long.Long>, never>) | undefined;
            direction?: import("../../../axelar/nexus/exported/v1beta1/types").TransferDirection | undefined;
        } & Record<Exclude<keyof I["transferEpochs"][number], keyof TransferEpoch>, never>)[] & Record<Exclude<keyof I["transferEpochs"], keyof {
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../../../axelar/nexus/exported/v1beta1/types").TransferDirection | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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
