/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let n = board.length;
    var backtracking = function(board, n) {

        var validBoard = function(board, r, c, n, number) {
            let blockRow = Math.floor(r / 3) * 3
            let blockCol = Math.floor(c / 3) * 3

            for ( let i = 0; i<n; i++) {
                if ( board[r][i] === number || board[i][c] === number) return false
                let curRow = blockRow + Math.floor(i / 3)
                let curCol = blockCol + Math.floor(i % 3)
                if ( board[curRow][curCol] === number) return false
            }
            
            return true
        }


        for ( let i = 0; i<n; i++) {
            for ( let j = 0; j<n; j++) {
                if (board[i][j] !== '.') continue

                for ( let k = 1; k<=9; k++) {
                    if (validBoard(board, i, j, n, k.toString())) {
                        board[i][j] = k.toString()

                        if(backtracking(board, n)) return true
                    }
                }

                board[i][j] = '.'
                return false
            }
        }

        return true

    }
    backtracking(board, n)
};