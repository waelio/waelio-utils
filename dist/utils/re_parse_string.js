"use strict";
exports.__esModule = true;
exports.reParseString = void 0;
var reParseString = function (payload) {
    return JSON.parse(JSON.stringify(payload));
};
exports.reParseString = reParseString;
exports["default"] = exports.reParseString;
