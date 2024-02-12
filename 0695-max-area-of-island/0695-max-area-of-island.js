/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let row = grid.length; cols = grid[0].length;
    let set = new Set()

    var dfs = function(r, c) {
        if (r < 0 || c < 0 || r >= row || c >= cols || grid[r][c] == 0 || set.has(`${r}-${c}`)) return 0
        set.add(`${r}-${c}`)
        let direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        let area = 1
        for ( let [r1, c1] of direction) {
            area += dfs(r + r1, c + c1)
        }
        return area
    }

    let max = 0
    for ( let i = 0; i<row; i++) {
        for ( let j = 0; j<cols; j++) {
            max = Math.max(dfs(i, j), max)
        }
    }

    return max
};