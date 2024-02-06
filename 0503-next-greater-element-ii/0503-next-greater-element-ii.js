/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var top = function(a) {
        return a[a.length - 1]
    }
    let stack = [], ans = Array(nums.length).fill(-1)

    for ( let i = 0; i< 2 * nums.length; i++) {
        let idx = i % nums.length;

        while(stack.length > 0 && nums[idx] > nums[top(stack)]) {
            let top = stack.pop()
            ans[top] = nums[idx]
        }

        stack.push(idx)
    }

    return ans
};