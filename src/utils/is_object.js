"use strict";
exports.__esModule = true;
exports.isObject = void 0;
var isObject = function (payload) {
    return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
};
exports.isObject = isObject;
