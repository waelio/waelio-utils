import { pick, omit, chunk } from '../src/utils';

describe('Object and Array Manipulation Utilities', () => {
    describe('pick', () => {
        const object = { a: 1, b: '2', c: true };

        it('should create an object with picked properties', () => {
            expect(pick(object, ['a', 'c'])).toEqual({ a: 1, c: true });
        });

        it('should return an empty object if no keys are provided', () => {
            expect(pick(object, [])).toEqual({});
        });

        it('should ignore keys that do not exist on the object', () => {
            expect(pick(object, ['a', 'd' as any])).toEqual({ a: 1 });
        });

        it('should return an empty object for null or undefined input', () => {
            expect(pick(null as any, ['a'])).toEqual({});
            expect(pick(undefined as any, ['a'])).toEqual({});
        });
    });

    describe('omit', () => {
        const object = { a: 1, b: '2', c: true };

        it('should create an object without the omitted properties', () => {
            expect(omit(object, ['b'])).toEqual({ a: 1, c: true });
        });

        it('should return the original object if no keys are provided', () => {
            expect(omit(object, [])).toEqual(object);
        });

        it('should ignore keys that do not exist on the object', () => {
            expect(omit(object, ['d' as any])).toEqual(object);
        });

        it('should return an empty object for null or undefined input', () => {
            expect(omit(null as any, ['a'])).toEqual({});
            expect(omit(undefined as any, ['a'])).toEqual({});
        });
    });

    describe('chunk', () => {
        const array = [1, 2, 3, 4, 5, 6, 7];

        it('should split an array into chunks of the specified size', () => {
            expect(chunk(array, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
        });

        it('should create chunks of size 1 when no size is provided', () => {
            expect(chunk([1, 2])).toEqual([[1], [2]]);
        });

        it('should return a single chunk if size is larger than array length', () => {
            expect(chunk(array, 10)).toEqual([array]);
        });

        it('should return an empty array for empty or invalid input', () => {
            expect(chunk([], 3)).toEqual([]);
            expect(chunk(array, 0)).toEqual([]);
            expect(chunk(array, -1)).toEqual([]);
        });
    });
});
