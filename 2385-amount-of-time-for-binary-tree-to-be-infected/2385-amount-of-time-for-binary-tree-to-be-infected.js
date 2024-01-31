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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    let distance = 0;

    var traverse = function(node, start) {
        let depth = 0
        if (!node) {
            return depth
        }

        let left = traverse(node.left, start)
        let right = traverse(node.right, start)

        if (node.val == start) {
            distance = Math.max(left, right)
            depth = -1
        } else if ( left >= 0 && right >= 0) {
            depth = Math.max(left, right) + 1
        } else {
            let dist = Math.abs(left) + Math.abs(right)
            distance = Math.max(distance, dist)
            depth = Math.min(left, right) - 1
        }

        return depth
    }

    traverse(root, start)
    return distance
};