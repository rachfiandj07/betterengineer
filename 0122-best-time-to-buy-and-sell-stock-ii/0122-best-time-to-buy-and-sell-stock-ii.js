/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let maxProfit = 0
    for ( let i = 1; i<prices.length; i++) {
        buy = Math.min(buy, prices[i])
        if ( prices[i] > buy) {
            maxProfit += prices[i] - buy
            buy = prices[i]
        }
    }
    return maxProfit
};