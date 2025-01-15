/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    if (s.length < 3) return s.length
    let freq = {}
    for ( const char of s) {
        freq[char] = (freq[char] + 1) || 1
    }
    let result = 0
    console.log(freq)
    for ( const key of Object.keys(freq)) {
        if (freq[key] >= 3 && freq[key] % 2 == 1) {
            result += 1
        } else if (freq[key] >= 3 && freq[key] % 2 == 0){
            result += 2
        } else {
            result += freq[key]
        }
    }

    return result
};