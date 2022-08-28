export default function a_or_an(field) {
    return /[aeiou]/.test(field.charAt(0)) ? 'an' : 'a';
}
;
export { a_or_an };
//# sourceMappingURL=a_or_an.js.map