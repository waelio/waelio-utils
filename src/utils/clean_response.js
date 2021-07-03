"use strict";
exports.__esModule = true;
exports._cleanResponse = void 0;
var reParseString = function (payload) { return (payload ? JSON.parse(JSON.stringify(payload)) : payload); };
var get = function (payload) {
    var data = payload; /*?*/
    return data.data ? data.data : data; /*?*/
};
var _cleanResponse = function (response) {
    var data = get(response); /*?*/
    return !!data ? (data.length && data.length > 1 ? data : reParseString(data)) : response;
};
exports._cleanResponse = _cleanResponse;
