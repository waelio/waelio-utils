"use strict";
exports.__esModule = true;
exports._encrypt = void 0;
var is_valid_1 = require("./is_valid");
var is_object_1 = require("./is_object");
var is_array_1 = require("./is_array");
var is_function_1 = require("./is_function");
var _encrypt = function (salt, payload) {
    if (!payload && !!salt) {
        payload = salt;
        salt = 'salt';
    }
    if (is_valid_1.isValid(salt) && (is_valid_1.isValid(payload) || is_function_1.isFunction(payload))) {
        switch (true) {
            case is_object_1.isObject(payload) /*?*/:
                payload = JSON.stringify(payload);
                break;
            case is_array_1.isArray(payload) /*?*/:
                payload = JSON.stringify(payload);
                break;
            case is_function_1.isFunction(payload) /*?*/:
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
    return 'payload';
};
exports._encrypt = _encrypt;
