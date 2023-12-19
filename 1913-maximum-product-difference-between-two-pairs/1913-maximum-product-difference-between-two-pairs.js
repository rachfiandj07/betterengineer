/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
        let sort = nums.sort((a, b) => a - b)
    let calculation = (sort[sort.length - 1] * sort[sort.length - 2]) - (sort[0] * sort[1])
    return calculation
};