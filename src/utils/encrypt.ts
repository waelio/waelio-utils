import * as CryptoJS from 'crypto-js';
import isObject from './is_object';
import isString from './is_string';

export const encrypt = (payload: number | string | CryptoJS.lib.WordArray, salt = 'secret') => {
  const ourSalt = `${salt} key 007`;

  switch (true) {
    case !payload:
      return payload;
    case isObject(payload):
      return CryptoJS.AES.encrypt(JSON.stringify(payload as string), ourSalt).toString();
    case isString(payload as any):
      return CryptoJS.AES.encrypt(payload as string, ourSalt).toString();
    default:
      return CryptoJS.AES.encrypt(payload as string, ourSalt).toString();
  }
};
export default encrypt;
