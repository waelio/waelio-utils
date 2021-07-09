import { isArray } from "./is_array";
export const isObject = (payload) => {
    return payload === Object(payload) && !isArray(payload) && typeof payload !== 'function';
};
//# sourceMappingURL=is_object.js.map