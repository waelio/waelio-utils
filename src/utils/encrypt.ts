import * as CryptoJS from 'crypto-js';

export const encrypt = (payload: number | string | CryptoJS.lib.WordArray, salt = 'secret') => {
  const ourSalt = `${salt} key 007`;
  const ciphertext = CryptoJS.AES.encrypt(payload.toString(), ourSalt).toString();
  return ciphertext;
};
export default encrypt;
