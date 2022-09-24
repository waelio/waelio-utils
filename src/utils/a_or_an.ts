/**
 * A OR AN resolver
 * Returns A or AN 
 * @param field string
 * @return 'a' | 'an'
 */
export default function a_or_an(field: string) {
  return /[aeiou]/.test(field.charAt(0)) ? 'an' : 'a';
}
export { a_or_an };
