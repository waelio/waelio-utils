import { _to } from '../index';

// const demoError = async () => {
//   return setTimeout(() => {
//     throw 'error message';
//   }, 1000);
// };

export async function demoSuccess () {
   return fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => response.json());
}
test("TO", async () => {
  const [error, success] = await _to(demoSuccess());/**? */

  expect(await error).toBeFalsy;
  expect(await success).not.toBeFalsy;
})