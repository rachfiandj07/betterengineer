/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let res = 0
    let n = pref.length

    for ( let i = 0; i<words.length; i++) {
        let sfx = 0
        for ( let j = 0; j<words[i].length; j++) {
            if (words[i][j] === pref[j]) {
                sfx += 1
            }

            if (sfx === n) {
                res += 1
                break
            }
        }
    }

    return res
};