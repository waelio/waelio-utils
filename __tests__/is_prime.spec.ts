import { isPrime } from '../src/utils';

describe('isPrime', () => {
    it('should return false for numbers less than or equal to 1', () => {
        expect(isPrime(-5)).toBe(false);
        expect(isPrime(0)).toBe(false);
        expect(isPrime(1)).toBe(false);
    });

    it('should return true for 2', () => {
        expect(isPrime(2)).toBe(true);
    });

    it('should return false for even numbers greater than 2', () => {
        expect(isPrime(4)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(100)).toBe(false);
    });

    it('should return true for known prime numbers', () => {
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
        expect(isPrime(11)).toBe(true);
        expect(isPrime(13)).toBe(true);
        expect(isPrime(17)).toBe(true);
        expect(isPrime(19)).toBe(true);
        expect(isPrime(23)).toBe(true);
        expect(isPrime(97)).toBe(true);
        expect(isPrime(101)).toBe(true);
    });

    it('should return false for known non-prime odd numbers', () => {
        expect(isPrime(9)).toBe(false); // 3*3
        expect(isPrime(15)).toBe(false); // 3*5
        expect(isPrime(21)).toBe(false); // 3*7
        expect(isPrime(25)).toBe(false); // 5*5
        expect(isPrime(33)).toBe(false); // 3*11
    });
});