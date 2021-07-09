"use strict";
// @ts-nocheck
exports.__esModule = true;
exports.queryStringToJson = void 0;
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
