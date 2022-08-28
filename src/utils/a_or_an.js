'use strict';
exports.__esModule = true;
exports.a_or_an = void 0;
function a_or_an(field) {
  return /[aeiou]/.test(field.charAt(0)) ? 'an' : 'a';
}
exports['default'] = a_or_an;
exports.a_or_an = a_or_an;
