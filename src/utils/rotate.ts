import { transpose } from './transpose';

/**
 * Rotates a 2D array (matrix) 90 degrees clockwise.
 * @param {T[][]} matrix The 2D array to rotate.
 * @returns {T[][]} The new rotated 2D array.
 */
export const rotate = <T>(matrix: T[][]): T[][] => {
    // A 90-degree clockwise rotation is equivalent to a transpose
    // followed by reversing each row.
    return transpose(matrix).map(row => row.reverse());
};

export default rotate;