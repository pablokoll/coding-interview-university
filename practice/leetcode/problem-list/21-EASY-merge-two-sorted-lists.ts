// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy = new ListNode(); // Nodo ficticio para simplificar la lógica.
    let current = dummy;
    let h1 = list1;
    let h2 = list2;

    // Mientras ambas listas tengan elementos
    while (h1 !== null && h2 !== null) {
        if (h1.val <= h2.val) {
            current.next = h1;
            h1 = h1.next;
        } else {
            current.next = h2;
            h2 = h2.next;
        }
        current = current.next;
    }

    // Si alguna lista aún tiene nodos, los enlazamos
    if (h1 !== null) {
        current.next = h1;
    }
    if (h2 !== null) {
        current.next = h2;
    }

    // La lista fusionada comienza en dummy.next
    return dummy.next;
}
