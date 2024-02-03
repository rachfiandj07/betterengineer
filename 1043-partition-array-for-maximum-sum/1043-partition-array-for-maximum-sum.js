/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    let n = arr.length
    let dp = new Array(n + 1).fill(0)

    for ( let i = 1; i<=n; i++) {
        let currMax = 0, currSum = 0

        for ( let j = 1; j<=k && i - j >= 0; j++) {
            currMax = Math.max(currMax, arr[i-j])
            currSum = Math.max(currSum, currMax * j + dp[i-j])
        }

        dp[i] = currSum
    }

    return dp[n]
};