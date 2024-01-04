/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    // return Math.floor(Math.sqrt(n))

    let result = 0;

    let fact = 1;

    while ( n > 0) {
        n -= 1
        result += 1

        n = n - (fact * 2)
        fact += 1
    }

    return result
};