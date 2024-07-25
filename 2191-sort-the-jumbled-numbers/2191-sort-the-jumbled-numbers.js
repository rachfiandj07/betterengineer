/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    let j = []
    let m = {}
    for ( let i = 0; i<nums.length; i++) {
        m[nums[i]] = i
    }
    let t = nums.map(num => {

        return num.toString().split('').map(d => parseInt(d, 10))
    })
    for (let i = 0; i<t.length; i++) {
        let y = ''
        for ( let x = 0; x<t[i].length; x++) {
            y += mapping[t[i][x]]
        }
        j.push(parseInt(y, 10))
        y = ''
    }
    nums.sort((a, b) => {
        let freqA = j[m[a]]
        let freqB = j[m[b]]

        if (freqA !== freqB) {
            return freqA - freqB
        }
    })

    return nums
};