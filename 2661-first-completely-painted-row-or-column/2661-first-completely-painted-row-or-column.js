/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const visitedMatrix = {}
    const visitedRow = {}
    const visitedCol = {}
    const totalRow = mat.length
    const totalCol = mat[0].length

    for ( let i = 0; i<mat.length; i++) {
        visitedRow[i] = 0
        for ( let j = 0; j<mat[i].length; j++) {
            visitedMatrix[mat[i][j]] = [i, j]
            visitedCol[j] = 0
        }   
    }

    for ( let i = 0; i<arr.length; i++) {
        let [row, col] = visitedMatrix[arr[i]]
        let visitRow = visitedRow[row] = visitedRow[row] + 1
        let visitCol = visitedCol[col] = visitedCol[col] + 1
        if (visitRow === totalCol) return i
        if (visitCol === totalRow) return i
    }

    return 0
};