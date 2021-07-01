/**
 * Calculate Clock Drift used to calculate tile remaining before token expiration
 *
 * @param  {} iatAccessToken IAT
 * @param  {} iatIdToken
 */
declare const calculateClockDrift: (iatAccessToken: number, iatIdToken: number) => number;
export { calculateClockDrift };
