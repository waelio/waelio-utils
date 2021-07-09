import { _Get } from './_get';
export const _to = (promise: Promise<any>) => {
  return new Promise((resolve, reject) => {
    return Promise.resolve(promise)
      .then((result) => resolve([null, _Get(result)]))
      .catch((err) => reject([err, null]));
  });
};
export const _To = _to;
