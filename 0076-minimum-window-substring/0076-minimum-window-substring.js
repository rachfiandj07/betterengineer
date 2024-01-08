/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if ( t === '') return ""
    // let l = 0;
    // let r = 1;

    let mapT = new Map();
    let mapW = new Map();

    for ( let i = 0; i<t.length; i++) {
        if(!mapW.get(t[i])) {
            mapW.set(t[i], 1)
        } else {
            mapW.set(t[i], mapW.get(t[i]) + 1)
        }
    }

    let have = 0;
    let need = mapW.size
    
    let res = [-1, -1]
    let resLen = Infinity
    let l = 0

    for ( let i = 0; i<s.length; i++) {
        if (!mapT.get(s[i])) {
            mapT.set(s[i], 1)
        } else {
            mapT.set(s[i], mapT.get(s[i]) + 1)
        }
        if(mapW.has(s[i]) && mapT.get(s[i]) == mapW.get(s[i])) {
            have += 1
        }

        while(have == need) {
            // update result
            if (i - l + 1 < resLen) {
                res = [l, i]
                resLen = (i - l + 1)
            }
            // pop the window
            mapT.set(s[l], mapT.get(s[l]) - 1)
            if(mapW.has(s[l]) && mapT.get(s[l]) < mapW.get(s[l])) {
                have -= 1
            }
            l += 1
        }
    }
    console.log(res)
    return s.slice(res[0], res[1] + 1)
};