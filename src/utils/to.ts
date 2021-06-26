import { _cleanResponse } from './clean_response';
const _to = (promise: Promise<any>) => {
  return promise.then((result) => _cleanResponse(result)).catch((err) => [err, null]);
};
export { _to };
