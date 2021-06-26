import { _cleanResponse } from './clean_response';
const _to = (promise) => {
    return promise.then((result) => _cleanResponse(result)).catch((err) => [err, null]);
};
export { _to };
