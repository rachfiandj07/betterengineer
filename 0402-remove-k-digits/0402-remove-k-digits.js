/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    /*
        1432219
        1122349
        1122
    */
    let stack = []
    let toDelete = 0
    for ( let value of num) {
        while(stack.length && value < stack[stack.length - 1] && toDelete < k) {
            stack.pop()
            toDelete += 1
        }
        stack.push(value)
    }

    while(toDelete < k) {
        stack.pop()
        toDelete += 1
    }

    while(stack.length && stack[0] === '0') {
        stack.shift()
    }

    return stack.length ? stack.join('') : '0'
};