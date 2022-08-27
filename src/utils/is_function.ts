export default function isFunction(payload) { return payload && {}.toString.call(payload) === '[object Function]' && typeof payload === 'function' }

export  { isFunction }