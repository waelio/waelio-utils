// Deep clone via JSON round-trip. Useful for stripping reactive proxies and ensuring plain data.
export const reParseString = <T>(payload: T): T => {
  // Handles primitives, arrays, and plain objects; non-serializable values (e.g., functions, symbols)
  // will be dropped by JSON.stringify which mirrors previous lib behavior.
  return JSON.parse(JSON.stringify(payload));
};

export default reParseString;
