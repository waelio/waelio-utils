import { _cleanResponse } from './clean_response';
export const _To = (promise: Promise<any>) => {
  return promise.then((result) => _cleanResponse(result)).catch((err) => [err, null]);
};

