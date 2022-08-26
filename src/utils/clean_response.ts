import { _Get } from './_get';
 const _cleanResponse = (response: object): object => _Get(response) || response;

export default { _cleanResponse };
export { _cleanResponse };