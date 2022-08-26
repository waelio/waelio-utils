import { _decrypt } from './decrypt'
import { isValid } from './is_valid';
import { isObject } from './is_object';
import { isArray } from './is_array';
import { isFunction } from './is_function';

const _encrypt = (salt, payload) => {
  if (!payload && !!salt) {
    payload = salt;
    salt = 'salt';
  }
  if (isValid(salt) && (isValid(payload) || isFunction(payload))) {
    switch (true) {
      case isObject(payload) /*?*/:
        payload = JSON.stringify(payload);
        break;
      case isArray(payload) /*?*/:
        payload = JSON.stringify(payload);
        break;
      case isFunction(payload) /*?*/:
        payload = payload.toString();
        // payload = new Function('return ' + fString)();
        break;
      default:
        payload = payload.toString();
        break;
    }
    const textToChars = (payload: string) => payload.split('').map((c: string) => c.charCodeAt(0)); /*?*/
    const byteHex = (n: string) => ('0' + Number(n).toString(16)).slice(-2); /*?*/
    const applySaltToChar = (code: number) => textToChars(salt).reduce((a, b) => a ^ b, code); /*?*/
    return payload.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
  }
  throw 'Invalid salt or payload!';
  return 'payload';
};

export default { _encrypt }
export { _encrypt }