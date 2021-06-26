/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
function Base64(payload: string) {
  return btoa(unescape(encodeURIComponent(payload)));
}
export { Base64 };
