/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let temp = []
    for ( let i = 0; i<s.length; i++) {
        if (s[i] !== '*') {
            temp.push(s[i])
        } else {
            temp.pop()
        }
    }

    return temp.join("")
};