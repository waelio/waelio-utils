"use strict";
exports.__esModule = true;
exports.isNumber = void 0;
var is_string_1 = require("./is_string");
function isNumber(payload) {
    return !(0, is_string_1.isString)(payload) && !isNaN(parseFloat(payload)) && isFinite(payload);
}
exports["default"] = isNumber;
exports.isNumber = isNumber;
