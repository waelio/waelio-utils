"use strict";
exports.__esModule = true;
exports._repeat = void 0;
/**
 * Repeat a function n number of time
 * @param {number} num - How many times a function must run
 * @param {function} fn - The function to repeat
 * @returns {void}
 * @author Wael Wahbeh
 */
var _repeat = function (num) { return function (fn) {
    if (num > 0) {
        fn();
        _repeat(num - 1)(fn);
    }
}; };
exports._repeat = _repeat;
