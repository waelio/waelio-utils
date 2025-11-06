/**
 * Generates an array containing the Fibonacci sequence up to the nth position.
 * The sequence starts with 0 and 1.
 * @param {number} n The index (n) of the last number to include in the sequence. Must be a non-negative integer.
 * @returns {number[]} An array representing the Fibonacci sequence up to n.
 */
export const fibonacciSequence = (n: number): number[] => {
  const num = Math.floor(n);
  if (num < 0 || !isFinite(num)) {
    return [];
  }

  if (num === 0) {
    return [0];
  }

  const sequence = [0, 1];

  for (let i = 2; i <= num; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }

  return sequence;
};

export default fibonacciSequence;
