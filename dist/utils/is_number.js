import { isString } from './is_string';
export default function isNumber(payload) {
    return !isString(payload) && !isNaN(parseFloat(payload)) && isFinite(payload);
}
export { isNumber };
//# sourceMappingURL=is_number.js.map