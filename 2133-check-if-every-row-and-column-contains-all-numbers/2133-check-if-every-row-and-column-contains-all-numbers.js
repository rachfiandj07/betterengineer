/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let n = matrix.length
    let r = matrix.length; c = matrix[0].length;

    for ( let i = 0; i<r; i++) {
        let set = new Set();
        for ( let j = 0; j<c; j++) {
            set.add(matrix[i][j])
        }
        if ( set.size !== c) return false
    }

    for ( let i = 0; i<c; i++) {
        let set = new Set();
        for ( let j = 0; j<r; j++) {
            set.add(matrix[j][i])
        }
        if ( set.size !== r) return false
    }

    return true
};