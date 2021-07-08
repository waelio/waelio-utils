import { isValid } from './is_valid';

export const _decrypt = (salt = 'salt', payload, asFunction = false) => {
  if (!payload && !!salt) {
    payload = salt;
    salt = 'salt';
  }
  if (isValid(salt) && isValid(payload)) {
    const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    const decryptString = payload
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join('');
    if(!asFunction) 
      return decryptString
    else {
      return new Function('return ' + decryptString)();
    }       
  }
  throw 'Invalid salt or payload!';
  return payload;
};
