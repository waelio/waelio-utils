import { cleanResponse } from './src/utils/clean_response';
import { equals } from './src/utils/equals';
import { hideRandom } from './src/utils/hide_random';
import { repeat } from './src/utils/repeat';
import { rotateArray } from './src/utils/rotate_array';
import { to } from './src/utils/to';
import { get } from './src/utils/get';
import { a_or_an } from './src/utils/a_or_an';
import { toBase64 } from './src/utils/to_base_64';
import { calculateClockDrift } from './src/utils/calculate_clock_drift';
import { camelToSnake } from './src/utils/camel_to_snake';
import { generateId } from './src/utils/generate_id';
import { isArray } from './src/utils/is_array';
import { isObject } from './src/utils/is_object';
import { isFunction } from './src/utils/is_function';
import { isString } from './src/utils/is_string';
import { isValid } from './src/utils/is_valid';
import { isNumber } from './src/utils/is_number';
import { jsonToQueryString } from './src/utils/json_to_query_string';
import { notifyMe } from './src/utils/notify_me';
import { queryStringToJson } from './src/utils/query_string_to_json';
import { reParseString } from './src/utils/re_parse_string';
import { resetString } from './src/utils/reset_string';
import { snakeToCamel } from './src/utils/snake_to_camel';
import { sniffId } from './src/utils/sniff_id';
import { encrypt } from './src/utils/encrypt';
import { decrypt } from './src/utils/decrypt';


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

export const WaelioUtils: WaelioTools.Utils = ({
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
})



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
export default { WaelioUtils }