/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
        if (nums.length <= 1) return nums[0]
    let map = new Map();
    for ( let value of nums) {
        if (!map.get(value)) {
            map.set(value, 1)
        } else {
            map.set(value, map.get(value) + 1)
        }
    }

    for ( let [key, value] of map) {
        if ( value == 1) {
            return key
        }
    }
};