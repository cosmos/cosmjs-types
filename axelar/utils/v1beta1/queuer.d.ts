import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.utils.v1beta1";
export interface QueueState {
    items: {
        [key: string]: QueueState_Item;
    };
}
export interface QueueState_Item {
    key: Uint8Array;
    value: Uint8Array;
}
export interface QueueState_ItemsEntry {
    key: string;
    value?: QueueState_Item;
}
export declare const QueueState: {
    encode(message: QueueState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueueState;
    fromJSON(object: any): QueueState;
    toJSON(message: QueueState): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["items"][string], keyof QueueState_Item>, never>) | undefined;
        } & Record<Exclude<keyof I["items"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "items">, never>>(object: I): QueueState;
};
export declare const QueueState_Item: {
    encode(message: QueueState_Item, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueueState_Item;
    fromJSON(object: any): QueueState_Item;
    toJSON(message: QueueState_Item): unknown;
    fromPartial<I extends {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof QueueState_Item>, never>>(object: I): QueueState_Item;
};
export declare const QueueState_ItemsEntry: {
    encode(message: QueueState_ItemsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueueState_ItemsEntry;
    fromJSON(object: any): QueueState_ItemsEntry;
    toJSON(message: QueueState_ItemsEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        } & {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["value"], keyof QueueState_Item>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueueState_ItemsEntry>, never>>(object: I): QueueState_ItemsEntry;
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
