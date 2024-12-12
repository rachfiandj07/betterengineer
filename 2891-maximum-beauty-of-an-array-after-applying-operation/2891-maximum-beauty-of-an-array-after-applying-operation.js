/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    nums.sort((a, b) => a - b)
    let subsequence = 0
    let left = 0
    for ( let right = 0; right<nums.length; right++) {
        while(nums[right] - nums[left] > k * 2) {
            left += 1
        }
        subsequence = Math.max(subsequence, right - left + 1)
    }

    return subsequence
};