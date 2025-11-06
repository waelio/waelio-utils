/**
 * Rotate/transposes a 2D array (matrix) clockwise by converting rows to columns.
 * Returns false for falsy or empty input to mirror previous behavior.
 */
export function rotateArray<T = any>(array: T[][]): T[][] | false {
  if (!array || !array.length) return false;

  const w = array.length || 0;
  const h = Array.isArray(array[0]) ? (array[0] as T[]).length : 0;
  if (h === 0 || w === 0) {
    return [] as T[][];
  }

  const t: T[][] = [];
  for (let i = 0; i < h; i++) {
    t[i] = [] as T[];
    for (let j = 0; j < w; j++) {
      t[i][j] = array[j][i];
    }
  }
  return t;
}

export default rotateArray;
