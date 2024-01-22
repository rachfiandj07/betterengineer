/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let rows = grid.length, cols = grid[0].length
    var dfs = function(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols) return
        if (grid[r][c] !== '1') return
        grid[r][c] = null
        dfs(r +1, c)
        dfs(r -1, c)
        dfs(r, c+1)
        dfs(r, c-1)
        return
    }
    let count = 0
    for ( let i =0; i<grid.length; i++) {
        for(let j = 0; j<grid[i].length; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j)
                count += 1
            }
        }
    }

    return count
};