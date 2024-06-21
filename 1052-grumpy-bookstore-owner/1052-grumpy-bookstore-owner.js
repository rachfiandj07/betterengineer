/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    /*
        customers = [1,0,1,2,1,1,7,5], 
        grumpy =    [0,1,0,1,0,1,0,1], 
        minutes = 3
        [0, 1, 0, 1] = 2
        [0, 1, 0, 1] = 5
        
        [1, 0, 1] = 0
        [0, 1, 0] = 2
        [2, 1, 1] = 1 // 2 
        [1, 0, 1] = 5


    */
    let satisfy = 0
    let currsatisfy = 0
    let maxsatisfy = 0
    for ( let i = 0; i<customers.length; i++) {
        if (grumpy[i] === 0) {
            satisfy += customers[i]
        } else if ( i < minutes) {
            currsatisfy += customers[i]
        }
    }

    maxsatisfy = currsatisfy

    for ( let i = minutes; i< customers.length; i++) {
        currsatisfy += customers[i] * grumpy[i]
        currsatisfy -= customers[i - minutes] * grumpy[i - minutes]
        maxsatisfy = Math.max(maxsatisfy, currsatisfy)
    }

    return satisfy + maxsatisfy
};