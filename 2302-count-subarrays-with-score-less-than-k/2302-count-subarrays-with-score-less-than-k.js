/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let left = 0, right = 0
    let sum = nums[left]
    let count = 0;

    while ( right < nums.length) {
        let score = sum * (right - left + 1)

        if ( score < k) {
            count += (right - left + 1)
            right += 1
            sum += nums[right]
        } else {
            sum -= nums[left]
            left += 1
        }
    }

    return count
};