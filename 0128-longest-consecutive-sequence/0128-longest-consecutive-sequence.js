/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length == 0) return 0
    let set = new Set(nums)
    let count = 1
    let longest = 1
    for ( let i = 0; i<nums.length; i++) {
        if(!set.has(nums[i] - 1)) {
            let x = nums[i]

            while(set.has(x + 1)) {
                count += 1
                x += 1
            }
        }

        longest = Math.max(count, longest)
        count = 1
    }
    return longest
};