/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    /*
        1,1,1,1
        1,1
        1,1
        1,1,1
        1,1,1
        1,
        1,
        1,
        1,
        1,1,1,1
    */
    let ans = 0
    let max_i = -1
    let min_i = -1
    let culp_i = -1

    for ( let i = 0; i<nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            culp_i = i
        }

        if (nums[i] == minK) {
            min_i = i
        }

        if (nums[i] == maxK) {
            max_i = i
        }
        
        let small = Math.min(min_i, max_i)
        let res = small - culp_i

        ans += res <= 0 ? 0 : res
    }

    return ans
};