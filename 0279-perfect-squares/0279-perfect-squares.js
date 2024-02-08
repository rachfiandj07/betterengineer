/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = Array(n+1).fill(Infinity)
    dp[0] = 0
    for ( let i = 1; i<=n; i++) {
        let minVal = Infinity;
        for ( let j = 1; j * j <= i; j++) {
            minVal = Math.min(minVal, dp[i-j * j] + 1)
        }
        dp[i] = minVal
    }
    return dp[n]
};