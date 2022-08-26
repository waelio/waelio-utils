"use strict";
exports.__esModule = true;
exports.calculateClockDrift = void 0;
/**
 * Calculate Clock Drift used to calculate tile remaining before token expiration
 *
 * @param  {} iatAccessToken IAT
 * @param  {} iatIdToken
 */
var calculateClockDrift = function (iatAccessToken, iatIdToken) {
    var now = Math.floor(Date.now() / 1000);
    var iat = Math.min(iatAccessToken, iatIdToken);
    return now - iat;
};
exports.calculateClockDrift = calculateClockDrift;
exports["default"] = { calculateClockDrift: calculateClockDrift };
