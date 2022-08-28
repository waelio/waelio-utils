import { cleanResponse } from './clean_response';
import { equals } from './equals';
import { hideRandom } from './hide_random';
import { repeat } from './repeat';
import { rotateArray } from './rotate_array';
import { to } from './to';
import { get } from './get';
import { a_or_an } from './a_or_an';
import { toBase64 } from './to_base_64';
import { calculateClockDrift } from './calculate_clock_drift';
import { camelToSnake } from './camel_to_snake';
import { generateId } from './generate_id';
import { isArray } from './is_array';
import { isObject } from './is_object';
import { isFunction } from './is_function';
import { isString } from './is_string';
import { isValid } from './is_valid';
import { isNumber } from './is_number';
import { jsonToQueryString } from './json_to_query_string';
import { notifyMe } from './notify_me';
import { queryStringToJson } from './query_string_to_json';
import { reParseString } from './re_parse_string';
import { resetString } from './reset_string';
import { snakeToCamel } from './snake_to_camel';
import { sniffId } from './sniff_id';
import { encrypt } from './encrypt';
import { decrypt } from './decrypt';

// Expoerts
export { cleanResponse as _cleanResponse };
export { equals as _equals };
export { hideRandom as _hideRandom };
export { repeat as _repeat };
export { rotateArray as _rotateArray };
export { to as _to };
export { get as _get };
export { a_or_an as _a_or_an };
export { toBase64 as _toBase64 };
export { calculateClockDrift as _calculateClockDrift };
export { camelToSnake as _camelToSnake };
export { generateId as _generateId };
export { isArray };
export { isObject };
export { isFunction };
export { isString };
export { isValid };
export { isNumber };
export { jsonToQueryString as _jsonToQueryString };
export { notifyMe as _notifyMe };
export { queryStringToJson as _queryStringToJson };
export { reParseString as _reParseString };
export { resetString as _resetString };
export { snakeToCamel as _snakeToCamel };
export { sniffId as _sniffId };
export { encrypt as _encrypt };
export { decrypt as _decrypt };

export const WaelioUtils: WaelioTools.Utils = {
  _cleanResponse: cleanResponse,
  _equals: equals,
  _hideRandom: hideRandom,
  _repeat: repeat,
  _rotateArray: rotateArray,
  _to: to,
  _get: get,
  _a_or_an: a_or_an,
  _toBase64: toBase64,
  _calculateClockDrift: calculateClockDrift,
  _camelToSnake: camelToSnake,
  _generateId: generateId,
  _isArray: isArray,
  _isObject: isObject,
  _isFunction: isFunction,
  _isString: isString,
  _isValid: isValid,
  _isNumber: isNumber,
  _jsonToQueryString: jsonToQueryString,
  _notifyMe: notifyMe,
  _queryStringToJson: queryStringToJson,
  _reParseString: reParseString,
  _resetString: resetString,
  _snakeToCamel: snakeToCamel,
  _sniffId: sniffId,
  _encrypt: encrypt,
  _decrypt: decrypt,
};

export namespace WaelioTools {
  export interface Utils {
    _cleanResponse: typeof cleanResponse;
    _hideRandom: typeof hideRandom;
    _repeat: typeof repeat;
    _rotateArray: typeof rotateArray;
    _to: typeof to;
    _sniffId: typeof sniffId;
    _get: typeof get;
    _toBase64: typeof toBase64;
    _calculateClockDrift: typeof calculateClockDrift;
    _generateId: typeof generateId;
    _notifyMe: typeof notifyMe;
    _jsonToQueryString: typeof jsonToQueryString;
    _queryStringToJson: typeof queryStringToJson;
    _reParseString: typeof reParseString;
    _resetString: typeof resetString;
    _camelToSnake: typeof camelToSnake;
    _snakeToCamel: typeof snakeToCamel;
    _equals: typeof equals;
    _a_or_an: typeof a_or_an;
    _encrypt: typeof encrypt;
    _decrypt: typeof decrypt;
    _isArray: typeof isArray;
    _isObject: typeof isObject;
    _isFunction: typeof isFunction;
    _isString: typeof isString;
    _isValid: typeof isValid;
    _isNumber: typeof isNumber;
  }
}
export default { WaelioUtils };
