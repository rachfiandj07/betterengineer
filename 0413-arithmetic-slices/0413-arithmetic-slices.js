/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let n = nums.length;
    let res = 0
    if ( n< 3){
        return res
    }
    for ( let i = 0; i< n - 2; i++) {
        let diff = nums[i+1] - nums[i]

        for ( let j = i + 2; j<n; j++) {
            if ( nums[j] - nums[j-1] == diff) {
                res += 1
            } else {
                break;
            }
        }
    }
    return res
};