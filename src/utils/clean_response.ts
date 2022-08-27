import { get } from './get';

const cleanResponse =  (response: object) => get(response) || response;

 
export { cleanResponse };