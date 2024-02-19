/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = []
    let builder = []
    for ( let i = 0; i<s.length; i++) {
        if (s[i] === ')') {
            let value = stack.pop()
            while(value !== '(') {
                builder.push(value)
                value = stack.pop()
            }

            while(builder.length) {
                stack.push(builder.shift())
            }
        } else {
            stack.push(s[i])
        }
    }

    return stack.join('')
};