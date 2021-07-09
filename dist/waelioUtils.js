"use strict";
exports.__esModule = true;
exports.waelioUtils = exports.toBase64 = exports.sniffId = exports.snakeToCamel = exports.resetString = exports.reParseString = exports.queryStringToJson = exports.notifyMe = exports.meta = exports.jsonToQueryString = exports.isValid = exports.isString = exports.isObject = exports.isNumber = exports.isFunction = exports.isArray = exports.generateId = exports.camelToSnake = exports.calculateClockDrift = exports.a_or_an = exports._to = exports._rotateArray = exports._repeat = exports._hideRandom = exports._equals = exports._encrypt = exports._decrypt = exports._cleanResponse = exports._To = exports._Get = exports.Base64 = void 0;
var isArray = function (payload) {
    return Array.isArray(payload);
};
exports.isArray = isArray;
var isObject = function (payload) {
    return payload === Object(payload) && !isArray(payload) && typeof payload !== 'function';
};
exports.isObject = isObject;
var _Get = function (data) {
    switch (true) {
        case !data:
            return false;
        case isObject(data):
            return data.data ? data.data : data;
        case isArray(data.data):
            if (data.data.length === 0)
                return data.data.data;
            else if (data.data.length === 1)
                return data.data.data[0];
            else if (data.data.length > 1)
                return data.data;
        case isArray(data):
            if (data.length === 0)
                return data;
            else if (data.length === 1)
                return data[0].data;
            else if (data.length > 1)
                return data;
        default:
            return data;
    }
    return data;
};
exports._Get = _Get;
var _cleanResponse = function (response) { return _Get(response) || response; };
exports._cleanResponse = _cleanResponse;
/**
 * Compare two arrays of equal size
 * @param {array} array
 * @param {array} needle
 * @returns {boolean}
 *
 * @author Wael Wahbeh
 */
