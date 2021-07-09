"use strict";
exports.__esModule = true;
exports.isString = void 0;
var isString = function (payload) { return !!payload && typeof payload === 'string' && payload.trim().length > 0; };
exports.isString = isString;
