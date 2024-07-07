/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    if (numBottles < numExchange) return numBottles
    return numExchange + numWaterBottles(numBottles - numExchange + 1, numExchange)
};