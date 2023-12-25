/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let count = 0

    for ( let i = 0; i<s.length; i++) {
        if (i % 2) {
            if ( s[i] == '0') {
                count += 1
            }
        } else {
            if ( s[i] == '1') {
                count += 1
            }
        }
    }

    return Math.min(count, s.length - count)
};