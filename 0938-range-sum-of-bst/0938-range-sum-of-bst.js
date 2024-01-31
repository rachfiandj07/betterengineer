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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    /*
    order traversal
    let answer = low + high
    var traverse = function(node) {
        if (node !== null) {
            traverse(node.left)
            if ( node.val > low && node.val < high) {
                answer += node.val
            }
            traverse(node.right)
        }
    }
    traverse(root)
    return answer
    */
    
    if (!root) return 0

    let valid = 0

    if (root.val && root.val >= low && root.val <= high) {
        valid = root.val
    }

    return valid + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)

};