/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];

    for (let char of s) {
        if (char !== ']') {
            stack.push(char);
        } else {
            let current = stack.pop();
            let encodedString = '';
            while (current !== '[') {
                encodedString = current + encodedString;
                current = stack.pop();
            }

            let count = '';
            while (!isNaN(stack[stack.length - 1])) {
                count = stack.pop() + count;
            }

            stack.push(encodedString.repeat(parseInt(count)));
        }
    }

    return stack.join('');
};
