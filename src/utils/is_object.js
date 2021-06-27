const isObject = (payload) => {
    return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
};
export { isObject };
