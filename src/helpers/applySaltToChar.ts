import textToChars from './textToChars';

export default function applySaltToChar(c: number | number[], salt: string): number {
  return textToChars(salt as string).reduce((a: number, b: number) => a ^ b, c as number);
}

export { applySaltToChar };
