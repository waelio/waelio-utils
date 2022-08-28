/**
 * @param  {array} array
 * @param  {number} difficulty=3
 * @param  {string} replacement=''
 */
export default function hideRandom(array, difficulty = 3, replacement = '') {
    for (let i = 0; i < array.length; ++i) {
        for (let k = 0; k < difficulty; ++k) {
            const randomColumnIndex = Math.floor(Math.random() * array.length);
            array[i][randomColumnIndex] = replacement;
        }
    }
    return array;
}
;
export { hideRandom };
//# sourceMappingURL=hide_random.js.map