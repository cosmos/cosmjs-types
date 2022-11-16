import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "axelar.evm.v1beta1";
export declare enum Status {
    /**
     * STATUS_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
     * be powers of 2
     */
    STATUS_UNSPECIFIED = 0,
    STATUS_INITIALIZED = 1,
    STATUS_PENDING = 2,
    STATUS_CONFIRMED = 4,
    UNRECOGNIZED = -1
}
export declare function statusFromJSON(object: any): Status;
export declare function statusToJSON(object: Status): string;
export declare enum CommandType {
    COMMAND_TYPE_UNSPECIFIED = 0,
    COMMAND_TYPE_MINT_TOKEN = 1,
    COMMAND_TYPE_DEPLOY_TOKEN = 2,
    COMMAND_TYPE_BURN_TOKEN = 3,
    COMMAND_TYPE_TRANSFER_OPERATORSHIP = 4,
    COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT = 5,
    COMMAND_TYPE_APPROVE_CONTRACT_CALL = 6,
    UNRECOGNIZED = -1
}
export declare function commandTypeFromJSON(object: any): CommandType;
export declare function commandTypeToJSON(object: CommandType): string;
export declare enum BatchedCommandsStatus {
    BATCHED_COMMANDS_STATUS_UNSPECIFIED = 0,
    BATCHED_COMMANDS_STATUS_SIGNING = 1,
    BATCHED_COMMANDS_STATUS_ABORTED = 2,
    BATCHED_COMMANDS_STATUS_SIGNED = 3,
    UNRECOGNIZED = -1
}
export declare function batchedCommandsStatusFromJSON(object: any): BatchedCommandsStatus;
export declare function batchedCommandsStatusToJSON(object: BatchedCommandsStatus): string;
export declare enum SigType {
    SIG_TYPE_UNSPECIFIED = 0,
    SIG_TYPE_TX = 1,
    SIG_TYPE_COMMAND = 2,
    UNRECOGNIZED = -1
}
export declare function sigTypeFromJSON(object: any): SigType;
export declare function sigTypeToJSON(object: SigType): string;
export declare enum DepositStatus {
    DEPOSIT_STATUS_UNSPECIFIED = 0,
    DEPOSIT_STATUS_PENDING = 1,
    DEPOSIT_STATUS_CONFIRMED = 2,
    DEPOSIT_STATUS_BURNED = 3,
    UNRECOGNIZED = -1
}
export declare function depositStatusFromJSON(object: any): DepositStatus;
export declare function depositStatusToJSON(object: DepositStatus): string;
export interface VoteEvents {
    chain: string;
    events: Event[];
}
export interface Event {
    chain: string;
    txId: Uint8Array;
    index: Long;
    status: Event_Status;
    tokenSent?: EventTokenSent | undefined;
    contractCall?: EventContractCall | undefined;
    contractCallWithToken?: EventContractCallWithToken | undefined;
    transfer?: EventTransfer | undefined;
    tokenDeployed?: EventTokenDeployed | undefined;
    /** @deprecated */
    multisigOwnershipTransferred?: EventMultisigOwnershipTransferred | undefined;
    multisigOperatorshipTransferred?: EventMultisigOperatorshipTransferred | undefined;
}
export declare enum Event_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_CONFIRMED = 1,
    STATUS_COMPLETED = 2,
    STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function event_StatusFromJSON(object: any): Event_Status;
export declare function event_StatusToJSON(object: Event_Status): string;
export interface EventTokenSent {
    sender: Uint8Array;
    destinationChain: string;
    destinationAddress: string;
    symbol: string;
    amount: Uint8Array;
}
export interface EventContractCall {
    sender: Uint8Array;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
}
export interface EventContractCallWithToken {
    sender: Uint8Array;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
    symbol: string;
    amount: Uint8Array;
}
export interface EventTransfer {
    to: Uint8Array;
    amount: Uint8Array;
}
export interface EventTokenDeployed {
    symbol: string;
    tokenAddress: Uint8Array;
}
/** @deprecated */
export interface EventMultisigOwnershipTransferred {
    preOwners: Uint8Array[];
    prevThreshold: Uint8Array;
    newOwners: Uint8Array[];
    newThreshold: Uint8Array;
}
export interface EventMultisigOperatorshipTransferred {
    newOperators: Uint8Array[];
    newThreshold: Uint8Array;
    newWeights: Uint8Array[];
}
/** NetworkInfo describes information about a network */
export interface NetworkInfo {
    name: string;
    id: Uint8Array;
}
/**
 * BurnerInfo describes information required to burn token at an burner address
 * that is deposited by an user
 */
