const get = (payload) => {
    const error = payload;
    return error.errors ? error.errors : payload;
};
export const _parseErrors = (err) => {
    if (err && err.name) {
        return err.message || err.name;
    }
    else {
        return get(err);
    }
};
//# sourceMappingURL=parse_errors.js.map