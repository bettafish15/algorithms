import { MinPriorityQueue } from "@datastructures-js/priority-queue";

//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const queue = new MinPriorityQueue((object: ListNode) => object.val);

  for (let i = 0; i < lists.length; i++) {
    if (!!lists[i]) {
      queue.enqueue(lists[i]!);
    }
  }

  console.log(queue);

  let dummy = new ListNode();
  let tail: ListNode | null = dummy;

  while (!queue.isEmpty()) {
    const element = queue.dequeue();
    tail!.next = element;
    tail = tail?.next || null;

    if (!!tail?.next) {
      queue.enqueue(tail.next);
    }
  }

  return dummy.next;
}
