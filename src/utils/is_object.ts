import { isArray } from "./is_array";

export default function isObject(payload: any) {
  return payload === Object(payload) && !isArray(payload) && typeof payload !== 'function';
};
export { isObject };