/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let queue = Array(senate.length).fill(0)
    let dCount = 0
    let rCount = 0
    let dBanCount = 0
    let rBanCount = 0

    for ( let i = 0; i<senate.length; i++) {
        let voter = senate[i]
        queue[i] = voter
        if ( voter === 'R') {
            rCount += 1
        } else {
            dCount += 1
        }
    }

    while(queue.length > 0 && dCount != 0 && rCount != 0) {
        let nextVote = queue.shift()
        if ( nextVote === 'R') {
            if (rBanCount > 0) {
                rBanCount -= 1
                rCount -= 1
            } else {
                dBanCount += 1
                queue.push(nextVote)
            }
        } else {
            if (dBanCount> 0) {
                dBanCount -=1
                dCount -= 1
            } else {
                rBanCount += 1
                queue.push(nextVote)
            }
        }
    }

    return rCount == 0 ? "Dire" : "Radiant"
    // console.log(dCount, rCount)
};