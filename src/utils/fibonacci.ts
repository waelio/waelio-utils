/**
 * Calculates the nth number in the Fibonacci sequence using an iterative approach.
 * The sequence starts with 0 and 1.
 * @param {number} n The index (n) of the number to retrieve from the sequence. Must be a non-negative integer.
 * @returns {number} The nth Fibonacci number, or 0 for invalid input.
 */
export const fibonacci = (n: number): number => {
    // Ensure n is a non-negative integer.
    const num = Math.floor(n);
    if (num < 0 || !isFinite(num)) {
        return 0;
    }

    if (num <= 1) {
        return num;
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= num; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

export default fibonacci;