'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const reParseString$1 = (payload) => (payload ? JSON.parse(JSON.stringify(payload)) : payload);
const get$2 = (payload) => {
    const data = payload; /*?*/
    return data.data ? data.data : data; /*?*/
};
const _cleanResponse = (response) => {
    const data = get$2(response); /*?*/
    return !!data ? (data.length && data.length > 1 ? data : reParseString$1(data)) : response;
};

/**
 * Compare two arrays of equal size
 * @param {array} array
 * @param {array} needle
 * @returns {boolean}
 *
 * @author Wael Wahbeh
 */
const _equals = (array, needle) => {
    // if the array or needle are a falsy value, return
    if (!array || !needle)
        return false;
    // compare lengths - can save a lot of time
    if (needle.length != array.length)
        return false;
    for (let i = 0, l = needle.length; i < l; i++) {
        // Check if we have nested arrays
        if (Array.isArray(needle[i]) && Array.isArray(needle[i])) {
            // recurse into the nested arrays
            return _equals(array[i], needle[i]);
        }
        else if (needle[i] !== array[i]) {
            return false;
        }
    }
    return true;
};

/**
 * @param  {array} array
 * @param  {number} difficulty=3
 * @param  {string} replacement=''
 */
const _hideRandom = (array, difficulty = 3, replacement = '') => {
    for (let i = 0; i < array.length; ++i) {
        for (let k = 0; k < difficulty; ++k) {
            const randomColumnIndex = Math.floor(Math.random() * array.length);
            array[i][randomColumnIndex] = replacement;
        }
    }
    return array;
};

/**
 * Repeat a function n number of time
 * @param {number} num - How many times a function must run
 * @param {function} fn - The function to repeat
 * @returns {void}
 * @author Wael Wahbeh
 */
const _repeat = (num) => (fn) => {
    if (num > 0) {
        fn();
        _repeat(num - 1)(fn);
    }
};

// @ts-nocheck
/**
 * Rotates array counter clock
 * @param  {array} array
 */
const _rotateArray = (array) => {
    if (!array || !array.length)
        return false;
    // Calculate the width and height of the Array
    let w = array.length || 0;
    let h = Array.isArray(array[0]) ? array[0].length : 0;
    // In case it is a zero matrix, no transpose needed.
    if (h === 0 || w === 0) {
        return [];
    }
    /**
     * @type {number} i Counter
     * @type {number} j Counter
     * @type {Array<number>} t Transposed data is stored in this array.
     */
    let i, j, t = [];
    // Loop through every item in the outer array (height)
    for (i = 0; i < h; i++) {
        // Insert a new row (array)
        t[i] = [];
        // Loop through every item per item in outer array (width)
        for (j = 0; j < w; j++) {
            // Save transposed data.
            t[i][j] = array[j][i];
        }
    }
    return t;
};

const _to = (promise) => {
    return promise.then((result) => _cleanResponse(result)).catch((err) => [err, null]);
};

const _To = (promise) => {
    return promise.then((result) => _cleanResponse(result)).catch((err) => [err, null]);
};

const a_or_an = function (field) {
    return /[aeiou]/.test(field.charAt(0)) ? 'an' : 'a';
};

/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
const Base64 = function (payload) {
    return btoa(unescape(encodeURIComponent(payload)));
};

/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
const toBase64 = function (payload) {
    return btoa(unescape(encodeURIComponent(payload)));
};

/**
 * Calculate Clock Drift used to calculate tile remaining before token expiration
 *
 * @param  {} iatAccessToken IAT
 * @param  {} iatIdToken
 */
const calculateClockDrift = (iatAccessToken, iatIdToken) => {
    const now = Math.floor(Date.now() / 1000);
    const iat = Math.min(iatAccessToken, iatIdToken);
    return now - iat;
};

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
const camelToSnake = (payload, hyphenated = false) => {
    return payload && payload[0].toLowerCase() + payload.slice(1, payload.length).replace(/[A-Z]/g, (letter) => `${hyphenated ? `-` : `_`}${letter.toLowerCase()}`);
};

