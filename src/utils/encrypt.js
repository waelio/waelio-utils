import { isValid } from './is_valid';
import { isObject } from './is_object';
import { isArray } from './is_array';
import { isFunction } from './is_function';
export const _encrypt = (salt, payload) => {
    if (!payload && !!salt) {
        payload = salt;
        salt = 'salt';
    }
    if (isValid(salt) && (isValid(payload) || isFunction(payload))) {
        switch (true) {
            case isObject(payload) /*?*/:
                payload = JSON.stringify(payload);
                break;
            case isArray(payload) /*?*/:
                payload = JSON.stringify(payload);
                break;
            case isFunction(payload) /*?*/:
                payload = payload.toString();
                // payload = new Function('return ' + fString)();
                break;
            default:
                payload = payload.toString();
                break;
        }
        const textToChars = (payload) => payload.split('').map((c) => c.charCodeAt(0)); /*?*/
        const byteHex = (n) => ('0' + Number(n).toString(16)).substr(-2); /*?*/
        const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code); /*?*/
        return payload.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
    }
    throw 'Invalid salt or payload!';
    return 'payload';
};
//# sourceMappingURL=encrypt.js.map