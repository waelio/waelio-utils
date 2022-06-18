export const isString = (payload) => !!payload && typeof payload === 'string' && payload.trim().length > 0
export default { isString }