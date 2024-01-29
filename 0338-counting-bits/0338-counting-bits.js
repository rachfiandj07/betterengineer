/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let dp = Array(n+1).fill(0)

    for ( let i = 1; i<=n; i++) {
        dp[i] = dp[Math.floor(i/2)] + i % 2
    }

    return dp
};