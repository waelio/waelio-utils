/** Decode uri component
 * @name  resetString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload
 */
export default function resetString(payload: string): string {
  return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)));
};

export { resetString };
