/**
 * Compare two arrays of equal size
 * @param {array} array
 * @param {array} needle
 * @returns {boolean}
 *
 * @author Wael Wahbeh
 */
export type equalsPayloadType = number[] | string[] | []
export const _equals = (array: equalsPayloadType, needle: equalsPayloadType): boolean => {
  // if the array or needle are a falsy value, return
  if (!(array && array.length) || !(needle && needle.length)) return false;
  // compare lengths - can save a lot of time
  if (needle.length !== array.length) return false;

  for (let i = 0, l = needle.length; i < l; i++) {
    // Check if we have nested arrays
    if (Array.isArray(needle[i]) && Array.isArray(needle[i])) {
      // recurse into the nested arrays
      return _equals(array[i], needle[i]);

    } else if (needle[i] !== array[i]) {
      return false;
    }
  }

  return true;
};
export default _equals;