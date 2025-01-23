/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    let n = grid[0].length
    let preRow1 = grid[0]
    let preRow2 = grid[1]

    for ( let i = 1; i<n; i++) {
        preRow1[i] += preRow1[i-1]
        preRow2[i] += preRow2[i-1]
    }

    // console.log(preRow1, preRow2)

    let res = Infinity
    for ( let i = 0; i<n; i++) {
        let top = preRow1[preRow1.length - 1] - preRow1[i]
        let bottom = i > 0 ? preRow2[i - 1] : 0
        let secRobot = Math.max(top, bottom)
        res = Math.min(res, secRobot)
    }

    // console.log(res)

    return res
};