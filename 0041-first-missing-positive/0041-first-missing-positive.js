/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let set = new Set(nums)
    for ( let i = 1; i<=nums.length; i++) {
        if (!set.has(i)) {
            return i
        }
    }

    return nums.length + 1
};