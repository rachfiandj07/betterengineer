/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let answer = []
    let set = new Set();

    for ( let value of nums) {
        if (set.has(value)) {
            answer.push(value)
        } else {
            set.add(value)
        }
    }

    return answer
};