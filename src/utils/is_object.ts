import { isArray } from "./is_array";

export const isObject = (payload: any): boolean => {
  return payload === Object(payload) && !isArray(payload) && typeof payload !== 'function';
};
export default { isObject };