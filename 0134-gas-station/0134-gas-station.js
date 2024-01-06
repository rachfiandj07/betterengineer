/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // let routes = gas.map((_, i) => {
    //     return [gas[i], cost[i], i]
    // })
    let diff = gas.map((_, i) => {
        return gas[i] - cost[i]
    })
    let sumgas = gas.reduce((a, b) => a + b, 0)
    let sumcost = cost.reduce((a, b) => a + b, 0)

    if (sumgas < sumcost) {
        return -1
    }
    let total = 0
    let result = 0
    for ( let i = 0; i<diff.length; i++) {
        total += diff[i]
        if ( total < 0) {
            total = 0
            result = i + 1
        }
    }

    return result
    // 3 + 1 = 4
    // 4 - 3 = 1
    // 1 + 1 = 2
    // 2 - 2 = 0
    // routes = routes.sort((a, b) => a[1] - b[1])
    // let n = routes[0][0]
    // for ( let i = 1; i<routes.length; i++) {
    //     n -= routes[i-1][1]
    //     if ( n < 0) {
    //         return -1
    //     }
    //     n += routes[i][0]
    // }

    // return routes[0][2]
};