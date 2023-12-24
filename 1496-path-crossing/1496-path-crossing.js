/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let map = {
        'N': [0, 1],
        'S': [0, -1],
        'E': [1, 0],
        'W': [-1, 0]
    }
    let x = 0
    let y = 0
    let set = new Set();
    set.add("0,0")
    for ( let values of path) {
        let dx = map[values][0]
        let dy = map[values][1]
        let dXdY = [x + dx, y + dy]
        x = dXdY[0]
        y = dXdY[1]
        let hash = `${dXdY[0]},${dXdY[1]}`
        if (set.has(hash)) {
            return true
        } else {
            set.add(hash)
        }
    }

    return false
};