declare const _cleanResponse: (response: any) => any;
/**
 * Compare two arrays of equal size
 * @param {array} array
 * @param {array} needle
 * @returns {boolean}
 *
 * @author Wael Wahbeh
 */
declare const _equals: (array: any, needle: any) => any;
/**
 * @param  {array} array
 * @param  {number} difficulty=3
 * @param  {string} replacement=''
 */
declare const _hideRandom: (array: any, difficulty?: number, replacement?: string) => any;
/**
 * Repeat a function n number of time
 * @param {number} num - How many times a function must run
 * @param {function} fn - The function to repeat
 * @returns {void}
 * @author Wael Wahbeh
 */
declare const _repeat: (num: any) => (fn: any) => void;
// @ts-nocheck
/**
 * Rotates array counter clock
 * @param  {array} array
 */
declare const _rotateArray: (array: any) => false | never[];
declare const _to: (promise: any) => Promise<unknown>;
declare const _To: (promise: any) => Promise<unknown>;
declare const _Get: (data: any) => any;
declare const a_or_an: (field: any) => "an" | "a";
/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
declare const Base64: (payload: any) => string;
/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
declare const toBase64: (payload: any) => string;
/**
 * Calculate Clock Drift used to calculate tile remaining before token expiration
 *
 * @param  {} iatAccessToken IAT
 * @param  {} iatIdToken
 */
declare const calculateClockDrift: (iatAccessToken: any, iatIdToken: any) => number;
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
declare const camelToSnake: (payload: any, hyphenated?: boolean) => any;
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
declare const isValid: (payload: any) => boolean;
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
declare const jsonToQueryString: (payload: any) => string;
// @ts-nocheck
declare const meta: () => {
    meta: {};
};
/** PWA Notification
 * Send Notification to Site
 * Browser only
 * @param  {string} notification -Message to send
 * @param  {string} Site -Website name
 */
declare const notifyMe: (notification: any, Site?: string) => void;
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
declare const queryStringToJson: (payload: any, toObject?: boolean) => any;
declare const reParseString: (payload: any) => any;
/** Decode uri component
 * @name  resetString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload
 */
declare const resetString: (payload: any) => string;
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
declare const snakeToCamel: (payload: any) => any;
/**
 * @param  {object} payload
 * @returns string||boolean||number
 */
declare const sniffId: (payload: any) => any;
declare const _encrypt: (salt: any, payload: any) => any;
declare const _decrypt: (salt: string | undefined, payload: any, asFunction?: boolean) => any;
declare const waelioUtils$0: {
    _cleanResponse: (response: any) => any;
    _equals: (array: any, needle: any) => any;
    _hideRandom: (array: any, difficulty?: number, replacement?: string) => any;
    _repeat: (num: any) => (fn: any) => void;
    _rotateArray: (array: any) => false | never[];
    _to: (promise: any) => Promise<unknown>;
    _To: (promise: any) => Promise<unknown>;
    _Get: (data: any) => any;
    a_or_an: (field: any) => "an" | "a";
    Base64: (payload: any) => string;
    toBase64: (payload: any) => string;
    calculateClockDrift: (iatAccessToken: any, iatIdToken: any) => number;
    camelToSnake: (payload: any, hyphenated?: boolean) => any;
    generateId: (start?: number, len?: number) => string;
    isArray: (payload: any) => boolean;
    isObject: (payload: any) => boolean;
    isFunction: (payload: any) => any;
    isString: (payload: any) => boolean;
    isValid: (payload: any) => boolean;
    isNumber: (payload: any) => boolean;
    jsonToQueryString: (payload: any) => string;
    meta: () => {
        meta: {};
    };
    notifyMe: (notification: any, Site?: string) => void;
    queryStringToJson: (payload: any, toObject?: boolean) => any;
    reParseString: (payload: any) => any;
    resetString: (payload: any) => string;
    snakeToCamel: (payload: any) => any;
    sniffId: (payload: any) => any;
    _encrypt: (salt: any, payload: any) => any;
    _decrypt: (salt: string | undefined, payload: any, asFunction?: boolean) => any;
};
export { waelioUtils$0 as default, waelioUtils$0 as waelioUtils, _cleanResponse, _equals, _hideRandom, _repeat, _rotateArray, _to, _To, _Get, a_or_an, Base64, toBase64, calculateClockDrift, camelToSnake, generateId, isArray, isObject, isFunction, isString, isValid, isNumber, jsonToQueryString, meta, notifyMe, queryStringToJson, reParseString, resetString, snakeToCamel, sniffId, _encrypt, _decrypt };
