import textToChars from "./textToChars";
export default function applySaltToChar(c, salt) {
    return textToChars(salt).reduce((a, b) => a ^ b, c);
}
export { applySaltToChar };
//# sourceMappingURL=applySaltToChar.js.map