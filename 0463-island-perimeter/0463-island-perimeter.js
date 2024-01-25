/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let row = grid.length, col = grid[0].length
    let perimeter = 0;
    for ( let i =0; i<grid.length; i++) {
        for ( let j = 0; j<grid[0].length; j++) {
            if (grid[i][j] == 1) {
                perimeter += 4
                if(i>0 && grid[i-1][j]==1) perimeter--;
                if(i<row-1 && grid[i+1][j]==1) perimeter--;
                if(j>0 && grid[i][j-1]==1) perimeter--;
                if(j<col-1 && grid[i][j+1]==1) perimeter--;
            }
        }
    }

    return perimeter
};