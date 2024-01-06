/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(/\s+/).reverse().join(' ');
    return s
};