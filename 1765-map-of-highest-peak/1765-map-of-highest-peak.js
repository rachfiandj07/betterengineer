/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    let queue = []
    let row = isWater.length
    let col = isWater[0].length
    let visited = new Set()
    
    let ans = new Array(row).fill().map(() => new Array(col).fill(-1))
    for ( let i = 0; i<row; i++) {
        for ( let j = 0; j<col; j++) {
            if (isWater[i][j] === 1) {
                queue.push([i, j])
                visited.add(`${i},${j}`)
                ans[i][j] = 0
            }
        }
    }
    
    // classic bfs
    while (queue.length !== 0) {
        const nextQueue = [];

        for (const [r, c] of queue) {
            let h = ans[r][c];
            let adjacentN = [[r + 1, c], [r, c + 1], [r - 1, c], [r, c - 1]];

            // Fill the gap
            for (const [nr, nc] of adjacentN) {
                if (nr < 0 || nc < 0 || nr === row || nc === col || visited.has(`${nr},${nc}`)) continue;
                nextQueue.push([nr, nc]);
                visited.add(`${nr},${nc}`);
                ans[nr][nc] = h + 1;
            }
        }

        queue = nextQueue; // Replace the old queue with the new one
    }

    return ans
};