import { isValid } from './is_valid';
import * as AES from 'crypto-js/aes';
import * as Utf8 from 'crypto-js/enc-utf8';

/**
 * decrypt (new)
 *
 * @param payload
 * @param salt
 */
export default function decrypt(payload: string, salt = 'secret key 007') {
  if (!isValid(payload)) return payload;

  const bytes = AES.decrypt(payload, salt);
  const originalText = bytes.toString(Utf8);
  return originalText;
}

export { decrypt };
