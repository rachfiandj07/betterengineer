/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    /*
        4,5,6,7 -> 
        4 -> 20
        5 -> 20
        6 -> 30
        7 -> 30
    */
    let maxProfits = 0

    let wi = 0 
    let jobs = []
    for ( let i = 0; i<difficulty.length; i++) {
        jobs.push([difficulty[i], profit[i]])
    }
    jobs.sort((a, b) => a[0] -b[0])
    worker.sort((a, b) => a - b)
    let ans = 0
    // difficulty.sort((a, b) => a - b)
    // worker.sort((a,b) => a - b)
    for ( let i = 0; i<worker.length; i++) {
        while(wi < jobs.length && jobs[wi][0] <= worker[i]) {
            maxProfits = Math.max(maxProfits, jobs[wi][1])
            wi += 1
        }
        ans += maxProfits
    }

    return ans
};