/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if ( trust.length == 0 && n == 1) {
        return 1;
    }

    let arr = new Array(n + 1).fill(0)
    for ( let value of trust) {
        arr[value[0]] -= 1
        arr[value[1]] += 1
    }

    for ( let i = 0; i<arr.length; i++) {
        if (arr[i] == n - 1) {
            return i
        }
    }

    return -1
};