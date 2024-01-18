/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    for ( let i = 0; i<capacity.length; i++) {
        capacity[i] = capacity[i] - rocks[i]
    }

    let max = 0
    capacity.sort((a, b) => a - b)
    for ( let i = 0; i<capacity.length; i++) {
        if (capacity[i] <= additionalRocks && capacity[i] > 0 && additionalRocks !== 0) {
            additionalRocks -= capacity[i]
            capacity[i] = capacity[i] - capacity[i]
        }  
        
        if ( capacity[i] == 0) {
            max += 1
        }
    }
    return max
};