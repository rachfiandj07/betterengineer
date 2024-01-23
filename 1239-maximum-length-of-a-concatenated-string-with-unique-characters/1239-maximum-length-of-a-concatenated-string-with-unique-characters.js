/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let res = [0]

    var bc = function(path, idx) {
        var isUniq = function(s) {
            let set = new Set();
            for (let c of s) {
                if (set.has(c)) {
                    return false;
                }
                set.add(c);
            }
            return true
        }
        if (isUniq(path)) {
            res[0] = Math.max(res[0], path.length)
        }

        if (idx === arr.length) {
            return
        }

        for ( let i = idx; i<arr.length; i++) {
            bc(path + arr[i], i+1, res)
        }
    }
    bc("", 0, res)
    return res
};