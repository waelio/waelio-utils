import { isString } from './is_string'

export const isNumber = (payload):boolean => !isString(payload) && !isNaN(parseFloat(payload)) && isFinite(payload);
