/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = 0
    let col = matrix.length
    let top = 0;
    let bottom = col - 1
    let row = 0
    while (top <= bottom) {
        row = Math.floor((top + bottom) / 2)
        if (target > matrix[row][matrix[row].length - 1]) {
            top = row + 1
        } else if ( target < matrix[row][0]) {
            bottom = row - 1
        } else {
            break
        }
        // [1, 10, 23]
        //  t   m  b
        //  tm   b
        // 
    }
    // if(!(top <= bottom)) {
    //     return false
    // }

    let left = 0;
    let right = matrix[row].length - 1

    while ( left <= right ) {
        let mid = Math.floor((left + right) / 2)
        if ( target == matrix[row][mid]) {
            return true;
        } else if ( target > matrix[row][mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return false 
};