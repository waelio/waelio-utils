import { factorial } from '../src/utils';

describe('factorial', () => {
    it('should return 1 for n = 0', () => {
        expect(factorial(0)).toBe(1);
    });

    it('should return 1 for n = 1', () => {
        expect(factorial(1)).toBe(1);
    });

    it('should correctly calculate the factorial of 5', () => {
        expect(factorial(5)).toBe(120);
    });

    it('should correctly calculate the factorial of 10', () => {
        expect(factorial(10)).toBe(3628800);
    });

    it('should return 0 for negative numbers', () => {
        expect(factorial(-5)).toBe(0);
    });

    it('should handle non-integer inputs by flooring them', () => {
        expect(factorial(5.9)).toBe(120);
    });

    it('should return 0 for non-finite numbers', () => {
        expect(factorial(Infinity)).toBe(0);
    });
});
