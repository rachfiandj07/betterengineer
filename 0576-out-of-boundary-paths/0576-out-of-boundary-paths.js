/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let mod = 10**9+7
    let cache = {}

    var dfs = function(r, c, move) {
        if ( r < 0 || r == m || c < 0 || c == n) return 1
        if ( move == 0) return 0
        let key = `${r}-${c}-${move}`;
        if (cache[key] !== undefined) return cache[key]
        cache[key] = (
            (dfs(r +1, c, move - 1) +
            dfs(r -1, c, move -1)) % mod +
            (dfs(r, c + 1, move -1) +
            dfs(r, c-1, move -1)) % mod
        ) % mod
        return cache[key]
    }

    return dfs(startRow, startColumn, maxMove)
};