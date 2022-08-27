"use strict";
exports.__esModule = true;
exports.equals = void 0;
function equals(arr, needle) {
    // if the arr or needle are a falsy value, return
    if (!(arr || !arr.toString.length || !(needle && needle.toString().length)))
        return false;
    for (var i = 0, l = needle.toString().length; i < l; i++) {
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
exports["default"] = equals;
exports.equals = equals;
;
