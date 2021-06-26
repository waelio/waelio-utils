const { isArray } = require('./is_array');

const isObject = (payload: any): boolean => {
  return payload === Object(payload) && !isArray(payload) && typeof payload !== 'function';
};
export { isObject };
