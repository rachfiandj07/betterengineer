/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    /*
        traversal
    */
    var traverse = function(node, similar = []) {
        if ( node !== null) {

            if ( node.left == null && node.right == null) {
                similar.push(node.val)
            }

            traverse(node.left, similar)
            traverse(node.right, similar)

        }
        return similar
    }

    let similar1 = traverse(root1)
    let similar2 = traverse(root2)

    if ( similar1.length !== similar2.length) return false

    for ( let i = 0; i<similar1.length; i++) {
        if ( similar1[i] !== similar2[i]) return false
    }

    return true
};