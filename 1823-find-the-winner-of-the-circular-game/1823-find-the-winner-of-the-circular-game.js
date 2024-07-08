/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    /*
        queue based approach
        time complexity -> O(N * K) -> K referring as counter clock wise removing
        space complexity -> O(N)
    */
    let i = 1
    let q = []
    while(i<=n) {
        q.push(i)
        i += 1
    }

    while(q.length > 1) {
        let delc = k - 1
        while(delc > 0) {
            q.push(q.shift())
            delc -= 1
        }
        q.shift()
    }

    return q[0]

};