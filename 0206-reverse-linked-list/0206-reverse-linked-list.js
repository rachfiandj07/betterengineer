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
var reverseList = function(head) {
    let new_list = null
    let current = head
    while(current) {
        let next_node = current.next
        current.next = new_list
        new_list = current
        current = next_node
    }

    return new_list
};