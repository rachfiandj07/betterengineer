class countList {
    constructor() {
        this.counting = 0;
        this.tempRef = null;
    }
    count(list) {
        this.tempRef = list;
        while (this.tempRef) {
            this.counting += 1;
            this.tempRef = this.tempRef.next;
        }
        return this.counting;
    }
}
class Node {
    constructor(data, next = null) {
        this.val = data;
        this.next = next;
    }
}
var addTwoNumbers = function(l1, l2) {
    const l1Count = new countList().count(l1);
    const l2Count = new countList().count(l2);
    function startExploring(list1, list2, grace) {
        if (list1 === null && list2 === null) {
            return;
        }
        if (grace) {
            grace--;
            return startExploring(list1.next, list2, grace);
        } else {
            list1.val += list2.val;
            return startExploring(list1.next, list2.next, grace);
        }
    }
    function recursion(list) {
        let reminder = null;
        if (list === null) {
            return null;
        }
        let lastDigit = null;
        const rem = recursion(list.next);
        if (rem !== null) {
            list.val += rem;
            reminder = null;
        }
        if (list.val > 9) {
            lastDigit = list.val % 10;
            list.val = lastDigit;
            reminder = 1;
        }
        return reminder;
    }
    if (l1Count === l2Count || l1Count > l2Count) {
        startExploring(l1, l2, l1Count - l2Count);
        const rem = recursion(l1);
        if (rem !== null) {
            l1.val += rem * 10;
        }
        if (l1.val > 9) {
            const newNode = new Node(1);
            const modulus = l1.val % 10;
            l1.val = modulus;
            newNode.next = l1;
            return newNode;
        }
        return l1;
    } else {
        startExploring(l2, l1, l2Count - l1Count);
        const rem = recursion(l2);
        if (rem !== null) {
            l2.val += rem * 10;
        }
        if (l2.val > 9) {
            const newNode = new Node(1);
            const modulus = l2.val % 10;
            l2.val = modulus;
            newNode.next = l2;
            return newNode;
        }
        return l2;
    }
};