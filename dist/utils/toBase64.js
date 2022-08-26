"use strict";
exports.__esModule = true;
exports.toBase64 = void 0;
/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
var toBase64 = function (payload) {
    return btoa(unescape(encodeURIComponent(payload)));
};
exports.toBase64 = toBase64;
exports["default"] = { toBase64: exports.toBase64 };
