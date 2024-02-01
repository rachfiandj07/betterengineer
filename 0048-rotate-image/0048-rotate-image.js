/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let c = matrix[0].length, r = matrix.length

    for ( let i = 0; i<r; i++) {
        for ( let j = i + 1; j<c; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for ( let value of matrix) {
        value = value.reverse()
    }
};