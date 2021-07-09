import { _cleanResponse } from './clean_response';
import { _equals } from './equals';
import { _hideRandom } from './hide_random';
import { _repeat } from './repeat';
import { _rotateArray } from './rotate_array';
import { _to } from './to';
import { _To } from './to';
import { _Get } from './_get';
import { a_or_an } from './a_or_an';
import { Base64 } from './base64';
import { toBase64 } from './toBase64';
import { calculateClockDrift } from './calculate_clock_drift';
import { camelToSnake } from './camel_to_snake';
import { generateId } from './generate_id';
import { isArray } from './is_array';
import { isObject } from './is_object';
import { isFunction } from './is_function';
import { isString } from './is_string';
import { isValid } from './is_valid';
import { isNumber } from './is_number';
import { jsonToQueryString } from './json_to_query_string';
import { meta } from './meta';
import { notifyMe } from './notify_me';
import { queryStringToJson } from './query_string_to_json';
import { reParseString } from './re_parse_string';
import { resetString } from './reset_string';
import { snakeToCamel } from './snake_to_camel';
import { sniffId } from './sniff_id';
import { _encrypt } from './encrypt';
import { _decrypt } from './decrypt';
declare const waelioUtils: {
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
export { _cleanResponse };
export { _equals };
export { _hideRandom };
export { _repeat };
export { _rotateArray };
export { _to };
export { _To };
export { _Get };
export { a_or_an };
export { Base64 };
export { toBase64 };
export { calculateClockDrift };
export { camelToSnake };
export { generateId };
export { isArray };
export { isObject };
export { isFunction };
export { isString };
export { isValid };
export { isNumber };
export { jsonToQueryString };
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
