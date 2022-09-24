/**
 * byteHex
 * 
 * @param n number
 * @return string
 */
export const byteHex = (n: number): string => {
  return ('000' + Number(n).toString(16)).substring(-4);
};
export default byteHex;
