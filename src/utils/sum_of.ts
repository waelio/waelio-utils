// param payload - array of numbers
// return sum of numbers
type PAYLOADTYPE = (string | number)[];

export default function sumOf(payload: PAYLOADTYPE): number {
  if (!Array.isArray(payload) || payload.length === 0) {
    return 0;
  }
  return payload.reduce((acc: number, curr: string | number) => {
    const num = parseFloat(String(curr));
    return acc + (isNaN(num) ? 0 : num);
  }, 0);
}

export { sumOf };
