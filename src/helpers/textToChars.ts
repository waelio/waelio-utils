export default function textToChars(p: string): number[] {
  return p.split('').map((c) => c.charCodeAt(0));
}
export { textToChars };