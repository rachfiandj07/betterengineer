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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    /*
        inorder traversal 
        [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
        [8,15,21,26,30,33,35,36,36]
    */
    let sum = 0
    var traverse = function(node) {
        if ( node != null) {
            traverse(node.right)
            sum += node.val
            node.val = sum
            traverse(node.left)
        }
    }
    traverse(root)
    return root
};