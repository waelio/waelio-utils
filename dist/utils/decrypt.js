import applySaltToChar from '../helpers/applySaltToChar';
// import { encrypt } from './encrypt';
import { isValid } from './is_valid';
export default function decrypt(salt = 'salt', payload, asFunction = false) {
    if (!payload)
        payload = salt;
    if (!salt)
        salt = 'salt';
    /* eslint-disable */
    if (!!isValid(salt) && !!isValid(payload)) {
        const decryptString = payload.match(/.{1,2}/g)?.map((hex) => parseInt(hex, 16))
            .map((c) => applySaltToChar(c, salt)).map((charCode) => String.fromCharCode(charCode))
            .join('');
        return asFunction ? new Function('decryptString', 'return decryptString') : decryptString;
    }
    throw 'Invalid salt or payload!';
}
export { decrypt };
//# sourceMappingURL=decrypt.js.map