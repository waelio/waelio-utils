export const isFunction = (payload) => payload && {}.toString.call(payload) === '[object Function]' && typeof payload === 'function';
export default { isFunction };
//# sourceMappingURL=is_function.js.map