/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    let thrice = {}
    let substring = []
    let longest = -1

    for ( let i = 0; i<s.length; i++) {
        for ( let j = i; j<s.length; j++) {
            if (s[i] == s[j]) {
                substring.push(s[i])
                let char = substring.join('')

                thrice[char] = ( thrice[char] || 0) + 1

                if (thrice[char] >= 3) longest = Math.max(longest, char.length)
            } else {
                break;
            }
        }

        substring = []
    }

    return longest
};