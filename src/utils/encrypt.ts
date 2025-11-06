import * as CryptoJS from 'crypto-js';
import isObject from './is_object';
import isString from './is_string';

/**
 * Securely encrypts a payload using AES-CBC with PBKDF2-derived key.
 * Mirrors the parameters used in decrypt() to ensure round-trip.
 */
export const encrypt = (payload: unknown, secret = 'secret') => {
  if (payload === null || typeof payload === 'undefined') return null;

  // Align with decrypt(): fixed salt used for IV and KDF salt
  const salt = CryptoJS.enc.Hex.parse('45576534684557653468455765346845');
  const key = CryptoJS.PBKDF2(secret, salt, {
    keySize: 256 / 32,
    iterations: 1000,
  });

  const message = Array.isArray(payload)
    ? JSON.stringify(payload)
    : isObject(payload)
    ? JSON.stringify(payload as any)
    : isString(payload as any)
    ? (payload as string)
    : String(payload as any);

  return CryptoJS.AES.encrypt(message, key, {
    iv: salt,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  }).toString();
};
export default encrypt;
