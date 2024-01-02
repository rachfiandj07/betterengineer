/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    let sort = score.sort((a, b) => b[k] - a[k])
    return sort
};