var _equals = function (array, needle) {
    // if the array or needle are a falsy value, return
    if (!array || !needle)
        return false;
    // compare lengths - can save a lot of time
    if (needle.length != array.length)
        return false;
    for (var i = 0, l = needle.length; i < l; i++) {
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
exports._equals = _equals;
/**
 * @param  {array} array
 * @param  {number} difficulty=3
 * @param  {string} replacement=''
 */
var _hideRandom = function (array, difficulty, replacement) {
    if (difficulty === void 0) { difficulty = 3; }
    if (replacement === void 0) { replacement = ''; }
    for (var i = 0; i < array.length; ++i) {
        for (var k = 0; k < difficulty; ++k) {
            var randomColumnIndex = Math.floor(Math.random() * array.length);
            array[i][randomColumnIndex] = replacement;
        }
    }
    return array;
};
exports._hideRandom = _hideRandom;
/**
 * Repeat a function n number of time
 * @param {number} num - How many times a function must run
 * @param {function} fn - The function to repeat
 * @returns {void}
 * @author Wael Wahbeh
 */
var _repeat = function (num) { return function (fn) {
    if (num > 0) {
        fn();
        _repeat(num - 1)(fn);
    }
}; };
exports._repeat = _repeat;
// @ts-nocheck
/**
 * Rotates array counter clock
 * @param  {array} array
 */
var _rotateArray = function (array) {
    if (!array || !array.length)
        return false;
    // Calculate the width and height of the Array
    var w = array.length || 0;
    var h = Array.isArray(array[0]) ? array[0].length : 0;
    // In case it is a zero matrix, no transpose needed.
    if (h === 0 || w === 0) {
        return [];
    }
    /**
     * @type {number} i Counter
     * @type {number} j Counter
     * @type {Array<number>} t Transposed data is stored in this array.
     */
    var i, j, t = [];
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
exports._rotateArray = _rotateArray;
var _to = function (promise) {
    return new Promise(function (resolve, reject) {
        return Promise.resolve(promise)
            .then(function (result) { return resolve([null, _Get(result)]); })["catch"](function (err) { return reject([err, null]); });
    });
};
exports._to = _to;
var _To = _to;
exports._To = _To;
var a_or_an = function (field) {
    return /[aeiou]/.test(field.charAt(0)) ? 'an' : 'a';
};
exports.a_or_an = a_or_an;
/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
var Base64 = function (payload) {
    return btoa(unescape(encodeURIComponent(payload)));
};
exports.Base64 = Base64;
/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
var toBase64 = function (payload) {
    return btoa(unescape(encodeURIComponent(payload)));
};
exports.toBase64 = toBase64;
/**
 * Calculate Clock Drift used to calculate tile remaining before token expiration
 *
 * @param  {} iatAccessToken IAT
 * @param  {} iatIdToken
 */
var calculateClockDrift = function (iatAccessToken, iatIdToken) {
    var now = Math.floor(Date.now() / 1000);
    var iat = Math.min(iatAccessToken, iatIdToken);
    return now - iat;
};
exports.calculateClockDrift = calculateClockDrift;
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
var camelToSnake = function (payload, hyphenated) {
    if (hyphenated === void 0) { hyphenated = false; }
    return payload && payload[0].toLowerCase() + payload.slice(1, payload.length).replace(/[A-Z]/g, function (letter) { return "" + (hyphenated ? "-" : "_") + letter.toLowerCase(); });
};
exports.camelToSnake = camelToSnake;
/** generate random string
 * @name  generateId
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @param  {number} start 2 default
 * @param  {number} len   9 default
 * @return {string}
 */
var generateId = function (start, len) {
    if (start === void 0) { start = 2; }
    if (len === void 0) { len = 9; }
    return Math.random().toString(36).substr(start, len);
};
exports.generateId = generateId;
var isFunction = function (payload) { return payload && {}.toString.call(payload) === '[object Function]' && typeof payload === 'function'; };
exports.isFunction = isFunction;
var isString = function (payload) { return !!payload && typeof payload === 'string' && payload.trim().length > 0; };
exports.isString = isString;
var isNumber = function (payload) { return !isString(payload) && !isNaN(parseFloat(payload)) && isFinite(payload); };
exports.isNumber = isNumber;
var isValid = function (payload) { return isObject(payload) || isArray(payload) || isString(payload) || isNumber(payload); };
exports.isValid = isValid;
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
var jsonToQueryString = function (payload) {
    return Object.keys(payload)
        .map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(payload[key]); })
        .join('&');
};
exports.jsonToQueryString = jsonToQueryString;
// @ts-nocheck
var meta = function () {
    var metaObj = { meta: {} };
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
exports.meta = meta;
// @ts-nocheck
/** PWA Notification
 * Send Notification to Site
 * Browser only
 * @param  {string} notification -Message to send
 * @param  {string} Site -Website name
 */
var notifyMe = function (notification, Site) {
    if (Site === void 0) { Site = 'NorthWestMeta.com!'; }
    document.addEventListener('DOMContentLoaded', function () {
        if ('Notification' in window) {
            if (Notification.permission === 'granted') {
                var payload = {
                    detail: "Welcome to " + Site,
                    bubbles: true,
                    cancelable: true
                };
                return new Notification(notification || payload);
            }
            else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(function (permission) {
                    if (permission === 'granted') {
                        return new Notification(notification || "Welcome to " + Site);
                    }
                });
            }
        }
    });
};
exports.notifyMe = notifyMe;
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
var queryStringToJson = function (payload, toObject) {
    if (toObject === void 0) { toObject = true; }
    if (!payload)
        return;
    var pairs = payload.slice(1).split('&');
    var result = {};
    pairs.forEach(function (pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return toObject ? JSON.parse(JSON.stringify(result)) : JSON.stringify(result);
};
exports.queryStringToJson = queryStringToJson;
var reParseString = function (payload) {
    return JSON.parse(JSON.stringify(payload));
};
exports.reParseString = reParseString;
/** Decode uri component
 * @name  resetString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload
 */
var resetString = function (payload) {
    return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)));
};
exports.resetString = resetString;
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
var snakeToCamel = function (payload) {
    return typeof payload !== 'string' ? payload : payload.replace(/([-_]\w)/g, function (g) { return g[1].toUpperCase(); });
};
exports.snakeToCamel = snakeToCamel;
/**
 * @param  {object} payload
 * @returns string||boolean||number
 */
