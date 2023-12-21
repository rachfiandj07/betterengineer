/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let sort = points.sort((a, b) => a[0] - b[0])
    let max = 0;
    for ( let i = 1; i<sort.length; i++) {
        max = Math.max(max, (sort[i][0] - sort[i-1][0])) 
    }
    return max
};