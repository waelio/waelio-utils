'use strict';
// @ts-nocheck
exports.__esModule = true;
exports.rotateArray = void 0;
/**
 * Rotates array counter clock
 * @param  {array} array
 */
function rotateArray(array) {
  if (!array || !array.length) return false;
  // Calculate the width and height of the Array
  var w = array.length || 0;
  var h = Array.isArray(array[0]) ? array[0].length : 0;
  // In case it is a zero matrix, no transpose needed.
  if (h === 0 || w === 0) {
    return [];
  }
  /**
   * @type {number} i Counter
   * @type {number} j Counter
   * @type {Array<number>} t Transposed data is stored in this array.
   */
  var i,
    j,
    t = [];
  // Loop through every item in the outer array (height)
  for (i = 0; i < h; i++) {
    // Insert a new row (array)
    t[i] = [];
    // Loop through every item per item in outer array (width)
    for (j = 0; j < w; j++) {
      // Save transposed data.
      t[i][j] = array[j][i];
    }
  }
  return t;
}
exports['default'] = rotateArray;
exports.rotateArray = rotateArray;
