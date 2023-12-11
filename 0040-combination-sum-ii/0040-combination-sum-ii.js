/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];

    let c = candidates.sort((a,b) => a - b)
    var backtrack = function(index, target, temp, c) {
        if (target < 0) return
        if (target === 0) {
            result.push(temp.slice());
            return;
        }

        for (let i = index; i < c.length; i++) {
            if (i !== index && c[i] === c[i - 1]) continue;
                temp.push(c[i]);
                backtrack(i + 1, target - c[i], temp, c);
                temp.pop();
        }
    };

    backtrack(0, target, [], c);
    return result;
};