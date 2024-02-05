/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let range = n * n
    let matrix = Array(n).fill().map(() => Array(n).fill(-1))
    let count = 0
    let left = 0
    let right = n - 1
    let top = 0
    let bot = n - 1

    while ( count < range) {
        /*
            going left
        */
        for ( let i = left; i<= right; i++) {
            count += 1
            matrix[top][i] = count
        }
        top += 1

        /*
            going down
        */
        for ( let i = top; i<=bot; i++) {
            count += 1
            matrix[i][right] = count
        }
        right -= 1

        /*
            going left
        */        
        for ( let i = right; i>=left; i--) {
            count += 1
            matrix[bot][i] = count
        }
        bot -= 1

        /*
            going up
        */
        for ( let i = bot; i>=top; i--) {
            count += 1
            matrix[i][left] = count
        }
        left += 1
    }

    return matrix
};