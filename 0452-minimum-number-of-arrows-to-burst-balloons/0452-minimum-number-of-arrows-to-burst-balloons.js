/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points = points.sort((a,b) => a[1] - b[1])
    let shot = points[0][1]
    let arrows = 1
    for ( let i = 1; i<points.length; i++) {
        if ( points[i][0] > shot) {
            arrows += 1
            shot = points[i][1]
        } else {
            shot = Math.min(points[i][1], shot)
        }
    }

    return arrows
};