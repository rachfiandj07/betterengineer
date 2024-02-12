/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    /*
        dfs solution
    */
    let row = grid.length; cols = grid[0].length;
    let cache = {}

    var dfs = function(r, c1, c2) {
        if ( r == row || c1 < 0 || c1 == cols || c2 < 0 || c2 == cols || c1 == c2) return 0
        let key = `${r},${c1},${c2}`
        if (cache[key] !== undefined) return cache[key]
        let pick = grid[r][c1] + grid[r][c2]
        let max = 0

        for ( let c1_d of [-1, 0, 1]) {
            for ( let c2_d of [-1, 0, 1]) {
                max = Math.max(max, dfs(r + 1, c1 + c1_d, c2 + c2_d))
            }
        }
        let ans = pick + max
        cache[key] = ans
        return cache[key]
    }

    return dfs(0, 0, cols - 1)
};