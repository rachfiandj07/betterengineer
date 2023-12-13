/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
        let count = 0
    for ( let i = 1; i<timeSeries.length; i++) {
        // let num = timeSeries[i] + duration - 1
        // while(num >= timeSeries[i+1]) {
        //     count += 1
        //     num -= 1
        // }
        if (timeSeries[i] - timeSeries[i-1] > duration) {
            count += duration
        } else {
            count += timeSeries[i] - timeSeries[i-1]
        }
    }
    return count + duration
    // return timeSeries.length * duration - count
};