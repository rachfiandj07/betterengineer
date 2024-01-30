/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let max = 2

    for ( let i = 2; i<nums.length; i++) {
        if (nums[i] != nums[max - 2] || nums[i] !== nums[max - 1]) {
            nums[max] = nums[i]
            max += 1
        }
    }

    return max
};