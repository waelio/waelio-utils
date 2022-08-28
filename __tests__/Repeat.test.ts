import { _repeat } from '../index'

test('_repeat', () => {
  let counter = 0;
  const f1 = () => counter++;
  _repeat(5)(f1);
  expect(counter).toEqual(5);
})