/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = []
    let temp = []

    nums.sort((a, b) => a - b)
    var backtrack = function(i) {
        // if ( i >= nums.length) {
        //     res.push([...temp])
        //     return
        // }
        res.push([...temp])

        for ( let j = i; j<nums.length; j++) {
            if ( j > i && nums[j] == nums[j - 1]) {
                continue;
            }

            temp.push(nums[j])
            backtrack(j+1)
            temp.pop()
        }

        // expected to append
        // temp.push(nums[i])
        // backtrack(i + 1)

        // // expected not to append
        // temp.pop()
        // backtrack(i + 1)
    }
    backtrack(0)
    return res
};