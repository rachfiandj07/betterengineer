/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let index = 0
    let temp = []
    let result = []

    var backtrack = function(index, target, temp) {
        if ( target === 0) {
            result.push([...temp])
            return
        }

        if (target < 0) return

        for ( let i = index; i<candidates.length; i++) {
            temp.push(candidates[i])
            backtrack(i, target - candidates[i], temp)
            temp.pop()
        }
    }
    backtrack(index, target, temp)
    return result
};
