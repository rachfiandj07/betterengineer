/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {}
    for ( let i = 0; i<arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1
    }

    map = Object.entries(map).sort((a, b) => a[1] - b[1])
    for ( let i = 1; i<map.length; i++) {
        if (map[i][1] == map[i-1][1]) {
            return false
        }
    }

    return true
};