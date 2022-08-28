import applySaltToChar from '../helpers/applySaltToChar';
// import { encrypt } from './encrypt';
import { isValid } from './is_valid';
export default function decrypt(salt: string = 'salt', payload: string, asFunction: boolean = false) {
  if (!payload) payload = salt;
  if (!salt) salt = 'salt';

  /* eslint-disable */
  if (!!isValid(salt) && !!isValid(payload)) {
    const decryptString: string | undefined = payload
      .match(/.{1,2}/g)
      ?.map((hex: string) => parseInt(hex, 16))
      .map((c) => applySaltToChar(c, salt))
      .map((charCode: number) => String.fromCharCode(charCode))
      .join('');

    return asFunction ? new Function('decryptString', 'return decryptString') : decryptString;
  }
  throw 'Invalid salt or payload!';
}
export { decrypt };
