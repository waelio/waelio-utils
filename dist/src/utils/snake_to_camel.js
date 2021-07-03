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
const snakeToCamel = (payload) => {
    return typeof payload !== 'string' ? payload : payload.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
};
export { snakeToCamel };
//# sourceMappingURL=snake_to_camel.js.map