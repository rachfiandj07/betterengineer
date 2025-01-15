/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (k > s.length) return false
    const freq = new Array(26).fill(0);

    for ( const char of s) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let isOdd = 0
    for ( let i = 0; i<26; i++) {
        if (freq[i] % 2 == 1) isOdd += 1
    }

    return isOdd > k ? false : true
};