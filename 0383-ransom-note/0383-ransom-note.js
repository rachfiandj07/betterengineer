/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();

    for (const char of magazine) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        if (!map.has(char) || map.get(char) === 0) {
            return false
        } else {
            map.set(char, map.get(char) - 1)
        }
    }

    return true
};