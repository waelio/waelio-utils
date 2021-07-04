'use strict';
exports.__esModule = true;
exports._encrypt = void 0;
var isObject = function (payload) {
  return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
};
var isArray = function (payload) {
  return Array.isArray(payload);
};
var isFunction = function (functionToCheck) {
  return typeof functionToCheck === 'function';
};
var isValid = function (payload) {
  return isObject(payload) || isArray(payload) || (typeof payload === 'string' && payload.trim().length > 2);
};
var _encrypt = function (salt, text) {
  if (isValid(salt) && isValid(text)) {
    switch (true) {
      case isObject(text):
        text = JSON.stringify(text);
        break;
      case isArray(text):
        text = JSON.stringify(text);
        break;
      case isFunction(text):
        text = text.toString();
        break;
      default:
        break;
    }
    var textToChars_1 = function (text) {
      return text.split('').map(function (c) {
        return c.charCodeAt(0);
      });
    };
    var byteHex = function (n) {
      return ('0' + Number(n).toString(16)).substr(-2);
    };
    var applySaltToChar = function (code) {
      return textToChars_1(salt).reduce(function (a, b) {
        return a ^ b;
      }, code);
    };
    return text.split('').map(textToChars_1).map(applySaltToChar).map(byteHex).join('');
  }
  throw 'Invalid salt or payload!';
  return 'null';
};
exports._encrypt = _encrypt;
