import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { SigStatus, KeyRole } from "../../../axelar/tss/exported/v1beta1/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { KeygenOutput } from "../../../axelar/tss/tofnd/v1beta1/tofnd";
export declare const protobufPackage = "axelar.tss.v1beta1";
export declare enum VoteStatus {
    VOTE_STATUS_UNSPECIFIED = 0,
    VOTE_STATUS_NOT_FOUND = 1,
    VOTE_STATUS_PENDING = 2,
    VOTE_STATUS_DECIDED = 3,
    UNRECOGNIZED = -1
}
export declare function voteStatusFromJSON(object: any): VoteStatus;
export declare function voteStatusToJSON(object: VoteStatus): string;
export interface QuerySignatureResponse {
    thresholdSignature?: QuerySignatureResponse_ThresholdSignature | undefined;
    multisigSignature?: QuerySignatureResponse_MultisigSignature | undefined;
}
export interface QuerySignatureResponse_Signature {
    r: string;
    s: string;
}
export interface QuerySignatureResponse_ThresholdSignature {
    voteStatus: VoteStatus;
    signature?: QuerySignatureResponse_Signature;
}
export interface QuerySignatureResponse_MultisigSignature {
    sigStatus: SigStatus;
    signatures: QuerySignatureResponse_Signature[];
}
export interface QueryKeyResponse {
    ecdsaKey?: QueryKeyResponse_ECDSAKey | undefined;
    multisigKey?: QueryKeyResponse_MultisigKey | undefined;
    role: KeyRole;
    rotatedAt?: Timestamp;
}
export interface QueryKeyResponse_Key {
    x: string;
    y: string;
}
export interface QueryKeyResponse_ECDSAKey {
    voteStatus: VoteStatus;
    key?: QueryKeyResponse_Key;
}
export interface QueryKeyResponse_MultisigKey {
    threshold: Long;
    key: QueryKeyResponse_Key[];
}
export interface QueryRecoveryResponse {
    partyUids: string[];
    partyShareCounts: number[];
    threshold: number;
    keygenOutput?: KeygenOutput;
}
export interface QueryKeyShareResponse {
    shareInfos: QueryKeyShareResponse_ShareInfo[];
}
export interface QueryKeyShareResponse_ShareInfo {
    keyId: string;
    keyChain: string;
    keyRole: string;
    snapshotBlockNumber: Long;
    validatorAddress: string;
    numValidatorShares: Long;
    numTotalShares: Long;
}
export interface QueryDeactivatedOperatorsResponse {
    operatorAddresses: string[];
}
export interface QueryActiveOldKeysValidatorResponse {
    keysInfo: QueryActiveOldKeysValidatorResponse_KeyInfo[];
}
export interface QueryActiveOldKeysValidatorResponse_KeyInfo {
    id: string;
    chain: string;
    role: number;
}
export interface QueryActiveOldKeysResponse {
    keyIds: string[];
}
export interface QueryExternalKeyIDResponse {
    keyIds: string[];
}
export interface NextKeyIDRequest {
    chain: string;
    keyRole: KeyRole;
}
export interface NextKeyIDResponse {
    keyId: string;
}
export interface AssignableKeyRequest {
    chain: string;
    keyRole: KeyRole;
}
export interface AssignableKeyResponse {
    assignable: boolean;
}
export interface ValidatorMultisigKeysRequest {
    address: string;
}
export interface ValidatorMultisigKeysResponse {
    keys: {
        [key: string]: ValidatorMultisigKeysResponse_Keys;
    };
}
export interface ValidatorMultisigKeysResponse_Keys {
    keys: Uint8Array[];
}
export interface ValidatorMultisigKeysResponse_KeysEntry {
    key: string;
    value?: ValidatorMultisigKeysResponse_Keys;
}
export declare const QuerySignatureResponse: {
    encode(message: QuerySignatureResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuerySignatureResponse;
    fromJSON(object: any): QuerySignatureResponse;
    toJSON(message: QuerySignatureResponse): unknown;
    fromPartial<I extends {
        thresholdSignature?: {
            voteStatus?: VoteStatus | undefined;
            signature?: {
                r?: string | undefined;
                s?: string | undefined;
            } | undefined;
        } | undefined;
        multisigSignature?: {
            sigStatus?: SigStatus | undefined;
            signatures?: {
                r?: string | undefined;
                s?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        thresholdSignature?: ({
            voteStatus?: VoteStatus | undefined;
            signature?: {
                r?: string | undefined;
                s?: string | undefined;
            } | undefined;
        } & {
            voteStatus?: VoteStatus | undefined;
            signature?: ({
                r?: string | undefined;
                s?: string | undefined;
            } & {
                r?: string | undefined;
                s?: string | undefined;
            } & Record<Exclude<keyof I["thresholdSignature"]["signature"], keyof QuerySignatureResponse_Signature>, never>) | undefined;
        } & Record<Exclude<keyof I["thresholdSignature"], keyof QuerySignatureResponse_ThresholdSignature>, never>) | undefined;
        multisigSignature?: ({
            sigStatus?: SigStatus | undefined;
            signatures?: {
                r?: string | undefined;
                s?: string | undefined;
            }[] | undefined;
        } & {
            sigStatus?: SigStatus | undefined;
            signatures?: ({
                r?: string | undefined;
                s?: string | undefined;
            }[] & ({
                r?: string | undefined;
                s?: string | undefined;
            } & {
                r?: string | undefined;
                s?: string | undefined;
            } & Record<Exclude<keyof I["multisigSignature"]["signatures"][number], keyof QuerySignatureResponse_Signature>, never>)[] & Record<Exclude<keyof I["multisigSignature"]["signatures"], keyof {
                r?: string | undefined;
                s?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["multisigSignature"], keyof QuerySignatureResponse_MultisigSignature>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QuerySignatureResponse>, never>>(object: I): QuerySignatureResponse;
};
export declare const QuerySignatureResponse_Signature: {
    encode(message: QuerySignatureResponse_Signature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuerySignatureResponse_Signature;
    fromJSON(object: any): QuerySignatureResponse_Signature;
    toJSON(message: QuerySignatureResponse_Signature): unknown;
    fromPartial<I extends {
        r?: string | undefined;
        s?: string | undefined;
    } & {
        r?: string | undefined;
        s?: string | undefined;
    } & Record<Exclude<keyof I, keyof QuerySignatureResponse_Signature>, never>>(object: I): QuerySignatureResponse_Signature;
};
export declare const QuerySignatureResponse_ThresholdSignature: {
    encode(message: QuerySignatureResponse_ThresholdSignature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuerySignatureResponse_ThresholdSignature;
    fromJSON(object: any): QuerySignatureResponse_ThresholdSignature;
    toJSON(message: QuerySignatureResponse_ThresholdSignature): unknown;
    fromPartial<I extends {
        voteStatus?: VoteStatus | undefined;
        signature?: {
            r?: string | undefined;
            s?: string | undefined;
        } | undefined;
    } & {
        voteStatus?: VoteStatus | undefined;
        signature?: ({
            r?: string | undefined;
            s?: string | undefined;
        } & {
            r?: string | undefined;
            s?: string | undefined;
        } & Record<Exclude<keyof I["signature"], keyof QuerySignatureResponse_Signature>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QuerySignatureResponse_ThresholdSignature>, never>>(object: I): QuerySignatureResponse_ThresholdSignature;
};
export declare const QuerySignatureResponse_MultisigSignature: {
    encode(message: QuerySignatureResponse_MultisigSignature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuerySignatureResponse_MultisigSignature;
    fromJSON(object: any): QuerySignatureResponse_MultisigSignature;
    toJSON(message: QuerySignatureResponse_MultisigSignature): unknown;
    fromPartial<I extends {
        sigStatus?: SigStatus | undefined;
        signatures?: {
            r?: string | undefined;
            s?: string | undefined;
        }[] | undefined;
    } & {
        sigStatus?: SigStatus | undefined;
        signatures?: ({
            r?: string | undefined;
            s?: string | undefined;
        }[] & ({
            r?: string | undefined;
            s?: string | undefined;
        } & {
            r?: string | undefined;
            s?: string | undefined;
        } & Record<Exclude<keyof I["signatures"][number], keyof QuerySignatureResponse_Signature>, never>)[] & Record<Exclude<keyof I["signatures"], keyof {
            r?: string | undefined;
            s?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QuerySignatureResponse_MultisigSignature>, never>>(object: I): QuerySignatureResponse_MultisigSignature;
};
export declare const QueryKeyResponse: {
    encode(message: QueryKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryKeyResponse;
    fromJSON(object: any): QueryKeyResponse;
    toJSON(message: QueryKeyResponse): unknown;
    fromPartial<I extends {
        ecdsaKey?: {
            voteStatus?: VoteStatus | undefined;
            key?: {
                x?: string | undefined;
                y?: string | undefined;
            } | undefined;
        } | undefined;
        multisigKey?: {
            threshold?: string | number | Long.Long | undefined;
            key?: {
                x?: string | undefined;
                y?: string | undefined;
            }[] | undefined;
        } | undefined;
        role?: KeyRole | undefined;
        rotatedAt?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        ecdsaKey?: ({
            voteStatus?: VoteStatus | undefined;
            key?: {
                x?: string | undefined;
                y?: string | undefined;
            } | undefined;
        } & {
            voteStatus?: VoteStatus | undefined;
            key?: ({
                x?: string | undefined;
                y?: string | undefined;
            } & {
                x?: string | undefined;
                y?: string | undefined;
            } & Record<Exclude<keyof I["ecdsaKey"]["key"], keyof QueryKeyResponse_Key>, never>) | undefined;
        } & Record<Exclude<keyof I["ecdsaKey"], keyof QueryKeyResponse_ECDSAKey>, never>) | undefined;
        multisigKey?: ({
            threshold?: string | number | Long.Long | undefined;
            key?: {
                x?: string | undefined;
                y?: string | undefined;
            }[] | undefined;
        } & {
            threshold?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["multisigKey"]["threshold"], keyof Long.Long>, never>) | undefined;
            key?: ({
                x?: string | undefined;
                y?: string | undefined;
            }[] & ({
                x?: string | undefined;
                y?: string | undefined;
            } & {
                x?: string | undefined;
                y?: string | undefined;
            } & Record<Exclude<keyof I["multisigKey"]["key"][number], keyof QueryKeyResponse_Key>, never>)[] & Record<Exclude<keyof I["multisigKey"]["key"], keyof {
                x?: string | undefined;
                y?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["multisigKey"], keyof QueryKeyResponse_MultisigKey>, never>) | undefined;
        role?: KeyRole | undefined;
        rotatedAt?: ({
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
            } & Record<Exclude<keyof I["rotatedAt"]["seconds"], keyof Long.Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["rotatedAt"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryKeyResponse>, never>>(object: I): QueryKeyResponse;
};
export declare const QueryKeyResponse_Key: {
    encode(message: QueryKeyResponse_Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryKeyResponse_Key;
    fromJSON(object: any): QueryKeyResponse_Key;
    toJSON(message: QueryKeyResponse_Key): unknown;
    fromPartial<I extends {
        x?: string | undefined;
        y?: string | undefined;
    } & {
        x?: string | undefined;
        y?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryKeyResponse_Key>, never>>(object: I): QueryKeyResponse_Key;
};
export declare const QueryKeyResponse_ECDSAKey: {
    encode(message: QueryKeyResponse_ECDSAKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryKeyResponse_ECDSAKey;
    fromJSON(object: any): QueryKeyResponse_ECDSAKey;
    toJSON(message: QueryKeyResponse_ECDSAKey): unknown;
    fromPartial<I extends {
        voteStatus?: VoteStatus | undefined;
        key?: {
            x?: string | undefined;
            y?: string | undefined;
        } | undefined;
    } & {
        voteStatus?: VoteStatus | undefined;
        key?: ({
            x?: string | undefined;
            y?: string | undefined;
        } & {
            x?: string | undefined;
            y?: string | undefined;
        } & Record<Exclude<keyof I["key"], keyof QueryKeyResponse_Key>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryKeyResponse_ECDSAKey>, never>>(object: I): QueryKeyResponse_ECDSAKey;
};
export declare const QueryKeyResponse_MultisigKey: {
    encode(message: QueryKeyResponse_MultisigKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryKeyResponse_MultisigKey;
    fromJSON(object: any): QueryKeyResponse_MultisigKey;
    toJSON(message: QueryKeyResponse_MultisigKey): unknown;
    fromPartial<I extends {
        threshold?: string | number | Long.Long | undefined;
        key?: {
            x?: string | undefined;
            y?: string | undefined;
        }[] | undefined;
    } & {
        threshold?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["threshold"], keyof Long.Long>, never>) | undefined;
        key?: ({
            x?: string | undefined;
            y?: string | undefined;
        }[] & ({
            x?: string | undefined;
            y?: string | undefined;
        } & {
            x?: string | undefined;
            y?: string | undefined;
        } & Record<Exclude<keyof I["key"][number], keyof QueryKeyResponse_Key>, never>)[] & Record<Exclude<keyof I["key"], keyof {
            x?: string | undefined;
            y?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryKeyResponse_MultisigKey>, never>>(object: I): QueryKeyResponse_MultisigKey;
};
export declare const QueryRecoveryResponse: {
    encode(message: QueryRecoveryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryRecoveryResponse;
    fromJSON(object: any): QueryRecoveryResponse;
    toJSON(message: QueryRecoveryResponse): unknown;
    fromPartial<I extends {
        partyUids?: string[] | undefined;
        partyShareCounts?: number[] | undefined;
        threshold?: number | undefined;
        keygenOutput?: {
            pubKey?: Uint8Array | undefined;
            groupRecoverInfo?: Uint8Array | undefined;
            privateRecoverInfo?: Uint8Array | undefined;
        } | undefined;
    } & {
        partyUids?: (string[] & string[] & Record<Exclude<keyof I["partyUids"], keyof string[]>, never>) | undefined;
        partyShareCounts?: (number[] & number[] & Record<Exclude<keyof I["partyShareCounts"], keyof number[]>, never>) | undefined;
        threshold?: number | undefined;
        keygenOutput?: ({
            pubKey?: Uint8Array | undefined;
            groupRecoverInfo?: Uint8Array | undefined;
            privateRecoverInfo?: Uint8Array | undefined;
        } & {
            pubKey?: Uint8Array | undefined;
            groupRecoverInfo?: Uint8Array | undefined;
            privateRecoverInfo?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["keygenOutput"], keyof KeygenOutput>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryRecoveryResponse>, never>>(object: I): QueryRecoveryResponse;
};
export declare const QueryKeyShareResponse: {
    encode(message: QueryKeyShareResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryKeyShareResponse;
    fromJSON(object: any): QueryKeyShareResponse;
    toJSON(message: QueryKeyShareResponse): unknown;
    fromPartial<I extends {
        shareInfos?: {
            keyId?: string | undefined;
            keyChain?: string | undefined;
            keyRole?: string | undefined;
            snapshotBlockNumber?: string | number | Long.Long | undefined;
            validatorAddress?: string | undefined;
            numValidatorShares?: string | number | Long.Long | undefined;
            numTotalShares?: string | number | Long.Long | undefined;
        }[] | undefined;
    } & {
        shareInfos?: ({
            keyId?: string | undefined;
            keyChain?: string | undefined;
            keyRole?: string | undefined;
            snapshotBlockNumber?: string | number | Long.Long | undefined;
            validatorAddress?: string | undefined;
            numValidatorShares?: string | number | Long.Long | undefined;
            numTotalShares?: string | number | Long.Long | undefined;
        }[] & ({
            keyId?: string | undefined;
            keyChain?: string | undefined;
            keyRole?: string | undefined;
            snapshotBlockNumber?: string | number | Long.Long | undefined;
            validatorAddress?: string | undefined;
            numValidatorShares?: string | number | Long.Long | undefined;
            numTotalShares?: string | number | Long.Long | undefined;
        } & {
            keyId?: string | undefined;
            keyChain?: string | undefined;
            keyRole?: string | undefined;
            snapshotBlockNumber?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["shareInfos"][number]["snapshotBlockNumber"], keyof Long.Long>, never>) | undefined;
            validatorAddress?: string | undefined;
            numValidatorShares?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["shareInfos"][number]["numValidatorShares"], keyof Long.Long>, never>) | undefined;
            numTotalShares?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["shareInfos"][number]["numTotalShares"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["shareInfos"][number], keyof QueryKeyShareResponse_ShareInfo>, never>)[] & Record<Exclude<keyof I["shareInfos"], keyof {
            keyId?: string | undefined;
            keyChain?: string | undefined;
            keyRole?: string | undefined;
            snapshotBlockNumber?: string | number | Long.Long | undefined;
            validatorAddress?: string | undefined;
            numValidatorShares?: string | number | Long.Long | undefined;
            numTotalShares?: string | number | Long.Long | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "shareInfos">, never>>(object: I): QueryKeyShareResponse;
};
export declare const QueryKeyShareResponse_ShareInfo: {
    encode(message: QueryKeyShareResponse_ShareInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryKeyShareResponse_ShareInfo;
    fromJSON(object: any): QueryKeyShareResponse_ShareInfo;
    toJSON(message: QueryKeyShareResponse_ShareInfo): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
        keyChain?: string | undefined;
        keyRole?: string | undefined;
        snapshotBlockNumber?: string | number | Long.Long | undefined;
        validatorAddress?: string | undefined;
        numValidatorShares?: string | number | Long.Long | undefined;
        numTotalShares?: string | number | Long.Long | undefined;
    } & {
        keyId?: string | undefined;
        keyChain?: string | undefined;
        keyRole?: string | undefined;
        snapshotBlockNumber?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["snapshotBlockNumber"], keyof Long.Long>, never>) | undefined;
        validatorAddress?: string | undefined;
        numValidatorShares?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["numValidatorShares"], keyof Long.Long>, never>) | undefined;
        numTotalShares?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["numTotalShares"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryKeyShareResponse_ShareInfo>, never>>(object: I): QueryKeyShareResponse_ShareInfo;
};
export declare const QueryDeactivatedOperatorsResponse: {
    encode(message: QueryDeactivatedOperatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDeactivatedOperatorsResponse;
    fromJSON(object: any): QueryDeactivatedOperatorsResponse;
    toJSON(message: QueryDeactivatedOperatorsResponse): unknown;
    fromPartial<I extends {
        operatorAddresses?: string[] | undefined;
    } & {
        operatorAddresses?: (string[] & string[] & Record<Exclude<keyof I["operatorAddresses"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "operatorAddresses">, never>>(object: I): QueryDeactivatedOperatorsResponse;
};
export declare const QueryActiveOldKeysValidatorResponse: {
    encode(message: QueryActiveOldKeysValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryActiveOldKeysValidatorResponse;
    fromJSON(object: any): QueryActiveOldKeysValidatorResponse;
    toJSON(message: QueryActiveOldKeysValidatorResponse): unknown;
    fromPartial<I extends {
        keysInfo?: {
            id?: string | undefined;
            chain?: string | undefined;
            role?: number | undefined;
        }[] | undefined;
    } & {
        keysInfo?: ({
            id?: string | undefined;
            chain?: string | undefined;
            role?: number | undefined;
        }[] & ({
            id?: string | undefined;
            chain?: string | undefined;
            role?: number | undefined;
        } & {
            id?: string | undefined;
            chain?: string | undefined;
            role?: number | undefined;
        } & Record<Exclude<keyof I["keysInfo"][number], keyof QueryActiveOldKeysValidatorResponse_KeyInfo>, never>)[] & Record<Exclude<keyof I["keysInfo"], keyof {
            id?: string | undefined;
            chain?: string | undefined;
            role?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "keysInfo">, never>>(object: I): QueryActiveOldKeysValidatorResponse;
};
export declare const QueryActiveOldKeysValidatorResponse_KeyInfo: {
    encode(message: QueryActiveOldKeysValidatorResponse_KeyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryActiveOldKeysValidatorResponse_KeyInfo;
    fromJSON(object: any): QueryActiveOldKeysValidatorResponse_KeyInfo;
    toJSON(message: QueryActiveOldKeysValidatorResponse_KeyInfo): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        chain?: string | undefined;
        role?: number | undefined;
    } & {
        id?: string | undefined;
        chain?: string | undefined;
        role?: number | undefined;
    } & Record<Exclude<keyof I, keyof QueryActiveOldKeysValidatorResponse_KeyInfo>, never>>(object: I): QueryActiveOldKeysValidatorResponse_KeyInfo;
};
export declare const QueryActiveOldKeysResponse: {
    encode(message: QueryActiveOldKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryActiveOldKeysResponse;
    fromJSON(object: any): QueryActiveOldKeysResponse;
    toJSON(message: QueryActiveOldKeysResponse): unknown;
    fromPartial<I extends {
        keyIds?: string[] | undefined;
    } & {
        keyIds?: (string[] & string[] & Record<Exclude<keyof I["keyIds"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "keyIds">, never>>(object: I): QueryActiveOldKeysResponse;
};
export declare const QueryExternalKeyIDResponse: {
    encode(message: QueryExternalKeyIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryExternalKeyIDResponse;
    fromJSON(object: any): QueryExternalKeyIDResponse;
    toJSON(message: QueryExternalKeyIDResponse): unknown;
    fromPartial<I extends {
        keyIds?: string[] | undefined;
    } & {
        keyIds?: (string[] & string[] & Record<Exclude<keyof I["keyIds"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "keyIds">, never>>(object: I): QueryExternalKeyIDResponse;
};
export declare const NextKeyIDRequest: {
    encode(message: NextKeyIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NextKeyIDRequest;
    fromJSON(object: any): NextKeyIDRequest;
    toJSON(message: NextKeyIDRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
    } & {
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
    } & Record<Exclude<keyof I, keyof NextKeyIDRequest>, never>>(object: I): NextKeyIDRequest;
};
export declare const NextKeyIDResponse: {
    encode(message: NextKeyIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NextKeyIDResponse;
    fromJSON(object: any): NextKeyIDResponse;
    toJSON(message: NextKeyIDResponse): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, "keyId">, never>>(object: I): NextKeyIDResponse;
};
export declare const AssignableKeyRequest: {
    encode(message: AssignableKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssignableKeyRequest;
    fromJSON(object: any): AssignableKeyRequest;
    toJSON(message: AssignableKeyRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
    } & {
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
    } & Record<Exclude<keyof I, keyof AssignableKeyRequest>, never>>(object: I): AssignableKeyRequest;
};
export declare const AssignableKeyResponse: {
    encode(message: AssignableKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssignableKeyResponse;
    fromJSON(object: any): AssignableKeyResponse;
    toJSON(message: AssignableKeyResponse): unknown;
    fromPartial<I extends {
        assignable?: boolean | undefined;
    } & {
        assignable?: boolean | undefined;
    } & Record<Exclude<keyof I, "assignable">, never>>(object: I): AssignableKeyResponse;
};
export declare const ValidatorMultisigKeysRequest: {
    encode(message: ValidatorMultisigKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorMultisigKeysRequest;
    fromJSON(object: any): ValidatorMultisigKeysRequest;
    toJSON(message: ValidatorMultisigKeysRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): ValidatorMultisigKeysRequest;
};
export declare const ValidatorMultisigKeysResponse: {
    encode(message: ValidatorMultisigKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorMultisigKeysResponse;
    fromJSON(object: any): ValidatorMultisigKeysResponse;
    toJSON(message: ValidatorMultisigKeysResponse): unknown;
    fromPartial<I extends {
        keys?: {
            [x: string]: {
                keys?: Uint8Array[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        keys?: ({
            [x: string]: {
                keys?: Uint8Array[] | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                keys?: Uint8Array[] | undefined;
            } & {
                keys?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["keys"][string]["keys"], keyof Uint8Array[]>, never>) | undefined;
            } & Record<Exclude<keyof I["keys"][string], "keys">, never>) | undefined;
        } & Record<Exclude<keyof I["keys"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "keys">, never>>(object: I): ValidatorMultisigKeysResponse;
};
export declare const ValidatorMultisigKeysResponse_Keys: {
    encode(message: ValidatorMultisigKeysResponse_Keys, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorMultisigKeysResponse_Keys;
    fromJSON(object: any): ValidatorMultisigKeysResponse_Keys;
    toJSON(message: ValidatorMultisigKeysResponse_Keys): unknown;
    fromPartial<I extends {
        keys?: Uint8Array[] | undefined;
    } & {
        keys?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["keys"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "keys">, never>>(object: I): ValidatorMultisigKeysResponse_Keys;
};
export declare const ValidatorMultisigKeysResponse_KeysEntry: {
    encode(message: ValidatorMultisigKeysResponse_KeysEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorMultisigKeysResponse_KeysEntry;
    fromJSON(object: any): ValidatorMultisigKeysResponse_KeysEntry;
    toJSON(message: ValidatorMultisigKeysResponse_KeysEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: {
            keys?: Uint8Array[] | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            keys?: Uint8Array[] | undefined;
        } & {
            keys?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["value"]["keys"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["value"], "keys">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ValidatorMultisigKeysResponse_KeysEntry>, never>>(object: I): ValidatorMultisigKeysResponse_KeysEntry;
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