// @ts-nocheck
const get$1 = (payload) => {
    const data = payload; /*?*/
    return data.data ? data.data : data; /*?*/
};
const _formatErrors = (err) => {
    var errors = {};
    get$1(err).forEach((err) => {
        if (get$1(err) && get$1(err)) {
            errors[err.path] = err.message;
        }
    });
    return errors;
};

/** generate random string
 * @name  generateId
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @param  {number} start 2 default
 * @param  {number} len   9 default
 * @return {string}
 */
const generateId = (start = 2, len = 9) => {
    return Math.random().toString(36).substr(start, len);
};

/**
Test isArray
*/
const isArray$2 = (payload) => {
    return Array.isArray(payload);
};

const isObject$2 = (payload) => {
    return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
};

// @ts-nocheck
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
const jsonToQueryString = (payload) => {
    return Object.keys(payload)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`)
        .join('&');
};

// @ts-nocheck
const meta = () => {
    const metaObj = { meta: {} };
    if (typeof undefined === 'undefined')
        return metaObj;
    if (typeof undefined['metaTags'] === 'undefined')
        return metaObj;
    if (undefined.metaTags.title) {
        // console.log('adding title')
        metaObj.title = undefined.metaTags.title;
        metaObj.meta.ogTitle = { name: 'og:title', content: undefined.metaTags.title };
        metaObj.meta.twitterTitle = {
            name: 'twitter:title',
            content: undefined.metaTags.title
        };
    }
    if (undefined.metaTags.description) {
        // console.log('adding desc')
        metaObj.meta.description = {
            name: 'description',
            content: undefined.metaTags.description
        };
        metaObj.meta.ogDescription = {
            name: 'og:description',
            content: undefined.metaTags.description
        };
        metaObj.meta.twitterDescription = {
            name: 'twitter:description',
            content: undefined.metaTags.description
        };
    }
    if (undefined.metaTags.url) {
        // console.log('adding url')
        metaObj.meta.ogUrl = { name: 'og:url', content: undefined.metaTags.url };
        metaObj.meta.twitterUrl = {
            name: 'twitter:url',
            content: undefined.metaTags.url
        };
        metaObj.meta.canonical = { rel: 'canonical', href: undefined.metaTags.url };
    }
    if (undefined.metaTags.image) {
        // console.log('adding image')
        metaObj.meta.ogImage = { name: 'og:image', content: undefined.metaTags.image };
        metaObj.meta.twitterImage = {
            name: 'twitter:image',
            content: undefined.metaTags.image
        };
    }
    return metaObj;
};

// @ts-nocheck
/** PWA Notification
 * Send Notification to Site
 * Browser only
 * @param  {string} notification -Message to send
 * @param  {string} Site -Website name
 */
const notifyMe = (notification, Site = 'NorthWestMeta.com!') => {
    document.addEventListener('DOMContentLoaded', () => {
        if ('Notification' in window) {
            if (Notification.permission === 'granted') {
                const payload = {
                    detail: `Welcome to ${Site}`,
                    bubbles: true,
                    cancelable: true
                };
                return new Notification(notification || payload);
            }
            else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(function (permission) {
                    if (permission === 'granted') {
                        return new Notification(notification || `Welcome to ${Site}`);
                    }
                });
            }
        }
    });
};

const get = (payload) => {
    const error = payload;
    return error.errors ? error.errors : payload;
};
const _parseErrors = (err) => {
    if (err && err.name) {
        return err.message || err.name;
    }
    else {
        return get(err);
    }
};

// @ts-nocheck
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
const queryStringToJson = (payload, toObject = true) => {
    if (!payload)
        return;
    var pairs = payload.slice(1).split('&');
    var result = {};
    pairs.forEach((pair) => {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return toObject ? JSON.parse(JSON.stringify(result)) : JSON.stringify(result);
};

const reParseString = (payload) => {
    return JSON.parse(JSON.stringify(payload));
};

/** Decode uri component
 * @name  resetString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload
 */
const resetString = (payload) => {
    return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)));
};

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
const snakeToCamel = (payload) => {
    return typeof payload !== 'string' ? payload : payload.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
};

/**
 * @param  {object} payload
 * @returns string||boolean||number
 */
const sniffId = (payload) => {
    const { id, _id, Id, iD } = payload;
    const newId = id || _id || Id || iD;
    return newId || false;
};

const isObject$1 = (payload) => {
    return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
};
const isArray$1 = (payload) => {
    return Array.isArray(payload);
};
const isFunction = (functionToCheck) => typeof functionToCheck === 'function';
const isValid$1 = (payload) => isObject$1(payload) || isArray$1(payload) || (typeof payload === 'string' && payload.trim().length > 0);
const _encrypt = (salt, text) => {
    if (isValid$1(salt) && isValid$1(text)) {
        switch (true) {
            case isObject$1(text):
                text = JSON.stringify(text);
                break;
            case isArray$1(text):
                text = JSON.stringify(text);
                break;
            case isFunction(text):
                text = text.toString();
                break;
        }
        const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
        const byteHex = (n) => ('0' + Number(n).toString(16)).substr(-2);
        const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
        return text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
    }
    throw 'Invalid salt or payload!';
};

const isObject = (payload) => {
    return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
};
const isArray = (payload) => {
    return Array.isArray(payload);
};
const isValid = (payload) => isObject(payload) || isArray(payload) || (typeof payload === 'string' && payload.trim().length > 0);
const _decrypt = (salt, encoded) => {
    if (isValid(encoded)) {
        const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
        const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
        return encoded
            .match(/.{1,2}/g)
            .map((hex) => parseInt(hex, 16))
            .map(applySaltToChar)
            .map((charCode) => String.fromCharCode(charCode))
            .join('');
    }
    throw 'Invalid salt or encoded!';
};

const waelioUtils = {
    _cleanResponse,
    _formatErrors,
    _equals,
    _hideRandom,
    _parseErrors,
    _repeat,
    _rotateArray,
    _to,
    _To,
    a_or_an,
    Base64,
    toBase64,
    calculateClockDrift,
    camelToSnake,
    generateId,
    isArray: isArray$2,
    isObject: isObject$2,
    jsonToQueryString,
    meta,
    notifyMe,
    queryStringToJson,
    reParseString,
    resetString,
    snakeToCamel,
    sniffId,
    _encrypt,
    _decrypt
};

exports.Base64 = Base64;
exports._To = _To;
exports._cleanResponse = _cleanResponse;
exports._decrypt = _decrypt;
exports._encrypt = _encrypt;
exports._equals = _equals;
exports._formatErrors = _formatErrors;
exports._hideRandom = _hideRandom;
exports._parseErrors = _parseErrors;
exports._repeat = _repeat;
exports._rotateArray = _rotateArray;
exports._to = _to;
exports.a_or_an = a_or_an;
exports.calculateClockDrift = calculateClockDrift;
exports.camelToSnake = camelToSnake;
exports.default = waelioUtils;
exports.generateId = generateId;
exports.isArray = isArray$2;
exports.isObject = isObject$2;
exports.jsonToQueryString = jsonToQueryString;
exports.meta = meta;
exports.notifyMe = notifyMe;
exports.queryStringToJson = queryStringToJson;
exports.reParseString = reParseString;
exports.resetString = resetString;
exports.snakeToCamel = snakeToCamel;
exports.sniffId = sniffId;
exports.toBase64 = toBase64;
exports.waelioUtils = waelioUtils;
//# sourceMappingURL=waelioUtils.cjs.map
