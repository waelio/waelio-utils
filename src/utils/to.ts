import { _Get } from './_get';
const _to = (promise: Promise<any>) => {
  return new Promise((resolve, reject) => {
    return Promise.resolve(promise)
      .then((result) => resolve([null, _Get(result)]))
      .catch((err) => reject([err, null]));
  });
};
const _To = _to;

export default { _To: _to };
export { _To }
