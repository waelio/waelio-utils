const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
] /*?*/

Array.prototype._rotate = function () {
  const Self = this
  let w = Self.length || 0
  let h = Self[0] instanceof Array ? Self[0].length : 0

  // In case it is a zero matrix, no transpose needed.
  if (h === 0 || w === 0) {
    return []
  }

  /**
   * @type {number} i Counter
   * @type {number} j Counter
   * @type {Array<number>} t Transposed data is stored in this array.
   */
  let i,
    j,
    t = []

  // Loop through every item in the outer array (height)
  for (i = 0; i < h; i++) {
    // Insert a new row (array)
    t[i] = []

    // Loop through every item per item in outer array (width)
    for (j = 0; j < w; j++) {
      // Save transposed data.
      t[i][j] = Self[j][i]
    }
  }

  return t
}
Array.prototype._rotate().reverse = function () {}

a /*? */
a._rotate() /*? */
a._rotate().reverse() /*? */
