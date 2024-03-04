/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    /*
        5
    */

    if (n <= 0 || head.val == null) return
    let fast = head
    let slow = head
    let count = 0

    while( count < n && fast !== null) {
        fast = fast.next
        count += 1
    }

    let prev = null

    while(fast !== null) {
        prev = slow
        slow = slow.next
        fast = fast.next
    }

    if (prev === null) {
        head = slow.next
    } else {
        prev.next = slow.next
    }

    return head
};