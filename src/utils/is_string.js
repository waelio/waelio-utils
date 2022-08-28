'use strict';
exports.__esModule = true;
exports.isString = void 0;
function isString(payload) {
  return !!payload && typeof payload === 'string' && payload.trim().length > 0;
}
exports['default'] = isString;
exports.isString = isString;
