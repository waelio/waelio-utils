// @ts-nocheck
import { get } from 'lodash';
try {
  const reParseString = (payload: string) => (payload ? JSON.parse(JSON.stringify(payload)) : payload);
  const _cleanResponse = (response) => {
    const data = get(response, 'data');
    return !!data ? reParseString(data) : response;
  };
  export { _cleanResponse };
} catch (error) {
  console.error(error.message);
}
