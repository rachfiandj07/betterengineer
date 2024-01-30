/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = {}
    let mapT = {}
    for ( let i = 0; i<s.length; i++) {
        if (mapT[t.charAt(i)] !== mapS[s.charAt(i)]) return false

        mapS[s.charAt(i)] = i + 1
        mapT[t.charAt(i)] = i + 1
    }

    return true
};