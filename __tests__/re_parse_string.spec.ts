import { reParseString } from '../src/utils/re_parse_string';

describe('reParseString', () => {
  it('should return a new deep cloned object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = reParseString(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
  });

  it('should strip functions', () => {
    const obj = { a: 1, fn: () => {} };
    const cloned = reParseString(obj) as any;
    expect(cloned.a).toBe(1);
    expect(cloned.fn).toBeUndefined();
  });
});
