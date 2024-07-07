/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    if (!head || !head.next || !head.next.next) return [-1, -1];

    let c = [];
    let prev = head;
    let curr = head.next;
    let position = 1;

    while (curr.next) {
        if ((curr.val > prev.val && curr.val > curr.next.val) || (curr.val < prev.val && curr.val < curr.next.val)) {
            c.push(position);
        }
        prev = curr;
        curr = curr.next;
        position++;
    }

    if (c.length < 2) {
        return [-1, -1];
    }

    let min = Infinity;
    let max = c[c.length - 1] - c[0];

    for (let i = 1; i < c.length; i++) {
        min = Math.min(min, c[i] - c[i - 1]);
    }

    return [min, max];
};