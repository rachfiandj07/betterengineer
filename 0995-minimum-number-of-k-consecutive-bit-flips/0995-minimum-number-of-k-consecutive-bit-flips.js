/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    /*
        [0,0,0,1,0,1,1,0], k = 3
        q1 = [1, 1, 1]
        nums = [1, 0, 1, 1, 0]
        q1 = [1, 1, 1, 0, 0, 0]
        nums [1, 0]
        q1  = [1, 1, 1, 0, 0, 0, 0, 0]
    */
    let track = 0
    let flipc = Array(nums.length).fill(0)
    let res = 0
    console.log(flipc)

    for ( let i = 0; i<nums.length; i++) {
        if (i>=k) {
            track ^= flipc[i-k]
        }
        if (track == nums[i]) {
            if ( i + k > nums.length) {
                return -1
            }
            flipc[i] = 1
            track ^= 1
            res += 1
        }
    }

    return res
    // let q1 = []
    // let q2 = []
    // let i = 0
    // while (i < nums.length) {
    //     let v = k
    //     while(v != 0 && nums[i] != 1) {
    //         nums.shift()
    //         q1.push(1)
    //         v -= 1
    //     }
    //     i += 1
    // }
    // console.log(q1, nums, i)
};