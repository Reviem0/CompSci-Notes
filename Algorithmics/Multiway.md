# B-Trees
- B-trees are Balanced multiway trees for fast search, finding successors and predecessors, insert, delete, maximum. They are designed to keep related data close to eachother in disk memory to minimise retrieval time
minimum, etc.
- Structure:
	- Each node can have up to $M - 1$ keys and $M$ children
	- Minimizes disk I/O by storing related data close (aligned with disk block size)
- Perfo