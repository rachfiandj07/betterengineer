/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map()
    let max = 0
    let sum = 0

    for ( let i = 0; i< nums.length; i++) {
        if ( nums[i] === 0) {
            sum += -1
        } else {
            sum += 1
        }

        if ( sum === 0) {
            max = i + 1
        } else if(map.has(sum)) {
            max = Math.max(max, i - map.get(sum))
        } else {
            map.set(sum, i)
        }
    }

    return max
};