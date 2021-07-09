"use strict";
exports.__esModule = true;
exports.isFunction = void 0;
var isFunction = function (payload) { return payload && {}.toString.call(payload) === '[object Function]' && typeof payload === 'function'; };
exports.isFunction = isFunction;
