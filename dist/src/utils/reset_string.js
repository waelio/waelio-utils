/** Decode uri component
 * @name  resetString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload
 */
const resetString = (payload) => {
    return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)));
};
export { resetString };
//# sourceMappingURL=reset_string.js.map