/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j = 0;
    for ( let i = 0; i<t.length; i++) {
        if (t[i] == s[j]) {
            j += 1
        }
    }

    if (j == s.length) {
        return true
    } else { 
        return false
    }
};