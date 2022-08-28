export default function byteHex(n: number): string {
  return ('0' + Number(n).toString(16)).substring(-2); /*?*/
}
export { byteHex };
