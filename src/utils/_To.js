"use strict";
exports.__esModule = true;
exports._To = void 0;
var clean_response_1 = require("./clean_response");
var _To = function (promise) {
    return promise.then(function (result) { return clean_response_1._cleanResponse(result); })["catch"](function (err) { return [err, null]; });
};
exports._To = _To;
