import { _cleanResponse } from './clean_response';
export const _To = (promise) => {
    return promise.then((result) => _cleanResponse(result)).catch((err) => [err, null]);
};
//# sourceMappingURL=_To.js.map