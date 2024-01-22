/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let rows = board.length, cols = board[0].length
    var dfs = function(r, c) {
        if ( r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] == 'X' || board[r][c] == 'P') return

        board[r][c] = 'P'
        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)

        return
    }

    for ( let i = 0; i<board.length; i++) {
        for( let j = 0; j<board[0].length; j++) {
            if( board[i][j] == 'O' && (i==0 || i==board.length-1 || j==0 || j==board[0].length-1)) {
                dfs(i, j)
            }
        }
    }

    for ( let i = 0; i<board.length; i++) {
        for( let j = 0; j<board[i].length; j++) {
            if (board[i][j] === 'P') {
                board[i][j] = 'O'
            } else {
                board[i][j] = 'X'
            }
        }
    }
};