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
 const camelToSnake = (payload: string, hyphenated: boolean = false): string => {
  return payload && payload[0].toLowerCase() + payload.slice(1, payload.length).replace(/[A-Z]/g, (letter) => `${hyphenated ? `-` : `_`}${letter.toLowerCase()}`);
};

export default { camelToSnake };
export { camelToSnake };