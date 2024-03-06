//  Definition for singly-linked list.
class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0)
  dummy.next = head

  let first: ListNode | null = dummy
  let second: ListNode | null = dummy

  for(let i = 0; i < n + 1; i++) {
      first = first?.next ?? null
  }

  while(first !== null) {
      first = first?.next || null
      second = second?.next || null
  }

  if(second) second.next = second?.next?.next || null

  return dummy.next
};
