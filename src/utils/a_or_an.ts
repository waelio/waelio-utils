export default function a_or_an(field: string) {
  return /[aeiou]/.test(field.charAt(0)) ? 'an' : 'a';
}
export { a_or_an };
