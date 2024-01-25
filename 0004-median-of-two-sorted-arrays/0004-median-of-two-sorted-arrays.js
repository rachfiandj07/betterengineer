/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    /*
    o(nlogn)
    */
    let nums = nums1.concat(nums2)
    nums = nums.sort((a, b) => a - b)
    let mid = Math.floor((0 + nums.length) / 2)
    if (nums.length % 2 == 0) {
        let median = nums[mid] + nums[mid-1]
        return median / 2
    } else {
        return nums[mid]
    }
};