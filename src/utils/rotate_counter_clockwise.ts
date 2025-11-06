import { transpose } from './transpose';

/**
 * Rotates a 2D array (matrix) 90 degrees counter-clockwise.
 * @param {T[][]} matrix The 2D array to rotate.
 * @returns {T[][]} The new rotated 2D array.
 */
export const rotateCounterClockwise = <T>(matrix: T[][]): T[][] => {
    // A 90-degree counter-clockwise rotation is equivalent to a transpose
    // followed by reversing the new rows (the outer array).
    return transpose(matrix).reverse();
};

export default rotateCounterClockwise;