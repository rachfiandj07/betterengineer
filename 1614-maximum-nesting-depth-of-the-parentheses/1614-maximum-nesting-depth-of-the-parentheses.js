/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let balance = 0
    let max = 0;
    for ( let value of s) {
        if ( value === '(') {
            balance += 1
        } else if ( value === ')') {
            max = Math.max(max, balance)
            balance -= 1
        }
    }

    return max
    /*
        ()
        ((()))
    */
};