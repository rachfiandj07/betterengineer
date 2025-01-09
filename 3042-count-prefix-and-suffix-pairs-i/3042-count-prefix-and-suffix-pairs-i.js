/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let res = 0
    for ( let i = 0; i<words.length; i++) {
        for ( let j = i + 1; j<words.length; j++) {
            if (words[i].length > words[j].length) continue

            if (words[j].includes(words[i]) && words[j].startsWith(words[i])) {
                res += 1
            }
        }
    }

    return res
};