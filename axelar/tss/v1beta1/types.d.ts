import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { KeyRole, KeyType } from "../../../axelar/tss/exported/v1beta1/types";
export declare const protobufPackage = "axelar.tss.v1beta1";
export interface KeygenVoteData {
    pubKey: Uint8Array;
    groupRecoveryInfo: Uint8Array;
}
/** KeyInfo holds information about a key */
export interface KeyInfo {
    keyId: string;
    keyRole: KeyRole;
    keyType: KeyType;
}
export interface MultisigInfo {
    id: string;
    timeout: Long;
    targetNum: Long;
    infos: MultisigInfo_Info[];
}
export interface MultisigInfo_Info {
    participant: Uint8Array;
    data: Uint8Array[];
}
export interface KeyRecoveryInfo {
    keyId: string;
    public: Uint8Array;
    private: {
        [key: string]: Uint8Array;
    };
}
export interface KeyRecoveryInfo_PrivateEntry {
    key: string;
    value: Uint8Array;
}
export interface ExternalKeys {
    chain: string;
    keyIds: string[];
}
export interface ValidatorStatus {
    validator: Uint8Array;
    suspendedUntil: Long;
}
export declare const KeygenVoteData: {
    encode(message: KeygenVoteData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenVoteData;
    fromJSON(object: any): KeygenVoteData;
    toJSON(message: KeygenVoteData): unknown;
    fromPartial<I extends {
        pubKey?: Uint8Array | undefined;
        groupRecoveryInfo?: Uint8Array | undefined;
    } & {
        pubKey?: Uint8Array | undefined;
        groupRecoveryInfo?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof KeygenVoteData>, never>>(object: I): KeygenVoteData;
};
export declare const KeyInfo: {
    encode(message: KeyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyInfo;
    fromJSON(object: any): KeyInfo;
    toJSON(message: KeyInfo): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyType?: KeyType | undefined;
    } & {
        keyId?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyType?: KeyType | undefined;
    } & Record<Exclude<keyof I, keyof KeyInfo>, never>>(object: I): KeyInfo;
};
export declare const MultisigInfo: {
    encode(message: MultisigInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MultisigInfo;
    fromJSON(object: any): MultisigInfo;
    toJSON(message: MultisigInfo): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        timeout?: string | number | Long.Long | undefined;
        targetNum?: string | number | Long.Long | undefined;
        infos?: {
            participant?: Uint8Array | undefined;
            data?: Uint8Array[] | undefined;
        }[] | undefined;
    } & {
        id?: string | undefined;
        timeout?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["timeout"], keyof Long.Long>, never>) | undefined;
        targetNum?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["targetNum"], keyof Long.Long>, never>) | undefined;
        infos?: ({
            participant?: Uint8Array | undefined;
            data?: Uint8Array[] | undefined;
        }[] & ({
            participant?: Uint8Array | undefined;
            data?: Uint8Array[] | undefined;
        } & {
            participant?: Uint8Array | undefined;
            data?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["infos"][number]["data"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["infos"][number], keyof MultisigInfo_Info>, never>)[] & Record<Exclude<keyof I["infos"], keyof {
            participant?: Uint8Array | undefined;
            data?: Uint8Array[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MultisigInfo>, never>>(object: I): MultisigInfo;
};
export declare const MultisigInfo_Info: {
    encode(message: MultisigInfo_Info, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MultisigInfo_Info;
    fromJSON(object: any): MultisigInfo_Info;
    toJSON(message: MultisigInfo_Info): unknown;
    fromPartial<I extends {
        participant?: Uint8Array | undefined;
        data?: Uint8Array[] | undefined;
    } & {
        participant?: Uint8Array | undefined;
        data?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["data"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MultisigInfo_Info>, never>>(object: I): MultisigInfo_Info;
};
export declare const KeyRecoveryInfo: {
    encode(message: KeyRecoveryInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyRecoveryInfo;
    fromJSON(object: any): KeyRecoveryInfo;
    toJSON(message: KeyRecoveryInfo): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
        public?: Uint8Array | undefined;
        private?: {
            [x: string]: Uint8Array | undefined;
        } | undefined;
    } & {
        keyId?: string | undefined;
        public?: Uint8Array | undefined;
        private?: ({
            [x: string]: Uint8Array | undefined;
        } & {
            [x: string]: Uint8Array | undefined;
        } & Record<Exclude<keyof I["private"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof KeyRecoveryInfo>, never>>(object: I): KeyRecoveryInfo;
};
export declare const KeyRecoveryInfo_PrivateEntry: {
    encode(message: KeyRecoveryInfo_PrivateEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyRecoveryInfo_PrivateEntry;
    fromJSON(object: any): KeyRecoveryInfo_PrivateEntry;
    toJSON(message: KeyRecoveryInfo_PrivateEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: Uint8Array | undefined;
    } & {
        key?: string | undefined;
        value?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof KeyRecoveryInfo_PrivateEntry>, never>>(object: I): KeyRecoveryInfo_PrivateEntry;
};
export declare const ExternalKeys: {
    encode(message: ExternalKeys, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalKeys;
    fromJSON(object: any): ExternalKeys;
    toJSON(message: ExternalKeys): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        keyIds?: string[] | undefined;
    } & {
        chain?: string | undefined;
        keyIds?: (string[] & string[] & Record<Exclude<keyof I["keyIds"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ExternalKeys>, never>>(object: I): ExternalKeys;
};
export declare const ValidatorStatus: {
    encode(message: ValidatorStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorStatus;
    fromJSON(object: any): ValidatorStatus;
    toJSON(message: ValidatorStatus): unknown;
    fromPartial<I extends {
        validator?: Uint8Array | undefined;
        suspendedUntil?: string | number | Long.Long | undefined;
    } & {
        validator?: Uint8Array | undefined;
        suspendedUntil?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["suspendedUntil"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ValidatorStatus>, never>>(object: I): ValidatorStatus;
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
