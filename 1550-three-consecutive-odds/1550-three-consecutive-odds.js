/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0

    for ( let i = 0; i<arr.length; i++) {
        if (count == 3) {
            return true
        }

        if (arr[i] % 2 !== 0) {
            count += 1
        } else {
            count = 0
        }
    }

    return count === 3 ? true : false
};