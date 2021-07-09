"use strict";
exports.__esModule = true;
exports._decrypt = void 0;
var is_valid_1 = require("./is_valid");
var _decrypt = function (salt, payload, asFunction) {
    if (salt === void 0) { salt = 'salt'; }
    if (asFunction === void 0) { asFunction = false; }
    if (!payload && !!salt) {
        payload = salt;
        salt = 'salt';
    }
    if (is_valid_1.isValid(salt) && is_valid_1.isValid(payload)) {
        var textToChars_1 = function (text) { return text.split('').map(function (c) { return c.charCodeAt(0); }); };
        var applySaltToChar = function (code) { return textToChars_1(salt).reduce(function (a, b) { return a ^ b; }, code); };
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
    return payload;
};
exports._decrypt = _decrypt;
