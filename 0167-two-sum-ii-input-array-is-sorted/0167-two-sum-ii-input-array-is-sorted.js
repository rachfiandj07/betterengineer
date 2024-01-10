/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = {}
    for ( let i = 0; i<numbers.length; i++) {
        let value = numbers[i]
        let compValue = target - value
        if (map[compValue] !== undefined) {
            return [map[compValue], i+1]
        } else {
            map[value] = i + 1
        }
    }
};