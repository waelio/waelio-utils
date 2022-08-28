import { isString } from './is_string';

export default function isNumber(payload: any) {
  return !isString(payload) && !isNaN(parseFloat(payload)) && isFinite(payload);
}
export { isNumber };
