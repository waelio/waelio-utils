import { get } from './get';

/**
 * cleanResponse
 *
 * extends get function
 * @param response object
 * @return object
 */
const cleanResponse = (response: object) => (get(response) as Partial<typeof response>) || response;

export { cleanResponse };
