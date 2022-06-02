import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Bitmap } from "../../../axelar/utils/v1beta1/bitmap";
import { Chain, CrossChainAddress, Asset } from "../../../axelar/nexus/exported/v1beta1/types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export interface MaintainerState {
    address: Uint8Array;
    missingVotes?: Bitmap;
    incorrectVotes?: Bitmap;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainState {
    chain?: Chain;
    /** @deprecated */
    maintainers: Uint8Array[];
    activated: boolean;
    assets: Asset[];
    maintainerStates: MaintainerState[];
}
export interface LinkedAddresses {
    depositAddress?: CrossChainAddress;
    recipientAddress?: CrossChainAddress;
}
export declare const MaintainerState: {
    encode(message: MaintainerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MaintainerState;
    fromJSON(object: any): MaintainerState;
    toJSON(message: MaintainerState): unknown;
    fromPartial<I extends {
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
                } & Record<Exclude<keyof I["missingVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>, never>))[] & Record<Exclude<keyof I["missingVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>, never>) | undefined;
                index?: number | undefined;
                maxSize?: number | undefined;
            } & Record<Exclude<keyof I["missingVotes"]["trueCountCache"], keyof import("../../../axelar/utils/v1beta1/bitmap").CircularBuffer>, never>) | undefined;
        } & Record<Exclude<keyof I["missingVotes"], "trueCountCache">, never>) | undefined;
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
                } & Record<Exclude<keyof I["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>, never>))[] & Record<Exclude<keyof I["incorrectVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>, never>) | undefined;
                index?: number | undefined;
                maxSize?: number | undefined;
            } & Record<Exclude<keyof I["incorrectVotes"]["trueCountCache"], keyof import("../../../axelar/utils/v1beta1/bitmap").CircularBuffer>, never>) | undefined;
        } & Record<Exclude<keyof I["incorrectVotes"], "trueCountCache">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MaintainerState>, never>>(object: I): MaintainerState;
};
export declare const ChainState: {
    encode(message: ChainState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainState;
    fromJSON(object: any): ChainState;
    toJSON(message: ChainState): unknown;
    fromPartial<I extends {
        chain?: {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } | undefined;
        maintainers?: Uint8Array[] | undefined;
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
        } & Record<Exclude<keyof I["chain"], keyof Chain>, never>) | undefined;
        maintainers?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["maintainers"], keyof Uint8Array[]>, never>) | undefined;
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
        } & Record<Exclude<keyof I["assets"][number], keyof Asset>, never>)[] & Record<Exclude<keyof I["assets"], keyof {
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
                    } & Record<Exclude<keyof I["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>, never>))[] & Record<Exclude<keyof I["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>, never>) | undefined;
                    index?: number | undefined;
                    maxSize?: number | undefined;
                } & Record<Exclude<keyof I["maintainerStates"][number]["missingVotes"]["trueCountCache"], keyof import("../../../axelar/utils/v1beta1/bitmap").CircularBuffer>, never>) | undefined;
            } & Record<Exclude<keyof I["maintainerStates"][number]["missingVotes"], "trueCountCache">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>, never>))[] & Record<Exclude<keyof I["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>, never>) | undefined;
                    index?: number | undefined;
                    maxSize?: number | undefined;
                } & Record<Exclude<keyof I["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], keyof import("../../../axelar/utils/v1beta1/bitmap").CircularBuffer>, never>) | undefined;
            } & Record<Exclude<keyof I["maintainerStates"][number]["incorrectVotes"], "trueCountCache">, never>) | undefined;
        } & Record<Exclude<keyof I["maintainerStates"][number], keyof MaintainerState>, never>)[] & Record<Exclude<keyof I["maintainerStates"], keyof {
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ChainState>, never>>(object: I): ChainState;
};
export declare const LinkedAddresses: {
    encode(message: LinkedAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkedAddresses;
    fromJSON(object: any): LinkedAddresses;
    toJSON(message: LinkedAddresses): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["depositAddress"]["chain"], keyof Chain>, never>) | undefined;
            address?: string | undefined;
        } & Record<Exclude<keyof I["depositAddress"], keyof CrossChainAddress>, never>) | undefined;
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
            } & Record<Exclude<keyof I["recipientAddress"]["chain"], keyof Chain>, never>) | undefined;
            address?: string | undefined;
        } & Record<Exclude<keyof I["recipientAddress"], keyof CrossChainAddress>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof LinkedAddresses>, never>>(object: I): LinkedAddresses;
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
