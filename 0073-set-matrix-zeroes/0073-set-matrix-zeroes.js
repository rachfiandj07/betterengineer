/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = new Set()
    let col = new Set()

    for ( let i = 0; i<matrix.length; i++) {
        for ( let j = 0; j<matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                row.add(i)
                col.add(j)
            }
        }
    }

    // turn to zero by row
    for ( let i = 0; i<matrix.length; i++) {
        if (row.has(i)) {
            for ( let j = 0; j<matrix[i].length; j++) {
                matrix[i][j] = 0
            }
            row.delete(i)
        } else {
            continue;
        }
    }

    // turn zero by cols
    for ( let i = 0; i<matrix.length; i++) {
        for (let j = 0; j<matrix[i].length; j++) {
            if (col.has(j)) {
                matrix[i][j] = 0
            } else {
                continue;
            }
        }
    }
};