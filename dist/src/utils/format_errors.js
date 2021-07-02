// @ts-nocheck
import { get } from 'lodash';
const _formatErrors = (err) => {
    var errors = {};
    get(err, 'inner', []).forEach((err) => {
        if (get(err, 'path') && get(err, 'message')) {
            errors[err.path] = err.message;
        }
    });
    return errors;
};
export { _formatErrors };
//# sourceMappingURL=format_errors.js.map