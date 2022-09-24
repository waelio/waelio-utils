import { toUTF8Array } from './toUTF8Array';

/**
 * textToChars
 *
 * @param payload string
 * @return number
 */
export default function textToChars(payload: string) {
  return payload.split('').map(sr=> toUTF8Array(sr) );
}
export { textToChars };
