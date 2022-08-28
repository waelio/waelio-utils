import { isArray } from "./is_array";
export default function isObject(payload) {
    return payload === Object(payload) && !isArray(payload) && typeof payload !== 'function';
}
;
export { isObject };
//# sourceMappingURL=is_object.js.map