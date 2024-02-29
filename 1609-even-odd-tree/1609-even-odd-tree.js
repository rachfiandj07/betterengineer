/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if (!root) {
        return true
    }

    let queue = [root]
    let level = 0

    while(queue.length > 0) {
        let size = queue.length
        let previous = ( level % 2 === 0 ) ? -Infinity : Infinity

        for ( let i = 0; i<size; i++) {
            let node = queue.shift();

            if ((level % 2 === 0 && (node.val % 2 === 0 || node.val <= previous)) ||
                (level % 2 === 1 && (node.val % 2 === 1 || node.val >= previous))) {
                return false;
            }

            previous = node.val

            if ( node.left) {
                queue.push(node.left)
            }

            if ( node.right ) {
                queue.push(node.right)
            }
        }

        level += 1
    }

    return true
};