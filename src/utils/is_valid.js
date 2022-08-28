'use strict';
exports.__esModule = true;
exports.isValid = void 0;
var is_object_1 = require('./is_object');
var is_array_1 = require('./is_array');
var is_string_1 = require('./is_string');
var is_number_1 = require('./is_number');
function isValid(payload) {
  return (
    (0, is_object_1.isObject)(payload) ||
    (0, is_array_1.isArray)(payload) ||
    (0, is_string_1.isString)(payload) ||
    (0, is_number_1.isNumber)(payload)
  );
}
exports['default'] = isValid;
exports.isValid = isValid;
