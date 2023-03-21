const mergeTwoLists = (l1, l2) => {
  const head = { next: null };
  let current = head;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      current.next = l2;
      l2 = l2.next;
    } else {
      current.next = l1;
      l1 = l1.next;
    }

    current = current.next;
  }

  current.next = l1 || l2;

  return head.next;
};

export default mergeTwoLists;
