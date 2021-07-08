/**
 * @param  {object} payload
 * @returns string||boolean||number
 */
export const sniffId = (payload) => {
    const { id, _id, Id, iD } = payload;
    const newId = id || _id || Id || iD;
    return newId || false;
};
//# sourceMappingURL=sniff_id.js.map