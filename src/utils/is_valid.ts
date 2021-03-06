import { isObject } from './is_object'
import { isArray } from './is_array'
import { isString } from'./is_string'
import { isNumber } from './is_number';


export const isValid = (payload): boolean => isObject(payload) || isArray(payload) || isString(payload) || isNumber(payload)
