/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
export const toBase64 = function (payload) {
    return btoa(unescape(encodeURIComponent(payload)));
};
export default { toBase64 };
//# sourceMappingURL=toBase64.js.map