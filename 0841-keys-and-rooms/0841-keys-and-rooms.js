/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {

    const visited = new Set();

    var dfs = function(i){
        if(visited.has(i)) return
        visited.add(i)
        for(const key of rooms[i]) {
            dfs(key);
        }
    }

    dfs(0);

    return visited.size === rooms.length ? true : false
};