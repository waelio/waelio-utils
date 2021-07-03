"use strict";
// @ts-nocheck
exports.__esModule = true;
exports.jsonToQueryString = void 0;
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
