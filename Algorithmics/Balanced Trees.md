# Deletion in Binary Search Tree
- Leaf Node: Simply remove it and update the parent's reference to null
- One Child: Replace the node with its child and update parent-child links
- Two Children:
	1. Find the successor
	2. Replace the node's 