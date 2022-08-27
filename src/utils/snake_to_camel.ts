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
export default function snakeToCamel(payload: string) {
  return typeof payload !== 'string' ? payload : payload.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
};
export { snakeToCamel };