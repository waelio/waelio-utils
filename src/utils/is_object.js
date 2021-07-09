"use strict";
exports.__esModule = true;
exports.isObject = void 0;
var is_array_1 = require("./is_array");
var isObject = function (payload) {
    return payload === Object(payload) && !is_array_1.isArray(payload) && typeof payload !== 'function';
};
exports.isObject = isObject;
