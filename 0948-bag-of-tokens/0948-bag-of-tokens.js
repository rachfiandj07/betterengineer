/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b)
    /*
        score : 1
        100

        score : 0
        300
    */
    let score = 0
    let max = 0
    let left = 0
    let right = tokens.length - 1

    while(left <= right) {
        if ( power >= tokens[left]) {
            power -= tokens[left]
            score += 1
            left += 1
            max = Math.max(max, score)
        } else if (score > 0) {
            power += tokens[right]
            score -= 1
            right -= 1
        } else {
            break
        }
    }
    /*
        100
        1

        500
        1

        300
        2

        300
    */

    return max
};