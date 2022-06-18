export const reParseString = (payload: string) => {
  return JSON.parse(JSON.stringify(payload));
};

export default reParseString;