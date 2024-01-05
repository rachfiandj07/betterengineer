/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let left = 0;
    let right = nums.length - 1;
    while ( left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left += 1
        right -= 1
    }

    // right = k - 1;
    // while ( left < right) {
    //     [nums[left], nums[right]] = [nums[right], nums[left]]
    //     left += 1
    //     right -= 1
    // }

    left = k;
    right = nums.length - 1;
    while ( left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left += 1
        right -= 1
    }

    left = 0;
    right = k - 1;
    while ( left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left += 1
        right -= 1
    }
};