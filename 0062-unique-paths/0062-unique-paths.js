/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill().map(() => Array(n).fill(0))

    for ( let i = 0; i<m; i++) {
        dp[i][n-1] = 1
    }

    for ( let i = 0; i<n; i++) {
        dp[m-1][i] = 1
    }

    for ( let i = m - 2; i>=0; i--) {
        for ( let j = n - 2; j>=0; j--) {
            dp[i][j] = dp[i+1][j] + dp[i][j+1]
        }
    }

    return dp[0][0]
};