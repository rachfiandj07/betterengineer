/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let col = new Set()
    let posDiagonal = new Set() // r + c
    let negDiagonal = new Set() // r - c

    let res = 0;

    var backtracking = function(r) {
        if ( r == n) {
            res += 1
            return
        }

        for ( let c = 0; c <n; c++) {
            if (col.has(c) || posDiagonal.has(r+c) || negDiagonal.has(r-c)) {
                continue
            }

            col.add(c)
            posDiagonal.add(r+c)
            negDiagonal.add(r-c)
            backtracking(r+1)
            col.delete(c)
            posDiagonal.delete(r+c)
            negDiagonal.delete(r-c)
        }
    }

    backtracking(0)
    return res
};