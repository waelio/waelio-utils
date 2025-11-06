/**
 * Deeply compares two arrays for equality.
 * @param {any[]} a The first array.
 * @param {any[]} b The second array.
 * @returns {boolean}
 *
 * @author Peace Marshal
 */
export type equalsPayloadType = any[];

export default function equals(a: equalsPayloadType, b: equalsPayloadType): boolean {
  // Strict equality for primitives
  if (a === b) return true;

  if (!Array.isArray(a) || !Array.isArray(b)) {
    // This function is intended for arrays. For non-arrays, strict equality is the rule.
    return false;
  }

  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    // Recurse for nested arrays, otherwise strict compare elements
    if (Array.isArray(a[i]) && Array.isArray(b[i])) {
      if (!equals(a[i], b[i])) return false;
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

export { equals };
