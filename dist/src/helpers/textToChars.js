"use strict";
exports.__esModule = true;
exports.textToChars = void 0;
function textToChars(p) {
    return p.split('').map(function (c) { return c.charCodeAt(0); });
}
exports["default"] = textToChars;
exports.textToChars = textToChars;
// Testing - Thank you ​Quokka PRO
// textToChars('hello') /*?*/
