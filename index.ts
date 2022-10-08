import { isArray } from './src/utils/is_array';
import { isFunction } from './src/utils/is_function';
import { isNumber } from './src/utils/is_number';
import { isObject } from './src/utils/is_object';
import { isString } from './src/utils/is_string';
import { isValid } from './src/utils/is_valid';
import { a_or_an } from './src/utils/a_or_an';
import { calculateClockDrift } from './src/utils/calculate_clock_drift';
import { camelToSnake } from './src/utils/camel_to_snake';
import { cleanResponse } from './src/utils/clean_response';
import { config } from './src/utils/config';
import { decrypt } from './src/utils/decrypt';
import { encrypt } from './src/utils/encrypt';
import { equals } from './src/utils/equals';
import { generateId } from './src/utils/generate_id';
import { get } from './src/utils/get';
import { hideRandom } from './src/utils/hide_random';
import { jsonToQueryString } from './src/utils/json_to_query_string';
import { notifyMe } from './src/utils/notify_me';
import { queryStringToJson } from './src/utils/query_string_to_json';
import { reParseString } from './src/utils/re_parse_string';
import { repeat } from './src/utils/repeat';
import { resetString } from './src/utils/reset_string';
import { rotateArray } from './src/utils/rotate_array';
import { snakeToCamel } from './src/utils/snake_to_camel';
import { sniffId } from './src/utils/sniff_id';
import { to } from './src/utils/to';
import { toBase64 } from './src/utils/to_base_64';

// Expoerts
export { isArray };
export { isFunction };
export { isNumber };
export { isObject };
export { isString };
export { isValid };
export { a_or_an as _a_or_an };
export { calculateClockDrift as _calculateClockDrift };
export { camelToSnake as _camelToSnake };
export { cleanResponse as _cleanResponse };
export { config as _config };
export { decrypt as _decrypt };
export { encrypt as _encrypt };
export { equals as _equals };
export { generateId as _generateId };
export { get as _get };
export { hideRandom as _hideRandom };
export { jsonToQueryString as _jsonToQueryString };
export { notifyMe as _notifyMe };
export { queryStringToJson as _queryStringToJson };
export { reParseString as _reParseString };
export { repeat as _repeat };
export { resetString as _resetString };
export { rotateArray as _rotateArray };
export { snakeToCamel as _snakeToCamel };
export { sniffId as _sniffId };
export { to as _to };
export { toBase64 as _toBase64 };

export const WaelioUtils: WaelioTools.Utils = {
  isArray: isArray,
  isFunction: isFunction,
  isNumber: isNumber,
  isObject: isObject,
  isString: isString,
  isValid: isValid,
  _a_or_an: a_or_an,
  _calculateClockDrift: calculateClockDrift,
  _camelToSnake: camelToSnake,
  _cleanResponse: cleanResponse,
  _config: config,
  _decrypt: decrypt,
  _encrypt: encrypt,
  _equals: equals,
  _generateId: generateId,
  _get: get,
  _hideRandom: hideRandom,
  _jsonToQueryString: jsonToQueryString,
  _notifyMe: notifyMe,
  _queryStringToJson: queryStringToJson,
  _reParseString: reParseString,
  _repeat: repeat,
  _resetString: resetString,
  _rotateArray: rotateArray,
  _snakeToCamel: snakeToCamel,
  _sniffId: sniffId,
  _to: to,
  _toBase64: toBase64,
};

export namespace WaelioTools {
  export interface Utils {
    isArray: typeof isArray;
    isFunction: typeof isFunction;
    isNumber: typeof isNumber;
    isObject: typeof isObject;
    isString: typeof isString;
    isValid: typeof isValid;
    _a_or_an: typeof a_or_an;
    _calculateClockDrift: typeof calculateClockDrift;
    _camelToSnake: typeof camelToSnake;
    _cleanResponse: typeof cleanResponse;
    _config: typeof config;
    _decrypt: typeof decrypt;
    _encrypt: typeof encrypt;
    _equals: typeof equals;
    _generateId: typeof generateId;
    _get: typeof get;
    _hideRandom: typeof hideRandom;
    _jsonToQueryString: typeof jsonToQueryString;
    _notifyMe: typeof notifyMe;
    _queryStringToJson: typeof queryStringToJson;
    _reParseString: typeof reParseString;
    _repeat: typeof repeat;
    _resetString: typeof resetString;
    _rotateArray: typeof rotateArray;
    _snakeToCamel: typeof snakeToCamel;
    _sniffId: typeof sniffId;
    _to: typeof to;
    _toBase64: typeof toBase64;
  }
}
export default { WaelioUtils };
