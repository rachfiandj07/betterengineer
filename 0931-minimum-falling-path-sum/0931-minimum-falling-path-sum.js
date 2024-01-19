/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const M = matrix.length;
    const N = matrix[0].length;
    
    let prevRow = matrix[0].slice();
    
    for (let r = 1; r < M; r++) {
        const currRow = [];
        for (let c = 0; c < N; c++) {
            const curr = matrix[r][c];
            const top = curr + prevRow[c];
            const topL = curr + (prevRow[c - 1] || Infinity);
            const topR = curr + (prevRow[c + 1] || Infinity);
            currRow[c] = Math.min(top, topL, topR);
        }
        prevRow = currRow;
    }
    
    return Math.min(...prevRow);
};