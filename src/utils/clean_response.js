"use strict";
exports.__esModule = true;
exports.cleanResponse = void 0;
var get_1 = require("./get");
var cleanResponse = function (response) { return (0, get_1.get)(response) || response; };
exports.cleanResponse = cleanResponse;
