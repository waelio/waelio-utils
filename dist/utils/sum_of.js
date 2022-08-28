export default function sumOf(payload) {
    return !payload && !payload['length'] ? 0 : payload['reduce']((acc, curr) => parseInt(acc) + parseInt(curr), 0);
}
export { sumOf };
//# sourceMappingURL=sum_of.js.map