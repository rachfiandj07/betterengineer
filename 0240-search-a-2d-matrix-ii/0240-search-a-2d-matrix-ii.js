/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let col = matrix[0].length - 1;

    let top = 0
    let bot = col
    //[1, 1]
    // top = 0, bot = 1
    while(top < matrix.length && bot >= 0) {
        if (matrix[top][bot] == target) {
            return true
        } else if (matrix[top][bot] > target) {
            bot -= 1
        } else {
            top += 1
        }
    }

    return false
    // [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
    // l                              m                               r
    // 
};