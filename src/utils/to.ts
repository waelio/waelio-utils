import { get } from './get';
export default function to(promise: Promise<[any,any]>) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Promise.resolve(promise);
      return resolve([null, get(result)]);
    } catch (err) {
      return reject([err, null]);
    }
  });
}

export { to };
