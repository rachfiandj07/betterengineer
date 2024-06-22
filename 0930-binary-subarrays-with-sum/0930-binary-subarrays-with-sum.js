/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    /*
        [1, 0, 1]
        [1, 0, 1]
    */
    let prefixSum = 0
    let total = 0
    let prefixMap = new Map()
    prefixMap.set(0, 1)

    for ( let i = 0; i<nums.length; i++) {
        prefixSum += nums[i]

        if (prefixMap.has(prefixSum - goal)) {
            total += prefixMap.get(prefixSum - goal)
        }

        prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1)
    }

    return total
};