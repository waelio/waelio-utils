/**
 * Calculate Clock Drift used to calculate tile remaining before token expiration
 *
 * @param  {} iatAccessToken IAT
 * @param  {} iatIdToken
 */
const calculateClockDrift = (iatAccessToken: number, iatIdToken: number) => {
  const now = Math.floor(Date.now() / 1000);
  const iat = Math.min(iatAccessToken, iatIdToken);
  return now - iat;
};
export default { calculateClockDrift };
export { calculateClockDrift };