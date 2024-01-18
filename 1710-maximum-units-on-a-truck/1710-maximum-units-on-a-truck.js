/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes = boxTypes.sort((a,b) => b[1] - a[1])
    let max = 0
    let size = truckSize
    for ( let i = 0; i<boxTypes.length; i++) {
        if ( size < boxTypes[i][0]) {
            max += size * boxTypes[i][1]
            size -= size
            return max
        }
        size -= boxTypes[i][0]
        max += (boxTypes[i][0] * boxTypes[i][1])
    }

    return max
};