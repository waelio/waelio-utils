import { config } from '../src/utils/config'

const dummy1 = 'test1';
const dummy2 = {'hot':'cold'};
const dummy3 = 'test1 test 2';
const dummy4 = ['test1'];

test('adds 1 + 2 to equal 3', () => {
  config.set('test1', dummy1)
  expect(config.get(dummy1)).toEqual(dummy1)
});