/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let factor = []
    for ( let i = 1; i<=n; i++) {
        if ( n % i == 0) {
            factor.push(i)
        }
    }

    if ( factor.length < k) {
        return -1
    } else {
        return factor[k-1]
    }
};