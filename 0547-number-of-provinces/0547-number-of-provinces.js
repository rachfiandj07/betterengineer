/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let provinces = 0
    let visited = new Set()

    var dfs = function(idx) {
        for ( let i = 0; i<isConnected[idx].length; i++) {
            if (!visited.has(i) && isConnected[idx][i] == 1) {
                visited.add(i)
                dfs(i)
            }
        }
    }

    for ( let i = 0; i<isConnected.length; i++) {
        if (!visited.has(i)) {
            provinces += 1
            visited.add(i)
            dfs(i)
        }
    }

    return provinces
};