/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let cache = {}
    let answer = []
    let rows = matrix.length, col = matrix[0].length

    var bound = function(r, c) {
        let key = r+'#'+c;
        return (r < 0 || c < 0 || r >= rows || c >= col || cache[key])
    }

    var traverse = function(r, c, direction) {
        if (answer.length === rows * col) return
        let key = r+'#'+c;
        answer.push(matrix[r][c])
        cache[key] = true

        switch(direction) {
            case 'r':
                if (bound(r, c+1)) {
                    traverse(r+1, c, 'd')
                } else {
                    traverse(r, c+1, 'r')
                }
                break;
            case 'd':
                if(bound(r+1, c)) {
                    traverse(r, c-1, 'l')
                } else {
                    traverse(r+1, c, 'd')
                }
                break;
            case 'u':
                if(bound(r-1, c)) {
                    traverse(r, c+1, 'r')
                } else {
                    traverse(r-1, c, 'u')
                }
                break
            case 'l':
                if(bound(r, c-1)) {
                    traverse(r-1,c, 'u')
                } else {
                    traverse(r, c-1, 'l')
                }
                break
        }
    }

    traverse(0, 0, 'r')
    return answer
};