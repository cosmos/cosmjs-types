import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.snapshot.v1beta1";
export interface RegisterProxyRequest {
    sender: Uint8Array;
    proxyAddr: Uint8Array;
}
export interface RegisterProxyResponse {
}
export interface DeactivateProxyRequest {
    sender: Uint8Array;
}
export interface DeactivateProxyResponse {
}
export declare const RegisterProxyRequest: {
    encode(message: RegisterProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterProxyRequest;
    fromJSON(object: any): RegisterProxyRequest;
    toJSON(message: RegisterProxyRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        proxyAddr?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
        proxyAddr?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof RegisterProxyRequest>, never>>(object: I): RegisterProxyRequest;
};
export declare const RegisterProxyResponse: {
    encode(_: RegisterProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterProxyResponse;
    fromJSON(_: any): RegisterProxyResponse;
    toJSON(_: RegisterProxyResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterProxyResponse;
};
export declare const DeactivateProxyRequest: {
    encode(message: DeactivateProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateProxyRequest;
    fromJSON(object: any): DeactivateProxyRequest;
    toJSON(message: DeactivateProxyRequest): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "sender">, never>>(object: I): DeactivateProxyRequest;
};
export declare const DeactivateProxyResponse: {
    encode(_: DeactivateProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateProxyResponse;
    fromJSON(_: any): DeactivateProxyResponse;
    toJSON(_: DeactivateProxyResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): DeactivateProxyResponse;
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
