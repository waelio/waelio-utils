/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
function Base64(payload) {
    return btoa(unescape(encodeURIComponent(payload)));
}
export { Base64 };
//# sourceMappingURL=base64.js.map