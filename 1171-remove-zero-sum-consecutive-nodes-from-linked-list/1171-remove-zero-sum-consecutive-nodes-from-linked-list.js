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
var removeZeroSumSublists = function(head) {
    /*
        first thought : 
        1, 2, -3, 3, 1
        2, 1 -3
        
        -3, 3
        1, 2, 1

        iterate all the linked list -> append to an array
        1x loop iterate dan cari prefix sum, where total is equal to 0

        
        second thought :
        map -> prefix_sum
        {
            0: [node]
            2: [node...]
            3: [node...]
        }
        // o(n + n)

        node 1 -> 2
        1 -> null
    */
    let dummy = new ListNode(0)
    dummy.next = head
    let sum = 0, map = new Map(), current = dummy

    while(current) {
        sum += current.val
        map.set(sum, current)
        current = current.next
    }

    current = dummy
    sum = 0

    while(current) {
        sum += current.val
        current.next = map.get(sum).next
        current = current.next
    }

    return dummy.next
};