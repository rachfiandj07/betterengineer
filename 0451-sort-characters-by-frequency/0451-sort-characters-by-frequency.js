/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {}
    for ( let value of s) {
        if ( map[value] == undefined) {
            map[value] = 1
        } else {
            map[value] += 1
        }
    }
    let freq = ""
    let sort = Object.entries(map).sort((a, b) => b[1] - a[1]);
    for ( let i = 0; i<sort.length; i++) {
        for ( let j = 1; j<= parseInt(sort[i][1]); j++) {
            freq += sort[i][0]
        }
    }
    return freq
};