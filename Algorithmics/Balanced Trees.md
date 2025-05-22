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
	- Rotate left child left, then