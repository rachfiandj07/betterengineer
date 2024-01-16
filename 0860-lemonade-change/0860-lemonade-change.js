/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0
    for ( let i = 0; i<bills.length; i++) {
        if ( bills[i] == 5) {
            five += 1
        } 
        
        if ( bills[i] == 10) {
            if ( five < 1) return false
            five -= 1
            ten += 1
        }

        if ( bills[i] == 20) {
            if ( five < 1) {
                return false
            } else if ( ten < 1) {
                if ( five < 3) return false
                five -= 3
            } else {
                ten -= 1
                five -= 1
            }
        }
    }

    return true
};