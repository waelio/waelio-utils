/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
export default function toBase64(payload: string) {
  return btoa(unescape(encodeURIComponent(payload)));
}
export { toBase64 };
