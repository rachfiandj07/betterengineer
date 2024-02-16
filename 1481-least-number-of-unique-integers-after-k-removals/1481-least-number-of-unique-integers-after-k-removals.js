/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let map = {}
    for ( let value of arr) {
        if ( map[value] === undefined) {
            map[value] = 1
        } else {
            map[value] = 1 + map[value]
        }
    }

    let entries = Object.entries(map);
    let size = entries.length
    entries.sort((a, b) => a[1] - b[1]);
    for ( let i = 0; i<entries.length; i++) {
        if (k >= entries[i][1]) {
            size -= 1
            k -= entries[i][1]
        }

        if ( k == 0) return size
    }

    return size
};