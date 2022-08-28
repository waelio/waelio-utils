import { _sniffId } from '../index';


test('_sniffId', () => {
  var response = { _id: 1234, name: 'John' };
  var newId = _sniffId(response);
  expect(newId).toEqual(1234);
});