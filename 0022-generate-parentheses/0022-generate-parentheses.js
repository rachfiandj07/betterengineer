/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if ( n == 0) return ['']
    let solution = []
    let temp = []

    var backtracking = function(open, close) {
        if ( open === 0 && close === 0) {
            solution.push(temp.join(""))
            return
        }

        if ( open != 0) {
            temp.push("(")
            backtracking(open - 1, close)
            temp.pop()
        }

        if ( close > open) {
            temp.push(")")
            backtracking(open, close - 1)
            temp.pop()
        }
    }

    backtracking(n, n)
    return solution
};