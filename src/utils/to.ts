import { get } from './get';
const to = (promise: Promise<any>) => {
  return new Promise(async (resolve, reject) => {
    try {
const result = await Promise.resolve(promise);
return resolve([null, get(result)]);
} catch (err) {
return reject([err, null]);
}
  });
};


export default { to };
export { to }
