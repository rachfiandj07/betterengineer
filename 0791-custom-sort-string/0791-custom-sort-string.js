/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let letters = new Set(order);
    let map = new Map();
    let orderedString = "";

    for (let i = 0; i < s.length; i++) {
        if (letters.has(s[i])) {
            map.set(s[i], (map.get(s[i]) || "") + s[i]);
        } else {
            orderedString += s[i];
        }
    }
    
    for (let letter of letters) {
        orderedString += (map.get(letter) || "");
    }

    return orderedString;
};