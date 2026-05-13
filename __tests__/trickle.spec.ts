import { trickle_first_stage, trickle_second_stage } from '../src/utils/trickle';

describe('trickle', () => {
  it('should correctly reduce array in first stage', () => {
    const row = [19, 8, 92, 37, 46, 58, 6, 97, 78];
    const expected = [
      19 + 8 + 92,
      37 + 46 + 58,
      6 + 97 + 78
    ]; // [119, 141, 181]
    expect(trickle_first_stage(row)).toEqual(expected);
  });

  it('should correctly reduce array in second stage', () => {
    const row: [number, number, number] = [119, 141, 181];
    expect(trickle_second_stage(row)).toBe(119 + 141 + 181); // 441
  });
});
