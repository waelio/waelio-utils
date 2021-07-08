import { _get } from './_get';
export const _To = async (promise) => {
    return new Promise((resolve, reject) => {
        return Promise.resolve(promise)
            .then(result => resolve([null, _get(result)]))
            .catch((err) => reject([err, null]));
    });
};
//# sourceMappingURL=_To.js.map