/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let set = new Set(vowels)
    let mid = Math.floor(s.length / 2)

    let split1 = s.substring(0, mid)
    let split2 = s.substring(mid)

    let vowels1 = 0
    let vowels2 = 0
    for ( let i = 0; i<split1.length; i++) {
        if (set.has(split1[i])){
            vowels1 += 1
        }
        if (set.has(split2[i])) {
            vowels2 += 1
        }
    }

    if (vowels1 === vowels2) {
        return true
    } else {
        return false
    }
};