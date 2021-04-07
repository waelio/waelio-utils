import { sniffId, meta, notifyMe, generateId, reParseString, Base64, calculateClockDrift, isObject, isArray, camelToSnake, snakeToCamel, resetString, queryStringToJson, jsonToQueryString } from './src/utils';

export { sniffId, meta, notifyMe, generateId, reParseString, Base64, calculateClockDrift, isObject, isArray, camelToSnake, snakeToCamel, resetString, queryStringToJson, jsonToQueryString }
export default {
  input: './src/utils',
  output: 'dist/waelioUtils.js',
  format: 'esm',
  exports: 'named', /** Disable warning for default imports */
  sourcemap: true,
};
