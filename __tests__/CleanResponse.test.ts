import { _cleanResponse, _reParseString } from "../index";
const url = 'https://jsonplaceholder.typicode.com/todos/1'


test('_cleanResponse', async () => {
  const response = await fetch(url).then(response => response.json())
  const reP = await _reParseString(response) 
  let test = _cleanResponse(reP);

  const arrayTest = Object.keys(reP)
  expect(test).toBeTruthy();
  expect((arrayTest.length)).toBeGreaterThan(0)
})