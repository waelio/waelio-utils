/** Decode uri component
 * @name  resetString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload
 */
const resetString = (payload: string): string => {
  return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)));
};
export { resetString };
