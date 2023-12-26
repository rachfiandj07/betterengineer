/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let ans = []
    let set = new Set(nums)

    for ( let i = 1; i<=nums.length; i++) {
        if (!set.has(i)) {
            ans.push(i)
        }
    }
    return ans
};