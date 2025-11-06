import { fibonacci } from '../src/utils';

describe('fibonacci', () => {
    it('should return 0 for n = 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('should return 1 for n = 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('should return 1 for n = 2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    it('should correctly calculate the 10th Fibonacci number', () => {
        // Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
        expect(fibonacci(10)).toBe(55);
    });

    it('should correctly calculate a larger Fibonacci number', () => {
        expect(fibonacci(20)).toBe(6765);
    });

    it('should return 0 for negative numbers', () => {
        expect(fibonacci(-5)).toBe(0);
    });

    it('should handle non-integer inputs by flooring them', () => {
        expect(fibonacci(5.9)).toBe(5);
    });
});
