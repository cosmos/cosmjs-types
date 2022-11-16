import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/evm/v1beta1/params";
import { QueueState } from "../../../axelar/utils/v1beta1/queuer";
import { Gateway, BurnerInfo, ERC20Deposit, CommandBatchMetadata, ERC20TokenMetadata, Event } from "../../../axelar/evm/v1beta1/types";
export declare const protobufPackage = "axelar.evm.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    chains: GenesisState_Chain[];
}
export interface GenesisState_Chain {
    params?: Params;
    burnerInfos: BurnerInfo[];
    commandQueue?: QueueState;
    confirmedDeposits: ERC20Deposit[];
    burnedDeposits: ERC20Deposit[];
    commandBatches: CommandBatchMetadata[];
    gateway?: Gateway;
    tokens: ERC20TokenMetadata[];
    events: Event[];
    confirmedEventQueue?: QueueState;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        chains?: {
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Uint8Array | undefined;
                burnable?: Uint8Array | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Uint8Array | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Uint8Array | undefined;
                tokenAddress?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Uint8Array | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Uint8Array | undefined;
                commandIds?: Uint8Array[] | undefined;
                data?: Uint8Array | undefined;
                sigHash?: Uint8Array | undefined;
                status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Uint8Array | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Uint8Array | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Uint8Array | undefined;
            }[] | undefined;
            events?: {
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        chains?: ({
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Uint8Array | undefined;
                burnable?: Uint8Array | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Uint8Array | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Uint8Array | undefined;
                tokenAddress?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Uint8Array | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Uint8Array | undefined;
                commandIds?: Uint8Array[] | undefined;
                data?: Uint8Array | undefined;
                sigHash?: Uint8Array | undefined;
                status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Uint8Array | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Uint8Array | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Uint8Array | undefined;
            }[] | undefined;
            events?: {
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Uint8Array | undefined;
                burnable?: Uint8Array | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Uint8Array | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Uint8Array | undefined;
                tokenAddress?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Uint8Array | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Uint8Array | undefined;
                commandIds?: Uint8Array[] | undefined;
                data?: Uint8Array | undefined;
                sigHash?: Uint8Array | undefined;
                status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Uint8Array | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Uint8Array | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Uint8Array | undefined;
            }[] | undefined;
            events?: {
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            params?: ({
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Uint8Array | undefined;
                burnable?: Uint8Array | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Uint8Array | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } & {
                chain?: string | undefined;
                confirmationHeight?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["chains"][number]["params"]["confirmationHeight"], keyof Long.Long>, never>) | undefined;
                network?: string | undefined;
                tokenCode?: Uint8Array | undefined;
                burnable?: Uint8Array | undefined;
                revoteLockingPeriod?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["chains"][number]["params"]["revoteLockingPeriod"], keyof Long.Long>, never>) | undefined;
                networks?: ({
                    name?: string | undefined;
                    id?: Uint8Array | undefined;
                }[] & ({
                    name?: string | undefined;
                    id?: Uint8Array | undefined;
                } & {
                    name?: string | undefined;
                    id?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["chains"][number]["params"]["networks"][number], keyof import("../../../axelar/evm/v1beta1/types").NetworkInfo>, never>)[] & Record<Exclude<keyof I["chains"][number]["params"]["networks"], keyof {
                    name?: string | undefined;
                    id?: Uint8Array | undefined;
                }[]>, never>) | undefined;
                votingThreshold?: ({
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
                    } & Record<Exclude<keyof I["chains"][number]["params"]["votingThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["chains"][number]["params"]["votingThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
                } & Record<Exclude<keyof I["chains"][number]["params"]["votingThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
                minVoterCount?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["chains"][number]["params"]["minVoterCount"], keyof Long.Long>, never>) | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["chains"][number]["params"]["votingGracePeriod"], keyof Long.Long>, never>) | undefined;
                endBlockerLimit?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["chains"][number]["params"]["endBlockerLimit"], keyof Long.Long>, never>) | undefined;
                transferLimit?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["chains"][number]["params"]["transferLimit"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["chains"][number]["params"], keyof Params>, never>) | undefined;
            burnerInfos?: ({
                burnerAddress?: Uint8Array | undefined;
                tokenAddress?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Uint8Array | undefined;
            }[] & ({
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
            } & Record<Exclude<keyof I["chains"][number]["burnerInfos"][number], keyof BurnerInfo>, never>)[] & Record<Exclude<keyof I["chains"][number]["burnerInfos"], keyof {
                burnerAddress?: Uint8Array | undefined;
                tokenAddress?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Uint8Array | undefined;
            }[]>, never>) | undefined;
            commandQueue?: ({
                items?: {
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
            } & {
                items?: ({
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["chains"][number]["commandQueue"]["items"][string], keyof import("../../../axelar/utils/v1beta1/queuer").QueueState_Item>, never>) | undefined;
                } & Record<Exclude<keyof I["chains"][number]["commandQueue"]["items"], string | number>, never>) | undefined;
            } & Record<Exclude<keyof I["chains"][number]["commandQueue"], "items">, never>) | undefined;
            confirmedDeposits?: ({
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & Record<Exclude<keyof I["chains"][number]["confirmedDeposits"][number]["logIndex"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["chains"][number]["confirmedDeposits"][number], keyof ERC20Deposit>, never>)[] & Record<Exclude<keyof I["chains"][number]["confirmedDeposits"], keyof {
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>, never>) | undefined;
            burnedDeposits?: ({
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & Record<Exclude<keyof I["chains"][number]["burnedDeposits"][number]["logIndex"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["chains"][number]["burnedDeposits"][number], keyof ERC20Deposit>, never>)[] & Record<Exclude<keyof I["chains"][number]["burnedDeposits"], keyof {
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>, never>) | undefined;
            commandBatches?: ({
                id?: Uint8Array | undefined;
                commandIds?: Uint8Array[] | undefined;
                data?: Uint8Array | undefined;
                sigHash?: Uint8Array | undefined;
                status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Uint8Array | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] & ({
                id?: Uint8Array | undefined;
                commandIds?: Uint8Array[] | undefined;
                data?: Uint8Array | undefined;
                sigHash?: Uint8Array | undefined;
                status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Uint8Array | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                id?: Uint8Array | undefined;
                commandIds?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["chains"][number]["commandBatches"][number]["commandIds"], keyof Uint8Array[]>, never>) | undefined;
                data?: Uint8Array | undefined;
                sigHash?: Uint8Array | undefined;
                status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Uint8Array | undefined;
                signature?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["chains"][number]["commandBatches"][number]["signature"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            } & Record<Exclude<keyof I["chains"][number]["commandBatches"][number], keyof CommandBatchMetadata>, never>)[] & Record<Exclude<keyof I["chains"][number]["commandBatches"], keyof {
                id?: Uint8Array | undefined;
                commandIds?: Uint8Array[] | undefined;
                data?: Uint8Array | undefined;
                sigHash?: Uint8Array | undefined;
                status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Uint8Array | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            gateway?: ({
                address?: Uint8Array | undefined;
            } & {
                address?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["chains"][number]["gateway"], "address">, never>) | undefined;
            tokens?: ({
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
                status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Uint8Array | undefined;
            }[] & ({
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
                status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
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
                } & Record<Exclude<keyof I["chains"][number]["tokens"][number]["details"], keyof import("../../../axelar/evm/v1beta1/types").TokenDetails>, never>) | undefined;
                tokenAddress?: string | undefined;
                txHash?: string | undefined;
                status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["chains"][number]["tokens"][number], keyof ERC20TokenMetadata>, never>)[] & Record<Exclude<keyof I["chains"][number]["tokens"], keyof {
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
                status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Uint8Array | undefined;
            }[]>, never>) | undefined;
            events?: ({
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
            }[] & ({
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
                } & Record<Exclude<keyof I["chains"][number]["events"][number]["index"], keyof Long.Long>, never>) | undefined;
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
                } & Record<Exclude<keyof I["chains"][number]["events"][number]["tokenSent"], keyof import("../../../axelar/evm/v1beta1/types").EventTokenSent>, never>) | undefined;
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
                } & Record<Exclude<keyof I["chains"][number]["events"][number]["contractCall"], keyof import("../../../axelar/evm/v1beta1/types").EventContractCall>, never>) | undefined;
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
                } & Record<Exclude<keyof I["chains"][number]["events"][number]["contractCallWithToken"], keyof import("../../../axelar/evm/v1beta1/types").EventContractCallWithToken>, never>) | undefined;
                transfer?: ({
                    to?: Uint8Array | undefined;
                    amount?: Uint8Array | undefined;
                } & {
                    to?: Uint8Array | undefined;
                    amount?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["chains"][number]["events"][number]["transfer"], keyof import("../../../axelar/evm/v1beta1/types").EventTransfer>, never>) | undefined;
                tokenDeployed?: ({
                    symbol?: string | undefined;
                    tokenAddress?: Uint8Array | undefined;
                } & {
                    symbol?: string | undefined;
                    tokenAddress?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["chains"][number]["events"][number]["tokenDeployed"], keyof import("../../../axelar/evm/v1beta1/types").EventTokenDeployed>, never>) | undefined;
                multisigOwnershipTransferred?: ({
                    preOwners?: Uint8Array[] | undefined;
                    prevThreshold?: Uint8Array | undefined;
                    newOwners?: Uint8Array[] | undefined;
                    newThreshold?: Uint8Array | undefined;
                } & {
                    preOwners?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["chains"][number]["events"][number]["multisigOwnershipTransferred"]["preOwners"], keyof Uint8Array[]>, never>) | undefined;
                    prevThreshold?: Uint8Array | undefined;
                    newOwners?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["chains"][number]["events"][number]["multisigOwnershipTransferred"]["newOwners"], keyof Uint8Array[]>, never>) | undefined;
                    newThreshold?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["chains"][number]["events"][number]["multisigOwnershipTransferred"], keyof import("../../../axelar/evm/v1beta1/types").EventMultisigOwnershipTransferred>, never>) | undefined;
                multisigOperatorshipTransferred?: ({
                    newOperators?: Uint8Array[] | undefined;
                    newThreshold?: Uint8Array | undefined;
                    newWeights?: Uint8Array[] | undefined;
                } & {
                    newOperators?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["chains"][number]["events"][number]["multisigOperatorshipTransferred"]["newOperators"], keyof Uint8Array[]>, never>) | undefined;
                    newThreshold?: Uint8Array | undefined;
                    newWeights?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["chains"][number]["events"][number]["multisigOperatorshipTransferred"]["newWeights"], keyof Uint8Array[]>, never>) | undefined;
                } & Record<Exclude<keyof I["chains"][number]["events"][number]["multisigOperatorshipTransferred"], keyof import("../../../axelar/evm/v1beta1/types").EventMultisigOperatorshipTransferred>, never>) | undefined;
            } & Record<Exclude<keyof I["chains"][number]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["chains"][number]["events"], keyof {
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
            }[]>, never>) | undefined;
            confirmedEventQueue?: ({
                items?: {
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
            } & {
                items?: ({
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["chains"][number]["confirmedEventQueue"]["items"][string], keyof import("../../../axelar/utils/v1beta1/queuer").QueueState_Item>, never>) | undefined;
                } & Record<Exclude<keyof I["chains"][number]["confirmedEventQueue"]["items"], string | number>, never>) | undefined;
            } & Record<Exclude<keyof I["chains"][number]["confirmedEventQueue"], "items">, never>) | undefined;
        } & Record<Exclude<keyof I["chains"][number], keyof GenesisState_Chain>, never>)[] & Record<Exclude<keyof I["chains"], keyof {
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Uint8Array | undefined;
                burnable?: Uint8Array | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Uint8Array | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Uint8Array | undefined;
                tokenAddress?: Uint8Array | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Uint8Array | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Uint8Array | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Uint8Array | undefined;
                commandIds?: Uint8Array[] | undefined;
                data?: Uint8Array | undefined;
                sigHash?: Uint8Array | undefined;
                status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Uint8Array | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Uint8Array | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Uint8Array | undefined;
            }[] | undefined;
            events?: {
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "chains">, never>>(object: I): GenesisState;
};
export declare const GenesisState_Chain: {
    encode(message: GenesisState_Chain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState_Chain;
    fromJSON(object: any): GenesisState_Chain;
    toJSON(message: GenesisState_Chain): unknown;
    fromPartial<I extends {
        params?: {
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Uint8Array | undefined;
            burnable?: Uint8Array | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Uint8Array | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } | undefined;
        burnerInfos?: {
            burnerAddress?: Uint8Array | undefined;
            tokenAddress?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Uint8Array | undefined;
        }[] | undefined;
        commandQueue?: {
            items?: {
                [x: string]: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        confirmedDeposits?: {
            txId?: Uint8Array | undefined;
            amount?: Uint8Array | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Uint8Array | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        burnedDeposits?: {
            txId?: Uint8Array | undefined;
            amount?: Uint8Array | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Uint8Array | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        commandBatches?: {
            id?: Uint8Array | undefined;
            commandIds?: Uint8Array[] | undefined;
            data?: Uint8Array | undefined;
            sigHash?: Uint8Array | undefined;
            status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Uint8Array | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
        gateway?: {
            address?: Uint8Array | undefined;
        } | undefined;
        tokens?: {
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
            status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Uint8Array | undefined;
        }[] | undefined;
        events?: {
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
        }[] | undefined;
        confirmedEventQueue?: {
            items?: {
                [x: string]: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        params?: ({
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Uint8Array | undefined;
            burnable?: Uint8Array | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Uint8Array | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } & {
            chain?: string | undefined;
            confirmationHeight?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["confirmationHeight"], keyof Long.Long>, never>) | undefined;
            network?: string | undefined;
            tokenCode?: Uint8Array | undefined;
            burnable?: Uint8Array | undefined;
            revoteLockingPeriod?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["revoteLockingPeriod"], keyof Long.Long>, never>) | undefined;
            networks?: ({
                name?: string | undefined;
                id?: Uint8Array | undefined;
            }[] & ({
                name?: string | undefined;
                id?: Uint8Array | undefined;
            } & {
                name?: string | undefined;
                id?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["params"]["networks"][number], keyof import("../../../axelar/evm/v1beta1/types").NetworkInfo>, never>)[] & Record<Exclude<keyof I["params"]["networks"], keyof {
                name?: string | undefined;
                id?: Uint8Array | undefined;
            }[]>, never>) | undefined;
            votingThreshold?: ({
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
                } & Record<Exclude<keyof I["params"]["votingThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
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
                } & Record<Exclude<keyof I["params"]["votingThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["votingThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
            minVoterCount?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["minVoterCount"], keyof Long.Long>, never>) | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["votingGracePeriod"], keyof Long.Long>, never>) | undefined;
            endBlockerLimit?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["endBlockerLimit"], keyof Long.Long>, never>) | undefined;
            transferLimit?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["transferLimit"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        burnerInfos?: ({
            burnerAddress?: Uint8Array | undefined;
            tokenAddress?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Uint8Array | undefined;
        }[] & ({
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
        } & Record<Exclude<keyof I["burnerInfos"][number], keyof BurnerInfo>, never>)[] & Record<Exclude<keyof I["burnerInfos"], keyof {
            burnerAddress?: Uint8Array | undefined;
            tokenAddress?: Uint8Array | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        commandQueue?: ({
            items?: {
                [x: string]: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            items?: ({
                [x: string]: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["commandQueue"]["items"][string], keyof import("../../../axelar/utils/v1beta1/queuer").QueueState_Item>, never>) | undefined;
            } & Record<Exclude<keyof I["commandQueue"]["items"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["commandQueue"], "items">, never>) | undefined;
        confirmedDeposits?: ({
            txId?: Uint8Array | undefined;
            amount?: Uint8Array | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Uint8Array | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & Record<Exclude<keyof I["confirmedDeposits"][number]["logIndex"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["confirmedDeposits"][number], keyof ERC20Deposit>, never>)[] & Record<Exclude<keyof I["confirmedDeposits"], keyof {
            txId?: Uint8Array | undefined;
            amount?: Uint8Array | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Uint8Array | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>, never>) | undefined;
        burnedDeposits?: ({
            txId?: Uint8Array | undefined;
            amount?: Uint8Array | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Uint8Array | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & Record<Exclude<keyof I["burnedDeposits"][number]["logIndex"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["burnedDeposits"][number], keyof ERC20Deposit>, never>)[] & Record<Exclude<keyof I["burnedDeposits"], keyof {
            txId?: Uint8Array | undefined;
            amount?: Uint8Array | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Uint8Array | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>, never>) | undefined;
        commandBatches?: ({
            id?: Uint8Array | undefined;
            commandIds?: Uint8Array[] | undefined;
            data?: Uint8Array | undefined;
            sigHash?: Uint8Array | undefined;
            status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Uint8Array | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            id?: Uint8Array | undefined;
            commandIds?: Uint8Array[] | undefined;
            data?: Uint8Array | undefined;
            sigHash?: Uint8Array | undefined;
            status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Uint8Array | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            id?: Uint8Array | undefined;
            commandIds?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["commandBatches"][number]["commandIds"], keyof Uint8Array[]>, never>) | undefined;
            data?: Uint8Array | undefined;
            sigHash?: Uint8Array | undefined;
            status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Uint8Array | undefined;
            signature?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["commandBatches"][number]["signature"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
        } & Record<Exclude<keyof I["commandBatches"][number], keyof CommandBatchMetadata>, never>)[] & Record<Exclude<keyof I["commandBatches"], keyof {
            id?: Uint8Array | undefined;
            commandIds?: Uint8Array[] | undefined;
            data?: Uint8Array | undefined;
            sigHash?: Uint8Array | undefined;
            status?: import("../../../axelar/evm/v1beta1/types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Uint8Array | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        gateway?: ({
            address?: Uint8Array | undefined;
        } & {
            address?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["gateway"], "address">, never>) | undefined;
        tokens?: ({
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
            status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Uint8Array | undefined;
        }[] & ({
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
            status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
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
            } & Record<Exclude<keyof I["tokens"][number]["details"], keyof import("../../../axelar/evm/v1beta1/types").TokenDetails>, never>) | undefined;
            tokenAddress?: string | undefined;
            txHash?: string | undefined;
            status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["tokens"][number], keyof ERC20TokenMetadata>, never>)[] & Record<Exclude<keyof I["tokens"], keyof {
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
            status?: import("../../../axelar/evm/v1beta1/types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        events?: ({
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
        }[] & ({
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
            } & Record<Exclude<keyof I["events"][number]["index"], keyof Long.Long>, never>) | undefined;
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
            } & Record<Exclude<keyof I["events"][number]["tokenSent"], keyof import("../../../axelar/evm/v1beta1/types").EventTokenSent>, never>) | undefined;
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
            } & Record<Exclude<keyof I["events"][number]["contractCall"], keyof import("../../../axelar/evm/v1beta1/types").EventContractCall>, never>) | undefined;
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
            } & Record<Exclude<keyof I["events"][number]["contractCallWithToken"], keyof import("../../../axelar/evm/v1beta1/types").EventContractCallWithToken>, never>) | undefined;
            transfer?: ({
                to?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
            } & {
                to?: Uint8Array | undefined;
                amount?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["events"][number]["transfer"], keyof import("../../../axelar/evm/v1beta1/types").EventTransfer>, never>) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Uint8Array | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["events"][number]["tokenDeployed"], keyof import("../../../axelar/evm/v1beta1/types").EventTokenDeployed>, never>) | undefined;
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
            } & Record<Exclude<keyof I["events"][number]["multisigOwnershipTransferred"], keyof import("../../../axelar/evm/v1beta1/types").EventMultisigOwnershipTransferred>, never>) | undefined;
            multisigOperatorshipTransferred?: ({
                newOperators?: Uint8Array[] | undefined;
                newThreshold?: Uint8Array | undefined;
                newWeights?: Uint8Array[] | undefined;
            } & {
                newOperators?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"]["newOperators"], keyof Uint8Array[]>, never>) | undefined;
                newThreshold?: Uint8Array | undefined;
                newWeights?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"]["newWeights"], keyof Uint8Array[]>, never>) | undefined;
            } & Record<Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"], keyof import("../../../axelar/evm/v1beta1/types").EventMultisigOperatorshipTransferred>, never>) | undefined;
        } & Record<Exclude<keyof I["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["events"], keyof {
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
        }[]>, never>) | undefined;
        confirmedEventQueue?: ({
            items?: {
                [x: string]: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            items?: ({
                [x: string]: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["confirmedEventQueue"]["items"][string], keyof import("../../../axelar/utils/v1beta1/queuer").QueueState_Item>, never>) | undefined;
            } & Record<Exclude<keyof I["confirmedEventQueue"]["items"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["confirmedEventQueue"], "items">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState_Chain>, never>>(object: I): GenesisState_Chain;
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
