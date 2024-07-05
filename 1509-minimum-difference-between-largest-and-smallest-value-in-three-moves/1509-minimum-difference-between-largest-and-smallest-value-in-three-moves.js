/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    /*
        choice 1 -> remove first 3 ele
        choice 2 -> remove last 3 ele
        choice 3 -> remove first 2 and one last ele
        choice 4 -> remove last 2 and first ele
    */
    if ( nums.length <= 4) {
        return 0
    }

    nums.sort((a,b) => a - b)
    let k = nums.length - 3
    let ans = nums[nums.length - 1] - nums[0]
    for (let i = k - 1; i< nums.length; i++) {
        ans = Math.min(ans, nums[i] - nums[i - k + 1])
    }
    return ans
};