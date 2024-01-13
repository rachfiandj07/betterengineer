/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let sMap = new Map()
    let tMap = new Map()
    let count = 0

    for (let char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    for ( let char of s) {
        sMap.set(char, (sMap.get(char) || 0) + 1);
    }

    console.log(sMap, tMap)

    for ( let [key, value] of sMap) {
        if(sMap.get(key) > tMap.get(key)) {
            count += tMap.get(key) - sMap.get(key)
        } else if (sMap.get(key) && !tMap.get(key)) {
            count = count - sMap.get(key)
        }
    }
    return Math.abs(count)
};