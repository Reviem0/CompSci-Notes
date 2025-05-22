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