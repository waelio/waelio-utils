import { get } from './get';
export default function to(promise) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Promise.resolve(promise);
            return resolve([null, get(result)]);
        }
        catch (err) {
            return reject([err, null]);
        }
    });
}
;
export { to };
//# sourceMappingURL=to.js.map