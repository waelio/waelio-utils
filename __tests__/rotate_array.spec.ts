import { rotateArray } from '../src/utils/rotate_array';

describe('rotateArray', () => {
  it('should transpose a 2D array', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const expected = [
      [1, 4],
      [2, 5],
      [3, 6]
    ];
    expect(rotateArray(arr)).toEqual(expected);
  });

  it('should return false for falsy input', () => {
    expect(rotateArray(null as any)).toBe(false);
  });

  it('should handle empty inner arrays', () => {
    expect(rotateArray([[]])).toEqual([]);
  });
});
