/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = []
    nums.sort((a,b) => a - b)

    var backtrack = function(temp, seen) {
        if (temp.length == nums.length){
            result.push([...temp])
        }

        for ( let i = 0; i<nums.length; i++) {
            if (seen[i]) continue
            seen[i] = true
            temp.push(nums[i])
            backtrack(temp, seen)
            temp.pop()
            seen[i] = false

            while ( i< nums.length && nums[i] == nums[i+1]) i++
        }
    }
    backtrack([], new Array(nums.length))

    return result
};