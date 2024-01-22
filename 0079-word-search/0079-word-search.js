/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length, cols = board[0].length
    let result = false

    var dfs = function(r, c, i) {
        if ( !result) {
            if (r < 0 || c < 0 || r >= rows || c >= cols) return
            if (board[r][c] !== word[i]) return
            if (i == word.length - 1) {
                result = true
                return
            }

            board[r][c] = null

            dfs(r +1, c, i+1)
            dfs(r - 1, c, i+1)
            dfs(r, c+1, i+1)
            dfs(r, c-1, i+1)
            board[r][c] = word[i]
        }
    }

    for ( let i =0; i<board.length; i++) {
        for( let j = 0; j<board[i].length; j++) {
            if (board[i][j] == word[0]) {
                dfs(i, j, 0)
                if (result) return result
            }
        }
    }

    return result
};