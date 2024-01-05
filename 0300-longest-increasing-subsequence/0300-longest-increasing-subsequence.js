/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // let longest = 1;
    // for ( let i = 0; i<nums.length-1; i++) {
    //     if (nums[i] < nums[i+1]) {
    //         longest += 1
    //         console.log(longest, nums[i])
    //     }
    // }
    // return longest
    let n = nums.length;
    let dp = new Array(n).fill(1)

    for ( let i = 1; i<n; i++) {
        for ( let j = 0; j<i; j++) {
            if ( nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return Math.max(...dp)
};