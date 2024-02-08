/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for ( let value of coins) {
        for ( let i = value; i<=amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - value] + 1)
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};