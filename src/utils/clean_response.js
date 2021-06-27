// @ts-nocheck
import { get } from 'lodash';
const reParseString = (payload) => (payload ? JSON.parse(JSON.stringify(payload)) : payload);
const _cleanResponse = (response) => {
  const data = get(response, 'data');
  return !!data ? reParseString(data) : response;
};
export { _cleanResponse };
