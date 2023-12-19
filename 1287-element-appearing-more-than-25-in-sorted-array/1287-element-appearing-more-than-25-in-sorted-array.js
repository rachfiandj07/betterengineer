/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    if (arr.length == 1) return arr[0]
    let appear = Math.floor(0.25 * arr.length);
    let map = new Map();
    for ( let value of arr) {
        if ( !map.get(value)) {
            map.set(value, 1)
        } else {
            map.set(value, map.get(value) + 1)
            if ( map.get(value) > appear) {
                return value
            }
        }
    }
};