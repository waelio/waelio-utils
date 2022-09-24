import { get } from './get';
export default function to(promise: Promise<[any, any]>) {
  () =>
    new Promise(async (resolve: any, reject: any) => {
      try {
        const result = await promise;
        return resolve([null, get(result)]);
      } catch (err) {
        return reject([err, null]);
      }
    });
}

export { to };
