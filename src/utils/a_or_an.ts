/**
 * A OR AN resolver
 * Returns A or AN
 * @param field string
 * @return 'a' | 'an'
 */
export default function a_or_an(field: string) {
  if (!field) return 'a';
  return /^[aeiou]/i.test(field) ? 'an' : 'a';
}
export { a_or_an };
