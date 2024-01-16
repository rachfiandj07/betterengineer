/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((a,b) => a - b)
    let pairings = 0;
    for ( let i = 0; i<nums.length; i++) {
        if ( i % 2 == 0) {
            pairings += Math.min(nums[i], nums[i+1])
        }
    }
    return pairings
};