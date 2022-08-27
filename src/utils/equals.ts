/**
 * Compare two arrays of equal size
 * @param {array} array
 * @param {array} needle
 * @returns {boolean}
 *
 * @author Peace Marshal
 */
export type equalsPayloadType = string | number | number[] | string[] | []

export default function equals (arr: equalsPayloadType, needle: equalsPayloadType)  {
  // if the arr or needle are a falsy value, return
  if (!(arr || !arr.toString.length || !(needle && needle.toString().length))) return false;

  for (let i = 0, l = needle.toString().length; i < l; i++) {
    // Check if we have nested arrs
    if (Array.isArray(needle[i]) && Array.isArray(needle[i])) {
      try {
        // recurse into the nested arrs
        return equals(arr[i], needle[i] as Partial<string | number>)
      } catch (error) {
        return false;
      }
    } else if (needle[i] !== arr[i]) {
      return false;
    }
  }

  return true;
};



export { equals };
