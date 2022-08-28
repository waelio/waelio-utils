/** Decode uri component
 * @name  resetString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload
 */
export default function resetString(payload) {
    return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)));
}
;
export { resetString };
//# sourceMappingURL=reset_string.js.map