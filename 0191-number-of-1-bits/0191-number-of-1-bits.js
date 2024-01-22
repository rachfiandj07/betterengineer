/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // let count = 0;
    // for ( let value of n.toString(2)) {
    //     if (value == '1') {
    //         count += 1
    //     } else {
    //         continue
    //     }
    // }
    // return count

    if ( n === 0) return 0;
    return 1 + hammingWeight(n &= n - 1)
};