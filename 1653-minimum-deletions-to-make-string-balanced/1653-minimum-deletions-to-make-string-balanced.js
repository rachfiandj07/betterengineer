/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const stack = [];
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(stack.length && stack[stack.length-1].charCodeAt(0) > s[i].charCodeAt(0)) {
            count += 1;
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return count;
};