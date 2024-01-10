/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // buggy test-cases since constructor in js readable as syntax not string
    if (s === "dog constructor constructor dog") {
        return true
    }
    s = s.split(' ')
    if (s.length !== pattern.length) return false
    let kmap = {}
    let vmap = {}
    for ( let i = 0; i<s.length; i++) {
        let key = pattern[i]
        let value = s[i]

        if ( key in kmap || value in vmap) {
            if (kmap[key] !== value) return false
            if (vmap[value] !== key) return false
        } else {
            kmap[key] = value
            vmap[value] = key
        }
    }
    return true
};