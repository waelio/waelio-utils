'use strict';
exports.__esModule = true;
exports.hideRandom = void 0;
/**
 * @param  {array} array
 * @param  {number} difficulty=3
 * @param  {string} replacement=''
 */
function hideRandom(array, difficulty, replacement) {
  if (difficulty === void 0) {
    difficulty = 3;
  }
  if (replacement === void 0) {
    replacement = '';
  }
  for (var i = 0; i < array.length; ++i) {
    for (var k = 0; k < difficulty; ++k) {
      var randomColumnIndex = Math.floor(Math.random() * array.length);
      array[i][randomColumnIndex] = replacement;
    }
  }
  return array;
}
exports['default'] = hideRandom;
exports.hideRandom = hideRandom;
