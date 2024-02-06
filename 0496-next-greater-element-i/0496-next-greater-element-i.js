/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    var top = function(a) {
        return a[a.length - 1]
    }
    let stack = []

    let map = {}
    for ( let i = nums2.length-1; i>=0; i--) {
        while(stack.length !== 0 && top(stack) <= nums2[i]) {
            stack.pop()
        }

        if (stack.length == 0) {
            map[nums2[i]] = -1
        } else {
            map[nums2[i]] = top(stack)
        }

        stack.push(nums2[i])
    }
    let ans = Array(nums1.length).fill(0)
    for ( let i= 0; i<nums1.length; i++) {
        ans[i] = map[nums1[i]]
    }

    return ans
};