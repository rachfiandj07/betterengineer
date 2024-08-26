/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let res = []
    let stack = [root]

    while(stack.length) {
        let c = stack.pop()
        if (!c) continue
        res.push(c.val)
        stack.push(...c.children)
    }

    return res.reverse()
    // var traverse = function(root, result = [], level = 0) {
    //     if ( root != null) {

    //         if (!result[level]) {
    //             result[level] = []
    //         }
    //         result[level].push(root.val)
    //         for ( let val of root.children) {
    //             traverse(val, result, level + 1)
    //         }
    //         // traverse(root.children, result)
    //     }

    //     return result
    // }

    // let res = traverse(root)
};