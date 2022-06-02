import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.tss.tofnd.v1beta1";
/** File copied from golang tofnd with minor tweaks */
export interface RecoverRequest {
    keygenInit?: KeygenInit;
    keygenOutput?: KeygenOutput;
}
export interface RecoverResponse {
    response: RecoverResponse_Response;
}
export declare enum RecoverResponse_Response {
    RESPONSE_UNSPECIFIED = 0,
    RESPONSE_SUCCESS = 1,
    RESPONSE_FAIL = 2,
    UNRECOGNIZED = -1
}
export declare function recoverResponse_ResponseFromJSON(object: any): RecoverResponse_Response;
export declare function recoverResponse_ResponseToJSON(object: RecoverResponse_Response): string;
/** Keygen's success response */
export interface KeygenOutput {
    /** pub_key; common for all parties */
    pubKey: Uint8Array;
    /** recover info of all parties' shares; common for all parties */
    groupRecoverInfo: Uint8Array;
    /** private recover info of this party's shares; unique for each party */
    privateRecoverInfo: Uint8Array;
}
export interface MessageIn {
    /** first message only, Keygen */
    keygenInit?: KeygenInit | undefined;
    /** first message only, Sign */
    signInit?: SignInit | undefined;
    /** all subsequent messages */
    traffic?: TrafficIn | undefined;
    /** abort the protocol, ignore the bool value */
    abort: boolean | undefined;
}
export interface MessageOut {
    /** all but final message */
    traffic?: TrafficOut | undefined;
    /** final message only, Keygen */
    keygenResult?: MessageOut_KeygenResult | undefined;
    /** final message only, Sign */
    signResult?: MessageOut_SignResult | undefined;
    /** issue recover from client */
    needRecover: boolean | undefined;
}
/** Keygen's response types */
export interface MessageOut_KeygenResult {
    /** Success response */
    data?: KeygenOutput | undefined;
    /** Faiilure response */
    criminals?: MessageOut_CriminalList | undefined;
}
/** Sign's response types */
export interface MessageOut_SignResult {
    /** Success response */
    signature: Uint8Array | undefined;
    /** Failure response */
    criminals?: MessageOut_CriminalList | undefined;
}
/** Keygen/Sign failure response message */
export interface MessageOut_CriminalList {
    criminals: MessageOut_CriminalList_Criminal[];
}
export interface MessageOut_CriminalList_Criminal {
    partyUid: string;
    crimeType: MessageOut_CriminalList_Criminal_CrimeType;
}
export declare enum MessageOut_CriminalList_Criminal_CrimeType {
    CRIME_TYPE_UNSPECIFIED = 0,
    CRIME_TYPE_NON_MALICIOUS = 1,
    CRIME_TYPE_MALICIOUS = 2,
    UNRECOGNIZED = -1
}
export declare function messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object: any): MessageOut_CriminalList_Criminal_CrimeType;
export declare function messageOut_CriminalList_Criminal_CrimeTypeToJSON(object: MessageOut_CriminalList_Criminal_CrimeType): string;
export interface TrafficIn {
    fromPartyUid: string;
    payload: Uint8Array;
    isBroadcast: boolean;
}
export interface TrafficOut {
    toPartyUid: string;
    payload: Uint8Array;
    isBroadcast: boolean;
}
export interface KeygenInit {
    newKeyUid: string;
    partyUids: string[];
    partyShareCounts: number[];
    /** parties[my_party_index] belongs to the server */
    myPartyIndex: number;
    threshold: number;
}
export interface SignInit {
    newSigUid: string;
    keyUid: string;
    /** TODO replace this with a subset of indices? */
    partyUids: string[];
    messageToSign: Uint8Array;
}
export declare const RecoverRequest: {
    encode(message: RecoverRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecoverRequest;
    fromJSON(object: any): RecoverRequest;
    toJSON(message: RecoverRequest): unknown;
    fromPartial<I extends {
        keygenInit?: {
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } | undefined;
        keygenOutput?: {
            pubKey?: Uint8Array | undefined;
            groupRecoverInfo?: Uint8Array | undefined;
            privateRecoverInfo?: Uint8Array | undefined;
        } | undefined;
    } & {
        keygenInit?: ({
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & {
            newKeyUid?: string | undefined;
            partyUids?: (string[] & string[] & Record<Exclude<keyof I["keygenInit"]["partyUids"], keyof string[]>, never>) | undefined;
            partyShareCounts?: (number[] & number[] & Record<Exclude<keyof I["keygenInit"]["partyShareCounts"], keyof number[]>, never>) | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & Record<Exclude<keyof I["keygenInit"], keyof KeygenInit>, never>) | undefined;
        keygenOutput?: ({
            pubKey?: Uint8Array | undefined;
            groupRecoverInfo?: Uint8Array | undefined;
            privateRecoverInfo?: Uint8Array | undefined;
        } & {
            pubKey?: Uint8Array | undefined;
            groupRecoverInfo?: Uint8Array | undefined;
            privateRecoverInfo?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["keygenOutput"], keyof KeygenOutput>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RecoverRequest>, never>>(object: I): RecoverRequest;
};
export declare const RecoverResponse: {
    encode(message: RecoverResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecoverResponse;
    fromJSON(object: any): RecoverResponse;
    toJSON(message: RecoverResponse): unknown;
    fromPartial<I extends {
        response?: RecoverResponse_Response | undefined;
    } & {
        response?: RecoverResponse_Response | undefined;
    } & Record<Exclude<keyof I, "response">, never>>(object: I): RecoverResponse;
};
export declare const KeygenOutput: {
    encode(message: KeygenOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOutput;
    fromJSON(object: any): KeygenOutput;
    toJSON(message: KeygenOutput): unknown;
    fromPartial<I extends {
        pubKey?: Uint8Array | undefined;
        groupRecoverInfo?: Uint8Array | undefined;
        privateRecoverInfo?: Uint8Array | undefined;
    } & {
        pubKey?: Uint8Array | undefined;
        groupRecoverInfo?: Uint8Array | undefined;
        privateRecoverInfo?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof KeygenOutput>, never>>(object: I): KeygenOutput;
};
export declare const MessageIn: {
    encode(message: MessageIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageIn;
    fromJSON(object: any): MessageIn;
    toJSON(message: MessageIn): unknown;
    fromPartial<I extends {
        keygenInit?: {
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } | undefined;
        signInit?: {
            newSigUid?: string | undefined;
            keyUid?: string | undefined;
            partyUids?: string[] | undefined;
            messageToSign?: Uint8Array | undefined;
        } | undefined;
        traffic?: {
            fromPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        abort?: boolean | undefined;
    } & {
        keygenInit?: ({
            newKeyUid?: string | undefined;
            partyUids?: string[] | undefined;
            partyShareCounts?: number[] | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & {
            newKeyUid?: string | undefined;
            partyUids?: (string[] & string[] & Record<Exclude<keyof I["keygenInit"]["partyUids"], keyof string[]>, never>) | undefined;
            partyShareCounts?: (number[] & number[] & Record<Exclude<keyof I["keygenInit"]["partyShareCounts"], keyof number[]>, never>) | undefined;
            myPartyIndex?: number | undefined;
            threshold?: number | undefined;
        } & Record<Exclude<keyof I["keygenInit"], keyof KeygenInit>, never>) | undefined;
        signInit?: ({
            newSigUid?: string | undefined;
            keyUid?: string | undefined;
            partyUids?: string[] | undefined;
            messageToSign?: Uint8Array | undefined;
        } & {
            newSigUid?: string | undefined;
            keyUid?: string | undefined;
            partyUids?: (string[] & string[] & Record<Exclude<keyof I["signInit"]["partyUids"], keyof string[]>, never>) | undefined;
            messageToSign?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["signInit"], keyof SignInit>, never>) | undefined;
        traffic?: ({
            fromPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            fromPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & Record<Exclude<keyof I["traffic"], keyof TrafficIn>, never>) | undefined;
        abort?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof MessageIn>, never>>(object: I): MessageIn;
};
export declare const MessageOut: {
    encode(message: MessageOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageOut;
    fromJSON(object: any): MessageOut;
    toJSON(message: MessageOut): unknown;
    fromPartial<I extends {
        traffic?: {
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        keygenResult?: {
            data?: {
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        signResult?: {
            signature?: Uint8Array | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        needRecover?: boolean | undefined;
    } & {
        traffic?: ({
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & Record<Exclude<keyof I["traffic"], keyof TrafficOut>, never>) | undefined;
        keygenResult?: ({
            data?: {
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            data?: ({
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } & {
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["keygenResult"]["data"], keyof KeygenOutput>, never>) | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & Record<Exclude<keyof I["keygenResult"]["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>, never>)[] & Record<Exclude<keyof I["keygenResult"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["keygenResult"]["criminals"], "criminals">, never>) | undefined;
        } & Record<Exclude<keyof I["keygenResult"], keyof MessageOut_KeygenResult>, never>) | undefined;
        signResult?: ({
            signature?: Uint8Array | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            signature?: Uint8Array | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & Record<Exclude<keyof I["signResult"]["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>, never>)[] & Record<Exclude<keyof I["signResult"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["signResult"]["criminals"], "criminals">, never>) | undefined;
        } & Record<Exclude<keyof I["signResult"], keyof MessageOut_SignResult>, never>) | undefined;
        needRecover?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof MessageOut>, never>>(object: I): MessageOut;
};
export declare const MessageOut_KeygenResult: {
    encode(message: MessageOut_KeygenResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageOut_KeygenResult;
    fromJSON(object: any): MessageOut_KeygenResult;
    toJSON(message: MessageOut_KeygenResult): unknown;
    fromPartial<I extends {
        data?: {
            pubKey?: Uint8Array | undefined;
            groupRecoverInfo?: Uint8Array | undefined;
            privateRecoverInfo?: Uint8Array | undefined;
        } | undefined;
        criminals?: {
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        data?: ({
            pubKey?: Uint8Array | undefined;
            groupRecoverInfo?: Uint8Array | undefined;
            privateRecoverInfo?: Uint8Array | undefined;
        } & {
            pubKey?: Uint8Array | undefined;
            groupRecoverInfo?: Uint8Array | undefined;
            privateRecoverInfo?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["data"], keyof KeygenOutput>, never>) | undefined;
        criminals?: ({
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] | undefined;
        } & {
            criminals?: ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] & ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & Record<Exclude<keyof I["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>, never>)[] & Record<Exclude<keyof I["criminals"]["criminals"], keyof {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["criminals"], "criminals">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MessageOut_KeygenResult>, never>>(object: I): MessageOut_KeygenResult;
};
export declare const MessageOut_SignResult: {
    encode(message: MessageOut_SignResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageOut_SignResult;
    fromJSON(object: any): MessageOut_SignResult;
    toJSON(message: MessageOut_SignResult): unknown;
    fromPartial<I extends {
        signature?: Uint8Array | undefined;
        criminals?: {
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        signature?: Uint8Array | undefined;
        criminals?: ({
            criminals?: {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] | undefined;
        } & {
            criminals?: ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[] & ({
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            } & Record<Exclude<keyof I["criminals"]["criminals"][number], keyof MessageOut_CriminalList_Criminal>, never>)[] & Record<Exclude<keyof I["criminals"]["criminals"], keyof {
                partyUid?: string | undefined;
                crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["criminals"], "criminals">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MessageOut_SignResult>, never>>(object: I): MessageOut_SignResult;
};
export declare const MessageOut_CriminalList: {
    encode(message: MessageOut_CriminalList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageOut_CriminalList;
    fromJSON(object: any): MessageOut_CriminalList;
    toJSON(message: MessageOut_CriminalList): unknown;
    fromPartial<I extends {
        criminals?: {
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        }[] | undefined;
    } & {
        criminals?: ({
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        }[] & ({
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        } & {
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        } & Record<Exclude<keyof I["criminals"][number], keyof MessageOut_CriminalList_Criminal>, never>)[] & Record<Exclude<keyof I["criminals"], keyof {
            partyUid?: string | undefined;
            crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "criminals">, never>>(object: I): MessageOut_CriminalList;
};
export declare const MessageOut_CriminalList_Criminal: {
    encode(message: MessageOut_CriminalList_Criminal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageOut_CriminalList_Criminal;
    fromJSON(object: any): MessageOut_CriminalList_Criminal;
    toJSON(message: MessageOut_CriminalList_Criminal): unknown;
    fromPartial<I extends {
        partyUid?: string | undefined;
        crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
    } & {
        partyUid?: string | undefined;
        crimeType?: MessageOut_CriminalList_Criminal_CrimeType | undefined;
    } & Record<Exclude<keyof I, keyof MessageOut_CriminalList_Criminal>, never>>(object: I): MessageOut_CriminalList_Criminal;
};
export declare const TrafficIn: {
    encode(message: TrafficIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TrafficIn;
    fromJSON(object: any): TrafficIn;
    toJSON(message: TrafficIn): unknown;
    fromPartial<I extends {
        fromPartyUid?: string | undefined;
        payload?: Uint8Array | undefined;
        isBroadcast?: boolean | undefined;
    } & {
        fromPartyUid?: string | undefined;
        payload?: Uint8Array | undefined;
        isBroadcast?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof TrafficIn>, never>>(object: I): TrafficIn;
};
export declare const TrafficOut: {
    encode(message: TrafficOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TrafficOut;
    fromJSON(object: any): TrafficOut;
    toJSON(message: TrafficOut): unknown;
    fromPartial<I extends {
        toPartyUid?: string | undefined;
        payload?: Uint8Array | undefined;
        isBroadcast?: boolean | undefined;
    } & {
        toPartyUid?: string | undefined;
        payload?: Uint8Array | undefined;
        isBroadcast?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof TrafficOut>, never>>(object: I): TrafficOut;
};
export declare const KeygenInit: {
    encode(message: KeygenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenInit;
    fromJSON(object: any): KeygenInit;
    toJSON(message: KeygenInit): unknown;
    fromPartial<I extends {
        newKeyUid?: string | undefined;
        partyUids?: string[] | undefined;
        partyShareCounts?: number[] | undefined;
        myPartyIndex?: number | undefined;
        threshold?: number | undefined;
    } & {
        newKeyUid?: string | undefined;
        partyUids?: (string[] & string[] & Record<Exclude<keyof I["partyUids"], keyof string[]>, never>) | undefined;
        partyShareCounts?: (number[] & number[] & Record<Exclude<keyof I["partyShareCounts"], keyof number[]>, never>) | undefined;
        myPartyIndex?: number | undefined;
        threshold?: number | undefined;
    } & Record<Exclude<keyof I, keyof KeygenInit>, never>>(object: I): KeygenInit;
};
export declare const SignInit: {
    encode(message: SignInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignInit;
    fromJSON(object: any): SignInit;
    toJSON(message: SignInit): unknown;
    fromPartial<I extends {
        newSigUid?: string | undefined;
        keyUid?: string | undefined;
        partyUids?: string[] | undefined;
        messageToSign?: Uint8Array | undefined;
    } & {
        newSigUid?: string | undefined;
        keyUid?: string | undefined;
        partyUids?: (string[] & string[] & Record<Exclude<keyof I["partyUids"], keyof string[]>, never>) | undefined;
        messageToSign?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof SignInit>, never>>(object: I): SignInit;
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
