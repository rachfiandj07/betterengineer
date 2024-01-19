/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sortedScore = [...score].sort((a,b) => b - a)
    let map = {}
    for( let i =0; i<sortedScore.length; i++) {
        if (i == 0) {
            map[sortedScore[i]] = 'Gold Medal'
            continue;
        }
        if ( i == 1) {
            map[sortedScore[i]] = 'Silver Medal'
            continue;
        }
        if ( i == 2) {
            map[sortedScore[i]] = 'Bronze Medal'
            continue;
        }

        map[sortedScore[i]] = i + 1
    }

    for ( let i = 0; i<score.length; i++) {
        if (map[score[i]]) {
            score[i] = map[score[i]].toString()
        }
    }

    return score
};