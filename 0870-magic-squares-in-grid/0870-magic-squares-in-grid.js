/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let r = grid.length, c = grid[0].length

    if (r < 3 || c < 3) return 0

    var validMatrix = function(grid, r, c) {
        let digits = new Array(10).fill(0)
        for ( let i = 0; i< 3; i++) {
            for ( let j =0; j< 3; j++) {
                let num = grid[r+i][c+j]
                if (num < 1 || num > 9 || digits[num]) {
                    return false
                }
                digits[num] = 1
            }
        }

        return (grid[r][c] + grid[r][c + 1] + grid[r][c + 2] === 15 &&
                grid[r + 1][c] + grid[r + 1][c + 1] + grid[r + 1][c + 2] === 15 &&
                grid[r + 2][c] + grid[r + 2][c + 1] + grid[r + 2][c + 2] === 15 &&
                grid[r][c] + grid[r + 1][c] + grid[r + 2][c] === 15 &&
                grid[r][c + 1] + grid[r + 1][c + 1] + grid[r + 2][c + 1] === 15 &&
                grid[r][c + 2] + grid[r + 1][c + 2] + grid[r + 2][c + 2] === 15 &&
                grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] === 15 &&
                grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] === 15);
    }

    let count = 0
    for ( let i = 0; i< r - 2; i++) {
        for ( let j = 0; j < c - 2; j++) {
            if (validMatrix(grid, i, j)) {
                count += 1
            }
        }
    }

    return count

    // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9], targetSum = 15, set = new Set()

    // for (let i = 0; i < numbers.length - 1; i++) {
    //     let seen = new Set();
    //     for (let j = i + 1; j < numbers.length; j++) {
    //         let needed = targetSum - numbers[i] - numbers[j];
    //         if (seen.has(needed)) {
    //             set.add([numbers[i], numbers[j], needed].toString());
    //             set.add([numbers[j], numbers[i], needed].toString());
    //             set.add([numbers[i], needed, numbers[j]].toString());
    //             set.add([numbers[j], needed, numbers[i]].toString());
    //             set.add([needed, numbers[i], numbers[j]].toString());
    //             set.add([needed, numbers[j], numbers[i]].toString());
    //         }
    //         seen.add(numbers[j]);
    //     }
    // }
    // let magic = 0
    // for ( let i = 0; i<=c - 3; i++) {
    //     let matrix = []
    //     for ( let j = 0; j<3; j++) {
    //         matrix.push(grid[j].slice(i, i + 3))
    //     }
    //     if (
    //         set.has([matrix[0][0], matrix[0][1], matrix[0][2]].toString()) &&
    //         set.has([matrix[1][0], matrix[1][1], matrix[1][2]].toString()) &&
    //         set.has([matrix[2][0], matrix[2][1], matrix[2][2]].toString()) &&
    //         set.has([matrix[0][0], matrix[1][0], matrix[2][0]].toString()) &&
    //         set.has([matrix[0][1], matrix[1][1], matrix[2][1]].toString()) &&
    //         set.has([matrix[0][2], matrix[1][2], matrix[2][2]].toString()) &&
    //         set.has([matrix[0][0], matrix[1][1], matrix[2][2]].toString()) &&
    //         set.has([matrix[0][2], matrix[1][1], matrix[2][0]].toString())
    //         ) {
    //             magic += 1
    //         } else {
    //             continue
    //         }
    // }
    // return magic
    // var bc = function(grid, n) {

    //     var validMatrix = function(grid, r, c, n) {
    //         let blockRow = Math.floor(r / 3) * 3
    //         let blockCol = Math.floor(c / 3) * 3
    //         console.log(blockRow, blockCol)
    //     }

    //     for ( let i = 0; i<n; i++) {
    //         for ( let j = 0; j<n; j++) {
    //             validMatrix(grid, i, j, n)
    //         }
    //     }
    // }

    // bc(grid, r)
    /*
        only 8 calculation
        [
            [4,3,8,4]
            [9,5,1,9]
            [2,7,6,2]
        ]
    */ 
};