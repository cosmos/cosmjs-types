import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
export interface IBCTransfer {
    sender: Uint8Array;
    receiver: string;
    token?: Coin;
    portId: string;
    channelId: string;
    /** @deprecated */
    sequence: Long;
    id: Long;
    status: IBCTransfer_Status;
}
export declare enum IBCTransfer_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_PENDING = 1,
    STATUS_COMPLETED = 2,
    STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function iBCTransfer_StatusFromJSON(object: any): IBCTransfer_Status;
export declare function iBCTransfer_StatusToJSON(object: IBCTransfer_Status): string;
export interface CosmosChain {
    name: string;
    ibcPath: string;
    /** @deprecated */
    assets: Asset[];
    addrPrefix: string;
}
/** @deprecated */
export interface Asset {
    denom: string;
    minAmount: Uint8Array;
}
export declare const IBCTransfer: {
    encode(message: IBCTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IBCTransfer;
    fromJSON(object: any): IBCTransfer;
    toJSON(message: IBCTransfer): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        receiver?: string | undefined;
        token?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
        sequence?: string | number | Long.Long | undefined;
        id?: string | number | Long.Long | undefined;
        status?: IBCTransfer_Status | undefined;
    } & {
        sender?: Uint8Array | undefined;
        receiver?: string | undefined;
        token?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["token"], keyof Coin>, never>) | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
        sequence?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["sequence"], keyof Long.Long>, never>) | undefined;
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
        status?: IBCTransfer_Status | undefined;
    } & Record<Exclude<keyof I, keyof IBCTransfer>, never>>(object: I): IBCTransfer;
};
export declare const CosmosChain: {
    encode(message: CosmosChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CosmosChain;
    fromJSON(object: any): CosmosChain;
    toJSON(message: CosmosChain): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        ibcPath?: string | undefined;
        assets?: {
            denom?: string | undefined;
            minAmount?: Uint8Array | undefined;
        }[] | undefined;
        addrPrefix?: string | undefined;
    } & {
        name?: string | undefined;
        ibcPath?: string | undefined;
        assets?: ({
            denom?: string | undefined;
            minAmount?: Uint8Array | undefined;
        }[] & ({
            denom?: string | undefined;
            minAmount?: Uint8Array | undefined;
        } & {
            denom?: string | undefined;
            minAmount?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["assets"][number], keyof Asset>, never>)[] & Record<Exclude<keyof I["assets"], keyof {
            denom?: string | undefined;
            minAmount?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        addrPrefix?: string | undefined;
    } & Record<Exclude<keyof I, keyof CosmosChain>, never>>(object: I): CosmosChain;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        minAmount?: Uint8Array | undefined;
    } & {
        denom?: string | undefined;
        minAmount?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof Asset>, never>>(object: I): Asset;
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
