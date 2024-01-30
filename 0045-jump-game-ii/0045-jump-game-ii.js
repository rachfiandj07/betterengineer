/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let current = 0, farthest = 0, jumps = 0
    for(let i = 0; i< nums.length - 1; i++) {
        current = Math.max(current, nums[i] + i)
        if(i == farthest){
            jumps += 1
            farthest = current
        }
    }
    return jumps
};