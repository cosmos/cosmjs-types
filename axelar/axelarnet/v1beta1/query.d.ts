import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
export interface PendingIBCTransferCountRequest {
}
export interface PendingIBCTransferCountResponse {
    transfersByChain: {
        [key: string]: number;
    };
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntry {
    key: string;
    value: number;
}
export declare const PendingIBCTransferCountRequest: {
    encode(_: PendingIBCTransferCountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingIBCTransferCountRequest;
    fromJSON(_: any): PendingIBCTransferCountRequest;
    toJSON(_: PendingIBCTransferCountRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): PendingIBCTransferCountRequest;
};
export declare const PendingIBCTransferCountResponse: {
    encode(message: PendingIBCTransferCountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingIBCTransferCountResponse;
    fromJSON(object: any): PendingIBCTransferCountResponse;
    toJSON(message: PendingIBCTransferCountResponse): unknown;
    fromPartial<I extends {
        transfersByChain?: {
            [x: string]: number | undefined;
        } | undefined;
    } & {
        transfersByChain?: ({
            [x: string]: number | undefined;
        } & {
            [x: string]: number | undefined;
        } & Record<Exclude<keyof I["transfersByChain"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "transfersByChain">, never>>(object: I): PendingIBCTransferCountResponse;
};
export declare const PendingIBCTransferCountResponse_TransfersByChainEntry: {
    encode(message: PendingIBCTransferCountResponse_TransfersByChainEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingIBCTransferCountResponse_TransfersByChainEntry;
    fromJSON(object: any): PendingIBCTransferCountResponse_TransfersByChainEntry;
    toJSON(message: PendingIBCTransferCountResponse_TransfersByChainEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: number | undefined;
    } & {
        key?: string | undefined;
        value?: number | undefined;
    } & Record<Exclude<keyof I, keyof PendingIBCTransferCountResponse_TransfersByChainEntry>, never>>(object: I): PendingIBCTransferCountResponse_TransfersByChainEntry;
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
