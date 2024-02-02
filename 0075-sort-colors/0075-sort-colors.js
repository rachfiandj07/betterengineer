/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let map = {}
    for ( let num of nums) {
        if (!map[num]) map[num] = 0
        map[num] += 1
    }

    let n = nums.length;

    for ( let i = 0; i<n; i++) {
        if ( map[0]) {
            nums[i] = 0
            map[0] -= 1
        } else if (map[1]) {
            nums[i] = 1
            map[1] -= 1
        } else if (map[2]) {
            nums[i] = 2
            map[2] -= 1
        }
    }
};