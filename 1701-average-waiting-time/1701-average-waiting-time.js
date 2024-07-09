/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let curr = 0
    let total_wait = 0

    for ( const c of customers) {
        let arrival = c[0]
        let time = c[1]

        if (curr < arrival) {
            curr = arrival
        }

        let wait_time = curr + time - arrival
        total_wait += wait_time

        curr += time
    }

    return total_wait / customers.length
};