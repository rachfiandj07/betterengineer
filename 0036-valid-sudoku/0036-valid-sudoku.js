/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let r = []
    let c = []
    let subgrid = []

    for ( let i = 0; i<9; i++) {
        r[i] = new Set()
        c[i] = new Set()
        subgrid[i] = new Set()
    }

    for ( let i = 0; i<9; i++) {
        for ( let j = 0; j<9; j++){

            let value = board[i][j]
            if (value !== '.') {

                if (r[i].has(value) || c[j].has(value) || subgrid[Math.floor(i/3)*3 + Math.floor(j/3)].has(value)) {
                    return false
                } else {
                    r[i].add(value)
                    c[j].add(value)
                    subgrid[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(value)
                }

            }
        }
    }

    return true
};