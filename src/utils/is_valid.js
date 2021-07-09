"use strict";
exports.__esModule = true;
exports.isValid = void 0;
var is_object_1 = require("./is_object");
var is_array_1 = require("./is_array");
var is_string_1 = require("./is_string");
var is_number_1 = require("./is_number");
var isValid = function (payload) { return is_object_1.isObject(payload) || is_array_1.isArray(payload) || is_string_1.isString(payload) || is_number_1.isNumber(payload); };
exports.isValid = isValid;
