/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let row = mat.length, col = mat[0].length
    let soldier = 0;
    for ( let i = 0; i<row; i++) {
        for ( let j = 0; j<col; j++) {
            if ( mat[i][j] === 1) {
                soldier += 1
            }
            continue;
        }
        mat[i] = [i, soldier]
        soldier = 0
    }
    mat.sort((a, b) => a[1] - b[1])

    let ans = Array(k).fill(0)
    for ( let i = 0; i<k; i++) {
        ans[i] = mat[i][0]
    }

    return ans
};