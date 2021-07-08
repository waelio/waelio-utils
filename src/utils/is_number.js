import { isString } from './is_string';
export const isNumber = (payload) => !isString(payload) && !isNaN(parseFloat(payload)) && isFinite(payload);
//# sourceMappingURL=is_number.js.map