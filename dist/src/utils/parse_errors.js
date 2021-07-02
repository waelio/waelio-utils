// @ts-nocheck
import { map, get } from 'lodash';
const _parseErrors = (err) => {
    if (err && err.name) {
        return err.message || err.name;
    }
    else {
        return map(get(err, 'errors', []), (err) => err.message.replace('Path ', '').replace('`', '').replace('`', '')).join('<br>');
    }
};
export { _parseErrors };
//# sourceMappingURL=parse_errors.js.map