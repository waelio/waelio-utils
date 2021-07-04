"use strict";
exports.__esModule = true;
exports._decrypt = void 0;
var isObject = function (payload) {
    return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
};
var isArray = function (payload) {
    return Array.isArray(payload);
};
var isValid = function (payload) { return isObject(payload) || isArray(payload) || (typeof payload === 'string' && payload.trim().length > 2); };
var _decrypt = function (salt, encoded) {
    if (isValid(encoded)) {
        var textToChars_1 = function (text) { return text.split('').map(function (c) { return c.charCodeAt(0); }); };
        var applySaltToChar = function (code) { return textToChars_1(salt).reduce(function (a, b) { return a ^ b; }, code); };
        return encoded
            .match(/.{1,2}/g)
            .map(function (hex) { return parseInt(hex, 16); })
            .map(applySaltToChar)
            .map(function (charCode) { return String.fromCharCode(charCode); })
            .join('');
    }
    throw 'Invalid salt or encoded!';
    return 'null';
};
exports._decrypt = _decrypt;
