/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b)
    let res = -1
    let prefix = 0

    for ( let value of nums) {
        if ( prefix > value) {
            res = prefix + value
        }
        prefix += value
    }
    return res
};