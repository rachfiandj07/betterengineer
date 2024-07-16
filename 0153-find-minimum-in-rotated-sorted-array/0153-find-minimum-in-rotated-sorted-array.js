/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    /*
        binary search tree
        O(log n)
    */
    let low = 0
    let high = nums.length - 1
    let res = nums[0]

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (nums[low] < nums[high]) {
            res = Math.min(res, nums[low])
        }

        res = Math.min(res, nums[mid])
        if ( nums[mid] >= nums[low]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return res
};