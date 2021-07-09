"use strict";
exports.__esModule = true;
exports.Base64 = void 0;
/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
var Base64 = function (payload) {
    return btoa(unescape(encodeURIComponent(payload)));
};
exports.Base64 = Base64;
