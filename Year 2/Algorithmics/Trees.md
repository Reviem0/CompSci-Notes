# Trees
- Definition: Hierarchical data structure with nodes connected to edges 
	- Root: Topmost node
	- Level: Distance from the root (root = level 0)
	- Height: Number of levels (e.g. height 3 -> levels 0,1,2)

# Binary Trees
- Structure: Each node has $\leq$ 2 children (`left/right`)
- Key Formulas
	- Nodes at level $l: 2^{l}$
	- Total nodes in full tree of height $h: 2^{h} - 1$
- **Applications**: Expression trees (e.g. $(4+y)*(2*(2+x))$)

# Binary Search Trees (BST)
- Properties:
	- Left subtree < root < right subtree (recursively)
	- No duplicates allowed
- Operations:
	- Search: Start at root, compare and traverse left/right
	- Insert: Navigate to correct position, add new leaf
	- Inorder Traversal: Visit nodes in sorted order (left $\to$ root $\to$ right)
![[Pasted image 20250522220149.png]]
- **Time Complexity**
	- Search/Insert: $O(h)$ where $h = \text{ tree height}$
	- Worst case (skewed tree): $O(n)$; best case (balanced): $O(\log n)$
# Implementing a Set with BST
- Set ADT: Stores unique elements, no order.
- BST Advantages: Fast membership checks (Using BST properties)

# Tree Iterators
- InOrder Traversal:
	- Recursive: Easy but uses implicit call stack
	- Iterative: Explicit stack to track nodes (avoids recursion limits)
To iterate through the elements we start in the left-most branch.
To find the successor of the current node we follow two rules
	1. If right child exists, Go right, then leftmost.
	2. Else: move up to the first ancestor where current node is a left child
```java
// Node Class
public class Node<T> {
    private T element;
    private Node<T> left, right, parent;
}

// BST search
private Node<E> getNode(Object obj) {
    Node<E> e = root;
    while (e != null) {
        int comp = ((Comparable)obj).compareTo(e.element);
        if (comp == 0) return e;
        else if (comp < 0) e = e.left;
        else e = e.right;
    }
    return null;
}
```
