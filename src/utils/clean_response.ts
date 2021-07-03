const reParseString = (payload: string) => (payload ? JSON.parse(JSON.stringify(payload)) : payload);
const get = (payload) => {
  const data = payload; /*?*/
  return data.data ? data.data : data; /*?*/
};
export const _cleanResponse = (response) => {
  const data = get(response); /*?*/
  return !!data ? (data.length && data.length > 1 ? data : reParseString(data)) : response;
};


