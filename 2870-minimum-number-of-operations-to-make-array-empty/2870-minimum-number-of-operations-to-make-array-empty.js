/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let map = new Map()
    for ( let value of nums) {
        if (!map.get(value)) {
            map.set(value, 1)
        } else {
            map.set(value, map.get(value) + 1)
        }
    }

    let sum = 0;

    for ( let [key, value] of map) {
        if ( value == 1) {
            return -1
        }
        sum += Math.floor(value / 3)
        if ( value % 3 !== 0) {
            sum += 1
        }
    }

    return sum
};