/**
 * @param  {object} payload
 * @returns string||boolean||number
 */
export const sniffId = (payload: any) => {
  const { id, _id, Id, iD } = payload;
  const newId = id || _id || Id || iD;
  return newId || false;
};

