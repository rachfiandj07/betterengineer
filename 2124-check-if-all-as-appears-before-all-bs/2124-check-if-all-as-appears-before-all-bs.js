/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    if (!s.includes('a')) return true
    if (!s.includes('b')) return true
    let count = 0;
    for ( let i = 0; i<s.length - 1; i++) {
        if (s[i] === 'a' && s[i+1] === 'b') {
            count += 1
        } else if (s[i] === 'b' && s[i+1] === 'a') {
            return false
        }
    }

    if ( count > 1) return false
    return true
};