import { isArray, isFunction, isNumber, isObject, isString, isValid } from '../src/utils';

describe('Type Checkers', () => {
  it('isArray should correctly identify arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray({})).toBe(false);
    expect(isArray('abc')).toBe(false);
  });

  it('isFunction should correctly identify functions', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function test() {})).toBe(true);
    expect(isFunction({})).toBe(false);
    expect(isFunction(null)).toBe(false);
  });

  it('isNumber should correctly identify numbers', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-1.5)).toBe(true);
    expect(isNumber('123')).toBe(false);
    expect(isNumber(null)).toBe(false);
  });

  it('isObject should correctly identify plain objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject([])).toBe(false);
    expect(isObject(() => {})).toBe(false);
    expect(isObject(null)).toBe(false);
  });

  it('isString should correctly identify non-empty strings', () => {
    expect(isString('abc')).toBe(true);
    expect(isString('  a  ')).toBe(true);
    expect(isString('')).toBe(false);
    expect(isString('   ')).toBe(false);
    expect(isString(null as any)).toBe(false);
  });

  it('isValid should verify payload is an Array, Object, String, or Number', () => {
    expect(isValid({})).toBe(true);
    expect(isValid([])).toBe(true);
    expect(isValid('abc')).toBe(true);
    expect(isValid(123)).toBe(true);
    expect(isValid(null)).toBe(false);
    expect(isValid(undefined)).toBe(false);
  });
});
