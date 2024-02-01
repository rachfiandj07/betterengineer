/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let set = new Set()
    let p = 0;
    for ( let i = 0; i<s.length; i++) {
        if (set.has(s[i])) {
            p += 1
            set.clear()
        }

        set.add(s[i])
    }

    if (set.size > 0) p += 1

    return p
};