"use strict";
exports.__esModule = true;
exports.repeat = void 0;
/**
 * Repeat a function n number of time
 * @param num number - How many times a function must run
 * @param fn Function- The function to repeat
 * @returns {void}
 * @author Wael Wahbeh
 */
function repeat(num) {
    return function (fn) {
        if (num > 0) {
            fn();
            repeat(num - 1)(fn);
        }
    };
}
exports["default"] = repeat;
exports.repeat = repeat;
;
