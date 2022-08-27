"use strict";
exports.__esModule = true;
exports.toBase64 = void 0;
/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
function toBase64(payload) {
    return btoa(unescape(encodeURIComponent(payload)));
}
exports["default"] = toBase64;
exports.toBase64 = toBase64;
