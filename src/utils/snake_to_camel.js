'use strict';
exports.__esModule = true;
exports.snakeToCamel = void 0;
/**
 * Function that converts snake_case or snake-case to camelCase "snakeCase"
 * Example IN: snake_case
 * Example Out: snakeCase
 * @name  snakeToCamel
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload QueryString
 * @returns {string}
 */
function snakeToCamel(payload) {
  return typeof payload !== 'string'
    ? payload
    : payload.replace(/([-_]\w)/g, function (g) {
        return g[1].toUpperCase();
      });
}
exports['default'] = snakeToCamel;
exports.snakeToCamel = snakeToCamel;
