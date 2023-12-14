/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let plant = 0;

    for ( let i = 0; i<flowerbed.length; i++) {
        let p = i - 1
        let n = i + 1

        if (!flowerbed[p] && !flowerbed[i] && !flowerbed[n]) {
            plant += 1
            flowerbed[i] = 1
        }
    }

    return plant >= n
    // if (flowerbed.length == 1) {
    //     if (flowerbed[0] == 0) {
    //         return true
    //     }
    // }
    // let flow = flowerbed[0]
    // let plant = 0
    // for ( let i = 1; i<flowerbed.length; i++) {
    //     if (flow == 1 && flowerbed[i] == 0 || flow == 0 && flowerbed[i] == 1) {
    //         flow = flowerbed[i]
    //         continue;
    //     } else if ( flow == 1 && flowerbed[i] == 1) {
    //         // return false
    //         continue;
    //     } else if ( flow == 0 && flowerbed[i] == 0) {
    //         flowerbed.splice(i, 1, 1)
    //         //     return false
    //         // }
    //         plant += 1
    //         flow = flowerbed[i]
    //     } 
    // }
    // console.log(flowerbed)

    // if (plant == n) {
    //     return true
    // } else {
    //     return false
    // }
    // if ( n >= 1) {
    //     return false
    // } else {
    //     return true
    // }
};