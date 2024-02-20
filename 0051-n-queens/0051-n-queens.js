/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let col = new Set()
    let posDiagonal = new Set() // r + c
    let negDiagonal = new Set() // r - c

    let res = []
    let board = Array(n).fill().map(() => Array(n).fill('.'))

    var backtracking = function(r) {
        if (r == n) {
            res.push([...board].map(row => row.join('')))
            return
        }
        
        for ( let c = 0; c<n; c++) {
            if(col.has(c) || posDiagonal.has(r+c) || negDiagonal.has(r-c)) {
                continue;
            }
            col.add(c)
            posDiagonal.add(r+c)
            negDiagonal.add(r-c)

            board[r][c] = 'Q'
            backtracking(r + 1)

            col.delete(c)
            posDiagonal.delete(r+c)
            negDiagonal.delete(r-c)

            board[r][c] = '.'
        }
    }

    backtracking(0)
    return res
};