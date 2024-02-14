/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos = []
    let neg = []

    for ( let value of nums ) {
        if ( value < 0 ) {
            neg.push(value)
        } else {
            pos.push(value)
        }
    }

    let n = pos.length;
    let answer = []
    for ( let i = 0; i<n; i++) {
        answer.push(pos[i], neg[i])
    }

    return answer
};