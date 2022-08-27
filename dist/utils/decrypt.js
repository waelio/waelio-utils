import applySaltToChar from '../helpers/applySaltToChar';
import { isValid } from './is_valid';
const _decrypt = (salt = 'salt', payload, asFunction = false) => {
    if (!payload && !!salt) {
        payload = salt;
        salt = 'salt';
    }
    if (isValid(salt) && isValid(payload)) {
        const decryptString = payload
            .match(/.{1,2}/g)
            .map((hex) => parseInt(hex, 16))
            .map((c) => applySaltToChar(c, salt))
            .map((charCode) => String.fromCharCode(charCode))
            .join('');
        return asFunction ? new Function('decryptString', 'return decryptString') : decryptString;
    }
    throw 'Invalid salt or payload!';
};
export default { _decrypt };
export { _decrypt };
//# sourceMappingURL=decrypt.js.map