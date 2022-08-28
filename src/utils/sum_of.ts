// param payload - array of numbers
// return sum of numbers
type PAYLOADTYPE = string | string[] | number | number[];

export default function sumOf(payload: PAYLOADTYPE) {
  return !payload && !payload['length']
    ? 0
    : payload['reduce']((acc: string, curr: string) => parseInt(acc) + parseInt(curr), 0);
}

export { sumOf };
