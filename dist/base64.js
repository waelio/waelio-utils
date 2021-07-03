/**
 * Converts string to a Base64
 * @param  {string} payload
 * @returns {string}
 */
export const Base64 = function (payload) {
    return btoa(unescape(encodeURIComponent(payload)));
};
//# sourceMappingURL=base64.js.map