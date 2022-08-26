export default function textToChars(p: string): number[] {
  return p.split('').map((c) => c.charCodeAt(0));
}
export { textToChars };


// Testing - Thank you ​Quokka PRO
// textToChars('hello') /*?*/