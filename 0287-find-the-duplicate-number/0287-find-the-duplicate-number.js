/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = new Map()
    for ( let i = 0; i<nums.length; i++) {
        if(!map.get(nums[i])) {
            map.set(nums[i], 1)
        } else {
            return nums[i]
        }
    }
};