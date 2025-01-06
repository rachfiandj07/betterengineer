/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let res = Array(boxes.length).fill(0)
    let balls = 0, moves = 0
    for ( let i = 0; i<boxes.length; i++) {
        res[i] = balls + moves
        moves = moves + balls
        balls += parseInt(boxes[i])
    }

    balls = 0, moves = 0
    for ( let i = boxes.length - 1; i>=0; i--) {
        res[i] += balls + moves
        moves = moves + balls
        balls += parseInt(boxes[i])
    }

    return res
};