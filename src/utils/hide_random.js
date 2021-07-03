"use strict";
exports.__esModule = true;
exports._hideRandom = void 0;
/**
 * @param  {array} array
 * @param  {number} difficulty=3
 * @param  {string} replacement=''
 */
var _hideRandom = function (array, difficulty, replacement) {
    if (difficulty === void 0) { difficulty = 3; }
    if (replacement === void 0) { replacement = ''; }
    for (var i = 0; i < array.length; ++i) {
        for (var k = 0; k < difficulty; ++k) {
            var randomColumnIndex = Math.floor(Math.random() * array.length);
            array[i][randomColumnIndex] = replacement;
        }
    }
    return array;
};
exports._hideRandom = _hideRandom;
