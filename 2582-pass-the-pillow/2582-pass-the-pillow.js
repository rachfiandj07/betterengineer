/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let d = 0
    let i = 1

    while (time > 0) {
        time -= 1
        if (d == 0) {
            i += 1
            if (i == n) {
                d = 1
            }
        } else {
            i -= 1
            if (i == 1) {
                d = 0
            }
        }
    }

    return i
};