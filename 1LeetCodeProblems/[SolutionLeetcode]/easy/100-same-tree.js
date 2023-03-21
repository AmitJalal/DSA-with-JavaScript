const isSameTree = (p, q) => {
  if (p === null || q === null) {
    return p === q;
  }

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

export default isSameTree;
