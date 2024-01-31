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
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    let res = 0
    var traverse = function(root, low, high) {
        if ( root == null) {
            res = Math.max(res, Math.abs(high - low))
            return
        }
        traverse(root.left, Math.min(low, root.val), Math.max(high, root.val))
        traverse(root.right, Math.min(low, root.val), Math.max(high, root.val))
    }
    
    traverse(root, root.val, root.val)
    return res
};