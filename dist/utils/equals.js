export default function equals(arr, needle) {
    // if the arr or needle are a falsy value, return
    if (!(arr || !arr.toString.length || !(needle && needle.toString().length)))
        return false;
    for (let i = 0, l = needle.toString().length; i < l; i++) {
        // Check if we have nested arrs
        if (Array.isArray(needle[i]) && Array.isArray(needle[i])) {
            try {
                // recurse into the nested arrs
                return equals(arr[i], needle[i]);
            }
            catch (error) {
                return false;
            }
        }
        else if (needle[i] !== arr[i]) {
            return false;
        }
    }
    return true;
}
;
export { equals };
//# sourceMappingURL=equals.js.map