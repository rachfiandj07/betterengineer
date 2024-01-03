/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let tmp = []
    let a = 0;
    for ( let i = 0; i<bank.length; i++) {
        a = 0
        for ( let j = 0; j<bank[i].length; j++) {
            if (parseInt(bank[i][j]) == 0) {
                continue;
            }
            a += parseInt(bank[i][j])
        }
        if ( a == 0) {
            continue;
        }
        tmp.push(a)
    }
    let res = 0;
    for ( let i = 0; i<tmp.length - 1; i++) {
        res += tmp[i] * tmp[i+1]
    }
    return res;
};