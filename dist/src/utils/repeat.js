"use strict";
exports.__esModule = true;
exports._repeat = void 0;
/**
 * Repeat a function n number of time
 * @param num number - How many times a function must run
 * @param fn Function- The function to repeat
 * @returns {void}
 * @author Wael Wahbeh
 */
var _repeat = function (num) { return function (fn) {
    if (num > 0) {
        fn();
        (0, exports._repeat)(num - 1)(fn);
    }
}; };
exports._repeat = _repeat;
exports["default"] = { _repeat: exports._repeat };
