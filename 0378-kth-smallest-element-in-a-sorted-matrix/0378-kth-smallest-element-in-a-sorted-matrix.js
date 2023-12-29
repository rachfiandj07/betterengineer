/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    // o(n2)
    let array = [].concat(...matrix).sort((a, b ) => a - b)
    return array[k-1]
};