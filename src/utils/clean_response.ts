import { _Get } from './_get';
export const _cleanResponse = (response: object): object => _Get(response) || response;

export default _cleanResponse;