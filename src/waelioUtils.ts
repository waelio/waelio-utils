import { cleanResponse } from './utils/clean_response';
import { equals } from './utils/equals';
import { hideRandom } from './utils/hide_random';
import { repeat } from './utils/repeat';
import { rotateArray } from './utils/rotate_array';
import { to } from './utils/to';
import { get } from './utils/get';
import { a_or_an } from './utils/a_or_an';
import { toBase64 } from './utils/to_base_64';
import { calculateClockDrift } from './utils/calculate_clock_drift';
import { camelToSnake } from './utils/camel_to_snake';
import { generateId } from './utils/generate_id';
import { isArray } from './utils/is_array';
import { isObject } from './utils/is_object';
import { isFunction } from './utils/is_function';
import { isString } from './utils/is_string';
import { isValid } from './utils/is_valid';
import { isNumber } from './utils/is_number';
import { jsonToQueryString } from './utils/json_to_query_string';
import { notifyMe } from './utils/notify_me';
import { queryStringToJson } from './utils/query_string_to_json';
import { reParseString } from './utils/re_parse_string';
import { resetString } from './utils/reset_string';
import { snakeToCamel } from './utils/snake_to_camel';
import { sniffId } from './utils/sniff_id';
import { encrypt } from './utils/encrypt';
import { decrypt } from './utils/decrypt';
import { config } from './utils/config';

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
export { config as _config };

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
  isArray: isArray,
  isObject: isObject,
  isFunction: isFunction,
  isString: isString,
  isValid: isValid,
  isNumber: isNumber,
  _jsonToQueryString: jsonToQueryString,
  _notifyMe: notifyMe,
  _queryStringToJson: queryStringToJson,
  _reParseString: reParseString,
  _resetString: resetString,
  _snakeToCamel: snakeToCamel,
  _sniffId: sniffId,
  _encrypt: encrypt,
  _decrypt: decrypt,
  _config:config,
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
    _config: typeof config;
    isArray: typeof isArray;
    isObject: typeof isObject;
    isFunction: typeof isFunction;
    isString: typeof isString;
    isValid: typeof isValid;
    isNumber: typeof isNumber;
  }
}
export default { WaelioUtils };
