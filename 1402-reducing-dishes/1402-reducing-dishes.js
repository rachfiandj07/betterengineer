/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => b - a)
    let presum = 0;
    let sum = 0;

    for ( let i =0; i<satisfaction.length; i++) {
        presum += satisfaction[i]
        if (presum < 0) {
            break
        }
        sum += presum
    }

    return sum
    // if ( max < 0){
    //     return 0
    // }
};