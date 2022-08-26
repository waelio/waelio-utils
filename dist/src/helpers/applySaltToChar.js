"use strict";
exports.__esModule = true;
exports.applySaltToChar = void 0;
var textToChars_1 = require("./textToChars");
function applySaltToChar(c, salt) {
    return (0, textToChars_1["default"])(salt).reduce(function (a, b) { return a ^ b; }, c);
}
exports["default"] = applySaltToChar;
exports.applySaltToChar = applySaltToChar;
