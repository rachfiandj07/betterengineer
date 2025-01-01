/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let zero = 0, one = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === '1') {
            one++;
        }
    }

    if (s[0] === '0') zero++;
    let res = zero + one;

    for (let r = 1; r < s.length - 1; r++) {
        if (s[r] === '0') zero++;
        else if (s[r] === '1') one--;
        res = Math.max(res, zero + one);
    }

    return res;
};