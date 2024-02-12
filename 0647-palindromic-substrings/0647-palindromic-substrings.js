/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0

    var countPalindrome = function(s, l, r) {
        let count = 0;
        while(l >= 0 && r < s.length && s[l] == s[r]) {
            count += 1
            l -= 1
            r += 1
        }

        return count
    }
    for ( let i = 0; i<s.length; i++) {
        count += countPalindrome(s, i, i)
        count += countPalindrome(s, i, i + 1)
    }
    return count
};