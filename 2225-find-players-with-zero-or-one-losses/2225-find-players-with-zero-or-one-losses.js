/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    matches = matches.sort((a,b) => a[1] - b[1])
    let win = []
    let lose = []
    let mapLose = new Map()
    for ( let i = 0; i<matches.length; i++) {
        mapLose.set(matches[i][1], (mapLose.get(matches[i][1]) || 0) + 1);
    }

    matches = matches.sort((a, b) => a[0] - b[0])
    for ( let i = 0; i<matches.length; i++) {
        if (!mapLose.get(matches[i][0]) && !win.includes(matches[i][0])) {
            win.push(matches[i][0])
        }
    }

    for ( let [key, value] of mapLose) {
        if (value == 1) {
            lose.push(key)
        }
    }
    return [win, lose]
};