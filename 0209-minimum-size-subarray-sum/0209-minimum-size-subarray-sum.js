/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
        let left = 0
    let total = 0
    let res = Infinity

    for ( let i = 0; i<nums.length; i++) {
        total += nums[i]
        while (total >= target) {
            total -= nums[left]
            res = Math.min(i - left + 1, res)
            left += 1
        }
    }
    
    return res == Infinity ? 0 : res
};