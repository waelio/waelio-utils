"use strict";
exports.__esModule = true;
exports._to = void 0;
var clean_response_1 = require("./clean_response");
var _to = function (promise) {
    return promise.then(function (result) { return clean_response_1._cleanResponse(result); })["catch"](function (err) { return [err, null]; });
};
exports._to = _to;
