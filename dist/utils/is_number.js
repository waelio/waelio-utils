import { isString } from './is_string';
export const isNumber = (payload) => !isString(payload) && !isNaN(parseFloat(payload)) && isFinite(payload);
export default { isNumber };
//# sourceMappingURL=is_number.js.map