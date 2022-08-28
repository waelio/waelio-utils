'use strict';
exports.__esModule = true;
exports.decrypt = void 0;
var applySaltToChar_1 = require('../helpers/applySaltToChar');
// import { encrypt } from './encrypt';
var is_valid_1 = require('./is_valid');
function decrypt(salt, payload, asFunction) {
  var _a;
  if (salt === void 0) {
    salt = 'salt';
  }
  if (asFunction === void 0) {
    asFunction = false;
  }
  if (!payload) payload = salt;
  if (!salt) salt = 'salt';
  /* eslint-disable */
  if (!!(0, is_valid_1.isValid)(salt) && !!(0, is_valid_1.isValid)(payload)) {
    var decryptString =
      (_a = payload.match(/.{1,2}/g)) === null || _a === void 0
        ? void 0
        : _a
            .map(function (hex) {
              return parseInt(hex, 16);
            })
            .map(function (c) {
              return (0, applySaltToChar_1['default'])(c, salt);
            })
            .map(function (charCode) {
              return String.fromCharCode(charCode);
            })
            .join('');
    return asFunction ? new Function('decryptString', 'return decryptString') : decryptString;
  }
  throw 'Invalid salt or payload!';
}
exports['default'] = decrypt;
exports.decrypt = decrypt;
