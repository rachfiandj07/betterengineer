/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }
    let res = []
    var backtrack = function(i, curr) {
        if (digits.length === 0) return

        if (digits.length === curr.length) {
            res.push(curr)
            return
        }

        for ( let value of map[digits[i]]) {
            backtrack(i + 1, curr + value)
        }
    }
    backtrack(0, "")
    return res
};