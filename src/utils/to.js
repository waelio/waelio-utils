"use strict";
exports.__esModule = true;
exports._To = exports._to = void 0;
var _get_1 = require("./_get");
var _to = function (promise) {
    return new Promise(function (resolve, reject) {
        return Promise.resolve(promise)
            .then(function (result) { return resolve([null, _get_1._Get(result)]); })["catch"](function (err) { return reject([err, null]); });
    });
};
exports._to = _to;
exports._To = exports._to;
