export const a_or_an = function (field: string) {
  return /[aeiou]/.test(field.charAt(0)) ? 'an' : 'a';
};
