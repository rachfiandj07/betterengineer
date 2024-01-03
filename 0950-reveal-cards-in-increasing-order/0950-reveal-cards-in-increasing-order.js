/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    let sdeck = deck.sort((a,b) => b - a)
    let q = [sdeck.shift()]

    while (sdeck.length > 0) {
        q.unshift(q.pop())
        q.unshift(sdeck.shift())
    }

    return q
};