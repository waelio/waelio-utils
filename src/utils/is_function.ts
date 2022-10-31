export default function isFunction(payload): any {
  return payload && {}.toString.call(payload) === '[object Function]' && typeof payload === 'function';
}

export { isFunction };
