"use strict";
exports.__esModule = true;
exports.sniffId = void 0;
/**
 * @param  {object} payload
 * @returns string||boolean||number
 */
var sniffId = function (payload) {
    var id = payload.id, _id = payload._id, Id = payload.Id, iD = payload.iD;
    var newId = id || _id || Id || iD;
    return newId || false;
};
exports.sniffId = sniffId;
exports["default"] = { sniffId: exports.sniffId };
