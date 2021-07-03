"use strict";
exports.__esModule = true;
exports._parseErrors = void 0;
var get = function (payload) {
    var error = payload;
    return error.errors ? error.errors : payload;
};
var _parseErrors = function (err) {
    if (err && err.name) {
        return err.message || err.name;
    }
    else {
        return get(err);
    }
};
exports._parseErrors = _parseErrors;
