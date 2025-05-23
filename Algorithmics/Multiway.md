# B-Trees
- B-trees are Balanced multiway trees for fast search, finding successors and predecessors, insert, delete, maximum. They are designed to keep related data close to eachother in disk memory to minimise retrieval time
minimum, etc.
![[Pasted image 20250523013543.png]]
- Structure:
	- Each node can have up to $M - 1$ keys and $M$ children
	- Minimizes disk I/O by storing related data close (aligned with disk block size)
- Performance:
	- Height: $\log_{M}(n)$, significantly reduces depth compared to binary trees $\log_{2}(n)$
	- Example: For $n = 10^{7}$, a B-Tree with $M = 200$ reduces depth ~$8$x vs a binary tree
- Rules:
	- Root has $2$ to $M$ children
	- Non-root nodes have $\left\lceil  \frac{M}{2}  \right\rceil$ to $M$ children.
	- All leaves at the same depth
- B-Tree vs B+ Tree:
	- B-Tree: Data in all nodes. No sequential access.
	- B+ Tree: Data only in leaves, leaves linked for sequential access. Faster searches and easier insertions/deletions
	- ![[Pasted image 20250523013621.png]]

# Tries
- Purpose: M