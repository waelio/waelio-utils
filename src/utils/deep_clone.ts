/**
 * Performs a deep clone of a value, handling objects, arrays, Dates, RegExps, and circular references.
 * Functions are copied by reference.
 *
 * @param {T} value The value to deep clone.
 * @param {WeakMap<any, any>} [hash=new WeakMap()] Used internally to handle circular references.
 * @returns {T} The deep-cloned value.
 */
export const deepClone = <T>(value: T, hash = new WeakMap<any, any>()): T => {
    // Handle primitives and null/undefined
    if (value === null || typeof value !== 'object') {
        return value;
    }

    // Handle Date objects
    if (value instanceof Date) {
        return new Date(value.getTime()) as T;
    }

    // Handle RegExp objects
    if (value instanceof RegExp) {
        return new RegExp(value) as T;
    }

    // Handle circular references
    if (hash.has(value)) {
        return hash.get(value);
    }

    // Determine if it's an array or a plain object
    const constructor = value.constructor;
    const isArray = constructor === Array;
    const isObject = constructor === Object;

    // If it's not a plain object or array, return the original reference (e.g., functions, Map, Set, custom classes)
    // For more complex types, you might need specific cloning logic.
    if (!isArray && !isObject) {
        return value;
    }

    // Create the new object/array and store it in the hash map to handle circular references
    const clonedValue: any = isArray ? [] : {};
    hash.set(value, clonedValue);

    // Recursively clone properties
    for (const key in value) {
        // Ensure it's an own property, not from the prototype chain
        if (Object.prototype.hasOwnProperty.call(value, key)) {
            clonedValue[key] = deepClone((value as any)[key], hash);
        }
    }

    return clonedValue as T;
};

export default deepClone;