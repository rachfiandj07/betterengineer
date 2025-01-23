/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let r = grid.length;
    let c = grid[0].length;
    let connected = 0
    let rows = new Array(r).fill(0)
    let cols = new Array(c).fill(0)

    for ( let i = 0; i<r; i++) {
        for( let j = 0; j<c; j++) {
            if(grid[i][j] === 1) {
                rows[i]+= 1
                cols[j]+= 1
            }
        }
    }

    for ( let i = 0; i<r; i++) {
        for ( let j = 0; j<c; j++) {
            if (grid[i][j] === 1 & (rows[i] > 1 || cols[j] > 1)) {
                connected += 1
            }
        }
    }

    return connected
};