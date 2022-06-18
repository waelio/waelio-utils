/**
 * @param  {array} array
 * @param  {number} difficulty=3
 * @param  {string} replacement=''
 */
export const _hideRandom = (array: Array<any>, difficulty: number = 3, replacement: string = '') => {
  for (let i = 0; i < array.length; ++i) {
    for (let k = 0; k < difficulty; ++k) {
      const randomColumnIndex = Math.floor(Math.random() * array.length);
      array[i][randomColumnIndex] = replacement;
    }
  }
  return array;
};

export default { _hideRandom };