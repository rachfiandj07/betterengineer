/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length
    let arr = new Array(n+1).fill(0)
    let missing = 0, duplicate = 0

    for ( let value of nums) {
        arr[value] += 1
    }

    for ( let i = 1; i<arr.length; i++) {
        if (arr[i] == 2) {
            duplicate = i
        }
        if ( arr[i] == 0) {
            missing = i
        }
    }

    return [duplicate, missing]
};