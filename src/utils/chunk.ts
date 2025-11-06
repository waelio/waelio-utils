/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining elements.
 * @param {T[]} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {T[][]} Returns the new array of chunks.
 */
export const chunk = <T>(array: T[], size = 1): T[][] => {
    size = Math.max(Math.floor(size), 0);
    const length = array == null ? 0 : array.length;
    if (!length || size < 1) {
        return [];
    }
    const result: T[][] = [];
    for (let i = 0; i < length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

export default chunk;
