import { get } from '../src/utils/get';

describe('get', () => {
  it('should return false for falsy values', () => {
    expect(get(null)).toBe(false);
    expect(get(undefined)).toBe(false);
    expect(get(false)).toBe(false);
  });
  
  it('should handle objects with or without data property', () => {
    expect(get({ data: 'value' })).toBe('value');
    expect(get({ a: 1 })).toEqual({ a: 1 });
  });

  it('should handle objects with array data properties', () => {
    expect(get({ data: [] })).toEqual([]);
    expect(get({ data: [{ data: 'a' }] })).toEqual([{ data: 'a' }]);
    expect(get({ data: [{ data: 'a' }, { data: 'b' }] })).toEqual([{ data: 'a' }, { data: 'b' }]);
  });

  it('should handle raw arrays directly', () => {
    expect(get([])).toEqual([]);
    expect(get([{ data: 'a' }])).toBe('a');
    expect(get([{ data: 'a' }, { data: 'b' }])).toEqual([{ data: 'a' }, { data: 'b' }]);
  });
});
