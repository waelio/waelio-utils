// @ts-nocheck
/**
 * Function that converts a URL Query String to JSON
 * Example Out: {"first":"John", "last": "Smith"}
 * @name  queryStringToJson
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload QueryString
 * @param {boolean} toObject Return JS Object or JSON
 * @returns JSON|Object
 */
export const queryStringToJson = (payload, toObject = true) => {
    if (!payload)
        return;
    var pairs = payload.slice(1).split('&');
    var result = {};
    pairs.forEach((pair) => {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return toObject ? JSON.parse(JSON.stringify(result)) : JSON.stringify(result);
};
//# sourceMappingURL=query_string_to_json.js.map