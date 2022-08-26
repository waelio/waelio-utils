"use strict";
exports.__esModule = true;
exports._decrypt = void 0;
var applySaltToChar_1 = require("../helpers/applySaltToChar");
var is_valid_1 = require("./is_valid");
var _decrypt = function (salt, payload, asFunction) {
    if (salt === void 0) { salt = 'salt'; }
    if (asFunction === void 0) { asFunction = false; }
    if (!payload && !!salt) {
        payload = salt;
        salt = 'salt';
    }
    if ((0, is_valid_1.isValid)(salt) && (0, is_valid_1.isValid)(payload)) {
        var decryptString = payload
            .match(/.{1,2}/g)
            .map(function (hex) { return parseInt(hex, 16); })
            .map(function (c) { return (0, applySaltToChar_1["default"])(c, salt); })
            .map(function (charCode) { return String.fromCharCode(charCode); })
            .join('');
        return asFunction ? new Function('decryptString', 'return decryptString') : decryptString;
    }
    throw 'Invalid salt or payload!';
};
exports._decrypt = _decrypt;
exports["default"] = { _decrypt: _decrypt };
