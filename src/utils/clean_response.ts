import { get } from './get';

const cleanResponse = (response: object) => (get(response) as Partial<typeof response>) || response;

export { cleanResponse };
