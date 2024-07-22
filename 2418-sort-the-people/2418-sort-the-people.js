/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let h = []
    for( let i = 0; i<names.length; i++) {
        h.push([names[i], heights[i]])
    }

    h.sort((a, b) => b[1] - a[1])
    for ( let i = 0; i<h.length; i++) {
        h[i] = (h[i][0])
    }
    return h
};