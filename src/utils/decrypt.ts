import { isValid } from './is_valid';
// import isObject from './is_object';
import * as CryptoJS from 'crypto-js';

/**
 * decrypt (new)
 *
 * @param payload
 * @param salt
 */
export const decrypt = (payload: string, salt = 'secret') => {
  if (!isValid(payload)) return payload;
  const ourSecret = `${salt} key 007`;
  try {
    const bytes = CryptoJS.AES.decrypt(payload, ourSecret);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (_) {
    const bytes = CryptoJS.AES.decrypt(payload, ourSecret);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }
};

export default decrypt;
