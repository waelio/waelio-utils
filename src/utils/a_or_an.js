"use strict";
exports.__esModule = true;
exports.a_or_an = void 0;
var a_or_an = function (field) {
    return /[aeiou]/.test(field.charAt(0)) ? 'an' : 'a';
};
exports.a_or_an = a_or_an;
