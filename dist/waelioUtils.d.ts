import { _cleanResponse, _equals, _hideRandom, _repeat, _rotateArray, _to, _To, _Get, a_or_an, Base64, toBase64, calculateClockDrift, camelToSnake, generateId, isArray, isObject, isFunction, isString, isValid, isNumber, jsonToQueryString, meta, notifyMe, queryStringToJson, reParseString, resetString, snakeToCamel, sniffId, _encrypt, _decrypt } from './utils/index';
declare const waelioUtils: {
    _cleanResponse: (response: any) => any;
    _equals: (array: any[], needle: any[]) => boolean;
    _hideRandom: (array: any[], difficulty?: number | undefined, replacement?: string | undefined) => any[];
    _repeat: (num: number) => (fn: any) => void;
    _rotateArray: (array: string | number[]) => false | never[];
    _to: (promise: Promise<any>) => Promise<unknown>;
    _To: (promise: Promise<any>) => Promise<unknown>;
    _Get: (data: any) => any;
    a_or_an: (field: string) => "an" | "a";
    Base64: (payload: string) => string;
    toBase64: (payload: string) => string;
    calculateClockDrift: (iatAccessToken: number, iatIdToken: number) => number;
    camelToSnake: (payload: string, hyphenated?: boolean | undefined) => string;
    generateId: (start?: number | undefined, len?: number | undefined) => string;
    isArray: (payload: any) => boolean;
    isObject: (payload: any) => boolean;
    isFunction: (payload: any) => any;
    isString: (payload: any) => boolean;
    isValid: (payload: any) => boolean;
    isNumber: (payload: any) => boolean;
    jsonToQueryString: (payload: {
        string: any;
    }) => string;
    meta: () => {
        meta: {};
    };
    notifyMe: (notification: string | {
        string: any;
    }, Site?: string | undefined) => void;
    queryStringToJson: (payload: string | {
        string: any;
    }, toObject?: boolean | undefined) => any;
    reParseString: (payload: string) => any;
    resetString: (payload: string) => string;
    snakeToCamel: (payload: string) => string;
    sniffId: (payload: any) => any;
    _encrypt: (salt: any, payload: any) => any;
    _decrypt: (salt: string | undefined, payload: any, asFunction?: boolean | undefined) => any;
};
export { waelioUtils as default, waelioUtils, _cleanResponse, _equals, _hideRandom, _repeat, _rotateArray, _to, _To, _Get, a_or_an, Base64, toBase64, calculateClockDrift, camelToSnake, generateId, isArray, isObject, isFunction, isString, isValid, isNumber, jsonToQueryString, meta, notifyMe, queryStringToJson, reParseString, resetString, snakeToCamel, sniffId, _encrypt, _decrypt };
tring };
export { meta };
export { notifyMe };
export { queryStringToJson };
export { reParseString };
export { resetString };
export { snakeToCamel };
export { sniffId };
export { _encrypt };
export { _decrypt };
export { waelioUtils };
