import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
/**
 * CallContractsProposal is a gov Content type for calling contracts on other
 * chains
 */
export interface CallContractsProposal {
    title: string;
    description: string;
    contractCalls: ContractCall[];
}
export interface ContractCall {
    chain: string;
    contractAddress: string;
    payload: Uint8Array;
}
export declare const CallContractsProposal: {
    encode(message: CallContractsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CallContractsProposal;
    fromJSON(object: any): CallContractsProposal;
    toJSON(message: CallContractsProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        contractCalls?: {
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        contractCalls?: ({
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Uint8Array | undefined;
        }[] & ({
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Uint8Array | undefined;
        } & {
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["contractCalls"][number], keyof ContractCall>, never>)[] & Record<Exclude<keyof I["contractCalls"], keyof {
            chain?: string | undefined;
            contractAddress?: string | undefined;
            payload?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CallContractsProposal>, never>>(object: I): CallContractsProposal;
};
export declare const ContractCall: {
    encode(message: ContractCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContractCall;
    fromJSON(object: any): ContractCall;
    toJSON(message: ContractCall): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Uint8Array | undefined;
    } & {
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof ContractCall>, never>>(object: I): ContractCall;
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
