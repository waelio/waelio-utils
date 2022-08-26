"use strict";
exports.__esModule = true;
exports._To = void 0;
var _get_1 = require("./_get");
var _to = function (promise) {
    return new Promise(function (resolve, reject) {
        return Promise.resolve(promise)
            .then(function (result) { return resolve([null, (0, _get_1._Get)(result)]); })["catch"](function (err) { return reject([err, null]); });
    });
};
var _To = _to;
exports._To = _To;
exports["default"] = { _To: _to };