export interface BurnerInfo {
    burnerAddress: Uint8Array;
    tokenAddress: Uint8Array;
    destinationChain: string;
    symbol: string;
    asset: string;
    salt: Uint8Array;
}
/** ERC20Deposit contains information for an ERC20 deposit */
export interface ERC20Deposit {
    txId: Uint8Array;
    amount: Uint8Array;
    asset: string;
    destinationChain: string;
    burnerAddress: Uint8Array;
    logIndex: Long;
}
/** ERC20TokenMetadata describes information about an ERC20 token */
export interface ERC20TokenMetadata {
    asset: string;
    chainId: Uint8Array;
    details?: TokenDetails;
    tokenAddress: string;
    txHash: string;
    status: Status;
    isExternal: boolean;
    burnerCode: Uint8Array;
}
export interface TransactionMetadata {
    rawTx: Uint8Array;
    pubKey: Uint8Array;
}
export interface Command {
    id: Uint8Array;
    /** @deprecated */
    command: string;
    params: Uint8Array;
    keyId: string;
    maxGasCost: number;
    type: CommandType;
}
export interface CommandBatchMetadata {
    id: Uint8Array;
    commandIds: Uint8Array[];
    data: Uint8Array;
    sigHash: Uint8Array;
    status: BatchedCommandsStatus;
    keyId: string;
    prevBatchedCommandsId: Uint8Array;
    signature?: Any;
}
/**
 * SigMetadata stores necessary information for external apps to map signature
 * results to evm relay transaction types
 */
