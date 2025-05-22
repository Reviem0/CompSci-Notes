# Deletion in Binary Search Tree
- Leaf Node: Simply remove it and update the parent's reference to null
- One Child: Replace the node with its child and update parent-child links
- Two Children:
	1. Find the successor
	2. Replace the node's value with the successor's value.
	3. Delete the successor (which will be a leaf or have one child)
# Balancing Trees with Rotations
- Purpose: Maintain logarithmic height for efficient operations.
- Single Rotations:
	- Left Rotation: Fixes right-heavy imbalance
	- Right Rotation: Fixes left-heavy imbalance
- Double Rotation:
	- Left-Right: Rotate left child left, then node right
	- Right-Left: Rotate right child right, then node left
- When to rotate: Detect imbalance via balance factors and apply rotations to restore balance.
![[Pasted image 20250522231244.png]]
![[Pasted image 20250522231814.png]]
# AVL Trees
- **Balance Factor**: $\text{height}(\text{left subtree}) - \text{height}(\text{right subtree}))$. Must be `-1`, `0` or `1`
- Rebalancing:
	- After insertion/deletion, update balance factors upward
	- If imbalance (`|balance| > 1`), perform rotations:
		- Left-Left or Right-Eight
		- Left-Right or Right-Left
	- Stop rebalancing once a subtree's balance factor is `0`
- Performance:
	- Insertion/deletion/search: $0(\log n)$ due to enforced balance
	- Height is $O(\log n)$ 
- 
