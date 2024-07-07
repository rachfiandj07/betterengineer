/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let newNode = head.next
    let nextSum = newNode

    while(nextSum !== null) {
        let sum = 0

        while (nextSum.val !== 0) {
            sum += nextSum.val
            nextSum = nextSum.next
        }

        newNode.val = sum
        nextSum = nextSum.next

        newNode.next = nextSum
        newNode = newNode.next
    }

    return head.next
};