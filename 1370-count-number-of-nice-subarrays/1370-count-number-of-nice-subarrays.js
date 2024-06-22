/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    /*
        [1, 1, 2, 1, 1]
        [1, 1, 2, 1]
        [1, 2, 1, 1]

        [2, 4, 6]
        []

        [2,2,2,1,2,2,1,2,2,2]
        [2, 2, 2, 1, 2, 2, 1]
        []
    */

    for ( let i = 0; i<nums.length; i++) {
        nums[i] = nums[i] % 2
    }

    let prefixCount = new Array(nums.length + 1).fill(0)
    prefixCount[0] = 1
    let prefixTotal = 0
    let total = 0

    for ( let num of nums ) {
        prefixTotal += num
        if ( prefixTotal >= k) {
            total += prefixCount[prefixTotal - k]
        }

        prefixCount[prefixTotal] += 1
    }

    console.log(prefixCount)

    return total
};