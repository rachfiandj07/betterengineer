/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var match = function(arr1, arr2) {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false
        }
        return true;
    }
    if (s1.length > s2.length) return false

    const countS1 = Array(26).fill(0)
    const countS2 = Array(26).fill(0)

    // fill the first window in s2 and s1
    for ( let i = 0; i< s1.length; i++) {
        countS1[s1.charCodeAt(i) - 97] += 1
        countS2[s2.charCodeAt(i) - 97] += 1
    }

    // slide window for s2
    for ( let i = s1.length; i < s2.length; i++) {
        if (match(countS1, countS2)) return true
        // slide window: remove the left character and add the right character
        countS2[s2.charCodeAt(i) - 97] += 1
        countS2[s2.charCodeAt(i - s1.length) - 97] -= 1
    }

    return match(countS1, countS2)
};