/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param {object} object The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {object} Returns the new object.
 */
export const omit = <T extends object, K extends keyof T>(object: T, keys: K[]): Omit<T, K> => {
  if (object === null || object === undefined) {
    return {} as Omit<T, K>;
  }
  const newObject = { ...object };
  keys.forEach((key) => {
    delete newObject[key];
  });
  return newObject;
};

export default omit;
