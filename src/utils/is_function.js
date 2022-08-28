'use strict';
exports.__esModule = true;
exports.isFunction = void 0;
function isFunction(payload) {
  return payload && {}.toString.call(payload) === '[object Function]' && typeof payload === 'function';
}
exports['default'] = isFunction;
exports.isFunction = isFunction;
