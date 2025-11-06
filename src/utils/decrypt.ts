import { isValid } from './is_valid';
import * as CryptoJS from 'crypto-js';

/**
 * Securely decrypts a payload.
 *
 * @param ciphertext The encrypted string to decrypt.
 * @param secret The secret passphrase used for encryption.
 * @returns The original data (string, object, etc.), or the ciphertext if decryption fails.
 */
export const decrypt = (ciphertext: string, secret = 'secret') => {
  if (!isValid(ciphertext)) return ciphertext;

  let originalText: string;
  try {
    // Use the same salt and KDF parameters as in the encrypt function
    const salt = CryptoJS.enc.Hex.parse('45576534684557653468455765346845');

    const key = CryptoJS.PBKDF2(secret, salt, {
      keySize: 256 / 32,
      iterations: 1000,
    });

    const bytes = CryptoJS.AES.decrypt(ciphertext, key, {
      iv: salt,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    });

    originalText = bytes.toString(CryptoJS.enc.Utf8);

    // Heuristic: If decryption yields an empty string, distinguish between
    // (a) a legitimately encrypted empty string and (b) a decryption failure
    if (originalText === '') {
      const emptyCipher = CryptoJS.AES.encrypt('', key, {
        iv: salt,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
      }).toString();
      if (ciphertext !== emptyCipher) {
        return ciphertext; // Treat as failure; return original input
      }
    }
  } catch (_) {
    // This can happen if the ciphertext is malformed or the secret is wrong.
    return ciphertext;
  }

  try {
    // Parse only if it looks like a JSON object/array; leave strings/numbers/booleans as-is
    const trimmed = originalText.trim();
    const looksLikeJSON =
      (trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'));
    return looksLikeJSON ? JSON.parse(originalText) : originalText;
  } catch (e) {
    // ...but if that fails, it was just a plain string, so return it.
    return originalText;
  }
};

export default decrypt;
