/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let comb = []
    for ( let i = 1; i<=n; i++) {
        comb.push(i)
    }
    let solution = []
    let temp = []
    var backtrack = function(idx) {
        if (temp.length == k) {
            solution.push([...temp])
            return
        }

        for( let i = idx; i<comb.length; i++) {
            if (!temp.includes(comb[i])) {
                temp.push(comb[i])
                backtrack(i + 1)
                temp.pop()
            }
        }
    }
    backtrack(0)
    return solution
};