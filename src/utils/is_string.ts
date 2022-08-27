export default function isString(payload: string) { return !!payload && typeof payload === 'string' && payload.trim().length > 0 }
export { isString }