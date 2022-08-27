import applySaltToChar from '../helpers/applySaltToChar';
// import { encrypt } from './encrypt';
import { isValid } from './is_valid';
const decrypt = (salt = 'salt', payload, asFunction = false) => {
  if (!payload && !!salt) {
    payload = salt;
    salt = 'salt';
  }
  if (isValid(salt) && isValid(payload)) {
    const decryptString = payload
      .match(/.{1,2}/g)
      .map((hex: string) => parseInt(hex, 16))
      .map((c: number[]) => applySaltToChar(c, salt))
      .map((charCode: number) => String.fromCharCode(charCode))
      .join('');

    return asFunction ? new Function('decryptString', 'return decryptString') : decryptString;

  }
  throw 'Invalid salt or payload!';
};
export default { decrypt };
export { decrypt };
