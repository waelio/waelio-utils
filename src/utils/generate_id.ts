/** generate random string
 * @name  generateId
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @param  {number} start 2 default
 * @param  {number} len   9 default
 * @return {string}
 */
export default function generateId(start = 2, len = 9) {
  return Math.random().toString(36).substr(start, len);
}

export { generateId };
