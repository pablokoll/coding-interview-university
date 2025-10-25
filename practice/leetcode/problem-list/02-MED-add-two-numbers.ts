//   Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(); // Nodo fantasma para construir el resultado
    let current = dummy;
    let carry = 0;

    while (l1 !== undefined || l2 !== undefined || carry !== 0) {
        const val1 = l1?.val ?? 0;
        const val2 = l2?.val ?? 0;
        const sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10); // Llevo el "1" si hace falta
        current.next = new ListNode(sum % 10); // Nodo con el dígito actual
        current = current.next;

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }

    return dummy.next;
}
