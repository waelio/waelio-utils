/**
 * Calculates the factorial of a number (n!).
 * @param {number} n The non-negative integer to calculate the factorial of.
 * @returns {number} The factorial of n. Returns 1 for n=0. Returns 0 for negative or non-finite numbers.
 */
export const factorial = (n: number): number => {
    const num = Math.floor(n);

    if (num < 0 || !isFinite(num)) {
        return 0; // Factorial is not defined for negative or non-finite numbers.
    }

    if (num === 0) {
        return 1; // The factorial of 0 is 1.
    }

    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
};

export default factorial;