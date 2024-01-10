/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();

    while (!set.has(n)) {
        set.add(n)
        let totals = 0
        let nas = n.toString();
        let dg = nas.split("").map(Number);

        for ( let i = 0; i<dg.length; i++) {
            totals += parseInt(dg[i]) * parseInt(dg[i])
        }

        if ( totals == 1) {
            return true
        }
        n = totals
    }

    return false
};