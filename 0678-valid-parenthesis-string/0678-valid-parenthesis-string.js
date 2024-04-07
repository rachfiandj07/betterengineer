/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftMin = 0
    let leftMax = 0
    for( let i = 0; i<s.length; i++) {
        if (s[i] === '(') {
            leftMin += 1
            leftMax += 1
        } else if (s[i] === ')') {
            leftMin -= 1
            leftMax -=1
        } else {
            leftMin -= 1
            leftMax += 1
        }

        if (leftMax < 0) {
            return false
        } else if (leftMin < 0) {
            leftMin = 0
        }
    }

    return leftMin == 0 ? true : false
};