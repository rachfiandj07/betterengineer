/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let greed = g.sort((a, b) => a - b)
    let cookie = s.sort((a, b) => a - b)
    let i = 0
    let j = 0;

    while ( i < greed.length) {
        while ( j < cookie.length && greed[i] > cookie[j]) {
            j += 1
        }
        if ( j == cookie.length) {
            break;
        }
         i += 1
         j += 1
    } 
    return i
};