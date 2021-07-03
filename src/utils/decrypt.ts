const isObject = (payload: any): boolean => {
  return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
};
const isArray = (payload: any): boolean => {
  return Array.isArray(payload);
};
const isValid = (payload): boolean => isObject(payload) || isArray(payload) || (typeof payload === 'string' && payload.trim().length > 0);

export const _decrypt = (salt, encoded) => {
  if (isValid(encoded)) {
    const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join('');
  }
    throw 'Invalid salt or encoded!';
    return 'null';
};


