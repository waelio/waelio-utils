// @ts-nocheck
import { get } from 'lodash';
import { reParseString } from './re_parse_string';
const _cleanResponse = (response) => {
    const data = get(response, 'data');
    return !!data ? reParseString(data) : response;
};
export { _cleanResponse };
