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
var pseudoPalindromicPaths  = function(root) {
    let count = {}
    let result = 0
    var traverse = function(node) {

        var palindrome = function() {
            let odd = 0;
            for ( let i = 1; i<=9; i++) {
                let iS = i.toString()
                if (count[iS] % 2 != 0 && count[iS] !== undefined) {
                    odd += 1
                }
            }

            if ( odd > 1) {
                return false
            }
            return true
        }
        if ( node == null) {
            return
        }

        if (count[node.val] == undefined) {
            count[node.val] = 1
        } else {
            count[node.val] = count[node.val] + 1
        }
        /*
            1 - 2 - 1 - 1 - 1
        */

        if (node.left == null && node.right == null) {
            if (palindrome()) {
                result += 1
            }
        } else {
            traverse(node.left)
            traverse(node.right)
        }

        count[node.val] = count[node.val] - 1
    }

    traverse(root)
    return result
};