/**
 * Compare two arrays of equal size
 * @param {array} array
 * @param {array} needle
 * @returns {boolean}
 *
 * @author Peace Marshal
 */
declare type equalsPayloadType = string | number | number[] | string[] | [];
declare const _equals: (arr: equalsPayloadType, needle: equalsPayloadType) => boolean;

declare const _cleanResponse: (response: object) => object;

/**
 * @param  {array} array
 * @param  {number} difficulty=3
 * @param  {string} replacement=''
 */
declare const _hideRandom: (array: Array<any>, difficulty?: number, replacement?: string) => any[];

/**
 * Repeat a function n number of time
 * @param num number - How many times a function must run
 * @param fn Function- The function to repeat
 * @returns {void}
 * @author Wael Wahbeh
 */
declare const _repeat: (num: number) => (fn: Function) => void;

/**
 * Rotates array counter clock
 * @param  {array} array
 */
declare const _rotateArray: (array: string | number[]) => false | never[];

declare const _To: (promise: Promise<any>) => Promise<unknown>;

declare const _Get: (data: any) => any;

declare const a_or_an: (field: string) => "an" | "a";

/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
declare const toBase64: (payload: string) => string;

/**
 * Calculate Clock Drift used to calculate tile remaining before token expiration
 *
 * @param  {} iatAccessToken IAT
 * @param  {} iatIdToken
 */
declare const calculateClockDrift: (iatAccessToken: number, iatIdToken: number) => number;

/**
 * Function that converts camelCase to snake_case or snake-case "snake-case"
 * Example IN: snakeCase
 * Example Out: snake-case
 * Example Out: snake_case
 * @name  camelToSnake
 * @param {string} payload
 * @param {boolean} hyphenated controls the delimiter: true = "-" / false = "_"
 * @returns {string}
 */
declare const camelToSnake: (payload: string, hyphenated?: boolean) => string;

/** generate random string
 * @name  generateId
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @param  {number} start 2 default
 * @param  {number} len   9 default
 * @return {string}
 */
declare const generateId: (start?: number, len?: number) => string;

declare const isArray: (payload: any) => boolean;

declare const isObject: (payload: any) => boolean;

declare const isFunction: (payload: any) => any;

declare const isString: (payload: any) => boolean;

declare const isValid: (payload: object | [
] | string | number) => boolean;

declare const isNumber: (payload: any) => boolean;

/**
 * Function that converts a JSON to URL Query String
 * Example IN: {"first":"John", "last": "Smith"}
 * Example Out: first=John&last=Smith
 * @name  jsonToQueryString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {} -JSON payload
 * @returns QueryString
 */
declare const jsonToQueryString: (payload: {
    string;
}) => string;

/** PWA Notification
 * Send Notification to Site
 * Browser only
 * @param  {string} notification -Message to send
 * @param  {string} Site -Website name
 */
declare const notifyMe: (notification: string | {
    string;
}, Site?: string) => void;

/**
 * Function that converts a URL Query String to JSON
 * Example Out: {"first":"John", "last": "Smith"}
 * @name  queryStringToJson
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload QueryString
 * @param {boolean} toObject Return JS Object or JSON
 * @returns JSON|Object
 */
declare const queryStringToJson: (payload: string | {
    string;
}, toObject?: boolean) => any;

declare const reParseString: (payload: string) => any;

/** Decode uri component
 * @name  resetString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload
 */
declare const resetString: (payload: string) => string;

/**
 * Function that converts snake_case or snake-case to camelCase "snakeCase"
 * Example IN: snake_case
 * Example Out: snakeCase
 * @name  snakeToCamel
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload QueryString
 * @returns {string}
 */
declare const snakeToCamel: (payload: string) => string;

/**
 * @param  {object} payload
 * @returns string||boolean||number
 */
declare const sniffId: (payload: any) => any;

declare const _encrypt: (salt: any, payload: any) => any;

declare const _decrypt: (salt: string | undefined, payload: any, asFunction?: boolean) => any;

declare namespace WaelioTools {
    interface Utils {
        _cleanResponse: typeof _cleanResponse;
        _hideRandom: typeof _hideRandom;
        _repeat: typeof _repeat;
        _rotateArray: typeof _rotateArray;
        _To: typeof _To;
        _sniffId: typeof sniffId;
        _Get: typeof _Get;
        _toBase64: typeof toBase64;
        _calculateClockDrift: typeof calculateClockDrift;
        _generateId: typeof generateId;
        _notifyMe: typeof notifyMe;
        _jsonToQueryString: typeof jsonToQueryString;
        _queryStringToJson: typeof queryStringToJson;
        _reParseString: typeof reParseString;
        _resetString: typeof resetString;
        _camelToSnake: typeof camelToSnake;
        _snakeToCamel: typeof snakeToCamel;
        _equals: typeof _equals;
        _a_or_an: typeof a_or_an;
        _encrypt: typeof _encrypt;
        _decrypt: typeof _decrypt;
        _isArray: typeof isArray;
        _isObject: typeof isObject;
        _isFunction: typeof isFunction;
        _isString: typeof isString;
        _isValid: typeof isValid;
        _isNumber: typeof isNumber;
    }
}

declare const WaelioUtils: WaelioTools.Utils;
declare const _default: {
    _cleanResponse: (response: object) => object;
    _equals: (arr: equalsPayloadType, needle: equalsPayloadType) => boolean;
    _hideRandom: (array: any[], difficulty?: number, replacement?: string) => any[];
    _repeat: (num: number) => (fn: Function) => void;
    _rotateArray: (array: string | number[]) => false | never[];
    _To: (promise: Promise<any>) => Promise<unknown>;
    _Get: (data: any) => any;
    _a_or_an: (field: string) => "an" | "a";
    _toBase64: (payload: string) => string;
    _calculateClockDrift: (iatAccessToken: number, iatIdToken: number) => number;
    _camelToSnake: (payload: string, hyphenated?: boolean) => string;
    _generateId: (start?: number, len?: number) => string;
    _isArray: (payload: any) => boolean;
    _isObject: (payload: any) => boolean;
    _isFunction: (payload: any) => any;
    _isString: (payload: any) => boolean;
    _isValid: (payload: string | number | object | []) => boolean;
    _isNumber: (payload: any) => boolean;
    _jsonToQueryString: (payload: {
        string: any;
    }) => string;
    _notifyMe: (notification: string | {
        string: any;
    }, Site?: string) => void;
    _queryStringToJson: (payload: string | {
        string: any;
    }, toObject?: boolean) => any;
    _reParseString: (payload: string) => any;
    _resetString: (payload: string) => string;
    _snakeToCamel: (payload: string) => string;
    _sniffId: (payload: any) => any;
    _encrypt: (salt: any, payload: any) => any;
    _decrypt: (salt: string | undefined, payload: any, asFunction?: boolean) => any;
};

export { WaelioTools, WaelioUtils, _Get, _To, a_or_an as _a_or_an, calculateClockDrift as _calculateClockDrift, camelToSnake as _camelToSnake, _cleanResponse, _decrypt, _encrypt, _equals, generateId as _generateId, _hideRandom, isArray as _isArray, isFunction as _isFunction, isNumber as _isNumber, isObject as _isObject, isString as _isString, isValid as _isValid, jsonToQueryString as _jsonToQueryString, notifyMe as _notifyMe, queryStringToJson as _queryStringToJson, reParseString as _reParseString, _repeat, resetString as _resetString, _rotateArray, snakeToCamel as _snakeToCamel, sniffId as _sniffId, toBase64 as _toBase64, _default as default };
//# sourceMappingURL=waelioUtils.ts.map
