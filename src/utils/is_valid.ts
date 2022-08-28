import { isObject } from './is_object';
import { isArray } from './is_array';
import { isString } from './is_string';
import { isNumber } from './is_number';

export default function isValid(payload: object | [] | string | number | any) {
  return isObject(payload) || isArray(payload) || isString(payload) || isNumber(payload);
}
export { isValid };
