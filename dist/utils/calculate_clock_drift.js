/**
 * Calculate Clock Drift used to calculate tile remaining before token expiration
 *
 * @param  {} iatAccessToken IAT
 * @param  {} iatIdToken
 */
const calculateClockDrift = (iatAccessToken, iatIdToken) => {
    const now = Math.floor(Date.now() / 1000);
    const iat = Math.min(iatAccessToken, iatIdToken);
    return now - iat;
};
export default { calculateClockDrift };
export { calculateClockDrift };
//# sourceMappingURL=calculate_clock_drift.js.map