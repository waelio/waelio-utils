import { transpose, rotate, rotateCounterClockwise } from '../src/utils';

describe('Matrix Manipulation Utilities', () => {
    const rectangularMatrix = [
        [1, 2, 3],
        [4, 5, 6],
    ];
    const squareMatrix = [
        [1, 2],
        [3, 4],
    ];

    describe('transpose', () => {
        it('should swap the rows and columns of a rectangular matrix', () => {
            const expected = [
                [1, 4],
                [2, 5],
                [3, 6],
            ];
            expect(transpose(rectangularMatrix)).toEqual(expected);
        });

        it('should transpose a square matrix', () => {
            expect(transpose(squareMatrix)).toEqual([
                [1, 3],
                [2, 4],
            ]);
        });

        it('should transpose a single-row matrix', () => {
            expect(transpose([[1, 2, 3]])).toEqual([[1], [2], [3]]);
        });

        it('should transpose a single-column matrix', () => {
            expect(transpose([[1], [2], [3]])).toEqual([[1, 2, 3]]);
        });

        it('should return an empty array for invalid input', () => {
            expect(transpose([])).toEqual([]);
            expect(transpose([[]])).toEqual([]);
        });
    });

    describe('rotate', () => {
        it('should rotate a rectangular matrix 90 degrees clockwise', () => {
            const expected = [
                [4, 1],
                [5, 2],
                [6, 3],
            ];
            expect(rotate(rectangularMatrix)).toEqual(expected);
        });

        it('should rotate a square matrix 90 degrees clockwise', () => {
            const expected = [
                [3, 1],
                [4, 2],
            ];
            expect(rotate(squareMatrix)).toEqual(expected);
        });

        it('should rotate a single-row matrix', () => {
            expect(rotate([[1, 2, 3]])).toEqual([[1], [2], [3]]);
        });

        it('should rotate a single-column matrix', () => {
            expect(rotate([[1], [2], [3]])).toEqual([[3, 2, 1]]);
        });

        it('should return an empty array for invalid input', () => {
            expect(rotate([])).toEqual([]);
        });
    });

    describe('rotateCounterClockwise', () => {
        it('should rotate a rectangular matrix 90 degrees counter-clockwise', () => {
            const expected = [
                [3, 6],
                [2, 5],
                [1, 4],
            ];
            expect(rotateCounterClockwise(rectangularMatrix)).toEqual(expected);
        });

        it('should rotate a square matrix 90 degrees counter-clockwise', () => {
            const expected = [
                [2, 4],
                [1, 3],
            ];
            expect(rotateCounterClockwise(squareMatrix)).toEqual(expected);
        });

        it('should rotate a single-row matrix', () => {
            expect(rotateCounterClockwise([[1, 2, 3]])).toEqual([[3], [2], [1]]);
        });

        it('should rotate a single-column matrix', () => {
            expect(rotateCounterClockwise([[1], [2], [3]])).toEqual([[1, 2, 3]]);
        });

        it('should return an empty array for invalid input', () => {
            expect(rotateCounterClockwise([])).toEqual([]);
        });
    });
});