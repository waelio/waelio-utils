"use strict";
// @ts-nocheck
exports.__esModule = true;
exports._formatErrors = void 0;
var get = function (payload) {
    var data = payload; /*?*/
    return data.data ? data.data : data; /*?*/
};
var _formatErrors = function (err) {
    var errors = {};
    get(err, 'inner', []).forEach(function (err) {
        if (get(err, 'path') && get(err, 'message')) {
            errors[err.path] = err.message;
        }
    });
    return errors;
};
exports._formatErrors = _formatErrors;
