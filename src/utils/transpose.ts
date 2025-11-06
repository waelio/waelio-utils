/**
 * Transposes a 2D array (matrix), swapping rows and columns.
 * Example: [[1, 2], [3, 4]] becomes [[1, 3], [2, 4]]
 * @param {T[][]} matrix The 2D array to transpose.
 * @returns {T[][]} The new transposed 2D array.
 */
export const transpose = <T>(matrix: T[][]): T[][] => {
    if (!matrix || matrix.length === 0 || !Array.isArray(matrix[0])) {
        return [];
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    const grid: T[][] = Array.from({ length: cols }, () => Array(rows));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[j][i] = matrix[i][j];
        }
    }

    return grid;
};

export default transpose;
