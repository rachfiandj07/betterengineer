/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let node = head
    let reverse = []
    while(node) {
        reverse.push(node.val)
        node = node.next
    }

    if ( reverse.length < 2) return true

    while(reverse.length > 1) {
        let f = reverse.pop()
        let b = reverse.shift()
        if ( f !== b) {
            return false
        }
    }

    return true
};