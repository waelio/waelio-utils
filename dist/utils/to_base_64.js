/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
export default function toBase64(payload) {
    return btoa(unescape(encodeURIComponent(payload)));
}
export { toBase64 };
//# sourceMappingURL=to_base_64.js.map