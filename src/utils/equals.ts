/**
 * Compare two arrays of equal size
 * @param {array} array
 * @param {array} needle
 * @returns {boolean}
 *
 * @author Peace Marshal
 */
export type equalsPayloadType = string | number | number[] | string[] | []
const _equals = (arr: equalsPayloadType, needle: equalsPayloadType): boolean => {
  // if the arr or needle are a falsy value, return
  if (!(arr || !arr.toString.length || !(needle && needle.toString().length))) return false;

  for (let i = 0, l = needle.toString().length; i < l; i++) {
    // Check if we have nested arrs
    if (Array.isArray(needle[i]) && Array.isArray(needle[i])) {
      try {
        // recurse into the nested arrs
        return _equals(arr[i], needle[i] as Partial<string | number>)
      } catch (error) {
        return false;
      }
    } else if (needle[i] !== arr[i]) {
      return false;
    }
  }

  return true;
};
export default { _equals };
export { _equals };

// Testing - Thank you ​Quokka PRO 
// _equals('hello', 'hello') /*?*/
// _equals('hello', 'world') /*?*/
// _equals('hello', ['h', 'e', 'l', 'l', 'o']) /*?*/
// _equals('hello', ['h', 'e', 'l', 'l', 'o', 'w']) /*?*/
// _equals('hello', ['h', 'e', 'l', 'l', 'o', 'w', 'o']) /*?*/
// _equals('hello', ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r']) /*?*/
