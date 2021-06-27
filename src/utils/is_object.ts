
const isObject = (payload: any): boolean => {
  return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
};
export { isObject };
