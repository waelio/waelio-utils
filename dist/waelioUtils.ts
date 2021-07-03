var waelioUtils = (function () {
  'use strict';

  /**
   * Compare two arrays of equal size
   * @param {array} array
   * @param {array} needle
   * @returns {boolean}
   *
   * @author Wael Wahbeh
   */
  const _equals = (array, needle) => {
      // if the array or needle are a falsy value, return
      if (!array || !needle)
          return false;
      // compare lengths - can save a lot of time
      if (needle.length != array.length)
          return false;
      for (let i = 0, l = needle.length; i < l; i++) {
          // Check if we have nested arrays
          if (Array.isArray(needle[i]) && Array.isArray(needle[i])) {
              // recurse into the nested arrays
              return _equals(array[i], needle[i]);
          }
          else if (needle[i] !== array[i]) {
              return false;
          }
      }
      return true;
  };
  _equals([1, 2, 3], [1, 2, 3, 4]);

  // const waelioUtils = {
  //   _cleanResponse,
  //   _formatErrors,
  //   _equals,
  //   _hideRandom,
  //   _parseErrors,
  //   _repeat,
  //   _rotateArray,
  //   _to,
  //   _To,
  //   a_or_an,
  //   Base64,
  //   toBase64,
  //   calculateClockDrift,
  //   camelToSnake,
  //   generateId,
  //   isArray,
  //   isObject,
  //   jsonToQueryString,
  //   meta,
  //   notifyMe,
  //   queryStringToJson,
  //   reParseString,
  //   resetString,
  //   snakeToCamel,
  //   sniffId,
  //     _encrypt,
  //   _decrypt
  // };
  function waelioUtils() {
  }

  return waelioUtils;

}());
//# sourceMappingURL=waelioUtils.ts.map
