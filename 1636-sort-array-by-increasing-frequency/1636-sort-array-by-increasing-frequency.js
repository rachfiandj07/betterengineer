/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = {}
    for (let i = 0; i<nums.length; i++) {
        map[nums[i]] = (map[nums[i]] ?? 0) + 1;
    }
    nums.sort((a, b) => {
        let freqA = map[a]
        let freqB = map[b]

        if (freqA !== freqB) {
            return freqA - freqB
        } else {
            return b - a
        }
    })

    return nums
};
