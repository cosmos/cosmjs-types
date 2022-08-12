import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.tss.tofnd.v1beta1";
/** File copied from golang tofnd with minor tweaks */
/** Key presence check types */
export interface KeyPresenceRequest {
    keyUid: string;
    /** SEC1-encoded compressed pub key bytes to find the right */
    pubKey: Uint8Array;
}
export interface KeyPresenceResponse {
    response: KeyPresenceResponse_Response;
}
export declare enum KeyPresenceResponse_Response {
    RESPONSE_UNSPECIFIED = 0,
    RESPONSE_PRESENT = 1,
    RESPONSE_ABSENT = 2,
    RESPONSE_FAIL = 3,
    UNRECOGNIZED = -1
}
export declare function keyPresenceResponse_ResponseFromJSON(object: any): KeyPresenceResponse_Response;
export declare function keyPresenceResponse_ResponseToJSON(object: KeyPresenceResponse_Response): string;
export declare const KeyPresenceRequest: {
    encode(message: KeyPresenceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyPresenceRequest;
    fromJSON(object: any): KeyPresenceRequest;
    toJSON(message: KeyPresenceRequest): unknown;
    fromPartial<I extends {
        keyUid?: string | undefined;
        pubKey?: Uint8Array | undefined;
    } & {
        keyUid?: string | undefined;
        pubKey?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof KeyPresenceRequest>, never>>(object: I): KeyPresenceRequest;
};
export declare const KeyPresenceResponse: {
    encode(message: KeyPresenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyPresenceResponse;
    fromJSON(object: any): KeyPresenceResponse;
    toJSON(message: KeyPresenceResponse): unknown;
    fromPartial<I extends {
        response?: KeyPresenceResponse_Response | undefined;
    } & {
        response?: KeyPresenceResponse_Response | undefined;
    } & Record<Exclude<keyof I, "response">, never>>(object: I): KeyPresenceResponse;
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
