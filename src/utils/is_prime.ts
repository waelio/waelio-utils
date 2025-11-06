/**
 * Checks if a given number is a prime number.
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 * @param {number} n The number to check for primality.
 * @returns {boolean} `true` if the number is prime, `false` otherwise.
 */
export const isPrime = (n: number): boolean => {
    const num = Math.floor(n);

    // Numbers less than or equal to 1 are not prime
    if (num <= 1) {
        return false;
    }

    // 2 is the only even prime number
    if (num === 2) {
        return true;
    }

    // All other even numbers are not prime
    if (num % 2 === 0) {
        return false;
    }

    // Check for divisibility by odd numbers from 3 up to the square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

export default isPrime;