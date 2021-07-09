"use strict";
exports.__esModule = true;
exports._Get = void 0;
var is_object_1 = require("./is_object");
var is_array_1 = require("./is_array");
var _Get = function (data) {
    switch (true) {
        case !data:
            return false;
        case is_object_1.isObject(data):
            return data.data ? data.data : data;
        case is_array_1.isArray(data.data):
            if (data.data.length === 0)
                return data.data.data;
            else if (data.data.length === 1)
                return data.data.data[0];
            else if (data.data.length > 1)
                return data.data;
        case is_array_1.isArray(data):
            if (data.length === 0)
                return data;
            else if (data.length === 1)
                return data[0].data;
            else if (data.length > 1)
                return data;
        default:
            return data;
    }
    return data;
};
exports._Get = _Get;
