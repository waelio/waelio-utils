"use strict";
exports.__esModule = true;
exports.resetString = void 0;
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
exports["default"] = { resetString: exports.resetString };
