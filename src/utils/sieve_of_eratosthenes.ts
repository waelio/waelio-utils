/**
 * Generates an array of all prime numbers up to a given limit using the Sieve of Eratosthenes algorithm.
 * @param {number} limit The upper bound to find primes up to.
 * @returns {number[]} An array of prime numbers.
 */
export const sieveOfEratosthenes = (limit: number): number[] => {
  const num = Math.floor(limit);

  if (num < 2) {
    return [];
  }

  // Create a boolean array "sieve" and initialize all entries as true.
  // A value in sieve[i] will finally be false if i is Not a prime, else true.
  const sieve = new Array(num + 1).fill(true);

  sieve[0] = sieve[1] = false;

  for (let p = 2; p * p <= num; p++) {
    // If sieve[p] is still true, then it is a prime
    if (sieve[p]) {
      // Update all multiples of p
      for (let i = p * p; i <= num; i += p) {
        sieve[i] = false;
      }
    }
  }

  // Collect all prime numbers
  const primes: number[] = [];
  for (let i = 2; i <= num; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
};

export default sieveOfEratosthenes;
