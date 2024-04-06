/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let balance = 0
    let word = []
    let stack = []
    for ( let i = 0; i<s.length; i++) {
        if (s[i] !== ')' && s[i] !== '('){
            word.push(s[i])
        }

        if (s[i] === '(') {
            balance += 1
            word.push(s[i])
            stack.push(word.length - 1)
        } else if (s[i] === ')' && balance > 0) {
            balance -= 1
            word.push(s[i])
            stack.pop()
        }
    }

    if ( stack.length == 0 && balance == 0) return word.join('')
    for ( let i = 0; i<stack.length; i++) {
        word[stack[i]] = ""
    }

    return word.join('')
};