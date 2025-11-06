/**
 * Creates an object composed of the picked object properties.
 * @param {object} object The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {object} Returns the new object.
 */
export const pick = <T extends object, K extends keyof T>(object: T, keys: K[]): Pick<T, K> => {
  if (object === null || object === undefined) {
    return {} as Pick<T, K>;
  }
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {} as Pick<T, K>);
};

export default pick;
