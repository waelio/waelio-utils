import { equals } from '../src/utils';

describe('equals', () => {
    it('should return true for two equal arrays of primitives', () => {
        const arr1 = [1, 'a', 3];
        const arr2 = [1, 'a', 3];
        expect(equals(arr1, arr2)).toBe(true);
    });

    it('should return false for two arrays of different lengths', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2];
        expect(equals(arr1, arr2)).toBe(false);
    });

    it('should return false for two arrays with different elements', () => {
        const arr1 = [1, 'b', 3];
        const arr2 = [1, 'a', 3];
        expect(equals(arr1, arr2)).toBe(false);
    });

    it('should return true for two equal nested arrays', () => {
        const arr1 = [1, [2, 3], [4, [5]]];
        const arr2 = [1, [2, 3], [4, [5]]];
        expect(equals(arr1, arr2)).toBe(true);
    });

    it('should return false for two different nested arrays', () => {
        const arr1 = [1, [2, 3], [4, [6]]];
        const arr2 = [1, [2, 3], [4, [5]]];
        expect(equals(arr1, arr2)).toBe(false);
    });
});