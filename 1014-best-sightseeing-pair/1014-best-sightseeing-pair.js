/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let max = 0
    let score = values[0]
    for ( let i = 1; i<values.length; i++) {
        score -= 1
        max = Math.max(max, (score+values[i]))
        score = Math.max(score, values[i])
    }

    return max
};