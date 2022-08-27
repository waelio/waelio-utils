/**
 * @param  {object} payload
 * @returns string||boolean||number
 */
export default function sniffId(payload: any) {
  const { id, _id, Id, iD } = payload;
  const newId = id || _id || Id || iD;
  return newId || false;
};

export { sniffId };