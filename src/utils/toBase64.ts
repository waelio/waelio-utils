/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
export const toBase64 = function (payload: string) {
  return btoa(unescape(encodeURIComponent(payload)));
}
