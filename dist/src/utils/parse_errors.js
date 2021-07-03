const get = (payload) => {
    const error = payload;
    return error.errors ? error.errors : payload;
};
const _parseErrors = (err) => {
    if (err && err.name) {
        return err.message || err.name;
    }
    else {
        return get(err);
    }
};
export { _parseErrors };
//# sourceMappingURL=parse_errors.js.map