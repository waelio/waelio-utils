/** Decode uri component
 * @name  resetString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload
 */
export const resetString = (payload: string): string => {
  return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)));
};

export default { resetString };
