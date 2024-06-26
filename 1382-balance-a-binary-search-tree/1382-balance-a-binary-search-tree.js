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
var balanceBST = function(root) {
    /*
        inorder traversal
    */
    let result = [];
    var traverse = function (node) {
        if (!node) return;
        traverse(node.left);
        result.push(node);
        traverse(node.right);
    }

    const buildTree = function (start, end) {
        if (start >= end) return null;
        let mid = Math.floor((start + end) / 2);
        let cur = result[mid];
        cur.left = buildTree(start, mid);
        cur.right = buildTree(mid + 1, end);
        return cur;
    }

    traverse(root);
    return buildTree(0, result.length);
};