import { _equals } from '../index';


test('_equals', () => {
  const array1 = [123456];
  const array11 = [123456];
  const array2 = [123455];
  const array3 = [1203455];
  const array4 = [1243455];

  expect(_equals(array1, array2)).toBe(false);
  expect(_equals(array1, array1)).toBe(true);
  expect(_equals(array1, array11)).toBe(true);
  expect(_equals(array4, array3)).toBe(false);
});