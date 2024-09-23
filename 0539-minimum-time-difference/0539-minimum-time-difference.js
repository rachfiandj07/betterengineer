/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {

    var convertToMinutes = function(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return (hours * 60) + minutes;
    }

    for ( let i = 0; i<timePoints.length; i++) {
        timePoints[i] = convertToMinutes(timePoints[i])
    }

    /*
        12 hours rule
        720 max
        0 min

        24 hours rule
        1440 max
        0 min
    */

    timePoints.sort((a, b) => a - b)
    let min = Infinity
    for ( let t = 1; t < timePoints.length; t++) {
        min = Math.min(min, timePoints[t] - timePoints[t-1])
    }

    min = Math.min(min, 24 * 60 - timePoints[timePoints.length - 1] + timePoints[0])
    return min
};