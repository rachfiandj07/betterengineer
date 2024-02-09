/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    let n = nums.length;
    if ( n <= 1) return nums

    nums.sort((a,b ) => a - b)
    let dp = Array(n).fill(1)
    let prev = Array(n).fill(-1)

    let maxIdx = 0

    for ( let i = 1; i<n; i++) {
        for ( let j = 0; j<i; j++) {
            if (nums[i] % nums[j] == 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1

                prev[i] = j
            }
        }

        if (dp[i] > dp[maxIdx]) maxIdx = i
    }
    let result = []

    while(maxIdx !== -1) {
        result.push(nums[maxIdx])
        maxIdx = prev[maxIdx]
    }

    return result.reverse()
};