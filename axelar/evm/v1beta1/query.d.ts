import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { BatchedCommandsStatus, DepositStatus, Event, BurnerInfo, TokenDetails } from "../../../axelar/evm/v1beta1/types";
export declare const protobufPackage = "axelar.evm.v1beta1";
export declare enum ChainStatus {
    CHAIN_STATUS_UNSPECIFIED = 0,
    CHAIN_STATUS_ACTIVATED = 1,
    CHAIN_STATUS_DEACTIVATED = 2,
    UNRECOGNIZED = -1
}
export declare function chainStatusFromJSON(object: any): ChainStatus;
export declare function chainStatusToJSON(object: ChainStatus): string;
export declare enum TokenType {
    TOKEN_TYPE_UNSPECIFIED = 0,
    TOKEN_TYPE_INTERNAL = 1,
    TOKEN_TYPE_EXTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare function tokenTypeFromJSON(object: any): TokenType;
export declare function tokenTypeToJSON(object: TokenType): string;
/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 */
export interface DepositQueryParams {
    address: string;
    asset: string;
    chain: string;
}
export interface BatchedCommandsRequest {
    chain: string;
    /**
     * id defines an optional id for the commandsbatch. If not specified the
     * latest will be returned
     */
    id: string;
}
export interface BatchedCommandsResponse {
    id: string;
    data: string;
    status: BatchedCommandsStatus;
    keyId: string;
    executeData: string;
    prevBatchedCommandsId: string;
    commandIds: string[];
    proof?: Proof;
}
export interface KeyAddressRequest {
    chain: string;
    keyId: string;
}
export interface KeyAddressResponse {
    keyId: string;
    addresses: KeyAddressResponse_WeightedAddress[];
    threshold: string;
}
export interface KeyAddressResponse_WeightedAddress {
    address: string;
    weight: string;
}
/** @deprecated */
export interface QueryTokenAddressResponse {
    address: string;
    confirmed: boolean;
}
/** @deprecated */
export interface QueryDepositStateParams {
    txId: Uint8Array;
    burnerAddress: Uint8Array;
}
/** @deprecated */
export interface DepositStateRequest {
    chain: string;
    params?: QueryDepositStateParams;
}
/** @deprecated */
export interface DepositStateResponse {
    status: DepositStatus;
}
export interface EventRequest {
    chain: string;
    eventId: string;
}
export interface EventResponse {
    event?: Event;
}
export interface QueryBurnerAddressResponse {
    address: string;
}
export interface ChainsRequest {
    status: ChainStatus;
}
export interface ChainsResponse {
    chains: string[];
}
export interface PendingCommandsRequest {
    chain: string;
}
export interface PendingCommandsResponse {
    commands: QueryCommandResponse[];
}
export interface QueryCommandResponse {
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    keyId: string;
    maxGasCost: number;
}
export interface QueryCommandResponse_ParamsEntry {
    key: string;
    value: string;
}
export interface BurnerInfoRequest {
    address: Uint8Array;
}
export interface BurnerInfoResponse {
    chain: string;
    burnerInfo?: BurnerInfo;
}
export interface ConfirmationHeightRequest {
    chain: string;
}
export interface ConfirmationHeightResponse {
    height: Long;
}
export interface GatewayAddressRequest {
    chain: string;
}
export interface GatewayAddressResponse {
    address: string;
}
export interface BytecodeRequest {
    chain: string;
    contract: string;
}
export interface BytecodeResponse {
    bytecode: string;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequest {
    chain: string;
    type: TokenType;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponse {
    tokens: ERC20TokensResponse_Token[];
}
export interface ERC20TokensResponse_Token {
    asset: string;
    symbol: string;
}
export interface TokenInfoRequest {
    chain: string;
    asset: string | undefined;
    symbol: string | undefined;
    address: string | undefined;
}
export interface TokenInfoResponse {
    asset: string;
    details?: TokenDetails;
    address: string;
    confirmed: boolean;
    isExternal: boolean;
    burnerCodeHash: string;
}
export interface Proof {
    addresses: string[];
    weights: string[];
    threshold: string;
    signatures: string[];
}
export declare const DepositQueryParams: {
    encode(message: DepositQueryParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DepositQueryParams;
    fromJSON(object: any): DepositQueryParams;
    toJSON(message: DepositQueryParams): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & {
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & Record<Exclude<keyof I, keyof DepositQueryParams>, never>>(object: I): DepositQueryParams;
};
export declare const BatchedCommandsRequest: {
    encode(message: BatchedCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchedCommandsRequest;
    fromJSON(object: any): BatchedCommandsRequest;
    toJSON(message: BatchedCommandsRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        id?: string | undefined;
    } & {
        chain?: string | undefined;
        id?: string | undefined;
    } & Record<Exclude<keyof I, keyof BatchedCommandsRequest>, never>>(object: I): BatchedCommandsRequest;
};
export declare const BatchedCommandsResponse: {
    encode(message: BatchedCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchedCommandsResponse;
    fromJSON(object: any): BatchedCommandsResponse;
    toJSON(message: BatchedCommandsResponse): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        data?: string | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        executeData?: string | undefined;
        prevBatchedCommandsId?: string | undefined;
        commandIds?: string[] | undefined;
        proof?: {
            addresses?: string[] | undefined;
            weights?: string[] | undefined;
            threshold?: string | undefined;
            signatures?: string[] | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        data?: string | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        executeData?: string | undefined;
        prevBatchedCommandsId?: string | undefined;
        commandIds?: (string[] & string[] & Record<Exclude<keyof I["commandIds"], keyof string[]>, never>) | undefined;
        proof?: ({
            addresses?: string[] | undefined;
            weights?: string[] | undefined;
            threshold?: string | undefined;
            signatures?: string[] | undefined;
        } & {
            addresses?: (string[] & string[] & Record<Exclude<keyof I["proof"]["addresses"], keyof string[]>, never>) | undefined;
            weights?: (string[] & string[] & Record<Exclude<keyof I["proof"]["weights"], keyof string[]>, never>) | undefined;
            threshold?: string | undefined;
            signatures?: (string[] & string[] & Record<Exclude<keyof I["proof"]["signatures"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["proof"], keyof Proof>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof BatchedCommandsResponse>, never>>(object: I): BatchedCommandsResponse;
};
export declare const KeyAddressRequest: {
    encode(message: KeyAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyAddressRequest;
    fromJSON(object: any): KeyAddressRequest;
    toJSON(message: KeyAddressRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        chain?: string | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, keyof KeyAddressRequest>, never>>(object: I): KeyAddressRequest;
};
export declare const KeyAddressResponse: {
    encode(message: KeyAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyAddressResponse;
    fromJSON(object: any): KeyAddressResponse;
    toJSON(message: KeyAddressResponse): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
        addresses?: {
            address?: string | undefined;
            weight?: string | undefined;
        }[] | undefined;
        threshold?: string | undefined;
    } & {
        keyId?: string | undefined;
        addresses?: ({
            address?: string | undefined;
            weight?: string | undefined;
        }[] & ({
            address?: string | undefined;
            weight?: string | undefined;
        } & {
            address?: string | undefined;
            weight?: string | undefined;
        } & Record<Exclude<keyof I["addresses"][number], keyof KeyAddressResponse_WeightedAddress>, never>)[] & Record<Exclude<keyof I["addresses"], keyof {
            address?: string | undefined;
            weight?: string | undefined;
        }[]>, never>) | undefined;
        threshold?: string | undefined;
    } & Record<Exclude<keyof I, keyof KeyAddressResponse>, never>>(object: I): KeyAddressResponse;
};
export declare const KeyAddressResponse_WeightedAddress: {
    encode(message: KeyAddressResponse_WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyAddressResponse_WeightedAddress;
    fromJSON(object: any): KeyAddressResponse_WeightedAddress;
    toJSON(message: KeyAddressResponse_WeightedAddress): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        weight?: string | undefined;
    } & {
        address?: string | undefined;
        weight?: string | undefined;
    } & Record<Exclude<keyof I, keyof KeyAddressResponse_WeightedAddress>, never>>(object: I): KeyAddressResponse_WeightedAddress;
};
export declare const QueryTokenAddressResponse: {
    encode(message: QueryTokenAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryTokenAddressResponse;
    fromJSON(object: any): QueryTokenAddressResponse;
    toJSON(message: QueryTokenAddressResponse): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        confirmed?: boolean | undefined;
    } & {
        address?: string | undefined;
        confirmed?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof QueryTokenAddressResponse>, never>>(object: I): QueryTokenAddressResponse;
};
export declare const QueryDepositStateParams: {
    encode(message: QueryDepositStateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDepositStateParams;
    fromJSON(object: any): QueryDepositStateParams;
    toJSON(message: QueryDepositStateParams): unknown;
    fromPartial<I extends {
        txId?: Uint8Array | undefined;
        burnerAddress?: Uint8Array | undefined;
    } & {
        txId?: Uint8Array | undefined;
        burnerAddress?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof QueryDepositStateParams>, never>>(object: I): QueryDepositStateParams;
};
export declare const DepositStateRequest: {
    encode(message: DepositStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DepositStateRequest;
    fromJSON(object: any): DepositStateRequest;
    toJSON(message: DepositStateRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        params?: {
            txId?: Uint8Array | undefined;
            burnerAddress?: Uint8Array | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        params?: ({
            txId?: Uint8Array | undefined;
            burnerAddress?: Uint8Array | undefined;
        } & {
            txId?: Uint8Array | undefined;
            burnerAddress?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["params"], keyof QueryDepositStateParams>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DepositStateRequest>, never>>(object: I): DepositStateRequest;
};
export declare const DepositStateResponse: {
    encode(message: DepositStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DepositStateResponse;
    fromJSON(object: any): DepositStateResponse;
    toJSON(message: DepositStateResponse): unknown;
    fromPartial<I extends {
        status?: DepositStatus | undefined;
    } & {
        status?: DepositStatus | undefined;
    } & Record<Exclude<keyof I, "status">, never>>(object: I): DepositStateResponse;
};
export declare const EventRequest: {
    encode(message: EventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventRequest;
    fromJSON(object: any): EventRequest;
    toJSON(message: EventRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        eventId?: string | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventRequest>, never>>(object: I): EventRequest;
};
export declare const EventResponse: {
    encode(message: EventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventResponse;
    fromJSON(object: any): EventResponse;
    toJSON(message: EventResponse): unknown;
    fromPartial<I extends {
        event?: {
            chain?: string | undefined;
            txId?: Uint8Array | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("../../../axelar/evm/v1beta1/types").Event_Status | undefined;
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
        } | undefined;
    } & {
        event?: ({
            chain?: string | undefined;
            txId?: Uint8Array | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("../../../axelar/evm/v1beta1/types").Event_Status | undefined;
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
            } & Record<Exclude<keyof I["event"]["index"], keyof Long.Long>, never>) | undefined;
            status?: import("../../../axelar/evm/v1beta1/types").Event_Status | undefined;
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
            } & Record<Exclude<keyof I["event"]["tokenSent"], keyof import("../../../axelar/evm/v1beta1/types").EventTokenSent>, never>) | undefined;
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
            } & Record<Exclude<keyof I["event"]["contractCall"], keyof import("../../../axelar/evm/v1beta1/types").EventContractCall>, never>) | undefined;
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
            } & Record<Exclude<keyof I["event"]["contractCallWithToken"], keyof import("../../../axelar/evm/v1beta1/types").EventContractCallWithToken>, never>) | undefined;
            transfer?: ({
                to?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
            } & {
                to?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["event"]["transfer"], keyof import("../../../axelar/evm/v1beta1/types").EventTransfer>, never>) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Uint8Array | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["event"]["tokenDeployed"], keyof import("../../../axelar/evm/v1beta1/types").EventTokenDeployed>, never>) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Uint8Array[] | undefined;
                prevThreshold?: Uint8Array | undefined;
                newOwners?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
            } & {
                preOwners?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["event"]["multisigOwnershipTransferred"]["preOwners"], keyof Uint8Array[]>, never>) | undefined;
                prevThreshold?: Uint8Array | undefined;
                newOwners?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["event"]["multisigOwnershipTransferred"]["newOwners"], keyof Uint8Array[]>, never>) | undefined;
                newThreshold?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["event"]["multisigOwnershipTransferred"], keyof import("../../../axelar/evm/v1beta1/types").EventMultisigOwnershipTransferred>, never>) | undefined;
            multisigOperatorshipTransferred?: ({
                newOperators?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
                newWeights?: Uint8Array[] | undefined;
            } & {
                newOperators?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["event"]["multisigOperatorshipTransferred"]["newOperators"], keyof Uint8Array[]>, never>) | undefined;
                newThreshold?: Uint8Array | undefined;
                newWeights?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["event"]["multisigOperatorshipTransferred"]["newWeights"], keyof Uint8Array[]>, never>) | undefined;
            } & Record<Exclude<keyof I["event"]["multisigOperatorshipTransferred"], keyof import("../../../axelar/evm/v1beta1/types").EventMultisigOperatorshipTransferred>, never>) | undefined;
        } & Record<Exclude<keyof I["event"], keyof Event>, never>) | undefined;
    } & Record<Exclude<keyof I, "event">, never>>(object: I): EventResponse;
};
export declare const QueryBurnerAddressResponse: {
    encode(message: QueryBurnerAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBurnerAddressResponse;
    fromJSON(object: any): QueryBurnerAddressResponse;
    toJSON(message: QueryBurnerAddressResponse): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryBurnerAddressResponse;
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
export declare const PendingCommandsRequest: {
    encode(message: PendingCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingCommandsRequest;
    fromJSON(object: any): PendingCommandsRequest;
    toJSON(message: PendingCommandsRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & Record<Exclude<keyof I, "chain">, never>>(object: I): PendingCommandsRequest;
};
export declare const PendingCommandsResponse: {
    encode(message: PendingCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingCommandsResponse;
    fromJSON(object: any): PendingCommandsResponse;
    toJSON(message: PendingCommandsResponse): unknown;
    fromPartial<I extends {
        commands?: {
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[] | undefined;
    } & {
        commands?: ({
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            params?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & Record<Exclude<keyof I["commands"][number]["params"], string | number>, never>) | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        } & Record<Exclude<keyof I["commands"][number], keyof QueryCommandResponse>, never>)[] & Record<Exclude<keyof I["commands"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "commands">, never>>(object: I): PendingCommandsResponse;
};
export declare const QueryCommandResponse: {
    encode(message: QueryCommandResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCommandResponse;
    fromJSON(object: any): QueryCommandResponse;
    toJSON(message: QueryCommandResponse): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        type?: string | undefined;
        params?: {
            [x: string]: string | undefined;
        } | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & {
        id?: string | undefined;
        type?: string | undefined;
        params?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & Record<Exclude<keyof I["params"], string | number>, never>) | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & Record<Exclude<keyof I, keyof QueryCommandResponse>, never>>(object: I): QueryCommandResponse;
};
export declare const QueryCommandResponse_ParamsEntry: {
    encode(message: QueryCommandResponse_ParamsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCommandResponse_ParamsEntry;
    fromJSON(object: any): QueryCommandResponse_ParamsEntry;
    toJSON(message: QueryCommandResponse_ParamsEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryCommandResponse_ParamsEntry>, never>>(object: I): QueryCommandResponse_ParamsEntry;
};
export declare const BurnerInfoRequest: {
    encode(message: BurnerInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BurnerInfoRequest;
    fromJSON(object: any): BurnerInfoRequest;
    toJSON(message: BurnerInfoRequest): unknown;
    fromPartial<I extends {
        address?: Uint8Array | undefined;
    } & {
        address?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): BurnerInfoRequest;
};
export declare const BurnerInfoResponse: {
    encode(message: BurnerInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BurnerInfoResponse;
    fromJSON(object: any): BurnerInfoResponse;
    toJSON(message: BurnerInfoResponse): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        burnerInfo?: {
            burnerAddress?: Uint8Array | undefined;
            tokenAddress?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Uint8Array | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        burnerInfo?: ({
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
        } & Record<Exclude<keyof I["burnerInfo"], keyof BurnerInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof BurnerInfoResponse>, never>>(object: I): BurnerInfoResponse;
};
export declare const ConfirmationHeightRequest: {
    encode(message: ConfirmationHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmationHeightRequest;
    fromJSON(object: any): ConfirmationHeightRequest;
    toJSON(message: ConfirmationHeightRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & Record<Exclude<keyof I, "chain">, never>>(object: I): ConfirmationHeightRequest;
};
export declare const ConfirmationHeightResponse: {
    encode(message: ConfirmationHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmationHeightResponse;
    fromJSON(object: any): ConfirmationHeightResponse;
    toJSON(message: ConfirmationHeightResponse): unknown;
    fromPartial<I extends {
        height?: string | number | Long.Long | undefined;
    } & {
        height?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["height"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, "height">, never>>(object: I): ConfirmationHeightResponse;
};
export declare const GatewayAddressRequest: {
    encode(message: GatewayAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GatewayAddressRequest;
    fromJSON(object: any): GatewayAddressRequest;
    toJSON(message: GatewayAddressRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & Record<Exclude<keyof I, "chain">, never>>(object: I): GatewayAddressRequest;
};
export declare const GatewayAddressResponse: {
    encode(message: GatewayAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GatewayAddressResponse;
    fromJSON(object: any): GatewayAddressResponse;
    toJSON(message: GatewayAddressResponse): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): GatewayAddressResponse;
};
export declare const BytecodeRequest: {
    encode(message: BytecodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BytecodeRequest;
    fromJSON(object: any): BytecodeRequest;
    toJSON(message: BytecodeRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        contract?: string | undefined;
    } & {
        chain?: string | undefined;
        contract?: string | undefined;
    } & Record<Exclude<keyof I, keyof BytecodeRequest>, never>>(object: I): BytecodeRequest;
};
export declare const BytecodeResponse: {
    encode(message: BytecodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BytecodeResponse;
    fromJSON(object: any): BytecodeResponse;
    toJSON(message: BytecodeResponse): unknown;
    fromPartial<I extends {
        bytecode?: string | undefined;
    } & {
        bytecode?: string | undefined;
    } & Record<Exclude<keyof I, "bytecode">, never>>(object: I): BytecodeResponse;
};
export declare const ERC20TokensRequest: {
    encode(message: ERC20TokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokensRequest;
    fromJSON(object: any): ERC20TokensRequest;
    toJSON(message: ERC20TokensRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        type?: TokenType | undefined;
    } & {
        chain?: string | undefined;
        type?: TokenType | undefined;
    } & Record<Exclude<keyof I, keyof ERC20TokensRequest>, never>>(object: I): ERC20TokensRequest;
};
export declare const ERC20TokensResponse: {
    encode(message: ERC20TokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokensResponse;
    fromJSON(object: any): ERC20TokensResponse;
    toJSON(message: ERC20TokensResponse): unknown;
    fromPartial<I extends {
        tokens?: {
            asset?: string | undefined;
            symbol?: string | undefined;
        }[] | undefined;
    } & {
        tokens?: ({
            asset?: string | undefined;
            symbol?: string | undefined;
        }[] & ({
            asset?: string | undefined;
            symbol?: string | undefined;
        } & {
            asset?: string | undefined;
            symbol?: string | undefined;
        } & Record<Exclude<keyof I["tokens"][number], keyof ERC20TokensResponse_Token>, never>)[] & Record<Exclude<keyof I["tokens"], keyof {
            asset?: string | undefined;
            symbol?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "tokens">, never>>(object: I): ERC20TokensResponse;
};
export declare const ERC20TokensResponse_Token: {
    encode(message: ERC20TokensResponse_Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokensResponse_Token;
    fromJSON(object: any): ERC20TokensResponse_Token;
    toJSON(message: ERC20TokensResponse_Token): unknown;
    fromPartial<I extends {
        asset?: string | undefined;
        symbol?: string | undefined;
    } & {
        asset?: string | undefined;
        symbol?: string | undefined;
    } & Record<Exclude<keyof I, keyof ERC20TokensResponse_Token>, never>>(object: I): ERC20TokensResponse_Token;
};
export declare const TokenInfoRequest: {
    encode(message: TokenInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenInfoRequest;
    fromJSON(object: any): TokenInfoRequest;
    toJSON(message: TokenInfoRequest): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        asset?: string | undefined;
        symbol?: string | undefined;
        address?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: string | undefined;
        symbol?: string | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, keyof TokenInfoRequest>, never>>(object: I): TokenInfoRequest;
};
export declare const TokenInfoResponse: {
    encode(message: TokenInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenInfoResponse;
    fromJSON(object: any): TokenInfoResponse;
    toJSON(message: TokenInfoResponse): unknown;
    fromPartial<I extends {
        asset?: string | undefined;
        details?: {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Uint8Array | undefined;
        } | undefined;
        address?: string | undefined;
        confirmed?: boolean | undefined;
        isExternal?: boolean | undefined;
        burnerCodeHash?: string | undefined;
    } & {
        asset?: string | undefined;
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
        address?: string | undefined;
        confirmed?: boolean | undefined;
        isExternal?: boolean | undefined;
        burnerCodeHash?: string | undefined;
    } & Record<Exclude<keyof I, keyof TokenInfoResponse>, never>>(object: I): TokenInfoResponse;
};
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial<I extends {
        addresses?: string[] | undefined;
        weights?: string[] | undefined;
        threshold?: string | undefined;
        signatures?: string[] | undefined;
    } & {
        addresses?: (string[] & string[] & Record<Exclude<keyof I["addresses"], keyof string[]>, never>) | undefined;
        weights?: (string[] & string[] & Record<Exclude<keyof I["weights"], keyof string[]>, never>) | undefined;
        threshold?: string | undefined;
        signatures?: (string[] & string[] & Record<Exclude<keyof I["signatures"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Proof>, never>>(object: I): Proof;
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
