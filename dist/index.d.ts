declare const pkg: {
    _cleanResponse: (response: any) => any;
    _equals: (array: any[], needle: any[]) => boolean;
    _hideRandom: (array: any[], difficulty?: number, replacement?: string) => any[];
    _repeat: (num: number) => (fn: any) => void;
    _rotateArray: (array: string | number[]) => false | never[];
    _to: (promise: Promise<any>) => Promise<unknown>;
    _To: (promise: Promise<any>) => Promise<unknown>;
    _Get: (data: any) => any;
    a_or_an: (field: string) => "an" | "a";
    Base64: (payload: string) => string;
    toBase64: (payload: string) => string;
    calculateClockDrift: (iatAccessToken: number, iatIdToken: number) => number;
    camelToSnake: (payload: string, hyphenated?: boolean) => string;
    generateId: (start?: number, len?: number) => string;
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
    }, Site?: string) => void;
    queryStringToJson: (payload: string | {
        string: any;
    }, toObject?: boolean) => any;
    reParseString: (payload: string) => any;
    resetString: (payload: string) => string;
    snakeToCamel: (payload: string) => string;
    sniffId: (payload: any) => any;
    _encrypt: (salt: any, payload: any) => any;
    _decrypt: (salt: string | undefined, payload: any, asFunction?: boolean) => any;
};
export default function waelioUtils(): void;
export { pkg as waelioUtils };
export { _cleanResponse } from './clean_response';
export { _equals } from './equals';
export { _hideRandom } from './hide_random';
export { _repeat } from './repeat';
export { _rotateArray } from './rotate_array';
export { _to } from './to';
export { _To } from './to';
export { _Get } from './_get';
export { a_or_an } from './a_or_an';
export { Base64 } from './base64';
export { toBase64 } from './toBase64';
export { calculateClockDrift } from './calculate_clock_drift';
export { camelToSnake } from './camel_to_snake';
export { generateId } from './generate_id';
export { isArray } from './is_array';
export { isObject } from './is_object';
export { isFunction } from './is_function';
export { isString } from './is_string';
export { isValid } from './is_valid';
export { isNumber } from './is_number';
export { jsonToQueryString } from './json_to_query_string';
export { meta } from './meta';
export { notifyMe } from './notify_me';
export { queryStringToJson } from './query_string_to_json';
export { reParseString } from './re_parse_string';
export { resetString } from './reset_string';
export { snakeToCamel } from './snake_to_camel';
export { sniffId } from './sniff_id';
export { _encrypt } from './encrypt';
export { _decrypt } from './decrypt';