export interface SigMetadata {
    type: SigType;
    chain: string;
    commandBatchId: Uint8Array;
}
/** TransferKey contains information for a transfer operatorship */
export interface TransferKey {
    txId: Uint8Array;
    nextKeyId: string;
}
export interface Asset {
    chain: string;
    name: string;
}
export interface TokenDetails {
    tokenName: string;
    symbol: string;
    decimals: number;
    capacity: Uint8Array;
}
export interface Gateway {
    address: Uint8Array;
}
export interface PollMetadata {
    chain: string;
    txId: Uint8Array;
}
export declare const VoteEvents: {
    encode(message: VoteEvents, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteEvents;
    fromJSON(object: any): VoteEvents;
    toJSON(message: VoteEvents): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        events?: {
            chain?: string | undefined;
            txId?: Uint8Array | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            contractCall?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            transfer?: {
                to?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Uint8Array | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Uint8Array[] | undefined;
                prevThreshold?: Uint8Array | undefined;
                newOwners?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
                newWeights?: Uint8Array[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        chain?: string | undefined;
        events?: ({
            chain?: string | undefined;
            txId?: Uint8Array | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            contractCall?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            transfer?: {
                to?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Uint8Array | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Uint8Array[] | undefined;
                prevThreshold?: Uint8Array | undefined;
                newOwners?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
                newWeights?: Uint8Array[] | undefined;
            } | undefined;
        }[] & ({
            chain?: string | undefined;
            txId?: Uint8Array | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            contractCall?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            transfer?: {
                to?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Uint8Array | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Uint8Array[] | undefined;
                prevThreshold?: Uint8Array | undefined;
                newOwners?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
                newWeights?: Uint8Array[] | undefined;
            } | undefined;
        } & {
            chain?: string | undefined;
            txId?: Uint8Array | undefined;
            index?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["events"][number]["index"], keyof Long.Long>, never>) | undefined;
            status?: Event_Status | undefined;
            tokenSent?: ({
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } & {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["events"][number]["tokenSent"], keyof EventTokenSent>, never>) | undefined;
            contractCall?: ({
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
            } & {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["events"][number]["contractCall"], keyof EventContractCall>, never>) | undefined;
            contractCallWithToken?: ({
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } & {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["events"][number]["contractCallWithToken"], keyof EventContractCallWithToken>, never>) | undefined;
            transfer?: ({
                to?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
            } & {
                to?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["events"][number]["transfer"], keyof EventTransfer>, never>) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Uint8Array | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["events"][number]["tokenDeployed"], keyof EventTokenDeployed>, never>) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Uint8Array[] | undefined;
                prevThreshold?: Uint8Array | undefined;
                newOwners?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
            } & {
                preOwners?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["events"][number]["multisigOwnershipTransferred"]["preOwners"], keyof Uint8Array[]>, never>) | undefined;
                prevThreshold?: Uint8Array | undefined;
                newOwners?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["events"][number]["multisigOwnershipTransferred"]["newOwners"], keyof Uint8Array[]>, never>) | undefined;
                newThreshold?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["events"][number]["multisigOwnershipTransferred"], keyof EventMultisigOwnershipTransferred>, never>) | undefined;
            multisigOperatorshipTransferred?: ({
                newOperators?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
                newWeights?: Uint8Array[] | undefined;
            } & {
                newOperators?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"]["newOperators"], keyof Uint8Array[]>, never>) | undefined;
                newThreshold?: Uint8Array | undefined;
                newWeights?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"]["newWeights"], keyof Uint8Array[]>, never>) | undefined;
            } & Record<Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"], keyof EventMultisigOperatorshipTransferred>, never>) | undefined;
        } & Record<Exclude<keyof I["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["events"], keyof {
            chain?: string | undefined;
            txId?: Uint8Array | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            contractCall?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Uint8Array | undefined;
                symbol?: string | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            transfer?: {
                to?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Uint8Array | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Uint8Array[] | undefined;
                prevThreshold?: Uint8Array | undefined;
                newOwners?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
                newWeights?: Uint8Array[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof VoteEvents>, never>>(object: I): VoteEvents;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        index?: string | number | Long.Long | undefined;
        status?: Event_Status | undefined;
        tokenSent?: {
            sender?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            symbol?: string | undefined;
            amount?: Uint8Array | undefined;
        } | undefined;
        contractCall?: {
            sender?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Uint8Array | undefined;
        } | undefined;
        contractCallWithToken?: {
            sender?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Uint8Array | undefined;
            symbol?: string | undefined;
            amount?: Uint8Array | undefined;
        } | undefined;
        transfer?: {
            to?: Uint8Array | undefined;
            amount?: Uint8Array | undefined;
        } | undefined;
        tokenDeployed?: {
            symbol?: string | undefined;
            tokenAddress?: Uint8Array | undefined;
        } | undefined;
        multisigOwnershipTransferred?: {
            preOwners?: Uint8Array[] | undefined;
            prevThreshold?: Uint8Array | undefined;
            newOwners?: Uint8Array[] | undefined;
            newThreshold?: Uint8Array | undefined;
        } | undefined;
        multisigOperatorshipTransferred?: {
            newOperators?: Uint8Array[] | undefined;
            newThreshold?: Uint8Array | undefined;
            newWeights?: Uint8Array[] | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        index?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["index"], keyof Long.Long>, never>) | undefined;
        status?: Event_Status | undefined;
        tokenSent?: ({
            sender?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            symbol?: string | undefined;
            amount?: Uint8Array | undefined;
        } & {
            sender?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            symbol?: string | undefined;
            amount?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["tokenSent"], keyof EventTokenSent>, never>) | undefined;
        contractCall?: ({
            sender?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Uint8Array | undefined;
        } & {
            sender?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["contractCall"], keyof EventContractCall>, never>) | undefined;
        contractCallWithToken?: ({
            sender?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Uint8Array | undefined;
            symbol?: string | undefined;
            amount?: Uint8Array | undefined;
        } & {
            sender?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Uint8Array | undefined;
            symbol?: string | undefined;
            amount?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["contractCallWithToken"], keyof EventContractCallWithToken>, never>) | undefined;
        transfer?: ({
            to?: Uint8Array | undefined;
            amount?: Uint8Array | undefined;
        } & {
            to?: Uint8Array | undefined;
            amount?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["transfer"], keyof EventTransfer>, never>) | undefined;
        tokenDeployed?: ({
            symbol?: string | undefined;
            tokenAddress?: Uint8Array | undefined;
        } & {
            symbol?: string | undefined;
            tokenAddress?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["tokenDeployed"], keyof EventTokenDeployed>, never>) | undefined;
        multisigOwnershipTransferred?: ({
            preOwners?: Uint8Array[] | undefined;
            prevThreshold?: Uint8Array | undefined;
            newOwners?: Uint8Array[] | undefined;
            newThreshold?: Uint8Array | undefined;
        } & {
            preOwners?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["multisigOwnershipTransferred"]["preOwners"], keyof Uint8Array[]>, never>) | undefined;
            prevThreshold?: Uint8Array | undefined;
            newOwners?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["multisigOwnershipTransferred"]["newOwners"], keyof Uint8Array[]>, never>) | undefined;
            newThreshold?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["multisigOwnershipTransferred"], keyof EventMultisigOwnershipTransferred>, never>) | undefined;
        multisigOperatorshipTransferred?: ({
            newOperators?: Uint8Array[] | undefined;
            newThreshold?: Uint8Array | undefined;
            newWeights?: Uint8Array[] | undefined;
        } & {
            newOperators?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["multisigOperatorshipTransferred"]["newOperators"], keyof Uint8Array[]>, never>) | undefined;
            newThreshold?: Uint8Array | undefined;
            newWeights?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["multisigOperatorshipTransferred"]["newWeights"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["multisigOperatorshipTransferred"], keyof EventMultisigOperatorshipTransferred>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Event>, never>>(object: I): Event;
};
export declare const EventTokenSent: {
    encode(message: EventTokenSent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventTokenSent;
    fromJSON(object: any): EventTokenSent;
    toJSON(message: EventTokenSent): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
        symbol?: string | undefined;
        amount?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
        symbol?: string | undefined;
        amount?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof EventTokenSent>, never>>(object: I): EventTokenSent;
};
export declare const EventContractCall: {
    encode(message: EventContractCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventContractCall;
    fromJSON(object: any): EventContractCall;
    toJSON(message: EventContractCall): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof EventContractCall>, never>>(object: I): EventContractCall;
};
export declare const EventContractCallWithToken: {
    encode(message: EventContractCallWithToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventContractCallWithToken;
    fromJSON(object: any): EventContractCallWithToken;
    toJSON(message: EventContractCallWithToken): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Uint8Array | undefined;
        symbol?: string | undefined;
        amount?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Uint8Array | undefined;
        symbol?: string | undefined;
        amount?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof EventContractCallWithToken>, never>>(object: I): EventContractCallWithToken;
};
export declare const EventTransfer: {
    encode(message: EventTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventTransfer;
    fromJSON(object: any): EventTransfer;
    toJSON(message: EventTransfer): unknown;
    fromPartial<I extends {
        to?: Uint8Array | undefined;
        amount?: Uint8Array | undefined;
    } & {
        to?: Uint8Array | undefined;
        amount?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof EventTransfer>, never>>(object: I): EventTransfer;
};
export declare const EventTokenDeployed: {
    encode(message: EventTokenDeployed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventTokenDeployed;
    fromJSON(object: any): EventTokenDeployed;
    toJSON(message: EventTokenDeployed): unknown;
    fromPartial<I extends {
        symbol?: string | undefined;
        tokenAddress?: Uint8Array | undefined;
    } & {
        symbol?: string | undefined;
        tokenAddress?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof EventTokenDeployed>, never>>(object: I): EventTokenDeployed;
};
export declare const EventMultisigOwnershipTransferred: {
    encode(message: EventMultisigOwnershipTransferred, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventMultisigOwnershipTransferred;
    fromJSON(object: any): EventMultisigOwnershipTransferred;
    toJSON(message: EventMultisigOwnershipTransferred): unknown;
    fromPartial<I extends {
        preOwners?: Uint8Array[] | undefined;
        prevThreshold?: Uint8Array | undefined;
        newOwners?: Uint8Array[] | undefined;
        newThreshold?: Uint8Array | undefined;
    } & {
        preOwners?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["preOwners"], keyof Uint8Array[]>, never>) | undefined;
        prevThreshold?: Uint8Array | undefined;
        newOwners?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["newOwners"], keyof Uint8Array[]>, never>) | undefined;
        newThreshold?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof EventMultisigOwnershipTransferred>, never>>(object: I): EventMultisigOwnershipTransferred;
};
export declare const EventMultisigOperatorshipTransferred: {
    encode(message: EventMultisigOperatorshipTransferred, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventMultisigOperatorshipTransferred;
    fromJSON(object: any): EventMultisigOperatorshipTransferred;
    toJSON(message: EventMultisigOperatorshipTransferred): unknown;
    fromPartial<I extends {
        newOperators?: Uint8Array[] | undefined;
        newThreshold?: Uint8Array | undefined;
        newWeights?: Uint8Array[] | undefined;
    } & {
        newOperators?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["newOperators"], keyof Uint8Array[]>, never>) | undefined;
        newThreshold?: Uint8Array | undefined;
        newWeights?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["newWeights"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof EventMultisigOperatorshipTransferred>, never>>(object: I): EventMultisigOperatorshipTransferred;
};
export declare const NetworkInfo: {
    encode(message: NetworkInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInfo;
    fromJSON(object: any): NetworkInfo;
    toJSON(message: NetworkInfo): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        id?: Uint8Array | undefined;
    } & {
        name?: string | undefined;
        id?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof NetworkInfo>, never>>(object: I): NetworkInfo;
};
export declare const BurnerInfo: {
    encode(message: BurnerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BurnerInfo;
    fromJSON(object: any): BurnerInfo;
    toJSON(message: BurnerInfo): unknown;
    fromPartial<I extends {
        burnerAddress?: Uint8Array | undefined;
        tokenAddress?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        symbol?: string | undefined;
        asset?: string | undefined;
        salt?: Uint8Array | undefined;
    } & {
        burnerAddress?: Uint8Array | undefined;
        tokenAddress?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        symbol?: string | undefined;
        asset?: string | undefined;
        salt?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof BurnerInfo>, never>>(object: I): BurnerInfo;
};
export declare const ERC20Deposit: {
    encode(message: ERC20Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20Deposit;
    fromJSON(object: any): ERC20Deposit;
    toJSON(message: ERC20Deposit): unknown;
    fromPartial<I extends {
        txId?: Uint8Array | undefined;
        amount?: Uint8Array | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        burnerAddress?: Uint8Array | undefined;
        logIndex?: string | number | Long.Long | undefined;
    } & {
        txId?: Uint8Array | undefined;
        amount?: Uint8Array | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        burnerAddress?: Uint8Array | undefined;
        logIndex?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["logIndex"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ERC20Deposit>, never>>(object: I): ERC20Deposit;
};
export declare const ERC20TokenMetadata: {
    encode(message: ERC20TokenMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokenMetadata;
    fromJSON(object: any): ERC20TokenMetadata;
    toJSON(message: ERC20TokenMetadata): unknown;
    fromPartial<I extends {
        asset?: string | undefined;
        chainId?: Uint8Array | undefined;
        details?: {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Uint8Array | undefined;
        } | undefined;
        tokenAddress?: string | undefined;
        txHash?: string | undefined;
        status?: Status | undefined;
        isExternal?: boolean | undefined;
        burnerCode?: Uint8Array | undefined;
    } & {
        asset?: string | undefined;
        chainId?: Uint8Array | undefined;
        details?: ({
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Uint8Array | undefined;
        } & {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["details"], keyof TokenDetails>, never>) | undefined;
        tokenAddress?: string | undefined;
        txHash?: string | undefined;
        status?: Status | undefined;
        isExternal?: boolean | undefined;
        burnerCode?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof ERC20TokenMetadata>, never>>(object: I): ERC20TokenMetadata;
};
export declare const TransactionMetadata: {
    encode(message: TransactionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransactionMetadata;
    fromJSON(object: any): TransactionMetadata;
    toJSON(message: TransactionMetadata): unknown;
    fromPartial<I extends {
        rawTx?: Uint8Array | undefined;
        pubKey?: Uint8Array | undefined;
    } & {
        rawTx?: Uint8Array | undefined;
        pubKey?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof TransactionMetadata>, never>>(object: I): TransactionMetadata;
};
export declare const Command: {
    encode(message: Command, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Command;
    fromJSON(object: any): Command;
    toJSON(message: Command): unknown;
    fromPartial<I extends {
        id?: Uint8Array | undefined;
        command?: string | undefined;
        params?: Uint8Array | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
        type?: CommandType | undefined;
    } & {
        id?: Uint8Array | undefined;
        command?: string | undefined;
        params?: Uint8Array | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
        type?: CommandType | undefined;
    } & Record<Exclude<keyof I, keyof Command>, never>>(object: I): Command;
};
export declare const CommandBatchMetadata: {
    encode(message: CommandBatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommandBatchMetadata;
    fromJSON(object: any): CommandBatchMetadata;
    toJSON(message: CommandBatchMetadata): unknown;
    fromPartial<I extends {
        id?: Uint8Array | undefined;
        commandIds?: Uint8Array[] | undefined;
        data?: Uint8Array | undefined;
        sigHash?: Uint8Array | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        prevBatchedCommandsId?: Uint8Array | undefined;
        signature?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        id?: Uint8Array | undefined;
        commandIds?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["commandIds"], keyof Uint8Array[]>, never>) | undefined;
        data?: Uint8Array | undefined;
        sigHash?: Uint8Array | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        prevBatchedCommandsId?: Uint8Array | undefined;
        signature?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["signature"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CommandBatchMetadata>, never>>(object: I): CommandBatchMetadata;
};
export declare const SigMetadata: {
    encode(message: SigMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigMetadata;
    fromJSON(object: any): SigMetadata;
    toJSON(message: SigMetadata): unknown;
    fromPartial<I extends {
        type?: SigType | undefined;
        chain?: string | undefined;
        commandBatchId?: Uint8Array | undefined;
    } & {
        type?: SigType | undefined;
        chain?: string | undefined;
        commandBatchId?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof SigMetadata>, never>>(object: I): SigMetadata;
};
export declare const TransferKey: {
    encode(message: TransferKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferKey;
    fromJSON(object: any): TransferKey;
    toJSON(message: TransferKey): unknown;
    fromPartial<I extends {
        txId?: Uint8Array | undefined;
        nextKeyId?: string | undefined;
    } & {
        txId?: Uint8Array | undefined;
        nextKeyId?: string | undefined;
    } & Record<Exclude<keyof I, keyof TransferKey>, never>>(object: I): TransferKey;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        name?: string | undefined;
    } & {
        chain?: string | undefined;
        name?: string | undefined;
    } & Record<Exclude<keyof I, keyof Asset>, never>>(object: I): Asset;
};
export declare const TokenDetails: {
    encode(message: TokenDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenDetails;
    fromJSON(object: any): TokenDetails;
    toJSON(message: TokenDetails): unknown;
    fromPartial<I extends {
        tokenName?: string | undefined;
        symbol?: string | undefined;
        decimals?: number | undefined;
        capacity?: Uint8Array | undefined;
    } & {
        tokenName?: string | undefined;
        symbol?: string | undefined;
        decimals?: number | undefined;
        capacity?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof TokenDetails>, never>>(object: I): TokenDetails;
};
export declare const Gateway: {
    encode(message: Gateway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Gateway;
    fromJSON(object: any): Gateway;
    toJSON(message: Gateway): unknown;
    fromPartial<I extends {
        address?: Uint8Array | undefined;
    } & {
        address?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): Gateway;
};
export declare const PollMetadata: {
    encode(message: PollMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PollMetadata;
    fromJSON(object: any): PollMetadata;
    toJSON(message: PollMetadata): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
    } & {
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof PollMetadata>, never>>(object: I): PollMetadata;
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
