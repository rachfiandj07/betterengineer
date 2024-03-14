/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = new Map()
    count.set(0, 1)
    let currSum = 0
    let total = 0

    for ( let num of nums) {
        currSum += num
        if ( count.has(currSum - goal)) {
            total += count.get(currSum - goal)
        }

        count.set(currSum, (count.get(currSum) || 0) + 1)
    }

    return total
};