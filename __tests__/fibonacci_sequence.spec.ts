import { fibonacciSequence } from '../src/utils';

describe('fibonacciSequence', () => {
    it('should return an empty array for negative numbers', () => {
        expect(fibonacciSequence(-1)).toEqual([]);
    });

    it('should return [0] for n = 0', () => {
        expect(fibonacciSequence(0)).toEqual([0]);
    });

    it('should return [0, 1] for n = 1', () => {
        expect(fibonacciSequence(1)).toEqual([0, 1]);
    });

    it('should generate the correct sequence for n = 2', () => {
        expect(fibonacciSequence(2)).toEqual([0, 1, 1]);
    });

    it('should generate the correct sequence up to n = 10', () => {
        const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        expect(fibonacciSequence(10)).toEqual(expected);
    });

    it('should handle non-integer inputs by flooring them', () => {
        expect(fibonacciSequence(5.9)).toEqual([0, 1, 1, 2, 3, 5]);
    });

    it('should return an empty array for non-finite numbers', () => {
        expect(fibonacciSequence(Infinity)).toEqual([]);
    });
});
