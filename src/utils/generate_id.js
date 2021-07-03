"use strict";
exports.__esModule = true;
exports.generateId = void 0;
/** generate random string
 * @name  generateId
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @param  {number} start 2 default
 * @param  {number} len   9 default
 * @return {string}
 */
var generateId = function (start, len) {
    if (start === void 0) { start = 2; }
    if (len === void 0) { len = 9; }
    return Math.random().toString(36).substr(start, len);
};
exports.generateId = generateId;
