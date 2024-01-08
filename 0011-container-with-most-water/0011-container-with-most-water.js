/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let l = 0
    let r = height.length - 1
    // for ( let i = 0; i<height.length; i++) {
    //     for ( let j = i + 1; j<height.length; j++) {
    //         let area = (j - i) * Math.min(height[j], height[i])
    //         res = Math.max(area, res)
    //     }
    // }
    // return res
    while ( l <= r) {
        let area = (r - l) * Math.min(height[l], height[r])
        res = Math.max(area, res)
        if ( height[l] < height[r]) {
            l += 1
        } else {
            r -= 1
        }
    }
    return res
};