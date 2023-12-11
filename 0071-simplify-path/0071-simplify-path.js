/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let simplified = ""
    for ( let i = 0; i<path.length; i++) {
        if ( path[i] === '/') {
            console.log(simplified)
            if ( simplified === '..') {
                stack.pop()
            } else if ( simplified !== '' && simplified !== '.'){
                stack.push(simplified)
            }
        simplified = ""
        } else {
            simplified += path[i]
        }
    }
    if ( simplified == '..') {
        stack.pop()
    } else if (simplified.match(/[a-zA-Z]/) || simplified === '...') {
        stack.push(simplified)
    }
    console.log(stack, "asu", simplified)
    let canonical = '/' + stack.join('/')
    return canonical

    // let stack = [];
    // let canonical = "";
    // for ( let i = 0; i<path.length; i++) {
    //     console.log(path[i])
    //     if (path[i] === '/') {
    //         stack.push(path[i])
    //         canonical += " "
    //     } else if (path[i] === '.') {
    //         stack.push(path[i])
    //     } else if (alphabet.includes(path[i])){
    //         canonical += path[i]
    //     }
    // }

    // let arranged = ""
    // console.log(canonical, stack)
    // for ( let i = 0; i<canonical.length; i++) {
    //     let value = stack.pop();
    //     if (value !== undefined) {
    //         if (arranged[i-1] !== value && canonical[i] === " ") {
    //             if ( i !== canonical.length-1) {
    //                 arranged += value
    //             }
    //         }
    //         stack.push(value)
    //     }
    //     if (canonical[i] !== " ") {
    //         arranged += canonical[i]
    //     }
    // }
    // return arranged
};