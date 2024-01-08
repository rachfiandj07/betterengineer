/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    const operators = new Set(["+", "-", "*", "/"]);

    for (let token of tokens) {
        if (operators.has(token)) {
            let a = stack.pop();
            let b = stack.pop();
            switch (token) {
                case "+":
                    stack.push(b + a);
                    break;
                case "-":
                    stack.push(b - a);
                    break;
                case "*":
                    stack.push(b * a);
                    break;
                case "/":
                    stack.push(Math.trunc(b / a));
                    break;
            }
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack[0];
};