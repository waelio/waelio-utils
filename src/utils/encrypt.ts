const isObject = (payload: any): boolean => {
  return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
};
const isArray = (payload: any): boolean => {
  return Array.isArray(payload);
};
const isFunction = (functionToCheck): boolean => typeof functionToCheck === 'function';
const isValid = (payload): boolean => isObject(payload) || isArray(payload) || (typeof payload === 'string' && payload.trim().length > 0);
const _encrypt = (salt, text) => {
  if (isValid(salt) && isValid(text)) {
    switch (true) {
      case isObject(text):
        text = JSON.stringify(text);
        break;
      case isArray(text):
        text = JSON.stringify(text);
        break;
      case isFunction(text):
        text = text.toString();
        break;
      default:
        break;
    }
    const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
    const byteHex = (n) => ('0' + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
  }
  throw 'Invalid salt or payload!';
  return 'null';
};

export { _encrypt };
