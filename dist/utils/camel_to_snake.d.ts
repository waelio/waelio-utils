/**
 * Function that converts camelCase to snake_case or snake-case "snake-case"
 * Example IN: snakeCase
 * Example Out: snake-case
 * Example Out: snake_case
 * @name  camelToSnake
 * @param {string} payload
 * @param {boolean} hyphenated controls the delimiter: true = "-" / false = "_"
 * @returns {string}
 */
declare const camelToSnake: (payload: string, hyphenated?: boolean) => string;
declare const _default: {
    camelToSnake: (payload: string, hyphenated?: boolean) => string;
};
export default _default;
export { camelToSnake };
//# sourceMappingURL=camel_to_snake.d.ts.map