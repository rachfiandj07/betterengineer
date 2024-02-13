/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for ( let value of words) {
        let word = value.split('').reverse().join('')
        if ( word === value) return word
    }
    return ""
};