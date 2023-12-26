/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let s = 0;
    let c = 0
    for ( let i = 0; i<=nums.length; i++) {
        s+= i
    }

    for ( let i = 0; i<nums.length; i++) {
        c += nums[i]
    }

    return s - c
};