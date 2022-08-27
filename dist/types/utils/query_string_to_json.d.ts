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
export declare const queryStringToJson: (payload: string | {
    string;
}, toObject?: boolean) => any;
declare const _default: {
    queryStringToJson: (payload: string | {
        string: any;
    }, toObject?: boolean) => any;
};
export default _default;
//# sourceMappingURL=query_string_to_json.d.ts.map