/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
const Base64 = function (payload: string) {
  return btoa(unescape(encodeURIComponent(payload)));
}
export default { Base64 };
export { Base64 };