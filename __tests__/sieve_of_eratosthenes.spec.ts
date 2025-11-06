import { sieveOfEratosthenes } from '../src/utils';

describe('sieveOfEratosthenes', () => {
    it('should return an empty array for limits less than 2', () => {
        expect(sieveOfEratosthenes(-1)).toEqual([]);
        expect(sieveOfEratosthenes(0)).toEqual([]);
        expect(sieveOfEratosthenes(1)).toEqual([]);
    });

    it('should return [2] for a limit of 2', () => {
        expect(sieveOfEratosthenes(2)).toEqual([2]);
    });

    it('should find all primes up to 10', () => {
        expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]);
    });

    it('should find all primes up to 30', () => {
        const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        expect(sieveOfEratosthenes(30)).toEqual(expected);
    });

    it('should handle non-integer inputs by flooring them', () => {
        // Primes up to 13
        const expected = [2, 3, 5, 7, 11, 13];
        expect(sieveOfEratosthenes(13.9)).toEqual(expected);
    });
});