var sniffId = function (payload) {
    var id = payload.id, _id = payload._id, Id = payload.Id, iD = payload.iD;
    var newId = id || _id || Id || iD;
    return newId || false;
};
exports.sniffId = sniffId;
var _encrypt = function (salt, payload) {
    if (!payload && !!salt) {
        payload = salt;
        salt = 'salt';
    }
    if (isValid(salt) && (isValid(payload) || isFunction(payload))) {
        switch (true) {
            case isObject(payload) /*?*/:
                payload = JSON.stringify(payload);
                break;
            case isArray(payload) /*?*/:
                payload = JSON.stringify(payload);
                break;
            case isFunction(payload) /*?*/:
                payload = payload.toString();
                // payload = new Function('return ' + fString)();
                break;
            default:
                payload = payload.toString();
                break;
        }
        var textToChars_1 = function (payload) { return payload.split('').map(function (c) { return c.charCodeAt(0); }); }; /*?*/
        var byteHex = function (n) { return ('0' + Number(n).toString(16)).substr(-2); }; /*?*/
        var applySaltToChar = function (code) { return textToChars_1(salt).reduce(function (a, b) { return a ^ b; }, code); }; /*?*/
        return payload.split('').map(textToChars_1).map(applySaltToChar).map(byteHex).join('');
    }
    throw 'Invalid salt or payload!';
};
exports._encrypt = _encrypt;
var _decrypt = function (salt, payload, asFunction) {
    if (salt === void 0) { salt = 'salt'; }
    if (asFunction === void 0) { asFunction = false; }
    if (!payload && !!salt) {
        payload = salt;
        salt = 'salt';
    }
    if (isValid(salt) && isValid(payload)) {
        var textToChars_2 = function (text) { return text.split('').map(function (c) { return c.charCodeAt(0); }); };
        var applySaltToChar = function (code) { return textToChars_2(salt).reduce(function (a, b) { return a ^ b; }, code); };
        var decryptString = payload
            .match(/.{1,2}/g)
            .map(function (hex) { return parseInt(hex, 16); })
            .map(applySaltToChar)
            .map(function (charCode) { return String.fromCharCode(charCode); })
            .join('');
        if (!asFunction)
            return decryptString;
        else {
            return new Function('return ' + decryptString)();
        }
    }
    throw 'Invalid salt or payload!';
};
exports._decrypt = _decrypt;
var pkg = {
    _cleanResponse: _cleanResponse,
    _equals: _equals,
    _hideRandom: _hideRandom,
    _repeat: _repeat,
    _rotateArray: _rotateArray,
    _to: _to,
    _To: _To,
    _Get: _Get,
    a_or_an: a_or_an,
    Base64: Base64,
    toBase64: toBase64,
    calculateClockDrift: calculateClockDrift,
    camelToSnake: camelToSnake,
    generateId: generateId,
    isArray: isArray,
    isObject: isObject,
    isFunction: isFunction,
    isString: isString,
    isValid: isValid,
    isNumber: isNumber,
    jsonToQueryString: jsonToQueryString,
    meta: meta,
    notifyMe: notifyMe,
    queryStringToJson: queryStringToJson,
    reParseString: reParseString,
    resetString: resetString,
    snakeToCamel: snakeToCamel,
    sniffId: sniffId,
    _encrypt: _encrypt,
    _decrypt: _decrypt
};
exports.waelioUtils = pkg;
function waelioUtils() {
}
exports["default"] = waelioUtils;
//# sourceMappingURL=waelioUtils.ts.map
