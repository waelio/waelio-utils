"use strict";
exports.__esModule = true;
exports.camelToSnake = void 0;
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
var camelToSnake = function (payload, hyphenated) {
    if (hyphenated === void 0) { hyphenated = false; }
    return payload && payload[0].toLowerCase() + payload.slice(1, payload.length).replace(/[A-Z]/g, function (letter) { return "".concat(hyphenated ? "-" : "_").concat(letter.toLowerCase()); });
};
exports.camelToSnake = camelToSnake;
exports["default"] = { camelToSnake: camelToSnake };
