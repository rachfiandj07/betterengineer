/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    if ( nums.length % 3 !== 0) return []
    nums.sort((a,b) => a - b)
    let answer = []
    for ( let i = 2; i<nums.length; i += 3) {
        if (nums[i] - nums[i-1] <= k && nums[i] - nums[i-2] <= k) {
            answer.push([nums[i-2], nums[i-1], nums[i]])
        } else {
            return []
        }
    }

    return answer
};